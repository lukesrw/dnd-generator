// prettier-ignore
export type GetType<TOrigin> = (
    TOrigin extends (infer OItem)[] ? GetType<OItem> :
    TOrigin extends string  ? string :
    TOrigin extends number ? number :
    TOrigin extends boolean ? boolean :
    TOrigin
);
