import { List as _List } from "../util/List.js";
import { Colour as _Colour } from "./Colour.js";

export namespace Hair {
    export namespace Colour {
        export const List = _List.createList(
            new _Colour.List()
                .filter({
                    isHair: true
                })
                .getItems()
        );
    }
}
