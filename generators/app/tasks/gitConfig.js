const runCommand = require('./runCommand');

module.exports = function configGit() {
  return runCommand({
    command: ['git', ['init', `./${this.projectName}`]],
    loadingMessage: 'Initiatialization of Git configuration',
    successMessage: 'Git configuration initiated successfully',
    failureMessage: 'Git configuration initialization has failed'
  })
    .then(() =>
      runCommand({
        command: [
          'git',
          ['remote', 'add', 'origin', this.repoUrl],
          { cwd: `${process.cwd()}/${this.projectName}` }
        ],
        loadingMessage: 'Adding remote origin url',
        successMessage: 'Remote origin url added successfully',
        failureMessage: 'Remote origin url addition has failed'
      })
    )
    .then(() =>
      runCommand({
        command: ['git', ['add', '--all'], { cwd: `${process.cwd()}/${this.projectName}` }],
        loadingMessage: 'Adding all files to commit',
        successMessage: 'All files added successfully',
        failureMessage: 'Files additions has failed'
      })
    )
    .then(() =>
      runCommand({
        command: ['git', ['commit', '-m', 'Initial commit'], { cwd: `${process.cwd()}/${this.projectName}` }],
        loadingMessage: 'Commiting all files',
        successMessage: 'All files commited successfully',
        failureMessage: 'Files commit has failed'
      })
    )
    .then(() =>
      runCommand({
        command: ['git', ['push', '-f', 'origin', 'HEAD'], { cwd: `${process.cwd()}/${this.projectName}` }],
        loadingMessage: 'Pushing all files to repository',
        successMessage: 'All files pushed successfully',
        failureMessage: 'Files push has failed'
      })
    );
};
