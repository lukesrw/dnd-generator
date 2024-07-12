# Standardisation

Our aim with standardisation is to be as unopinionated as we can while maintaining:

> _"Simple code is better, less code is best."_

Standardisation isn't perfect for all use cases, but is done with the intention to be as consistent as possible.

## Capitalisation

List items were previously capitalised based on their invisioned usage (e.g. class names were "Bard" and "Cleric", whereas skin colours were "fair" and "rosy") however going forward all item values are capitalised. We shouldn't presume to know whether you're going to want capitalisation or not - but as long as we're consistent you know what to expect.

It's simpler for you to remove the capitalisation if you don't need it:

```ts Capitalisation Item
const item = new Class.List().pick();
console.log(item); // Cavalier
console.log(item.toLowerCase()); // cavalier
```

Rather than add it if you do:

```ts Fake Capitalisation Item
/* Fake example */
const item = new Class.List().pick();
console.log(item); // monk
console.log(item.substring(0, 1).toUpperCase() + item.substring(1)); // Monk
```

If you want a list without any capitalisation, you can use `list.map()` to create a new list:

```ts Capitalisation List
const list = new Class.List().map(item => {
    return {
        ...item,
        value: item.value.toLowerCase()
    };
});
console.log(list.pick()); // druid
console.log(list.pick()); // ranger
```

## Full Stops

List items previously ended with a full stop if they were deemed to be sentence-like, however going forward all item values will not end with a full stop. Prematurely adding full stops when they may not be required just makes it harder to combine values from multiple lists together.

It's simpler for you to add a full stop if you need it:

```ts Full Stop Item
const item = new Class.List().pick();
console.log(item); // Pacifist
console.log(item + "."); // Pacifist.
console.log(`${item}.`); // Pacifist.
```

Rather than remove it if you don't:

```ts Fake Full Stop Item
/* Fake example */
const item = new Class.List().pick();
console.log(item); // Blood Hunter.
console.log(item.substring(0, item.length - 1)); // Blood Hunter
```

If you want a list with full stops, you can use `list.map()` to create a new list:

```ts Full Stop List
const list = new Class.List().map(item => {
    return {
        ...item,
        value: `${item.value}.`
    };
});
console.log(list.pick()); // Ranger.
console.log(list.pick()); // Paladin.
```
