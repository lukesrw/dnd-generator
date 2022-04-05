import { RaceList } from "../race/race";
import { NameList } from "./name";

let names = new NameList();
let races = new RaceList();

races.getValues().forEach((race) => {
    test(`NameList supports "${race}" race (Male)`, () => {
        expect(() => {
            names.pickRandom({
                race: race,
                gender: "Male"
            });
        }).not.toThrow();
    });

    test(`NameList supports "${race}" race (Female)`, () => {
        expect(() => {
            names.pickRandom({
                race: race,
                gender: "Female"
            });
        }).not.toThrow();
    });

    test(`NameList supports "${race}" race, "Non-Binary" gender, "Male" sex`, () => {
        expect(() => {
            names.pickRandom({
                race: race,
                gender: "Non-Binary",
                sex: "Male"
            });
        }).not.toThrow();
    });

    test(`NameList supports "${race}" race, "Non-Binary" gender, "Female" sex`, () => {
        expect(() => {
            names.pickRandom({
                race: race,
                gender: "Non-Binary",
                sex: "Female"
            });
        }).not.toThrow();
    });
});
