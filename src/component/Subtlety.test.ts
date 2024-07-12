import { Subtlety } from "./Subtlety.js";

test("Uses Subtlety.List", () => {
    expect(() => {
        for (let i = 0; i < 1e3; i++) {
            const subtletyList = new Subtlety.List();

            subtletyList.pick();
        }
    }).not.toThrow();
});
