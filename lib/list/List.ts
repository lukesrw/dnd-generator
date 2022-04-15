import * as Generic from "../../interfaces/generic";

export type PickList = (
    | string
    | {
          pick: number;
          items: string[];
      }
)[];

export type PickListCallback = (item?: string) => string[];

export type Item<Custom = {}> = {
    weight?: number;
    value: string;
} & Custom;

export class List<Custom = {}> {
    items: false | Item<Partial<Custom>>[];
    raw: false | Item<Partial<Custom>>[];
    weighted: boolean;

    /**
     * ### List
     *
     * Create a new list for the given `items`.
     *
     * @param items Array of items to represent
     */
    constructor(items?: Item<Partial<Custom>>[]) {
        this.weighted = false;
        this.raw = items || false;
        this.items = items || false;
    }

    /**
     * ### List.pickRandom
     *
     * Pick a random item from the given array.
     *
     * @param list Array to pick from
     * @returns random item from given array
     */
    static pickRandom<Type>(list: Type[]) {
        return list[Math.floor(Math.random() * list.length)];
    }

    /**
     * ### List.pickList
     *
     * Process and pick a list of items from a Pick List.
     *
     * #### Example `raw`
     *
     * ```
     * [
     *      "always picked",
     *      { "pick": 1, "items": ["1/3 chance to be picked", "1/3 chance to be picked", "1/3 chance to be picked"] }
     * ]
     * ```
     *
     * @param raw Array of strings or object with "pick" and "items" keys
     * @param onPickCallback Callback after an item is picked/substitution for when items is empty
     * @returns array of picked items
     */
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

    /**
     * ### getValues
     *
     * Retrieve all `"value"` properties from the current List.
     *
     * @returns array of values from the current List
     */
    getValues() {
        if (!this.raw) return [];

        return this.raw.map(item => item.value);
    }

    /**
     * ### getItem
     *
     * Retrieve a single item from the current List for the given `value`.
     *
     * @param value Find specific Item with this value
     * @returns Item object with the given value
     */
    getItem(value: string) {
        if (!this.raw) return undefined;

        return this.raw.find(item => item.value === value);
    }

    /**
     * ### getItems
     *
     * Retrieve all items weighted from the current List.
     *
     * @returns weighted array of the current List's Items
     */
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

    /**
     * ### getFiltered
     *
     * Retrieve all items from the current List that match the given filter.
     *
     * #### Example `filter`
     * ```{ "race": "Human", sex: "Male", gender: "Male" }```
     *
     * This would filter items from the List that aren't available to a Male Human
     *
     * @param filter Filter to use to find Items
     * @returns array of filtered Items
     */
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

    /**
     * ### pickRandom
     *
     * Pick a random item from the current List that matches a given filter.
     *
     * @param filter Filter to use to find Items (see `getFiltered`)
     * @returns `"value"` of the picked Item
     */
    pickRandom(filter?: Generic.Object): string {
        let item = List.pickRandom(this.getFiltered(filter));

        if (item) {
            if (Array.isArray(item.value)) return List.pickRandom(item.value);
        } else {
            if (filter) {
                delete filter.context;
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
