import { Maturity } from "./Maturity.js";

test("Uses Maturity.List", () => {
    expect(() => {
        for (let i = 0; i < 1e3; i++) {
            const maturityList = new Maturity.List();

            maturityList.pick();
        }
    }).not.toThrow();
});
