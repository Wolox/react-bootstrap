module.exports = {
  extends: ['wolox-react', '@wolox/eslint-config-typescript'],
  parserOptions: {
    project: './tsconfig.json'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
