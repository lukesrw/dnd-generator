export type Item<
    TValue extends string | number,
    TKeys extends Record<PropertyKey, unknown>,
    TOnPick extends unknown
> = TKeys & {
    value: TValue;
    weight?: number;
    onPick?: () => TOnPick;
};
