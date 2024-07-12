# Contexts

**Contexts** allow generators to flexibly expand, refine, or otherwise enhance source [List](/src/lib/list/List.ts) items to better suit the content that you're creating by providing it with any known parameters that may have an affect on the generated content.

For example, an [NPC](/src/lib/generator/NPC.ts) will be a random race, which is great when you don't have a starting point, but if we're in a dwarven camp? The NPC's `config.context` can be set to only dwarves, allowing you to set how 'random' it is.

```ts
const dwarfCamp = {
    race: new Race.List().filter(race => race.value.includes("Dwarf"))
};

for (let i = 0; i < 7; i++) {
    const dwarf = new NPC(
        {},
        {
            context: dwarfCamp
        }
    );

    /**
     * I'm a Duergar Dwarf
     * I'm a Dwarf
     * I'm a Hill Dwarf
     * I'm a Mark of Warding Dwarf
     * I'm a Mountain Dwarf
     */
    console.log(`I'm a ${dwarf.property.race}`);
}
```

Generators will use the built-in lists if you don't provide one, but you can also easily make your own entirely custom lists:

```ts
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

/**
 * I'm a Hearthian
 * I'm a Nomai
 * I'm a Owlk
 */
console.log(`I'm a ${alien.property.race}`);
```
