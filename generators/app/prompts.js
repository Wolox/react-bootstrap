const { BOOTSTRAP_TYPES } = require('./constants');
const { projectNameValidation } = require('./utils');

module.exports.MAIN_PROMPTS = [
  {
    type: 'input',
    name: 'projectName',
    message: 'Your Project name',
    default: 'my-project',
    required: true,
    validate: projectNameValidation
  },
  {
    type: 'confirm',
    name: 'configureGit',
    message: 'Do you want to configure a Github repo?',
    required: true
  },
  {
    when: values => values.configureGit,
    type: 'input',
    name: 'repoUrl',
    message: 'Enter your repo SSH url in order to clone with SSH',
    required: true,
    validate: val =>
      String(val).match(/(?:git|ssh|https?|git@[-\w.]+):(\/\/)?(.*?)(\.git)(\/?|#[-\d\w._]+?)$/)
        ? true
        : `${val} is not a valid url. Please enter a valid one.`
  },
  {
    type: 'list',
    name: 'customized',
    message: 'Which type of bootstrap do you want?',
    required: true,
    choices: BOOTSTRAP_TYPES
  }
];
