<script>
  import * as icons from "svelte-octicons";
  import pkg from "./package.json";
</script>

<style>
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(html) {
    line-height: 1.42;
  }

  :global(body) {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif;
    letter-spacing: 0.01rem;
    padding: 1rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
  }

  li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 4.5rem;
    margin: 1rem 0.5rem 0 0;
    padding: 0.75rem 0.75rem 0.5rem 0.5rem;
    border: 1px solid #e0e0e0;
    border-radius: 0.25rem;
    font-size: 0.875rem;
  }

  span {
    margin-top: 0.5rem;
  }
</style>

<svelte:options immutable />
<div><strong>{pkg.name}</strong> v{pkg.version}</div>
<ul>
  {#each Object.keys(icons) as icon (icon)}
    <li>
      <svelte:component this={icons[icon]} />
      <span>{icon}</span>
    </li>
  {/each}
</ul>
