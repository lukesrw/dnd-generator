import madge from "madge";
import * as API from "./index.js";
import { trackDeprecated } from "./test/lib/trackDeprecated.js";

const testDeprecations = trackDeprecated(
    "Language.Common.getPronoun",
    "List.Age",
    "List.Alignment",
    "List.Armor",
    "List.Characteristics",
    "List.Class",
    "List.Eye",
    "List.Hair",
    "List.List",
    "List.Maturity",
    "List.Motivation",
    "List.Name",
    "List.Nobility",
    "List.Professions.All",
    "List.Race",
    "List.Sex",
    "List.Skin",
    "List.Title",
    "List.Weapon",
    "Prefab.Tavern",
    "Generator.NPC"
);

describe("Backwards compatibility", () => {
    test("API v1.0", () => {
        /**
         * Generators
         */
        expect(API.Generator.NPC).toBeTypeOf("function");
        expect(() => API.Generator.Place).toThrow();

        /**
         * Langauge
         */
        expect(API.Language.Common.getPronoun).toBeTypeOf("function");

        /**
         * Lists
         */
        for (const property of [
            "Age",
            "Alignment",
            "Armor",
            "Characteristics",
            "Class",
            "Eye",
            "Hair",
            "List",
            "Maturity",
            "Motivation",
            "Name",
            "Nobility",
            "Race",
            "Sex",
            "Skin",
            "Title",
            "Weapon"
        ] as const) {
            expect(API.List[property]).toBeTypeOf("function");
        }
        expect(API.List.Professions.All).toBeTypeOf("function");
        for (const nobility of [
            "Common",
            "Esquire",
            "Gentle",
            "Merchant",
            "Noble",
            "Peasant",
            "Scholar",
            "Servant",
            "Underclass",
            "Yeoman"
        ] as const) {
            expect(() => API.List.Professions[nobility]).toThrow();
        }

        /**
         * Prefab
         */
        expect(API.Prefab.Tavern).toBeTypeOf("function");
    });

    testDeprecations();
});

describe("Madge Checks", () => {
    test("Circular dependencies", async () => {
        const results = await madge("src", {
            fileExtensions: ["ts"]
        });

        expect(
            JSON.stringify(
                results.circular().map(dependency => {
                    return `${dependency[0]} -> ${dependency[1]}`;
                })
            )
        ).toEqual("[]");
    });
});
