import { Component } from "../index.js";

// Begin example

const { property } = new Component.NPC();
console.log(`${property.name}, the ${property.race} ${property.class}.`);

const { name, patrons } = new Component.Tavern();
console.log(`${name} tavern has ${patrons.length} patrons.`);
