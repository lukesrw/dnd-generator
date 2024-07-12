import { Currency } from "./Currency.js";

test("Uses Currency.List", () => {
    expect(() => {
        for (let i = 0; i < 1e3; i++) {
            const currencyList = new Currency.List();

            currencyList.pick();
        }
    }).not.toThrow();
});
