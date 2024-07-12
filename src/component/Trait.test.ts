import { Trait } from "./Trait.js";

test("Uses Trait.List", () => {
    expect(() => {
        for (let i = 0; i < 1e3; i++) {
            const traitList = new Trait.List();

            traitList.pick();
        }
    }).not.toThrow();
});
