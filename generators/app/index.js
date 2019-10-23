const Generator = require('yeoman-generator');
require('colors');

const { createPackageJson, createJSConfig } = require('./tasks/fileCreators');
const copyTemplateFiles = require('./tasks/copyTemplateFiles');
const installDependencies = require('./tasks/installDependencies');
const linterAutofix = require('./tasks/linterAutofix');
const { MAIN_PROMPTS } = require('./prompts');
const { KICKOFF_MESSAGE, DEV_DEPENDENCIES, DEPENDENCIES } = require('./constants');
const { installCRA, runCRA } = require('./tasks/createReactApp');
const { gitInitiation, configGit } = require('./tasks/gitConfig');
const CleanGenerator = require('./steps/CleanSteps');
const CustomizableGenerator = require('./steps/CustomizableSteps');

class GeneratorReact extends Generator {
  constructor(...args) {
    super(...args);

    this.option('verbose', {
      desc: 'Turns on verbose logging',
      alias: 'v',
      type: Boolean,
      default: false
    });

    this.conflicter.force = true;
  }

  handleError(error) {
    /* eslint-disable no-console */
    if (error) {
      console.error('\nFound the following error:'.red);
      console.error(error.red);
    }
    this.env.error();
    console.error("If you're not sure what happened, you may run the script with the `-v` flag".yellow);
    /* eslint-disable no-console */
  }

  initializing() {
    this.log(KICKOFF_MESSAGE);
  }

  async prompting() {
    const mainAnswers = await this.prompt(MAIN_PROMPTS);
    this.steps = mainAnswers.customized ? CustomizableGenerator : CleanGenerator;
    Object.keys(mainAnswers).forEach(answerKey => (this[answerKey] = mainAnswers[answerKey]));

    const answers = await this.steps.prompting.bind(this)();
    if (answers) {
      Object.keys(answers).forEach(answerKey => (this[answerKey] = answers[answerKey]));
    }
  }

  configuring() {
    return Promise.resolve()
      .then(this.configureGit && gitInitiation.bind(this))
      .then(installCRA.bind(this))
      .then(runCRA.bind(this))
      .then(() =>
        installDependencies.bind(this)({
          dependencies: DEPENDENCIES,
          devDependencies: DEV_DEPENDENCIES
        })
      )
      .then(this.steps.configuring.bind(this));
  }

  writing() {
    this.log('Copying base project files...');
    return Promise.resolve()
      .then(createPackageJson.bind(this))
      .then(createJSConfig.bind(this))
      .then(copyTemplateFiles.bind(this))
      .then(this.steps.writing.bind(this));
  }

  install() {
    this.log('Installing...');
    this.installDependencies({
      npm: true,
      bower: false,
      yarn: false
    });
  }

  end() {
    this.log('Ending...');
    return Promise.resolve()
      .then(this.configureGit && configGit.bind(this))
      .then(linterAutofix.bind(this));
  }
}

module.exports = GeneratorReact;
