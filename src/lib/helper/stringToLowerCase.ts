/**
 * Replacement for `String.toLowerCase()` that preserves types
 */
export function stringToLowerCase<TStr extends string>(string: TStr) {
    return string.toLowerCase() as Lowercase<TStr>;
}
