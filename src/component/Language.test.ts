import { Language } from "./Language.js";

test("Uses Language.List", () => {
    expect(() => {
        for (let i = 0; i < 1e3; i++) {
            const languageList = new Language.List();

            languageList.pick();
        }
    }).not.toThrow();
});
