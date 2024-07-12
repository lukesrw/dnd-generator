import { NPC } from "../component/NPC.js";
import { Tavern } from "../component/Tavern.js";

// Begin example

const randomNpc = new NPC();
console.log(`${randomNpc.property.race} ${randomNpc.property.class} called ${randomNpc.property.name}`);

const randomTavern = new Tavern();
console.log(`${randomTavern.name} has ${randomTavern.staff.length} staff and ${randomTavern.patrons.length} patrons.`);
