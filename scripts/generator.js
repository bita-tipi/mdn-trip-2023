// Copyright (c) 2023 wappon_28_dev
// Released under the MIT license
// https://opensource.org/licenses/mit-license.php

import { globby } from "globby";
import fs from "fs/promises";
import _ from "lodash";
import { AA } from "./aa.js";

const root = process.cwd();
const assetsPath = `${root}/public/assets`;
const outputScriptPath = `${root}/src/model/assets-def.ts`;
const outputStylePath = `${root}/src/assets-def.css`;

const isWindows = process.platform === "win32";

const makePathForPlatform = (path) => {
    return isWindows ? path.replace(/\\/g, "/") : path;
};

const filesPath = await globby(`${makePathForPlatform(assetsPath)}`);

const assetKinds = await fs.readdir(assetsPath);
const aa = _.sample(AA);

let defScript = "";
let defStyle = "";
let defScriptTypeList = [];
let defStyleTypeList = [];
let filesInAssets = [];

console.log("\n\x1b[33m == Assets Definition Generator v1 == \x1b[0m\n");
await new Promise((resolve) => setTimeout(resolve, 300));

filesPath.forEach((filePath) => {
    const fileName = filePath.substring(assetsPath.length + 1);
    const styleKey = fileName.replace(/\/|\.|_/g, "-");
    const styleVal = filePath.substring(root.length);

    filesInAssets.push(fileName);

    defScriptTypeList.push(`\t| "${fileName}"`);
    defStyleTypeList.push(`\t--${styleKey}: url("${styleVal}");`);

    console.log(`\x1b[2m[･] ${fileName}\x1b[0m`);
});

defScript = `\
/* 
 * Copyright (c) 2023 wappon_28_dev
 * Released under the MIT license
 * https://opensource.org/licenses/mit-license.php
 *
 *  == Assets Definition Generator v1 == 
 *  generated file; do not edit
 */\n
`;
defStyle = defScript;

defScript += `export type ASSETS =\n`;
defScript += `${defScriptTypeList.join("\n")}\n\n`;

assetKinds.forEach((assetKindName) => {
    let defInKind = [];

    filesInAssets.forEach((fileInAssets) => {
        if (fileInAssets.startsWith(assetKindName)) {
            defInKind.push(
                `\t| "${fileInAssets.substring(assetKindName.length + 1)}"`,
            );
        }
    });

    defScript += `export type ${assetKindName.toUpperCase()} =\n`;
    defScript += `${defInKind.join("\n")}\n\n`;
});

defStyle += `:root {\n${defStyleTypeList.join("\n")}\n}`;

await Promise.all([
    await fs.writeFile(outputScriptPath, defScript),
    await fs.writeFile(outputStylePath, defStyle),
])
    .then((_) => {
        console.log("\n\x1b[32m ✓ Assets Definition generated!\x1b[0m");
        console.log(`\x1b[2mAssets definition file generated in`);
        console.log(`  - script : ${outputScriptPath}`);
        console.log(`  - style  : ${outputStylePath}\x1b[0m`);
        console.log(`\n${aa}\n`);
    })
    .catch((err) => {
        console.log(
            "\n\x1b[31m[32m ✗ Failed to generate Assets Definition...\x1b[0m",
        );
        console.log(err);
    });
