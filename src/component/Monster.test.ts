import { Monster } from "./Monster.js";

test("Uses Monster.List", () => {
    expect(() => {
        for (let i = 0; i < 1e3; i++) {
            const monsterList = new Monster.List();

            monsterList.pick();
        }
    }).not.toThrow();
});
