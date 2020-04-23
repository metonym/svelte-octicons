# svelte-octicons

[![NPM][npm]][npm-url]
[![Build][build]][build-badge]

> GitHub octicons as Svelte components.

This library builds [GitHub Primer Octicons](https://primer.style/octicons/) as Svelte components with zero dependencies.

## Install

```bash
yarn add -D svelte-octicons
```

## Usage

```html
<script>
  import { Alert } from "svelte-octicons";
</script>

<Alert />
```

Refer to [docs/README.md](docs/README.md) for a full list of octicons.

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
