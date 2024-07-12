import { List as _List } from "../util/List.js";
import { Colour as _Colour } from "./Colour.js";

export namespace Eye {
    export namespace Colour {
        export const List = _List.createList(
            new _Colour.List()
                .filter({
                    isEye: true
                })
                .getItems()
        );
    }
}
