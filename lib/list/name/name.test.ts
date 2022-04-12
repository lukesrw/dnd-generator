import { RaceList } from "../race/race";
import { fNGSupportedRaces, NameList } from "./name";

let names = new NameList();
let races = new RaceList();

let allRaces: string[] = Object.keys(fNGSupportedRaces);

races.getItems().forEach(race => {
    if (allRaces.indexOf(race.value) === -1) allRaces.push(race.value);

    if (Array.isArray(race.names)) {
        race.names.forEach(name => {
            if (allRaces.indexOf(name) === -1) allRaces.push(name);
        });
    }
});

allRaces.forEach(race => {
    test(`NameList supports "${race}" race (Male)`, () => {
        expect(() => {
            names.pickRandom({
                race: race,
                sex: "Male"
            });
        }).not.toThrow();
    });

    test(`NameList supports "${race}" race (Female)`, () => {
        expect(() => {
            names.pickRandom({
                race: race,
                sex: "Female"
            });
        }).not.toThrow();
    });

    test(`NameList supports "${race}" race, "Male" sex with "Non-Binary" gender`, () => {
        expect(() => {
            names.pickRandom({
                race: race,
                gender: "Non-Binary",
                sex: "Male"
            });
        }).not.toThrow();
    });

    test(`NameList supports "${race}" race, "Female" sex with "Non-Binary" gender`, () => {
        expect(() => {
            names.pickRandom({
                race: race,
                gender: "Non-Binary",
                sex: "Female"
            });
        }).not.toThrow();
    });
});
