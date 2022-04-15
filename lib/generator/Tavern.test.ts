import { Tavern } from "./Tavern";

test("Generates a random Tavern", () => {
    let tavernPatrons = 4;
    let tavernStaff = 3;
    let tavern = new Tavern(tavernPatrons, tavernStaff);

    expect(tavern.staff.length).toEqual(tavernStaff);

    expect(tavern.patrons.length).toEqual(tavernPatrons);
});
