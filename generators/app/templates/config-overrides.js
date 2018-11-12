// Const rewireWolox = require('react-app-rewire-wolox');

const path = require('path');

const createLoaderMatcher = loader => rule =>
  rule.loader && rule.loader.indexOf(`${path.sep}${loader}${path.sep}`) !== -1; //eslint-disable-line

const oneOfFileLoaders = config => config.module.rules.find(rule => rule.oneOf).oneOf;

const cssLoaderMatcher = createLoaderMatcher('css-loader');

const babelLoaderMatcher = createLoaderMatcher('babel-loader');

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
    if (loader.test && loader.use) {
      loader.use.forEach(use => {
        if (cssLoaderMatcher(use) && use.options.modules) {
          use.options.camelCase = true;
        }
      });
    }
  });
};

module.exports = function override(config) {
  addCamelCaseToCSSModules(config);
  enableBabelRc(config);
  /*
   * TODO: Soon..
   * return rewireWolox(config, env);
   */

  return config;
};
