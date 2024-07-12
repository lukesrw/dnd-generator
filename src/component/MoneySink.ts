import { randomItem } from "../lib/randomItem.js";
import { Fix } from "../types/Fix.js";
import { List as _List } from "../util/List.js";
import { Sentence as _Sentence } from "../util/Sentence.js";
import { Location } from "./Location.js";
import { Monster } from "./Monster.js";

const MONEY_SINKS = [
    {
        value: "Gambling to a [Monster]/near the [Location]",
        onPick() {
            return store => {
                return [
                    "Gambling",
                    randomItem([
                        `to a ${store.item("monster", () => new Monster.List().pick()).toLowerCase()}`,
                        `near the ${store.item("location", () => new Location.List().pick()).toLowerCase()}`
                    ])
                ];
            };
        }
    }
] as const satisfies Fix<_Sentence.List.Item[]>;

export type MoneySink = (typeof MONEY_SINKS)[number]["value"];

export namespace MoneySink {
    export const List = _List.createList(MONEY_SINKS);

    export const Sentence = _Sentence.createSentence([new List()]);
}
