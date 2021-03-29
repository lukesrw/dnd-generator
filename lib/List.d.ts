export interface ListItem {
    value: string;
}
export interface ListItemRaw extends ListItem {
    weight?: number | string;
}
export declare class List {
    file: string;
    list: ListItem[];
    constructor(file: string);
    static pickRandom(list: any): ListItem;
    load(): Promise<this>;
    pickRandom(): false | ListItem;
}
//# sourceMappingURL=List.d.ts.map