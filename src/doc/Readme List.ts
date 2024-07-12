import { Nobility } from "../component/Nobility.js";

// Begin example

const nobilityList = new Nobility.List();

console.log(nobilityList.pickItem());
console.log(nobilityList.pick());
console.log(nobilityList.getItems());
console.log(nobilityList.getItem("Scholar"));
console.log(nobilityList.getValues());

const smallerNobilityList = nobilityList.filter(item => item.value.includes("a"));
const uppercaseNobilityList = nobilityList.map(item => {
    return {
        ...item,
        value: item.value.toUpperCase()
    };
});
