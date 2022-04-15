import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import * as Generic from "../../interfaces/generic";
import { Gender } from "../list/gender/gender";
import { List } from "../list/List";
import { NameList } from "../list/name/name";
import { Context, SharedProperties } from "../context/Context";
import { Sex } from "../list/sex/sex";
import { getPronoun, ucfirst } from "../utils";
import { Abilities, AbilitiesOptions, Skills } from "./Abilities";

const TRANSGENDER_CHANCE = 50;
const NON_BINARY_CHANCE = 50;

export interface NPCOptions {
    abilitiesOptions?: AbilitiesOptions;
}

export class NPC implements SharedProperties {
    // basic
    context: Context;

    // name
    forename: string;
    surname: string;

    sex: Sex;
    gender: Gender;

    //stats
    hitPoints: number;

    abilities: Abilities;
    skills: Skills;

    armor: string;
    classes: {
        name: string;
        level: number;
    }[];
    maturity!: string;
    age!: string;
    alignment!: string;
    characteristic!: string;
    class!: string;
    motivation!: string;
    flaw!: string;
    ideal: string;
    trait!: string;
    nobility!: string;
    profession: string;
    race!: string;
    skin!: string;
    title: string;
    weapons: string[];
    background!: string;
    languages: string[];
    speed: number;
    hair!: string;
    eyes!: string;

    constructor(
        context?: Context,
        properties: Partial<NPC> = {},
        options: NPCOptions = {}
    ) {
        this.context = context instanceof Context ? context : new Context();

        /**
         * born as...
         */
        if (properties && typeof properties.sex === "string") {
            this.sex = properties.sex;
        } else {
            this.sex = this.context.sex.pickRandom(
                this.withProperties(properties)
            ) as Sex;
        }

        /**
         * identify as...
         */
        if (properties && typeof properties.gender === "string") {
            this.gender = properties.gender;
        } else {
            this.gender = this.sex;
            if (Math.floor(Math.random() * TRANSGENDER_CHANCE) === 1) {
                this.gender = this.context.sex.pickRandom(
                    this.withProperties(properties)
                ) as Gender;
            } else if (Math.floor(Math.random() * NON_BINARY_CHANCE) === 1) {
                this.gender = "Non-Binary";
            }
        }

        (
            [
                "maturity",
                "alignment",
                "race",
                "age",
                "skin",
                "nobility",
                "motivation",
                "flaw",
                "trait",
                "hair",
                "eyes",
                "characteristic",
                "background"
            ] as (keyof SharedProperties)[]
        ).forEach(property => {
            if (properties && typeof properties[property] === "string") {
                this[property] = properties[property] as string;
            } else {
                this[property] = this.context[property].pickRandom(
                    this.withProperties(properties)
                );
            }
        });

        if (properties && typeof properties.classes === "string") {
            this.classes = properties.classes;
        } else {
            this.classes = [
                {
                    name: this.context.class.pickRandom(
                        this.withProperties(properties)
                    ),
                    level: 1
                }
            ];
        }

        if (properties && typeof properties.title === "string") {
            this.title = properties.title;
        } else if (this.nobility === "Knighted") {
            this.title = this.gender === "Male" ? "Sir" : "Dame";
        } else {
            this.title = this.context.title.pickRandom(
                this.withProperties(properties)
            );
        }

        if (properties && typeof properties.ideal === "string") {
            this.ideal = properties.ideal;
        } else {
            let [ethic, moral] = this.alignment.split(" ");
            this.ideal = this.context.ideal.pickRandom({
                ethic: ethic,
                moral: moral
            });
        }

        if (properties && typeof properties.profession === "string") {
            this.profession = properties.profession;
        } else if (this.maturity !== "infant") {
            this.profession = this.context.profession.pickRandom(
                Object.assign(
                    {
                        combatant: this.isCombatant()
                    },
                    this.withProperties(properties)
                ) as Partial<NPC>
            );
        } else {
            this.profession = "";
        }

        if (properties && typeof properties.forename === "string") {
            this.forename = properties.forename;

            if (properties.surname) {
                this.surname = properties.surname;
            } else {
                this.surname = "";
            }
        } else {
            let [forename, surname] = new NameList()
                .pickRandom(this.withProperties(properties))
                .split(" ");
            if (properties && typeof properties.surname === "string") {
                surname = properties.surname;
            }

            this.forename = forename.trim();
            this.surname = (surname || "").trim();
        }

        if (properties && typeof properties.armor === "string") {
            this.armor = properties.armor;
        } else if (this.isCombatant()) {
            this.armor = this.context.armor.pickRandom(
                this.withProperties(properties)
            );
        } else {
            this.armor = "";
        }

        if (properties && Array.isArray(properties.weapons)) {
            this.weapons = properties.weapons;
        } else if (this.isCombatant()) {
            this.weapons = new Array(Math.floor(Math.random() * 2) + 1)
                .fill(null)
                .map(() => {
                    if (this.context) {
                        return this.context.weapons.pickRandom(
                            this.withProperties(properties)
                        );
                    }

                    return "";
                });

            if (this.weapons[1] && this.weapons[1] === this.weapons[0]) {
                this.weapons.splice(1, 1);
            }
        } else {
            this.weapons = [];
        }

        if (
            properties &&
            properties.languages &&
            Array.isArray(properties.languages)
        ) {
            this.languages = properties.languages;
        } else {
            this.languages = this.getLanguages();
        }

        if (properties && properties.speed) {
            this.speed = properties.speed;
        } else {
            this.speed = this.getSpeed();
        }

        if (properties && properties.abilities instanceof Abilities) {
            this.abilities = properties.abilities;
        } else {
            this.abilities = new Abilities(options.abilitiesOptions);
        }

        if (properties && properties.skills instanceof Skills) {
            this.skills = properties.skills;
        } else {
            this.skills = new Skills(this);
        }

        if (properties && properties.hitPoints) {
            this.hitPoints = properties.hitPoints;
        } else {
            this.hitPoints = this.getHitPoints();
        }
    }

    withProperties(properties: Partial<NPC>) {
        let complete: Generic.Object = {};

        Object.keys(properties).forEach(property => {
            let property_i = property as keyof NPC;

            if (typeof properties[property_i] !== "undefined") {
                complete[property_i] = properties[property_i];
            }
        });

        Object.keys(this).forEach(property => {
            let property_i = property as keyof NPC;

            if (typeof this[property_i] !== "undefined") {
                complete[property_i] = this[property_i];
            }
        });

        return complete;
    }

    isCombatant() {
        if (["infant", "child"].includes(this.maturity)) return false;

        if (this.classes) {
            let is_combatant = this.classes.some(classSet => {
                let classItem = this.context.class.getItem(classSet.name);

                return (
                    classItem &&
                    typeof classItem.combatant === "boolean" &&
                    classItem.combatant
                );
            });

            if (!is_combatant) return false;
        }

        if (this.profession) {
            let chosen_profession = this.context.profession.getItem(
                this.profession
            );

            if (
                chosen_profession &&
                typeof chosen_profession.combatant === "boolean" &&
                !chosen_profession.combatant
            ) {
                return false;
            }
        }

        return true;
    }

    getName() {
        return [this.title, this.forename, this.surname]
            .filter(name => name)
            .join(" ");
    }

    getDescription() {
        let detail: string[] | string = [
            this.hair ? `${this.hair} hair` : "",
            this.skin ? `${this.skin} skin` : "",
            this.eyes ? `${this.eyes} eyes` : ""
        ].filter(value => value);

        if (detail.length > 2) {
            detail[detail.length - 1] = `and ${detail[detail.length - 1]}`;
            detail = ` with ${detail.join(", ")}`;
        } else if (detail.length > 1) {
            detail = ` with ${detail.join(" and ")}`;
        } else if (detail.length) {
            detail = detail[0];
        }

        let items: string = [
            this.armor ? `wears ${this.armor}` : "",
            this.weapons.length ? `wields a ${this.weapons.join(" and ")}` : ""
        ]
            .filter(value => value)
            .join(" and ");

        let pronoun = "";
        if (items) {
            pronoun = getPronoun("third", this.gender, "subject");
            pronoun = detail ? `. ${ucfirst(pronoun)} ` : `, ${pronoun} `;
        }

        return `${
            this.getName() + (this.profession ? ` (${this.profession})` : "")
        }: ${ucfirst(this.maturity)} ${this.race} ${this.classes}, ${
            this.alignment
        }. ${this.forename} is ${
            this.characteristic + detail + pronoun + items
        }. ${this.forename} seeks ${this.motivation}.`;
    }

    getSpeed() {
        if (this.speed) return this.speed;

        let raceItem = this.context.race.getItem(this.race);

        return raceItem && raceItem.speed ? raceItem.speed : 30;
    }

    getLevel() {
        return this.classes.reduce((level, classSet) => {
            return level + classSet.level;
        }, 0);
    }

    getHitPoints() {
        if (this.hitPoints) return this.hitPoints;

        let level = this.getLevel();

        let hitDice = this.classes.map(classSet => {
            let classItem = this.context.class.getItem(classSet.name);

            let hitDice =
                classItem && classItem.hitDice ? classItem.hitDice : "d4";

            if (level === 1) hitDice += "min" + hitDice.substring(1);

            return `(${hitDice} +
                ${this.abilities.getModifier("constitution")})`;
        });

        return new DiceRoll(hitDice.join(" + ")).total;
    }

    getLanguages() {
        if (this.languages) return this.languages;

        let allLanguages = this.context.languages.getValues();
        let raceItem = this.context.race.getItem(this.race);
        let bgItem = this.context.background.getItem(this.background);

        let input = [
            "Common",
            ...(raceItem && raceItem.languages ? raceItem.languages : []),
            ...(bgItem && bgItem.languages ? bgItem.languages : [])
        ];

        return List.pickList(input, () => allLanguages);
    }

    getTools() {
        let bgItem = this.context.background.getItem(this.background);

        return List.pickList([...(bgItem && bgItem.tools ? bgItem.tools : [])]);
    }

    getSkills() {
        let bgItem = this.context.background.getItem(this.background);

        return List.pickList([
            ...(bgItem && bgItem.skills ? bgItem.skills : [])
        ]);
    }

    getProficiencyBonus() {
        return Math.floor((this.getLevel() - 1) / 4) + 2;
    }
}
