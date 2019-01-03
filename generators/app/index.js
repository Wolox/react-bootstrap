const Generator = require('yeoman-generator');

const installDependencies = require('./tasks/installDependencies');
const configPackageJson = require('./tasks/configPackageJson');
const copyTemplateFiles = require('./tasks/copyTemplateFiles');
const { gitInitiation, configGit } = require('./tasks/gitConfig');
const { installCRA, runCRA } = require('./tasks/createReactApp');
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
    if (this.configureGit) {
      configGit.bind(this);
    }
  }
}

module.exports = GeneratorReact;
