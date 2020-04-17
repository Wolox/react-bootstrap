const { copyTpl, copyFiles, copyTemplateFiles, copyFilesToDestination } = require('../utils');
const { FILES, TEMPLATE_FILES, CI_CONFIG_FILE, FILES_TO_DESTINATION } = require('../constants');

module.exports = function copyAllFiles() {
  const bindedCopyTpl = copyTpl.bind(this);

  copyFiles.bind(this)(FILES);
  copyTemplateFiles.bind(this)(TEMPLATE_FILES);
  copyFilesToDestination.bind(this)(FILES_TO_DESTINATION);

  bindedCopyTpl(CI_CONFIG_FILE, CI_CONFIG_FILE, {
    projectName: this.projectName
  });

  bindedCopyTpl('public/_index.html', 'public/index.html', {
    title: this.projectName,
    ga: this.ga
  });
};
