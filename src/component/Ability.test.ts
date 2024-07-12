import { Ability } from "./Ability.js";

test("Uses Ability.List", () => {
    expect(() => {
        for (let i = 0; i < 1e3; i++) {
            const abilityList = new Ability.List();

            abilityList.pick();
        }
    }).not.toThrow();
});
