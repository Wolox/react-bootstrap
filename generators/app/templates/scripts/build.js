const { spawn } = require('child_process');

const argv = require('minimist')(process.argv.slice(2));

const { success, validateEnvs } = require('./utils');

const env = argv._[0];

validateEnvs(env);

success(`Building '${env}'`);

spawn(
  `node ./node_modules/env-cmd/bin/env-cmd.js -f ./.env.${env} ./node_modules/@rescripts/cli/bin/rescripts.js build`,
  {
    stdio: 'inherit',
    shell: true
  }
);
