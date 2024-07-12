import { Ability } from "./component/Ability.js";
import { Age } from "./component/Age.js";
import { Alignment } from "./component/Alignment.js";
import { Animal } from "./component/Animal.js";
import { Armour } from "./component/Armour.js";
import { Background } from "./component/Background.js";
import { Class } from "./component/Class.js";
import { Colour } from "./component/Colour.js";
import { Conclusion } from "./component/Conclusion.js";
import { Currency } from "./component/Currency.js";
import { Danger } from "./component/Danger.js";
import { Dice } from "./component/Dice.js";
import { Ethic } from "./component/Ethic.js";
import { Eye } from "./component/Eye.js";
import { Flaw } from "./component/Flaw.js";
import { Gender } from "./component/Gender.js";
import { Gossip } from "./component/Gossip.js";
import { Hair } from "./component/Hair.js";
import { Ideal } from "./component/Ideal.js";
import { Language as _Language } from "./component/Language.js";
import { Level } from "./component/Level.js";
import { Location } from "./component/Location.js";
import { Maturity } from "./component/Maturity.js";
import { MoneySink } from "./component/MoneySink.js";
import { Monster } from "./component/Monster.js";
import { Moral } from "./component/Moral.js";
import { Motivation } from "./component/Motivation.js";
import { Name } from "./component/Name.js";
import { Nobility } from "./component/Nobility.js";
import { NPC } from "./component/NPC.js";
import { Past } from "./component/Past.js";
import { Physicality } from "./component/Physicality.js";
import { Profession } from "./component/Profession.js";
import { Race } from "./component/Race.js";
import { Relationship } from "./component/Relationship.js";
import { Rumour } from "./component/Rumour.js";
import { Sex } from "./component/Sex.js";
import { Skill } from "./component/Skill.js";
import { Skin } from "./component/Skin.js";
import { Subtlety } from "./component/Subtlety.js";
import { Tavern } from "./component/Tavern.js";
import { Title } from "./component/Title.js";
import { Tool } from "./component/Tool.js";
import { Trait } from "./component/Trait.js";
import { Verb } from "./component/Verb.js";
import { Weapon } from "./component/Weapon.js";
import { capitalise } from "./lib/capitalise.js";
import { getPronoun } from "./lib/getPronoun.js";
import { randomChance } from "./lib/randomChance.js";
import { randomIndex } from "./lib/randomIndex.js";
import { randomItem } from "./lib/randomItem.js";
import { randomNumber } from "./lib/randomNumber.js";
import { unCapitalise } from "./lib/unCapitalise.js";
import { List as _List } from "./util/List.js";
import { Sentence } from "./util/Sentence.js";

// #region V2 API
export const Component = Object.freeze({
    Ability,
    Age,
    Alignment,
    Animal,
    Armour,
    Background,
    Class,
    Colour,
    Conclusion,
    Currency,
    Danger,
    Dice,
    Ethic,
    Eye,
    Flaw,
    Gender,
    Gossip,
    Hair,
    Ideal,
    Language: _Language,
    Level,
    Location,
    Maturity,
    MoneySink,
    Monster,
    Moral,
    Motivation,
    Name,
    Nobility,
    NPC,
    Past,
    Physicality,
    Profession,
    Race,
    Relationship,
    Rumour,
    Sex,
    Skill,
    Skin,
    Subtlety,
    Tavern,
    Tool,
    Trait,
    Verb,
    Weapon
});

export const Lib = Object.freeze({
    capitalise,
    getPronoun,
    randomChance,
    randomIndex,
    randomItem,
    randomNumber,
    unCapitalise
});

export const Util = Object.freeze({
    List: _List,
    Sentence
});

// #region V1 API
export const Generator = Object.freeze({
    get NPC() {
        process.emitWarning(
            "dnd-generator: `Generator.NPC` has been removed, use `Component.NPC` instead.",
            "DeprecationWarning"
        );

        return NPC;
    },
    get Place(): never {
        throw new Error(
            "dnd-generator: `Generator.Place` has been removed. See: https://github.com/lukesrw/dnd-generator/blob/master/docs/Contexts.md"
        );
    },
    get Tavern() {
        process.emitWarning(
            "dnd-generator: `Generator.Tavern` has been removed, use `Component.Tavern` instead.",
            "DeprecationWarning"
        );

        return Tavern;
    },
    get Skills() {
        process.emitWarning(
            "dnd-generator: `Generator.Skills` has been removed, use `Component.NPC.Skills` instead.",
            "DeprecationWarning"
        );

        return NPC.Skills;
    }
});

export const Language = Object.freeze({
    Common: {
        get getPronoun() {
            process.emitWarning(
                "dnd-generator: `Language.Common.getPronoun` is deprecated, use `Lib.getPronoun` instead.",
                "DeprecationWarning"
            );

            return getPronoun;
        }
    }
});

export const List = Object.freeze({
    get Age() {
        process.emitWarning(
            "dnd-generator: `List.Age` is deprecated, use `Component.Age.List` instead.",
            "DeprecationWarning"
        );

        return Age.List;
    },
    get Alignment() {
        process.emitWarning(
            "dnd-generator: `List.Alignment` is deprecated, use `Component.Alignment.List` instead.",
            "DeprecationWarning"
        );

        return Alignment.List;
    },
    get Armor() {
        process.emitWarning(
            "dnd-generator: `List.Armor` is deprecated, use `Component.Armour.List` instead.",
            "DeprecationWarning"
        );

        return Armour.List;
    },
    get Characteristics() {
        process.emitWarning(
            "dnd-generator: `List.Characteristics` is deprecated, use `Component.Physicality.List` instead.",
            "DeprecationWarning"
        );

        return Physicality.List;
    },
    get Class() {
        process.emitWarning(
            "dnd-generator: `List.Class` is deprecated, use `Component.Class.List` instead.",
            "DeprecationWarning"
        );

        return Class.List;
    },
    get Eye() {
        process.emitWarning(
            "dnd-generator: `List.Eye` is deprecated, use `Component.Eye.Colour.List` instead.",
            "DeprecationWarning"
        );

        return Eye.Colour.List;
    },
    get Hair() {
        process.emitWarning(
            "dnd-generator: `List.Hair` is deprecated, use `Component.Hair.Colour.List` instead.",
            "DeprecationWarning"
        );

        return Hair.Colour.List;
    },
    get List() {
        process.emitWarning("dnd-generator: `List.List` is deprecated, use `List` instead.", "DeprecationWarning");

        return _List;
    },
    get Maturity() {
        process.emitWarning(
            "dnd-generator: `List.Maturity` is deprecated, use `Component.Maturity.List` instead.",
            "DeprecationWarning"
        );

        return Maturity.List;
    },
    get Motivation() {
        process.emitWarning(
            "dnd-generator: `List.Motivation` is deprecated, use `Component.Motivation.List` instead.",
            "DeprecationWarning"
        );

        return Motivation.List;
    },
    get Name() {
        process.emitWarning(
            "dnd-generator: `List.Name` is deprecated, use `Component.Name.List` instead.",
            "DeprecationWarning"
        );

        return Name.List;
    },
    get Nobility() {
        process.emitWarning(
            "dnd-generator: `List.Nobility` is deprecated, use `Component.Nobility.List` instead.",
            "DeprecationWarning"
        );

        return Nobility.List;
    },
    Professions: Object.freeze({
        get All() {
            process.emitWarning(
                "dnd-generator: `List.Professions.All` is deprecated, use `Component.Profession.List` instead.",
                "DeprecationWarning"
            );

            return Profession.List;
        },
        get Common(): never {
            throw new Error(
                "dnd-generator: `List.Professions.Common` has been removed, use `Profession.List({ nobility: 'Common' })` instead."
            );
        },
        get Esquire(): never {
            throw new Error(
                "dnd-generator: `List.Professions.Esquire` has been removed, use `Profession.List({ nobility: 'Esquire' })` instead."
            );
        },
        get Gentle(): never {
            throw new Error(
                "dnd-generator: `List.Professions.Gentle` has been removed, use `Profession.List({ nobility: 'Gentle' })` instead."
            );
        },
        get Merchant(): never {
            throw new Error(
                "dnd-generator: `List.Professions.Merchant` has been removed, use `Profession.List({ nobility: 'Merchant' })` instead."
            );
        },
        get Noble(): never {
            throw new Error(
                "dnd-generator: `List.Professions.Noble` has been removed, use `Profession.List({ nobility: 'Noble' })` instead."
            );
        },
        get Peasant(): never {
            throw new Error(
                "dnd-generator: `List.Professions.Peasant` has been removed, use `Profession.List({ nobility: 'Peasant' })` instead."
            );
        },
        get Scholar(): never {
            throw new Error(
                "dnd-generator: `List.Professions.Scholar` has been removed, use `Profession.List({ nobility: 'Scholar' })` instead."
            );
        },
        get Servant(): never {
            throw new Error(
                "dnd-generator: `List.Professions.Servant` has been removed, use `Profession.List({ nobility: 'Servant' })` instead."
            );
        },
        get Underclass(): never {
            throw new Error(
                "dnd-generator: `List.Professions.Underclass` has been removed, use `Profession.List({ nobility: 'Underclass' })` instead."
            );
        },
        get Yeoman(): never {
            throw new Error(
                "dnd-generator: `List.Professions.Yeoman` has been removed, use `Profession.List({ nobility: 'Yeoman' })` instead."
            );
        }
    }),
    get Race() {
        process.emitWarning(
            "dnd-generator: `List.Race` is deprecated, use `Component.Race.List` instead.",
            "DeprecationWarning"
        );

        return Race.List;
    },
    get Sex() {
        process.emitWarning(
            "dnd-generator: `List.Sex` is deprecated, use `Component.Sex.List` instead.",
            "DeprecationWarning"
        );
        return Sex.List;
    },
    get Skin() {
        process.emitWarning(
            "dnd-generator: `List.Skin` is deprecated, use `Component.Skin.Colour.List` instead.",
            "DeprecationWarning"
        );
        return Skin.Colour.List;
    },
    get Title() {
        process.emitWarning(
            "dnd-generator: `List.Title` is deprecated, use `Component.Title.List` instead.",
            "DeprecationWarning"
        );
        return Title.List;
    },
    get Weapon() {
        process.emitWarning(
            "dnd-generator: `List.Weapon` is deprecated, use `Component.Weapon.List` instead.",
            "DeprecationWarning"
        );
        return Weapon.List;
    }
});

export const Prefab = Object.freeze({
    get Tavern() {
        process.emitWarning(
            "dnd-generator: `Prefab.Tavern` is deprecated, use `Component.Tavern` instead.",
            "DeprecationWarning"
        );

        return Tavern;
    }
});
