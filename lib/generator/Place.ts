import { List } from "../List";
import { AgeList } from "../list/age/age";
import { AlignmentList } from "../list/alignment/alignment";
import { ArmorList } from "../list/armor/armor";
import {
    BackgroundList,
    BackgroundProperties
} from "../list/background/background";
import { CharacteristicList } from "../list/characteristics/characteristics";
import { ClassList, ClassProperties } from "../list/class/class";
import { EyeList } from "../list/eye/eye";
import { FlawList } from "../list/flaw/flaw";
import { HairList } from "../list/hair/hair";
import { IdealList } from "../list/ideal/ideal";
import { LanguageList } from "../list/languages/languages";
import { MaturityList } from "../list/maturity/maturity";
import { MotivationList } from "../list/motivation/motivation";
import { NobilityList } from "../list/nobility/nobility";
import {
    ProfessionList,
    ProfessionProperties
} from "../list/profession/profession";
import { RaceList, RaceProperties } from "../list/race/race";
import { SexList } from "../list/sex/sex";
import { SkinList } from "../list/skin/skin";
import { TitleList } from "../list/title/title";
import { TraitList } from "../list/trait/trait";
import { WeaponList } from "../list/weapon/weapon";

export interface SharedProperties {
    ideal: any;
    flaw: any;
    maturity: any;
    age: any;
    alignment: any;
    armor: any;
    characteristic: any;
    class: any;
    eyes: any;
    hair: any;
    motivation: any;
    trait: any;
    nobility: any;
    profession: any;
    race: any;
    skin: any;
    title: any;
    background: any;
}

interface Lists extends SharedProperties {
    ideal: IdealList | List;
    flaw: FlawList | List;
    maturity: MaturityList | List;
    age: AgeList | List;
    alignment: AlignmentList | List;
    armor: ArmorList | List;
    characteristic: CharacteristicList | List;
    class: ClassList | List<ClassProperties>;
    eyes: EyeList | List;
    hair: HairList | List;
    motivation: MotivationList | List;
    trait: TraitList | List;
    nobility: NobilityList | List;
    profession: ProfessionList | List<ProfessionProperties>;
    race: RaceList | List<RaceProperties>;
    sex: SexList | List;
    skin: SkinList | List;
    title: TitleList | List;
    weapons: WeaponList | List;
    background: BackgroundList | List<BackgroundProperties>;
    languages: LanguageList | List;
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
                eyes: new EyeList(),
                hair: new HairList(),
                motivation: new MotivationList(),
                flaw: new FlawList(),
                ideal: new IdealList(),
                trait: new TraitList(),
                nobility: new NobilityList(),
                profession: new ProfessionList(),
                race: new RaceList(),
                sex: new SexList(),
                skin: new SkinList(),
                title: new TitleList(),
                weapons: new WeaponList(),
                background: new BackgroundList(),
                languages: new LanguageList()
            },
            lists || {}
        );
    }
}
