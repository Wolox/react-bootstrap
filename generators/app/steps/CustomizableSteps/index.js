const installDependencies = require('../../tasks/installDependencies');

const copyAllFiles = require('./copyFiles');
const { DEPENDENCIES, DEV_DEPENDENCIES } = require('./constants');
const { CUSTOMIZED_PROMPTS } = require('./prompts');

const CustomizableGenerator = {
  prompting() {
    return this.prompt(CUSTOMIZED_PROMPTS);
  },
  async configuring() {
    await installDependencies.bind(this)({ dependencies: DEPENDENCIES, devDependencies: DEV_DEPENDENCIES });
  },
  writing() {
    return Promise.resolve().then(copyAllFiles.bind(this));
  }
};

module.exports = CustomizableGenerator;
