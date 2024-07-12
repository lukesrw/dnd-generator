import { NPC } from "../component/NPC.js";
import { Race } from "../component/Race.js";

// Begin example

const dwarfCamp = {
    race: new Race.List().filter(race => race.value.includes("Dwarf"))
};

const dwarf = new NPC(
    {},
    {
        context: dwarfCamp
    }
);

console.log(`I'm a ${dwarf.property.race}`);
