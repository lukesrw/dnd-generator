import { Class as _Class } from "../component/Class.js";
import { List } from "../util/List.js";

const Class = {
    List: List.createList(
        new _Class.List().getItems().map(item => {
            return {
                ...item,
                value: `${item.value}.`
            };
        })
    )
};

// Begin example

/* Fake example */
const item = new Class.List().pick();
console.log(item);
console.log(item.substring(0, item.length - 1));
