import { RaceList } from "../race/race";
import { AgeList } from "./age";

let ages = new AgeList();
let races = new RaceList();

races.getValues().forEach((race) => {
    test(`AgeList supports "${race}" race`, () => {
        expect(() => {
            ages.pickRandom({
                race: race
            });
        }).not.toThrow();
    });
});
