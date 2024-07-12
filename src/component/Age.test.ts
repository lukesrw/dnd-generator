import { expectBetween } from "../test/lib/expectBetween.js";
import { Age } from "./Age.js";
import { Maturity } from "./Maturity.js";
import { Race } from "./Race.js";

const raceList = new Race.List();
const maturityList = new Maturity.List();
const human = raceList.item.get("Human")!;

test("Age.List.filter(function) throws an error", () => {
    expect(() => {
        const ageList = new Age.List();

        // @ts-expect-error
        ageList.filter(() => true);
    }).toThrow();
});

describe("Age.List.filter(object) supports each built-in race", () => {
    const ageList = new Age.List();

    for (const race of raceList.getItems()) {
        test(`Age.List supports '${race.value}' race`, () => {
            // if no maturity is specified "Adult" is assumed
            expectBetween(
                ageList
                    .filter({
                        race: race.value,
                        maturity: "Youngen"
                    })
                    .pick(),
                race.maturity.Adult[0],
                race.maturity.Adult[1]
            );
        });

        for (const maturity of maturityList.getValues()) {
            test(`Age.List supports '${race.value}' race, and '${maturity}' maturity`, () => {
                expectBetween(
                    ageList
                        .filter({
                            race: race.value,
                            maturity
                        })
                        .pick(),
                    race.maturity[maturity][0],
                    race.maturity[maturity][1]
                );
            });
        }
    }
});

test("Age.List.filter(object) uses human race for unknown races", () => {
    const ageList = new Age.List();

    expectBetween(
        ageList
            .filter({
                race: "Nomai",
                maturity: "Child"
            })
            .pick(),
        human.maturity.Child[0],
        human.maturity.Child[1]
    );
});
