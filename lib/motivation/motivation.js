Object.defineProperty(exports, "__esModule", { value: true });
exports.MotivationList = void 0;
const path_1 = require("path");
const List_1 = require("../List");
class MotivationList extends List_1.List {
    constructor() {
        super(path_1.join(__dirname, "motivations.json"));
    }
}
exports.MotivationList = MotivationList;
//# sourceMappingURL=motivation.js.map