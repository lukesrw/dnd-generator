# D&D Generator

A system for generating random D&D/fantasy information.

🎉 Now in v2 (read the [Changelog](CHANGELOG.md) for full details)

## Getting Started

Install the package:

```
npm install dnd-generator
```

Generate some content:

```ts Readme Getting Started
const myRandomNpc = new NPC();
console.log(`${myRandomNpc.property.race} ${myRandomNpc.property.class} called ${myRandomNpc.property.name}`); // Winged Tiefling Paladin called Yibbreoz

const myRandomArmour = new Armour.List().pick();
console.log(myRandomArmour); // Padded
```

## Utilities

### List 📃

_Lists_ allow you to group related concepts into a single _List_ which can then be randomly picked from, further filtered, etc. see the [_Lists_ documentation](/src/lib/list/README.md) for full details.

```ts Readme List
const nobilityList = new Nobility.List();

console.log(nobilityList.pickItem()); // { value: 'Yeoman', maturity: [ 'Adult', 'Elder' ], weight: 2...
console.log(nobilityList.pick()); // Common
console.log(nobilityList.getItems()); // [ { value: 'Royal', importance: 9 }, { value: 'Noble', weigh...
console.log(nobilityList.getItem("Scholar")); // { value: 'Scholar', maturity: [ 'Adult', 'Elder' ], weight: ...
console.log(nobilityList.getValues()); // [ 'Royal', 'Noble', 'Esquire', 'Knighted', 'Gentle', 'Yeoman...

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

### Available Components

- [`Ability 🎉📃`](/src/component/Ability.ts) - [`Age 📃`](/src/component/Age.ts) - [`Alignment 📃`](/src/component/Alignment.ts) - [`Animal 🎉📃`](/src/component/Animal.ts) - [`Armour 📃`](/src/component/Armour.ts)
- [`Background 🎉📃`](/src/component/Background.ts)
- [`Class 📃`](/src/component/Class.ts) - [`Colour 🎉📃`](/src/component/Colour.ts) - [`Conclusion 🎉📃`](/src/component/Conclusion.ts) - [`Currency 🎉📃`](/src/component/Currency.ts)
- [`Danger 🎉📃`](/src/component/Danger.ts) - [`Dice 🎉📃`](/src/component/Dice.ts)
- [`Ethic 🎉📃`](/src/component/Ethic.ts)
- [`Eye `](/src/component/Eye.ts)
    - `Colour 🎉📃`
- [`Flaw 🎉📃`](/src/component/Flaw.ts)
- [`Gender 🎉📃`](/src/component/Gender.ts) - [`Gossip 🎉📃`](/src/component/Gossip.ts)
- [`Hair `](/src/component/Hair.ts)
    - `Colour 🎉📃`
- [`Ideal 🎉📃`](/src/component/Ideal.ts)
- [`Language 🎉📃`](/src/component/Language.ts) - [`Level 🎉📃`](/src/component/Level.ts) - [`Location 🎉📃`](/src/component/Location.ts)
- [`Maturity 📃`](/src/component/Maturity.ts) - [`Money Sink 🎉📃✏️`](/src/component/MoneySink.ts) - [`Monster 🎉📃`](/src/component/Monster.ts) - [`Moral 🎉📃`](/src/component/Moral.ts) - [`Motivation 📃`](/src/component/Motivation.ts)
- [`Name 📃`](/src/component/Name.ts) - [`Nobility 📃`](/src/component/Nobility.ts)
- [`NPC 📦`](/src/component/NPC.ts)
    - `Abilities 🎉📦`
    - `Skills 📦`
- [`Past 🎉📃`](/src/component/Past.ts) - [`Physicality 📃`](/src/component/Physicality.ts) - [`Profession 🎉📃`](/src/component/Profession.ts)
- [`Race 📃`](/src/component/Race.ts) - [`Relationship 🎉📃`](/src/component/Relationship.ts)
- [`Rumour 🎉✏️`](/src/component/Rumour.ts)
    - `Body 🎉📃`
- [`Sex 📃`](/src/component/Sex.ts) - [`Skill 🎉📃`](/src/component/Skill.ts)
- [`Skin `](/src/component/Skin.ts)
    - `Colour 🎉📃`
- [`Subtlety 🎉📃`](/src/component/Subtlety.ts)
- [`Tavern 📦`](/src/component/Tavern.ts)
    - `Name ✏️`
- [`Tool 🎉📃`](/src/component/Tool.ts) - [`Trait 🎉📃`](/src/component/Trait.ts)
- [`Verb 🎉📃`](/src/component/Verb.ts)
- [`Weapon 📃`](/src/component/Weapon.ts)