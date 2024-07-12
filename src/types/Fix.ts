import { Primitive } from "./Primitive.js";

// prettier-ignore
export type Fix<T> =
    T extends Primitive ? T :
    T extends Map<infer K, infer V> ? ReadonlyMap<Fix<K>, Fix<V>> :
    T extends Set<infer M> ? ReadonlySet<Fix<M>> :
    { readonly [K in keyof T]: Fix<T[K]> };

// prettier-ignore
export type Unfix<T> =
    T extends Primitive ? T :
    T extends ReadonlyMap<infer K, infer V> ? Map<K, V> :
    T extends ReadonlySet<infer S> ? Set<S> :
    { -readonly [Key in keyof T]: Unfix<T[Key]>; }
