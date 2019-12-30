const { copyFilesToDestination } = require('../../utils');

module.exports = function copyAllFiles() {
  const appTestFiles = {
    src: 'App.test.js',
    destination: 'src/App.test.js'
  };
  copyFilesToDestination.bind(this)([appTestFiles]);
};
