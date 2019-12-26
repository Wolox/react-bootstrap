const copyAllFiles = require('./copyAllFiles');

const CleanGenerator = {
  prompting: () => Promise.resolve(),
  configuring: () => Promise.resolve(),
  writing() {
    return Promise.resolve().then(copyAllFiles.bind(this));
  }
};

module.exports = CleanGenerator;
