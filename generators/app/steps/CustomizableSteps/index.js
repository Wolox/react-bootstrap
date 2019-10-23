const installDependencies = require('../../tasks/installDependencies');

const copyAllFiles = require('./copyTemplateFiles');
const { CUSTOMIZED_PROMPTS } = require('./prompts');
const { DEPENDENCIES, OPTIONAL_DEPENDENCIES } = require('./constants');

const CustomizableGenerator = {
  prompting() {
    return this.prompt(CUSTOMIZED_PROMPTS);
  },
  configuring() {
    const dependencies = [...DEPENDENCIES];
    const devDependencies = [];
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
