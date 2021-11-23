const octicons = require("@primer/octicons");
const { createLibrary } = require("svelvg");

createLibrary("@primer/octicons/build/svg", {
  iconIndex: true,
  appendClassNames: (filename) => {
    const key = filename.slice(0, -3);
    if (key in octicons) return ["octicon", `octicon-${key}`];
    return [];
  },
});
