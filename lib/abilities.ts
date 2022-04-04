interface SkillsList {
    acrobatics: number;
    animal_handling: number;
    arcana: number;
    athletics: number;
    deception: number;
    history: number;
    insight: number;
    intimidation: number;
    investigation: number;
    medicine: number;
    nature: number;
    perception: number;
    performance: number;
    persuasion: number;
    religion: number;
    sleight_of_hand: number;
    stealth: number;
    survival: number;
}

export class Skills {
    acrobatics: number = 0;
    animal_handling: number = 0;
    arcana: number = 0;
    athletics: number = 0;
    deception: number = 0;
    history: number = 0;
    insight: number = 0;
    intimidation: number = 0;
    investigation: number = 0;
    medicine: number = 0;
    nature: number = 0;
    perception: number = 0;
    performance: number = 0;
    persuasion: number = 0;
    religion: number = 0;
    sleight_of_hand: number = 0;
    stealth: number = 0;
    survival: number = 0;
}

interface AbilitiesList {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
}

export class Abilities {
    strength: number = 0;
    dexterity: number = 0;
    constitution: number = 0;
    intelligence: number = 0;
    wisdom: number = 0;
    charisma: number = 0;

    setValue(ability: keyof AbilitiesList, value: number) {
        this[ability] = value;

        return this;
    }

    getValue(ability: keyof AbilitiesList) {
        return this[ability] as number;
    }

    getModifier(ability: keyof AbilitiesList) {
        return Math.floor(this.getValue(ability) / 2 - 5);
    }
}

let test = new Abilities();

test.getValue("dexterity");
