const { OPTIONAL_DEPENDENCIES } = require('./constants');

/* THIS FILE CONTAINS THE PROMPTS THAT WILL BE SHOWN TO THE USER EACH TIME THE GENERATOR IS EXECUTED */
module.exports = [
  {
    type: 'input',
    name: 'projectName',
    message: 'Your Project name',
    default: 'my-project',
    required: true,
    validate: val =>
      String(val).match(/^[a-z][-_0-9a-z]*$/)
        ? true
        : `${val} is not a valid name for a project. Please use a valid identifier name (alphanumeric).`
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
    message: 'Enter your repo url in order to clone with SSH',
    required: true,
    validate: val =>
      String(val).match(/(?:git|ssh|https?|git@[-\w.]+):(\/\/)?(.*?)(\.git)(\/?|#[-\d\w._]+?)$/)
        ? true
        : `${val} is not a valid url. Please enter a valid one.`
  },
  {
    type: 'checkbox',
    name: 'features',
    message: 'Choose the features you want to add to your project',
    choices: Object.keys(OPTIONAL_DEPENDENCIES),
    filter: values =>
      values.reduce((answer, val) => {
        answer[val] = true;

        return answer;
      }, {})
  }
];
