import { Generator, List, Prefab, Util } from "../../index.js";
import { arrayIncludes } from "../../lib/helper/arrayIncludes.js";
import { objectKeys } from "../../lib/helper/objectKeys.js";

export const UTILS = {
    List: "📃",
    Sentence: "✏️"
} satisfies Record<keyof typeof Util, string>;
export const V1_RENAMES = ["Physicality", "Armour", "Eye.Colour", "Skin.Colour", "Hair.Colour"] as const;
export const TAB_SIZE = 4;

export function getComponentList(object: Record<string, unknown>, prefix = "", previousLetter = "", parent?: string) {
    let line = "";

    for (const key of objectKeys(object)) {
        const keyParent = parent || key;
        const leaf = object[key] as Record<string, unknown>;

        /**
         * Determine if this is a new component
         */
        // prettier-ignore
        const isNew = (
            !(key in List) &&
            !(key in Generator) &&
            !(key in Prefab) &&
            !arrayIncludes(V1_RENAMES, prefix + key)
        );

        /**
         * Aggregate util/function icons
         */
        let icons = `${objectKeys(UTILS)
            .map(support => {
                if (typeof leaf === "object" && leaf && support in leaf) {
                    return UTILS[support];
                }
                return "";
            })
            .join("")}${typeof leaf === "function" ? "📦" : ""}`;

        /**
         * If the component has non-array sub-components, recursively check them
         */
        let children = "";
        const letter = (prefix + key)[0] ?? "";
        const objectSubKeys = objectKeys(leaf);
        if (objectSubKeys.length && objectSubKeys[0] !== "0") {
            const nextUtil = getComponentList(
                leaf,
                `${prefix + key}.`,
                icons.length && !(key in UTILS) ? letter : previousLetter,
                keyParent
            );
            if (nextUtil.length) {
                children += nextUtil;
            }
        }

        /**
         * Wrap the component name with a link
         */
        if (icons.length && !(key in UTILS)) {
            line +=
                (previousLetter === letter ? ", " : "\n- ") +
                `[\`${(prefix + key + " " + (isNew ? "🎉" : "") + icons).trim()}\`](/src/component/${keyParent}.ts)`;
            previousLetter = letter;
        }
        line += children;
    }

    return line;
}
