const generateRSScript = (command, options = '') => `rescripts ${command} ${options}`;

const getPackageJsonAttributes = (projectName, projectVersion, repoUrl, features) => {
  const attributes = {
    name: projectName,
    title: projectName,
    version: projectVersion,
    jest: {
      moduleNameMapper: {
        '~screens(.*)': '<rootDir>/src/app/screens/$1',
        '~components(.*)': '<rootDir>/src/app/components/$1',
        '^~(.*)/(.*)$': '<rootDir>/src/$1/$2'
      },
      coverageThreshold: {
        global: {
          branches: 70,
          functions: 70,
          lines: 70,
          statements: 70
        }
      }
    },
    repository: {
      type: 'git',
      url: repoUrl
    },
    engines: {
      node: '>= 10.15.3',
      npm: '>= 6.9.0'
    },
    scripts: {
      start: 'node ./scripts/start.js development',
      'start-env': 'node ./scripts/start.js',
      build: 'node ./scripts/build.js',
      deploy: 'node ./scripts/deploy.js',
      test: generateRSScript('test', '--env=jsdom --watchAll=false'),
      eject: './node_modules/react-scripts/bin/react-scripts.js eject',
      lint: './node_modules/eslint/bin/eslint.js src',
      'lint-fix':
        "./node_modules/eslint/bin/eslint.js src --fix && ./node_modules/stylelint/bin/stylelint.js '**/*.scss' --fix",
      'lint-scss': "./node_modules/stylelint/bin/stylelint.js '**/*.scss'",
      'lint-diff': 'git diff --name-only --cached --relative --diff-filter=ACM | grep \\.js$ | xargs eslint',
      'coverage-diff': 'rescripts test --env=jsdom --coverage --watchAll=false --changedSince=development'
    },
    husky: {
      hooks: {
        'pre-commit': 'npm run lint-diff && npm run lint-scss && CI=true npm run coverage-diff'
      }
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
