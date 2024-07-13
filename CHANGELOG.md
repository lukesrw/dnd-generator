# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0]

### 🎉 New!

-   New _Lists_
    -   `Ability`, `Animal`
    -   `Background`
    -   `Colour`, `Conclusion`, `Currency`
    -   `Danger`, `Dice`
    -   `Ethic`
    -   `Flaw`
    -   `Gender`, `Gossip`
    -   `Ideal`
    -   `Language`, `Level`, `Location`
    -   `Money Sink`, `Monster`, `Moral`
    -   `Past`
    -   `Relationship`, `Rumour.Body`
    -   `Skill`
    -   `Subtlety`
    -   `Tool`, `Trait`
    -   `Verb`
-   New _Sentences_
    -   `Money Sink`,
    -   `Rumour`
    -   `Tavern.Name`
-   New _Generators_
    -   `NPC.Abilities`
    -   `Tavern`
-   Full TypeScript support (type checking, autocomplete suggestions, etc.)
-   Signifiant improvement in performance, especially for heavily weighted lists
-   Native built-in hybrid support for both CommonJS and ES Modules

### ❓ Breaking Changes

Migration may be required in order to upgrade to 2.0.0:

-   Removed `Generator.Place` and `Context` in favour of objects, see [doc/Contexts](doc/Contexts.md) for migration
-   Renamed `List.*` to `Component.*.List` (e.g. `List.Class` to `Component.Class.List`)
-   Removed `List.Professions.*` in favour of `new Component.Profession.List().filter({ nobility: "*" })`
-   Removed file-based build step for _Lists_ in favour of hardcoded/generated lists

### ❔ Changes

No migration needed, but other notable differences include:

-   Added deprecation warnings for supported but discouraged backwards compatibility
-   Improved standardisation of _List_ items, see [doc/Standardisation](doc/Standardisation.md) for details
-   `Component.Class.List` no longer tries to create "realistic" race-class pairs for OGL classes
-   Switched from [Jest](https://jestjs.io/) to [Vitest](https://vitest.dev/) and increased to full test coverage (with an [exception for `namespace` lines](https://github.com/istanbuljs/nyc/issues/1209))
    -   `npm t` to run all tests, `npm t -- -t <pattern>` to run specific test(s)

### 🐛 Fixes

-   Incorrectly filtered `Component.Profession.List` items are now handled properly
