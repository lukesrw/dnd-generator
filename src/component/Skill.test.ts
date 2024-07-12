import { Skill } from "./Skill.js";

test("Uses Skill.List", () => {
    expect(() => {
        for (let i = 0; i < 1e3; i++) {
            const skillList = new Skill.List();

            skillList.pick();
        }
    }).not.toThrow();
});
