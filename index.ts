import { NPC } from "./lib/NPC";

async function main() {
    let person = new NPC();

    console.log(person.getDescription());
}

main();
