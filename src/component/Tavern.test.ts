import { List } from "../util/List.js";
import { NPC } from "./NPC.js";
import { Tavern } from "./Tavern.js";

test("Tavern maturities available", () => {
    expect(Tavern.MATURITIES.items.length).toBeGreaterThan(0);
});

test("Tavern professions available", () => {
    expect(Tavern.PROFESSIONS.items.length).toBeGreaterThan(0);
});

test("Tavern nobilities available", () => {
    expect(Tavern.PROFESSIONS.items.length).toBeGreaterThan(0);
});

test("Tavern defaults to 2 staff and 5 patrons", () => {
    const tavern = new Tavern();

    expect(tavern.staff.length).toEqual(2);
    expect(tavern.patrons.length).toEqual(5);
});

test("Tavern produces NPCs", () => {
    const count = 3;
    const tavern = new Tavern({
        patrons: {
            count
        },
        staff: {
            list: [new NPC()],
            count
        }
    });

    expect(tavern.patrons.length).toEqual(count);
    expect(tavern.staff.length).toEqual(count);
});

test("Tavern throws error for empty contexts", () => {
    expect(() => {
        new Tavern({
            staff: {
                config: {
                    context: {
                        sex: new List([])
                    }
                }
            }
        });
    }).toThrow();

    expect(() => {
        new Tavern({
            staff: {
                config: {
                    context: {
                        sex: new List([])
                    }
                }
            }
        });
    }).toThrow();
});

test("Tavern name is built from a sentence", () => {
    const tavern = new Tavern();

    expect(tavern.name).toBeTypeOf("string");
    expect(tavern.name.length).toBeGreaterThan(0);
});

test("Tavern exports name sentence", () => {
    expect(Tavern.Name).toBeTypeOf("object");
    expect(Tavern.Name.Sentence).toBeTypeOf("function");
});
