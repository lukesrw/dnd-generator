import { Conclusion } from "./Conclusion.js";

test("Uses Conclusion.List", () => {
    expect(() => {
        for (let i = 0; i < 1e3; i++) {
            const conclusionList = new Conclusion.List();

            conclusionList.pick();
        }
    }).not.toThrow();
});
