# svelte-octicons

[![NPM][npm]][npm-url]
[![Build][build]][build-badge]

> GitHub Octicons as Svelte components.

This library builds [GitHub Primer Octicons](https://primer.style/octicons/) as Svelte components with zero dependencies.

Try it in the [Svelte REPL](https://svelte.dev/repl/dce762f9a93c4e56b3ddde749cb1945f?version=3.20.1).

## [Icon Preview](https://metonym.github.io/svelte-octicons/) · [Icon Index](ICON_INDEX.md)

## Install

```sh
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

```svelte
<script>
  import Alert16 from "svelte-octicons/lib/Alert16.svelte";
</script>

<Alert16 />
```

Refer to [ICON_INDEX.md](ICON_INDEX.md) for list of icons.

## API

`$$restProps` are forwarded to the `svg` element.

### Forwarded events

- on:click
- on:mouseover
- on:mouseenter
- on:mouseout
- on:keydown

## [Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-octicons.svg?color=blue
[npm-url]: https://npmjs.com/package/svelte-octicons
[build]: https://travis-ci.com/metonym/svelte-octicons.svg?branch=master
[build-badge]: https://travis-ci.com/metonym/svelte-octicons