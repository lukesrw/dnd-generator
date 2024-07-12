import { List as _List } from "../util/List.js";

/**
 * Dungeons & Dragons levels estimated from real world demographics
 *
 * @see https://www.reddit.com/r/dndnext/comments/597t3i/dd_character_level_demographics/
 */
const LEVELS = [
    {
        value: 1,
        weight: 80171912
    },
    {
        value: 2,
        weight: 40085956
    },
    {
        value: 3,
        weight: 20042978
    },
    {
        value: 4,
        weight: 10021489
    },
    {
        value: 5,
        weight: 5010744
    },
    {
        value: 6,
        weight: 2505372
    },
    {
        value: 7,
        weight: 1252686
    },
    {
        value: 8,
        weight: 626343
    },
    {
        value: 9,
        weight: 313173
    },
    {
        value: 10,
        weight: 156586
    },
    {
        value: 11,
        weight: 78293
    },
    {
        value: 12,
        weight: 39146
    },
    {
        value: 13,
        weight: 19573
    },
    {
        value: 14,
        weight: 9787
    },
    {
        value: 15,
        weight: 4893
    },
    {
        value: 16,
        weight: 2447
    },
    {
        value: 17,
        weight: 1223
    },
    {
        value: 18,
        weight: 612
    },
    {
        value: 19,
        weight: 306
    },
    {
        value: 20,
        weight: 153
    }
] as const;

export type Level = (typeof LEVELS)[number]["value"];

export namespace Level {
    export const List = _List.createList<Level, {}, Level>(LEVELS);
}
