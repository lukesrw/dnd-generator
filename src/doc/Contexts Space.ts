import { NPC } from "../component/NPC.js";
import { List } from "../util/List.js";

// Begin example

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

console.log(`I'm a ${alien.property.race}`);
