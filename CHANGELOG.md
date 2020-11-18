# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [11.2.0](https://github.com/metonym/svelte-octicons/releases/tag/v11.2.0) - 2020-11-17

- Upgrade @primer/octicons to version 11.1.0 (net +3 icons)

## [11.1.0](https://github.com/metonym/svelte-octicons/releases/tag/v11.1.0) - 2020-09-08

- Upgrade @primer/octicons to version 11.0.0 (1 less icon)

## [11.0.0](https://github.com/metonym/svelte-octicons/releases/tag/v11.0.0) - 2020-08-29

**Breaking changes**

- Generated Svelte components are at the `lib` level; it's not longer possible to import a component through `svelte-octicons/lib/Alert16.svelte`. However, `svelte-octicons/lib/Alert16` should still resolve correctly without the `.svelte` extension

## [10.1.0](https://github.com/metonym/svelte-octicons/releases/tag/v10.1.0) - 2020-08-24

- Upgrade @primer/octicons to version 10.1.0 (7 new icons)

## [10.0.0](https://github.com/metonym/svelte-octicons/releases/tag/v10.0.0) - 2020-06-10

- Upgrade @primer/octicons to version 10.0.0 (192 new icons)

## [9.6.3](https://github.com/metonym/svelte-octicons/releases/tag/v9.6.3) - 2020-05-11

- Add `viewBox` attribute, export width, height props

## [9.6.2](https://github.com/metonym/svelte-octicons/releases/tag/v9.6.2) - 2020-05-10

- Revert to old build process to include Octicon class names

## [9.6.1](https://github.com/metonym/svelte-octicons/releases/tag/v9.6.1) - 2020-05-10

- Upgrade `svg-to-svelte` to v0.3.6 to allow `$$restProps` override

## [9.6.0](https://github.com/metonym/svelte-octicons/releases/tag/v9.6.0) - 2020-04-22

- Initial release