const mkdirp = require('mkdirp');

const { FILES, TEMPLATE_FILES, FILES_TO_DELETE, FLOWCONFIG_PATH, REDUX_COMPONENTS } = require('../constants');

const { copyTpl, copy, copyEjsTpl, deleteFiles } = require('./utils');

module.exports = function copyTemplateFiles() {
  const bindedCopy = copy.bind(this);
  const bindedCopyTpl = copyTpl.bind(this);
  const bindedCopyEjsTpl = copyEjsTpl.bind(this);
  const bindedDeleteFiles = deleteFiles.bind(this);

  FILES_TO_DELETE.forEach(src => bindedDeleteFiles(src));

  FILES.forEach(path => bindedCopy(path, path, null, { projectName: this.projectName }));

  TEMPLATE_FILES.forEach(path => bindedCopyEjsTpl(path));

  mkdirp(this.destinationPath(`${this.projectName}/src/app/assets/`));

  if (this.features.flow) {
    bindedCopy(FLOWCONFIG_PATH.src, FLOWCONFIG_PATH.destination);
  }

  if (this.features.redux) {
    REDUX_COMPONENTS.forEach(path => bindedCopy(path, path, null, { projectName: this.projectName }));
  }

  bindedCopyTpl('public/_index.html', 'public/index.html', {
    title: this.projectName
  });
};
