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
