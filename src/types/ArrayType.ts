/**
 * Extract the type of an array
 */
export type ArrayType<T> = T extends Array<infer U> ? U : T;
