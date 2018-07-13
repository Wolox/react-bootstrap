const OPTIONAL_DEPENDENCIES = require('./constants').OPTIONAL_DEPENDENCIES;

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
    type: 'input',
    name: 'repoUrl',
    message: 'What is the git repo url for this project?',
    required: true
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
