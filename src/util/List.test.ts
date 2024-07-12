import { expectRandom } from "../test/lib/expectRandom.js";
import { List } from "./List.js";

const twoValues = ["Item 1", "Item 2"] as const;
const twoItems = [
    {
        value: twoValues[0],
        restrict: ["one", "two"]
    },
    {
        value: twoValues[1],
        restrict: ["two", "three"]
    }
];

const pickList = [
    "always picked",
    {
        pick: 1,
        items: ["first item", "second item"]
    },
    {
        pick: 1,
        items: []
    },
    {
        pick: 1,
        items: []
    }
] as const;

test("List checks for duplicate values", () => {
    expect(() => {
        new List([
            {
                value: "one"
            },
            {
                value: "two"
            },
            {
                value: "one"
            }
        ]);
    }).toThrow();
});

test("List.pickList() takes items correctly", () => {
    const item1Results = new Map<string, number>();
    const item2Results = new Map<string, number>();
    const tests = 1e3;

    for (let i = 0; i < tests; i++) {
        const [item1, item2] = List.pickList(pickList);

        if (item1) {
            item1Results.set(item1, (item1Results.get(item1) ?? 0) + 1);
        }
        if (item2) {
            item2Results.set(item2, (item2Results.get(item2) ?? 0) + 1);
        }
    }

    expect(item1Results.size).toEqual(1);
    expect(item1Results.has(pickList[0])).toBeTruthy();
    expect(item1Results.get(pickList[0])).toEqual(tests);

    expect(item2Results.size).toEqual(2);
    expect(item2Results.has(pickList[1].items[0])).toBeTruthy();
    expect(item2Results.has(pickList[1].items[1])).toBeTruthy();

    expectRandom(item2Results.get(pickList[1].items[0]) ?? 0, tests, 1 / 2);
    expectRandom(item2Results.get(pickList[1].items[1]) ?? 0, tests, 1 / 2);
});

test("List.pickList() skips undefined items", () => {
    const result = List.pickList(["always picked", undefined, "always picked"]);

    expect(result.length).toEqual(2);
});

test("List.pickList() calls onPick on pick/empty", () => {
    let isPicked = false;
    let isEmpty = false;

    const picked = List.pickList(pickList, (item?: string) => {
        if (item) {
            isPicked = true;
        } else {
            isEmpty = true;
        }

        return [];
    });

    expect(isPicked).toBeTruthy();
    expect(isEmpty).toBeTruthy();
    expect(picked.length).toEqual(2);
    expect(picked[0]).toEqual("always picked");
    expect(picked[1]).toMatch(/(first|second) item/);
});

test("List.pickList() calls onPick on empty to substitute", () => {
    const picked = List.pickList(pickList, (item?: string) => {
        if (!item) {
            return ["onPick item"];
        }

        return [];
    });

    expect(picked.length).toEqual(4);
    expect(picked[0]).toEqual("always picked");
    expect(picked[1]).toMatch(/(first|second) item/);
    expect(picked[2]).toEqual("onPick item");
    expect(picked[3]).toEqual("onPick item");
});

test("List.createList() creates a new list from an array", () => {
    const twoItemList = new (List.createList(twoItems))();

    expect(twoItemList).toBeInstanceOf(List);
    expect(twoItemList.item.size).toEqual(2);
});

test("List weight is calculated when set or unset", () => {
    const twoItemList = new (List.createList([
        {
            value: "one"
        },
        {
            value: "two",
            weight: 2
        }
    ]))();

    expect(twoItemList.weight).toEqual(3);
});

test("List.pick() should throw on empty", () => {
    expect(() => {
        new (List.createList([]))().pick();
    }).toThrow();
});

test("List.pick() picks a random item", () => {
    const tests = 1e3;
    const results = new Map();
    const twoItemList = new (List.createList(twoItems))();

    for (let i = 0; i < tests; i++) {
        const result = twoItemList.pick();

        results.set(result, (results.get(result) ?? 0) + 1);
    }

    expect(results.size).toEqual(2);
    expect(results.has(twoValues[0])).toBeTruthy();
    expect(results.has(twoValues[1])).toBeTruthy();
    expectRandom(results.get(twoValues[0]) ?? 0, tests, 1 / 2);
    expectRandom(results.get(twoValues[1]) ?? 0, tests, 1 / 2);
});

test("List.pick() onPick replaces value", () => {
    const onPickList = new (List.createList([
        {
            value: "static value",
            onPick() {
                return "dynamic value";
            }
        }
    ]))();

    expect(onPickList.pick()).toEqual("dynamic value");
});

test("List.pick() handles weighted items", () => {
    const twoItemList = new (List.createList([
        {
            value: "one"
        },
        {
            value: "two",
            weight: 2
        }
    ]))();
    const results = new Map();
    const tests = 1e3;

    for (let i = 0; i < tests; i++) {
        const result = twoItemList.pick();

        results.set(result, (results.get(result) ?? 0) + 1);
    }

    expect(results.size).toEqual(2);
    expect(results.has("one")).toBeTruthy();
    expect(results.has("two")).toBeTruthy();
    expectRandom(results.get("one") ?? 0, tests, 1 / 3);
    expectRandom(results.get("two") ?? 0, tests, 2 / 3);
});

test("List.getItems() should return all items", () => {
    expect(new (List.createList(twoItems))().getItems()).toEqual(twoItems);
});

test("List.getValues() should return all values", () => {
    expect(new (List.createList(twoItems))().getValues()).toEqual(twoValues);
});

test("List.filter(function) returns a new subset List", () => {
    const twoItemList = new (List.createList(twoItems))();
    const oneItemList = twoItemList.filter(item => item.value === twoValues[0]);

    expect(oneItemList).toBeInstanceOf(List);
    expect(oneItemList.item.size).toEqual(1);
    expect(oneItemList.item.has(twoValues[0])).toBeTruthy();
});

test("List.filter(object primitive) returns a new subset List", () => {
    const twoItemList = new (List.createList(twoItems))();
    const oneItemList = twoItemList.filter({
        value: twoValues[0]
    });

    expect(oneItemList).toBeInstanceOf(List);
    expect(oneItemList.item.size).toEqual(1);
    expect(oneItemList.item.has(twoValues[0])).toBeTruthy();
});

test("List.filter(object array) returns a new subset List", () => {
    const twoItemList = new (List.createList(twoItems))();
    const oneItemList = twoItemList.filter({
        restrict: "one"
    });

    expect(oneItemList).toBeInstanceOf(List);
    expect(oneItemList.item.size).toEqual(1);
    expect(oneItemList.item.has(twoValues[0])).toBeTruthy();
});

test("List.filter(object object) returns a new subset List", () => {
    const twoItemList = new (List.createList([
        {
            string: {
                value1: "Something",
                value2: "Something Else"
            },
            number: {
                1: "Something",
                2: "Something Else"
            },
            value: "something"
        },
        {
            string: {
                value2: "Something Old",
                value3: "Something New"
            },
            number: {
                2: "Something Old",
                3: "Something New"
            },
            value: "something different"
        }
    ]))();

    const stringItemList = twoItemList.filter({
        string: "value1"
    });
    expect(stringItemList).toBeInstanceOf(List);
    expect(stringItemList.item.size).toEqual(1);
    expect(stringItemList.item.has("something")).toBeTruthy();

    const numberItemList = twoItemList.filter({
        number: 3
    });
    expect(numberItemList).toBeInstanceOf(List);
    expect(numberItemList.item.size).toEqual(1);
    expect(numberItemList.item.has("something different")).toBeTruthy();
});

test("List.filter(object) returns a cached subset List", () => {
    const twoItemList = new (List.createList(twoItems))();
    const oneItemList = twoItemList.filter({
        value: twoValues[0]
    });
    const oneItemList2 = twoItemList.filter({
        value: twoValues[0]
    });

    expect(oneItemList.id).toEqual(oneItemList2.id);
});

test("List.map(callback) returns a new list", () => {
    const twoItemList = new (List.createList(twoItems))().map(item => {
        return {
            ...item,
            value: `${item.value}!`
        };
    });

    expect(twoItemList.pick()).toMatch(/Item (1|2)!/);
});
