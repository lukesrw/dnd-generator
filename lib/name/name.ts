import { List } from "../List";

import { NPC } from "../NPC";

import { nameByRace, allRaces } from "fantasy-name-generator";

export class NameList extends List {
    pickRandom(filter?: Partial<NPC>): string {
        let race: string | string[] = "human";
        let gender;

        if (filter) {
            if (filter.race) race = filter.race;

            if (filter.gender) gender = filter.gender.toLowerCase();
        }

        race = race.toLowerCase();

        switch (race.split(" ")[0]) {
            case "dragonborn":
                race = "dragon";
                break;

            case "half-elf":
            case "half-orc":
                race = ["human", race.split("-")[1]];
                break;

            case "genasi":
                race = ["human", "angel", "demon", "fairy"];
                break;

            case "goliath":
                race = ["human", "ogre"];
                break;

            case "aasimar":
            case "scourge":
            case "fallen":
            case "protector":
                race = ["human", "angel"];
                break;

            case "fugbear":
                race = ["ogre", "goblin"];
                break;

            case "tiefling":
            case "feral": // feral tiefling
                race = "demon";
                break;

            case "hobgoblin":
                race = "goblin";
                break;

            case "kenku":
                race = ["fairy", "cavePerson"];
                break;

            case "kobold":
                race = ["dragon", "drow"];
                break;

            case "gith":
                race = "drow";
                break;

            case "lizardfolk":
                race = "cavePerson";
                break;

            case "tabaxi":
                race = ["human", "cavePerson"];
                break;

            case "aarakocra":
                race = "angel";
                break;

            case "firbolg":
                race = ["orc", "dwarf"];
                break;

            case "centaur":
            case "minotaur":
                race = ["human", "orc"];
                break;

            case "bugbear":
                race = ["goblin", "ogre"];
                break;

            case "triton":
                race = ["human", "highelf"];
                break;

            case "yuan-ti":
                race = ["human", "drow", "darkelf"];
                break;

            case "tortle":
                race = ["human", "drow"];
                break;

            case "changeling":
                race = ["fairy"];
                break;

            case "kalashtar":
            case "shifter":
                race = "human";
                break;

            case "warforged":
                race = ["human", "gnome"];
                break;

            case "loxodon":
                race = ["human", "ogre"];
                break;

            case "simic":
                race = ([] as string[]).concat(
                    allRaces.otherRaces,
                    allRaces.racesWithGender
                );
                break;

            case "vedalken":
                race = ["human", "fairy"];
                break;

            case "verdan":
                race = ["elf", "highelf", "darkelf"];
                break;

            case "locathah":
            case "grung":
                race = ["fairy", "goblin"];
                break;

            default:
                race = race.split(" ");

                if (race.length > 1) race.shift();
                break;
        }

        if (Array.isArray(race)) race = List.pickRandom(race);

        let name = nameByRace(race as string, {
            allowMultipleNames: true,
            gender: gender as any
        });

        if (typeof name !== "string") throw name;

        return name;
    }
}
