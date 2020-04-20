const { OPTIONAL_COMPONENTS } = require('./constants');

module.exports.CUSTOMIZED_PROMPTS = [
  {
    type: 'checkbox',
    name: 'optionalComponents',
    message: 'Choose the components you want to add to your project',
    choices: Object.keys(OPTIONAL_COMPONENTS),
    filter: values =>
      values.reduce((answer, val) => {
        answer[val] = true;

        return answer;
      }, {})
  }
];
