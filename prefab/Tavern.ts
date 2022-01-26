import { NPC } from "../lib/NPC";
import { Place } from "../lib/Place";
import { List } from "../lib/List";

export class Tavern extends Place {
    staff: NPC[];
    patrons: NPC[];

    constructor(staff: number, patrons: number) {
        super();

        this.staff = new Array(staff).fill(null);
        this.generateStaff();

        this.patrons = new Array(patrons).fill(null);
        this.generatePatrons();
    }

    generateStaff() {
        let professions = this.lists.profession
            .getItems()
            .filter(item => {
                return /tavern|barkeep|maid|inn/iu.test(item.value);
            })
            .map(item => item.value);

        this.staff = this.staff.map(() => {
            return new NPC(this, {
                age: List.pickRandom(["adult", "elder"]),
                profession: List.pickRandom(professions)
            });
        });
    }

    generatePatrons() {
        let young_patrons: NPC[] = [];
        let adult_patrons: NPC[] = [];

        this.patrons = this.patrons.map(() => {
            let npc = new NPC();

            /**
             * sort npcs into "young" and "adult"
             */
            if (npc.age === "infant" || npc.age === "child") {
                young_patrons.push(npc);
            } else if (npc.surname) {
                adult_patrons.push(npc);
            }

            return npc;
        });

        /**
         * assign any "young" patrons parents/guardians
         */
        young_patrons.forEach(patron => {
            let parent = List.pickRandom(adult_patrons);

            patron.surname = parent.surname;
            patron.race = parent.race;
        });
    }
}
