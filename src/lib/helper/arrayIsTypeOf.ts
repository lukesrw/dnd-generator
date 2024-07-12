export function arrayIsTypeOf(array: unknown, type: "string"): array is string[];
export function arrayIsTypeOf(array: unknown, type: string) {
    if (!Array.isArray(array)) {
        return false;
    }

    if (array.some(item => typeof item !== type)) {
        return false;
    }

    return true;
}
