import { expectTypeOf } from "vitest";
import { GetType } from "./GetType.js";

test("GetType Type", () => {
    /**
     * GetType from array
     */
    expectTypeOf("Hello World").toMatchTypeOf<GetType<["Hello", "World"]>>();
    expectTypeOf(126).toMatchTypeOf<GetType<[42, 84]>>();
    expectTypeOf(true).toMatchTypeOf<GetType<[true]>>();
    expectTypeOf(true).toMatchTypeOf<GetType<[false]>>();
    expectTypeOf(false).toMatchTypeOf<GetType<[true]>>();
    expectTypeOf(false).toMatchTypeOf<GetType<[false]>>();

    /**
     * GetType
     */
    expectTypeOf("Hello World").toMatchTypeOf<string>();
    expectTypeOf(42).toMatchTypeOf<GetType<number>>();
    expectTypeOf(true).toMatchTypeOf<GetType<true>>();
    expectTypeOf(true).toMatchTypeOf<GetType<false>>();
    expectTypeOf(false).toMatchTypeOf<GetType<true>>();
    expectTypeOf(false).toMatchTypeOf<GetType<false>>();
});
