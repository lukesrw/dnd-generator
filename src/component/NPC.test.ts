import { objectKeys } from "../lib/helper/objectKeys.js";
import { expectRandom } from "../test/lib/expectRandom.js";
import { List } from "../util/List.js";
import { Ability } from "./Ability.js";
import { NPC } from "./NPC.js";

test("NPC options", () => {
    const defaultNPC = new NPC();
    expect(defaultNPC.config.options.nonBinaryChance).toEqual(25);
    expect(defaultNPC.config.options.transgenderChance).toEqual(25);

    const customNPC = new NPC(
        {},
        {
            options: {
                nonBinaryChance: 50,
                transgenderChance: 50
            }
        }
    );
    expect(customNPC.config.options.nonBinaryChance).toEqual(50);
    expect(customNPC.config.options.transgenderChance).toEqual(50);
});

test("NPC.pickGender() uses options to combine sex/gender", () => {
    // forcing `transgenderChance` option
    const transgenderNPC = new NPC(
        {},
        {
            options: {
                transgenderChance: 1
            }
        }
    );
    expect(transgenderNPC.property.gender).not.toEqual(transgenderNPC.property.sex);

    // forcing `nonBinaryChance` option
    expect(
        new NPC(
            {},
            {
                options: {
                    transgenderChance: false,
                    nonBinaryChance: 1
                }
            }
        ).property.gender
    ).toEqual("Non-Binary");

    // preventing `transgenderChance` and `nonBinaryChance`
    const cisNPC = new NPC(
        {
            sex: "Male"
        },
        {
            options: {
                nonBinaryChance: false,
                transgenderChance: false
            }
        }
    );
    expect(cisNPC.property.gender).toEqual(cisNPC.property.sex);

    // using `order` to make a gender-first NPC results in naturally non-binary NPCs
    const randomResults = new Map<string, number>();
    const randomTests = 1e2;
    for (let i = 0; i < randomTests; i++) {
        const randomNPC = new NPC(
            {},
            {
                options: {
                    nonBinaryChance: false,
                    transgenderChance: false
                },
                order: ["gender"]
            }
        );

        // prettier-ignore
        randomResults.set(
            randomNPC.property.gender,
            (randomResults.get(randomNPC.property.gender) || 0) + 1
        );
    }
    expect(randomResults.size).toEqual(3);
    expect(randomResults.has("Male")).toBeTruthy();
    expect(randomResults.has("Female")).toBeTruthy();
    expect(randomResults.has("Non-Binary")).toBeTruthy();
    expectRandom(randomResults.get("Male") ?? 0, randomTests, 1 / 3);
    expectRandom(randomResults.get("Female") ?? 0, randomTests, 1 / 3);
    expectRandom(randomResults.get("Non-Binary") ?? 0, randomTests, 1 / 3);
});

test("NPC throws if there's an empty context", () => {
    expect(() => {
        new NPC(
            {},
            {
                context: {
                    sex: new List([])
                }
            }
        );
    }).toThrow();
});

test("NPC.pickTools() works without background", () => {
    const npc = new NPC({
        background: ""
    });

    expect(npc.property.background).toEqual("");
    expect(npc.details.tools.length).toEqual(0);
});

test("NPC.getPronoun() supports built-in sexes/genders", () => {
    // supported Gender is used in pronoun
    expect(
        new NPC({
            gender: "Male"
        }).getPronoun()
    ).toEqual("his");

    // unsupported Gender uses sex in pronoun
    expect(
        new NPC({
            gender: "Mysterious",
            sex: "Female"
        }).getPronoun()
    ).toEqual("her");

    // unsupported Gender and Sex uses non-binary pronoun
    expect(
        new NPC({
            gender: "Mysterious",
            sex: "Mysterious"
        }).getPronoun()
    ).toEqual("their");
});

test("NPC.isCombatant() supports maturity, class, and profession", () => {
    const combatant = {
        maturity: "Adult",
        profession: "Mercenary",
        class: "Barbarian"
    };

    /**
     * No reason why the NPC is not a combatant
     */
    expect(new NPC(combatant).isCombatant()).toBeTruthy();

    /**
     * Maturity should stop them being a combatant
     */
    expect(
        new NPC({
            ...combatant,
            maturity: "Infant"
        }).isCombatant()
    ).toBeFalsy();

    /**
     * Profession should stop them being a combatant
     */
    expect(
        new NPC({
            ...combatant,
            profession: "Wordsmith"
        }).isCombatant()
    ).toBeFalsy();

    /**
     * Class should stop them being a combatant
     */
    expect(
        new NPC({
            ...combatant,
            class: "Pacifist"
        }).isCombatant()
    ).toBeFalsy();
});

test("NPC.property.armour should be empty for non-combatant", () => {
    const nonCombatant = new NPC({
        maturity: "Infant"
    });

    expect(nonCombatant.property.armour).toEqual("");
});

test("NPC.getProficiencyBonus() checks level", () => {
    const npc = new NPC({
        level: 5
    });

    expect(npc.getProficiencyBonus()).toBe(3);
});

test("NPC supports custom contexts", () => {
    const customNPC = new NPC(
        {},
        {
            context: {
                age: new List([
                    {
                        value: 42
                    }
                ]),
                armour: new List([
                    {
                        value: "Custom Armour"
                    }
                ]),
                background: new List([
                    {
                        value: "Custom Background"
                    }
                ]),
                class: new List([
                    {
                        value: "Custom Class"
                    }
                ]),
                ethic: new List([
                    {
                        value: "Custom Ethic"
                    }
                ]),
                eyeColour: new List([
                    {
                        value: "Custom Eye Colour"
                    }
                ]),
                flaw: new List([
                    {
                        value: "Custom Flaw"
                    }
                ]),
                hairColour: new List([
                    {
                        value: "Custom Hair Colour"
                    }
                ]),
                ideal: new List([
                    {
                        value: "Custom Ideal"
                    }
                ]),
                motivation: new List([
                    {
                        value: "Custom Motivation"
                    }
                ]),
                name: new List([
                    {
                        value: "Custom Name"
                    }
                ]),
                nobility: new List([
                    {
                        value: "Custom Nobility"
                    }
                ]),
                physicality: new List([
                    {
                        value: "Custom Physicality"
                    }
                ]),
                profession: new List([
                    {
                        value: "Custom Profession"
                    }
                ]),
                gender: new List([
                    {
                        value: "Custom Gender"
                    }
                ]),
                race: new List([
                    {
                        value: "Custom Race"
                    }
                ]),
                skinColour: new List([
                    {
                        value: "Custom Skin Colour"
                    }
                ]),
                title: new List([
                    {
                        value: "Custom Title"
                    }
                ]),
                sex: new List([
                    {
                        value: "Custom Sex"
                    }
                ]),
                maturity: new List([
                    {
                        value: "Custom Maturity"
                    }
                ]),
                moral: new List([
                    {
                        value: "Custom Moral"
                    }
                ])
            }
        }
    );

    expect(customNPC.property.age).toBe(42);
    expect(customNPC.property.armour).toBe("Custom Armour");
    expect(customNPC.property.background).toBe("Custom Background");
    expect(customNPC.property.class).toBe("Custom Class");
    expect(customNPC.property.ethic).toBe("Custom Ethic");
    expect(customNPC.property.eyeColour).toBe("Custom Eye Colour");
    expect(customNPC.property.flaw).toBe("Custom Flaw");
    expect(customNPC.property.hairColour).toBe("Custom Hair Colour");
    expect(customNPC.property.ideal).toBe("Custom Ideal");
    expect(customNPC.property.motivation).toBe("Custom Motivation");
    expect(customNPC.property.name).toBe("Custom Name");
    expect(customNPC.property.nobility).toBe("Custom Nobility");
    expect(customNPC.property.physicality).toBe("Custom Physicality");
    expect(customNPC.property.profession).toBe("Custom Profession");
    expect(customNPC.property.gender).toMatch(/Custom (Gender|Sex)/);
    expect(customNPC.property.race).toBe("Custom Race");
    expect(customNPC.property.skinColour).toBe("Custom Skin Colour");
    expect(customNPC.property.title).toBe("Custom Title");
    expect(customNPC.property.sex).toBe("Custom Sex");
    expect(customNPC.property.maturity).toBe("Custom Maturity");
    expect(customNPC.property.moral).toBe("Custom Moral");
});

const ABILITIES = new Ability.List().getValues();

test("Abilities from input array", () => {
    const abilityScore = 12;

    const abilities = new NPC.Abilities([
        abilityScore,
        abilityScore,
        abilityScore,
        abilityScore,
        abilityScore,
        abilityScore
    ]);

    expect(
        ABILITIES.every(ability => {
            return abilities.getScore(ability) === abilityScore;
        })
    ).toBeTruthy();

    expect(abilities.getModifier("Strength")).toEqual(1);
});

test("Abilities from standard array", () => {
    const abilities = new NPC.Abilities("array");
    const standardArray = new Set(Ability.STANDARD_ARRAY);

    for (const ability of ABILITIES) {
        standardArray.delete(abilities.getScore(ability));
    }

    expect(standardArray.size).toEqual(0);
});

test("Abilities from object", () => {
    const preset = {
        Charisma: 1,
        Dexterity: 2,
        Intelligence: 3,
        Strength: 4,
        Constitution: 5
    } as const;
    const abilities = new NPC.Abilities(preset);

    for (const ability of objectKeys(preset)) {
        expect(abilities.getScore(ability)).toEqual(preset[ability]);
    }

    /**
     * Non-specified abilities use 4d6r=1d1
     */
    expect(abilities.getScore("Wisdom")).toBeGreaterThan(5);
    expect(abilities.getScore("Wisdom")).toBeLessThan(19);
});

test("Skill proficiency", () => {
    const skills = new NPC.Skills();

    expect(skills.setProficient("Acrobatics", true).isProficient("Acrobatics")).toBeTruthy();

    expect(skills.setProficient("Acrobatics", false).isProficient("Acrobatics")).toBeFalsy();

    expect(skills.setProficient("Acrobatics").isProficient("Acrobatics")).toBeTruthy();
});

test("Skill modifier", () => {
    const npc = new NPC(
        {
            level: 5
        },
        {
            abilities: {
                Charisma: 10,
                Dexterity: 10,
                Intelligence: 10,
                Strength: 10,
                Constitution: 10,
                Wisdom: 10
            }
        }
    );

    expect(npc.skills.getValue("Acrobatics")).toBe(0);

    npc.skills.setProficient("Acrobatics", true);

    expect(npc.skills.getValue("Acrobatics")).toBe(3);
});
