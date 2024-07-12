import { Verb } from "./Verb.js";

test("Uses Verb.List", () => {
    expect(() => {
        for (let i = 0; i < 1e3; i++) {
            const verbList = new Verb.List();

            verbList.pick();
        }
    }).not.toThrow();
});
