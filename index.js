module.exports = {
  extends: [
    'airbnb-base',
    'plugin:vue/recommended'
  ],
  rules: {
    'import/extensions': ['error', 'always', {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never'
    }]
  }
}
