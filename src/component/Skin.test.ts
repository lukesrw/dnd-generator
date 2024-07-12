import { Skin } from "./Skin.js";

test("Uses SkinColourList", () => {
    expect(() => {
        for (let i = 0; i < 1e3; i++) {
            const skinColourList = new Skin.Colour.List();

            skinColourList.pick();
        }
    }).not.toThrow();
});
