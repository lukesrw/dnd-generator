// import { promises as fs } from "fs";
import * as Generic from "../interfaces/generic";

export interface ListItem {
    [property: string]: any;
    value: string;
}

export interface ListItemRaw extends ListItem {
    weight?: number | string;
}

export class List {
    file: string;
    items: ListItem[];

    constructor(file: string) {
        this.file = file;
        this.items = [];
    }

    static pickRandom(list: any): ListItem {
        if (Array.isArray(list)) {
            return list[Math.floor(Math.random() * list.length)];
        }

        return list;
    }

    getItems() {
        let data = JSON.parse(JSON.stringify(require(this.file)));

        this.items = [];

        try {
            JSON.parse(data).forEach((item: ListItemRaw) => {
                if (!Object.prototype.hasOwnProperty.call(item, "weight")) {
                    item.weight = 1;
                }

                item.weight = parseInt(String(item.weight), 10);

                this.items = this.items.concat(
                    new Array(item.weight).fill(item)
                );
            });
        } catch (e) {}

        return this;
    }

    getFiltered(filter?: Generic.Object) {
        let list = this.items;

        if (filter && Object.values(filter).length > 0) {
            filter = JSON.parse(JSON.stringify(filter));

            return list.filter(item => {
                return !Object.keys(filter).some(property => {
                    if (!Array.isArray(filter[property])) {
                        filter[property] = [filter[property]];
                    }

                    if (Object.prototype.hasOwnProperty.call(item, property)) {
                        if (!Array.isArray(item[property])) {
                            item[property] = [item[property]];
                        }

                        return item[property].every((option: any) => {
                            return filter[property].indexOf(option) === -1;
                        });
                    }

                    return false;
                });
            });
        }

        return list;
    }

    pickRandom(filter?: Generic.Object) {
        let item = List.pickRandom(this.getFiltered(filter));

        return item ? List.pickRandom(item.value) : false;
    }
}
