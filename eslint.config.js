import js from "@eslint/js";
import globals from "globals";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    plugins: {
      prettier: prettierPlugin,
    },
  },
  js.configs.recommended,
  importPlugin.flatConfigs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2021,
      },
    },
  },
  {
    ignores: ["node_modules", "dist"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    rules: {
      ...eslintConfigPrettier.rules,
      "prettier/prettier": "error",
      "import/extensions": "off",
      "import/prefer-default-export": "off",
      "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
      "import/no-unresolved": "error",
      "object-curly-spacing": ["error", "always"],
      "eol-last": ["error", "always"],
      "prefer-const": "error",
      "max-params": ["error", 3],
      semi: ["error", "always"],
      "max-len": "off",
      "no-param-reassign": "off",
      "linebreak-style": "off",
      "comma-dangle": ["error", "only-multiline"],
      "no-multiple-empty-lines": [
        "error",
        {
          max: 1,
          maxEOF: 1,
        },
      ],
      "no-underscore-dangle": [
        "error",
        {
          allow: ["_d", "_dh", "_h", "_id", "_m", "_n", "_t", "_text"],
        },
      ],
      "object-curly-newline": "off",
      "no-confusing-arrow": ["error", { allowParens: true }],
      "arrow-body-style": "off",
      quotes: ["error", "double"],
      "no-shadow": "off",
      "operator-linebreak": [
        "error",
        "after",
        {
          overrides: {
            ":": "before",
            "?": "before",
          },
        },
      ],
      "prefer-destructuring": ["error", { object: true, array: false }],
    },
  },
  {
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js"],
        },
      },
    },
  },
];
