const runCommand = require('./runCommand');

module.exports.gitInitiation = function gitInitiation() {
  return runCommand({
    command: ['git', ['clone', this.repoUrl, this.projectName]],
    loadingMessage: `Cloning repository into ${this.projectName}`,
    successMessage: 'Repository cloned successfully',
    failureMessage: 'Repository cloning has failed, it may not exist'
  })
    .catch((error) => {
      this.handleError(error.failureMessage);
    })
    .then(() =>
      runCommand({
        command: ['rm', ['README.md'], { cwd: `${process.cwd()}/${this.projectName}` }],
        loadingMessage: 'Removing CRA README.md',
        successMessage: 'CRA README.md removed successfully',
        failureMessage: 'CRA README.md removing failed, no README.md found'
        // catching with an empty function to ignore the error
        // eslint-disable-next-line no-empty-function, @typescript-eslint/no-empty-function
      }).catch(() => {})
    );
};

module.exports.configGit = function configGit() {
  return runCommand({
    command: [
      'git',
      ['config', 'user.name', this.gitUserName],
      { cwd: `${process.cwd()}/${this.projectName}` }
    ],
    loadingMessage: 'Setting git username',
    successMessage: `Git username set: ${this.gitUserName}`,
    failureMessage: 'Git user config failed'
  })
    .then(() =>
      runCommand({
        command: [
          'git',
          ['config', 'user.email', this.gitEmail],
          { cwd: `${process.cwd()}/${this.projectName}` }
        ],
        loadingMessage: 'Setting git user email',
        successMessage: `Git user email set: ${this.gitEmail}`,
        failureMessage: 'Git mail config failed'
      })
    )
    .then(() =>
      runCommand({
        command: ['git', ['checkout', '-b', 'master'], { cwd: `${process.cwd()}/${this.projectName}` }],
        loadingMessage: 'Creating master branch',
        successMessage: '"master" branch created successfully',
        failureMessage: 'Failed to create master branch'
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
        command: ['git', ['push', '-f', 'origin', 'master'], { cwd: `${process.cwd()}/${this.projectName}` }],
        loadingMessage: 'Pushing all files to repository',
        successMessage: 'All files pushed successfully',
        failureMessage: 'Files push has failed'
      })
    );
};

module.exports.configGitNoRepo = function configGitNoRepo() {
  return runCommand({
    command: ['git', ['add', '--all'], { cwd: `${process.cwd()}/${this.projectName}` }],
    loadingMessage: 'Adding all files to commit',
    successMessage: 'All files added successfully',
    failureMessage: 'Files additions has failed'
  }).then(() =>
    runCommand({
      command: [
        'git',
        ['commit', '--amend', '-m', 'Initial react-bootstrap commit'],
        { cwd: `${process.cwd()}/${this.projectName}` }
      ],
      loadingMessage: 'Commiting all files',
      successMessage: 'All files commited successfully',
      failureMessage: 'Files commit has failed'
    })
  );
};
