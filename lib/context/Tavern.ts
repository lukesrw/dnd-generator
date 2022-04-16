import { List, Item } from "../list/List";
import { MaturityList } from "../list/maturity/maturity";
import { NobilityList } from "../list/nobility/nobility";
import { ProfessionList } from "../list/profession/profession";
import { Context } from "./Context";

let { raw: maturitiesRaw } = new MaturityList();
let { raw: professionsRaw } = new ProfessionList();
let { raw: nobilitiesRaw } = new NobilityList();

let maturityItems: Item[] = [];
if (maturitiesRaw) {
    maturityItems = maturitiesRaw.filter(item => {
        return item.value !== "infant" && item.value !== "child";
    });
}

const maturityList = new List(maturityItems);

export class TavernStaffContext extends Context {
    constructor() {
        let professionItems: Item[] = [];
        if (professionsRaw) {
            professionItems = professionsRaw.filter(item => {
                return /tavern|barkeep|maid|inn/iu.test(item.value);
            });
        }

        let nobilityItems: Item[] = [];
        if (nobilitiesRaw) {
            nobilityItems = nobilitiesRaw.filter(item => {
                return /Common|Merchant/iu.test(item.value);
            });
        }

        super({
            maturity: maturityList,
            profession: new List(professionItems),
            nobility: new List(nobilityItems)
        });
    }
}

export class TavernPatronContext extends Context {
    constructor() {
        super({
            maturity: maturityList
        });
    }
}
