import * as Generic from "../interfaces/generic";

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
    items: false | Item<Partial<Custom>>[];
    raw: false | Item<Partial<Custom>>[];
    weighted: boolean;

    constructor(items?: Item<Partial<Custom>>[]) {
        this.weighted = false;
        this.raw = items || false;
        this.items = items || false;
    }

    static pickRandom<Type>(list: Type[]) {
        return list[Math.floor(Math.random() * list.length)];
    }

    //pick multipule randoms from list (either array or object)
    static pickList(raw: PickList, onPickCallback?: PickListCallback) {
        let list: string[] = [];

        raw.forEach(selection => {
            if (typeof selection === "string") {
                list.push(selection);

                if (onPickCallback) onPickCallback(selection);
            } else {
                let picks: string[] = JSON.parse(
                    JSON.stringify(selection.items)
                );

                for (let i = 0; i < selection.pick; i += 1) {
                    if (picks.length === 0 && onPickCallback) {
                        picks = onPickCallback();

                        if (picks.length === 0) break;

                        picks = JSON.parse(JSON.stringify(picks));
                    }

                    let pick = List.pickRandom(picks);

                    if (pick) {
                        if (onPickCallback) {
                            picks = onPickCallback(pick);

                            if (picks.length === 0) break;

                            picks = JSON.parse(JSON.stringify(picks));
                        }

                        list.push(pick);
                        picks.splice(pick.indexOf(pick), 1);
                    }
                }
            }
        });

        return list;
    }

    //returns unique array containing every unique value in the list
    getValues() {
        if (!this.raw) return [];

        return this.raw.map(item => item.value);
    }

    //returns one  item with a particular value
    getItem(value: string) {
        if (!this.raw) return undefined;

        return this.raw.find(item => item.value === value);
    }

    //returns the entire list
    getItems() {
        if (this.items && !this.weighted) {
            this.items.forEach((item: Item<Partial<Custom>>) => {
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

        return JSON.parse(JSON.stringify(this.items)) as Item<
            Partial<Custom>
        >[];
    }

    //returns a list according to filter
    getFiltered(filter?: Generic.Object) {
        let list = this.getItems();

        if (filter && Object.values(filter).length > 0) {
            let filter_copy = JSON.parse(JSON.stringify(filter));

            list = list.filter(item => {
                return !Object.keys(filter_copy).some(property => {
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

    //creates the list and then returns a randomized item
    pickRandom(filter?: Generic.Object): string {
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
