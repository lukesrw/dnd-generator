import { Context as _Context } from "./lib/context/Context";
import {
    Abilities as _Abilities,
    Skills as _Skills
} from "./lib/generator/Abilities";
import { NPC as _NPC } from "./lib/generator/NPC";
import { Tavern as _Tavern } from "./lib/generator/Tavern";
import { AgeList } from "./lib/list/age/age";
import { AlignmentList } from "./lib/list/alignment/alignment";
import { ArmorList } from "./lib/list/armor/armor";
import { BackgroundList } from "./lib/list/background/background";
import { CharacteristicList } from "./lib/list/characteristics/characteristics";
import { ClassList } from "./lib/list/class/class";
import { EyeList } from "./lib/list/eye/eye";
import { FlawList } from "./lib/list/flaw/flaw";
import { HairList } from "./lib/list/hair/hair";
import { LanguageList } from "./lib/list/languages/languages";
import { List as _List } from "./lib/list/List";
import { MaturityList } from "./lib/list/maturity/maturity";
import { MotivationList } from "./lib/list/motivation/motivation";
import { NameList } from "./lib/list/name/name";
import { NobilityList } from "./lib/list/nobility/nobility";
import {
    CommonProfessionList,
    EsquireProfessionList,
    GentleProfessionList,
    MerchantProfessionList,
    NobleProfessionList,
    PeasantProfessionList,
    ProfessionList,
    ScholarProfessionList,
    ServantProfessionList,
    UnderclassProfessionList,
    YeomanProfessionList
} from "./lib/list/profession/profession";
import { RaceList } from "./lib/list/race/race";
import { SexList } from "./lib/list/sex/sex";
import { SkinList } from "./lib/list/skin/skin";
import { TitleList } from "./lib/list/title/title";
import { WeaponList } from "./lib/list/weapon/weapon";

export const Generator = {
    Abilities: _Abilities,
    NPC: _NPC,
    Skills: _Skills,
    Tavern: _Tavern
};

export const Context = {
    Context: _Context
};

export const List = {
    Age: AgeList,
    Alignment: AlignmentList,
    Armor: ArmorList,
    Background: BackgroundList,
    Characteristics: CharacteristicList,
    Class: ClassList,
    Eye: EyeList,
    Flaw: FlawList,
    Hair: HairList,
    Language: LanguageList,
    List: _List,
    Maturity: MaturityList,
    Motivation: MotivationList,
    Name: NameList,
    Nobility: NobilityList,
    Professions: {
        All: ProfessionList,
        Common: CommonProfessionList,
        Esquire: EsquireProfessionList,
        Gentle: GentleProfessionList,
        Merchant: MerchantProfessionList,
        Noble: NobleProfessionList,
        Peasant: PeasantProfessionList,
        Scholar: ScholarProfessionList,
        Servant: ServantProfessionList,
        Underclass: UnderclassProfessionList,
        Yeoman: YeomanProfessionList
    },
    Race: RaceList,
    Sex: SexList,
    Skin: SkinList,
    Title: TitleList,
    Weapon: WeaponList
};
