import { List } from "../util/List.js";

export type Context<TProps extends Record<string, unknown>> = {
    [K in keyof Required<TProps>]?: List<string | number, Record<string, unknown>, unknown>;
};
