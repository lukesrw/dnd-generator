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
import { Context as _Context } from "./lib/context/Context";
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

export namespace Generator {
    export const NPC = _NPC;

    export const Tavern = _Tavern;

    export const Abilities = _Abilities;

    export const Skills = _Skills;
}

export namespace Context {
    export const Context = _Context;
}

export namespace List {
    /**
     * List building...
     */
    export const List = _List;

    /**
     * Data lists...
     */
    export const Age = AgeList;

    export const Alignment = AlignmentList;

    export const Armor = ArmorList;

    export const Background = BackgroundList;

    export const Characteristics = CharacteristicList;

    export const Class = ClassList;

    export const Eye = EyeList;

    export const Flaw = FlawList;

    export const Hair = HairList;

    export const Language = LanguageList;

    export const Maturity = MaturityList;

    export const Motivation = MotivationList;

    export const Name = NameList;

    export const Nobility = NobilityList;

    export const Race = RaceList;

    export const Sex = SexList;

    export const Skin = SkinList;

    export const Title = TitleList;

    export const Weapon = WeaponList;

    export namespace Professions {
        export const All = ProfessionList;

        export const Common = CommonProfessionList;

        export const Esquire = EsquireProfessionList;

        export const Gentle = GentleProfessionList;

        export const Merchant = MerchantProfessionList;

        export const Noble = NobleProfessionList;

        export const Peasant = PeasantProfessionList;

        export const Scholar = ScholarProfessionList;

        export const Servant = ServantProfessionList;

        export const Underclass = UnderclassProfessionList;

        export const Yeoman = YeomanProfessionList;
    }
}
