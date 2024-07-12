import { Race } from "./Race.js";

test("Uses Race.List", () => {
    expect(() => {
        for (let i = 0; i < 1e3; i++) {
            const raceList = new Race.List();

            raceList.pick();
        }
    }).not.toThrow();
});
