# D&D Generator

A system for generating random D&D 5E information

## Lists

Each list extends the [List](/lib/List.ts) class, which implements...

-   Constructor to set file location/items directly
-   `getItems` method to retrieve all items
-   `getFiltered` method to retrieve all items with a filter
-   `pickRandom` static method to pick random item from a given array
-   `pickRandom` method to pick random item from all items (with an optional filter)

### Existing Lists

-   Age
    -   Age number
    -   Example: "400"
    -   Filters: Race and Maturity
-   Alignment
    -   Example: "Chaotic Good"
-   Armor
    -   Example: "studded leather armor"
    -   Filters: Druids not using metal
-   Background
    -   Example: "Entertainer"
-   Characteristics
    -   Example: "slender"
-   Class
    -   Example: "Paladin"
    -   Filters: Races not suiting a class
-   Eye
    -   Example: "blue"
    -   Weights: Match the real world currently
-   Hair
    -   Hair colour
    -   Example: "light brown"
    -   Weights: Match the real world currently
-   Language
    -   Spoken language
    -   Example: "Giant"
-   Maturity
    -   Age range, not number
    -   Example: "adult"
-   Motivation
    -   Example: "family"
-   Name
    -   Custom wrapper for Fantasy Name Generator to support more races
    -   NPM Package: [Fantasy Name Generator](https://www.npmjs.com/package/fantasy-name-generator)
-   Nobility
    -   Example: "Merchant"
    -   Weights: Match the real world currently (extremely roughly)
-   Profession
    -   Example: "Town Crier"
    -   Specific Nobility-based Lists:
        -   Royal
            -   Throne sitter and their family
            -   Example: No Royal-only professions
        -   Noble
            -   Example: "Disgraced Royal"
        -   Knight
            -   Example: No Knight-only professions
        -   Esquire
            -   Highly respected
            -   Example: "Banker"
        -   Gentle
            -   Royal court invitee or regular
            -   Example: "Town Crier"
        -   Yeoman
            -   Owner or cultivator of an estate
            -   Example: "Farmer"
        -   Scholar
            -   Expert in their academic field
            -   Example: "Anthropologist"
        -   Merchant
            -   Proprietor of any commercial endeavour
            -   Example: "Wagoner"
        -   Servant
            -   Service to the above
            -   Example: "Ferryman"
        -   Common
            -   Most people
            -   Example: "Traveler"
        -   Peasant
            -   Extreme poverty
            -   Example: "Runaway Slave"
        -   Underclass
            -   Fringe of society
            -   Example: "Squatter"
-   Race
    -   Example: "Kobold"
-   Sex
    -   Birth-assigned Sex
    -   Example: "Female"
-   Skin
    -   Example: "olive"
-   Title
    -   Example: "Mrs"
-   Weapon
    -   Assigned only if their age, class, and profession would be a combatant
    -   Example: "mace"

# Todo

-   Enemy class to begin generating combat encounters or other party situations
-   More prefabs for standard places (shops, places of worship, etc.)
