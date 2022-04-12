import * as Generic from "../../interfaces/generic";
import { List } from "../List";
import { Gender } from "../list/gender/gender";
import { NameList } from "../list/name/name";
import { Sex } from "../list/sex/sex";
import { getPronoun, ucfirst } from "../utils";
import { Place, SharedProperties } from "./Place";

const TRANSGENDER_CHANCE = 50;
const NON_BINARY_CHANCE = 50;

export class NPC implements SharedProperties {
    // basic
    place: Place;

    // name
    forename: string;
    surname: string;

    sex: Sex;
    gender: Gender;

    maturity!: string;
    age!: string;
    alignment!: string;
    armor: string;
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

    constructor(place?: Place, properties: Partial<NPC> = {}) {
        this.place = place instanceof Place ? place : new Place();

        /**
         * born as...
         */
        if (properties && typeof properties.sex === "string") {
            this.sex = properties.sex;
        } else {
            this.sex = this.place.lists.sex.pickRandom(
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
                this.gender = this.place.lists.sex.pickRandom(
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
                "class",
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
                this[property] = this.place.lists[property].pickRandom(
                    this.withProperties(properties)
                );
            }
        });

        if (properties && typeof properties.title === "string") {
            this.title = properties.title;
        } else if (this.nobility === "Knighted") {
            this.title = this.gender === "Male" ? "Sir" : "Dame";
        } else {
            this.title = this.place.lists.title.pickRandom(
                this.withProperties(properties)
            );
        }

        if (properties && typeof properties.ideal === "string") {
            this.ideal = properties.ideal;
        } else {
            let [ethic, moral] = this.alignment.split(" ");
            this.ideal = this.place.lists.ideal.pickRandom({
                ethic: ethic,
                moral: moral
            });
        }

        if (properties && typeof properties.profession === "string") {
            this.profession = properties.profession;
        } else if (this.maturity !== "infant") {
            this.profession = this.place.lists.profession.pickRandom(
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
            this.armor = this.place.lists.armor.pickRandom(
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
                    if (this.place) {
                        return this.place.lists.weapons.pickRandom(
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

        if (this.class) {
            let chosen_class = this.place.lists.class.getItem(this.class);

            if (
                chosen_class &&
                typeof chosen_class.combatant === "boolean" &&
                !chosen_class.combatant
            ) {
                return false;
            }
        }

        if (this.profession) {
            let chosen_profession = this.place.lists.profession.getItem(
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
        }: ${ucfirst(this.maturity)} ${this.race} ${this.class}, ${
            this.alignment
        }. ${this.forename} is ${
            this.characteristic + detail + pronoun + items
        }. ${this.forename} seeks ${this.motivation}.`;
    }

    getSpeed() {
        let raceItem = this.place.lists.race.getItem(this.race);

        return raceItem && raceItem.speed ? raceItem.speed : 30;
    }

    getLanguages() {
        let allLanguages = this.place.lists.languages.getValues();
        let raceItem = this.place.lists.race.getItem(this.race);
        let bgItem = this.place.lists.background.getItem(this.background);

        let input = [
            "Common",
            ...(raceItem && raceItem.languages ? raceItem.languages : []),
            ...(bgItem && bgItem.languages ? bgItem.languages : [])
        ];

        return List.pickList(input, (item?: string) => {
            if (item) {
                let index = allLanguages.indexOf(item);

                if (index > -1) {
                    allLanguages.splice(index, 1);
                }
            }

            return allLanguages;
        });
    }

    getTools() {
        let bgItem = this.place.lists.background.getItem(this.background);

        return List.pickList([...(bgItem && bgItem.tools ? bgItem.tools : [])]);
    }

    getSkills() {
        let bgItem = this.place.lists.background.getItem(this.background);

        return List.pickList([
            ...(bgItem && bgItem.skills ? bgItem.skills : [])
        ]);
    }
}
