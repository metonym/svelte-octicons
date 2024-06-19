// @ts-check
import { $ } from "bun";
import { build } from "./build.js";

console.time("package");

await $`rm -rf package; mkdir package`;
await $`mkdir package/lib`;
await Bun.write("./package/package.json", Bun.file("./package.json"));
await Bun.write("./package/README.md", Bun.file("./README.md"));
await Bun.write("./package/LICENSE", Bun.file("./LICENSE"));

build();

const pkgJson = await Bun.file("./package/package.json").json();

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

await Bun.write("./package/package.json", JSON.stringify(pkgJson, null, 2));

console.timeEnd("package");
