import { randomItem } from "../lib/randomItem.js";
import { randomNumber } from "../lib/randomNumber.js";
import { Sentence as _Sentence } from "../util/Sentence.js";
import { Animal } from "./Animal.js";
import { Colour } from "./Colour.js";
import { Maturity } from "./Maturity.js";
import { Nobility } from "./Nobility.js";
import { NPC } from "./NPC.js";
import { Physicality } from "./Physicality.js";
import { Profession } from "./Profession.js";

export class Tavern {
    static MATURITIES = new Maturity.List().filter(item => item.value === "Adult" || item.value === "Elder");
    static PROFESSIONS = new Profession.List().filter(item => /Tavern|Barkeep|Maid|Inn/u.test(item.value));
    static NOBILITIES = new Nobility.List().filter(item => item.importance >= 0 && item.importance < 3);

    staff: NPC[];
    patrons: NPC[];
    name: string;

    constructor(
        readonly config?: {
            staff?: {
                list?: NPC[];
                count?: number;
                config?: Partial<NPC["config"]>;
            };
            patrons?: {
                list?: NPC[];
                count?: number;
                config?: Partial<NPC["config"]>;
            };
        }
    ) {
        const staffCount = config?.staff?.count ?? 2;

        this.config = {
            staff: {
                list: config?.staff?.list ?? [],
                count: staffCount,
                config: {
                    context: {
                        maturity: Tavern.MATURITIES,
                        nobility: Tavern.NOBILITIES,
                        profession: Tavern.PROFESSIONS,
                        ...config?.staff?.config?.context
                    },
                    options: config?.staff?.config?.options,
                    order: config?.staff?.config?.order
                }
            },
            patrons: {
                list: config?.patrons?.list ?? [],
                count: config?.patrons?.count ?? staffCount * randomNumber(4, 3),
                config: {
                    context: {
                        maturity: Tavern.MATURITIES,
                        ...config?.patrons?.config?.context
                    },
                    options: config?.patrons?.config?.options,
                    order: config?.patrons?.config?.order
                }
            }
        };

        this.name = new Tavern.Name.Sentence().build();

        /**
         * Generate each staff NPC
         */
        this.staff = this.config.staff?.list ?? [];
        for (let i = this.staff.length; i < this.config.staff?.count!; i++) {
            try {
                this.staff.push(new NPC({}, this.config.staff?.config));
            } catch (error) {
                /**
                 * Improve the error message to distinguish the property
                 */
                /* istanbul ignore next -- @preserve */
                if (error instanceof Error) {
                    error = new Error(error.message.replace(/(\w+):/, "Staff $1:"));
                }

                throw error;
            }
        }

        /**
         * Generate each patron NPC
         */
        this.patrons = this.config.patrons?.list ?? [];
        for (let i = this.patrons.length; i < this.config.patrons?.count!; i++) {
            try {
                this.patrons.push(new NPC({}, this.config.patrons?.config));
            } catch (error) {
                /**
                 * Improve the error message to distinguish the property
                 */
                /* istanbul ignore next -- @preserve */
                if (error instanceof Error) {
                    error = new Error(error.message.replace(/(\w+):/, "Patron $1:"));
                }

                /* istanbul ignore next -- @preserve */
                throw error;
            }
        }
    }
}

export namespace Tavern {
    export namespace Name {
        export const Sentence = _Sentence.createSentence([
            "The",
            () => randomItem([() => new Colour.List().pick(), () => new Physicality.List().pick()])(),
            new Animal.List()
        ]);
    }
}
