# D&D Generator

A system for generation random D&D 5E Characters

## Lists

Each list extends the [List](/lib/List.ts) class, which implements...

-   Constructor to set file location/items directly
-   `getItems` method to retrieve all items
-   `getFiltered` method to retrieve all items with a filter
-   `pickRandom` static method to pick random item from a given array
-   `pickRandom` method to pick random item from all items (with an optional filter)

### Existing Lists

-   Age
    -   Age range, not number (see "Todo")
    -   Example: "adult"
-   Alignment
    -   Example: "Chaotic Good"
-   Armor
    -   Example: "studded leather armor"
    -   Filters: Druids not using metal
-   Characteristics
    -   Example: "slender"
-   Class
    -   Example: "Paladin"
    -   Filters: Races not suiting a class
-   Eye
    -   Example: "blue"
    -   Weights: Match the real world currently
-   Gender
    -   Gender identity (currently "Male", "Female", "Non-Binary")
    -   Example: "Non-Binary"
-   Hair
    -   Hair colour
    -   Example: "light brown"
    -   Weights: Match the real world currently
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
            -   Example: ""
        -   Knight
            -   Example: No Knight-only professions
        -   Esquire
            -   Highly respected
            -   Example: ""
        -   Gentle
            -   Royal court invitee or regular
            -   Example: ""
        -   Yeoman
            -   Owner or cultivator of an estate
            -   Example: ""
        -   Scholar
            -   Expert in their academic field
            -   Example: ""
        -   Merchant
            -   Proprietor of any commercial endeavour
            -   Example: ""
        -   Servant
            -   Service to the above
            -   Example: ""
        -   Common
            -   Most people
            -   Example: "Traveler"
        -   Peasant
            -   Extreme poverty
            -   Example: ""
        -   Underclass
            -   Fringe of society
            -   Example: ""
-   Race
-   Sex
-   Skin
-   Title
-   Weapon

# Todo

-   Specific number "Age" generator, using existing "Age" list and race for boundaries
-   "Background" list to pick random background, using race/class/etc. to make sense
-   "Language" list to pick spoken languages, using background/race/etc. to make sense
