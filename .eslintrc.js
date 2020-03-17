module.exports = {
  extends: ['wolox', 'wolox-react', 'wolox-typescript'],
  parser: '@typescript-eslint/parser',
  rules: {
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/no-var-requires': 'off'
  }
};
