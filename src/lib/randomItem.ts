import { randomIndex } from "./randomIndex.js";

/**
 * Pick a random item from the given array
 */
export function randomItem<TItem>(array: TItem[]) {
    return array[randomIndex(array)]!;
}
