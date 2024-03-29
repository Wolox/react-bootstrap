const generateRSScript = (command, options = '') => `rescripts ${command} ${options}`;

const getPackageJsonAttributes = (projectName, projectVersion, repoUrl) => ({
  name: projectName,
  title: projectName,
  version: projectVersion,
  jest: {
    resetMocks: true,
    collectCoverageFrom: [
      'src/**/*.{js,jsx,ts,tsx}',
      '!src/reportWebVitals.ts',
      '!src/index.tsx',
      '!src/config/api.js',
      '!src/config/i18n.js',
      '!**/i18n.{js,ts}'
    ],
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
    node: '14.x',
    npm: '>= 6.9.0'
  },
  scripts: {
    // start: 'node ./scripts/start.js development',
    start: 'rescripts start',
    'start-env': 'node ./scripts/start.js',
    build: 'node ./scripts/build.js',
    // eslint-disable-next-line no-extra-parens
    deploy: 'node ./scripts/deploy.js',
    'ts-check': 'tsc',
    test: generateRSScript('test', '--env=jsdom --coverage --passWithNoTests --watchAll=false'),
    'test-interactive': generateRSScript('test', '--env=jsdom --coverage --passWithNoTests'),
    'test-no-coverage': generateRSScript('test', '--env=jsdom --passWithNoTests'),
    eject: './node_modules/react-scripts/bin/react-scripts.js eject',
    lint: './node_modules/eslint/bin/eslint.js src --ext .js --ext .ts --ext .tsx',
    'lint-fix': "npm run lint -- --fix && ./node_modules/stylelint/bin/stylelint.js '**/*.scss' --fix",
    'lint-scss': "./node_modules/stylelint/bin/stylelint.js '**/*.scss'",
    'lint-diff':
      'git diff --name-only --cached --relative --diff-filter=ACM | grep -e \\.js$ -e \\.tsx$ -e \\.ts$ | xargs eslint',
    coverage: 'npm run test -- --coverage --watchAll=false',
    'coverage-diff': 'npm run test coverage -- --changedSince=development',
    generate: 'plop',
    performance: "node ./scripts/stats.js"
  },
  husky: {
    hooks: {
      'pre-commit': 'npm run lint-diff && npm run lint-scss && npm run performance',
      'pre-push': 'npm run coverage-diff'
    }
  }
});

module.exports.createPackageJson = function createPackageJson() {
  const pjson = this.fs.readJSON(`./${this.projectName}/package.json`);
  // Remove default eslintConfig to use .eslintrc
  delete pjson.eslintConfig;
  const newpjson = Object.assign(pjson, getPackageJsonAttributes(this.projectName, '1.0.0', this.repoUrl));

  this.fs.writeJSON(`./${this.projectName}/package.json`, newpjson);
};
