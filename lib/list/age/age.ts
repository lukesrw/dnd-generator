import { Item, List } from "../List";
import { NPC } from "../../generator/NPC";
import { RaceList, RaceProperties } from "../race/race";

const races = new RaceList();

export class AgeList extends List {
    pickRandom(filter?: Partial<NPC>): string {
        let input = filter && filter.race ? filter.race : "Human";
        let race = races.getItem(input);

        let maturity = filter && filter.maturity ? filter.maturity : "adult";

        if (!(race && race.age && maturity in race.age)) {
            race = races.getItem("Human");
        }

        let [min, max] = (race as Item<RaceProperties>).age[maturity];

        return (Math.floor(Math.random() * (max - min)) + min).toString();
    }
}
