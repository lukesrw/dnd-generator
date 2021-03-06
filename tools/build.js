const { readdir, stat, readFile, writeFile } = require("fs/promises");
const { join } = require("path");
const { addSuffix } = require("./suffix");

const LIST_DIR = join(__dirname, "..", "lib", "list");
const CLASS_REGEX =
    /class (?<name>\w+) extends List_1.List \{[\r\n]+\s+constructor\(\) \{[\r\n]+\s+super\(\[\]\);/giu;
const NAME_REGEX = /([A-Z][a-z]+)/;

async function build() {
    let lists = await readdir(LIST_DIR);

    lists.forEach(async list => {
        let list_dir = join(LIST_DIR, list);

        let stats = await stat(list_dir);

        if (stats.isDirectory()) {
            let files = await readdir(list_dir);

            if (files.includes(`${list}.js`)) {
                let file_path = join(list_dir, `${list}.js`);

                let content = await readFile(file_path, "utf-8");

                let matches = [...content.matchAll(CLASS_REGEX)];

                matches.forEach(async match => {
                    let name = match.groups.name.split(NAME_REGEX);
                    name = name
                        .slice(1, name.length - 2)
                        .filter(part => part)
                        .join("-")
                        .toLowerCase();

                    name = addSuffix(name);

                    let json_path = join(list_dir, name + ".json");

                    try {
                        let list = await readFile(json_path, "utf-8");

                        list = JSON.stringify(JSON.parse(list));

                        content = content.replace(
                            match[0],
                            match[0].replace("[]", list)
                        );

                        await writeFile(file_path, content);
                    } catch (e) {
                        console.log(e);
                    }
                });
            }
        }
    });

    console.log(
        "Run `node tools/clean` to clean repository and delete '.js', '.js.map', '.d.ts', and '.d.ts.map' files before committing.\n"
    );
}

build();
