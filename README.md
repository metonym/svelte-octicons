# svelte-octicons

[![NPM][npm]][npm-url]

> GitHub Octicons as Svelte components.

<!-- REPO_URL -->

This library builds [GitHub Primer Octicons](https://primer.style/octicons/) as Svelte components with zero dependencies.

Try it in the [Svelte REPL](https://svelte.dev/repl/dce762f9a93c4e56b3ddde749cb1945f).

---

<!-- TOC -->

## Installation

**Yarn**

```bash
yarn add -D svelte-octicons
```

**NPM**

```bash
npm i -D svelte-octicons
```

**pnpm**

```bash
pnpm i -D svelte-octicons
```

## Usage

Refer to [ICON_INDEX.md](./ICON_INDEX.md) for a list of available icons.

### Base import

`$$restProps` are forwarded to the `svg` element.

```svelte
<script>
  import { Alert16, Diamond16, Rocket16, Video16 } from "svelte-octicons";
</script>

<Alert16 />
<Diamond16 />
<Rocket16 />
<Video16 />
```

### Custom fill

```svelte
<Alert16 fill="red" />
```

## Usage with `svelte:component`

```svelte
<script>
  import * as Octicons from "svelte-octicons";
</script>

{#each Object.entries(Octicons) as [octicon, component]}
  <div>
    <svelte:component this={component} />
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

[npm]: https://img.shields.io/npm/v/svelte-octicons.svg?color=%23ff3e00&style=for-the-badge
[npm-url]: https://npmjs.com/package/svelte-octicons
