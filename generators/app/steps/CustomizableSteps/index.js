const installDependencies = require('../../tasks/installDependencies');

const copyAllFiles = require('./copyFiles');
const { DEPENDENCIES, DEV_DEPENDENCIES } = require('./constants');

const CustomizableGenerator = {
  prompting() {
    return Promise.resolve();
  },
  configuring() {
    return installDependencies.bind(this)({ dependencies: DEPENDENCIES, devDependencies: DEV_DEPENDENCIES });
  },
  writing() {
    return copyAllFiles.bind(this);
  }
};

module.exports = CustomizableGenerator;
