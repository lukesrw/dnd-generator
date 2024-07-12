import { Gender } from "./Gender.js";

test("Uses Gender.List", () => {
    expect(() => {
        for (let i = 0; i < 1e3; i++) {
            const genderList = new Gender.List();

            genderList.pick();
        }
    }).not.toThrow();
});
