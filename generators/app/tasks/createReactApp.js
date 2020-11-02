const runCommand = require('./runCommand');

module.exports.installCRA = function installCRA() {
  return runCommand({
    command: ['npm', ['install', '--global', 'create-react-app@^3.0.0']],
    loadingMessage: 'Installing create-react-app',
    successMessage: 'create-react-app installed successfully',
    failureMessage: 'create-react-app installation failed',
    context: this.options
  });
};

module.exports.runCRA = function runCRA() {
  return runCommand({
    command: ['create-react-app', [this.projectName, '--scripts-version=react-scripts@^3.0.0']],
    loadingMessage: 'Creating app with create-react-app',
    successMessage: 'Created app with create-react-app successfully',
    failureMessage: 'App creation with create-react-app failed',
    context: this.options
  });
};
