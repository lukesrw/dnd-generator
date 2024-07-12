import { Title } from "./Title.js";

test("Uses Title.List", () => {
    expect(() => {
        for (let i = 0; i < 1e3; i++) {
            const titleList = new Title.List();

            titleList.pick();
        }
    }).not.toThrow();
});
