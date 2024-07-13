# D&D Generator

A system for generating random D&D/fantasy information.

🎉 Now in v2 (read the [Changelog](CHANGELOG.md) for full details)

## Getting Started

Install the package:

```
npm install dnd-generator
```

## Utilities

### List 📃

_Lists_ are the core primitive of D&D Generator, allowing you to group related concepts into a single set which can then be reused, further filtered, and picked from. See the [_Lists_ documentation](/src/lib/list/README.md) for full details.

```ts Readme List
const nobilityList = new Nobility.List();

console.log(nobilityList.pickItem()); // { value: 'Servant', maturity: [ 'Child', 'Adult', 'Elder' ],...
console.log(nobilityList.pick()); // Peasant
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

### ✏️ Sentence

_Sentences_ allow you to create text from pre-defined _Sentence Parts_ which provide the possible random permutations. See the [_Sentences_ documentation](/src/lib/sentence/README.md) for full details. _Sentences_

```ts Readme Sentence
const mySentence = new Sentence([]);
```

### 📦 Generator

_Generators_ allow you to create/utilise random content which is comprised from other _Lists_, _Sentences_, or _Generators_. See the [_Generators_ documentation](/src/lib/generator/README.md) for full details.

```ts Readme Generator
const randomNpc = new NPC();
console.log(`${randomNpc.property.race} ${randomNpc.property.class} called ${randomNpc.property.name}`); // Aasimar Cleric called Alantat

const randomTavern = new Tavern();
console.log(`${randomTavern.name} tavern has ${randomTavern.patrons.length} patrons.`); // The Bronze Cow tavern has 6 patrons.
```

### Available Components

- `Ability 🎉📃`, `Age 📃`, `Alignment 📃`, `Animal 🎉📃`, `Armour 📃`
- `Background 🎉📃`
- `Class 📃`, `Colour 🎉📃`, `Conclusion 🎉📃`, `Currency 🎉📃`
- `Danger 🎉📃`, `Dice 🎉📃`
- `Ethic 🎉📃`
- `Eye.Colour 🎉📃`
- `Flaw 🎉📃`
- `Gender 🎉📃`, `Gossip 🎉📃`
- `Hair.Colour 🎉📃`
- `Ideal 🎉📃`
- `Language 🎉📃`, `Level 🎉📃`, `Location 🎉📃`
- `Maturity 📃`, `MoneySink 🎉📃✏️`, `Monster 🎉📃`, `Moral 🎉📃`, `Motivation 📃`
- `Name 📃`, `Nobility 📃`, `NPC 📦`
- `NPC.Abilities 🎉📦`, `NPC.Skills 📦`
- `Past 🎉📃`, `Physicality 📃`, `Profession 🎉📃`
- `Race 📃`, `Relationship 🎉📃`, `Rumour 🎉✏️`
- `Rumour.Body 🎉📃`
- `Sex 📃`, `Skill 🎉📃`
- `Skin.Colour 🎉📃`, `Subtlety 🎉📃`
- `Tavern 📦`, `Tavern.Name ✏️`, `Tool 🎉📃`, `Trait 🎉📃`
- `Verb 🎉📃`
- `Weapon 📃`