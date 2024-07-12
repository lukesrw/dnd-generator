export function getBetween(inclusive = true) {
    return [
        inclusive ? "toBeGreaterThanOrEqual" : "toBeGreaterThan",
        inclusive ? "toBeLessThanOrEqual" : "toBeLessThan"
    ] as const;
}
