import { List } from "../List";

let maturities = [
    {
        value: "infant"
    },
    {
        value: "child",
        weight: 3
    },
    {
        value: "adult",
        weight: 12
    },
    {
        value: "elder",
        weight: 4
    }
];

export class MaturityList extends List {
    constructor() {
        super(maturities);
    }
}

export class ChildMaturityList extends List {
    constructor() {
        super(maturities.slice(1));
    }
}

export class AdultMaturityList extends List {
    constructor() {
        super(maturities.slice(2));
    }
}

export class ElderMaturityList extends List {
    constructor() {
        super(maturities.slice(3));
    }
}
