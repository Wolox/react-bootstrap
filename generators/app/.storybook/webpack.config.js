
const path = require('path');

const addCamelCaseToCSSModulesByHarry = (config) => {
  const cssRule = config.module.rules.find(rule => String(rule.test) === `${path.sep}\\.module\\.(scss|sass)$${path.sep}`);
  cssRule.use.forEach(attribute => {
    attribute.options && (attribute.options.camelCase = true);
  })
  return config;
};

module.exports = baseConfig => addCamelCaseToCSSModulesByHarry(baseConfig);
