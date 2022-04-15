import { List } from "../List";

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
    constructor() {
        super(
            ([] as any[])
                .concat(
                    new CommonProfessionList().raw,
                    new EsquireProfessionList().raw,
                    new GentleProfessionList().raw,
                    new MerchantProfessionList().raw,
                    new NobleProfessionList().raw,
                    new PeasantProfessionList().raw,
                    new ScholarProfessionList().raw,
                    new ServantProfessionList().raw,
                    new UnderclassProfessionList().raw,
                    new YeomanProfessionList().raw
                )
                .filter(item => item)
        );
    }
}
