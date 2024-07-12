import { Weapon } from "./Weapon.js";

test("Uses Weapon.List", () => {
    expect(() => {
        for (let i = 0; i < 1e3; i++) {
            const weaponList = new Weapon.List();

            weaponList.pick();
        }
    }).not.toThrow();
});
