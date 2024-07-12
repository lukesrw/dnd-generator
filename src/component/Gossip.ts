import { randomItem } from "../lib/randomItem.js";
import { Fix } from "../types/Fix.js";
import { List as _List } from "../util/List.js";
import { Sentence } from "../util/Sentence.js";
import { Relationship } from "./Relationship.js";

const GOSSIPS = [
    {
        value: "{Source}('s [Relationship]) said/heard",
        onPick() {
            return store => {
                return [
                    store.npc("source").property.name,
                    randomItem([
                        "",
                        `'s ${store.item("relationship", () => new Relationship.List().pick()).toLowerCase()}`
                    ]),
                    randomItem(["said", "heard"])
                ];
            };
        }
    },
    {
        value: ""
    }
] as const satisfies Fix<Sentence.List.Item[]>;

export namespace Gossip {
    export const List = _List.createList(GOSSIPS);
}

export type Gossip = (typeof GOSSIPS)[number]["value"];
