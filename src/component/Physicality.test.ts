import { Physicality } from "./Physicality.js";

test("Uses Physicality.List", () => {
    expect(() => {
        for (let i = 0; i < 1e3; i++) {
            const physicalityList = new Physicality.List();

            physicalityList.pick();
        }
    }).not.toThrow();
});
