import { Alignment } from "./Alignment.js";

test("Uses Alignment.List", () => {
    expect(() => {
        for (let i = 0; i < 1e3; i++) {
            const alignmentList = new Alignment.List();

            alignmentList.pick();
        }
    }).not.toThrow();
});
