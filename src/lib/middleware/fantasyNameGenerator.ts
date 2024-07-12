import { RaceType, allRaces } from "fantasy-name-generator";

const fngRacesWithGender = new Set(allRaces.racesWithGender);
const fngRacesWithoutGender = new Set(allRaces.otherRaces);

export function fngIsRaceSupported(race: string): race is RaceType {
    return fngRacesWithGender.has(race) || fngRacesWithoutGender.has(race);
}

export function fngIsGenderRequired(race: RaceType) {
    return fngRacesWithGender.has(race);
}

export function fngIsGenderSupported(gender?: string): gender is "Male" | "Female" {
    return gender === "Male" || gender === "Female";
}
