import { MaturityList } from "../maturity/maturity";
import { RaceList } from "../race/race";
import { AgeList } from "./age";

let ages = new AgeList();
let races = new RaceList();
let maturities = new MaturityList();

races.getValues().forEach(race => {
    maturities.getValues().forEach(maturity => {
        test(`AgeList supports "${race}" race and "${maturity}" maturity`, () => {
            expect(() => {
                ages.pickRandom({
                    race: race,
                    maturity: maturity
                });
            }).not.toThrow();
        });
    });
});
