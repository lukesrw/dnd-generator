/**
 * Pick a random number from the given range
 *
 * **Note:** `minimum` defaults to `1` instead of `0`.
 */
export function randomNumber(maximum: number, minimum = 1) {
    if (minimum > maximum) {
        [minimum, maximum] = [maximum, minimum];
    }

    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}
