import { NPC } from "../component/NPC.js";
import { capitalise } from "../lib/capitalise.js";
import { AutoComplete } from "../types/AutoComplete.js";
import { Item as _Item } from "../types/Item.js";
import { List as _List } from "./List.js";

const NPC_PROPERTIES = {
    culprit: {},
    loser: {},
    merchant: { nobility: "Merchant" },
    older: { maturity: "Elder" },
    owner: {},
    scholar: { nobility: "Scholar" },
    victim: {},
    wizard: { class: "Wizard" },
    younger: { maturity: "Child" }
} as const satisfies Record<string, Partial<NPC["property"]>>;

class SentenceStore {
    #npc: Map<string, NPC>;
    #item: Map<string, string>;

    constructor(
        readonly config?: {
            item?: {
                store?: Record<string, string>;
            };
            npc?: {
                store?: Partial<Record<AutoComplete<Sentence.Role>, NPC>>;
                config?: Partial<NPC["config"]>;
            };
        }
    ) {
        this.#item = new Map(Object.entries(config?.item?.store ?? {}));
        this.#npc = new Map(
            Object.entries({
                ...config?.npc?.store,
                culprit: config?.npc?.store?.culprit ?? new NPC(NPC_PROPERTIES.culprit, config?.npc?.config),
                loser: config?.npc?.store?.loser ?? new NPC(NPC_PROPERTIES.loser, config?.npc?.config),
                merchant: config?.npc?.store?.merchant ?? new NPC(NPC_PROPERTIES.merchant, config?.npc?.config),
                older: config?.npc?.store?.older ?? new NPC(NPC_PROPERTIES.older, config?.npc?.config),
                owner: config?.npc?.store?.owner ?? new NPC(NPC_PROPERTIES.owner, config?.npc?.config),
                scholar: config?.npc?.store?.scholar ?? new NPC(NPC_PROPERTIES.scholar, config?.npc?.config),
                victim: config?.npc?.store?.victim ?? new NPC(NPC_PROPERTIES.victim, config?.npc?.config),
                wizard: config?.npc?.store?.wizard ?? new NPC(NPC_PROPERTIES.wizard, config?.npc?.config),
                younger: config?.npc?.store?.younger ?? new NPC(NPC_PROPERTIES.younger, config?.npc?.config)
            })
        );
    }

    /**
     * Set/get dynamically allocated items
     *
     * @param name to assign the item
     * @param getItem function for generating the item
     */
    item(name: string, getItem: Sentence.GetItem) {
        let item = this.#item.get(name);
        if (!item) {
            item = getItem(this);

            this.#item.set(name, item);
        }

        return item;
    }

    /**
     * Set/get dynamically allocated NPCs
     *
     * @param role to assign the NPC
     * @param getNPC function for generating the NPC
     */
    npc(role: AutoComplete<Sentence.Role>, getNPC?: Sentence.GetNPC) {
        let npc = this.#npc.get(role);
        if (!npc) {
            npc = getNPC ? getNPC(this) : new NPC({}, this.config?.npc?.config);

            this.#npc.set(role, npc);
        }

        return npc;
    }
}

export class Sentence {
    constructor(public parts: Sentence.Part[], public config?: SentenceStore["config"]) {}

    build() {
        const parts = [...this.parts];
        const store = new SentenceStore(this.config);

        let index = 0;
        for (index; index < parts.length; index++) {
            let part = parts[index];

            /**
             * Part is a string or number
             */
            if (typeof part === "string" || typeof part === "number") {
                continue;
            }

            /**
             * Part is a List
             */
            if (part instanceof _List) {
                part = part.pick();
                if (part) {
                    parts[index] = part;
                }
            }

            /**
             * Part is a sentence part generator
             */
            if (typeof part === "function") {
                const inserts = part(store);
                if (Array.isArray(inserts)) {
                    parts.splice(index, 1, ...inserts);
                } else {
                    parts[index] = inserts;
                }
            }

            /**
             * Decrement the index to re-run the part again
             */
            index--;
        }

        return capitalise(
            parts
                .join(" ")
                .replace(/\s{2,}/gu, " ")
                .replace(/\s+(,|\.)/gu, "$1")
        );
    }
}
export namespace Sentence {
    /**
     * Generators
     */
    export type GetItem = (store: SentenceStore) => string;
    export type GetNPC = (store: SentenceStore) => NPC;

    export type Role = keyof typeof NPC_PROPERTIES;

    /**
     * Parts
     */
    export type Part = string | number | _List<string | number, Record<string, unknown>, Part> | PartGenerator;
    export type PartGenerator = (store: SentenceStore) => Part | Part[];

    export namespace List {
        export type Item = _Item<string, Record<string, unknown>, PartGenerator>;
    }

    export function createSentence(parts: Sentence.Part[]) {
        return class extends Sentence {
            constructor(config?: Sentence["config"]) {
                super(parts, config);
            }
        };
    }
}
