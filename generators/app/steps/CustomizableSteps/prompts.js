const { OPTIONAL_DEPENDENCIES } = require('./constants');

module.exports.CUSTOMIZED_PROMPTS = [
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
