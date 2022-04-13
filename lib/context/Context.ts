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
import { List } from "../list/List";
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

export class Context {
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

    constructor(lists: Partial<Lists> = {}) {
        this.maturity = lists.maturity || new MaturityList();
        this.age = lists.age || new AgeList();
        this.alignment = lists.alignment || new AlignmentList();
        this.armor = lists.armor || new ArmorList();
        this.characteristic = lists.characteristic || new CharacteristicList();
        this.class = lists.class || new ClassList();
        this.eyes = lists.eyes || new EyeList();
        this.hair = lists.hair || new HairList();
        this.motivation = lists.motivation || new MotivationList();
        this.flaw = lists.flaw || new FlawList();
        this.ideal = lists.ideal || new IdealList();
        this.trait = lists.trait || new TraitList();
        this.nobility = lists.nobility || new NobilityList();
        this.profession = lists.profession || new ProfessionList();
        this.race = lists.race || new RaceList();
        this.sex = lists.sex || new SexList();
        this.skin = lists.skin || new SkinList();
        this.title = lists.title || new TitleList();
        this.weapons = lists.weapons || new WeaponList();
        this.background = lists.background || new BackgroundList();
        this.languages = lists.languages || new LanguageList();
    }
}
