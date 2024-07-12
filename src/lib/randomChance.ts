import { randomNumber } from "./randomNumber.js";

/**
 * Pick a random number for 1/X chance
 */
export function randomChance(chance: number | boolean) {
    if (typeof chance === "boolean") {
        return chance;
    }

    return randomNumber(chance) === 1;
}
