function checkIfFsIsBinded(fs) {
  if (!fs) {
    throw new Error('File utils functions needs to be binded to the generator context');
  }
}

module.exports.copy = function copy(src, des) {
  checkIfFsIsBinded(this.fs);
  this.fs.copy(this.templatePath(src), this.destinationPath(`${this.projectName}/${des}`));
};

module.exports.copyTpl = function copyTpl(src, des, temp) {
  checkIfFsIsBinded(this.fs);
  this.fs.copyTpl(this.templatePath(src), this.destinationPath(`${this.projectName}/${des}`), temp);
};

module.exports.copyEjsTpl = function copyEjsTpl(filepath) {
  checkIfFsIsBinded(this.fs);

  const filepathWithoutExtension = filepath.substring(0, filepath.lastIndexOf('.'));
  const templatePath = `${filepathWithoutExtension}.ejs`;

  this.fs.copyTpl(
    this.templatePath(...templatePath.split('/')),
    this.destinationPath(this.projectName, ...filepath.split('/')),
    { projectName: this.projectName, features: this.features }
  );
};

module.exports.deleteFiles = function deleteFiles(src) {
  checkIfFsIsBinded(this.fs);
  this.fs.delete(this.destinationPath(`${this.projectName}/${src}`));
};
