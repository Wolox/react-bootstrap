module.exports.copy = function copy(src, des) {
  if (!this.fs) {
    throw new Error('File utils functions needs to be binded to the generator context');
  }

  this.fs.copy(this.templatePath(src), this.destinationPath(`${this.projectName}/${des}`));
};

module.exports.copyTpl = function copyTpl(src, des, temp) {
  if (!this.fs) {
    throw new Error('File utils functions needs to be binded to the generator context');
  }

  this.fs.copyTpl(this.templatePath(src), this.destinationPath(`${this.projectName}/${des}`), temp);
};

module.exports.copyEjsTpl = function copyEjsTpl(filepath) {
  if (!this.fs) {
    throw new Error('File utils functions needs to be binded to the generator context');
  }

  const filepathWithoutExtension = filepath.substring(0, filepath.lastIndexOf('.'));
  const templatePath = `${filepathWithoutExtension}.ejs`;

  this.fs.copyTpl(
    this.templatePath(...templatePath.split('/')),
    this.destinationPath(this.projectName, ...filepath.split('/')),
    { projectName: this.projectName, features: this.features }
  );
};
