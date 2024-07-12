import { objectKeys } from "../lib/helper/objectKeys.js";
import { randomIndex } from "../lib/randomIndex.js";
import { randomNumber } from "../lib/randomNumber.js";
import type { AutoComplete } from "../types/AutoComplete.js";
import type { Filter } from "../types/Filter.js";
import type { Fix } from "../types/Fix.js";
import { Item } from "../types/Item.js";
import { PickList } from "../types/PickList.js";

const singletons = new Map<string, List<string | number, Record<PropertyKey, unknown>, unknown>>();

export namespace List {
    export type Options = {
        pickItemError: string;
        isValueUnique: boolean;
    };
}
export class List<
    TValue extends string | number,
    TKeys extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
    TOnPick extends unknown = TValue
> {
    readonly item = new Map<Fix<TValue> | AutoComplete<Fix<TValue>>, Fix<Item<TValue, TKeys, TOnPick>>>();
    readonly id: string;
    readonly options: List.Options;
    readonly weight: number = 0;

    /**
     * Process and pick a list of items from a Pick List.
     *
     * @example
     * ```
     * [
     *      "always picked",
     *      { "pick": 1, "items": ["1/3 chance to be picked", "1/3 chance to be picked", "1/3 chance to be picked"] }
     * ]
     * ```
     */
    static pickList<TItemValue>(pickList: PickList<TItemValue>, onPick?: (pick?: TItemValue) => TItemValue[]) {
        const list: TItemValue[] = [];

        for (let i = 0; i < pickList.length; i++) {
            const selection = pickList[i];

            if (typeof selection === "undefined") continue;

            if (typeof selection === "object" && selection && "items" in selection) {
                let items = JSON.parse(JSON.stringify(selection.items)) as TItemValue[];
                if (selection.items.length === 0 && onPick) {
                    items = onPick();

                    if (items.length === 0) continue;
                }

                for (let pick = 0; pick < selection.pick; pick++) {
                    if (items.length === 0) break;

                    const index = randomIndex(items);
                    const item = items[index] as TItemValue;

                    list.push(item);

                    if (onPick) onPick(item);

                    items.splice(index, 1);
                }
            } else {
                const value = selection as TItemValue;

                list.push(value);

                if (onPick) onPick(value);
            }
        }

        return list;
    }

    /**
     * Create a new list from the given items
     *
     * Reccomended over `new List` or `extends List` as it's better to infer types.
     */
    static createList<
        TValue extends string | number,
        TKeys extends Record<PropertyKey, unknown>,
        TOnPick extends unknown = TValue
    >(
        array: Fix<Item<TValue, TKeys, TOnPick>[]>,
        options?: Partial<List.Options>
    ): new () => List<TValue, TKeys, TOnPick> {
        return class extends List<TValue, TKeys, TOnPick> {
            constructor() {
                super(array, options);
            }
        };
    }

    /**
     * Create a new list from the given items
     *
     * **Note:** Unless you're modifying functionality, you should use `List.createList` instead.
     */
    constructor(public readonly items: Fix<Item<TValue, TKeys, TOnPick>[]>, options?: Partial<List.Options>) {
        this.id = `${this.constructor.name}_${items.length}_${JSON.stringify(items)}`;
        this.options = {
            pickItemError: options?.pickItemError ?? "",
            isValueUnique: options?.isValueUnique ?? true
        };

        /**
         * Use the existing singleton if found
         */
        const singleton = singletons.get(this.id);
        if (singleton && items.length > 0) {
            return singleton as List<TValue, TKeys, TOnPick>;
        }

        /**
         * Otherwise create a new singleton and store it
         */
        for (let i = 0; i < items.length; i++) {
            const item = items[i]!;

            if (this.options.isValueUnique && this.item.has(item.value)) {
                throw new Error(`Duplicate value "${item.value}" in list ${this.id}`);
            }

            this.item.set(item.value, item);
            this.weight += item.weight ?? 1;
        }

        singletons.set(this.id, this);

        return this;
    }

    pickItem() {
        let random = randomNumber(this.weight);
        let error = `Failed to get ${random}/${this.weight} from ${this.id}`;
        if (this.items.length === 0) {
            error = "Empty list";
        }

        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i]!;
            const weight = item.weight ?? 1;

            if (random > weight) {
                random -= weight;
                continue;
            }

            return item;
        }

        throw new Error(error + this.options.pickItemError);
    }

    pick() {
        const item = this.pickItem();

        if (item.onPick) {
            return item.onPick();
        }

        return item.value;
    }

    getItems() {
        return this.items;
    }

    getItem(value: AutoComplete<Fix<TValue>>) {
        return this.item.get(value);
    }

    /**
     * Retrieve all item values in the list
     */
    getValues() {
        return Array.from(this.item.keys()) as Fix<TValue>[];
    }

    #filterToList: Map<string, List<TValue, TKeys, TOnPick>> = new Map();
    filter(filters: Filter<TValue, TKeys, TOnPick>) {
        /**
         * Track which object filters reduced a list
         */
        const filtersUsed = new Set<string>();

        /**
         * Object filters are cached for quicker usage
         */
        let key: string | false = false;
        if (typeof filters !== "function") {
            key = JSON.stringify(filters);

            /**
             * Returned the cached value if known
             */
            const cachedList = this.#filterToList.get(key);
            if (cachedList) {
                return cachedList;
            }

            /**
             * Convert filter object into filter callback
             */
            const filterObject = filters;
            filters = item => {
                for (const key of objectKeys(filterObject)) {
                    const filter = filterObject[key];
                    const target = item[key];

                    if (Array.isArray(target)) {
                        /**
                         * Array values just need to contain the filter value
                         */
                        if (!target.includes(filter)) {
                            filtersUsed.add(`"${filter}" ${key}[]`);
                            return false;
                        }

                        continue;
                    }

                    if (typeof target === "object" && (typeof filter === "string" || typeof filter === "number")) {
                        if (!(filter in target)) {
                            filtersUsed.add(`"${filter}" ${key}{}`);
                            return false;
                        }

                        continue;
                    }

                    /**
                     * Property isn't equal to the filter
                     */
                    if (typeof target !== "undefined" && target != filter) {
                        filtersUsed.add(`"${filter}" ${key}`);
                        return false;
                    }

                    continue;
                }

                return true;
            };
        }

        const filterList = new List(this.items.filter(filters), {
            pickItemError: filtersUsed.size ? ` after ${Array.from(filtersUsed).join(", ")} removed` : ""
        });

        /**
         * Cache the filtered list if we've got a key
         */
        if (key) {
            this.#filterToList.set(key, filterList);
        }

        return filterList;
    }

    map(
        callback: (
            item: Fix<Item<TValue, TKeys, TOnPick>>
        ) => Fix<Item<string | number, Record<PropertyKey, unknown>, unknown>>
    ) {
        return new (List.createList(this.items.map(callback)))();
    }
}
