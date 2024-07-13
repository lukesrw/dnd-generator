import { Generator, List, Prefab, Util } from "../../index.js";
import { arrayIncludes } from "../../lib/helper/arrayIncludes.js";
import { objectKeys } from "../../lib/helper/objectKeys.js";

export const UTILS = {
    List: "📃",
    Sentence: "✏️"
} satisfies Record<keyof typeof Util, string>;
export const V1_RENAMES = ["Physicality", "Armour"] as const;
export const TAB_SIZE = 4;

export function getComponentList(object: Record<string, unknown>, prefix = "") {
    let line = "";
    let previousLetter = "";

    for (const objectKey of objectKeys(object)) {
        const leaf = object[objectKey] as Record<string, unknown>;

        /**
         * Determine if this is a new component
         */
        const isNew =
            !(objectKey in List) &&
            !(objectKey in Generator) &&
            !(objectKey in Prefab) &&
            !arrayIncludes(V1_RENAMES, prefix + objectKey);

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
        const objectSubKeys = objectKeys(leaf);
        if (objectSubKeys.length && objectSubKeys[0] !== "0") {
            const nextUtil = getComponentList(leaf, `${prefix + objectKey}.`);
            if (nextUtil.length) {
                children += nextUtil;
            }
        }

        /**
         * Wrap the component name with a link
         */
        let component = `\`${(prefix + objectKey + " " + (isNew ? "🎉" : "") + icons).trim()}\``;
        const letter = (prefix + objectKey)[0] ?? "";
        if (previousLetter === letter) {
            component = `, ${component}`;
        } else {
            component = `\n- ${component}`;
            previousLetter = letter;
        }

        if (icons.length && !(objectKey in UTILS)) {
            line += component;
        }
        line += children;
    }

    return line;
}
