const rewireWolox = require('react-app-rewire-wolox');

module.exports = function override(config, env) {
  return rewireWolox(config, env);
};
