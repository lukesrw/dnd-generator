import { Motivation } from "./Motivation.js";

test("Uses Motivation.List", () => {
    expect(() => {
        for (let i = 0; i < 1e3; i++) {
            const motivationList = new Motivation.List();

            motivationList.pick();
        }
    }).not.toThrow();
});
