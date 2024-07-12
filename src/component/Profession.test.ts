import { objectKeys } from "../lib/helper/objectKeys.js";
import { Class } from "./Class.js";
import { Ethic } from "./Ethic.js";
import { Gender } from "./Gender.js";
import { Maturity } from "./Maturity.js";
import { Moral } from "./Moral.js";
import { Nobility } from "./Nobility.js";
import { Profession } from "./Profession.js";

const professionList = new Profession.List();

const lists = {
    nobility: new Nobility.List().getValues(),
    maturity: new Maturity.List().getValues(),
    moral: new Moral.List().getValues(),
    ethic: new Ethic.List().getValues(),
    class: new Class.List().getValues(),
    gender: new Gender.List().getValues()
};

for (const name of objectKeys(lists)) {
    const listItems = lists[name];

    for (let j = 0; j < listItems.length; j++) {
        test(`Profession.List supports '${listItems[j]}' ${name}`, () => {
            const item = listItems[j];
            if (!item) {
                throw new Error(`Missing '${item}' ${name}`);
            }

            expect(
                professionList.filter({
                    [name]: item
                }).items.length
            ).toBeGreaterThanOrEqual(1);
        });
    }
}
