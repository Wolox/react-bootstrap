const runCommand = require('./runCommand');

module.exports.gitInitiation = function gitInitiation() {
  return runCommand({
    command: ['mkdir', [this.projectName]],
    loadingMessage: 'Creating project folder',
    successMessage: 'Project folder creater successfully',
    failureMessage: 'Project creation has failed'
  })
    .then(() =>
      runCommand({
        command: ['git', ['init'], { cwd: `${process.cwd()}/${this.projectName}` }],
        loadingMessage: 'Initiatialization of Git configuration',
        successMessage: 'Git configuration initiated successfully',
        failureMessage: 'Git configuration initialization has failed'
      })
    )
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
        command: ['git', ['pull', 'origin', 'master'], { cwd: `${process.cwd()}/${this.projectName}` }],
        loadingMessage: 'Git pull master',
        successMessage: 'Git pull of master successfully',
        failureMessage: 'Git pull of master has failed'
      })
    )
    .then(() =>
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
