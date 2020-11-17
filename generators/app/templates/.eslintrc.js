module.exports = {
  extends: ['wolox-react', '@wolox/eslint-config-typescript'],
  parser: '@typescript-eslint/parser',
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: ['typeParameter'],
        format: ['PascalCase']
      }
    ]
  }
};
