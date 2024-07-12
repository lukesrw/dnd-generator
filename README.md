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

_Lists_ allow you to group related concepts into a single _List_ which can then be randomly picked from, further filtered, etc. see the [_Lists_ documentation](/src/lib/list/README.md) for full details.

```ts Readme List
const nobilityList = new Nobility.List();

console.log(nobilityList.pickItem()); // { value: 'Peasant', weight: 6000, importance: -1 }
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

### ✏️ Sentence

_Sentences_ allow you to generate random text based off pre-defined _Sentence Parts_ which provide the possible combinations, see the [_Sentences_ documentation](/src/lib/sentence/README.md) for full details.

```ts Readme Sentence
const mySentence = new Sentence([]);
```

### 📦 Generator

_Generators_ allow you to generate random content which comprises multiple other _Lists_ and _Sentences_.

```ts Readme Generator
const randomNpc = new NPC();
console.log(`${randomNpc.property.race} ${randomNpc.property.class} called ${randomNpc.property.name}`); // Lizardfolk Fighter called Guh-Guh

const randomTavern = new Tavern();
console.log(`${randomTavern.name} has ${randomTavern.staff.length} staff and ${randomTavern.patrons.length} patrons.`); // The Olive Dog has 2 staff and 5 patrons.
```

### Available Components

- `Ability 🎉📃`, `Age 📃`, `Alignment 📃`, `Animal 🎉📃`, `Armour 📃`
- `Background 🎉📃`
- `Class 📃`, `Colour 🎉📃`, `Conclusion 🎉📃`, `Currency 🎉📃`
- `Danger 🎉📃`, `Dice 🎉📃`
- `Ethic 🎉📃`
- `Eye`
    - `Colour 🎉📃`
- `Flaw 🎉📃`
- `Gender 🎉📃`, `Gossip 🎉📃`
- `Hair`
    - `Colour 🎉📃`
- `Ideal 🎉📃`
- `Language 🎉📃`, `Level 🎉📃`, `Location 🎉📃`
- `Maturity 📃`, `Money Sink 🎉📃✏️`, `Monster 🎉📃`, `Moral 🎉📃`, `Motivation 📃`
- `Name 📃`, `Nobility 📃`
- `NPC 📦`
    - `Abilities 🎉📦`
    - `Skills 📦`
- `Past 🎉📃`, `Physicality 📃`, `Profession 🎉📃`
- `Race 📃`, `Relationship 🎉📃`
- `Rumour 🎉✏️`
    - `Body 🎉📃`
- `Sex 📃`, `Skill 🎉📃`
- `Skin`
    - `Colour 🎉📃`
- `Subtlety 🎉📃`
- `Tavern 📦`
    - `Name ✏️`
- `Tool 🎉📃`, `Trait 🎉📃`
- `Verb 🎉📃`
- `Weapon 📃`