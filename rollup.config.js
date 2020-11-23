import svelteReadme from "svelte-readme";
import pkg from "./package.json";

export default svelteReadme({ minify: !process.env.ROLLUP_WATCH, pkg });
