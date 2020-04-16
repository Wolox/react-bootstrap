const mkdirp = require('mkdirp');

const { copyFiles, deleteFiles, copyTemplateFiles } = require('../../utils');

const { FILES, FILES_TO_DELETE, TEMPLATE_FILES } = require('./constants');

module.exports = function copyAllFiles() {
  mkdirp(this.destinationPath(`${this.projectName}/src/app/assets/`));

  console.log('Deleting default CRA files...');
  deleteFiles.bind(this)(FILES_TO_DELETE);

  console.log('Adding files...');
  copyFiles.bind(this)(FILES);
  copyTemplateFiles.bind(this)(TEMPLATE_FILES);
};
