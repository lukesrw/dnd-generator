import { List, Item } from "../list/List";
import { MaturityList } from "../list/maturity/maturity";
import { ProfessionList } from "../list/profession/profession";
import { Context } from "./Context";

let { raw: maturitiesRaw } = new MaturityList();
let { raw: professionsRaw } = new ProfessionList();

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

        super({
            maturity: maturityList,
            profession: new List(professionItems)
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
