import type { AutoComplete } from "./AutoComplete.js";
import type { Fix } from "./Fix.js";
import type { Item } from "./Item.js";

type FilterCallback<TValue extends string | number, TKeys extends Record<string, unknown>, TOnPick extends unknown> = (
    item: Fix<Item<TValue, TKeys, TOnPick>>
) => boolean;

export type Filter<
    TValue extends string | number,
    TKeys extends Record<PropertyKey, unknown>,
    TOnPick extends unknown
> =
    | Partial<Record<AutoComplete<string & keyof Item<TValue, TKeys, TOnPick>>, string | number | boolean>>
    | FilterCallback<TValue, TKeys, TOnPick>;
