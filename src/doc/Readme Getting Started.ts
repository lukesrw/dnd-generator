import { Armour } from "../component/Armour.js";
import { NPC } from "../component/NPC.js";

// Begin example

const myRandomNpc = new NPC();
console.log(`${myRandomNpc.property.race} ${myRandomNpc.property.class} called ${myRandomNpc.property.name}`);

const myRandomArmour = new Armour.List().pick();
console.log(myRandomArmour);
