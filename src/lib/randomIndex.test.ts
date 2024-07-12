import { randomIndex } from "./randomIndex.js";

test("randomIndex throws an error if the array is empty", () => {
    expect(() => randomIndex([])).toThrow();
});
