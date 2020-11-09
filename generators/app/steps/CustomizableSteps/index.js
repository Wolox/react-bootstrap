// const installDependencies = require('../../tasks/installDependencies');

const copyAllFiles = require('./copyFiles');
// const { DEPENDENCIES, DEV_DEPENDENCIES } = require('./constants');

const CustomizableGenerator = {
  prompting() {
    return Promise.resolve();
  },
  configuring() {
    return Promise.resolve();
    // await installDependencies.bind(this)({ dependencies: DEPENDENCIES, devDependencies: DEV_DEPENDENCIES });
  },
  writing() {
    return Promise.resolve().then(copyAllFiles.bind(this));
  }
};

module.exports = CustomizableGenerator;
