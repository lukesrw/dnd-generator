import { AgeList } from "./age/age";
import { AlignmentList } from "./alignment/alignment";
import { ArmorList } from "./armor/armor";
import { BackgroundList, BackgroundProperties } from "./background/background";
import { CharacteristicList } from "./characteristics/characteristics";
import { ClassList, ClassProperties } from "./class/class";
import { EyeList } from "./eye/eye";
import { FlawList } from "./flaw/flaw";
import { HairList } from "./hair/hair";
import { IdealList } from "./ideal/ideal";
import { LanguageList } from "./languages/languages";
import { List } from "./List";
import { MaturityList } from "./maturity/maturity";
import { MotivationList } from "./motivation/motivation";
import { NobilityList } from "./nobility/nobility";
import { ProfessionList, ProfessionProperties } from "./profession/profession";
import { RaceList, RaceProperties } from "./race/race";
import { SexList } from "./sex/sex";
import { SkinList } from "./skin/skin";
import { TitleList } from "./title/title";
import { TraitList } from "./trait/trait";
import { WeaponList } from "./weapon/weapon";

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
