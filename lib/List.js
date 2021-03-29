Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
const fs_1 = require("fs");
class List {
    constructor(file) {
        this.file = file;
        this.list = [];
    }
    static pickRandom(list) {
        if (Array.isArray(list)) {
            return list[Math.floor(Math.random() * list.length)];
        }
        return list;
    }
    async load() {
        let data = await fs_1.promises.readFile(this.file, "utf-8");
        this.list = [];
        try {
            JSON.parse(data).forEach((item) => {
                if (!Object.prototype.hasOwnProperty.call(item, "weight")) {
                    item.weight = 1;
                }
                item.weight = parseInt(String(item.weight), 10);
                this.list = this.list.concat(new Array(item.weight).fill(item));
            });
        }
        catch (e) { }
        return this;
    }
    pickRandom() {
        let item = List.pickRandom(this.list);
        return item ? List.pickRandom(item.value) : false;
    }
}
exports.List = List;
//# sourceMappingURL=List.js.map