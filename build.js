import octicons from "@primer/octicons";
import { createLibrary } from "svelvg";
import fs from "fs";

if (fs.existsSync("lib")) {
  fs.rmdirSync("lib", { recursive: true });
}

fs.mkdirSync("lib");

createLibrary("@primer/octicons/build/svg", {
  iconIndex: true,
  appendClassNames: (filename) => {
    const key = filename.slice(0, -3);
    if (key in octicons) return ["octicon", `octicon-${key}`];
  },
});
