type PickListSelection<TItemValue> = {
    pick: number;
    items: readonly TItemValue[];
};

type PickListItem<TValue> = TValue | PickListSelection<TValue>;

export type PickList<TItemValue> = readonly PickListItem<TItemValue>[];

export type PickListResult<TPickListItem> = NonNullable<
    TPickListItem extends PickListSelection<infer TItem> ? TItem : TPickListItem
>;
