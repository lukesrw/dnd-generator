# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0]

### 🎉 New!

-   New generator:
    -   [`Skills`](src/lib/generator/Skills.ts)
-   New lists:
    -   [`Ability`](src/lib/list/lists/Ability.ts), [`Alignment`](src/lib/list/lists/Alignment.ts), [`Animal`](src/lib/list/lists/Animal.ts)
    -   [`Colour`](src/lib/list/lists/Colour.ts)
    -   [`Dice`](src/lib/list/lists/Dice.ts)
    -   [`Gender`](src/lib/list/lists/Gender.ts)
    -   [`Level`](src/lib/list/lists/Level.ts)
    -   [`Relationship`](src/lib/list/lists/Relationship.ts)
    -   [`Skill`](src/lib/list/lists/Skill.ts)
    -   [`Tool`](src/lib/list/lists/Tool.ts)
-   Full TypeScript support (type checking, autocomplete suggestions, etc.)
-   Signifiant improvement in performance, especially for heavily weighted lists
-   Native built-in hybrid support for both CommonJS and ES Modules

### ❓ Breaking Changes

Migration may be required in order to upgrade to 2.0.0:

-   Removed `Generator.Place` as a generic wrapper for an NPC's `Context` class
-   Removed `Context` class in favour of objects, see [doc/Contexts](doc/Contexts.md) for migration
-   Removed `list.getFiltered(filter)` in favour of `list.filter(filter).getItems()`
-   Removed `list.pickRandom(filter)` in favour of `list.filter(filter).pick()`
-   Removed `npc.classes` array in favour of `npc.property.class` and `npc.property.level`
-   Removed `npc.getLevel()` in favour of `npc.property.level`
-   Removed nobility profession lists, e.g. `List.Professions.Merchant` in favour of `new Profession.List().filter({ nobility: "Merchant" })`
-   Renamed `list.pickRandom()` to `list.pick()`
-   Renamed `List.*` to `Component.*.List` (e.g. `List.Class` to `Component.Class.List`)
-   Renamed `List.Eye` to `Component.Eye.Colour.List`
-   Renamed `List.Hair` to `Component.Hair.Colour.List`
-   Renamed `List.Skin` to `Component.Skin.Colour.List`
-   Renamed `List.Characteristics` to `Component.Physicality.List`

### ❔ Changes

No migration needed, but other notable differences include:

-   Added deprecation warnings for supported but discouraged compatibility
-   Improved standardisation of list items, see [doc/Standardisation](doc/Standardisation.md) for details
-   Reviewed and improved filters for `Profession.List` items
-   `Class.List` no longer tries to create "suitable" race-class pairs for OGL classes
-   Switched from [Jest](https://jestjs.io/) to [Vitest](https://vitest.dev/) and increased to full coverage (with an [exception for `namespace` lines](https://github.com/istanbuljs/nyc/issues/1209))
    -   `npm t` to run all tests, `npm t -- -t <pattern>` to run specific test(s)

### 🐛 Fixes

-   Some `Profession.List` items being incorrectly filtered
