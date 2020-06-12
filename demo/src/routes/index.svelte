<script>
  import * as icons from "svelte-octicons";
</script>

<style>
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
    margin: 0.5rem;
    padding: 0.75rem 0.5rem 0.5rem;
    border: 1px solid #e0e0e0;
    border-radius: 0.25rem;
    font-size: 0.75rem;
  }

  span {
    margin-top: 0.5rem;
  }
</style>

<svelte:head>
  <title>svelte-octicons</title>
</svelte:head>

<ul>
  {#each Object.keys(icons) as icon, i (icon)}
    <li>
      <svelte:component this={icons[icon]} />
      <span>{icon}</span>
    </li>
  {/each}
</ul>
