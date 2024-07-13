import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { capitalise } from "../lib/capitalise.js";
import { PronounContext, PronounPerson, PronounTopic, getPronoun, isPronounTopic } from "../lib/getPronoun.js";
import { arrayIsTypeOf } from "../lib/helper/arrayIsTypeOf.js";
import { objectKeys } from "../lib/helper/objectKeys.js";
import { randomChance } from "../lib/randomChance.js";
import { randomIndex } from "../lib/randomIndex.js";
import { AutoComplete, AutoCompleteMap } from "../types/AutoComplete.js";
import { Context } from "../types/Context.js";
import { List } from "../util/List.js";
import { Ability } from "./Ability.js";
import { Age } from "./Age.js";
import { Armour } from "./Armour.js";
import { Background } from "./Background.js";
import { Class } from "./Class.js";
import { Colour } from "./Colour.js";
import { Ethic } from "./Ethic.js";
import { Eye } from "./Eye.js";
import { Flaw } from "./Flaw.js";
import { Gender, NON_BINARY } from "./Gender.js";
import { Hair } from "./Hair.js";
import { Ideal } from "./Ideal.js";
import { Language } from "./Language.js";
import { Level } from "./Level.js";
import { Maturity } from "./Maturity.js";
import { Moral } from "./Moral.js";
import { Motivation } from "./Motivation.js";
import { Name } from "./Name.js";
import { Nobility } from "./Nobility.js";
import { Physicality } from "./Physicality.js";
import { Profession } from "./Profession.js";
import { Race } from "./Race.js";
import { Sex } from "./Sex.js";
import { Skill } from "./Skill.js";
import { Skin } from "./Skin.js";
import { Title } from "./Title.js";
import { Tool } from "./Tool.js";

export class NPC {
    details: {
        tools: AutoComplete<Tool>[];
        languages: AutoComplete<Language>[];
    };

    property!: AutoCompleteMap<{
        age: Age;
        armour: Armour;
        background: Background;
        class: Class;
        ethic: Ethic;
        eyeColour: Colour;
        flaw: Flaw;
        gender: Gender;
        hairColour: Colour;
        ideal: Ideal;
        maturity: Maturity;
        moral: Moral;
        motivation: Motivation;
        name: string;
        nobility: Nobility;
        physicality: Physicality;
        profession: Profession;
        race: Race;
        sex: Sex;
        skinColour: Colour;
        title: Title;
        level: Level;
    }>;

    abilities: NPC.Abilities;
    skills: NPC.Skills;

    readonly config: {
        /**
         * ### Explanation of `transgenderChance` & `nonBinaryChance`
         *
         * **Sex:** 'Male' (50% chance), and 'Female' (50% chance)
         *
         * > Not affected by `transgenderChance` or `nonBinaryChance`
         *
         * ---
         *
         * **Gender:** Copies `sex` (92.16% chance), Rerolls `sex` (4% chance), and 'Non-Binary' (3.84% chance)
         * > Rerolls `sex` and is affected by `transgenderChance` (default 1/25, i.e. 4%) - only if the contextual sex list contains multiple items
         * >
         * > 'Non-Binary' is affected by `nonBinaryChance` (default 1/25, i.e. 4%) - only if the contextual gender list contains 'Non-Binary'
         * >
         * > 'Non-Binary' is only if `transgenderChance` fails, so the % is 24/25 * 1/25 (i.e. 3.84%)
         *
         * **Sample (100):** 'Male' (46 Cis, 2 Trans), 'Female' (46 Cis, 2 Trans), and 'Non-Binary' (4)
         */
        options: {
            /**
             * 1/X (default 25) chance to invert `sex` or `true`/`false` to force it
             */
            transgenderChance?: number | boolean;

            /**
             * 1/X (default 25) chance for gender to be 'Non-Binary' or `true`/`false` to force it
             */
            nonBinaryChance?: number | boolean;
        };
        context: Context<NPC["property"]>;
        order: Array<keyof NPC["property"]>;
        abilities: NPC.Abilities["config"];
    };

    /**
     * ### Random Non-Player Character
     *
     * @param property to pre-define the NPC properties
     * @param config to set context, options, and generation order
     *
     * Control when properties are generated, this limits the possible combinations (e.g. Nobility influences Title).
     *
     * Default `order` follows human progression, i.e. properties known at conception, birth, childhood, and adulthood.
     */
    constructor(property: Partial<NPC["property"]> = {}, config?: Partial<NPC["config"]>) {
        this.config = {
            context: {
                age: config?.context?.age ?? new Age.List(),
                armour: config?.context?.armour ?? new Armour.List(),
                background: config?.context?.background ?? new Background.List(),
                class: config?.context?.class ?? new Class.List(),
                ethic: config?.context?.ethic ?? new Ethic.List(),
                eyeColour: config?.context?.eyeColour ?? new Eye.Colour.List(),
                flaw: config?.context?.flaw ?? new Flaw.List(),
                gender: config?.context?.gender ?? new Gender.List(),
                hairColour: config?.context?.hairColour ?? new Hair.Colour.List(),
                ideal: config?.context?.ideal ?? new Ideal.List(),
                maturity: config?.context?.maturity ?? new Maturity.List(),
                moral: config?.context?.moral ?? new Moral.List(),
                motivation: config?.context?.motivation ?? new Motivation.List(),
                name: config?.context?.name ?? new Name.List(),
                nobility: config?.context?.nobility ?? new Nobility.List(),
                physicality: config?.context?.physicality ?? new Physicality.List(),
                profession: config?.context?.profession ?? new Profession.List(),
                race: config?.context?.race ?? new Race.List(),
                sex: config?.context?.sex ?? new Sex.List(),
                skinColour: config?.context?.skinColour ?? new Skin.Colour.List(),
                title: config?.context?.title ?? new Title.List(),
                level: config?.context?.level ?? new Level.List()
            },
            options: {
                nonBinaryChance: config?.options?.nonBinaryChance ?? 25,
                transgenderChance: config?.options?.transgenderChance ?? 25
            },
            order: config?.order ?? [
                // Conception
                "sex",
                "gender",
                "race",
                "nobility",
                // Birth
                "name",
                "maturity",
                "age",
                "title",
                "moral",
                "ethic",
                "skinColour",
                "eyeColour",
                "hairColour",
                // Childhood
                "background",
                "physicality",
                "motivation",
                "ideal",
                "flaw",
                // Adulthood
                "class",
                "armour",
                "profession",
                "level"
            ],
            abilities: config?.abilities ?? ""
        };

        /**
         * Ensure `order` contains all `context` keys
         */
        const contextKeys = objectKeys(this.config.context);
        if (contextKeys.length !== this.config.order.length) {
            for (let i = 0; i < contextKeys.length; i++) {
                const key = contextKeys[i];
                if (key && !this.config.order.includes(key)) {
                    this.config.order.push(key);
                }
            }
        }

        /**
         * Set defined properties
         */
        this.property = property as NPC["property"];

        /**
         * Set generated properties
         */
        for (let i = 0; i < this.config.order.length; i++) {
            const property = this.config.order[i];

            if (!property || typeof this.property[property] !== "undefined") {
                continue;
            }

            const method = `pick${capitalise(property)}` as const;
            try {
                if (method in this) {
                    // @ts-expect-error TypeScript union collapses to never
                    this.property[property] = this[method]();
                } else {
                    // @ts-expect-error TypeScript union collapses to never
                    this.property[property] = this.config.context[property]
                        .filter({
                            ...this.property,
                            isCombatant: this.isCombatant()
                        })
                        .pick();
                }
            } catch (error: unknown) {
                /**
                 * Improve the error message to distinguish the property
                 */
                /* istanbul ignore next -- @preserve */
                if (error instanceof Error) {
                    error = new Error(`${capitalise(property)}: ${error.message}`);
                }

                throw error;
            }
        }

        /**
         * Pick all derived details
         */
        this.details = {
            languages: this.pickLanguages(),
            tools: this.pickTools()
        };

        this.abilities = new NPC.Abilities(config?.abilities);
        this.skills = new NPC.Skills(this);
    }

    /**
     * Generate the NPC's armour
     */
    protected pickArmour() {
        if (this.isCombatant() && this.config.context.armour) {
            return this.config.context.armour.filter(this.property).pick();
        }

        return "";
    }

    /**
     * Generate the NPC's gender
     */
    protected pickGender() {
        if (
            this.config.context.sex?.items.length &&
            this.config.context.sex.items.length > 1 &&
            randomChance(this.config.options.transgenderChance!)
        ) {
            return this.config.context.sex.filter(item => item.value !== this.property.sex).pick();
        }

        if (this.config.context.gender?.item.has(NON_BINARY) && randomChance(this.config.options.nonBinaryChance!)) {
            return NON_BINARY;
        }

        /**
         * When `sex` is before `gender` in the `order` array, use `sex`
         */
        if (this.property.sex) {
            return this.property.sex;
        }

        /**
         * Otherwise we pick a gender from the provided context
         */
        return this.config.context.gender?.filter(this.property).pick();
    }

    /**
     * Generate the NPC's tools
     */
    protected pickTools() {
        const tools: AutoComplete<Tool>[] = [];

        if (this.property.background) {
            const background = this.config.context.background?.item.get(this.property.background);

            if (background && "tools" in background && arrayIsTypeOf(background.tools, "string")) {
                tools.push(...List.pickList(background.tools));
            }
        }

        return tools;
    }

    /**
     * Generate the NPC's languages
     */
    protected pickLanguages() {
        const languages: AutoComplete<Language>[] = [];

        if (this.property.background) {
            const background = this.config.context.background?.item.get(this.property.background);

            if (background && "languages" in background && arrayIsTypeOf(background.languages, "string")) {
                languages.push(...List.pickList(background.languages));
            }
        }

        return languages;
    }

    /**
     * Get the NPC pronoun based on the context and person
     */
    getPronoun(context: PronounContext = "their", person: PronounPerson = "third") {
        let pronounTopic: PronounTopic = "Non-Binary";
        if (isPronounTopic(this.property.gender)) {
            pronounTopic = this.property.gender;
        } else if (isPronounTopic(this.property.sex)) {
            pronounTopic = this.property.sex;
        }

        return getPronoun(context, pronounTopic, person);
    }

    /**
     * Determine whether the NPC is a combatant
     */
    isCombatant() {
        /**
         * Check whether the maturity is a combatant
         */
        const currentMaturity = this.config.context.maturity?.item.get(this.property.maturity);
        if (currentMaturity && "isCombatant" in currentMaturity && !currentMaturity.isCombatant) {
            return false;
        }

        /**
         * Check whether the class is a combatant
         */
        const currentClass = this.config.context.class?.item.get(this.property.class);
        if (currentClass && "isCombatant" in currentClass && !currentClass.isCombatant) {
            return false;
        }

        /**
         * Check whether the profession is a combatant
         */
        const currentProfession = this.config.context.profession?.item.get(this.property.profession);
        if (currentProfession && "isCombatant" in currentProfession && !currentProfession.isCombatant) {
            return false;
        }

        return true;
    }

    /**
     * Get the NPC proficiency bonus
     */
    getProficiencyBonus() {
        return Math.floor((this.property.level - 1) / 4) + 2;
    }

    // #region V1 API
    /**
     * Get the NPC level
     */
    getLevel() {
        process.emitWarning(
            "dnd-generator: `NPC.getLevel` has been removed, use `NPC.property.level` instead.",
            "DeprecationWarning"
        );

        return this.property.level;
    }

    /**
     * Get the NPC class and level as an array
     */
    get classes() {
        process.emitWarning(
            "dnd-generator: `NPC.classes` has been removed, use `NPC.property.class` and `NPC.property.level` instead.",
            "DeprecationWarning"
        );

        return [
            {
                name: this.property.class,
                level: this.property.level
            }
        ];
    }
}

const SKILL_LIST = new Skill.List();

export namespace NPC {
    const ABILITIES = new Ability.List().getValues();
    const DEFAULT_NOTATION = "4d6r=1d1";

    export class Abilities {
        #score: {
            [K in Ability]?: number;
        } = {};

        constructor(
            /**
             * 1. Array of six predefined numbers
             * 2. "array" to use the standard array
             * 3. Valid notation for https://dice-roller.github.io/documentation/
             */
            readonly config?: Ability.Scores | "array" | string | { [K in Ability]?: number }
        ) {
            let scores: Ability.Scores;
            switch (true) {
                case Array.isArray(config):
                    scores = config;
                    break;

                case typeof config === "object":
                    for (const ability of ABILITIES) {
                        this.setScore(ability, config[ability] ?? new DiceRoll(DEFAULT_NOTATION).total);
                    }
                    return;

                case config === "array":
                    scores = Ability.STANDARD_ARRAY;
                    break;

                default:
                    const notation = config || DEFAULT_NOTATION;

                    scores = [
                        new DiceRoll(notation).total,
                        new DiceRoll(notation).total,
                        new DiceRoll(notation).total,
                        new DiceRoll(notation).total,
                        new DiceRoll(notation).total,
                        new DiceRoll(notation).total
                    ];
            }

            for (const ability of ABILITIES) {
                this.setScore(ability, scores.splice(randomIndex(scores), 1)[0]!);
            }
        }

        /**
         * Get the score value for a given ability
         *
         * @param ability to get the score value for
         */
        getScore(ability: Ability) {
            return this.#score[ability]!;
        }

        /**
         * Set the score value for a given ability
         *
         * @param ability to set the score value for
         * @param value to set the ability score to
         */
        setScore(ability: Ability, value: number) {
            this.#score[ability] = value;

            return this;
        }

        /**
         * Get the modifier for a given ability
         *
         * @param ability to get the modifier for
         */
        getModifier(ability: Ability) {
            return Math.floor(this.getScore(ability) / 2 - 5);
        }
    }

    export class Skills {
        #npc: NPC;
        #proficient = new Set<Skill>();

        constructor(npc?: NPC) {
            this.#npc = npc ?? new NPC();
        }

        setProficient(skill: Skill, isProficient = true) {
            this.#proficient[isProficient ? "add" : "delete"](skill);

            return this;
        }

        isProficient(skill: Skill) {
            return this.#proficient.has(skill);
        }

        getValue(skill: Skill) {
            const modifier = this.#npc.abilities.getModifier(SKILL_LIST.getItem(skill)!.ability);

            if (this.isProficient(skill)) {
                return modifier + this.#npc.getProficiencyBonus();
            }

            return modifier;
        }
    }
}
