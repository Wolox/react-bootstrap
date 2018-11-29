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
        command: ['mv', ['README.md', 'README_TEMP.md'], { cwd: `${process.cwd()}/${this.projectName}` }],
        loadingMessage: 'Renaming README.md',
        successMessage: 'README.md renamed successfully',
        failureMessage: 'Renaming of README.md has failed'
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
        loadingMessage: 'Removing default README.md',
        successMessage: 'Default README.md removed successfully',
        failureMessage: 'Removing of default README.md has failed'
      })
    )
    .then(() =>
      runCommand({
        command: ['mv', ['README_TEMP.md', 'README.md'], { cwd: `${process.cwd()}/${this.projectName}` }],
        loadingMessage: 'Renaming README_TEMP.md',
        successMessage: 'Template README_TEMP.md renamed successfully',
        failureMessage: 'Renaming of template README_TEMP.md has failed'
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
