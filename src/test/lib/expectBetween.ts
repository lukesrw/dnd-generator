import { getBetween } from "./getBetween.js";

export function expectBetween(value: number, minimum: number, maximum: number, inclusive = true) {
    const [minimumMethod, maximumMethod] = getBetween(inclusive);

    expect(value)[minimumMethod](minimum);
    expect(value)[maximumMethod](maximum);
}
