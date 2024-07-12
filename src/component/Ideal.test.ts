import { Ideal } from "./Ideal.js";

test("Uses Ideal.List", () => {
    expect(() => {
        for (let i = 0; i < 1e3; i++) {
            const idealList = new Ideal.List();

            idealList.pick();
        }
    }).not.toThrow();
});
