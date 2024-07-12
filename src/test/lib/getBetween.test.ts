import { getBetween } from "./getBetween.js";

test("getBetween() returns methods", () => {
    expect(getBetween(true)).toEqual(["toBeGreaterThanOrEqual", "toBeLessThanOrEqual"]);
    expect(getBetween(false)).toEqual(["toBeGreaterThan", "toBeLessThan"]);
});

test("getBetween() defaults to true", () => {
    expect(getBetween()).toEqual(["toBeGreaterThanOrEqual", "toBeLessThanOrEqual"]);
});
