import { Context as _Context } from "./lib/context/Context";
import { TavernPatronContext, TavernStaffContext } from "./lib/context/Tavern";
import { Abilities, Skills } from "./lib/generator/Abilities";
import { NPC } from "./lib/generator/NPC";
import { Tavern } from "./lib/generator/Tavern";
import { AgeList } from "./lib/list/age/age";
import { ArmorList } from "./lib/list/armor/armor";
import { BackgroundList } from "./lib/list/background/background";
import { CharacteristicList } from "./lib/list/characteristics/characteristics";
import { ClassList } from "./lib/list/class/class";
import { EthicList } from "./lib/list/ethic/ethic";
import { EyeList } from "./lib/list/eye/eye";
import { FlawList } from "./lib/list/flaw/flaw";
import { HairList } from "./lib/list/hair/hair";
import { LanguageList } from "./lib/list/languages/languages";
import { List as _List } from "./lib/list/List";
import { MaturityList } from "./lib/list/maturity/maturity";
import { MoralList } from "./lib/list/moral/moral";
import { MotivationList } from "./lib/list/motivation/motivation";
import { NameList } from "./lib/list/name/name";
import { NobilityList } from "./lib/list/nobility/nobility";
import { PastList } from "./lib/list/past/past";
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
import { SubtletyList } from "./lib/list/subtlety/subtlety";
import { TitleList } from "./lib/list/title/title";
import { VerbList } from "./lib/list/verb/verb";
import { WeaponList } from "./lib/list/weapon/weapon";

export const Context = {
    Context: _Context,
    TavernStaff: TavernStaffContext,
    TavernPatron: TavernPatronContext
};

export const Generator = {
    Abilities: Abilities,
    NPC: NPC,
    Skills: Skills,
    Tavern: Tavern
};

export const List = {
    Age: AgeList,
    Armor: ArmorList,
    Background: BackgroundList,
    Characteristics: CharacteristicList,
    Class: ClassList,
    Ethic: EthicList,
    Eye: EyeList,
    Flaw: FlawList,
    Hair: HairList,
    Language: LanguageList,
    List: _List,
    Maturity: MaturityList,
    Moral: MoralList,
    Motivation: MotivationList,
    Name: NameList,
    Nobility: NobilityList,
    Past: PastList,
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
    Subtlety: SubtletyList,
    Title: TitleList,
    Verb: VerbList,
    Weapon: WeaponList
};

export * as utils from "./lib/utils";
