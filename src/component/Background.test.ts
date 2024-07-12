import { Background } from "./Background.js";

test("Uses Background.List", () => {
    expect(() => {
        for (let i = 0; i < 1e3; i++) {
            const backgroundList = new Background.List();

            backgroundList.pick();
        }
    }).not.toThrow();
});
