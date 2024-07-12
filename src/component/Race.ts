import type { RaceType } from "fantasy-name-generator/dist/util/nameGenerator.js";
import { AutoComplete } from "../types/AutoComplete.js";
import type { PickList } from "../types/PickList.js";
import { List as _List } from "../util/List.js";
import type { Class } from "./Class.js";
import type { Language } from "./Language.js";
import type { Maturity } from "./Maturity.js";

const RACES = [
    {
        class: [
            "Barbarian",
            "Bard",
            "Cavalier",
            "Cleric",
            "Druid",
            "Fighter",
            "Monk",
            "Mystic",
            "Paladin",
            "Ranger",
            "Rogue",
            "Sorcerer",
            "Trickster",
            "Inquisitor",
            "Swashbuckler",
            "Warlock",
            "Wizard",
            "Artificer",
            "Blood Hunter"
        ],
        speed: 30,
        names: ["human"],
        maturity: {
            Infant: [0, 3],
            Child: [3, 10],
            Adult: [10, 55],
            Elder: [55, 70]
        },
        value: "Shifter"
    },
    {
        class: [
            "Barbarian",
            "Bard",
            "Cavalier",
            "Cleric",
            "Druid",
            "Fighter",
            "Monk",
            "Mystic",
            "Paladin",
            "Ranger",
            "Rogue",
            "Sorcerer",
            "Trickster",
            "Inquisitor",
            "Swashbuckler",
            "Warlock",
            "Wizard",
            "Artificer",
            "Blood Hunter"
        ],
        speed: 30,
        names: ["human", "gnome"],
        maturity: {
            Infant: [0, 1],
            Child: [1, 2],
            Adult: [2, 25],
            Elder: [25, 30]
        },
        value: "Warforged"
    },
    {
        class: [
            "Barbarian",
            "Bard",
            "Cavalier",
            "Cleric",
            "Druid",
            "Fighter",
            "Monk",
            "Mystic",
            "Paladin",
            "Ranger",
            "Rogue",
            "Sorcerer",
            "Trickster",
            "Inquisitor",
            "Swashbuckler",
            "Warlock",
            "Wizard",
            "Artificer",
            "Blood Hunter"
        ],
        speed: 30,
        languages: [
            "Goblin",
            {
                pick: 1,
                items: []
            }
        ],
        names: ["elf", "highelf", "darkelf"],
        maturity: {
            Infant: [0, 10],
            Child: [10, 24],
            Adult: [24, 150],
            Elder: [150, 200]
        },
        value: "Verdan"
    },
    {
        class: [
            "Barbarian",
            "Bard",
            "Cavalier",
            "Cleric",
            "Druid",
            "Fighter",
            "Monk",
            "Mystic",
            "Paladin",
            "Ranger",
            "Rogue",
            "Sorcerer",
            "Trickster",
            "Inquisitor",
            "Swashbuckler",
            "Warlock",
            "Wizard",
            "Artificer",
            "Blood Hunter"
        ],
        speed: 30,
        languages: ["Gith"],
        names: ["drow"],
        maturity: {
            Infant: [0, 6],
            Child: [6, 17],
            Adult: [18, 65],
            Elder: [65, 100]
        },
        value: "Gith"
    },
    {
        class: [
            "Barbarian",
            "Bard",
            "Cavalier",
            "Cleric",
            "Druid",
            "Fighter",
            "Monk",
            "Mystic",
            "Paladin",
            "Ranger",
            "Rogue",
            "Sorcerer",
            "Trickster",
            "Inquisitor",
            "Swashbuckler",
            "Warlock",
            "Wizard",
            "Artificer",
            "Blood Hunter"
        ],
        speed: 30,
        languages: ["Aquan"],
        names: ["fairy", "goblin"],
        maturity: {
            Infant: [0, 3],
            Child: [3, 10],
            Adult: [10, 60],
            Elder: [60, 80]
        },
        value: "Locathah"
    },
    {
        class: [
            "Barbarian",
            "Bard",
            "Cavalier",
            "Cleric",
            "Druid",
            "Fighter",
            "Monk",
            "Mystic",
            "Paladin",
            "Ranger",
            "Rogue",
            "Sorcerer",
            "Trickster",
            "Inquisitor",
            "Swashbuckler",
            "Warlock",
            "Wizard",
            "Artificer",
            "Blood Hunter"
        ],
        speed: 30,
        languages: ["Elvish"],
        names: [
            "cavePerson",
            "dwarf",
            "halfling",
            "gnome",
            "elf",
            "highelf",
            "fairy",
            "highfairy",
            "darkelf",
            "drow",
            "halfdemon",
            "demon",
            "angel",
            "demon",
            "human",
            "goblin",
            "ogre",
            "orc"
        ],
        maturity: {
            Infant: [0, 6],
            Child: [6, 59],
            Adult: [59, 357],
            Elder: [357, 425]
        },
        value: "Simic Hybrid"
    },
    {
        class: [
            "Barbarian",
            "Bard",
            "Cavalier",
            "Cleric",
            "Druid",
            "Fighter",
            "Monk",
            "Mystic",
            "Paladin",
            "Ranger",
            "Rogue",
            "Sorcerer",
            "Trickster",
            "Inquisitor",
            "Swashbuckler",
            "Warlock",
            "Wizard",
            "Artificer",
            "Blood Hunter"
        ],
        speed: 30,
        languages: [
            {
                pick: 2,
                items: []
            }
        ],
        names: ["fairy"],
        maturity: {
            Infant: [0, 4],
            Child: [4, 16],
            Adult: [16, 65],
            Elder: [65, 160]
        },
        value: "Changeling"
    },
    {
        class: [
            "Barbarian",
            "Bard",
            "Cavalier",
            "Cleric",
            "Druid",
            "Fighter",
            "Monk",
            "Mystic",
            "Paladin",
            "Ranger",
            "Rogue",
            "Sorcerer",
            "Trickster",
            "Inquisitor",
            "Swashbuckler",
            "Warlock",
            "Wizard",
            "Artificer",
            "Blood Hunter"
        ],
        speed: 30,
        languages: ["Minotaur"],
        names: ["human", "orc"],
        maturity: {
            Infant: [0, 6],
            Child: [6, 17],
            Adult: [17, 90],
            Elder: [90, 150]
        },
        value: "Minotaur"
    },
    {
        class: [
            "Barbarian",
            "Bard",
            "Cavalier",
            "Cleric",
            "Druid",
            "Fighter",
            "Monk",
            "Mystic",
            "Paladin",
            "Ranger",
            "Rogue",
            "Sorcerer",
            "Trickster",
            "Inquisitor",
            "Swashbuckler",
            "Warlock",
            "Wizard",
            "Artificer",
            "Blood Hunter"
        ],
        speed: 30,
        languages: ["Loxodon"],
        names: ["human", "ogre"],
        maturity: {
            Infant: [0, 6],
            Child: [6, 60],
            Adult: [60, 350],
            Elder: [350, 450]
        },
        value: "Loxodon"
    },
    {
        class: [
            "Barbarian",
            "Bard",
            "Cavalier",
            "Cleric",
            "Druid",
            "Fighter",
            "Monk",
            "Mystic",
            "Paladin",
            "Ranger",
            "Rogue",
            "Sorcerer",
            "Trickster",
            "Inquisitor",
            "Swashbuckler",
            "Warlock",
            "Wizard",
            "Artificer",
            "Blood Hunter"
        ],
        speed: 30,
        languages: [
            "Vedalken",
            {
                pick: 1,
                items: []
            }
        ],
        names: ["human", "fairy"],
        maturity: {
            Infant: [0, 10],
            Child: [10, 40],
            Adult: [40, 300],
            Elder: [300, 500]
        },
        value: "Vedalken"
    },
    {
        class: [
            "Barbarian",
            "Bard",
            "Cavalier",
            "Cleric",
            "Druid",
            "Fighter",
            "Monk",
            "Mystic",
            "Paladin",
            "Ranger",
            "Rogue",
            "Sorcerer",
            "Trickster",
            "Inquisitor",
            "Swashbuckler",
            "Warlock",
            "Wizard",
            "Artificer",
            "Blood Hunter"
        ],
        speed: 40,
        languages: ["Sylvan"],
        names: ["human", "orc"],
        maturity: {
            Infant: [0, 6],
            Child: [6, 17],
            Adult: [18, 65],
            Elder: [65, 160]
        },
        value: "Centaur"
    },
    {
        class: [
            "Barbarian",
            "Bard",
            "Cleric",
            "Druid",
            "Sorcerer",
            "Trickster",
            "Inquisitor",
            "Swashbuckler",
            "Warlock",
            "Wizard",
            "Artificer",
            "Blood Hunter"
        ],
        speed: 25,
        languages: ["Aarakocra", "Auran"],
        names: ["angel"],
        maturity: {
            Infant: [0, 1],
            Child: [1, 3],
            Adult: [3, 25],
            Elder: [25, 30]
        },
        value: "Aarakocra"
    },
    {
        class: ["Barbarian", "Bard", "Cleric", "Sorcerer", "Swashbuckler", "Warlock"],
        speed: 30,
        languages: ["Celestial"],
        names: ["human", "angel"],
        maturity: {
            Infant: [0, 6],
            Child: [6, 17],
            Adult: [18, 65],
            Elder: [65, 160]
        },
        value: "Aasimar"
    },
    {
        class: [
            "Barbarian",
            "Bard",
            "Cavalier",
            "Fighter",
            "Monk",
            "Trickster",
            "Inquisitor",
            "Swashbuckler",
            "Blood Hunter"
        ],
        speed: 30,
        languages: ["Goblin"],
        names: ["goblin", "ogre"],
        maturity: {
            Infant: [0, 6],
            Child: [6, 16],
            Adult: [16, 60],
            Elder: [60, 80]
        },
        value: "Bugbear"
    },
    {
        class: [
            "Barbarian",
            "Bard",
            "Cavalier",
            "Cleric",
            "Fighter",
            "Sorcerer",
            "Trickster",
            "Swashbuckler",
            "Warlock"
        ],
        speed: 30,
        languages: ["Draconic"],
        names: ["dragon"],
        maturity: {
            Infant: [0, 1],
            Child: [1, 15],
            Adult: [15, 50],
            Elder: [50, 80]
        },
        value: "Draconblood"
    },
    {
        class: [
            "Barbarian",
            "Bard",
            "Cavalier",
            "Cleric",
            "Fighter",
            "Sorcerer",
            "Trickster",
            "Swashbuckler",
            "Warlock"
        ],
        speed: 30,
        languages: ["Draconic"],
        names: ["dragon"],
        maturity: {
            Infant: [0, 1],
            Child: [1, 15],
            Adult: [15, 50],
            Elder: [50, 80]
        },
        value: "Ravenite"
    },
    {
        speed: 30,
        languages: ["Draconic"],
        names: ["dragon"],
        maturity: {
            Infant: [0, 1],
            Child: [1, 15],
            Adult: [15, 50],
            Elder: [50, 80]
        },
        value: "Dragonborn"
    },
    {
        class: ["Barbarian", "Cavalier", "Mystic", "Paladin", "Trickster", "Wizard"],
        speed: 25,
        languages: ["Dwarvish", "Undercommon"],
        names: ["dwarf"],
        maturity: {
            Infant: [0, 6],
            Child: [6, 17],
            Adult: [18, 200],
            Elder: [200, 350]
        },
        value: "Duergar Dwarf"
    },
    {
        speed: 25,
        languages: ["Dwarvish"],
        maturity: {
            Infant: [0, 6],
            Child: [6, 17],
            Adult: [18, 200],
            Elder: [200, 350]
        },
        value: "Dwarf"
    },
    {
        class: ["Barbarian", "Cavalier", "Cleric", "Druid", "Paladin"],
        speed: 25,
        languages: ["Dwarvish"],
        names: ["dwarf"],
        maturity: {
            Infant: [0, 6],
            Child: [6, 17],
            Adult: [18, 200],
            Elder: [200, 350]
        },
        value: "Hill Dwarf"
    },
    {
        class: ["Barbarian", "Cavalier", "Cleric", "Druid", "Paladin"],
        speed: 25,
        languages: ["Dwarvish"],
        names: ["dwarf"],
        maturity: {
            Infant: [0, 6],
            Child: [6, 17],
            Adult: [18, 200],
            Elder: [200, 350]
        },
        value: "Mark of Warding Dwarf"
    },
    {
        class: ["Barbarian", "Cavalier", "Cleric", "Druid", "Paladin"],
        speed: 25,
        languages: ["Dwarvish"],
        names: ["dwarf"],
        maturity: {
            Infant: [0, 6],
            Child: [6, 17],
            Adult: [18, 200],
            Elder: [200, 350]
        },
        value: "Mountain Dwarf"
    },
    {
        class: ["Barbarian", "Cavalier", "Cleric", "Druid", "Monk", "Paladin", "Ranger", "Inquisitor"],
        speed: 30,
        languages: ["Elvish", "Giant"],
        names: ["orc", "dwarf"],
        maturity: {
            Infant: [0, 15],
            Child: [15, 30],
            Adult: [30, 350],
            Elder: [350, 500]
        },
        value: "Firbolg"
    },
    {
        class: [
            "Barbarian",
            "Bard",
            "Cleric",
            "Druid",
            "Monk",
            "Rogue",
            "Sorcerer",
            "Trickster",
            "Inquisitor",
            "Swashbuckler",
            "Warlock",
            "Wizard",
            "Artificer"
        ],
        speed: 30,
        languages: ["Primordial"],
        names: ["human", "angel", "demon", "fairy"],
        maturity: {
            Infant: [0, 6],
            Child: [6, 17],
            Adult: [18, 65],
            Elder: [65, 120]
        },
        value: "Air Genasi"
    },
    {
        class: ["Barbarian", "Cavalier", "Paladin"],
        speed: 30,
        languages: ["Primordial"],
        names: ["human", "angel", "demon", "fairy"],
        maturity: {
            Infant: [0, 6],
            Child: [6, 17],
            Adult: [18, 65],
            Elder: [65, 120]
        },
        value: "Earth Genasi"
    },
    {
        class: [
            "Barbarian",
            "Cavalier",
            "Cleric",
            "Druid",
            "Fighter",
            "Monk",
            "Ranger",
            "Trickster",
            "Inquisitor",
            "Blood Hunter"
        ],
        speed: 30,
        languages: ["Primordial"],
        names: ["human", "angel", "demon", "fairy"],
        maturity: {
            Infant: [0, 6],
            Child: [6, 17],
            Adult: [18, 65],
            Elder: [65, 120]
        },
        value: "Water Genasi"
    },
    {
        class: ["Barbarian", "Bard", "Cleric", "Druid", "Monk", "Rogue", "Inquisitor", "Swashbuckler", "Artificer"],
        speed: 30,
        languages: ["Goblin"],
        maturity: {
            Infant: [0, 3],
            Child: [3, 8],
            Adult: [8, 45],
            Elder: [45, 60]
        },
        value: "Goblin"
    },
    {
        class: [
            "Barbarian",
            "Bard",
            "Cavalier",
            "Cleric",
            "Druid",
            "Paladin",
            "Rogue",
            "Trickster",
            "Inquisitor",
            "Swashbuckler"
        ],
        speed: 30,
        languages: ["Giant"],
        names: ["human", "ogre"],
        maturity: {
            Infant: [0, 6],
            Child: [6, 17],
            Adult: [18, 65],
            Elder: [65, 80]
        },
        value: "Goliath"
    },
    {
        class: [
            "Barbarian",
            "Bard",
            "Cleric",
            "Druid",
            "Monk",
            "Mystic",
            "Paladin",
            "Rogue",
            "Trickster",
            "Inquisitor",
            "Swashbuckler",
            "Artificer"
        ],
        speed: 25,
        languages: ["Grung"],
        names: ["fairy", "goblin"],
        maturity: {
            Infant: [0, 1],
            Child: [1, 2],
            Adult: [2, 40],
            Elder: [40, 50]
        },
        value: "Grung"
    },
    {
        speed: 30,
        languages: ["Elvish"],
        names: ["human", "elf"],
        maturity: {
            Infant: [0, 6],
            Child: [6, 20],
            Adult: [20, 150],
            Elder: [150, 180]
        },
        value: "Half-Elf"
    },
    {
        class: [
            "Barbarian",
            "Bard",
            "Cavalier",
            "Cleric",
            "Druid",
            "Monk",
            "Rogue",
            "Sorcerer",
            "Trickster",
            "Inquisitor",
            "Swashbuckler",
            "Warlock"
        ],
        speed: 25,
        languages: ["Halfling"],
        names: ["halfling"],
        maturity: {
            Infant: [0, 6],
            Child: [6, 20],
            Adult: [20, 150],
            Elder: [150, 250]
        },
        value: "Lightfoot Halfling"
    },
    {
        class: [
            "Barbarian",
            "Bard",
            "Cavalier",
            "Cleric",
            "Druid",
            "Monk",
            "Mystic",
            "Paladin",
            "Rogue",
            "Sorcerer",
            "Trickster",
            "Inquisitor",
            "Swashbuckler",
            "Warlock",
            "Wizard"
        ],
        speed: 25,
        languages: ["Halfling"],
        names: ["halfling"],
        maturity: {
            Infant: [0, 6],
            Child: [6, 20],
            Adult: [20, 150],
            Elder: [150, 250]
        },
        value: "Stout Halfling"
    },
    {
        class: [
            "Barbarian",
            "Bard",
            "Cavalier",
            "Cleric",
            "Druid",
            "Monk",
            "Rogue",
            "Trickster",
            "Inquisitor",
            "Swashbuckler",
            "Artificer"
        ],
        speed: 25,
        languages: ["Halfling"],
        maturity: {
            Infant: [0, 6],
            Child: [6, 20],
            Adult: [20, 150],
            Elder: [150, 250]
        },
        value: "Halfling"
    },
    {
        speed: 30,
        languages: ["Orc"],
        names: ["human", "orc"],
        maturity: {
            Infant: [0, 1],
            Child: [1, 14],
            Adult: [14, 60],
            Elder: [60, 75]
        },
        value: "Half-Orc"
    },
    {
        class: ["Barbarian", "Fighter", "Mystic", "Trickster", "Wizard", "Artificer", "Blood Hunter"],
        speed: 30,
        languages: ["Goblin"],
        names: ["goblin"],
        maturity: {
            Infant: [0, 6],
            Child: [6, 17],
            Adult: [18, 65],
            Elder: [65, 100]
        },
        value: "Hobgoblin"
    },
    {
        speed: 25,
        languages: [
            {
                pick: 1,
                items: []
            }
        ],
        maturity: {
            Infant: [0, 6],
            Child: [6, 17],
            Adult: [18, 65],
            Elder: [65, 100]
        },
        value: "Human"
    },
    {
        class: ["Barbarian", "Bard", "Cleric", "Druid", "Monk", "Rogue", "Trickster", "Inquisitor", "Swashbuckler"],
        speed: 30,
        languages: ["Auran"],
        names: ["fairy", "cavePerson"],
        maturity: {
            Infant: [0, 4],
            Child: [4, 12],
            Adult: [12, 50],
            Elder: [50, 60]
        },
        value: "Kenku"
    },
    {
        class: [
            "Barbarian",
            "Cavalier",
            "Cleric",
            "Druid",
            "Fighter",
            "Ranger",
            "Trickster",
            "Inquisitor",
            "Blood Hunter"
        ],
        speed: 30,
        languages: ["Draconic"],
        names: ["cavePerson"],
        maturity: {
            Infant: [0, 4],
            Child: [4, 14],
            Adult: [14, 50],
            Elder: [50, 60]
        },
        value: "Lizardfolk"
    },
    {
        class: ["Barbarian", "Cavalier", "Druid", "Paladin"],
        speed: 30,
        languages: ["Orc"],
        maturity: {
            Infant: [0, 4],
            Child: [4, 12],
            Adult: [12, 40],
            Elder: [40, 50]
        },
        value: "Orc"
    },
    {
        class: ["Barbarian", "Bard", "Cavalier", "Cleric", "Druid", "Monk", "Paladin"],
        speed: 30,
        languages: ["Aquan"],
        names: ["human", "drow"],
        maturity: {
            Infant: [0, 4],
            Child: [4, 15],
            Adult: [15, 40],
            Elder: [40, 50]
        },
        value: "Tortle"
    },
    {
        class: [
            "Barbarian",
            "Bard",
            "Cavalier",
            "Paladin",
            "Rogue",
            "Sorcerer",
            "Trickster",
            "Inquisitor",
            "Swashbuckler",
            "Warlock"
        ],
        speed: 30,
        languages: ["Primordial"],
        names: ["human", "highelf"],
        maturity: {
            Infant: [0, 4],
            Child: [4, 15],
            Adult: [15, 150],
            Elder: [150, 200]
        },
        value: "Triton"
    },
    {
        class: [
            "Barbarian",
            "Bard",
            "Cavalier",
            "Cleric",
            "Druid",
            "Fighter",
            "Monk",
            "Mystic",
            "Paladin",
            "Ranger",
            "Rogue",
            "Sorcerer",
            "Trickster",
            "Inquisitor",
            "Swashbuckler",
            "Warlock",
            "Wizard",
            "Artificer",
            "Blood Hunter"
        ],
        speed: 30,
        languages: ["Abyssal", "Draconic"],
        names: ["human", "drow", "darkelf"],
        maturity: {
            Infant: [0, 4],
            Child: [4, 12],
            Adult: [12, 65],
            Elder: [65, 120]
        },
        value: "Yuan-ti Pureblood"
    },
    {
        class: [
            "Barbarian",
            "Bard",
            "Cavalier",
            "Cleric",
            "Druid",
            "Fighter",
            "Monk",
            "Mystic",
            "Paladin",
            "Ranger",
            "Rogue",
            "Sorcerer",
            "Trickster",
            "Inquisitor",
            "Swashbuckler",
            "Warlock",
            "Wizard",
            "Artificer"
        ],
        speed: 30,
        languages: [
            "Quori",
            {
                pick: 1,
                items: []
            }
        ],
        names: ["human"],
        maturity: {
            Infant: [0, 6],
            Child: [6, 17],
            Adult: [18, 65],
            Elder: [65, 100]
        },
        value: "Kalashtar"
    },
    {
        class: ["Bard", "Cleric", "Sorcerer", "Swashbuckler", "Warlock", "Blood Hunter"],
        speed: 30,
        languages: ["Celestial"],
        names: ["human", "angel"],
        maturity: {
            Infant: [0, 6],
            Child: [6, 17],
            Adult: [18, 65],
            Elder: [65, 160]
        },
        value: "Fallen Aasimar"
    },
    {
        class: ["Bard", "Cleric", "Druid", "Sorcerer", "Swashbuckler", "Warlock", "Blood Hunter"],
        speed: 30,
        languages: ["Celestial"],
        names: ["human", "angel"],
        maturity: {
            Infant: [0, 6],
            Child: [6, 17],
            Adult: [18, 65],
            Elder: [65, 160]
        },
        value: "Protector Aasimar"
    },
    {
        class: ["Bard", "Sorcerer", "Swashbuckler", "Warlock"],
        speed: 30,
        languages: ["Celestial"],
        names: ["human", "angel"],
        maturity: {
            Infant: [0, 6],
            Child: [6, 17],
            Adult: [18, 65],
            Elder: [65, 160]
        },
        value: "Scourge Aasimar"
    },
    {
        class: [
            "Bard",
            "Cavalier",
            "Monk",
            "Paladin",
            "Sorcerer",
            "Trickster",
            "Inquisitor",
            "Swashbuckler",
            "Warlock"
        ],
        speed: 30,
        languages: ["Elvish"],
        names: ["drow"],
        maturity: {
            Infant: [0, 6],
            Child: [6, 100],
            Adult: [100, 650],
            Elder: [650, 750]
        },
        value: "Drow Elf"
    },
    {
        class: ["Bard", "Cavalier", "Monk", "Mystic", "Trickster", "Inquisitor", "Swashbuckler", "Wizard"],
        speed: 30,
        languages: ["Elvish"],
        names: ["elf"],
        maturity: {
            Infant: [0, 6],
            Child: [6, 100],
            Adult: [100, 650],
            Elder: [650, 750]
        },
        value: "Eladrin Elf"
    },
    {
        class: ["Bard", "Cavalier", "Monk", "Mystic", "Trickster", "Inquisitor", "Swashbuckler", "Wizard"],
        speed: 30,
        languages: ["Elvish"],
        names: ["elf"],
        maturity: {
            Infant: [0, 6],
            Child: [6, 100],
            Adult: [100, 650],
            Elder: [650, 750]
        },
        value: "High Elf"
    },
    {
        class: [
            "Bard",
            "Cavalier",
            "Cleric",
            "Druid",
            "Monk",
            "Trickster",
            "Inquisitor",
            "Swashbuckler",
            "Blood Hunter"
        ],
        speed: 30,
        languages: ["Elvish"],
        names: ["elf"],
        maturity: {
            Infant: [0, 6],
            Child: [6, 100],
            Adult: [100, 650],
            Elder: [650, 750]
        },
        value: "Wood Elf"
    },
    {
        speed: 30,
        languages: ["Elvish"],
        maturity: {
            Infant: [0, 6],
            Child: [6, 100],
            Adult: [100, 650],
            Elder: [650, 750]
        },
        value: "Elf"
    },
    {
        class: ["Bard", "Trickster", "Artificer"],
        speed: 30,
        languages: ["Elvish"],
        names: ["elf"],
        maturity: {
            Infant: [0, 6],
            Child: [6, 100],
            Adult: [100, 650],
            Elder: [650, 750]
        },
        value: "Sea Elf"
    },
    {
        class: ["Bard", "Trickster", "Artificer"],
        speed: 30,
        languages: ["Elvish"],
        names: ["elf", "highelf", "darkelf"],
        maturity: {
            Infant: [0, 6],
            Child: [6, 100],
            Adult: [100, 650],
            Elder: [650, 750]
        },
        value: "Shadar-Kai"
    },
    {
        speed: 25,
        languages: ["Halfling"],
        names: ["halfling"],
        maturity: {
            Infant: [0, 6],
            Child: [6, 20],
            Adult: [20, 150],
            Elder: [150, 250]
        },
        value: "Ghostwise Halfling"
    },
    {
        class: ["Bard", "Monk", "Rogue", "Sorcerer", "Trickster", "Inquisitor", "Swashbuckler", "Warlock"],
        speed: 30,
        languages: [
            {
                pick: 1,
                items: []
            }
        ],
        names: ["human"],
        maturity: {
            Infant: [0, 6],
            Child: [6, 17],
            Adult: [18, 65],
            Elder: [65, 100]
        },
        value: "Tabaxi"
    },
    {
        speed: 30,
        languages: ["Infernal"],
        names: ["demon", "halfdemon"],
        maturity: {
            Infant: [0, 6],
            Child: [6, 17],
            Adult: [18, 70],
            Elder: [70, 100]
        },
        value: "Tiefling"
    },
    {
        class: [
            "Bard",
            "Mystic",
            "Paladin",
            "Rogue",
            "Sorcerer",
            "Trickster",
            "Inquisitor",
            "Swashbuckler",
            "Warlock",
            "Wizard",
            "Artificer"
        ],
        speed: 30,
        languages: ["Infernal"],
        names: ["demon", "halfdemon"],
        maturity: {
            Infant: [0, 6],
            Child: [6, 17],
            Adult: [18, 70],
            Elder: [70, 100]
        },
        value: "Devil's Tongue Tiefling"
    },
    {
        class: [
            "Bard",
            "Mystic",
            "Paladin",
            "Rogue",
            "Sorcerer",
            "Trickster",
            "Inquisitor",
            "Swashbuckler",
            "Warlock",
            "Wizard",
            "Artificer"
        ],
        speed: 30,
        languages: ["Infernal"],
        names: ["demon", "halfdemon"],
        maturity: {
            Infant: [0, 6],
            Child: [6, 17],
            Adult: [18, 70],
            Elder: [70, 100]
        },
        value: "Hellfire Tiefling"
    },
    {
        class: [
            "Bard",
            "Mystic",
            "Paladin",
            "Rogue",
            "Sorcerer",
            "Trickster",
            "Inquisitor",
            "Swashbuckler",
            "Warlock",
            "Wizard",
            "Artificer"
        ],
        speed: 30,
        languages: ["Infernal"],
        names: ["demon", "halfdemon"],
        maturity: {
            Infant: [0, 6],
            Child: [6, 17],
            Adult: [18, 70],
            Elder: [70, 100]
        },
        value: "Winged Tiefling"
    },
    {
        class: [
            "Cavalier",
            "Fighter",
            "Mystic",
            "Rogue",
            "Sorcerer",
            "Trickster",
            "Inquisitor",
            "Swashbuckler",
            "Warlock",
            "Wizard",
            "Artificer",
            "Blood Hunter"
        ],
        speed: 30,
        languages: ["Primordial"],
        names: ["human", "angel", "demon", "fairy"],
        maturity: {
            Infant: [0, 6],
            Child: [6, 17],
            Adult: [18, 65],
            Elder: [65, 120]
        },
        value: "Fire Genasi"
    },
    {
        class: ["Cavalier", "Monk", "Rogue", "Trickster", "Inquisitor", "Swashbuckler"],
        speed: 30,
        languages: ["Draconic"],
        names: ["dragon", "drow"],
        maturity: {
            Infant: [0, 2],
            Child: [2, 6],
            Adult: [6, 100],
            Elder: [100, 120]
        },
        value: "Kobold"
    },
    {
        class: ["Mystic", "Rogue", "Trickster", "Inquisitor", "Swashbuckler", "Wizard", "Artificer"],
        speed: 25,
        languages: ["Gnomish"],
        names: ["gnome"],
        maturity: {
            Infant: [0, 6],
            Child: [6, 20],
            Adult: [20, 200],
            Elder: [200, 400]
        },
        value: "Deep Gnome"
    },
    {
        class: ["Mystic", "Rogue", "Trickster", "Inquisitor", "Swashbuckler", "Wizard", "Artificer"],
        speed: 25,
        languages: ["Gnomish"],
        names: ["gnome"],
        maturity: {
            Infant: [0, 6],
            Child: [6, 20],
            Adult: [20, 200],
            Elder: [200, 400]
        },
        value: "Forest Gnome"
    },
    {
        class: ["Mystic", "Rogue", "Trickster", "Inquisitor", "Swashbuckler", "Wizard", "Artificer"],
        speed: 25,
        languages: ["Gnomish"],
        names: ["gnome"],
        maturity: {
            Infant: [0, 6],
            Child: [6, 20],
            Adult: [20, 200],
            Elder: [200, 400]
        },
        value: "Mark of Scribing Gnome"
    },
    {
        class: ["Mystic", "Trickster", "Wizard", "Artificer"],
        speed: 25,
        languages: ["Gnomish"],
        names: ["gnome"],
        maturity: {
            Infant: [0, 6],
            Child: [6, 20],
            Adult: [20, 200],
            Elder: [200, 400]
        },
        value: "Rock Gnome"
    },
    {
        speed: 25,
        languages: ["Gnomish"],
        maturity: {
            Infant: [0, 6],
            Child: [6, 20],
            Adult: [20, 200],
            Elder: [200, 400]
        },
        value: "Gnome"
    }
] as const;

export type Race = (typeof RACES)[number]["value"];

export namespace Race {
    export class List extends _List<
        Race,
        {
            class?: Class[];
            speed: number;
            languages?: PickList<Language>;
            names?: RaceType[];
            maturity: {
                [K in AutoComplete<Maturity>]: [number, number];
            };
        },
        Race
    > {
        constructor() {
            super(RACES);
        }
    }
}
