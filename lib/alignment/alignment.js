Object.defineProperty(exports, "__esModule", { value: true });
exports.AlignmentList = void 0;
const path_1 = require("path");
const List_1 = require("../List");
class AlignmentList extends List_1.List {
    constructor() {
        super(path_1.join(__dirname, "alignments.json"));
    }
}
exports.AlignmentList = AlignmentList;
//# sourceMappingURL=alignment.js.map