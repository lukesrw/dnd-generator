import { Rumour } from "./Rumour.js";

test("Uses RumourSentence", () => {
    expect(() => {
        for (let i = 0; i < 1e3; i++) {
            const rumour = new Rumour.Sentence();

            rumour.build();
        }
    }).not.toThrow();
});
