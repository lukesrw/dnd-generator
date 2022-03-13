import { List } from "../../List";
import { NPC } from "../../generator/NPC";

const RANGES: {
    [race: string]: {
        [maturity: string]: [number, number];
    };
} = {
    Aarakocra: {
        infant: [0, 1],
        child: [1, 3],
        adult: [3, 25],
        elder: [25, 30],
    },
    Aasimar: {
        infant: [0, 6],
        child: [6, 18],
        adult: [18, 65],
        elder: [65, 160],
    },
    "Air Genasi": {
        infant: [0, 6],
        child: [6, 18],
        adult: [18, 65],
        elder: [65, 120],
    },
    Bugbear: {
        infant: [0, 6],
        child: [6, 16],
        adult: [16, 60],
        elder: [60, 80],
    },
    Centaur: {
        infant: [0, 6],
        child: [6, 18],
        adult: [18, 65],
        elder: [65, 160],
    },
    Changeling: {
        infant: [0, 4],
        child: [4, 16],
        adult: [16, 65],
        elder: [65, 160],
    },
    "Deep Gnome": {
        infant: [0, 6],
        child: [6, 20],
        adult: [20, 200],
        elder: [200, 400],
    },
    "Devil's Tongue Tiefling": {
        infant: [0, 6],
        child: [6, 18],
        adult: [18, 70],
        elder: [70, 100],
    },
    Dragonborn: {
        infant: [0, 1],
        child: [1, 15],
        adult: [15, 50],
        elder: [50, 80],
    },
    "Drow Elf": {
        infant: [0, 6],
        child: [6, 100],
        adult: [100, 650],
        elder: [650, 750],
    },
    "Duergar Dwarf": {
        infant: [0, 6],
        child: [6, 18],
        adult: [18, 200],
        elder: [200, 350],
    },
    Dwarf: {
        infant: [0, 6],
        child: [6, 18],
        adult: [18, 200],
        elder: [200, 350],
    },
    "Earth Genasi": {
        infant: [0, 6],
        child: [6, 18],
        adult: [18, 65],
        elder: [65, 120],
    },
    "Eladrin Elf": {
        infant: [0, 6],
        child: [6, 100],
        adult: [100, 650],
        elder: [650, 750],
    },
    Elf: {
        infant: [0, 6],
        child: [6, 100],
        adult: [100, 650],
        elder: [650, 750],
    },
    "Fallen Aasimar": {
        infant: [0, 6],
        child: [6, 18],
        adult: [18, 65],
        elder: [65, 160],
    },
    Firbolg: {
        infant: [0, 15],
        child: [15, 30],
        adult: [30, 350],
        elder: [350, 500],
    },
    "Fire Genasi": {
        infant: [0, 6],
        child: [6, 18],
        adult: [18, 65],
        elder: [65, 120],
    },
    "Forest Gnome": {
        infant: [0, 6],
        child: [6, 20],
        adult: [20, 200],
        elder: [200, 400],
    },
    "Ghostwise Halfling": {
        infant: [0, 6],
        child: [6, 20],
        adult: [20, 150],
        elder: [150, 250],
    },
    Gith: {
        infant: [0, 6],
        child: [6, 18],
        adult: [18, 65],
        elder: [65, 100],
    },
    Gnome: {
        infant: [0, 6],
        child: [6, 20],
        adult: [20, 200],
        elder: [200, 400],
    },
    Goblin: {
        infant: [0, 3],
        child: [3, 8],
        adult: [8, 45],
        elder: [45, 60],
    },
    Goliath: {
        infant: [0, 6],
        child: [6, 18],
        adult: [18, 65],
        elder: [65, 80],
    },
    Grung: {
        infant: [0, 1],
        child: [1, 2],
        adult: [2, 40],
        elder: [40, 50],
    },
    "Half-Elf": {
        infant: [0, 6],
        child: [6, 20],
        adult: [20, 150],
        elder: [150, 180],
    },
    "Half-Orc": {
        infant: [0, 1],
        child: [1, 14],
        adult: [14, 60],
        elder: [60, 75],
    },
    Halfling: {
        infant: [0, 6],
        child: [6, 20],
        adult: [20, 150],
        elder: [150, 250],
    },
    "Hellfire Tiefling": {
        infant: [0, 6],
        child: [6, 18],
        adult: [18, 70],
        elder: [70, 100],
    },
    "High Elf": {
        infant: [0, 6],
        child: [6, 100],
        adult: [100, 650],
        elder: [650, 750],
    },
    "Hill Dwarf": {
        infant: [0, 6],
        child: [6, 18],
        adult: [18, 200],
        elder: [200, 350],
    },
    Hobgoblin: {
        infant: [0, 6],
        child: [6, 18],
        adult: [18, 65],
        elder: [65, 100],
    },
    Human: {
        infant: [0, 6],
        child: [6, 18],
        adult: [18, 65],
        elder: [65, 100],
    },
    Kalashtar: {
        infant: [0, 6],
        child: [6, 18],
        adult: [18, 65],
        elder: [65, 100],
    },
    Kenku: {
        infant: [0, 4],
        child: [4, 12],
        adult: [12, 50],
        elder: [50, 60],
    },
    Kobold: {
        infant: [0, 2],
        child: [2, 6],
        adult: [6, 100],
        elder: [100, 120],
    },
    "Lightfoot Halfling": {
        infant: [0, 6],
        child: [6, 20],
        adult: [20, 150],
        elder: [150, 250],
    },
    Lizardfolk: {
        infant: [0, 4],
        child: [4, 14],
        adult: [14, 50],
        elder: [50, 60],
    },
    Locathah: {
        infant: [0, 3],
        child: [3, 10],
        adult: [10, 60],
        elder: [60, 80],
    },
    Loxodon: {
        infant: [0, 6],
        child: [6, 60],
        adult: [60, 350],
        elder: [350, 450],
    },
    Minotaur: {
        infant: [0, 6],
        child: [6, 17],
        adult: [17, 90],
        elder: [90, 150],
    },
    "Mountain Dwarf": {
        infant: [0, 6],
        child: [6, 18],
        adult: [18, 200],
        elder: [200, 350],
    },
    Orc: {
        infant: [0, 4],
        child: [4, 12],
        adult: [12, 40],
        elder: [40, 50],
    },
    "Protector Aasimar": {
        infant: [0, 6],
        child: [6, 18],
        adult: [18, 65],
        elder: [65, 160],
    },
    "Rock Gnome": {
        infant: [0, 6],
        child: [6, 20],
        adult: [20, 200],
        elder: [200, 400],
    },
    "Scourge Aasimar": {
        infant: [0, 6],
        child: [6, 18],
        adult: [18, 65],
        elder: [65, 160],
    },
    Shifter: {
        infant: [0, 3],
        child: [3, 10],
        adult: [10, 55],
        elder: [55, 70],
    },
    "Simic Hybrid": {
        infant: [0, 6],
        child: [6, 59],
        adult: [59, 357],
        elder: [357, 425],
    },
    "Stout Halfling": {
        infant: [0, 6],
        child: [6, 20],
        adult: [20, 150],
        elder: [150, 250],
    },
    Tabaxi: {
        infant: [0, 6],
        child: [6, 18],
        adult: [18, 65],
        elder: [65, 100],
    },
    Tiefling: {
        infant: [0, 6],
        child: [6, 18],
        adult: [18, 70],
        elder: [70, 100],
    },
    Tortle: {
        infant: [0, 4],
        child: [4, 15],
        adult: [15, 40],
        elder: [40, 50],
    },
    Triton: {
        infant: [0, 4],
        child: [4, 15],
        adult: [15, 150],
        elder: [150, 200],
    },
    Vedalken: {
        infant: [0, 10],
        child: [10, 40],
        adult: [40, 300],
        elder: [300, 500],
    },
    Verdan: {
        infant: [0, 10],
        child: [10, 24],
        adult: [24, 150],
        elder: [150, 200],
    },
    Warforged: {
        infant: [0, 1],
        child: [1, 2],
        adult: [2, 25],
        elder: [25, 30],
    },
    "Water Genasi": {
        infant: [0, 6],
        child: [6, 18],
        adult: [18, 65],
        elder: [65, 120],
    },
    "Winged Tiefling": {
        infant: [0, 6],
        child: [6, 18],
        adult: [18, 70],
        elder: [70, 100],
    },
    "Wood Elf": {
        infant: [0, 6],
        child: [6, 100],
        adult: [100, 650],
        elder: [650, 750],
    },
    "Yuan-ti Pureblood": {
        infant: [0, 4],
        child: [4, 12],
        adult: [12, 65],
        elder: [65, 120],
    },
};

export class AgeList extends List {
    pickRandom(filter?: Partial<NPC>): string {
        let race = "Human";
        let maturity = "adult";

        if (filter) {
            if (filter.race) race = filter.race;
            if (filter.maturity) maturity = filter.maturity;
        }

        let ageRange = RANGES[race][maturity];

        return Math.floor(
            Math.random() * (ageRange[1] - ageRange[0]) + ageRange[0]
        ).toString();
    }
}
