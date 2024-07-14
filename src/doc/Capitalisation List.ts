import { Component } from "../index.js";

// Begin example

const list = new Component.Class.List().map(item => {
    return {
        ...item,
        value: item.value.toLowerCase()
    };
});
console.log(list.pick());
console.log(list.pick());
