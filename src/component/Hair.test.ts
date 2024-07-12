import { Hair } from "./Hair.js";

test("Uses HairColourList", () => {
    expect(() => {
        for (let i = 0; i < 1e3; i++) {
            const hairColourList = new Hair.Colour.List();

            hairColourList.pick();
        }
    }).not.toThrow();
});
