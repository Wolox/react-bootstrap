const runCommand = require('./runCommand');

function npmInstall(projectName, npmDepsArgs, options, title) {
  return runCommand({
    command: ['npm', npmDepsArgs, { cwd: `${process.cwd()}/${projectName}` }],
    loadingMessage: `Installing ${title}`,
    successMessage: `${title} ready!`,
    failureMessage: `${title} installation failed. Turn verbose mode on for detailed logging`,
    context: options
  })
}

function getNpmDependencyArgs(dependencies, isDevelopment, isExact) {
  const arguments = ['install'];
  if (isDevelopment) arguments.push('-D');
  if (isExact) arguments.push('--save-exact');
  arguments.push(...dependencies)
  return arguments;
}

function installAllDeps(projectName, deps, options, dev) {
  const exactDeps = [];
  const latestDeps = [];
  deps.forEach(dep => {
    if (dep.includes('^')) {
      latestDeps.push(dep);
    } else {
      exactDeps.push(dep);
    }
  });
  const type = dev ? 'dev ' : '';
  const npmLatestArgs = getNpmDependencyArgs(deps, dev, false);
  return npmInstall(projectName, npmLatestArgs, options, `Latest ${type}dependencies`).then(() => {
    const npmExactArgs = getNpmDependencyArgs(deps, dev, true);
    return npmInstall(projectName, npmExactArgs, options, `Exact ${type}dependencies`)
  });
}

module.exports = function installDependencies({ dependencies = [], devDependencies = [] }) {
  return installAllDeps(this.projectName, dependencies, { verbose: this.options.verbose })
    .then(() => installAllDeps(this.projectName, devDependencies, { verbose: this.options.verbose }, true))
    .catch(() => {
      process.exit(1);
    });
};
