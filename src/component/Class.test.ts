import { Class } from "./Class.js";

test("Uses Class.List", () => {
    expect(() => {
        for (let i = 0; i < 1e3; i++) {
            const classList = new Class.List();

            classList.pick();
        }
    }).not.toThrow();
});
