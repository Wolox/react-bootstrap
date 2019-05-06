const fs = require('fs');

const chalk = require('chalk');

const error = errorString => console.error(chalk.red(errorString));
const success = successString => console.log(chalk.green(successString));

const VALID_ENVS = ['development', 'stage', 'master'];

module.exports.validateArgs = env => {
  if (!VALID_ENVS.includes(env)) {
    error(`Environment ${env} is not a valid environment. Valid environments are '${VALID_ENVS.join(', ')}'`);
    process.exit(1);
  }

  if (!fs.existsSync(`./.env.${env}`)) {
    error(`.env.${env} file doesn't exist in the root directory`);
    process.exit(1);
  }

  if (!fs.existsSync('aws.js')) {
    error("aws.js file doesn't exist in the root directory");
    process.exit(1);
  }
};

module.exports.error = error;
module.exports.success = success;
