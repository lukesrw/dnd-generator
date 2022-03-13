import { List } from "../../List";

export interface ProfessionProperties {
    combatant: boolean;
}

export class CommonProfessionList extends List<ProfessionProperties> {
    constructor() {
        super([]);
    }
}

export class EsquireProfessionList extends List<ProfessionProperties> {
    constructor() {
        super([]);
    }
}

export class GentleProfessionList extends List<ProfessionProperties> {
    constructor() {
        super([]);
    }
}

export class MerchantProfessionList extends List<ProfessionProperties> {
    constructor() {
        super([]);
    }
}

export class NobleProfessionList extends List<ProfessionProperties> {
    constructor() {
        super([]);
    }
}

export class PeasantProfessionList extends List<ProfessionProperties> {
    constructor() {
        super([]);
    }
}

export class ScholarProfessionList extends List<ProfessionProperties> {
    constructor() {
        super([]);
    }
}

export class ServantProfessionList extends List<ProfessionProperties> {
    constructor() {
        super([]);
    }
}

export class UnderclassProfessionList extends List<ProfessionProperties> {
    constructor() {
        super([]);
    }
}

export class YeomanProfessionList extends List<ProfessionProperties> {
    constructor() {
        super([]);
    }
}

export class ProfessionList extends List<ProfessionProperties> {
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
            new YeomanProfessionList(),
        ];

        this.items = [];
        professions.forEach((profession) => {
            if (this.items) {
                this.items = this.items.concat(profession.getItems());
            }
        });

        return this.items;
    }
}
