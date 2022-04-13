import { TavernPatronContext, TavernStaffContext } from "../context/Tavern";
import { NPC } from "./NPC";

const patronContext = new TavernPatronContext();
const staffContext = new TavernStaffContext();

export class Tavern {
    patrons: NPC[];
    staff: NPC[];

    constructor(patrons: number | NPC[] = 5, staff: number | NPC[] = 2) {
        if (Array.isArray(patrons)) {
            this.patrons = patrons;
        } else {
            this.patrons = new Array(patrons)
                .fill(null)
                .map(_ => new NPC(patronContext));
        }

        if (Array.isArray(staff)) {
            this.staff = staff;
        } else {
            this.staff = new Array(staff)
                .fill(null)
                .map(_ => new NPC(staffContext));
        }
    }
}
