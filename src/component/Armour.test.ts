import { Armour } from "./Armour.js";

test("Uses Armour.List", () => {
    expect(() => {
        for (let i = 0; i < 1e3; i++) {
            const armourList = new Armour.List();

            armourList.pick();
        }
    }).not.toThrow();
});
