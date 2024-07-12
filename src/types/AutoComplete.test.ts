import { expectIsEqual } from "../test/lib/expectIsEqual.js";
import { AutoComplete } from "./AutoComplete.js";

test("AutoComplete Type", () => {
    /**
     * AutoComplete from number
     *
     * LSP should suggest '42', but accept any number
     */
    expectIsEqual<AutoComplete<42>, number>(true, [12]);

    /**
     * AutoComplete from string
     *
     * LSP should suggest "Hello World", but accept any string
     */
    expectIsEqual<AutoComplete<"Hello World">, string>(true, ["Any String"]);
});
