import { NPC } from "../component/NPC.js";
import { Sentence } from "../util/Sentence.js";

// Begin example

const config = {
    item: {
        // Pre-defined items
        store: {
            predefinedName: "Predefined Item"
        }
    },
    npc: {
        // Pre-defined NPCs
        store: {
            predefinedRole: new NPC()
        },
        // NPC config
        config: {}
    }
};

const sentence1 = new Sentence(
    [
        "The",
        store => store.npc("predefinedRole").property.profession,
        "went to the tavern with her",
        store => store.item("predefinedName", () => "Fallback Item")
    ],
    config
);
const sentence2 = new Sentence(
    [
        "Once upon a time a",
        store => store.npc("predefinedRole").property.profession,
        "found a very strange",
        store => store.item("predefinedName", () => "Fallback Item")
    ],
    config
);

console.log(sentence1.build());
console.log(sentence2.build());
