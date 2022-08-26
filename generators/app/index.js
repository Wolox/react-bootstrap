const Generator = require('yeoman-generator');
require('colors');

const { createPackageJson } = require('./tasks/fileCreators');
const copyAllFiles = require('./tasks/copyAllFiles');
const installDependencies = require('./tasks/installDependencies');
const linterAutofix = require('./tasks/linterAutofix');
const { MAIN_PROMPTS } = require('./prompts');
const { KICKOFF_MESSAGE, DEV_DEPENDENCIES, DEPENDENCIES } = require('./constants');
const { installCRA, runCRA } = require('./tasks/createReactApp');
const { gitInitiation, configGit, configGitNoRepo } = require('./tasks/gitConfig');
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

    this.handleError = (error) => {
      /* eslint-disable no-console */
      if (error) {
        console.error('\nFound the following error:'.red);
        console.error(error.red);
      }
      console.error('Something happened'.red);
      console.error("If you're not sure what happened, you may run the script with the `-v` flag".yellow);
      this.env.error();
      /* eslint-enable no-console */
    };
  }

  initializing() {
    this.log(KICKOFF_MESSAGE);
  }

  async prompting() {
    const mainAnswers = await this.prompt(MAIN_PROMPTS);
    // Ignore clean for now
    mainAnswers.customized = true;
    this.steps = mainAnswers.customized ? CustomizableGenerator : CleanGenerator;
    Object.keys(mainAnswers).forEach((answerKey) => (this[answerKey] = mainAnswers[answerKey]));

    const answers = await this.steps.prompting.bind(this)();
    if (answers) {
      Object.keys(answers).forEach((answerKey) => (this[answerKey] = answers[answerKey]));
    }
  }

  async configuring() {
    if (this.configureGit) {
      await gitInitiation.bind(this)();
    }
    await installCRA.bind(this)();
    await runCRA.bind(this)();
    await installDependencies.bind(this)({
      dependencies: DEPENDENCIES,
      devDependencies: DEV_DEPENDENCIES
    });
    await this.steps.configuring.bind(this)();
  }

  writing() {
    this.log('Copying base project files...');
    return Promise.resolve()
      .then(createPackageJson.bind(this))
      .then(copyAllFiles.bind(this))
      .then(this.steps.writing.bind(this));
  }

  install() {
    this.log('Installing...');
    return new Promise((resolve) => {
      this.spawnCommand('npm', ['install'], { cwd: `${process.cwd()}/${this.projectName}` }).on('close', () =>
        resolve()
      );
    });
  }

  async end() {
    this.log('Ending...');
    await linterAutofix
      .bind(this)()
      // catching with an empty function to ignore the error
      // eslint-disable-next-line no-empty-function, @typescript-eslint/no-empty-function
      .catch(() => {});

    if (this.configureGit) {
      await configGit.bind(this)();
    } else {
      // TODO: Not working because at this point the is not initialized
      // await configGitNoRepo.bind(this)();
    }
  }
}

module.exports = GeneratorReact;
