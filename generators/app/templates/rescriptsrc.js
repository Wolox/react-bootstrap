const path = require('path');
const { editWebpackPlugin } = require('@rescripts/utilities');

const customEslintConfig = config => {
  const edited = editWebpackPlugin(
    p => {
      p.options.baseConfig.extends = undefined;
      p.options.useEslintrc = true;
      p.options.emitWarning = true;
      p.options.ignore = true;
      return p;
    },
    'ESLintWebpackPlugin',
    config
  );
  return edited;
};

const createLoaderMatcher = loader => rule =>
  rule.loader && rule.loader.indexOf(`${path.sep}${loader}${path.sep}`) !== -1;

const oneOfFileLoaders = config => config.module.rules.find(rule => rule.oneOf).oneOf;

const cssLoaderMatcher = createLoaderMatcher('css-loader');

const addCamelCaseToCSSModules = config => {
  const fileLoaders = oneOfFileLoaders(config);

  fileLoaders.forEach(loader => {
    if (loader.test && loader.use && loader.use.constructor === Array) {
      loader.use.forEach(use => {
        if (cssLoaderMatcher(use) && use.options.modules) {
          use.options.modules.exportLocalsConvention = 'camelCase';
        }
      });
    }
  });
};

const customConfig = config => {
  addCamelCaseToCSSModules(config);
  return customEslintConfig(config);
};

module.exports = [customConfig];
