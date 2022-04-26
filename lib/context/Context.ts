import { AgeList } from "../list/age/age";
import { ArmorList } from "../list/armor/armor";
import {
    BackgroundList,
    BackgroundProperties
} from "../list/background/background";
import { CharacteristicList } from "../list/characteristic/characteristic";
import { ClassList, ClassProperties } from "../list/class/class";
import { EthicList } from "../list/ethic/ethic";
import { EyeList } from "../list/eye/eye";
import { FlawList } from "../list/flaw/flaw";
import { HairList } from "../list/hair/hair";
import { IdealList } from "../list/ideal/ideal";
import { LanguageList } from "../list/language/language";
import { List } from "../list/List";
import { MaturityList } from "../list/maturity/maturity";
import { MoralList } from "../list/moral/moral";
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

export interface Shared<Type = any> {
    ideal: Type;
    flaw: Type;
    maturity: Type;
    age: Type;
    armor: Type;
    characteristic: Type;
    moral: Type;
    ethic: Type;
    class: Type;
    eyes: Type;
    hair: Type;
    motivation: Type;
    trait: Type;
    nobility: Type;
    profession: Type;
    race: Type;
    skin: Type;
    title: Type;
    background: Type;
    weapons: Type;
    languages: Type;
    sex: Type;
}

interface SharedProperties extends Shared<List> {
    class: ClassList | List<ClassProperties>;
    profession: ProfessionList | List<ProfessionProperties>;
    race: RaceList | List<RaceProperties>;
    background: BackgroundList | List<BackgroundProperties>;
}

export class Context implements SharedProperties {
    ideal: IdealList | List;
    flaw: FlawList | List;
    maturity: MaturityList | List;
    age: AgeList | List;
    armor: ArmorList | List;
    characteristic: CharacteristicList | List;
    class: ClassList | List<ClassProperties>;
    moral: MoralList | List;
    ethic: EthicList | List;
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

    constructor(lists: Partial<SharedProperties> = {}) {
        this.maturity = lists.maturity || new MaturityList();
        this.age = lists.age || new AgeList();
        this.moral = lists.moral || new MoralList();
        this.ethic = lists.ethic || new EthicList();
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
