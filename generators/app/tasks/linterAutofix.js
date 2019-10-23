const runCommand = require('./runCommand');

module.exports = function linterAutofix() {
  return runCommand({
    command: ['npm', ['run', 'lint-fix'], { cwd: `${process.cwd()}/${this.projectName}` }],
    loadingMessage: 'Running linter autofix',
    successMessage: 'Linter autofix ready!',
    failureMessage: 'Linter autofix failed!',
    options: this.options
  });
};
