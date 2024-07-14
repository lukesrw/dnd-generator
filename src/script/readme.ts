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

### 📃 List ([docs](/src/util/List.md))

_Lists_ are the core primitive, allowing you to group related concepts which can then be picked from, or further filtered.

\`\`\`ts Readme List
\`\`\`

### ✏️ Sentence ([docs](/src/util/Sentence.md))

_Sentences_ allow you to create text from pre-defined _Sentence Parts_ which provide the possible random permutations.

\`\`\`ts Readme Sentence
\`\`\`

### 📦 Generator

_Generators_ allow you to create/utilise random content which is comprised from other _Lists_, _Sentences_, or _Generators_.

\`\`\`ts Readme Generator
\`\`\`

## Components

${getComponentList(Component).trim()}
`
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
