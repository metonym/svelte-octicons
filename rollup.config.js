import svelteReadme from "svelte-readme";
import serve from "rollup-plugin-serve";

const DEV = process.env.ROLLUP_WATCH;

export default svelteReadme({
  minify: !DEV,
  svelte: { immutable: true },
  prefixUrl: "https://github.com/metonym/svelte-octicons/tree/master/",
  plugins: [DEV && serve({ contentBase: "public", port: 3000 })],
});
