import { Component, Util } from "../index.js";

// Begin example

const space = {
    race: new Util.List([
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

const alien = new Component.NPC(
    {},
    {
        context: space
    }
);

console.log(`I'm a ${alien.property.race}`);
