const fs = require('fs');
const { exec } = require('child_process');
const { spawn, spawnSync } = require('child_process');

const argv = require('minimist')(process.argv.slice(2));

const { error, success, validateEnvs } = require('./utils');

const env = argv._[0];

const gzip = argv._[1];

validateEnvs(env);

if (!fs.existsSync('aws.js')) {
  error("aws.js file doesn't exist in the root directory");
  process.exit(1);
}

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
  const getDeployParams = deployParams => {
    if (gzip) {
      return [...deployParams, '-g', 'gzip'];
    }
    return deployParams;
  };

  const build = spawn('npm run build', [env], { stdio: 'inherit', shell: true });

  build.on('close', code => {
    if (code !== 0) {
      error(`Failed to build with code ${code}`);
      process.exit(1);
    }
    const deployParams = ['--env', env];
    if (gzip) {
      spawnSync('npm run gzip', { stdio: 'inherit', shell: true });
    }
    success(`Build successful, deploying to environment '${env}'`);
    spawn('aws-deploy', getDeployParams(deployParams), { stdio: 'inherit', shell: true });
  });
});
