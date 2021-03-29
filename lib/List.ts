import { promises as fs } from "fs";

export interface ListItem {
    value: string;
}

export interface ListItemRaw extends ListItem {
    weight?: number | string;
}

export class List {
    file: string;
    list: ListItem[];

    constructor(file: string) {
        this.file = file;
        this.list = [];
    }

    static pickRandom(list: any): ListItem {
        if (Array.isArray(list)) {
            return list[Math.floor(Math.random() * list.length)];
        }

        return list;
    }

    async load() {
        let data = await fs.readFile(this.file, "utf-8");

        this.list = [];

        try {
            JSON.parse(data).forEach((item: ListItemRaw) => {
                if (!Object.prototype.hasOwnProperty.call(item, "weight")) {
                    item.weight = 1;
                }

                item.weight = parseInt(String(item.weight), 10);

                this.list = this.list.concat(new Array(item.weight).fill(item));
            });
        } catch (e) {}

        return this;
    }

    pickRandom() {
        let item = List.pickRandom(this.list);

        return item ? List.pickRandom(item.value) : false;
    }
}
