export function objectKeys<TObject extends Record<string, unknown>>(object: TObject): (keyof TObject)[] {
    return Object.keys(object);
}
