import { Class as _Class } from "../component/Class.js";
import { List } from "../util/List.js";

/**
 * Fake Class.List to demonstrate not having standardised capitalisation
 */
const Component = {
    Class: {
        List: List.createList(
            new _Class.List().getItems().map(item => {
                return {
                    ...item,
                    value: item.value.toLowerCase()
                };
            })
        )
    }
};

// Begin example

/* Fake example */
const item = new Component.Class.List().pick();
console.log(item);
console.log(item.substring(0, 1).toUpperCase() + item.substring(1));
