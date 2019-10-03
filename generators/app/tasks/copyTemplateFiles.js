const mkdirp = require('mkdirp');

const {
  FILES,
  FILES_TO_DELETE,
  TEMPLATE_FILES,
  CI_CONFIG_FILE,
  LINTER_IGNORE_PATH,
  WITHOUT_SEAMLESS_FILES,
  RESCRIPTS_PATH,
  NPMRC_PATH
} = require('../constants');

const { copyTpl, copy, copyEjsTpl, deleteFiles } = require('./utils');

module.exports = function copyTemplateFiles() {
  const bindedCopy = copy.bind(this);
  const bindedCopyTpl = copyTpl.bind(this);
  const bindedCopyEjsTpl = copyEjsTpl.bind(this);
  const bindedDeleteFiles = deleteFiles.bind(this);

  FILES_TO_DELETE.forEach(src => bindedDeleteFiles(src));

  FILES.forEach(path => bindedCopy(path, path));

  TEMPLATE_FILES.forEach(path => bindedCopyEjsTpl(path));

  mkdirp(this.destinationPath(`${this.projectName}/src/app/assets/`));

  if (!this.features['seamless-immutable']) {
    bindedCopy(WITHOUT_SEAMLESS_FILES.src, WITHOUT_SEAMLESS_FILES.destination);
  }

  bindedCopy(LINTER_IGNORE_PATH.src, LINTER_IGNORE_PATH.destination);
  bindedCopy(RESCRIPTS_PATH.src, RESCRIPTS_PATH.destination);
  bindedCopy(NPMRC_PATH.src, NPMRC_PATH.destination);

  bindedCopyTpl(CI_CONFIG_FILE, CI_CONFIG_FILE, {
    projectName: this.projectName
  });

  bindedCopyTpl('public/_index.html', 'public/index.html', {
    title: this.projectName
  });
};
