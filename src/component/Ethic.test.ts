import { Ethic } from "./Ethic.js";

test("Uses Ethic.List", () => {
    expect(() => {
        for (let i = 0; i < 1e3; i++) {
            const ethicList = new Ethic.List();

            ethicList.pick();
        }
    }).not.toThrow();
});
