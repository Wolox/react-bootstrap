const runCommand = require('./runCommand');

module.exports.gitInitiation = function gitInitiation() {
  return runCommand({
    command: ['git', ['clone', this.repoUrl, this.projectName]],
    loadingMessage: `Clonning repository into ${this.projectName}`,
    successMessage: 'Repository cloned successfully',
    failureMessage: 'Repository clonning has failed'
  }).then(() =>
    runCommand({
      command: ['rm', ['README.md'], { cwd: `${process.cwd()}/${this.projectName}` }],
      loadingMessage: 'Removing CRA README.md',
      successMessage: 'CRA README.md removed successfully',
      failureMessage: 'CRA README.md removing failed'
    })
  );
};

module.exports.configGit = function configGit() {
  return runCommand({
    command: ['git', ['add', '--all'], { cwd: `${process.cwd()}/${this.projectName}` }],
    loadingMessage: 'Adding all files to commit',
    successMessage: 'All files added successfully',
    failureMessage: 'Files additions has failed'
  })
    .then(() =>
      runCommand({
        command: [
          'git',
          ['commit', '-m', 'Initial bootstrap commit'],
          { cwd: `${process.cwd()}/${this.projectName}` }
        ],
        loadingMessage: 'Commiting all files',
        successMessage: 'All files commited successfully',
        failureMessage: 'Files commit has failed'
      })
    )
    .then(() =>
      runCommand({
        command: [
          'git',
          ['push', 'origin', 'master:repository-initiation'],
          { cwd: `${process.cwd()}/${this.projectName}` }
        ],
        loadingMessage: 'Pushing all files to repository',
        successMessage: 'All files pushed successfully',
        failureMessage: 'Files push has failed'
      })
    );
};
