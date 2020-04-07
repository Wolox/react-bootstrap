const installDependencies = require('../../tasks/installDependencies');

const copyAllFiles = require('./copyFiles');
const { DEPENDENCIES, DEV_DEPENDENCIES, OPTIONAL_DEPENDENCIES } = require('./constants');

const CustomizableGenerator = {
  prompting() {
    // TODO: When optional dependencies are required, add them here.
    return Promise.resolve();
  },
  configuring() {
    const dependencies = [...DEPENDENCIES];
    const devDependencies = [...DEV_DEPENDENCIES];
    if (this.features) {
      Object.keys(this.features).forEach(option => {
        const optionalDeps = OPTIONAL_DEPENDENCIES[option].dependencies || [];
        const optionalDevDeps = OPTIONAL_DEPENDENCIES[option].devDependencies || [];

        dependencies.push(...optionalDeps);
        devDependencies.push(...optionalDevDeps);
      });
    }
    return installDependencies.bind(this)({ dependencies, devDependencies });
  },
  writing() {
    return Promise.resolve().then(copyAllFiles.bind(this));
  }
};

module.exports = CustomizableGenerator;
