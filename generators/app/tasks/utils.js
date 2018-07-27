const { COMPONENTS_REDUX } = require('../constants');

module.exports.copy = function copy(src, des) {
  this.fs.copy(this.templatePath(src), this.destinationPath(`${this.projectName}/${des}`));
};

module.exports.copyTpl = function copyTpl(src, des, temp) {
  this.fs.copyTpl(this.templatePath(src), this.destinationPath(`${this.projectName}/${des}`), temp);
};

module.exports.removeTemplateFilesRedux = function removeTemplateFilesRedux(templateFiles) {
  COMPONENTS_REDUX.forEach(component =>{
    if (templateFiles.includes(component)) {
      const index= templateFiles.findIndex(file => file === component);
      templateFiles.splice(index, 1)
    }
  });
  return templateFiles;
}