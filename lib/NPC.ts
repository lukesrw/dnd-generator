import { NameList } from "./name/name";
import { Place } from "./Place";

const RE_ROLL_GENDER_CHANCE = 50;

export class NPC {
    place: Place;

    forename: string;
    surname: string;

    gender: string;
    sex: string;

    alignment: string;
    class: string;
    motivation: string;
    nobility: string;
    profession: string;
    race: string;
    title: string;

    constructor(place: Place, properties?: Partial<NPC>) {
        this.place = place;

        if (properties && properties.sex) {
            this.sex = properties.sex;
        } else {
            this.sex = this.place.lists.sex.pickRandom(this);
        }

        if (properties && properties.gender) {
            this.gender = properties.gender;
        } else {
            this.gender = this.sex;
            if (Math.floor(Math.random() * RE_ROLL_GENDER_CHANCE) === 1) {
                this.gender = this.place.lists.sex.pickRandom(this);
            }
        }

        if (properties && properties.race) {
            this.race = properties.race;
        } else {
            this.race = this.place.lists.race.pickRandom(this);
        }

        if (properties && properties.class) {
            this.class = properties.class;
        } else {
            this.class = this.place.lists.class.pickRandom(this);
        }

        if (properties && properties.nobility) {
            this.nobility = properties.nobility;
        } else {
            this.nobility = this.place.lists.nobility.pickRandom(this);
        }

        if (properties && properties.title) {
            this.title = properties.title;
        } else if (this.nobility === "Knighted") {
            this.title = this.gender === "Male" ? "Sir" : "Dame";
        } else {
            this.title = this.place.lists.title.pickRandom(this);
        }

        if (properties && properties.alignment) {
            this.alignment = properties.alignment;
        } else {
            this.alignment = this.place.lists.alignment.pickRandom(this);
        }

        if (properties && properties.motivation) {
            this.motivation = properties.motivation;
        } else {
            this.motivation = this.place.lists.motivation.pickRandom(this);
        }

        if (properties && properties.profession) {
            this.profession = properties.profession;
        } else {
            this.profession = this.place.lists.profession.pickRandom(this);
        }

        this.surname = "";
        if (properties && properties.forename) {
            this.forename = properties.forename;

            if (properties.surname) this.surname = properties.surname;
        } else {
            let [forename, surname] = new NameList().pickRandom().split(" ");

            if (properties && properties.surname) surname = properties.surname;

            this.forename = (forename || "").trim();
            this.surname = (surname || "").trim();
        }
    }
}
