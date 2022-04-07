import { ClassList } from "../class/class";
import { RaceList } from "./race";

let races = new RaceList();
let classes = new ClassList();

classes.getValues().forEach((class_name) => {
    test(`RaceList supports "${class_name}" class`, () => {
        expect(() => {
            races.pickRandom({
                class: class_name
            });
        }).not.toThrow();
    });
});
