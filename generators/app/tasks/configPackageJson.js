const generateRSScript = (command, options = '') => `rescripts ${command} ${options}`;

const getPackageJsonAttributes = (projectName, projectVersion, repoUrl, features) => {
  const attributes = {
    name: projectName,
    title: projectName,
    version: projectVersion,
    repository: {
      type: 'git',
      url: repoUrl
    },
    scripts: {
      start: generateRSScript('start'),
      build: generateRSScript('build'),
      test: generateRSScript('test', '--env=jsdom'),
      eject: './node_modules/react-scripts/bin/react-scripts.js eject',
      deploy: generateRSScript('build'),
      lint: './node_modules/eslint/bin/eslint.js src',
      'lint-fix': './node_modules/eslint/bin/eslint.js src --fix',
      'lint-diff': 'git diff --name-only --cached --relative --diff-filter=ACM | grep \\.js$ | xargs eslint',
      precommit: 'npm run lint-diff'
    }
  };

  if (features.flow) {
    attributes.scripts.flow = 'flow';
  }

  return attributes;
};

module.exports = function configPackageJson() {
  const pjson = this.fs.readJSON(`./${this.projectName}/package.json`);
  const newpjson = Object.assign(
    pjson,
    getPackageJsonAttributes(this.projectName, '1.0.0', this.repoUrl, this.features)
  );

  this.fs.writeJSON(`./${this.projectName}/package.json`, newpjson);
};
