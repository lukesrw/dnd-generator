import { randomNumber } from "./randomNumber.js";

/**
 * Pick a random index from the given array
 */
export function randomIndex(array: unknown[] | readonly unknown[]) {
    if (array.length === 0) {
        throw new Error("Cannot pick an index from an empty array");
    }

    return randomNumber(array.length - 1, 0);
}
