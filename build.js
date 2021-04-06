const fs = require("fs");
const octicons = require("@primer/octicons");
const { name, version } = require("./package.json");

const template = ({ width, options, path }) => {
  return `<svg
  aria-hidden="${options["aria-hidden"]}" version="${
    options.version
  }" viewBox="${options.viewBox}"
  width="${width}"
  height="${width}"
  ${options.class
    .split(" ")
    .map((name) => `  class:${name}={true}`)
    .join("\n")}
  {...$$restProps}>
    ${path}
  </svg>`;
};

function build() {
  fs.rmdirSync("lib", { recursive: true });
  fs.mkdirSync("lib");

  const moduleNames = [];
  const imports = [];

  Object.keys(octicons).map((octicon) => {
    Object.keys(octicons[octicon].heights).forEach((height) => {
      const octiconByHeight = octicons[octicon].heights[height];
      const moduleName =
        octicon
          .split("-")
          .map((_) => _.slice(0, 1).toUpperCase() + _.slice(1))
          .join("") + height;

      fs.writeFileSync(`lib/${moduleName}.svelte`, template(octiconByHeight));
      moduleNames.push(moduleName);
      imports.push(
        `export { default as ${moduleName} } from "./${moduleName}.svelte";\n`
      );
    });
  });

  fs.writeFileSync("lib/index.js", imports.join(""));

  const index = `# Icon Index\n
> ${moduleNames.length} icons from ${name}@${version}.\n
## Usage\n
\`\`\`svelte
<script>
  import { Icon } from "${name}";
  // OR
  import Icon from "${name}/lib/{ModuleName}.svelte";
</script>

<Icon />
\`\`\`\n
## Icons by \`ModuleName\`\n
${moduleNames.map((name) => `- ${name}`).join("\n")}\n`;

  fs.writeFileSync("ICON_INDEX.md", index);
}

build();
