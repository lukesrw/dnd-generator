Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassList = void 0;
const path_1 = require("path");
const List_1 = require("../List");
class ClassList extends List_1.List {
    constructor() {
        super(path_1.join(__dirname, "classes.json"));
    }
}
exports.ClassList = ClassList;
//# sourceMappingURL=class.js.map