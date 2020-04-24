const fs = require("fs");
const pkg = require("./package.json");
const { cleanDir, generateFromFolder } = require("svg-to-svelte");

function build() {
  const { moduleNames } = generateFromFolder(
    "node_modules/@primer/octicons/build/svg",
    "lib",
    {
      clean: true,
    }
  );

  cleanDir("docs");

  const docs = [
    "# docs",
    `> ${moduleNames.length} octicons from @primer/octicons@${pkg.devDependencies["@primer/octicons"]}.`,
    "## Usage",
    "```html",
    `<script>
       import Octicon from "svelte-octicons/lib/{ModuleName}";
     </script>

     <Octicon />`,
    "```",
    "## List of octicons by `ModuleName`",
    moduleNames.map((moduleName) => `- ${moduleName}`).join("\n"),
  ];

  fs.writeFileSync("docs/README.md", docs.join("\n"));
}

build();
