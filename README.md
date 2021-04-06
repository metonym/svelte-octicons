# svelte-octicons

![npm](https://img.shields.io/npm/v/svelte-octicons?color=%23ff3e00&style=for-the-badge)

> GitHub Octicons as Svelte components.

<!-- REPO_URL -->

This library builds [GitHub Primer Octicons](https://primer.style/octicons/) as Svelte components with zero dependencies.

Try it in the [Svelte REPL](https://svelte.dev/repl/dce762f9a93c4e56b3ddde749cb1945f).

---

<!-- TOC -->

## Install

```bash
yarn add -D svelte-octicons
# OR
npm i -D svelte-octicons
```

## Usage

Refer to [ICON_INDEX.md](./ICON_INDEX.md) for a list of available icons.

### Base import

`$$restProps` are forwarded to the `svg` element.

```svelte
<script>
  import { Alert16, Octoface16, Rocket16, Video16 } from "svelte-octicons";
</script>

<Alert16 />
<Octoface16 />
<Rocket16 />
<Video16 />

```

### Custom fill

```svelte
<Alert16 fill="red" />

```

## Usage with svelte:component

```svelte
<script>
  import * as Octicons from "svelte-octicons";
</script>

{#each Object.keys(Octicons) as octicon}
  <div>
    <svelte:component this={Octicons[octicon]} />
    {octicon}
  </div>
{/each}

```

## TypeScript

Svelte version 3.31 or greater is required to use this library with TypeScript.

## Changelog

[Changelog](./CHANGELOG.md)

## License

[MIT](LICENSE)
