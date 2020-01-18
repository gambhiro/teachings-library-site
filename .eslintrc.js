module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {},
  extends: [
    '@nuxtjs',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:vue/recommended',
    'plugin:nuxt/recommended',
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/vue'
  ],
  plugins: [
    '@typescript-eslint',
    'prettier',
    'vue'
  ],
  // add your custom rules here
  rules: {
    'max-len': ['error', {'code': 100, 'ignoreUrls': true}],
    'nuxt/no-cjs-in-config': 'off',
    'no-console': 'off',
    'space-before-function-paren': 'off',
    'vue/html-self-closing': 'off',
    'vue/no-v-html': 'off',
    'vue/html-indent': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off'
  }
}
