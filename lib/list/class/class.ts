import { List } from "../List";

/**
 * Using table of race & class synergies to filter sensible/reasonable combinations
 * Anything with "below average", "non-complimentary", or "detrimental" are removed
 *
 * @see https://www.reddit.com/r/DnD/comments/8788on/5e_race_class_synergy_analysis_v5/
 */

export interface ClassProperties {
    combatant: boolean;
    hitDice: string;
}

export class ClassList extends List<ClassProperties> {
    constructor() {
        super([]);
    }
}
