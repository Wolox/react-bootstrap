const runCommand = require('./runCommand');

function npmInstall(projectName, deps, options, dev) {
  const npmArgs = dev ? ['install', '-D'].concat(deps) : ['install'].concat(deps);

  return runCommand({
    command: ['npm', npmArgs, { cwd: `${process.cwd()}/${projectName}` }],
    loadingMessage: `Installing ${dev ? 'dev dependencies' : 'dependencies'}`,
    successMessage: `${dev ? 'Dev dependencies' : 'Dependencies'} ready!`,
    failureMessage: `${
      dev ? 'Dev dependencies' : 'Dependencies'
    } installation failed. Turn verbose mode on for detailed logging`,
    context: options
  });
}

module.exports = function installDependencies({ dependencies = [], devDependencies = [] }) {
  return npmInstall(this.projectName, dependencies, { verbose: this.options.verbose })
    .then(() => npmInstall(this.projectName, devDependencies, { verbose: this.options.verbose }, true))
    .catch(() => {
      process.exit(1);
    });
};
