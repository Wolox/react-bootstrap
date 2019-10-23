const mkdirp = require('mkdirp');

const { copyFiles, deleteFiles, copyFilesToDestination, copyTemplateFiles } = require('../../utils');

const { FILES, FILES_TO_DELETE, TEMPLATE_FILES, WITHOUT_SEAMLESS_FILES } = require('./constants');

module.exports = function copyAllFiles() {
  mkdirp(this.destinationPath(`${this.projectName}/src/app/assets/`));

  deleteFiles.bind(this)(FILES_TO_DELETE);
  copyFiles.bind(this)(FILES);
  copyTemplateFiles.bind(this)(TEMPLATE_FILES);

  if (!this.features['seamless-immutable']) {
    copyFilesToDestination.bind(this)([WITHOUT_SEAMLESS_FILES]);
  }
};
