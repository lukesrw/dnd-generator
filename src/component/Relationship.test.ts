import { Relationship } from "./Relationship.js";

test("Uses Relationship.List", () => {
    expect(() => {
        for (let i = 0; i < 1e3; i++) {
            const relationshipList = new Relationship.List();

            relationshipList.pick();
        }
    }).not.toThrow();
});
