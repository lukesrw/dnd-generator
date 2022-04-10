import { List } from "../List";
import { NPC } from "../../generator/NPC";
import { RaceList } from "../race/race";

const races = new RaceList();

export class AgeList extends List {
    pickRandom(filter?: Partial<NPC>): string {
        let input = filter && filter.race ? filter.race : "Human";
        let race = races.getItem(input);
        let maturity = filter && filter.maturity ? filter.maturity : "adult";

        if (!(race && race.age)) {
            throw new Error(`Unsupported Race: "${input}"`);
        }

        if (!(maturity in race.age)) {
            throw new Error(
                `Unsupported Maturity: "${maturity}" for "${input}" race`
            );
        }

        let [min, max] = race.age[maturity];

        return Math.floor(Math.random() * (max - min) + min).toString();
    }
}
