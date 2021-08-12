import svelteReadme from "svelte-readme";

export default svelteReadme({
  style: `
    .code-fence > div {
      display: inline-flex;
      flex-direction: column;
      margin: 4px;
      padding: 8px;
      border: 1px solid #eaecef;
      border-radius: 4px;
    }

    .code-fence svg {
      margin-bottom: 4px;
    }
  `,
});
