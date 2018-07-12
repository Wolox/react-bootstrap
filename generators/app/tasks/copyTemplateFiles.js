const mkdirp = require("mkdirp");
const { copyTpl, copy } = require("./utils");

const { TEMPLATE_FILES, LINTER_PATH } = require("../constants");

module.exports = function copyTemplateFiles() {
  TEMPLATE_FILES.forEach(path => copy.bind(this)(path, path));

  mkdirp(this.destinationPath(this.projectName + "/src/app/assets/"));

  copyTpl.bind(this)("public/_index.html", "public/index.html", {
    title: this.projectName
  });

  copy.bind(this)(LINTER_PATH.src, LINTER_PATH.destination);
};
