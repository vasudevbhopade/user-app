module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
    "@vue/typescript/recommended",
    // Prettier should always be last to resolve overlapping eslint/ prettier rules
    "prettier",
  ],
  rules: {
    "no-var": "error",
    "no-unused-vars": "off", // Off to avoid conflicts with @typescript-eslint/no-unused-vars
    "prefer-const": "error",
    "max-depth": ["warn", 3],
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "vue/multi-word-component-names": "error",
    "vue/component-tags-order": [
      "error",
      {
        order: ["template", "script", "style"],
      },
    ],
    "vue/html-self-closing": [
      "warn",
      {
        html: {
          void: "any", // avoids conflicts with Prettier
          normal: "always",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: "latest",
  },
  env: {
    browser: true,
    node: true,
  },
};
