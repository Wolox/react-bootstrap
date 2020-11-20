const generateRSScript = (command, options = '') => `rescripts ${command} ${options}`;

const getPackageJsonAttributes = (projectName, projectVersion, repoUrl) => ({
  name: projectName,
  title: projectName,
  version: projectVersion,
  jest: {
    moduleNameMapper: {
      '^~(.*)/(.*)$': '<rootDir>/src/$1/$2'
    },
    snapshotSerializers: ['enzyme-to-json/serializer'],
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
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
    // start: 'node ./scripts/start.js development',
    start: 'rescripts start',
    'start-env': 'node ./scripts/start.js',
    build: 'node ./scripts/build.js',
    // eslint-disable-next-line no-extra-parens
    ...(this.customized && { deploy: 'node ./scripts/deploy.js' }),
    test: generateRSScript('test', '--env=jsdom'),
    eject: './node_modules/react-scripts/bin/react-scripts.js eject',
    lint: './node_modules/eslint/bin/eslint.js . --ext .js --ext .ts --ext .tsx',
    'lint-fix': "npm run lint -- --fix && ./node_modules/stylelint/bin/stylelint.js '**/*.scss' --fix",
    'lint-scss': "./node_modules/stylelint/bin/stylelint.js '**/*.scss'",
    'lint-diff':
      'git diff --name-only --cached --relative --diff-filter=ACM | grep -e \\.js$ -e \\.tsx$ -e \\.ts$ | xargs eslint',
    'coverage-diff': 'rescripts test --env=jsdom --coverage --watchAll=false --changedSince=development'
  },
  husky: {
    hooks: {
      'pre-commit': 'npm run lint-diff && npm run lint-scss',
      'pre-push': 'npm run coverage-diff'
    }
  },
  eslintConfig: {
    extends: ['wolox-react', '@wolox/eslint-config-typescript'],
    settings: {
      'import/resolver': 'typescript'
    },
    rules: {
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': ['error'],
      '@typescript-eslint/ban-types': [
        'error',
        {
          extendDefaults: true,
          types: {
            '{}': false
          }
        }
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'default',
          format: ['camelCase']
        },
        {
          selector: 'variableLike',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          leadingUnderscore: 'allow'
        },
        {
          selector: 'typeLike',
          format: ['PascalCase']
        },
        {
          selector: 'enumMember',
          format: ['UPPER_CASE']
        }
      ]
    }
  }
});

module.exports.createPackageJson = function createPackageJson() {
  const pjson = this.fs.readJSON(`./${this.projectName}/package.json`);
  const newpjson = Object.assign(pjson, getPackageJsonAttributes(this.projectName, '1.0.0', this.repoUrl));

  this.fs.writeJSON(`./${this.projectName}/package.json`, newpjson);
};
