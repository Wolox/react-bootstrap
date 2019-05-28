const { exec } = require('child_process');
const { spawn } = require('child_process');

const argv = require('minimist')(process.argv.slice(2));

const { error, success, validateArgs } = require('./utils');

const env = argv._[0];

validateArgs(env);

exec('git rev-parse --abbrev-ref HEAD', (e, stdout, stderr) => {
  if (stderr || e) {
    error(`Error getting current branch: ${stderr || e}`);
    process.exit(1);
  }

  const currentBranch = stdout.trim();

  if (env !== currentBranch) {
    error(`Environment ${env} does not match current branch ${currentBranch}`);
    process.exit(1);
  }

  const build = spawn('npm run build', [env], { stdio: 'inherit', shell: true });

  build.on('close', code => {
    if (code !== 0) {
      error(`Failed to build with code ${code}`);
      process.exit(1);
    }

    success(`Build successful, deploying to environment '${env}'`);
    spawn('aws-deploy', ['--env', env], { stdio: 'inherit', shell: true });
  });
});
