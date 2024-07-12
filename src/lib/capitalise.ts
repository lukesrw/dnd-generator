export function capitalise<TStr extends string>(string: TStr) {
    return ((string[0] ?? "").toUpperCase() + string.slice(1)) as Capitalize<TStr>;
}
