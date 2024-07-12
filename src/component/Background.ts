import { PickList } from "../types/PickList.js";
import { List as _List } from "../util/List.js";
import { Class } from "./Class.js";
import { Language } from "./Language.js";
import { Maturity } from "./Maturity.js";
import { Nobility } from "./Nobility.js";
import { Race } from "./Race.js";
import { Skill } from "./Skill.js";
import { Tool } from "./Tool.js";

const ALL_LANGUAGES = new Language.List().getValues();

const BACKGROUNDS = [
    {
        value: "Acolyte",
        languages: [{ pick: 2, items: ALL_LANGUAGES }],
        skills: ["Insight", "Religion"]
    },
    {
        nobility: ["Scholar"],
        value: "Anthropologist",
        languages: [{ pick: 2, items: ALL_LANGUAGES }],
        skills: ["Insight", "Religion"]
    },
    {
        nobility: ["Scholar"],
        value: "Archaeologist",
        languages: [{ pick: 1, items: ALL_LANGUAGES }],
        tools: ["Cartographer's Tools", "Navigator's Tools"],
        skills: ["Insight", "Religion"]
    },
    {
        value: "Adopted",
        languages: [{ pick: 2, items: ALL_LANGUAGES }],
        skills: ["Persuasion", "Deception", "Stealth"]
    },
    {
        value: "Black Fist Double Agent",
        tools: ["Disguise Kit", { pick: 1, items: ["Artisan's Tools", "Gambling Set"] }],
        skills: ["Deception", "Insight"]
    },
    {
        value: "Caravan Specialist",
        languages: [{ pick: 1, items: ALL_LANGUAGES }],
        tools: ["Vehicle (Land)"],
        skills: ["Animal Handling", "Survival"]
    },
    {
        nobility: ["Underclass", "Peasant"],
        value: "Charlatan",
        tools: ["Disguise Kit", "Forgery Kit"],
        skills: ["Deception", "Sleight of Hand"]
    },
    {
        value: "City Watch",
        languages: [{ pick: 2, items: ALL_LANGUAGES }],
        skills: ["Athletics", "Insight"]
    },
    {
        value: "Clan Crafter",
        languages: [{ pick: 1, items: ALL_LANGUAGES }],
        tools: ["Artisan's Tools"],
        skills: ["History", "Insight"]
    },
    {
        nobility: ["Scholar"],
        value: "Cloistered Scholar",
        languages: [{ pick: 2, items: ALL_LANGUAGES }],
        skills: ["History", { pick: 1, items: ["Arcana", "Nature", "Religion"] }]
    },
    {
        race: ["Drow Elf", "Elf", "Half-Elf", "Human"],
        value: "Cormanthor Refugee",
        languages: ["Elvish"],
        tools: ["Artisan's Tools"],
        skills: ["Nature", "Survival"]
    },
    {
        value: "Courtier",
        languages: [{ pick: 2, items: ALL_LANGUAGES }],
        skills: ["Insight", "Persuasion"]
    },
    {
        nobility: ["Underclass", "Peasant"],
        value: "Criminal",
        tools: ["Gaming Set", "Thieves' Tools"],
        skills: ["Deception", "Stealth"]
    },
    {
        race: ["Dwarf", "Mountain Dwarf", "Orc", "Goblin", "Hobgoblin", "Bugbear", "Drow Elf"],
        value: "Earthspur Miner",
        languages: ["Dwarvish", "Undercommon"],
        skills: ["Athletics", "Survival"]
    },
    {
        value: "Entertainer",
        tools: ["Disguise Kit", "Musical Instrument"],
        skills: ["Acrobatics", "Performance"]
    },
    {
        value: "Far Traveler",
        languages: [{ pick: 1, items: ALL_LANGUAGES }],
        tools: [{ pick: 1, items: ["Musical Instrument", "Gaming Set"] }],
        skills: ["Insight", "Perception"]
    },
    {
        nobility: ["Common", "Knighted"],
        value: "Folk Hero",
        tools: ["Artisan's Tools", "Vehicle (Land)"],
        skills: ["Animal Handling", "Survival"]
    },
    {
        nobility: ["Underclass", "Peasant"],
        value: "Gate Urchin",
        tools: ["Musical Instrument", "Thieves' Tools"],
        skills: ["Deception", "Sleight of Hand"]
    },
    {
        value: "Gladiator",
        tools: ["Disguise Kit", "Unusual Weapon"],
        skills: ["Acrobatics", "Performance"]
    },
    {
        value: "Guild Artisan",
        languages: [{ pick: 1, items: ALL_LANGUAGES }],
        tools: ["Artisan's Tools"],
        skills: ["Insight", "Persuasion"]
    },
    {
        nobility: ["Merchant"],
        value: "Guild Merchant",
        languages: [{ pick: 1, items: ALL_LANGUAGES }],
        tools: ["Navigator's Tools"],
        skills: ["Insight", "Persuasion"]
    },
    {
        value: "Harborfolk",
        tools: ["Gaming Set", "Vehicle (Water)"],
        skills: ["Athletics", "Sleight of Hand"]
    },
    {
        value: "Haunted One",
        languages: [
            {
                pick: 1,
                items: [
                    "Abyssal",
                    "Celestial",
                    "Draconic",
                    "Deep Speech",
                    "Infernal",
                    "Primordial",
                    "Sylvan",
                    "Undercommon"
                ]
            }
        ],
        skills: [
            {
                pick: 2,
                items: ["Arcana", "Investigation", "Religion", "Survival"]
            }
        ]
    },
    {
        nobility: ["Underclass", "Peasant"],
        value: "Hermit",
        languages: [{ pick: 1, items: ALL_LANGUAGES }],
        tools: ["Herbalism Kit"],
        skills: ["Medicine", "Religion"]
    },
    {
        race: ["Human"],
        value: "Hillsfar Merchant",
        tools: ["Vehicle (Land)", "Vehicle (Water)"],
        skills: ["Insight", "Persuasion"]
    },
    {
        race: ["Human"],
        value: "Hillsfar Smuggler",
        languages: [{ pick: 1, items: ALL_LANGUAGES }],
        tools: ["Forgery Kit"],
        skills: ["Perception", "Stealth"]
    },
    {
        value: "Inheritor",
        tools: ["Gaming Set", "Musical Instrument"],
        skills: ["Survival", { pick: 1, items: ["Arcana", "History", "Religion"] }]
    },
    {
        value: "Initiate",
        tools: ["Gaming Set", "Vehicle (Land)"],
        skills: ["Athletics", "Intimidation"]
    },
    {
        value: "Inquisitor",
        tools: ["Artisan's Tools", "Thieves' Tools"],
        skills: ["Investigation", "Religion"]
    },
    {
        value: "Investigator",
        languages: [{ pick: 2, items: ALL_LANGUAGES }],
        skills: ["Insight", "Investigation"]
    },
    {
        value: "Iron Route Bandit",
        tools: ["Gaming Set", "Vehicle (Land)"],
        skills: ["Animal Handling", "Stealth"]
    },
    {
        nobility: ["Knighted"],
        value: "Knight",
        languages: [{ pick: 1, items: ALL_LANGUAGES }],
        tools: ["Gaming Set"],
        skills: ["History", "Persuasion"]
    },
    {
        nobility: ["Knighted"],
        value: "Knight of the Order",
        languages: [{ pick: 1, items: ALL_LANGUAGES }],
        tools: [{ pick: 1, items: ["Gaming Set", "Musical Instrument"] }],
        skills: ["Persuasion"]
    },
    {
        value: "Mercenary Veteran",
        tools: ["Gaming Set", "Vehicle (Land)"],
        skills: ["Athletics", "Persuasion"]
    },
    {
        race: ["Human"],
        nobility: ["Gentle", "Esquire", "Noble"],
        value: "Mulmaster Aristocrat",
        tools: ["Artisan's Tools", "Musical Instrument"],
        skills: ["Deception", "Performance"]
    },
    {
        nobility: ["Noble"],
        value: "Noble",
        languages: [{ pick: 1, items: ALL_LANGUAGES }],
        tools: ["Gaming Set"],
        skills: ["History", "Persuasion"]
    },
    {
        value: "Outlander",
        languages: [{ pick: 1, items: ALL_LANGUAGES }],
        tools: ["Musical Instrument"],
        skills: ["Athletics", "Survival"]
    },
    {
        value: "Phlan Insurgent",
        tools: ["Artisan's Tools", "Vehicle (Land)"],
        skills: ["Stealth", "Survival"]
    },
    {
        value: "Phlan Refugee",
        languages: [{ pick: 1, items: ALL_LANGUAGES }],
        tools: ["Artisan's Tools"],
        skills: ["Athletics", "Insight"]
    },
    {
        nobility: ["Merchant"],
        maturity: ["Child", "Adult", "Elder"],
        value: "Pirate",
        tools: ["Navigator's Tools", "Vehicle (Water)"],
        skills: ["Athletics", "Perception"]
    },
    {
        value: "Sage",
        languages: [{ pick: 2, items: ALL_LANGUAGES }],
        skills: ["Arcana", "History"]
    },
    {
        nobility: ["Servant"],
        maturity: ["Adult", "Elder"],
        value: "Sailor",
        tools: ["Navigator's Tools", "Vehicle (Water)"],
        skills: ["Athletics", "Perception"]
    },
    {
        value: "Secret Identity",
        tools: ["Disguise Kit", "Forgery Kit"],
        skills: ["Deception", "Stealth"]
    },
    {
        value: "Shade Fanatic",
        languages: ["Netherese"],
        tools: ["Forgery Kit"],
        skills: ["Deception", "Intimidation"]
    },
    {
        value: "Soldier",
        tools: ["Gaming Set", "Vehicle (Land)"],
        skills: ["Athletics", "Intimidation"]
    },
    {
        nobility: ["Servant"],
        maturity: ["Child", "Adult", "Elder"],
        value: "Spy",
        tools: ["Gaming Set", "Thieves' Tools"],
        skills: ["Deception", "Stealth"]
    },
    {
        value: "Stojanow Prisoner",
        tools: ["Gaming Set", "Thieves' Tools"],
        skills: ["Deception", "Perception"]
    },
    {
        value: "Ticklebelly Nomad",
        languages: ["Giant"],
        tools: ["Herbalism Kit"],
        skills: ["Animal Handling", "Nature"]
    },
    {
        value: "Trade Sheriff",
        languages: ["Elvish"],
        tools: ["Thieves' Tools"],
        skills: ["Investigation", "Persuasion"]
    },
    {
        value: "Urban Bounty Hunter",
        tools: [
            {
                pick: 2,
                items: ["Gaming Set", "Musical Instrument", "Thieves' Tools"]
            }
        ],
        skills: [
            {
                pick: 2,
                items: ["Deception", "Insight", "Persuasion", "Stealth"]
            }
        ]
    },
    {
        nobility: ["Underclass"],
        value: "Urchin",
        tools: ["Disguise Kit", "Thieves' Tools"],
        skills: ["Sleight of Hand", "Stealth"]
    },
    {
        race: ["Human"],
        class: ["Barbarian"],
        value: "Uthgardt Tribe Member",
        languages: [{ pick: 1, items: ALL_LANGUAGES }],
        tools: [{ pick: 1, items: ["Artisan's Tools", "Musical Instrument"] }],
        skills: ["Athletics", "Survival"]
    },
    {
        value: "Vizier",
        tools: ["Artisan's Tools", "Musical Instrument"],
        skills: ["History", "Religion"]
    },
    {
        race: ["Human", "Dwarf", "Elf"],
        value: "Waterdhavian Noble",
        languages: [{ pick: 1, items: ALL_LANGUAGES }],
        tools: [{ pick: 1, items: ["Gaming Set", "Musical Instrument"] }],
        skills: ["History", "Persuasion"]
    }
] as const;

export namespace Background {
    export const List = _List.createList<
        string,
        {
            race?: Race[];
            class?: Class[];
            languages?: PickList<Language>;
            tools?: PickList<Tool>;
            skills?: PickList<Skill>;
            nobility?: Nobility[];
            maturity?: Maturity[];
        },
        string
    >(BACKGROUNDS);
}

export type Background = (typeof BACKGROUNDS)[number]["value"];
