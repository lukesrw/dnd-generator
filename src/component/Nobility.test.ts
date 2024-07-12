import { Nobility } from "./Nobility.js";

test("Uses Nobility.List", () => {
    expect(() => {
        for (let i = 0; i < 1e3; i++) {
            const nobilityList = new Nobility.List();

            nobilityList.pick();
        }
    }).not.toThrow();
});
