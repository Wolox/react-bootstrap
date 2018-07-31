module.exports.copy = function copy(src, des) {
  this.fs.copy(this.templatePath(src), this.destinationPath(`${this.projectName}/${des}`));
};

module.exports.copyTpl = function copyTpl(src, des, temp) {
  this.fs.copyTpl(this.templatePath(src), this.destinationPath(`${this.projectName}/${des}`), temp);
};
