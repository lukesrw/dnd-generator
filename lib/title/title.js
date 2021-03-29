Object.defineProperty(exports, "__esModule", { value: true });
exports.TitleList = void 0;
const path_1 = require("path");
const List_1 = require("../List");
class TitleList extends List_1.List {
    constructor() {
        super(path_1.join(__dirname, "titles.json"));
    }
}
exports.TitleList = TitleList;
//# sourceMappingURL=title.js.map