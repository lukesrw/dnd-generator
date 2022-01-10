import { Gender } from "./gender/gender";
import { getPronoun } from "./language/common";
import { NameList } from "./name/name";
import { Place } from "./Place";
import { Sex } from "./sex/sex";
import { ucfirst } from "./utils";

const TRANSGENDER_CHANCE = 50;
const NON_BINARY_CHANCE = 50;

export class NPC {
    // basic
    place: Place;

    // name
    forename: string;
    surname: string;

    sex: Sex;
    gender: Gender;

    age: string;
    alignment: string;
    armor: string;
    class: string;
    motivation: string;
    nobility: string;
    profession: string;
    race: string;
    skin: string;
    title: string;
    weapons: string[];

    // physical
    hair: string;
    eyes: string;

    constructor(place?: Place, properties: Partial<NPC> = {}) {
        this.place = place instanceof Place ? place : new Place();

        /**
         * born as...
         */
        if (properties && typeof properties.sex === "string") {
            this.sex = properties.sex;
        } else {
            this.sex = this.place.lists.sex.pickRandom(
                Object.assign({}, properties, this)
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
                    Object.assign({}, properties, this)
                ) as Gender;
            } else if (Math.floor(Math.random() * NON_BINARY_CHANCE) === 1) {
                this.gender = "Non-Binary";
            }
        }

        if (properties && typeof properties.age === "string") {
            this.age = properties.age.toLowerCase();
        } else {
            this.age = this.place.lists.age.pickRandom(
                Object.assign({}, properties, this)
            );
        }

        if (properties && typeof properties.alignment === "string") {
            this.alignment = properties.alignment;
        } else {
            this.alignment = this.place.lists.alignment.pickRandom(
                Object.assign({}, properties, this)
            );
        }

        if (properties && typeof properties.race === "string") {
            this.race = properties.race;
        } else {
            this.race = this.place.lists.race.pickRandom(
                Object.assign({}, properties, this)
            );
        }

        if (properties && typeof properties.skin === "string") {
            this.skin = properties.skin;
        } else {
            this.skin = this.place.lists.skin.pickRandom(
                Object.assign({}, properties, this)
            );
        }

        if (properties && typeof properties.class === "string") {
            this.class = properties.class;
        } else {
            this.class = this.place.lists.class.pickRandom(
                Object.assign({}, properties, this)
            );
        }

        if (properties && typeof properties.nobility === "string") {
            this.nobility = properties.nobility;
        } else {
            this.nobility = this.place.lists.nobility.pickRandom(
                Object.assign({}, properties, this)
            );
        }

        if (properties && typeof properties.title === "string") {
            this.title = properties.title;
        } else if (this.nobility === "Knighted") {
            this.title = this.gender === "Male" ? "Sir" : "Dame";
        } else {
            this.title = this.place.lists.title.pickRandom(
                Object.assign({}, properties, this)
            );
        }

        if (properties && typeof properties.motivation === "string") {
            this.motivation = properties.motivation;
        } else {
            this.motivation = this.place.lists.motivation.pickRandom(
                Object.assign({}, properties, this)
            );
        }

        if (properties && typeof properties.profession === "string") {
            this.profession = properties.profession;
        } else {
            this.profession = this.place.lists.profession.pickRandom(
                Object.assign(
                    {
                        combatant: this.isCombatant()
                    },
                    properties,
                    this
                )
            );
        }

        this.surname = "";
        if (properties && typeof properties.forename === "string") {
            this.forename = properties.forename;

            if (properties.surname) this.surname = properties.surname;
        } else {
            let [forename, surname] = new NameList()
                .pickRandom(Object.assign({}, properties, this))
                .split(" ");
            if (properties && typeof properties.surname === "string") {
                surname = properties.surname;
            }

            this.forename = forename.trim();
            this.surname = (surname || "").trim();
        }

        if (properties && typeof properties.hair === "string") {
            this.hair = properties.hair;
        } else {
            this.hair = this.place.lists.hair.pickRandom(
                Object.assign({}, properties, this)
            );
        }

        if (properties && typeof properties.eyes === "string") {
            this.eyes = properties.eyes;
        } else {
            this.eyes = this.place.lists.eye.pickRandom(
                Object.assign({}, properties, this)
            );
        }

        this.armor = "";
        if (properties && typeof properties.armor === "string") {
            this.armor = properties.armor;
        } else if (this.isCombatant()) {
            this.armor = this.place.lists.armor.pickRandom(
                Object.assign({}, properties, this)
            );
        }

        this.weapons = [];
        if (properties && Array.isArray(properties.weapons)) {
            this.weapons = properties.weapons;
        } else if (this.isCombatant()) {
            this.weapons = new Array(Math.floor(Math.random() * 2) + 1)
                .fill(null)
                .map(() => {
                    if (this.place) {
                        return this.place.lists.weapon.pickRandom(
                            Object.assign({}, properties, this)
                        );
                    }

                    return "";
                });

            if (this.weapons[1] && this.weapons[1] === this.weapons[0]) {
                this.weapons.splice(1, 1);
            }
        }
    }

    isCombatant() {
        if (["infant", "child"].includes(this.age)) return false;

        if (this.class) {
            let { combatant } = this.place.lists.class.getFiltered({
                value: this.class
            })[0];

            if (typeof combatant === "boolean" && !combatant) return false;
        }

        if (this.profession) {
            let { combatant } = this.place.lists.profession.getFiltered({
                value: this.profession
            })[0];

            if (typeof combatant === "boolean" && !combatant) return false;
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
        }: ${ucfirst(this.age)} ${this.race} ${this.class}, ${
            this.alignment
        }. ${this.forename} is {physical detail}${detail + pronoun + items}. ${
            this.forename
        } seeks ${this.motivation}.`;
    }
}
