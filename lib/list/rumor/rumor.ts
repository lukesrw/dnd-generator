import {
    Generator as SourceGenerator,
    List as SourceList
} from "../../../index";
import * as Generic from "../../../interfaces/generic";
import { NPC } from "../../generator/NPC";
import { ucfirst } from "../../utils";
import { List } from "../List";

export const regexRumorVariable =
    /\{(?<source>\w+)(?:\[(?<name>\w+)\])?:(?<property>\w+)?\}/giu;

export class RumorList extends List {
    constructor() {
        super([]);
    }

    static parse(
        rumor: string,
        initialMemory: Generic.Object<Generic.Object<any>> = {}
    ) {
        let memory: Generic.Object<Generic.Object<any>> = initialMemory;

        do {
            rumor = rumor.replaceAll(
                regexRumorVariable,
                (match, source, name, property) => {
                    /**
                     * ensure source exists in memory
                     */
                    if (!(source in memory)) {
                        memory[source] = {};
                    }

                    /**
                     * automatically assign name if undefined
                     */
                    if (typeof name === "undefined") {
                        name = (
                            Object.values(memory[source]).length + 1
                        ).toString();
                    }

                    /**
                     * retrieve from memory/generate if not found
                     */
                    let item = memory[source][name];
                    if (typeof item === "undefined") {
                        if (source in SourceGenerator) {
                            item = new SourceGenerator[
                                source as keyof typeof SourceGenerator
                            ]({} as any);
                        } else if (source in SourceList.Professions) {
                            item = new SourceList.Professions[
                                source as keyof typeof SourceList.Professions
                            ]();
                        } else if (source in SourceList) {
                            item = new (SourceList[
                                source as keyof typeof SourceList
                            ] as any)();
                        } else {
                            throw new Error(`Unable to find source: ${source}`);
                        }

                        memory[source][name] = item;
                    }

                    /**
                     * replace variable with value
                     */
                    if (typeof item === "object") {
                        switch (typeof item[property]) {
                            case "string":
                            case "number":
                                return item[property];

                            case "function":
                                return item[property]();
                        }
                    }

                    throw new Error(`Unable to replace ${match}`);
                }
            );
        } while (regexRumorVariable.test(rumor));

        return ucfirst(rumor);
    }

    pickRandom(filter: Partial<NPC> = {}) {
        return RumorList.parse(super.pickRandom(filter));
    }
}
