import { AlignmentList } from "./lib/alignment/alignment";
import { ClassList } from "./lib/class/class";
import { MotivationList } from "./lib/motivation/motivation";
import { NobilityList } from "./lib/nobility/nobility";
import { ProfessionList } from "./lib/profession/profession";
import { RaceList } from "./lib/race/race";
import { SexList } from "./lib/sex/sex";
import { TitleList } from "./lib/title/title";

async function main() {
    let rAlignment = new AlignmentList();
    let rClass = new ClassList();
    let rMotivation = new MotivationList();
    let rNobility = new NobilityList();
    let rProfession = new ProfessionList();
    let rRace = new RaceList();
    let rSex = new SexList();
    let rTitle = new TitleList();

    await Promise.all([
        rAlignment.load(),
        rClass.load(),
        rMotivation.load(),
        rNobility.load(),
        rProfession.load(),
        rRace.load(),
        rSex.load(),
        rTitle.load()
    ]);

    console.table({
        alignment: rAlignment.pickRandom(),
        class: rClass.pickRandom(),
        motivation: rMotivation.pickRandom(),
        nobility: rNobility.pickRandom(),
        profession: rProfession.pickRandom(),
        race: rRace.pickRandom(),
        sex: rSex.pickRandom(),
        title: rTitle.pickRandom()
    });
}

main();
