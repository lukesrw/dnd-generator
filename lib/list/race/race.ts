import { List, PickList } from "../../List";
import { fNGSupportedRaces } from "../name/name";

export interface RaceProperties {
    /**
     * Filters
     */
    class: string[];

    /**
     * Properties
     */
    speed: number;
    languages: PickList;

    // for use in NameList
    names: (keyof typeof fNGSupportedRaces)[];

    // for use in AgeList
    age: {
        [maturity: string]: [number, number];
        infant: [number, number];
        child: [number, number];
        adult: [number, number];
        elder: [number, number];
    };
}

export class RaceList extends List<RaceProperties> {
    constructor() {
        super([]);
    }
}
