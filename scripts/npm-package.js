// @ts-check
import fs from "node:fs";
import fsp from "node:fs/promises";
import { build } from "./build.js";

(async () => {
  console.time("package");

  if (fs.existsSync("./package")) {
    await fsp.rm("./package", { recursive: true });
  }

  await fsp.mkdir("./package");
  await fsp.mkdir("./package/lib");

  await fsp.copyFile("./package.json", "./package/package.json");
  await fsp.copyFile("./README.md", "./package/README.md");
  await fsp.copyFile("./LICENSE", "./package/LICENSE");

  build();

  const pkgJson = JSON.parse(
    fs.readFileSync("./package/package.json", "utf-8")
  );

  delete pkgJson.scripts;
  delete pkgJson.devDependencies;

  pkgJson.exports = {
    ".": {
      types: "./lib/index.d.ts",
      svelte: "./lib/index.js",
    },
    "./lib/*.svelte": {
      types: "./lib/*.svelte.d.ts",
      import: "./lib/*.svelte",
    },
  };

  // Svelte entry point is deprecated but we preserve it for backwards compatibility.
  pkgJson.svelte = "./lib/index.js";
  pkgJson.types = "./lib/index.d.ts";
  pkgJson.main = "./lib/index.js";

  await fsp.writeFile(
    "./package/package.json",
    JSON.stringify(pkgJson, null, 2)
  );
  console.timeEnd("package");
})();
