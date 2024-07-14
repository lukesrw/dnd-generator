import { Component, Lib, Util } from "../index.js";

// Begin example

const hotel = new Util.Sentence([
    "Hotel",
    () => Lib.randomItem(["California", "Letztes Jahr", "Emerson"]) + ":",
    "if you're looking for",
    store => store.item("ideal", () => new Component.Ideal.List().pickItem().category).toLowerCase(),
    "- you found it!",
    store => `(${store.item("ideal", () => "Ideal")})`
]);
console.log(hotel.build());
console.log(hotel.build());
