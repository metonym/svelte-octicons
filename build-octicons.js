const fs = require("fs");
const octicons = require("@primer/octicons");
const pkg = require("./package.json");

const template = (octicon) => {
  return `<svg
  {...$$restProps}
  version="${octicon.options.version}"
  width="${octicon.options.width}"
  height="${octicon.options.height}"
${octicon.options.class
  .split(" ")
  .map((name) => `  class:${name}={true}`)
  .join("\n")}
  aria-hidden="${octicon.options["aria-hidden"]}"
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:keydown>
    ${octicon.path}
  </svg>`;
};

function build() {
  fs.rmdirSync("lib", { recursive: true });
  fs.mkdirSync("lib");

  const moduleNames = [];

  const imports = Object.keys(octicons).map((octicon) => {
    const moduleName = octicon
      .split("-")
      .map((_) => _.slice(0, 1).toUpperCase() + _.slice(1))
      .join("");

    moduleNames.push(moduleName);

    fs.mkdirSync(`lib/${moduleName}`);
    fs.writeFileSync(
      `lib/${moduleName}/${moduleName}.svelte`,
      template(octicons[octicon])
    );
    fs.writeFileSync(
      `lib/${moduleName}/index.js`,
      `import ${moduleName} from "./${moduleName}.svelte";
     export { ${moduleName} };
     export default ${moduleName};`
    );

    return `export { ${moduleName} } from "./${moduleName}";`;
  });

  fs.writeFileSync("lib/index.js", imports.join(""));
  process.stdout.write(`${moduleNames.length} octicons` + "\n");

  fs.rmdirSync("docs", { recursive: true });
  fs.mkdirSync("docs");

  const docs = [
    "# docs",
    `> ${moduleNames.length} octicons built with @primer/octicons version ${pkg.devDependencies["@primer/octicons"]}.`,
    "## Usage",
    "```html",
    `<script>
       import ModuleName from "svelte-octicons/lib/ModuleName";
     </script>
     <ModuleName />`,
    "```",
    "## List of octicons by `ModuleName`",
    moduleNames.map((moduleName) => `- ${moduleName}`).join("\n"),
  ];

  fs.writeFileSync("docs/README.md", docs.join("\n"));
}

build();
