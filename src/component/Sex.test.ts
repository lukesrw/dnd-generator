import { Sex } from "./Sex.js";

test("Uses Sex.List", () => {
    expect(() => {
        for (let i = 0; i < 1e3; i++) {
            const sexList = new Sex.List();

            sexList.pick();
        }
    }).not.toThrow();
});
