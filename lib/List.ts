import * as Generic from "../interfaces/generic";
import { NPC } from "./generator/NPC";

export type PickList = (
    | string
    | {
          pick: number;
          items: string[];
      }
)[];

export type PickListCallback = (item?: string) => string[];

export type Item<Custom> = {
    weight?: number;
    value: string;
} & Custom;

export class List<Custom = {}> {
    items: false | Item<Custom>[];
    raw: false | Item<Custom>[];
    weighted: boolean;

    constructor(items?: Item<Custom>[]) {
        this.weighted = false;
        this.raw = items || false;
        this.items = items || false;
    }

    static pickRandom<Type>(list: Type[]) {
        return list[Math.floor(Math.random() * list.length)];
    }

    static pickList(raw: PickList, onPickCallback?: PickListCallback) {
        let list: string[] = [];

        raw.forEach((selection) => {
            if (typeof selection === "string") {
                list.push(selection);

                if (onPickCallback) onPickCallback(selection);
            } else {
                let picks: string[] = [];

                if (selection.items.length) {
                    picks = selection.items;
                } else if (onPickCallback) {
                    picks = onPickCallback();
                }

                picks = JSON.parse(JSON.stringify(picks));

                for (let i = 0; i < selection.pick; i += 1) {
                    let pick = List.pickRandom(picks);

                    if (pick) {
                        if (onPickCallback) onPickCallback(pick);

                        list.push(pick);
                        picks.splice(pick.indexOf(pick), 1);
                    }
                }
            }
        });

        return list;
    }

    getValues() {
        if (!this.raw) return [];

        return this.raw.map((item) => item.value);
    }

    getItem(value: string) {
        if (!this.raw) return undefined;

        return this.raw.find((item) => item.value === value);
    }

    getItems() {
        if (this.items && !this.weighted) {
            this.items.forEach((item: Item<Custom>) => {
                if (!Object.prototype.hasOwnProperty.call(item, "weight")) {
                    item.weight = 1;
                }

                item.weight = parseInt(String(item.weight), 10);

                if (this.items) {
                    this.items = this.items.concat(
                        new Array(item.weight).fill(item)
                    );
                }
            });

            this.weighted = true;
        }

        return JSON.parse(JSON.stringify(this.items)) as Item<Custom>[];
    }

    getFiltered(filter?: Generic.Object) {
        let list = this.getItems();

        if (filter && Object.values(filter).length > 0) {
            let filter_copy = JSON.parse(JSON.stringify(filter));

            list = list.filter((item) => {
                return !Object.keys(filter_copy).some((property) => {
                    if (!Array.isArray(filter_copy[property])) {
                        filter_copy[property] = [filter_copy[property]];
                    }

                    if (Object.prototype.hasOwnProperty.call(item, property)) {
                        let key = property as keyof typeof item;
                        let array = (
                            Array.isArray(item[key]) ? item[key] : [item[key]]
                        ) as string[];

                        if (array) {
                            return array.every((option: any) => {
                                return (
                                    filter_copy[property].indexOf(option) === -1
                                );
                            });
                        }
                    }

                    return false;
                });
            });
        }

        return list;
    }

    pickRandom(filter?: Partial<NPC>): string {
        let item = List.pickRandom(this.getFiltered(filter));

        if (item) {
            if (Array.isArray(item.value)) return List.pickRandom(item.value);
        } else {
            if (filter) {
                delete filter.place;
            }

            throw new Error(
                `Unable to use ${this.constructor.name} for: ${JSON.stringify(
                    filter
                )}`
            );
        }

        return item.value;
    }
}
