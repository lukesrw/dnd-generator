import { List } from "../List";

export class CommonProfessionList extends List {
    constructor() {
        super([]);
    }
}

export class EsquireProfessionList extends List {
    constructor() {
        super([]);
    }
}

export class GentleProfessionList extends List {
    constructor() {
        super([]);
    }
}

export class MerchantProfessionList extends List {
    constructor() {
        super([]);
    }
}

export class NobleProfessionList extends List {
    constructor() {
        super([]);
    }
}

export class PeasantProfessionList extends List {
    constructor() {
        super([]);
    }
}

export class ScholarProfessionList extends List {
    constructor() {
        super([]);
    }
}

export class ServantProfessionList extends List {
    constructor() {
        super([]);
    }
}

export class UnderclassProfessionList extends List {
    constructor() {
        super([]);
    }
}

export class YeomanProfessionList extends List {
    constructor() {
        super([]);
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
