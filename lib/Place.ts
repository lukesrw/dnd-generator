import { MaturityList } from "./maturity/maturity";
import { AlignmentList } from "./alignment/alignment";
import { ArmorList } from "./armor/armor";
import { CharacteristicList } from "./characteristics/characteristics";
import { ClassList } from "./class/class";
import { EyeList } from "./eye/eye";
import { HairList } from "./hair/hair";
import { List } from "./List";
import { MotivationList } from "./motivation/motivation";
import { NobilityList } from "./nobility/nobility";
import { ProfessionList } from "./profession/profession";
import { RaceList } from "./race/race";
import { SexList } from "./sex/sex";
import { SkinList } from "./skin/skin";
import { TitleList } from "./title/title";
import { WeaponList } from "./weapon/weapon";
import { AgeList } from "./age/age";
import { BackgroundList } from "./background/background";

interface Lists {
    maturity: MaturityList | List;
    age: AgeList | List;
    alignment: AlignmentList | List;
    armor: ArmorList | List;
    characteristic: CharacteristicList | List;
    class: ClassList | List;
    eye: EyeList | List;
    hair: HairList | List;
    motivation: MotivationList | List;
    nobility: NobilityList | List;
    profession: ProfessionList | List;
    race: RaceList | List;
    sex: SexList | List;
    skin: SkinList | List;
    title: TitleList | List;
    weapon: WeaponList | List;
    background: BackgroundList | List;
}

export class Place {
    lists: Lists;

    constructor(lists?: Partial<Lists>) {
        this.lists = Object.assign(
            {
                maturity: new MaturityList(),
                age: new AgeList(),
                alignment: new AlignmentList(),
                armor: new ArmorList(),
                characteristic: new CharacteristicList(),
                class: new ClassList(),
                eye: new EyeList(),
                hair: new HairList(),
                motivation: new MotivationList(),
                nobility: new NobilityList(),
                profession: new ProfessionList(),
                race: new RaceList(),
                sex: new SexList(),
                skin: new SkinList(),
                title: new TitleList(),
                weapon: new WeaponList(),
                background: new BackgroundList(),
            },
            lists || {}
        );
    }
}
