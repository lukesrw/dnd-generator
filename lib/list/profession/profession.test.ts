import { MaturityList } from "../maturity/maturity";
import { NobilityList } from "../nobility/nobility";
import { ProfessionList } from "./profession";

let professions = new ProfessionList();
let maturities = new MaturityList();
let nobilities = new NobilityList();

maturities.getValues().forEach((maturity) => {
    nobilities.getValues().forEach((nobility) => {
        test(`ProfessionList supports "${maturity}" maturity and "${nobility}" nobility`, () => {
            expect(() => {
                professions.pickRandom({
                    maturity: maturity,
                    nobility: nobility
                });
            }).not.toThrow();
        });
    });
});
