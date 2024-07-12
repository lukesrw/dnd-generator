import { arrayIsTypeOf } from "./arrayIsTypeOf.js";

test("arrayIsTypeOf returns false if not given an array", () => {
    expect(arrayIsTypeOf(null, "string")).toBe(false);
    expect(arrayIsTypeOf(undefined, "string")).toBe(false);
    expect(arrayIsTypeOf(true, "string")).toBe(false);
    expect(arrayIsTypeOf(false, "string")).toBe(false);
    expect(arrayIsTypeOf("", "string")).toBe(false);
    expect(arrayIsTypeOf({}, "string")).toBe(false);
});
