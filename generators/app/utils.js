function checkIfFsIsBinded(fs) {
  if (!fs) {
    throw new Error('File utils functions needs to be binded to the generator context');
  }
}

function copy(src, des) {
  checkIfFsIsBinded(this.fs);
  this.fs.copy(this.templatePath(src), this.destinationPath(`${this.projectName}/${des}`));
}

function copyEjsTpl(filepath) {
  checkIfFsIsBinded(this.fs);
  const filepathWithoutExtension = filepath.substring(0, filepath.lastIndexOf('.'));
  const templatePath = `${filepathWithoutExtension}.ejs`;

  this.fs.copyTpl(
    this.templatePath(...templatePath.split('/')),
    this.destinationPath(this.projectName, ...filepath.split('/')),
    { projectName: this.projectName, features: { ...this.features, customized: this.customized } }
  );
}

function deleteFile(src) {
  checkIfFsIsBinded(this.fs);
  this.fs.delete(this.destinationPath(`${this.projectName}/${src}`));
}

module.exports.projectNameValidation = function projectNameValidation(val) {
  checkIfFsIsBinded(this.fs);
  switch(val){
    case !String(val).match(/^[a-z][-_0-9a-z]*$/):
      return `${val} is not a valid name for a project. Please use a valid identifier name (alphanumeric).`;
    case this.fs.existsSync(val):
      return `${val} already exists in this directory. Please use another name or delete the other directory.`;
    default:
      return true;
  }
};

module.exports.copyTpl = function copyTpl(src, des, temp) {
  checkIfFsIsBinded(this.fs);
  this.fs.copyTpl(this.templatePath(src), this.destinationPath(`${this.projectName}/${des}`), temp);
};

module.exports.deleteFiles = function deleteFiles(files) {
  const bindedDeleteFile = deleteFile.bind(this);

  files.forEach(src => bindedDeleteFile(src));
};

module.exports.copyFiles = function copyFiles(files) {
  const bindedCopy = copy.bind(this);

  files.forEach(path => bindedCopy(path, path));
};

module.exports.copyFilesToDestination = function copyFilesToDestination(files) {
  const bindedCopy = copy.bind(this);

  files.forEach(({ src, destination }) => bindedCopy(src, destination));
};

module.exports.copyTemplateFiles = function copyTemplateFiles(files) {
  const bindedCopyEjsTpl = copyEjsTpl.bind(this);

  files.forEach(path => bindedCopyEjsTpl(path));
};
