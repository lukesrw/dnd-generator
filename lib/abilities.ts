import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { List } from "./List";

interface SkillsList {
    acrobatics: boolean;
    animal_handling: boolean;
    arcana: boolean;
    athletics: boolean;
    deception: boolean;
    history: boolean;
    insight: boolean;
    intimidation: boolean;
    investigation: boolean;
    medicine: boolean;
    nature: boolean;
    perception: boolean;
    performance: boolean;
    persuasion: boolean;
    religion: boolean;
    sleight_of_hand: boolean;
    stealth: boolean;
    survival: boolean;
}

export class Skills implements SkillsList {
    acrobatics: boolean = false;
    animal_handling: boolean = false;
    arcana: boolean = false;
    athletics: boolean = false;
    deception: boolean = false;
    history: boolean = false;
    insight: boolean = false;
    intimidation: boolean = false;
    investigation: boolean = false;
    medicine: boolean = false;
    nature: boolean = false;
    perception: boolean = false;
    performance: boolean = false;
    persuasion: boolean = false;
    religion: boolean = false;
    sleight_of_hand: boolean = false;
    stealth: boolean = false;
    survival: boolean = false;
}

interface AbilitiesList {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
}

export type AbilityScores = [number, number, number, number, number, number];

export interface AbilitiesOptions {
    /**
     * If string supplied, must be valid input for https://dice-roller.github.io/documentation/
     */
    method?: AbilityScores | "array" | string;
}

export class Abilities implements AbilitiesList {
    strength: number = 0;
    dexterity: number = 0;
    constitution: number = 0;
    intelligence: number = 0;
    wisdom: number = 0;
    charisma: number = 0;

    constructor(options: AbilitiesOptions = {}) {
        let abilityScores: AbilityScores;
        let abilities: (keyof AbilitiesList)[] = [
            "strength",
            "dexterity",
            "constitution",
            "intelligence",
            "wisdom",
            "charisma"
        ];

        if (options.method === "array") {
            abilityScores = [15, 14, 13, 12, 10, 8];
        } else if (Array.isArray(options.method)) {
            abilityScores = options.method;
        } else {
            if (typeof options.method !== "string") {
                options.method = "4d6r=1d1";
            }

            abilityScores = [
                new DiceRoll(options.method).total,
                new DiceRoll(options.method).total,
                new DiceRoll(options.method).total,
                new DiceRoll(options.method).total,
                new DiceRoll(options.method).total,
                new DiceRoll(options.method).total
            ];
        }

        abilities.forEach(ability => {
            this.setValue(ability, List.pickRandom(abilityScores));
        });
    }

    setValue(ability: keyof AbilitiesList, value: number) {
        this[ability] = value;

        return this;
    }

    getValue(ability: keyof AbilitiesList) {
        return this[ability];
    }

    getModifier(ability: keyof AbilitiesList) {
        return Math.floor(this.getValue(ability) / 2 - 5);
    }
}
