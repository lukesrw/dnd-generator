import { expectBetween } from "./expectBetween.js";

export function expectRandom(value: number, tests: number, percentage: number, margin = 0.4) {
    /**
     * Pre-test input validation
     */
    expect(value).toBeLessThanOrEqual(tests);
    expect(percentage).toBeLessThanOrEqual(1);

    const fraction = tests * percentage;
    const difference = fraction * margin;

    /**
     * Test expectations
     */
    expectBetween(value, fraction - difference, fraction + difference);
}
