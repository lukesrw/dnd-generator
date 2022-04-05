import { RaceList } from "../race/race";
import { ClassList } from "./class";

let classes = new ClassList();
let races = new RaceList();

races.getValues().forEach((race) => {
    test(`ClassList supports "${race}" race`, () => {
        expect(() => {
            classes.pickRandom({
                race: race
            });
        }).not.toThrow();
    });
});
