Object.defineProperty(exports, "__esModule", { value: true });
exports.NobilityList = void 0;
const path_1 = require("path");
const List_1 = require("../List");
class NobilityList extends List_1.List {
    constructor() {
        super(path_1.join(__dirname, "nobilities.json"));
    }
}
exports.NobilityList = NobilityList;
//# sourceMappingURL=nobility.js.map