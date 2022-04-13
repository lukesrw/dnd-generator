import { nameByRace } from "fantasy-name-generator";
import { NPC } from "../../generator/NPC";
import { List } from "../List";
import { Gender } from "../gender/gender";
import { RaceList } from "../race/race";
import { Sex } from "../sex/sex";

export const fNGSupportedRaces = {
    cavePerson: true,
    dwarf: true,
    halfling: true,
    gnome: true,
    elf: true,
    highelf: true,
    fairy: true,
    highfairy: true,
    darkelf: true,
    drow: true,
    halfdemon: true,
    dragon: true,
    angel: true,
    demon: false,
    human: false,
    goblin: false,
    ogre: false,
    orc: false
};

function nameByRaceWrapper(
    race: keyof typeof fNGSupportedRaces,
    sex?: Sex,
    gender?: Gender
) {
    race = (race.substring(0, 1).toLowerCase() +
        race.substring(1)) as keyof typeof fNGSupportedRaces;

    if (
        race in fNGSupportedRaces &&
        fNGSupportedRaces[race] &&
        (typeof gender === "undefined" || gender === "Non-Binary")
    ) {
        gender = sex || List.pickRandom(["Male", "Female"]);
    }

    let name = nameByRace(race, {
        allowMultipleNames: true,
        gender: gender ? (gender.toLowerCase() as "male" | "female") : undefined
    });

    if (typeof name === "string") return name;

    throw new Error(
        `NameList doesn't support "${race}" race, "${sex}" sex with "${gender}" gender`
    );
}

let races = new RaceList();

export class NameList extends List {
    pickRandom(filter?: Partial<NPC>): string {
        let race = filter && filter.race ? filter.race : "human";
        let args: [Sex | undefined, Gender | undefined] = [
            filter && filter.sex ? filter.sex : undefined,
            filter && filter.gender ? filter.gender : undefined
        ];

        try {
            return nameByRaceWrapper(
                race as keyof typeof fNGSupportedRaces,
                ...args
            );
        } catch (error) {
            /**
             * On fail, check if the gender has a "names" backup
             */
            let raceItem = races.getItem(race);

            if (!(raceItem && Array.isArray(raceItem.names))) throw error;

            return nameByRaceWrapper(List.pickRandom(raceItem.names), ...args);
        }
    }
}
