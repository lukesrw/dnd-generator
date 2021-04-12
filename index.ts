import { List } from "./lib/List";
import { NPC } from "./lib/NPC";
import { Place } from "./lib/Place";

async function main() {
    let tavern = new Place({
        race: new List(undefined, [
            {
                value: "Dwarf"
            }
        ])
    });

    let barkeep = new NPC(tavern, {
        profession: "Barkeep"
    });

    let barkeep_friend = {};
    if (barkeep.surname) {
        barkeep_friend = new NPC(tavern, {
            surname: barkeep.surname
        });
    }

    console.table(barkeep);
    console.table(barkeep_friend);
}

main();
