import { Dice } from "./Dice.js";

test("Uses Dice.List", () => {
    expect(() => {
        for (let i = 0; i < 1e3; i++) {
            const diceList = new Dice.List();

            diceList.pick();
        }
    }).not.toThrow();
});
