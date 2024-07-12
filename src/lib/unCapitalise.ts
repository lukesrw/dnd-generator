import { stringToLowerCase } from "./helper/stringToLowerCase.js";

export function unCapitalise(string: string) {
    return stringToLowerCase(string[0] ?? "") + string.slice(1);
}
