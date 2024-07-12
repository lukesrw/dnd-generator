import { IsEqual } from "../../types/IsEqual.js";

export function expectIsEqual<Expected, Received>(isEqual: IsEqual<Expected, Received>, examples?: Expected[]) {
    return examples && isEqual;
}
