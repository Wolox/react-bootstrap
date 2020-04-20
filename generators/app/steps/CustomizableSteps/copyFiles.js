const mkdirp = require('mkdirp');

const { copyFiles, deleteFiles, copyTemplateFiles } = require('../../utils');

const { FILES, FILES_TO_DELETE, TEMPLATE_FILES, OPTIONAL_COMPONENTS } = require('./constants');

module.exports = function copyAllFiles() {
  mkdirp(this.destinationPath(`${this.projectName}/src/app/assets/`));

  this.log('Deleting default CRA files...');
  deleteFiles.bind(this)(FILES_TO_DELETE);

  this.log('Adding files...');
  copyFiles.bind(this)(FILES);
  const componentPaths = Object.keys(this.optionalComponents).map(key => OPTIONAL_COMPONENTS[key]);
  copyFiles.bind(this)(componentPaths);
  copyTemplateFiles.bind(this)(TEMPLATE_FILES);
};
