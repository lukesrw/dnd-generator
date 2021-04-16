// import { List } from "./lib/List";
import { NPC } from "./lib/NPC";
// import { Place } from "./lib/Place";

async function main() {
    let person = new NPC();

    console.log(person.getDescription());
}

main();
