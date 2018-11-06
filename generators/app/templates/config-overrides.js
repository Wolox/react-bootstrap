const path = require('path');

const createLoaderMatcher = loader => rule =>
  rule.loader && rule.loader.indexOf(`${path.sep}${loader}${path.sep}`) !== -1; //eslint-disable-line

const fileLoaderMatcher = createLoaderMatcher('css-loader');

const addCamelCaseToCSSModules = config => {
  const fileLoaders = config.module.rules.find(rule => rule.oneOf).oneOf;

  fileLoaders.forEach(loader => {
    if (loader.test && loader.use) {
      loader.use.forEach(use => {
        if (fileLoaderMatcher(use) && use.options.modules) {
          use.options.camelCase = true;
        }
      });
    }
  });
};

module.exports = function override(config) {
  addCamelCaseToCSSModules(config);

  return config;
};
