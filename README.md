# svelte-octicons

![npm](https://img.shields.io/npm/v/svelte-octicons?color=0366d6&style=for-the-badge)
![GitHub](https://img.shields.io/github/license/metonym/svelte-octicons?color=0366d6&style=for-the-badge)
![Travis (.com)](https://img.shields.io/travis/com/metonym/svelte-octicons?color=28a745&style=for-the-badge)

> GitHub Octicons as Svelte components.

This library builds [GitHub Primer Octicons](https://primer.style/octicons/) as Svelte components with zero dependencies.

Try it in the [Svelte REPL](https://svelte.dev/repl/dce762f9a93c4e56b3ddde749cb1945f?version=3.20.1).

## Install

```bash
yarn add -D svelte-octicons
# OR
npm i -D svelte-octicons
```

## Usage

### Base import

```svelte
<script>
  import { Alert16 } from "svelte-octicons";
</script>

<Alert16 />
```

### Direct import

The direct import method is recommended because it can lead to faster compile times.

```svelte
<script>
  import Alert24 from "svelte-octicons/lib/Alert24.svelte";
</script>

<Alert24 />
```

Refer to [ICON_INDEX.md](./ICON_INDEX.md) for list of icons.

## API

`$$restProps` are forwarded to the `svg` element.

### Forwarded events

- on:click
- on:mouseover
- on:mouseenter
- on:mouseout
- on:keydown

## Rendering octicons using `svelte:component`

```svelte
<script>
  import * as Octicons from "svelte-octicons";
</script>

{#each Object.keys(Octicons) as octicon}
  <div>
    <svelte:component title="{octicon}" this={Octicons[octicon]} />
    {octicon}
  </div>
{/each}
```

## [Changelog](./CHANGELOG.md)

## License

[MIT](LICENSE)
