import { List as _List } from "../util/List.js";
import { Gender } from "./Gender.js";
import { Maturity } from "./Maturity.js";
import { Nobility } from "./Nobility.js";

const TITLES = [
    {
        value: ""
    },
    {
        value: "Mr",
        maturity: ["Adult", "Elder"],
        gender: ["Male"]
    },
    {
        value: "Master",
        maturity: ["Infant", "Child"],
        gender: ["Male"]
    },
    {
        value: "Miss",
        gender: ["Female"]
    },
    {
        value: "Ms",
        maturity: ["Adult", "Elder"],
        gender: ["Female"]
    },
    {
        value: "Mrs",
        maturity: ["Adult", "Elder"],
        gender: ["Female"]
    },
    {
        value: "Mx",
        maturity: ["Adult", "Elder"],
        gender: ["Female", "Non-Binary"]
    },
    {
        value: "Sir",
        gender: ["Male"],
        maturity: ["Adult", "Elder"],
        nobility: ["Knighted", "Noble"]
    },
    {
        value: "Baron",
        gender: ["Male"],
        maturity: ["Adult", "Elder"],
        nobility: ["Noble"]
    },
    {
        value: "Baroness",
        gender: ["Female"],
        maturity: ["Adult", "Elder"],
        nobility: ["Noble"]
    },
    {
        value: "Madam",
        maturity: ["Adult", "Elder"],
        gender: ["Female"]
    },
    {
        value: "Dame",
        gender: ["Female"],
        maturity: ["Adult", "Elder"],
        nobility: ["Knighted", "Noble"]
    },
    {
        value: "Lord",
        gender: ["Male"],
        maturity: ["Adult", "Elder"],
        nobility: ["Yeoman", "Gentle", "Esquire", "Knighted", "Noble"]
    },
    {
        value: "Lady",
        gender: ["Female"],
        maturity: ["Adult", "Elder"],
        nobility: ["Yeoman", "Gentle", "Esquire", "Knighted", "Noble"]
    },
    {
        value: "Queen",
        gender: ["Female"],
        maturity: ["Adult", "Elder"],
        nobility: ["Royal"]
    },
    {
        value: "King",
        gender: ["Male"],
        maturity: ["Adult", "Elder"],
        nobility: ["Royal"]
    },
    {
        value: "Emperor",
        gender: ["Male"],
        maturity: ["Adult", "Elder"],
        nobility: ["Royal"]
    },
    {
        value: "Empress",
        gender: ["Female"],
        maturity: ["Adult", "Elder"],
        nobility: ["Royal"]
    },
    {
        value: "Archduke",
        gender: ["Male"],
        maturity: ["Adult", "Elder"],
        nobility: ["Royal"]
    },
    {
        value: "Archduchess",
        gender: ["Female"],
        maturity: ["Adult", "Elder"],
        nobility: ["Royal"]
    },
    {
        value: "Dr",
        maturity: ["Adult", "Elder"],
        nobility: ["Scholar"]
    },
    {
        value: "Professor",
        maturity: ["Adult", "Elder"],
        nobility: ["Scholar"]
    },
    {
        value: "Chancellor",
        maturity: ["Adult", "Elder"],
        nobility: ["Scholar", "Noble"]
    },
    {
        value: "Prince",
        maturity: ["Adult", "Elder"],
        nobility: ["Royal"],
        gender: ["Male"]
    },
    {
        value: "Princess",
        maturity: ["Adult", "Elder"],
        nobility: ["Royal"],
        gender: ["Female"]
    },
    {
        value: "Duke",
        maturity: ["Adult", "Elder"],
        nobility: ["Royal"],
        gender: ["Male"]
    },
    {
        value: "Duchess",
        maturity: ["Adult", "Elder"],
        nobility: ["Royal"],
        gender: ["Female"]
    },
    {
        value: "Count",
        maturity: ["Adult", "Elder"],
        nobility: ["Royal", "Noble"],
        gender: ["Male"]
    },
    {
        value: "Countess",
        maturity: ["Adult", "Elder"],
        nobility: ["Royal", "Noble"],
        gender: ["Female"]
    }
] as const;

export type Title = (typeof TITLES)[number]["value"];

export namespace Title {
    export const List = _List.createList<
        Title,
        {
            maturity?: Maturity[];
            nobility?: Nobility[];
            gender?: Gender[];
        },
        Title
    >(TITLES);
}
