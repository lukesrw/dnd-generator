import { AgeList } from "./age/age";
import { AlignmentList } from "./alignment/alignment";
import { CharacteristicList } from "./characteristics/characteristics";
import { ClassList } from "./class/class";
import { HairList } from "./hair/hair";
import { List } from "./List";
import { MotivationList } from "./motivation/motivation";
import { NobilityList } from "./nobility/nobility";
import { ProfessionList } from "./profession/profession";
import { RaceList } from "./race/race";
import { SexList } from "./sex/sex";
import { TitleList } from "./title/title";

interface Lists {
    age: AgeList | List;
    alignment: AlignmentList | List;
    characteristic: CharacteristicList | List;
    class: ClassList | List;
    hair: HairList | List;
    motivation: MotivationList | List;
    nobility: NobilityList | List;
    profession: ProfessionList | List;
    race: RaceList | List;
    sex: SexList | List;
    title: TitleList | List;
}

export class Place {
    lists: Lists;

    constructor(lists?: Partial<Lists>) {
        this.lists = Object.assign(
            {
                age: new AgeList(),
                alignment: new AlignmentList(),
                characteristic: new CharacteristicList(),
                class: new ClassList(),
                hair: new HairList(),
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
