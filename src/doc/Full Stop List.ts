import { Class } from "../component/Class.js";

// Begin example

const list = new Class.List().map(item => {
    return {
        ...item,
        value: `${item.value}.`
    };
});
console.log(list.pick());
console.log(list.pick());
