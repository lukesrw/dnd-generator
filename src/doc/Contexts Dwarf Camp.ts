import { Component } from "../index.js";

// Begin example

const dwarfCamp = {
    race: new Component.Race.List().filter(race => race.value.includes("Dwarf"))
};

const dwarf = new Component.NPC(
    {},
    {
        context: dwarfCamp
    }
);

console.log(`I'm a ${dwarf.property.race}`);
