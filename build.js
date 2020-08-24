const fs = require("fs");
const octicons = require("@primer/octicons");
const { name, devDependencies } = require("./package.json");

const template = (octicon) => {
  return `<script>export let width = ${octicon.width}; export let height = ${
    octicon.width
  };</script><svg
  aria-hidden="${octicon.options["aria-hidden"]}"
  version="${octicon.options.version}"
  viewBox="${octicon.options.viewBox}"
  {...$$restProps}
  {width}
  {height}
  ${octicon.options.class
    .split(" ")
    .map((name) => `  class:${name}={true}`)
    .join("\n")}
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
  const imports = [];

  Object.keys(octicons).map((octicon) => {
    Object.keys(octicons[octicon].heights).forEach((height) => {
      const octiconByHeight = octicons[octicon].heights[height];
      const moduleName =
        octicon
          .split("-")
          .map((_) => _.slice(0, 1).toUpperCase() + _.slice(1))
          .join("") + height;

      moduleNames.push(moduleName);

      fs.mkdirSync(`lib/${moduleName}`);
      fs.writeFileSync(
        `lib/${moduleName}/${moduleName}.svelte`,
        template(octiconByHeight)
      );
      fs.writeFileSync(
        `lib/${moduleName}/index.js`,
        `import ${moduleName} from "./${moduleName}.svelte";
         export { ${moduleName} };
         export default ${moduleName};`
      );

      imports.push(`export { ${moduleName} } from "./${moduleName}";`);
    });
  });

  fs.writeFileSync("lib/index.js", imports.join(""));
  process.stdout.write(`${moduleNames.length} octicons` + "\n");

  fs.rmdirSync("docs", { recursive: true });
  fs.mkdirSync("docs");

  const index = `# Icon Index\n
> ${moduleNames.length} icons from ${name}@${
    devDependencies["@primer/octicons"]
  }.\n
## Usage\n
\`\`\`html
<script>
  import Icon from "${name}/lib/{ModuleName}";
</script>

<Icon />
\`\`\`\n
## Icons by \`ModuleName\`\n
${moduleNames.map((name) => `- ${name}`).join("\n")}`;

  fs.writeFileSync("ICON_INDEX.md", index);
}

build();
