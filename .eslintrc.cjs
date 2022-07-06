/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  parser: "@typescript-eslint/parser",

  settings: {
    react: {
      version: "detect",
    },

    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },

    "import/resolver": {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`

        // use <root>/path/to/folder/tsconfig.json
        // project: "path/to/folder",
      },
    },
  },

  env: {
    node: false,
    browser: true,
  },

  extends: [
    // recommended eslint
    "eslint:recommended",

    // recommended typescript (https://github.com/typescript-eslint/typescript-eslint)
    "plugin:@typescript-eslint/recommended",

    // imports (https://github.com/import-js/eslint-plugin-import)
    "plugin:import/recommended",

    // typescript resolver for import plugin (https://github.com/import-js/eslint-import-resolver-typescript)
    "plugin:import/typescript",

    // react (https://github.com/jsx-eslint/eslint-plugin-react)
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",

    // react hooks (https://www.npmjs.com/package/eslint-plugin-react-hooks)
    "plugin:react-hooks/recommended",

    // prettier (https://github.com/prettier/eslint-plugin-prettier)
    "prettier",
  ],

  plugins: ["@typescript-eslint", "react-hooks", "react", "prettier"],
}
