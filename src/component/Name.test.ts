import { Gender } from "./Gender.js";
import { Name } from "./Name.js";
import { Race } from "./Race.js";
import { Sex } from "./Sex.js";

const nameList = new Name.List();
const raceList = new Race.List();
const genderList = new Gender.List();
const sexList = new Sex.List();

test("Name.List() starts without items", () => {
    expect(nameList.item.size).toEqual(0);
});

test("Name.List.filter(function) throws an error", () => {
    expect(() => {
        nameList.filter(() => true);
    }).toThrow();
});

test("Name.List.filter(object) defaults to a Human without gender", () => {
    const raceResults = new Map<string, number>();
    const sexResults = new Map<string, number>();

    const tests = 1e3;
    for (let i = 0; i < tests; i++) {
        const item = nameList.filter().items[0];

        const race = item?.value;
        if (race) {
            raceResults.set(race, (raceResults.get(race) ?? 0) + 1);
        }

        const sex = item?.sex;
        if (sex) {
            sexResults.set(sex, (sexResults.get(sex) ?? 0) + 1);
        }
    }

    expect(raceResults.size).toEqual(1);
    expect(raceResults.has("human")).toBeTruthy();
    expect(raceResults.get("human") ?? 0).toEqual(tests);

    expect(sexResults.size).toEqual(0);
});

test("Name.List.filter(object) uses the filter race if supported", () => {
    const elfNameList = nameList.filter({
        race: "Elf"
    });

    expect(elfNameList.item.size).toEqual(1);
    expect(elfNameList.item.has("elf")).toBeTruthy();
});

test("Name.List.filter(object) uses filter race alternative names if supported", () => {
    const { value: race, names } = raceList.item.get("Warforged")!;
    const warforgedNameList = nameList.filter({ race });

    expect(warforgedNameList.item.size).toEqual(names?.length);

    names?.forEach(alternateRace => {
        expect(warforgedNameList.item.has(alternateRace)).toBeTruthy();
    });
});

for (const race of raceList.getValues()) {
    for (const gender of genderList.getValues()) {
        for (const sex of sexList.getValues()) {
            test(`Name.List supports ${race} race, ${gender} gender, and ${sex} sex`, () => {
                expect(() => {
                    nameList
                        .filter({
                            race,
                            gender,
                            sex
                        })
                        .pick();
                }).not.toThrow();
            });
        }
    }
}

test("Name.List.pick() throws for unsupported races", () => {
    expect(() => {
        new Name.List([
            {
                value: "Fremen"
            }
        ]).pick();
    }).toThrow();
});

test("Name.List.filter(object) uses gender/sex if supported", () => {
    const raceWithGender = "elf";
    const supportedGender = "Male";
    const supportedSex = "Female";

    /**
     * Supported gender without sex
     */
    const genderWithoutSex = nameList.filter({
        gender: supportedGender,
        race: raceWithGender
    });
    const gWSItem = genderWithoutSex.item.get(raceWithGender);
    expect(gWSItem?.sex).toEqual(supportedGender);

    /**
     * Supported sex without gender
     */
    const sexWithoutGender = nameList.filter({
        sex: supportedSex,
        race: raceWithGender
    });
    const sWGItem = sexWithoutGender.item.get(raceWithGender);
    expect(sWGItem?.sex).toEqual(supportedSex);

    /**
     * Unsupported gender with sex
     */
    const unsupportedGenderWithSex = nameList.filter({
        gender: "Non-Binary",
        sex: supportedSex,
        race: raceWithGender
    });
    const uGWSItem = unsupportedGenderWithSex.item.get(raceWithGender);
    expect(uGWSItem?.sex).toEqual(supportedSex);

    /**
     * Gender with unsupported sex
     */
    const genderWithUnsupportedSex = nameList.filter({
        gender: supportedGender,
        sex: "Non-Binary",
        race: raceWithGender
    });
    const gWUSItem = genderWithUnsupportedSex.item.get(raceWithGender);
    expect(gWUSItem?.sex).toEqual(supportedGender);

    /**
     * Unsupported gender with unsupported sex
     */
    const unsupportedGenderWithUnsupportedSex = nameList.filter({
        gender: "Non-Binary",
        sex: "Non-Binary",
        race: raceWithGender
    });
    unsupportedGenderWithUnsupportedSex.item.get(raceWithGender);
});
