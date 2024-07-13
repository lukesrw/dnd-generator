import { NPC } from "../component/NPC.js";
import { Tavern } from "../component/Tavern.js";

// Begin example

const { property } = new NPC();
console.log(`${property.name}, the ${property.race} ${property.class}.`);

const { name, patrons } = new Tavern();
console.log(`${name} tavern has ${patrons.length} patrons.`);
