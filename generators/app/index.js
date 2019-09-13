const Generator = require('yeoman-generator');
require('colors');

const installDependencies = require('./tasks/installDependencies');
const configPackageJson = require('./tasks/configPackageJson');
const copyTemplateFiles = require('./tasks/copyTemplateFiles');
const { gitInitiation, configGit } = require('./tasks/gitConfig');
const { installCRA, runCRA } = require('./tasks/createReactApp');
const linterAutofix = require('./tasks/linterAutofix');
const PROMPTS = require('./prompts');
const { KICKOFF_MESSAGE } = require('./constants');

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
      console.error('\nFound the following error:'.yellow);
      console.error(error.red);
    }
    this.env.error();
    console.error("If you're not sure what happened, you may run the script with the `-v` flag".yellow);
    /* eslint-disable no-console */
  }

  initializing() {
    this.log(KICKOFF_MESSAGE);
  }

  prompting() {
    return this.prompt(PROMPTS).then(answers => {
      Object.keys(answers).forEach(answerKey => (this[answerKey] = answers[answerKey]));
    });
  }

  configuring() {
    return Promise.resolve()
      .then(this.configureGit && gitInitiation.bind(this))
      .then(installCRA.bind(this))
      .then(runCRA.bind(this))
      .then(installDependencies.bind(this));
  }

  writing() {
    return Promise.resolve().then(() => {
      this.log('Copying base project files...');
      configPackageJson.bind(this)();
      copyTemplateFiles.bind(this)();
    });
  }

  install() {
    this.installDependencies({
      npm: true,
      bower: false,
      yarn: false
    });
  }

  end() {
    return Promise.resolve()
      .then(this.configureGit && configGit.bind(this))
      .then(linterAutofix.bind(this));
  }
}

module.exports = GeneratorReact;
