import { expectIsEqual } from "../test/lib/expectIsEqual.js";

test("IsEqual Type", () => {
    /**
     * Equal types expect true
     */
    expectIsEqual<true, true>(true);
    expectIsEqual<true, false>(false);
});
