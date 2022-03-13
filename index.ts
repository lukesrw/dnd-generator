import { NPC as _NPC } from "./lib/generator/NPC";
import { Place as _Place } from "./lib/generator/Place";
import { List as _List } from "./lib/List";
import { AgeList } from "./lib/list/age/age";
import { AlignmentList } from "./lib/list/alignment/alignment";
import { ArmorList } from "./lib/list/armor/armor";
import { CharacteristicList } from "./lib/list/characteristics/characteristics";
import { ClassList } from "./lib/list/class/class";
import { EyeList } from "./lib/list/eye/eye";
import { HairList } from "./lib/list/hair/hair";
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
    YeomanProfessionList,
} from "./lib/list/profession/profession";
import { RaceList } from "./lib/list/race/race";
import { SexList } from "./lib/list/sex/sex";
import { SkinList } from "./lib/list/skin/skin";
import { TitleList } from "./lib/list/title/title";
import { WeaponList } from "./lib/list/weapon/weapon";
import { TavernPrefab } from "./lib/prefab/Tavern";
import * as _Common from "./lib/language/common";

export namespace Generator {
    export const NPC = _NPC;

    export const Place = _Place;
}

export namespace Prefab {
    export const Tavern = TavernPrefab;
}

export namespace List {
    export const List = _List;

    export const Age = AgeList;

    export const Maturity = MaturityList;

    export const Alignment = AlignmentList;

    export const Armor = ArmorList;

    export const Characteristics = CharacteristicList;

    export const Class = ClassList;

    export const Eye = EyeList;

    export const Hair = HairList;

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

export namespace Language {
    export const Common = _Common;
}
