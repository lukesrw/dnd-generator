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
console.log(`${myRandomNpc.property.race} ${myRandomNpc.property.class} called ${myRandomNpc.property.name}`); // Goblin Sorcerer called Dokhkrig

const myRandomArmour = new Armour.List().pick();
console.log(myRandomArmour); // Breastplate
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

- `Ability 🎉📃` [`ts`](/src/component/Ability.ts), `Age📃` [`ts`](/src/component/Age.ts), `Alignment📃` [`ts`](/src/component/Alignment.ts), `Animal 🎉📃` [`ts`](/src/component/Animal.ts), `Armour📃` [`ts`](/src/component/Armour.ts)
- `Background 🎉📃` [`ts`](/src/component/Background.ts)
- `Class📃` [`ts`](/src/component/Class.ts), `Colour 🎉📃` [`ts`](/src/component/Colour.ts), `Conclusion 🎉📃` [`ts`](/src/component/Conclusion.ts), `Currency 🎉📃` [`ts`](/src/component/Currency.ts)
- `Danger 🎉📃` [`ts`](/src/component/Danger.ts), `Dice 🎉📃` [`ts`](/src/component/Dice.ts)
- `Ethic 🎉📃` [`ts`](/src/component/Ethic.ts)
- `Eye` [`ts`](/src/component/Eye.ts)
    - `Colour 🎉📃`
- `Flaw 🎉📃` [`ts`](/src/component/Flaw.ts)
- `Gender 🎉📃` [`ts`](/src/component/Gender.ts), `Gossip 🎉📃` [`ts`](/src/component/Gossip.ts)
- `Hair` [`ts`](/src/component/Hair.ts)
    - `Colour 🎉📃`
- `Ideal 🎉📃` [`ts`](/src/component/Ideal.ts)
- `Language 🎉📃` [`ts`](/src/component/Language.ts), `Level 🎉📃` [`ts`](/src/component/Level.ts), `Location 🎉📃` [`ts`](/src/component/Location.ts)
- `Maturity📃` [`ts`](/src/component/Maturity.ts), `Money Sink 🎉📃✏️` [`ts`](/src/component/MoneySink.ts), `Monster 🎉📃` [`ts`](/src/component/Monster.ts), `Moral 🎉📃` [`ts`](/src/component/Moral.ts), `Motivation📃` [`ts`](/src/component/Motivation.ts)
- `Name📃` [`ts`](/src/component/Name.ts), `Nobility📃` [`ts`](/src/component/Nobility.ts)
- `NPC📦` [`ts`](/src/component/NPC.ts)
    - `Abilities 🎉📦`
    - `Skills📦`
- `Past 🎉📃` [`ts`](/src/component/Past.ts), `Physicality📃` [`ts`](/src/component/Physicality.ts), `Profession 🎉📃` [`ts`](/src/component/Profession.ts)
- `Race📃` [`ts`](/src/component/Race.ts), `Relationship 🎉📃` [`ts`](/src/component/Relationship.ts)
- `Rumour 🎉✏️` [`ts`](/src/component/Rumour.ts)
    - `Body 🎉📃`
- `Sex📃` [`ts`](/src/component/Sex.ts), `Skill 🎉📃` [`ts`](/src/component/Skill.ts)
- `Skin` [`ts`](/src/component/Skin.ts)
    - `Colour 🎉📃`
- `Subtlety 🎉📃` [`ts`](/src/component/Subtlety.ts)
- `Tavern📦` [`ts`](/src/component/Tavern.ts)
    - `Name✏️`
- `Tool 🎉📃` [`ts`](/src/component/Tool.ts), `Trait 🎉📃` [`ts`](/src/component/Trait.ts)
- `Verb 🎉📃` [`ts`](/src/component/Verb.ts)
- `Weapon📃` [`ts`](/src/component/Weapon.ts)