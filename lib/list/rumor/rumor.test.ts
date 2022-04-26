import { RumorList } from "./rumor";

test("", () => {
    let rumor = new RumorList();

    rumor.getItems().forEach(({ value }) => {
        console.table({
            input: value,
            output: RumorList.parse(value)
        });
    });
});
