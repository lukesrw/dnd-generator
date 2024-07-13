# D&D Generator

A system for generating random D&D/fantasy information.

🎉 Now in v2 (read the [Changelog](CHANGELOG.md) for full details)

## Getting Started

Install the package:

```
npm install dnd-generator
```

## Utilities

### List 📃 ([docs](/src/util/List.md))

_Lists_ are the core primitive of D&D Generator, allowing you to group related concepts into a single set which can then be reused, further filtered, and picked from.

```ts Readme List
const nobilityList = new Nobility.List();

console.log(nobilityList.pickItem()); // { value: 'Merchant', maturity: [ 'Adult', 'Elder' ], weight:...
console.log(nobilityList.pick()); // Common
console.log(nobilityList.getItems()); // [ { value: 'Royal', importance: 9 }, { value: 'Noble', weigh...
console.log(nobilityList.getItem("Scholar")); // { value: 'Scholar', maturity: [ 'Adult', 'Elder' ], weight: ...
console.log(nobilityList.getValues());

const smallerNobilityList = nobilityList.filter(item => item.value.includes("a"));
const uppercaseNobilityList = nobilityList.map(item => {
    return {
        ...item,
        value: item.value.toUpperCase()
    };
});
```

### ✏️ Sentence ([docs](/src/util/Sentence.md))

_Sentences_ allow you to create text from pre-defined _Sentence Parts_ which provide the possible random permutations. See the [_Sentences_ documentation](/src/lib/sentence/README.md) for full details. _Sentences_

```ts Readme Sentence
const mySentence = new Sentence([]);
```

### 📦 Generator

_Generators_ allow you to create/utilise random content which is comprised from other _Lists_, _Sentences_, or _Generators_.

```ts Readme Generator
const { property } = new NPC();
console.log(`${property.name}, the ${property.race} ${property.class}.`); // Brahl, the Scourge Aasimar Barbarian.

const { name, patrons } = new Tavern();
console.log(`${name} tavern has ${patrons.length} patrons.`); // The Tan Cow tavern has 6 patrons.
```

### Available Components

- [`Ability 🎉📃`](/src/component/Ability.ts), [`Age 📃`](/src/component/Age.ts), [`Alignment 📃`](/src/component/Alignment.ts), [`Animal 🎉📃`](/src/component/Animal.ts), [`Armour 📃`](/src/component/Armour.ts)
- [`Background 🎉📃`](/src/component/Background.ts)
- [`Class 📃`](/src/component/Class.ts), [`Colour 🎉📃`](/src/component/Colour.ts), [`Conclusion 🎉📃`](/src/component/Conclusion.ts), [`Currency 🎉📃`](/src/component/Currency.ts)
- [`Danger 🎉📃`](/src/component/Danger.ts), [`Dice 🎉📃`](/src/component/Dice.ts)
- [`Ethic 🎉📃`](/src/component/Ethic.ts), [`Eye.Colour 📃`](/src/component/Eye.ts)
- [`Flaw 🎉📃`](/src/component/Flaw.ts)
- [`Gender 🎉📃`](/src/component/Gender.ts), [`Gossip 🎉📃`](/src/component/Gossip.ts)
- [`Hair.Colour 📃`](/src/component/Hair.ts)
- [`Ideal 🎉📃`](/src/component/Ideal.ts)
- [`Language 🎉📃`](/src/component/Language.ts), [`Level 🎉📃`](/src/component/Level.ts), [`Location 🎉📃`](/src/component/Location.ts)
- [`Maturity 📃`](/src/component/Maturity.ts), [`MoneySink 🎉📃✏️`](/src/component/MoneySink.ts), [`Monster 🎉📃`](/src/component/Monster.ts), [`Moral 🎉📃`](/src/component/Moral.ts), [`Motivation 📃`](/src/component/Motivation.ts)
- [`Name 📃`](/src/component/Name.ts), [`Nobility 📃`](/src/component/Nobility.ts), [`NPC 📦`](/src/component/NPC.ts), [`NPC.Abilities 🎉📦`](/src/component/NPC.ts), [`NPC.Skills 📦`](/src/component/NPC.ts)
- [`Past 🎉📃`](/src/component/Past.ts), [`Physicality 📃`](/src/component/Physicality.ts), [`Profession 🎉📃`](/src/component/Profession.ts)
- [`Race 📃`](/src/component/Race.ts), [`Relationship 🎉📃`](/src/component/Relationship.ts), [`Rumour 🎉✏️`](/src/component/Rumour.ts), [`Rumour.Body 🎉📃`](/src/component/Rumour.ts)
- [`Sex 📃`](/src/component/Sex.ts), [`Skill 🎉📃`](/src/component/Skill.ts), [`Skin.Colour 📃`](/src/component/Skin.ts), [`Subtlety 🎉📃`](/src/component/Subtlety.ts)
- [`Tavern 📦`](/src/component/Tavern.ts), [`Tavern.Name ✏️`](/src/component/Tavern.ts), [`Tool 🎉📃`](/src/component/Tool.ts), [`Trait 🎉📃`](/src/component/Trait.ts)
- [`Verb 🎉📃`](/src/component/Verb.ts)
- [`Weapon 📃`](/src/component/Weapon.ts)