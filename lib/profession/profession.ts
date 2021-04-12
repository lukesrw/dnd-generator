import { join } from "path";
import { List } from "../List";

export class CommonProfessionList extends List {
    constructor() {
        super(join(__dirname, "common-professions.json"));
    }
}

export class EsquireProfessionList extends List {
    constructor() {
        super(join(__dirname, "esquire-professions.json"));
    }
}

export class GentleProfessionList extends List {
    constructor() {
        super(join(__dirname, "gentle-professions.json"));
    }
}

export class MerchantProfessionList extends List {
    constructor() {
        super(join(__dirname, "merchant-professions.json"));
    }
}

export class NobleProfessionList extends List {
    constructor() {
        super(join(__dirname, "noble-professions.json"));
    }
}

export class PeasantProfessionList extends List {
    constructor() {
        super(join(__dirname, "peasant-professions.json"));
    }
}

export class ScholarProfessionList extends List {
    constructor() {
        super(join(__dirname, "scholar-professions.json"));
    }
}

export class ServantProfessionList extends List {
    constructor() {
        super(join(__dirname, "servant-professions.json"));
    }
}

export class UnderclassProfessionList extends List {
    constructor() {
        super(join(__dirname, "underclass-professions.json"));
    }
}

export class YeomanProfessionList extends List {
    constructor() {
        super(join(__dirname, "yeoman-professions.json"));
    }
}

export class ProfessionList extends List {
    getItems() {
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

        this.items = [];
        professions.forEach(profession => {
            if (this.items) {
                this.items = this.items.concat(profession.getItems());
            }
        });

        return this.items;
    }
}
