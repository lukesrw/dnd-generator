import { Eye } from "./Eye.js";

test("Uses EyeColourList", () => {
    expect(() => {
        for (let i = 0; i < 1e3; i++) {
            const eyeColourList = new Eye.Colour.List();

            eyeColourList.pick();
        }
    }).not.toThrow();
});
