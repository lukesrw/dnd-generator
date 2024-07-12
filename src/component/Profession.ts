import { List as _List } from "../util/List.js";
import { Class } from "./Class.js";
import { Ethic } from "./Ethic.js";
import { Gender } from "./Gender.js";
import { Maturity } from "./Maturity.js";
import { Moral } from "./Moral.js";
import { Nobility } from "./Nobility.js";

const PROFESSIONS = [
    {
        nobility: ["Common", "Scholar", "Yeoman", "Gentle", "Esquire", "Noble", "Knighted", "Royal"],
        maturity: ["Elder"],
        value: "Elder",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Boatman",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Gambler",
        isCombatant: true
    },
    {
        nobility: ["Common", "Merchant", "Gentle", "Esquire", "Knighted"],
        maturity: ["Adult", "Elder"],
        value: "Folk Hero",
        isCombatant: true
    },
    {
        nobility: ["Merchant", "Servant", "Common", "Peasant"],
        maturity: ["Adult", "Elder"],
        value: "Ex-Criminal",
        isCombatant: true
    },
    {
        nobility: ["Common", "Scholar", "Yeoman", "Gentle", "Esquire", "Noble", "Knighted", "Royal"],
        maturity: ["Infant", "Adult", "Elder"],
        value: "Traveler"
    },
    {
        nobility: ["Common", "Scholar", "Yeoman", "Gentle", "Esquire", "Noble", "Knighted", "Royal"],
        maturity: ["Adult", "Elder"],
        value: "Explorer",
        isCombatant: true
    },
    {
        nobility: ["Common", "Scholar", "Yeoman", "Knighted"],
        maturity: ["Adult", "Elder"],
        value: "Dungeoneer",
        isCombatant: true
    },
    {
        maturity: ["Adult", "Elder"],
        value: "Adventurer",
        isCombatant: true
    },
    {
        nobility: ["Yeoman", "Merchant", "Servant", "Common"],
        maturity: ["Adult"],
        value: "Charioteer",
        isCombatant: true
    },
    {
        nobility: ["Common", "Merchant", "Gentle", "Knighted"],
        maturity: ["Adult", "Elder"],
        value: "Mercenary",
        isCombatant: true
    },
    {
        nobility: ["Gentle", "Esquire", "Knighted", "Noble"],
        maturity: ["Adult", "Elder"],
        value: "Sergeant",
        isCombatant: true
    },
    {
        nobility: ["Common", "Servant"],
        maturity: ["Child", "Adult"],
        value: "Scout",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult"],
        value: "Soldier",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Torturer",
        moral: ["Neutral", "Evil"],
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Guard",
        ethic: ["Lawful"],
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Jailer",
        ethic: ["Lawful"],
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Warden",
        ethic: ["Lawful"],
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Wordsmith",
        isCombatant: false
    },
    {
        nobility: ["Common", "Knighted"],
        maturity: ["Adult", "Elder"],
        value: "Admiral",
        ethic: ["Lawful"],
        isCombatant: true
    },
    {
        class: ["Ranger"],
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Archer",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Bailiff",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Bodyguard",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Bouncer",
        isCombatant: true
    },
    {
        nobility: ["Common", "Knighted"],
        maturity: ["Adult", "Elder"],
        value: "Captain",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Castellan",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Cavalier",
        isCombatant: true
    },
    {
        nobility: ["Common", "Knighted"],
        maturity: ["Adult", "Elder"],
        value: "City Watch",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Investigator",
        isCombatant: true
    },
    {
        nobility: ["Common", "Knighted"],
        maturity: ["Adult", "Elder"],
        value: "Duelist",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Executioner",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Fireman",
        isCombatant: true
    },
    {
        nobility: ["Common", "Servant"],
        maturity: ["Adult", "Elder"],
        value: "Tavern Worker",
        isCombatant: false
    },
    {
        nobility: ["Common", "Servant"],
        maturity: ["Adult", "Elder"],
        value: "Exterminator",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Illusionist",
        isCombatant: true
    },
    {
        class: ["Wizard", "Sorcerer", "Warlock", "Cleric"],
        nobility: ["Common", "Scholar", "Yeoman", "Gentle", "Esquire", "Noble", "Knighted", "Royal"],
        maturity: ["Adult", "Elder"],
        value: "Necromancer",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Ritualist",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Runecaster",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Laborer",
        isCombatant: false
    },
    {
        nobility: ["Common"],
        maturity: ["Adult"],
        value: "Lamplighter",
        isCombatant: false
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Landscaper",
        isCombatant: false
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Longshoreman",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Child", "Adult", "Elder"],
        value: "Miner",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Orphanage Caretaker",
        isCombatant: false
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Plumer",
        isCombatant: false
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Clerk",
        isCombatant: false
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Cook",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Copyist",
        isCombatant: false
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Croupier",
        isCombatant: false
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Distiller",
        isCombatant: false
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Florist",
        isCombatant: false
    },
    {
        nobility: ["Common"],
        maturity: ["Child", "Adult", "Elder"],
        value: "Gardener",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Child", "Adult"],
        value: "Housemaid",
        isCombatant: false
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Kitchen Drudge",
        isCombatant: false
    },
    {
        class: ["Wizard", "Sorcerer", "Warlock", "Cleric"],
        nobility: ["Common", "Scholar"],
        maturity: ["Adult", "Elder"],
        value: "Alchemist",
        isCombatant: true
    },
    {
        nobility: ["Common", "Scholar"],
        maturity: ["Adult", "Elder"],
        value: "Apothecary",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Bloodletter",
        isCombatant: true
    },
    {
        class: ["Wizard", "Sorcerer", "Warlock", "Cleric", "Druid"],
        nobility: ["Common", "Scholar", "Yeoman", "Gentle", "Esquire", "Noble", "Royal"],
        maturity: ["Adult", "Elder"],
        value: "Doctor",
        isCombatant: true
    },
    {
        nobility: ["Common", "Scholar"],
        maturity: ["Adult", "Elder"],
        value: "Herbalist",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Midwife",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Mortician",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Nurse",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Physician",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Surgeon",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Veterinarian",
        isCombatant: true
    },
    {
        nobility: ["Common", "Servant"],
        maturity: ["Adult", "Elder"],
        value: "Barkeep",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Animal Handler",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Arborist",
        isCombatant: true
    },
    {
        nobility: ["Common", "Yeoman", "Royal"],
        maturity: ["Adult", "Elder"],
        value: "Beekeeper",
        isCombatant: false
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Birdcatcher",
        isCombatant: false
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Cowherd",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Child", "Adult"],
        value: "Dairyhand",
        isCombatant: false
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Falconer",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Fisher",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Forager",
        isCombatant: false
    },
    {
        nobility: ["Common", "Yeoman", "Gentle"],
        maturity: ["Adult", "Elder"],
        value: "Gamekeeper",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Herder",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Horse Trainer",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Hunter",
        isCombatant: true
    },
    {
        nobility: ["Common", "Yeoman", "Gentle"],
        maturity: ["Adult", "Elder"],
        value: "Master-of-Hounds",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Miller",
        isCombatant: false
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Prospector",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Renderer",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Shepherd",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Child", "Adult", "Elder"],
        value: "Stablehand",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Thresher",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Trapper",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Vintner",
        isCombatant: false
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Woodcutter",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Zookeeper",
        isCombatant: true
    },
    {
        nobility: ["Common", "Scholar", "Yeoman"],
        maturity: ["Adult", "Elder"],
        value: "Architect",
        isCombatant: false
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Brickmaker",
        isCombatant: false
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Brickmason",
        isCombatant: false
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Claymason",
        isCombatant: false
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Plasterer",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Roofer",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Stonemason",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Streetlayer",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Child", "Adult"],
        value: "Acrobat",
        isCombatant: false
    },
    {
        nobility: ["Common", "Scholar", "Yeoman", "Gentle", "Esquire", "Noble", "Knighted", "Royal"],
        maturity: ["Child", "Adult", "Elder"],
        value: "Actor",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Chef",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Dancer",
        isCombatant: false
    },
    {
        nobility: ["Common"],
        maturity: ["Adult"],
        value: "Gladiator",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Glasspainter",
        isCombatant: false
    },
    {
        nobility: ["Common"],
        maturity: ["Child", "Adult", "Elder"],
        value: "Musician",
        isCombatant: false
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Painter",
        isCombatant: false
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Piper",
        isCombatant: false
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Playwright",
        isCombatant: false
    },
    {
        nobility: ["Common", "Scholar"],
        maturity: ["Adult", "Elder"],
        value: "Poet",
        isCombatant: false
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Sculptor",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Singer",
        isCombatant: false
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Tattooist",
        isCombatant: false
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Brawler",
        isCombatant: true
    },
    {
        nobility: ["Common", "Scholar"],
        maturity: ["Adult", "Elder"],
        value: "Writer",
        isCombatant: false
    },
    {
        nobility: ["Common", "Scholar"],
        maturity: ["Adult", "Elder"],
        value: "Accountant",
        isCombatant: false
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Pimp",
        moral: ["Neutral", "Evil"],
        ethic: ["Chaotic", "Neutral"],
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Chandler",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Collector",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Contractor",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Grocer",
        isCombatant: false
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Peddler",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Speculator",
        isCombatant: false
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Tradesman",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Courier",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Herald",
        isCombatant: false
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Interpreter",
        isCombatant: false
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Linguist",
        isCombatant: false
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Translator",
        isCombatant: false
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Cartwright",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Furniture Artisan",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Taxidermist",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Whittler",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Woodcarver",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Wheelwright",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Assassin",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Bandit",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Child", "Adult", "Elder"],
        value: "Burglar",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Conman",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Cockfighter",
        isCombatant: true
    },
    {
        nobility: ["Common", "Yeoman", "Gentle"],
        maturity: ["Adult", "Elder"],
        value: "Crime Boss",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Cutpurse",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Drug Lord",
        ethic: ["Neutral", "Chaotic"],
        moral: ["Neutral", "Evil"],
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Fence",
        ethic: ["Neutral", "Chaotic"],
        moral: ["Good", "Neutral", "Evil"],
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Loan Shark",
        ethic: ["Neutral", "Chaotic"],
        moral: ["Neutral", "Evil"],
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Outlaw",
        ethic: ["Neutral", "Chaotic"],
        moral: ["Good", "Neutral", "Evil"],
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Poacher",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Smuggler",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Child", "Adult", "Elder"],
        value: "Thief",
        ethic: ["Neutral", "Chaotic"],
        moral: ["Good", "Neutral", "Evil"],
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Adult", "Elder"],
        value: "Scribe",
        isCombatant: true
    },
    {
        nobility: ["Common"],
        maturity: ["Child", "Adult"],
        value: "Student",
        isCombatant: false
    },
    {
        value: "Unemployed",
        isCombatant: true
    },
    {
        nobility: ["Esquire"],
        maturity: ["Adult", "Elder"],
        value: "Banker",
        isCombatant: true
    },
    {
        nobility: ["Esquire", "Noble", "Royal"],
        maturity: ["Elder"],
        value: "Judge",
        ethic: ["Lawful", "Neutral"],
        isCombatant: true
    },
    {
        nobility: ["Esquire", "Noble", "Royal"],
        maturity: ["Adult", "Elder"],
        value: "Diplomat",
        isCombatant: true
    },
    {
        nobility: ["Gentle", "Esquire", "Noble", "Royal"],
        maturity: ["Adult", "Elder"],
        value: "Lawyer",
        isCombatant: false
    },
    {
        nobility: ["Gentle"],
        maturity: ["Adult", "Elder"],
        value: "Town Crier",
        isCombatant: false
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Sea Captain",
        isCombatant: true
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Wagoner",
        isCombatant: true
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Caravaneer",
        isCombatant: true
    },
    {
        nobility: ["Merchant"],
        maturity: ["Child", "Adult", "Elder"],
        value: "Pirate",
        isCombatant: true
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Armorer",
        isCombatant: true
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Blacksmith",
        isCombatant: true
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Bladesmith",
        isCombatant: true
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Monster Hunter",
        isCombatant: true
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Street Vendor",
        isCombatant: true
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Bounty Hunter",
        isCombatant: true
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Summoner",
        isCombatant: true
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Transmuter",
        isCombatant: true
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Enchanter",
        isCombatant: true
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Healer",
        isCombatant: true
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Baker",
        isCombatant: false
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Barber",
        isCombatant: true
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Charcoal Maker",
        isCombatant: false
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Butcher",
        isCombatant: true
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Carpenter",
        isCombatant: true
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Fishmonger",
        isCombatant: true
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Innkeeper",
        isCombatant: true
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Ironmonger",
        isCombatant: true
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Bookbinder",
        isCombatant: false
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Bowyer",
        isCombatant: true
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Brewer",
        isCombatant: false
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Broom Maker",
        isCombatant: true
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Candlemaker",
        isCombatant: true
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Cobbler",
        isCombatant: true
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Cooper",
        isCombatant: true
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Cutler",
        isCombatant: true
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Embroiderer",
        isCombatant: true
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Engraver",
        isCombatant: true
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Fletcher",
        isCombatant: true
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Furrier",
        isCombatant: true
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Glassmaker",
        isCombatant: false
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Glovemaker",
        isCombatant: true
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Metalsmith",
        isCombatant: true
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Hatter",
        isCombatant: true
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Jeweler",
        isCombatant: true
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Leatherworker",
        isCombatant: true
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Locksmith",
        isCombatant: true
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Mercer",
        isCombatant: true
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Potter",
        isCombatant: true
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Printer",
        isCombatant: false
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Rope-maker",
        isCombatant: true
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Saddler",
        isCombatant: true
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Tailor",
        isCombatant: true
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Soaper",
        isCombatant: true
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Tanner",
        isCombatant: true
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Thatcher",
        isCombatant: true
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Tinker",
        isCombatant: true
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Toymaker",
        isCombatant: false
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Watchmaker",
        isCombatant: false
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Weaponsmith",
        isCombatant: true
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Weaver",
        isCombatant: false
    },
    {
        nobility: ["Noble"],
        maturity: ["Adult", "Elder"],
        value: "Disgraced Royal",
        isCombatant: true
    },
    {
        nobility: ["Peasant"],
        maturity: ["Adult", "Elder"],
        value: "Deserter",
        isCombatant: true
    },
    {
        nobility: ["Peasant"],
        maturity: ["Adult", "Elder"],
        value: "Cult Leader",
        isCombatant: true
    },
    {
        nobility: ["Peasant", "Common", "Scholar", "Gentle"],
        maturity: ["Adult", "Elder"],
        gender: ["Male"],
        value: "Friar",
        isCombatant: true
    },
    {
        nobility: ["Peasant"],
        value: "Beggar"
    },
    {
        nobility: ["Peasant"],
        maturity: ["Adult", "Elder"],
        value: "Rag-and-Bone Man",
        isCombatant: true
    },
    {
        nobility: ["Peasant"],
        maturity: ["Child", "Adult", "Elder"],
        value: "Rebel",
        isCombatant: true
    },
    {
        nobility: ["Peasant"],
        value: "Runaway Slave",
        isCombatant: true
    },
    {
        nobility: ["Peasant"],
        maturity: ["Child", "Adult"],
        value: "Chimney Sweep"
    },
    {
        nobility: ["Peasant", "Common"],
        maturity: ["Adult", "Elder"],
        value: "Kidnapper",
        isCombatant: true
    },
    {
        nobility: ["Peasant"],
        maturity: ["Adult", "Elder"],
        value: "Jester"
    },
    {
        nobility: ["Merchant"],
        maturity: ["Adult", "Elder"],
        value: "Guild Master",
        isCombatant: true
    },
    {
        nobility: ["Scholar"],
        maturity: ["Adult", "Elder"],
        value: "Seer"
    },
    {
        nobility: ["Scholar", "Gentle"],
        maturity: ["Adult", "Elder"],
        value: "High Priest",
        isCombatant: true
    },
    {
        nobility: ["Scholar"],
        maturity: ["Adult", "Elder"],
        value: "Anthropologist",
        isCombatant: false
    },
    {
        nobility: ["Scholar"],
        maturity: ["Child", "Adult", "Elder"],
        value: "Apprentice"
    },
    {
        nobility: ["Scholar"],
        maturity: ["Adult", "Elder"],
        value: "Archaeologist",
        isCombatant: true
    },
    {
        nobility: ["Scholar"],
        maturity: ["Adult", "Elder"],
        value: "Archivist",
        isCombatant: false
    },
    {
        nobility: ["Scholar"],
        maturity: ["Adult", "Elder"],
        value: "Astrologer",
        isCombatant: false
    },
    {
        nobility: ["Scholar"],
        maturity: ["Adult", "Elder"],
        value: "Botanist",
        isCombatant: true
    },
    {
        nobility: ["Scholar"],
        maturity: ["Adult", "Elder"],
        value: "Cartographer",
        isCombatant: false
    },
    {
        nobility: ["Scholar"],
        maturity: ["Adult", "Elder"],
        value: "Chemist",
        isCombatant: true
    },
    {
        nobility: ["Scholar"],
        maturity: ["Adult", "Elder"],
        value: "Dean",
        isCombatant: true
    },
    {
        nobility: ["Scholar"],
        maturity: ["Adult", "Elder"],
        value: "Engineer",
        isCombatant: true
    },
    {
        nobility: ["Scholar"],
        maturity: ["Adult", "Elder"],
        value: "Historian",
        isCombatant: false
    },
    {
        nobility: ["Scholar"],
        maturity: ["Adult", "Elder"],
        value: "Horologist",
        isCombatant: true
    },
    {
        nobility: ["Scholar"],
        maturity: ["Adult", "Elder"],
        value: "Librarian",
        isCombatant: false
    },
    {
        nobility: ["Scholar"],
        maturity: ["Adult", "Elder"],
        value: "Mathematician",
        isCombatant: false
    },
    {
        nobility: ["Scholar"],
        maturity: ["Adult", "Elder"],
        value: "Philosopher",
        isCombatant: false
    },
    {
        nobility: ["Scholar"],
        maturity: ["Adult", "Elder"],
        value: "Professor",
        isCombatant: false
    },
    {
        nobility: ["Scholar"],
        maturity: ["Adult", "Elder"],
        value: "Researcher",
        isCombatant: false
    },
    {
        nobility: ["Scholar"],
        maturity: ["Adult", "Elder"],
        value: "Teacher",
        isCombatant: false
    },
    {
        nobility: ["Scholar"],
        maturity: ["Adult", "Elder"],
        value: "Theologian",
        isCombatant: false
    },
    {
        nobility: ["Scholar"],
        maturity: ["Adult", "Elder"],
        value: "Tutor",
        isCombatant: false
    },
    {
        nobility: ["Scholar"],
        maturity: ["Adult", "Elder"],
        value: "Constable",
        isCombatant: true
    },
    {
        nobility: ["Servant"],
        maturity: ["Child", "Adult", "Elder"],
        value: "Shipwright",
        isCombatant: true
    },
    {
        nobility: ["Servant"],
        maturity: ["Adult", "Elder"],
        value: "Ferryman",
        isCombatant: true
    },
    {
        nobility: ["Servant"],
        maturity: ["Adult", "Elder"],
        value: "First Mate",
        isCombatant: true
    },
    {
        nobility: ["Servant"],
        maturity: ["Adult", "Elder"],
        value: "Helmsman",
        isCombatant: true
    },
    {
        nobility: ["Servant"],
        maturity: ["Adult", "Elder"],
        value: "Navigator",
        isCombatant: true
    },
    {
        nobility: ["Servant"],
        maturity: ["Adult", "Elder"],
        value: "Sailor",
        isCombatant: true
    },
    {
        nobility: ["Servant"],
        maturity: ["Adult", "Elder"],
        value: "Purser",
        isCombatant: false
    },
    {
        nobility: ["Servant"],
        maturity: ["Adult", "Elder"],
        value: "Caravan Guard",
        isCombatant: true
    },
    {
        nobility: ["Servant"],
        maturity: ["Child", "Adult"],
        value: "Maid",
        isCombatant: false
    },
    {
        nobility: ["Servant"],
        maturity: ["Adult", "Elder"],
        value: "Butler",
        isCombatant: true
    },
    {
        nobility: ["Servant"],
        maturity: ["Child", "Adult", "Elder"],
        value: "Ward",
        isCombatant: true
    },
    {
        nobility: ["Servant"],
        maturity: ["Child", "Adult", "Elder"],
        value: "Squire",
        isCombatant: true
    },
    {
        nobility: ["Servant"],
        maturity: ["Adult", "Elder"],
        value: "Steward",
        isCombatant: true
    },
    {
        nobility: ["Servant"],
        maturity: ["Adult", "Elder"],
        value: "Porter",
        isCombatant: true
    },
    {
        nobility: ["Servant"],
        maturity: ["Adult", "Elder"],
        value: "Page",
        isCombatant: false
    },
    {
        nobility: ["Servant"],
        maturity: ["Adult", "Elder"],
        value: "Spokesman",
        isCombatant: true
    },
    {
        nobility: ["Servant"],
        maturity: ["Adult", "Elder"],
        value: "Master of Coin",
        isCombatant: true
    },
    {
        nobility: ["Servant"],
        maturity: ["Adult", "Elder"],
        value: "Master of the Revels",
        isCombatant: true
    },
    {
        nobility: ["Servant"],
        maturity: ["Adult", "Elder"],
        value: "Tax Collector",
        isCombatant: true
    },
    {
        nobility: ["Servant"],
        maturity: ["Adult", "Elder"],
        value: "Courtier",
        isCombatant: true
    },
    {
        nobility: ["Servant"],
        maturity: ["Child", "Adult", "Elder"],
        value: "Spy",
        isCombatant: true
    },
    {
        nobility: ["Servant"],
        maturity: ["Child", "Adult"],
        value: "Messenger",
        isCombatant: true
    },
    {
        nobility: ["Underclass"],
        maturity: ["Child", "Adult", "Elder"],
        value: "Grave Robber",
        isCombatant: true
    },
    {
        nobility: ["Underclass"],
        maturity: ["Child", "Adult", "Elder"],
        value: "Heckler",
        isCombatant: true
    },
    {
        nobility: ["Underclass"],
        maturity: ["Child", "Adult", "Elder"],
        value: "Heretic",
        isCombatant: true
    },
    {
        nobility: ["Underclass", "Peasant"],
        maturity: ["Adult", "Elder"],
        value: "Hermit",
        isCombatant: true
    },
    {
        nobility: ["Underclass"],
        maturity: ["Child", "Infant", "Adult", "Elder"],
        value: "Pilgrim",
        isCombatant: true
    },
    {
        nobility: ["Underclass"],
        value: "Refugee",
        isCombatant: true
    },
    {
        nobility: ["Underclass"],
        value: "Squatter",
        isCombatant: true
    },
    {
        nobility: ["Underclass"],
        value: "Urchin"
    },
    {
        nobility: ["Underclass"],
        maturity: ["Adult", "Elder"],
        value: "Vagabond",
        isCombatant: true
    },
    {
        nobility: ["Underclass", "Peasant"],
        value: "Exile",
        isCombatant: true
    },
    {
        nobility: ["Underclass", "Peasant"],
        value: "Cultist",
        isCombatant: true
    },
    {
        nobility: ["Underclass"],
        value: "Slave",
        isCombatant: false
    },
    {
        nobility: ["Underclass"],
        value: "Street Sweeper"
    },
    {
        nobility: ["Underclass"],
        maturity: ["Child", "Adult", "Elder"],
        value: "Gravedigger",
        isCombatant: true
    },
    {
        nobility: ["Underclass", "Peasant"],
        maturity: ["Adult", "Elder"],
        value: "Prostitute",
        isCombatant: false
    },
    {
        nobility: ["Yeoman"],
        maturity: ["Adult", "Elder"],
        value: "Entrepreneur",
        isCombatant: true
    },
    {
        nobility: ["Yeoman", "Gentle"],
        maturity: ["Adult", "Elder"],
        value: "Plantation Owner",
        isCombatant: true
    },
    {
        nobility: ["Yeoman"],
        maturity: ["Adult", "Elder"],
        value: "Farmer",
        isCombatant: true
    }
] as const;

export type Profession = (typeof PROFESSIONS)[number]["value"];

export namespace Profession {
    export const List = _List.createList<
        Profession,
        {
            nobility?: Nobility[];
            maturity?: Maturity[];
            moral?: Moral[];
            ethic?: Ethic[];
            class?: Class[];
            gender?: Gender[];
            isCombatant?: boolean;
        },
        Profession
    >(PROFESSIONS);
}
