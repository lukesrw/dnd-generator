import { Flaw } from "./Flaw.js";

test("Uses Flaw.List", () => {
    expect(() => {
        for (let i = 0; i < 1e3; i++) {
            const flawList = new Flaw.List();

            flawList.pick();
        }
    }).not.toThrow();
});
