import { Moral } from "./Moral.js";

test("Uses Moral.List", () => {
    expect(() => {
        for (let i = 0; i < 1e3; i++) {
            const moralList = new Moral.List();

            moralList.pick();
        }
    }).not.toThrow();
});
