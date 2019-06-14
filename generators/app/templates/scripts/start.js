const { spawn } = require('child_process');

const argv = require('minimist')(process.argv.slice(2));

const { success, validateArgs } = require('./utils');

const env = argv._[0];

validateArgs(env);

success(`Starting '${env}'`);

spawn(
  `./node_modules/env-cmd/bin/env-cmd.js -f ./.env.${env} ./node_modules/@rescripts/cli/bin/rescripts.js start`,
  {
    stdio: 'inherit',
    shell: true
  }
);
