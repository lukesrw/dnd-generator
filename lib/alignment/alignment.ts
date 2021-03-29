import { join } from "path";
import { List } from "../List";

export class AlignmentList extends List {
    constructor() {
        super(join(__dirname, "alignments.json"));
    }
}
