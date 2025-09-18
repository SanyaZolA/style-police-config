module.exports = {
  extends: ['airbnb', 'prettier'],
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};
