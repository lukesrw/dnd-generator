import { Unfix } from "./Fix.js";

namespace AutoComplete {
    export type Number<T extends number> = T | (number & Record<never, never>);

    export type String<T extends string> = T | (string & Record<never, never>);

    export type Object<T extends object> = {
        [Key in keyof Unfix<T>]: AutoComplete<Unfix<T>[Key]>;
        // [K in keyof T]: AutoComplete<T[K]>;
    } & Record<PropertyKey, unknown>;
}

// prettier-ignore
export type AutoComplete<TValue> =
    TValue extends string ? AutoComplete.String<TValue> :
    TValue extends number ? AutoComplete.Number<TValue> :
    // TValue extends Function ? TValue :
    TValue extends object ? AutoComplete.Object<TValue> :
    TValue;

export type AutoCompleteMap<TObject extends object> = {
    [K in keyof TObject]: AutoComplete<TObject[K]>;
};
