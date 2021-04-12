import { AlignmentList } from "./alignment/alignment";
import { ClassList } from "./class/class";
import { MotivationList } from "./motivation/motivation";
import { NobilityList } from "./nobility/nobility";
import { ProfessionList } from "./profession/profession";
import { RaceList } from "./race/race";
import { SexList } from "./sex/sex";
import { TitleList } from "./title/title";

interface Lists {
    alignment: AlignmentList;
    class: ClassList;
    motivation: MotivationList;
    nobility: NobilityList;
    profession: ProfessionList;
    race: RaceList;
    sex: SexList;
    title: TitleList;
}

export class Place {
    lists: Lists;

    constructor(lists?: Partial<Lists>) {
        this.lists = Object.assign(
            {
                alignment: new AlignmentList(),
                class: new ClassList(),
                motivation: new MotivationList(),
                nobility: new NobilityList(),
                profession: new ProfessionList(),
                race: new RaceList(),
                sex: new SexList(),
                title: new TitleList()
            },
            lists || {}
        );
    }
}
