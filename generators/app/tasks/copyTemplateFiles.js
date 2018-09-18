const mkdirp = require('mkdirp');

const {
  FILES,
  TEMPLATE_FILES,
  LINTER_PATH,
  LOCAL_STORAGE_FILE,
  FLOWCONFIG_PATH,
  REDUX_COMPONENTS
} = require('../constants');

const { copyTpl, copy, copyEjsTpl } = require('./utils');

module.exports = function copyTemplateFiles() {
  const bindedCopy = copy.bind(this);
  const bindedCopyTpl = copyTpl.bind(this);
  const bindedCopyEjsTpl = copyEjsTpl.bind(this);

  FILES.forEach(path => bindedCopy(path, path, null, { projectName: this.projectName }));

  TEMPLATE_FILES.forEach(path => bindedCopyEjsTpl(path));

  mkdirp(this.destinationPath(`${this.projectName}/src/app/assets/`));

  if (this.features.flow) {
    bindedCopy(FLOWCONFIG_PATH.src, FLOWCONFIG_PATH.destination);
  }

  if (this.features.redux) {
    REDUX_COMPONENTS.forEach(path => bindedCopy(path, path, null, { projectName: this.projectName }));
  }

  bindedCopy(LINTER_PATH.src, LINTER_PATH.destination);

  bindedCopyTpl('public/_index.html', 'public/index.html', {
    title: this.projectName
  });

  bindedCopyTpl(LOCAL_STORAGE_FILE, LOCAL_STORAGE_FILE, {
    projectName: this.projectName
  });

  bindedCopyTpl(LINTER_PATH.src, LINTER_PATH.destination, {
    flow: this.features.flow
  });
};
