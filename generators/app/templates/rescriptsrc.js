const path = require('path');

const createLoaderMatcher = loader => rule =>
  rule.loader && rule.loader.indexOf(`${path.sep}${loader}${path.sep}`) !== -1; //eslint-disable-line

const oneOfFileLoaders = config => config.module.rules.find(rule => rule.oneOf).oneOf;

const cssLoaderMatcher = createLoaderMatcher('css-loader');

const babelLoaderMatcher = createLoaderMatcher('babel-loader');

const eslintLoaderMatcher = createLoaderMatcher('eslint-loader');

const enableBabelRc = config => {
  const fileLoaders = oneOfFileLoaders(config);

  fileLoaders.forEach(loader => {
    if (babelLoaderMatcher(loader)) {
      loader.options.babelrc = true;
    }
  });
};

const addCamelCaseToCSSModules = config => {
  const fileLoaders = oneOfFileLoaders(config);

  fileLoaders.forEach(loader => {
    if (loader.test && loader.use && loader.use.constructor === Array) {
      loader.use.forEach(use => {
        if (cssLoaderMatcher(use) && use.options.modules) {
          use.options.camelCase = true;
        }
      });
    }
  });
};

const useEslintConfig = config => {
  config.module.rules.forEach(rule => {
    if (rule.use) {
      const eslintUse = rule.use.find(use => eslintLoaderMatcher(use));

      if (eslintUse) {
        eslintUse.options = {
          ...eslintUse.options,
          baseConfig: undefined,
          useEslintrc: true,
          emitWarning: true,
          ignore: true
        };
      }
    }
  });
};

const customConfig = config => {
  useEslintConfig(config);

  addCamelCaseToCSSModules(config);
  enableBabelRc(config);

  return config;
};

module.exports = [customConfig];
