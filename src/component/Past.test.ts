import { Past } from "./Past.js";

test("Uses Past.List", () => {
    expect(() => {
        for (let i = 0; i < 1e3; i++) {
            const pastList = new Past.List();

            pastList.pick();
        }
    }).not.toThrow();
});
