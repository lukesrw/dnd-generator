import { Fix } from "../types/Fix.js";
import { List as _List } from "../util/List.js";
import { Sentence as _Sentence, Sentence } from "../util/Sentence.js";
import { Conclusion } from "./Conclusion.js";
import { Currency } from "./Currency.js";
import { Danger } from "./Danger.js";
import { Gossip } from "./Gossip.js";
import { Location } from "./Location.js";
import { MoneySink } from "./MoneySink.js";
import { Monster } from "./Monster.js";
import { Moral } from "./Moral.js";
import { Past } from "./Past.js";
import { Subtlety } from "./Subtlety.js";
import { Verb } from "./Verb.js";
import { Weapon } from "./Weapon.js";

export namespace Rumour {
    /**
     * Rumour bodies
     */
    const BODIES = [
        {
            value: "{Culprit} [Subtlety] [Verb] {Victim} [Past]",
            onPick() {
                return store => {
                    return [
                        store.npc("culprit").property.name,
                        new Subtlety.List().pick().toLowerCase(),
                        new Verb.List().pick().toLowerCase(),
                        store.npc("victim").property.name,
                        " ",
                        new Past.List().pick().toLowerCase()
                    ];
                };
            }
        },
        {
            value: "[Monster] was spotted out by the [Location] [Past]. {Victim} saw it and [Conclusion]",
            onPick() {
                return store => {
                    return [
                        "a",
                        new Monster.List().pick().toLowerCase(),
                        "was spotted out by the",
                        new Location.List().pick().toLowerCase(),
                        new Past.List().pick().toLowerCase(),
                        ".",
                        store.npc("victim").property.name,
                        "saw it and",
                        new Conclusion.List().pick().toLowerCase()
                    ];
                };
            }
        },
        {
            value: "There's a hidden treasure at the [Location] for anyone stupid enough to go after it. They say a [Monster] guards it",
            onPick() {
                return store => {
                    return [
                        "There's a hidden treasure at the",
                        new Location.List().pick().toLowerCase(),
                        "for anyone stupid enough to go after it, they say a",
                        new Monster.List().pick().toLowerCase(),
                        "guards it"
                    ];
                };
            }
        },
        {
            value: "{Victim} went missing [Past] and was last seen [Danger], never to be seen again",
            onPick() {
                return store => {
                    return [
                        store.npc("victim").property.name,
                        "went missing",
                        new Past.List(),
                        "and was last seen",
                        new Danger.List(),
                        ", never to be seen again"
                    ];
                };
            }
        },
        {
            value: "{Owner} the [Profession] found [Past] an ancient and magical [Weapon]",
            onPick() {
                return store => {
                    return [
                        store.npc("owner").property.name,
                        "the",
                        store.npc("owner").property.profession.toLowerCase(),
                        "found",
                        new Past.List().pick().toLowerCase(),
                        "an ancient and magical",
                        new Weapon.List().pick().toLowerCase()
                    ];
                };
            }
        },
        {
            value: "{Loser} lost all of their [Currency] [MoneySink]",
            onPick() {
                return store => {
                    return [
                        store.npc("loser").property.name,
                        `lost all of ${store.npc("loser").getPronoun("their")}`,
                        new Currency.List().pick().toLowerCase(),
                        new MoneySink.Sentence().build().toLowerCase()
                    ];
                };
            }
        },
        {
            value: "{Older} is a descendant of the famous folk hero {Younger}",
            onPick() {
                return store => {
                    return [
                        store.npc("older").property.name,
                        "is a descendant of the famous folk hero",
                        store.npc("younger").property.name
                    ];
                };
            }
        },
        {
            value: "A {Merchant} from the town was {Verb} {Past}",
            onPick() {
                return store => {
                    return [
                        "A",
                        store.npc("merchant").property.name,
                        "from the town was",
                        new Verb.List().pick().toLowerCase(),
                        new Past.List().pick().toLowerCase()
                    ];
                };
            }
        },
        {
            value: "{Boaster} was heard boasting that they have acquired a magical [Weapon] which protects them from death",
            onPick() {
                return store => {
                    return [
                        store.npc("boaster").property.name,
                        `was heard boasting that ${store.npc("boaster").getPronoun("they")} have acquired a magical`,
                        new Weapon.List().pick().toLowerCase(),
                        `which protects ${store.npc("boaster").getPronoun("them")} from death`
                    ];
                };
            }
        },
        {
            value: "Famous wizard {Wizard} has vanished, along with his living spells",
            onPick() {
                return store => {
                    return `Famous wizard ${
                        store.npc("wizard").property.name
                    } has vanished, along with his living spells`;
                };
            }
        },
        {
            value: "Most of the town guards are [Moral] but a local {Scholar} is trying to change that",
            onPick() {
                return store => {
                    return [
                        "Most of the town guards are",
                        new Moral.List().pick().toLowerCase(),
                        "but a local",
                        store.npc("scholar").property.profession.toLowerCase(),
                        "is trying to change that"
                    ];
                };
            }
        }
    ] as const satisfies Fix<_Sentence.List.Item[]>;

    export namespace Body {
        export const List = _List.createList<Body, {}, Sentence.PartGenerator>(BODIES);
    }

    export type Body = (typeof BODIES)[number]["value"];

    export const Sentence = _Sentence.createSentence([new Gossip.List(), new Body.List()]);
}
