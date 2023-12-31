// @ts-check
import octicons from "@primer/octicons";
import { createLibrary } from "svelvg";

export const build = () => {
  console.time("build");
  createLibrary("@primer/octicons/build/svg", {
    outDir: "./package/lib",
    iconIndex: true,
    appendClassNames: (filename) => {
      const key = filename.slice(0, -3);
      if (key in octicons) return ["octicon", `octicon-${key}`];
    },
  });
  console.timeEnd("build");
};
