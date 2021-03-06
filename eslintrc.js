const path = require("path");

module.exports = function (dir) {
  return {
    rules: {
      "prettier/prettier": ["error"],
      "no-unused-vars": ["off"],
      "import/prefer-default-export": "off",
      "import/no-default-export": "error",
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": [
        "error",
        {
          functions: false,
          classes: true,
          variables: true,
          typedefs: true,
        },
      ],
      "@typescript-eslint/lines-between-class-members": "off",
      "unicorn/prevent-abbreviations": "off",
      "unicorn/filename-case": "off",
      "promise/always-return": "off",
      "unicorn/no-useless-undefined": "off",
      "import/no-extraneous-dependencies": "off",
      "unicorn/no-null": "off",
      "class-methods-use-this": "off",
      "no-underscore-dangle": "off",
      "max-classes-per-file": "off",
      "import/extensions": "off",
      "unicorn/consistent-function-scoping": "off",
      "no-param-reassign": "off",
      "unicorn/no-for-loop": "off",
      "no-console": "off",
      "no-restricted-syntax": [
        "error",
        {
          selector: "ForInStatement",
          message:
            "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
        },
        {
          selector: "LabeledStatement",
          message:
            "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
        },
        {
          selector: "WithStatement",
          message:
            "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
        },
      ],
      "@typescript-eslint/ban-ts-comment": "off",
      "unicorn/prefer-node-protocol": "off",
    },
    plugins: [
      "prettier",
      "@typescript-eslint",
      "eslint-comments",
      "promise",
      "unicorn",
      "import",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      project: [path.resolve(dir, "tsconfig.json")],
    },
    extends: [
      "airbnb-typescript/base",
      "plugin:@typescript-eslint/recommended",
      "plugin:eslint-comments/recommended",
      "plugin:promise/recommended",
      "plugin:unicorn/recommended",
      "plugin:import/recommended",
      "plugin:prettier/recommended",
    ],
    env: {
      es6: true,
      jest: true,
    },
  };
};
