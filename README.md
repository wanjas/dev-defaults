# @wanjas/dev
[ESLint](https://eslint.org/), [Prettier](https://prettier.io/), [tsconfig](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) and common devDependencies to share among projects

> `npm install @wanjas/dev --save-dev`

In `postinstall` script package creates (if not exist) following configs that extend defaults from this package:

* .eslintrc.js
* .prettierrc.js
* tsconfig.json

These files can also be found in `./_default_files` directory.

Package includes common devDependencies:
* `typescript`
* `ts-jest`
* `ts-loader`
* `ts-node`
* `tsconfig-paths`
* etc.
