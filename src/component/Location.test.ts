import { Location } from "./Location.js";

test("Uses Location.List", () => {
    expect(() => {
        for (let i = 0; i < 1e3; i++) {
            const locationList = new Location.List();

            locationList.pick();
        }
    }).not.toThrow();
});
