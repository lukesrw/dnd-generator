# Contexts

**Contexts** allow generators to flexibly expand, refine, or otherwise enhance source [List](/src/lib/list/List.ts) items to better suit the content that you're creating by providing it with any known parameters that may have an affect on the generated content.

For example, an [NPC](/src/lib/generator/NPC.ts) will be a random race, which is great when you don't have a starting point, but if we're in a dwarven camp? The NPC's `config.context` can be set to only dwarves, allowing you to set how 'random' it is.

```ts Contexts Dwarf Camp
const dwarfCamp = {
    race: new Race.List().filter(race => race.value.includes("Dwarf"))
};

const dwarf = new NPC(
    {},
    {
        context: dwarfCamp
    }
);

console.log(`I'm a ${dwarf.property.race}`); // I'm a Mountain Dwarf
```

Generators will use the built-in lists if you don't provide one, but you can also easily make your own entirely custom lists:

```ts Contexts Space
const space = {
    race: new List([
        {
            value: "Hearthian"
        },
        {
            value: "Nomai"
        },
        {
            value: "Owlk"
        }
    ])
};

const alien = new NPC(
    {},
    {
        context: space
    }
);

console.log(`I'm a ${alien.property.race}`); // I'm a Owlk
```
