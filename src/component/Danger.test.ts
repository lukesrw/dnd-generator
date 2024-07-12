import { Danger } from "./Danger.js";

test("Uses Danger.List", () => {
    expect(() => {
        for (let i = 0; i < 1e3; i++) {
            const dangerList = new Danger.List();

            dangerList.pick();
        }
    }).not.toThrow();
});
