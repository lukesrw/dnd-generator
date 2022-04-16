import { List } from "./List";

test("Pick List doesn't duplicate (list)", () => {
    let randomItems = 50;
    let items = List.pickList([
        {
            pick: 1000,
            items: new Array(randomItems).fill(null).map((_, i) => i.toString())
        }
    ]);

    expect(new Set(items).size).toEqual(randomItems);
});

test("Pick List doesn't duplicate (callback)", () => {
    let randomItems = 50;
    let items = List.pickList(
        [
            {
                pick: 1000,
                items: []
            }
        ],
        () => new Array(randomItems).fill(null).map((_, i) => i.toString())
    );

    expect(new Set(items).size).toEqual(randomItems);
});

test("getFiltered 50/50 Test (any)", () => {
    let runFor = 10;

    let item1 = { maturity: "adult", value: "One" };
    let item2 = { value: "Two" };

    let list = new List<{ classes: string[] }>([item1, item2]);

    let pick1SeenItem1 = false;
    let pick1SeenItem2 = false;
    let pick2SeenItem1 = false;
    let pick2SeenItem2 = false;

    let shouldGetBoth = {
        maturity: "adult"
    };

    let shouldGetOne = {
        maturity: "elder"
    };

    let i = 0;
    for (i; i < runFor; i += 1) {
        let pick1 = list.pickRandom(shouldGetBoth);

        if (pick1 === item1.value) pick1SeenItem1 = true;
        if (pick1 === item2.value) pick1SeenItem2 = true;

        if (pick1SeenItem1 && pick1SeenItem2) break;
    }

    expect(pick1SeenItem1).toBeTruthy();
    expect(pick1SeenItem2).toBeTruthy();

    for (i = 0; i < runFor; i += 1) {
        let pick2 = list.pickRandom(shouldGetOne);

        if (pick2 === item1.value) pick2SeenItem1 = true;
        if (pick2 === item2.value) pick2SeenItem2 = true;

        if (pick2SeenItem1 && pick2SeenItem2) break;
    }

    expect(pick2SeenItem1).toBeFalsy();
    expect(pick2SeenItem2).toBeTruthy();
});

test("getFiltered 50/50 Test (classes)", () => {
    let runFor = 10;

    let item1 = { classes: ["Druid"], value: "One" };
    let item2 = { value: "Two" };

    let list = new List<{ classes: string[] }>([item1, item2]);

    let pick1SeenItem1 = false;
    let pick1SeenItem2 = false;
    let pick2SeenItem1 = false;
    let pick2SeenItem2 = false;

    let shouldGetBoth = {
        classes: [{ name: item1.classes[0], level: 1 }]
    };

    let shouldGetOne = {
        classes: [{ name: "Fighter", level: 1 }]
    };

    let i = 0;
    for (i; i < runFor; i += 1) {
        let pick1 = list.pickRandom(shouldGetBoth);

        if (pick1 === item1.value) pick1SeenItem1 = true;
        if (pick1 === item2.value) pick1SeenItem2 = true;

        if (pick1SeenItem1 && pick1SeenItem2) break;
    }

    expect(pick1SeenItem1).toBeTruthy();
    expect(pick1SeenItem2).toBeTruthy();

    for (i = 0; i < runFor; i += 1) {
        let pick2 = list.pickRandom(shouldGetOne);

        if (pick2 === item1.value) pick2SeenItem1 = true;
        if (pick2 === item2.value) pick2SeenItem2 = true;

        if (pick2SeenItem1 && pick2SeenItem2) break;
    }

    expect(pick2SeenItem1).toBeFalsy();
    expect(pick2SeenItem2).toBeTruthy();
});

test("getFiltered 50/50 Test (multiple classes)", () => {
    let runFor = 10;

    let item1 = { classes: ["Druid", "Fighter"], value: "One" };
    let item2 = { value: "Two" };

    let list = new List<{ classes: string[] }>([item1, item2]);

    let pick1SeenItem1 = false;
    let pick1SeenItem2 = false;
    let pick2SeenItem1 = false;
    let pick2SeenItem2 = false;

    let shouldGetBoth = {
        classes: [{ name: item1.classes[0], level: 1 }]
    };

    let shouldGetOne = {
        classes: [
            { name: "Druid", level: 1 },
            { name: "Bard", level: 1 }
        ]
    };

    let i = 0;
    for (i; i < runFor; i += 1) {
        let pick1 = list.pickRandom(shouldGetBoth);

        if (pick1 === item1.value) pick1SeenItem1 = true;
        if (pick1 === item2.value) pick1SeenItem2 = true;

        if (pick1SeenItem1 && pick1SeenItem2) break;
    }

    expect(pick1SeenItem1).toBeTruthy();
    expect(pick1SeenItem2).toBeTruthy();

    for (i = 0; i < runFor; i += 1) {
        let pick2 = list.pickRandom(shouldGetOne);

        if (pick2 === item1.value) pick2SeenItem1 = true;
        if (pick2 === item2.value) pick2SeenItem2 = true;

        if (pick2SeenItem1 && pick2SeenItem2) break;
    }

    expect(pick2SeenItem1).toBeFalsy();
    expect(pick2SeenItem2).toBeTruthy();
});
