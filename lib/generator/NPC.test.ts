import { NPC } from "./NPC";

test("Generates a random NPC", () => {
    expect(() => {
        new NPC();
    }).not.toThrow();
});
