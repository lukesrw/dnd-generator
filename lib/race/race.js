Object.defineProperty(exports, "__esModule", { value: true });
exports.RaceList = void 0;
const path_1 = require("path");
const List_1 = require("../List");
class RaceList extends List_1.List {
    constructor() {
        super(path_1.join(__dirname, "races.json"));
    }
}
exports.RaceList = RaceList;
//# sourceMappingURL=race.js.map