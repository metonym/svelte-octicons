import octicons from "@primer/octicons";
import { createLibrary } from "svelvg";

createLibrary("@primer/octicons/build/svg", {
  iconIndex: true,
  appendClassNames: (filename) => {
    const key = filename.slice(0, -3);
    if (key in octicons) return ["octicon", `octicon-${key}`];
  },
});
