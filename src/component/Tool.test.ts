import { Tool } from "./Tool.js";

test("Uses Tool.List", () => {
    expect(() => {
        for (let i = 0; i < 1e3; i++) {
            const toolList = new Tool.List();

            toolList.pick();
        }
    }).not.toThrow();
});
