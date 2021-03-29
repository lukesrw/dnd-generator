Object.defineProperty(exports, "__esModule", { value: true });
exports.SexList = void 0;
const path_1 = require("path");
const List_1 = require("../List");
class SexList extends List_1.List {
    constructor() {
        super(path_1.join(__dirname, "sexes.json"));
    }
}
exports.SexList = SexList;
//# sourceMappingURL=sex.js.map