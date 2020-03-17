module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'typescript-eslint-parser'
  },
  extends: [
    '@nuxtjs',
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    "plugin:vue/essential",
    "@vue/prettier",
    "@vue/typescript"
  ],
  // add your custom rules here
  rules: {
    "prefer-promise-reject-errors": [
      "error",
      { "allowEmptyReject": true }
    ],
  }
}
