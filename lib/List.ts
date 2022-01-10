import * as Generic from "../interfaces/generic";
import { NPC } from "./NPC";

export interface ListItem {
    [property: string]: any;
    value: string;
}

export interface ListItemRaw extends ListItem {
    weight?: number | string;
}

export class List {
    file: string;
    items: false | ListItem[];

    constructor(file?: string, items?: ListItem[]) {
        this.file = file || "";
        this.items = items || false;
    }

    static pickRandom(list: any[]) {
        return list[Math.floor(Math.random() * list.length)];
    }

    getItems() {
        if (this.items) return this.items;

        let data = JSON.parse(JSON.stringify(require(this.file)));

        this.items = [];

        try {
            data.forEach((item: ListItemRaw) => {
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
        } catch (e) {
            console.error(e);
        }

        return this.items;
    }

    getFiltered(filter?: Generic.Object) {
        let list = this.getItems();

        if (filter && Object.values(filter).length > 0) {
            let filter_json = JSON.parse(JSON.stringify(filter));

            return list.filter(item => {
                return !Object.keys(filter_json).some(property => {
                    if (!Array.isArray(filter_json[property])) {
                        filter_json[property] = [filter_json[property]];
                    }

                    if (Object.prototype.hasOwnProperty.call(item, property)) {
                        if (!Array.isArray(item[property])) {
                            item[property] = [item[property]];
                        }

                        return item[property].every((option: any) => {
                            return filter_json[property].indexOf(option) === -1;
                        });
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
