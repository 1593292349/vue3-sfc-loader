
### [0.4.2](https://github.com/FranckFreiburger/vue3-sfc-loader/compare/v0.4.1...v0.4.2) (2021-03-14)


### Features

* **core:** allow output bundle as es6 module (yarn run build --env libraryTargetModule) ([2cbe3e5](https://github.com/FranckFreiburger/vue3-sfc-loader/commit/2cbe3e5f562ad08167f92fd2f1d4c4976feaa5b7))


### Bug Fixes

* **vue2:** add jsx support ([c48e9e2](https://github.com/FranckFreiburger/vue3-sfc-loader/commit/c48e9e24614086c476bb4ee05dc288ec3f3d9b4d))
* **vue3:** fix jsx support ([5442edc](https://github.com/FranckFreiburger/vue3-sfc-loader/commit/5442edc876e5680b6d5c700eef32150bb0495c62))

### [0.4.1](https://github.com/FranckFreiburger/vue3-sfc-loader/compare/v0.3.1...v0.4.1) (2021-03-11)


### Features

* **core:** add vue2 support ([0851103](https://github.com/FranckFreiburger/vue3-sfc-loader/commit/0851103611227009d0179f349a7e4081d85cfd2a))

### [0.3.1](https://github.com/FranckFreiburger/vue3-sfc-loader/compare/v0.3.0...v0.3.1) (2021-03-03)


### Features

* **core:** add custom block support through customBlockHandler() ([1ce1e9b](https://github.com/FranckFreiburger/vue3-sfc-loader/commit/1ce1e9b2a42d94429b3cfda57c75e9138dd0c0ae))
* **core:** enable parallel dependencies downloading ([79846a8](https://github.com/FranckFreiburger/vue3-sfc-loader/commit/79846a88bf1250688eeee88a85f9f0c79e880d7a))

## [0.3.0](https://github.com/FranckFreiburger/vue3-sfc-loader/compare/v0.2.22...v0.3.0) (2021-02-21)


### ⚠ BREAKING CHANGES

* **core:** loadModule() `options` argument is not mutated any more.

### Features

* **core:** abstraction of path management ([b647cb3](https://github.com/FranckFreiburger/vue3-sfc-loader/commit/b647cb39a7b8ee9f591e3d9a3a77e9d26f56eeb9))


### wip

* **core:** enhance loadModule() options management. ([913a616](https://github.com/FranckFreiburger/vue3-sfc-loader/commit/913a6169e248ce6531ba523cb30c36ab814029bf))

### [0.2.22](https://github.com/FranckFreiburger/vue3-sfc-loader/compare/v0.2.21...v0.2.22) (2021-01-23)


### Bug Fixes

* **core:** enable template text interpolation delimiters configuration ([9eb3d33](https://github.com/FranckFreiburger/vue3-sfc-loader/commit/9eb3d337da6e97dae4e0bc0f2e685b409ab6cf05))

### [0.2.21](https://github.com/FranckFreiburger/vue3-sfc-loader/compare/v0.2.20...v0.2.21) (2020-12-14)


### Bug Fixes

* **code:** add missing await ([7290217](https://github.com/FranckFreiburger/vue3-sfc-loader/commit/7290217f35e00e70df7339c38c70123cfee00eab))
* **config:** revert disabling @babel/helpers since it is required ([f767bc4](https://github.com/FranckFreiburger/vue3-sfc-loader/commit/f767bc4f1daa60726dd518dcbc12e7dde067f3e7))

### [0.2.20](https://github.com/FranckFreiburger/vue3-sfc-loader/compare/v0.2.19...v0.2.20) (2020-12-13)


### Features

* **docs:** add stylus example ([1fe4d4f](https://github.com/FranckFreiburger/vue3-sfc-loader/commit/1fe4d4f2f672fc86b27a794fc252a550314a376d))


### Bug Fixes

* **core:** avoid useless template scoped (data-v-...) when (style) scope is not required ([f9c9fe7](https://github.com/FranckFreiburger/vue3-sfc-loader/commit/f9c9fe7f715ef115b697c3388bde30e61b621391))
* **docs:** fix vue3-sfc-loader.js link ([0333913](https://github.com/FranckFreiburger/vue3-sfc-loader/commit/0333913d3bb1c1d77226320c8da71f161f1af1a1))

### [0.2.19](https://github.com/FranckFreiburger/vue3-sfc-loader/compare/v0.2.18...v0.2.19) (2020-12-10)


### Bug Fixes

* **core:** Options.loadModule() return type ([afea8bf](https://github.com/FranckFreiburger/vue3-sfc-loader/commit/afea8bf7ea799fb3ab60d830e89255b191fda726))

### [0.2.18](https://github.com/FranckFreiburger/vue3-sfc-loader/compare/v0.2.17...v0.2.18) (2020-12-08)


### Bug Fixes

* **build:** issue with cross-env-shell and `$npm_package_version` ([72c1539](https://github.com/FranckFreiburger/vue3-sfc-loader/commit/72c1539d08fa506ea1dd704a71fc96862a4ba614))
* **build:** issue with cross-env-shell and `$npm_package_version` ([b2f09c7](https://github.com/FranckFreiburger/vue3-sfc-loader/commit/b2f09c78a1b1a1425ffdf7d6a86105fd2dce3113))
* **core:** allow `descriptor.template.lang` and `descriptor.styles.*.lang` to be dynamically loaded. ([25af387](https://github.com/FranckFreiburger/vue3-sfc-loader/commit/25af3875cfbd35ad94613f04aef538951452b4f3))

### [0.2.17](https://github.com/FranckFreiburger/vue3-sfc-loader/compare/v0.2.16...v0.2.17) (2020-12-08)


### Features

* **core:** enhance moduleCache management ([4ab1dbd](https://github.com/FranckFreiburger/vue3-sfc-loader/commit/4ab1dbda918276a0d7f7d2784537d5cc5f6e360f))


### Bug Fixes

* **core:** call addStyle() with scopeId only if style is scoped ([cd10f83](https://github.com/FranckFreiburger/vue3-sfc-loader/commit/cd10f8344a0dcd3ba6a44733c5feb3e45bc3671b))
* **core:** fix import() path resolution ([33af5e9](https://github.com/FranckFreiburger/vue3-sfc-loader/commit/33af5e96a68ce077a1de80222a042b48247323c4))
* **core:** fix module cache handling ([80907a4](https://github.com/FranckFreiburger/vue3-sfc-loader/commit/80907a40d68759db35d9af3696828c47444e4dc6))

### [0.2.16](https://github.com/FranckFreiburger/vue3-sfc-loader/compare/v0.2.15...v0.2.16) (2020-12-07)


### Bug Fixes

* **build:** enable babel-loader sourceMap ([9fe51af](https://github.com/FranckFreiburger/vue3-sfc-loader/commit/9fe51afb9a7614b6272248384e9438973ced2045))
* **build:** enable ts sourceMap (through ts-loader) ([a09ec5e](https://github.com/FranckFreiburger/vue3-sfc-loader/commit/a09ec5e762f681f917bff8c4206352dbe754c28e))

### [0.2.15](https://github.com/FranckFreiburger/vue3-sfc-loader/compare/v0.2.14...v0.2.15) (2020-12-03)


### Features

* **core:** now, getFile() may return the file content or an object `{ content, extname }` ([292db5f](https://github.com/FranckFreiburger/vue3-sfc-loader/commit/292db5f9cc98d0b9c86588af42278d191add8508))

### [0.2.14](https://github.com/FranckFreiburger/vue3-sfc-loader/compare/v0.2.13...v0.2.14) (2020-11-30)


### Bug Fixes

* **build:** restore @babel/highlight that is required by @babel/code-frame ([c728343](https://github.com/FranckFreiburger/vue3-sfc-loader/commit/c728343e3494c47edad81c9c090bcdbd5b3d0ff8))
* **docs:** fix/enhance "more complete API usage example" example ([61cfe04](https://github.com/FranckFreiburger/vue3-sfc-loader/commit/61cfe04aad90f0fee38cb5296a27062cbea787bc))

### [0.2.13](https://github.com/FranckFreiburger/vue3-sfc-loader/compare/v0.2.12...v0.2.13) (2020-11-30)


### Features

* **build:** add more --env options for bundle build ([1971ac1](https://github.com/FranckFreiburger/vue3-sfc-loader/commit/1971ac123b1c98b22882ba4541375cd0ba7c03fa))


### Bug Fixes

* **core:** in a Vue component, allow missing `<template>`, `<script>` and `<style>` blocks ([3882746](https://github.com/FranckFreiburger/vue3-sfc-loader/commit/3882746cac190199a0809d6d3d4c97af687a7f67))

### [0.2.12](https://github.com/FranckFreiburger/vue3-sfc-loader/compare/v0.2.11...v0.2.12) (2020-11-29)


### Features

* **core:** add code-frame in compilation errors for template, style, SFC script ad imported scripts ([521bea6](https://github.com/FranckFreiburger/vue3-sfc-loader/commit/521bea6f33f75b256ce2e8c28b0e21c4d023c887))

### [0.2.11](https://github.com/FranckFreiburger/vue3-sfc-loader/compare/v0.2.10...v0.2.11) (2020-11-28)


### Features

* **core:** loadModule() throw when a mandatory option is not defined. ([1f62eac](https://github.com/FranckFreiburger/vue3-sfc-loader/commit/1f62eac14972e25833eacb5781b7c9ee7283254c))
* **workflow:** add evalHtmlComments.js tool ([c86208b](https://github.com/FranckFreiburger/vue3-sfc-loader/commit/c86208bb4cd84686d615c74e29977da11c15a9f4))

### [0.2.10](https://github.com/FranckFreiburger/vue3-sfc-loader/compare/v0.2.8...v0.2.10) (2020-11-28)


### Features

* **core:** add code frame in JS code compilation error reports ([caa2d0d](https://github.com/FranckFreiburger/vue3-sfc-loader/commit/caa2d0ddea2d9ea3000afea83f4d457bbdaf4da7))
* **core:** report JS code compilation errors through options.log() ([c806016](https://github.com/FranckFreiburger/vue3-sfc-loader/commit/c8060167b9a74f77efc8b1fe9efb0a20135634cc))

### [0.2.8](https://github.com/FranckFreiburger/vue3-sfc-loader/compare/v0.2.7...v0.2.8) (2020-11-27)


### Bug Fixes

* **core:** add missing scoped option in sfc_compileTemplate() call ([ed99480](https://github.com/FranckFreiburger/vue3-sfc-loader/commit/ed994807f3b294a2fd9a5b98cfd9ac993ffb2fe8))
* **docs:** unpkg.com CDN url ([06f0378](https://github.com/FranckFreiburger/vue3-sfc-loader/commit/06f0378e27d7e03eeac16558d8b8bfcc3d82c584))

### [0.2.7](https://github.com/FranckFreiburger/vue3-sfc-loader/compare/v0.2.3...v0.2.7) (2020-11-27)


### Features

* **core:** export the version of the library ([4e1b1c7](https://github.com/FranckFreiburger/vue3-sfc-loader/commit/4e1b1c705c9454c58783521e877035e93ab19339))

### [0.2.3](https://github.com/FranckFreiburger/vue3-sfc-loader/compare/v0.2.2...v0.2.3) (2020-11-26)

### [0.2.2](https://github.com/FranckFreiburger/vue3-sfc-loader/compare/v0.2.1...v0.2.2) (2020-11-26)

### [0.2.1](https://github.com/FranckFreiburger/vue3-sfc-loader/compare/v0.2.0...v0.2.1) (2020-11-26)


### Bug Fixes

* **workflow:** exclude **/node_modules/ from npm package ([898ec6a](https://github.com/FranckFreiburger/vue3-sfc-loader/commit/898ec6a98eb8267b30b3310ca84413bdf11a0395))

# [0.2.0](https://github.com/FranckFreiburger/vue3-sfc-loader/compare/v0.1.0...v0.2.0) (2020-11-26)


### Features

* **doc:** add package version in the final package (see BannerPlugin) ([484f83e](https://github.com/FranckFreiburger/vue3-sfc-loader/commit/484f83e4a33d013f114ec1818fa212c5ddd0dba0))


### Reverts

* Revert "chore(workflow): enhancements" ([633d9a5](https://github.com/FranckFreiburger/vue3-sfc-loader/commit/633d9a51865fdd658921695b95ec271828b7dce0))
