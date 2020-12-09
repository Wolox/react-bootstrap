module.exports = {
  extends: ['wolox', 'wolox-react', '@wolox/eslint-config-typescript'],
  rules: {
    'import/order': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/no-var-requires': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
