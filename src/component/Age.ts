import { randomNumber } from "../lib/randomNumber.js";
import { AutoComplete } from "../types/AutoComplete.js";
import { Item } from "../types/Item.js";
import { List as _List } from "../util/List.js";
import { Maturity } from "./Maturity.js";
import { Race } from "./Race.js";

const races = new Race.List().item;
const human = races.get("Human")!;

export namespace Age {
    export class List extends _List<number> {
        constructor(items: [Item<number, {}, number>, Item<number, {}, number>] | [] = []) {
            super(items);
        }

        /**
         * Filter for the age range of a given race and maturity.
         *
         * Defaults to "Human" for `race`, and "Adult" for `maturity`.
         *
         * If no range is found, 0 -> 100 is used.
         *
         * @param filters for the race and maturity
         */
        override filter(
            filters: Partial<{
                race: AutoComplete<Race>;
                maturity: AutoComplete<Maturity>;
            }>
        ) {
            if (typeof filters === "function") {
                throw new Error("Age.List doesn't support function for filter.");
            }

            /**
             * Use human unless race is supported by Race.List
             */
            let race = human;
            if (filters.race && races.get(filters.race)) {
                race = races.get(filters.race)!;
            }

            /**
             * Use Adult unless maturity is supported by the chosen race
             */
            let maturity = "Adult";
            if (filters.maturity && filters.maturity in race.maturity) {
                maturity = filters.maturity;
            }

            const [min, max] = race.maturity[maturity]!;

            return new List([
                {
                    value: min
                },
                {
                    value: max
                }
            ]);
        }

        override pick() {
            return randomNumber(this.items[1]!.value, this.items[0]!.value);
        }
    }
}

export type Age = number;
