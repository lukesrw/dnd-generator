# List

List is the basic building block for the random generation process, each list is made up of items.

## Items

Numerous items fit into

1. Item Value (`value`), the main string/number being randomly selected
2. Item Weight (`weight`), the chance

## API

Each list extends the [List](/src/List.ts) class, which implements:

-   Static `List.pickList(pickList, onPick?)` to pre-define selections
-   Static `List.createList(items)` to create a new `List` class
-   Constructor to create a new `List` instance containing items
-   `list.pick()` to get a random `value` from the items
-   `list.values()` to get `value` from all `List` items
-   `list.filter(filter)` to create a new `List` instance with a subset from the current `List`
