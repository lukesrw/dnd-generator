import { nameByRace, RaceType } from "fantasy-name-generator";
import { stringToLowerCase } from "../lib/helper/stringToLowerCase.js";
import {
    fngIsGenderRequired,
    fngIsGenderSupported,
    fngIsRaceSupported
} from "../lib/middleware/fantasyNameGenerator.js";
import { randomChance } from "../lib/randomChance.js";
import { unCapitalise } from "../lib/unCapitalise.js";
import { Filter } from "../types/Filter.js";
import { Item as _Item } from "../types/Item.js";
import { List as _List } from "../util/List.js";
import { Race } from "./Race.js";
import { Sex } from "./Sex.js";

type Item<
    TKeys extends Record<string, unknown> = {
        sex?: Sex;
    }
> = _Item<string, TKeys, string>;

const races = new Race.List().item;
const sexList = new Sex.List();

export namespace Name {
    export class List extends _List<Item["value"], Item, Item["value"]> {
        constructor(races: Item[] = []) {
            super(races, {
                isValueUnique: false
            });
        }

        override filter(filters?: Filter<string, Item, string>) {
            if (typeof filters === "function") {
                throw new Error("Name.List doesn't support function as filter.");
            }

            /**
             * Determine sex to use either from input or random if not provided
             */
            let sex: string;
            if (filters?.gender && typeof filters.gender === "string" && fngIsGenderSupported(filters.gender)) {
                sex = filters.gender;
            } else if (filters?.sex && typeof filters.sex === "string" && fngIsGenderSupported(filters.sex)) {
                sex = filters.sex;
            } else {
                sex = sexList.pick();
            }

            const items: Item[] = [];
            function addItem(race: RaceType) {
                const item: Item = {
                    value: race
                };

                if (fngIsGenderRequired(race) && fngIsGenderSupported(sex)) {
                    item.sex = sex;
                }

                items.push(item);
            }

            /**
             * Race name (from item or raw) and alternate names (from item)
             */
            const raceRaw = unCapitalise(typeof filters?.race === "string" ? filters.race : "");
            if (raceRaw && fngIsRaceSupported(raceRaw)) {
                addItem(raceRaw);
            }

            const race = races.get(typeof filters?.race === "string" ? filters.race : "Human");
            const raceValue = unCapitalise(race?.value ?? "Human");
            if (raceValue && raceValue !== raceRaw && fngIsRaceSupported(raceValue)) {
                addItem(raceValue);
            }
            race?.names?.forEach(alternateRace => {
                addItem(alternateRace);
            });

            return new List(items);
        }

        override pick() {
            const options: Parameters<typeof nameByRace>[1] = {
                allowMultipleNames: randomChance(2)
            };

            const item = super.pickItem();
            if (item.sex) {
                options.gender = stringToLowerCase(item.sex);
            }

            const name = nameByRace(item.value, options);
            if (name instanceof Error) {
                throw new Error(`Name.List doesn't support "${item.value}" race with "${options.gender}" gender`);
            }

            return name;
        }
    }
}
