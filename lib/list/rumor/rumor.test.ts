import { RumorList } from "./rumor";

test("RumorList is able to parse each rumor template", () => {
    let rumor = new RumorList();

    rumor.getItems().forEach(({ value }) => {
        expect(() => {
            RumorList.parse(value);
        }).not.toThrow();
    });
});
