import { join } from "path";
import { List } from "../List";
import { NPC } from "../NPC";

export type Sex = "Male" | "Female";
export class SexList extends List {
    constructor() {
        super(join(__dirname, "sexes.json"));
    }

    pickRandom(filter?: Partial<NPC>): Sex {
        return super.pickRandom(filter) as Sex;
    }
}
