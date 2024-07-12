import { capitalise } from "./capitalise.js";

test("capitalise returns a string with the first letter capitalized", () => {
    expect(capitalise("hello")).toBe("Hello");
    expect(capitalise("HELLO")).toBe("HELLO");
    expect(capitalise("Hello")).toBe("Hello");
});

test("capitalise returns an empty string if given an empty string", () => {
    console.log(capitalise(""));
    expect(capitalise("")).toBe("");
});
