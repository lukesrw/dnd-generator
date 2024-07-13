import { writeFile } from "fs/promises";
import { join } from "path";
import { Component } from "../index.js";
import { findExamples } from "./lib/findExamples.js";
import { getComponentList } from "./lib/getComponentList.js";
import { updateExamples } from "./lib/updateExamples.js";

const ROOT_DIR = process.cwd();
const README_PATH = join(ROOT_DIR, "README.md");

(async function () {
    await writeFile(
        README_PATH,
        `# D&D Generator

A system for generating random D&D/fantasy information.

🎉 Now in v2 (read the [Changelog](CHANGELOG.md) for full details)

## Getting Started

Install the package:

\`\`\`
npm install dnd-generator
\`\`\`

## Utilities

### List 📃

_Lists_ are the core primitive of D&D Generator, allowing you to group related concepts into a single set which can then be reused, further filtered, and picked from. See the [_Lists_ documentation](/src/lib/list/README.md) for full details.

\`\`\`ts Readme List
\`\`\`

### ✏️ Sentence

_Sentences_ allow you to create text from pre-defined _Sentence Parts_ which provide the possible random permutations. See the [_Sentences_ documentation](/src/lib/sentence/README.md) for full details. _Sentences_

\`\`\`ts Readme Sentence
\`\`\`

### 📦 Generator

_Generators_ allow you to create/utilise random content which is comprised from other _Lists_, _Sentences_, or _Generators_. See the [_Generators_ documentation](/src/lib/generator/README.md) for full details.

\`\`\`ts Readme Generator
\`\`\`

### Available Components

${getComponentList(Component).trim()}`
    );

    console.log(
        `Updated files:\n${await Promise.all([
            updateExamples(README_PATH),
            findExamples(join(ROOT_DIR, "doc")),
            findExamples(join(ROOT_DIR, "src"))
        ]).then(files => {
            return files
                .flat()
                .filter(Boolean)
                .map((file, index) => `    ${index + 1}. ${file}`)
                .join("\n");
        })}`
    );
})();
