import { Component } from "../index.js";
import { randomItem } from "../lib/randomItem.js";
import { Sentence } from "../util/Sentence.js";

// Begin example

const hotel = new Sentence([
    "Hotel",
    () => randomItem(["California", "Letztes Jahr", "Emerson"]) + ":",
    "if you're looking for",
    store => store.item("ideal", () => new Component.Ideal.List().pickItem().category).toLowerCase(),
    "- you found it!",
    store => `(${store.item("ideal", () => "Ideal")})`
]);
console.log(hotel.build());
console.log(hotel.build());
