Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfessionList = exports.YeomanProfessionList = exports.UnderclassProfessionList = exports.ServantProfessionList = exports.ScholarProfessionList = exports.PeasantProfessionList = exports.NobleProfessionList = exports.MerchantProfessionList = exports.GentleProfessionList = exports.EsquireProfessionList = exports.CommonProfessionList = void 0;
const path_1 = require("path");
const List_1 = require("../List");
class CommonProfessionList extends List_1.List {
    constructor() {
        super(path_1.join(__dirname, "common-professions.json"));
    }
}
exports.CommonProfessionList = CommonProfessionList;
class EsquireProfessionList extends List_1.List {
    constructor() {
        super(path_1.join(__dirname, "esquire-professions.json"));
    }
}
exports.EsquireProfessionList = EsquireProfessionList;
class GentleProfessionList extends List_1.List {
    constructor() {
        super(path_1.join(__dirname, "gentle-professions.json"));
    }
}
exports.GentleProfessionList = GentleProfessionList;
class MerchantProfessionList extends List_1.List {
    constructor() {
        super(path_1.join(__dirname, "merchant-professions.json"));
    }
}
exports.MerchantProfessionList = MerchantProfessionList;
class NobleProfessionList extends List_1.List {
    constructor() {
        super(path_1.join(__dirname, "noble-professions.json"));
    }
}
exports.NobleProfessionList = NobleProfessionList;
class PeasantProfessionList extends List_1.List {
    constructor() {
        super(path_1.join(__dirname, "peasant-professions.json"));
    }
}
exports.PeasantProfessionList = PeasantProfessionList;
class ScholarProfessionList extends List_1.List {
    constructor() {
        super(path_1.join(__dirname, "scholar-professions.json"));
    }
}
exports.ScholarProfessionList = ScholarProfessionList;
class ServantProfessionList extends List_1.List {
    constructor() {
        super(path_1.join(__dirname, "servant-professions.json"));
    }
}
exports.ServantProfessionList = ServantProfessionList;
class UnderclassProfessionList extends List_1.List {
    constructor() {
        super(path_1.join(__dirname, "underclass-professions.json"));
    }
}
exports.UnderclassProfessionList = UnderclassProfessionList;
class YeomanProfessionList extends List_1.List {
    constructor() {
        super(path_1.join(__dirname, "yeoman-professions.json"));
    }
}
exports.YeomanProfessionList = YeomanProfessionList;
class ProfessionList extends List_1.List {
    constructor() {
        super("");
    }
    async load() {
        let professions = [
            new CommonProfessionList(),
            new EsquireProfessionList(),
            new GentleProfessionList(),
            new MerchantProfessionList(),
            new NobleProfessionList(),
            new PeasantProfessionList(),
            new ScholarProfessionList(),
            new ServantProfessionList(),
            new UnderclassProfessionList(),
            new YeomanProfessionList()
        ];
        await Promise.all(professions.map(profession => profession.load()));
        this.list = [];
        professions.forEach(profession => {
            this.list = this.list.concat(profession.list);
        });
        return this;
    }
}
exports.ProfessionList = ProfessionList;
//# sourceMappingURL=profession.js.map