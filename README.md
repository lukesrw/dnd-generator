# D&D Generator

A system for generating random D&D information

## Generators

-   [**Abilities**](lib/generator/Abilities.ts) (random generation of a Character/NPC's ability scores)
-   [**NPC**](lib/generator/NPC.ts) (random generation of an NPC, using the below "Lists")
-   [**Tavern**](lib/generator/Tavern.ts) (random generation of a tavern with staff and patrons)

## Lists

Each list extends the [List](lib/list/List.ts) class, which implements...

-   Constructor to set file location/items directly
-   `getItems()` to retrieve all items
-   `getValues()` - to retrieve all item values
-   `getItem(value)` - to retrieve a specific item by value
-   `getFiltered(filter?)` to retrieve all items with a filter
-   `pickRandom(filter?)` to pick random item from all items (with an optional filter)

### Existing Lists

-   [**Age**](lib/list/age/age.ts) (number, e.g. "400" - filters for [Race](lib/list/race/) & [Maturity](lib/list/maturity/))
-   [**Armor**](lib/list/armor/armor.ts) (e.g. "studded leather armor") - filters for Druids not using metal
-   [**Background**](lib/list/background/background.ts) (e.g. "Entertainer")
-   [**Characteristic**](lib/list/characteristic/characteristic.ts) (e.g. "slender")
-   [**Class**](lib/list/class/class.ts) (e.g. "Paladin") - filters for races not suiting a class
-   [**Conclusion**](lib/list/conclusion/conclusion.ts) (methods by which a situation may end, e.g. "was killed")
-   [**Currency**](lib/list/currency/currency.ts) (e.g. "gold") - weights to their respective conversions
-   [**Danger**](lib/list/danger/danger.ts) (methods by which a situation might worsen, e.g. "seeking revenge")
-   [**Ethic**](lib/list/ethic/ethic.ts) (e.g. "Chaotic") - weights to a reasonably interesting society
-   [**Eye**](lib/list/eye/eye.ts) (e.g. "blue") - weights to the real world
-   [**Flaw**](lib/list/flaw/flaw.ts) (character flaws, e.g. "I killed my family.")
-   [**Hair**](lib/list/hair/hair.ts) (colour, e.g. "light brown") - weights to the real world
-   [**Language**](lib/list/language/language.ts) (spoken language, e.g. "Giant")
-   [**Location**](lib/list/location/location.ts) (generic locations, e.g. "ancient ruins")
-   [**Maturity**](lib/list/maturity/maturity.ts) (range not number, e.g. "adult")
-   [**Monster**](lib/list/monster/monster.ts) (generic monster, e.g. "a mummy")
-   [**Moral**](lib/list/moral/moral.ts) (e.g. "Good") - weights to a reasonably interesting society
-   [**Motivation**](lib/list/motivation/motivation.ts) (why someone does what they do, e.g. "family")
-   [**Name**](lib/list/name/name.ts) (wrapper for [Fantasy Name Generator](https://www.npmjs.com/package/fantasy-name-generator) to support more races)
-   [**Nobility**](lib/list/nobility/nobility.ts) (e.g. "Merchant") - weights to the real world very roughly
-   [**Past**](lib/list/past/past.ts) (generic previous time frame, e.g. " last month")
-   [**Profession**](lib/list/profession/profession.ts) (e.g. "Town Crier")
    -   Royal (currently no Royal-only professions) - throne sitter and their family
    -   Noble (e.g. "Disgraced Royal") - ascending to or descending from royalty
    -   Knight (currently no Knight-only professions) - those who have been knighted
    -   Esquire (e.g. "Banker") - highly respected in society
    -   Gentle (e.g. "Town Crier") - regular invitee to the royal court
    -   Yeoman (e.g. "Farmer") - owner or cultivator of an estate
    -   Scholar (e.g. "Anthropologist") - expert in their academic field
    -   Merchant (e.g. "Wagoner") - proprietor of any commercial endeavour
    -   Servant (e.g. "Ferryman") - in service to one of the above
    -   Common (e.g. "Traveler") - most people in any society
    -   Peasant (e.g. "Runaway Slave") - extreme poverty
    -   Underclass (e.g. "Squatter") - fringe of society
-   [**Race**](lib/list/race/race.ts) (e.g. "Kobold")
-   [**Rumor**](lib/list/rumor/rumor.ts) (template for generating rumors, e.g. "A {Merchant:pickRandom} from the town was {Verb:pickRandom}{Past:pickRandom}")
-   [**Sex**](lib/list/sex/sex.ts) (birth-assigned sex, e.g. "Female")
-   [**Skin**](lib/list/skin/skin.ts) (colour, e.g. "olive")
-   [**Subtlety**](lib/list/subtlety/subtlety.ts) (how flagrant an action may be, e.g. "quietly")
-   [**Title**](lib/list/title/title.ts) (e.g. "Mrs")
-   [**Trait**](lib/list/trait/trait.ts) (personality traits, e.g. "Nothing can shake my optimistic attitude.")
-   [**Verb**](lib/list/verb/verb.ts) (generic verbs for rumors, e.g. "blackmailed")
-   [**Weapon**](lib/list/weapon/weapon.ts) (e.g. "mace") - assigned only if maturity, class, and profession make sense
