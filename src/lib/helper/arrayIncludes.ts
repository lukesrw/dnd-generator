/**
 * Replacement for `Array.includes()` that broadens readonly arrays
 */
export function arrayIncludes<TArray extends unknown>(array: ReadonlyArray<unknown>, item: unknown): item is TArray {
    return array.includes(item as TArray);
}
