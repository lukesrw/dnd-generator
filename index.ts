import { AgeList } from "./lib/age/age";
import { AlignmentList } from "./lib/alignment/alignment";
import { ArmorList } from "./lib/armor/armor";
import { CharacteristicList } from "./lib/characteristics/characteristics";
import { ClassList } from "./lib/class/class";
import { EyeList } from "./lib/eye/eye";
import { HairList } from "./lib/hair/hair";
import * as _Common from "./lib/language/common";
import { MotivationList } from "./lib/motivation/motivation";
import { NameList } from "./lib/name/name";
import { NobilityList } from "./lib/nobility/nobility";
import { NPC as _NPC } from "./lib/NPC";
import { RaceList } from "./lib/race/race";
import { SexList } from "./lib/sex/sex";
import { SkinList } from "./lib/skin/skin";
import { TitleList } from "./lib/title/title";
import { WeaponList } from "./lib/weapon/weapon";
import { TavernPrefab } from "./prefab/Tavern";
import { Place as _Place } from "./lib/Place";
import { List as _List } from "./lib/List";

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
}

export namespace Language {
    export const Common = _Common;
}
