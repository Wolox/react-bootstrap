const path = require('path');

const addCamelCaseToCSSModules = config => {
  const cssRule = config.module.rules.find(rule => String(rule.test) === `${path.sep}\\.module\\.(scss|sass)$${path.sep}`);
  cssRule.use.forEach(attribute => {
    attribute.options && (attribute.localsConvention = 'camelCase');
  })
  return config;
};

module.exports = addCamelCaseToCSSModules;
