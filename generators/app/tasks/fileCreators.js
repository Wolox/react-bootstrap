const generateRSScript = (command, options = '') => `rescripts ${command} ${options}`;

const getPackageJsonAttributes = (projectName, projectVersion, repoUrl) => ({
  name: projectName,
  title: projectName,
  version: projectVersion,
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
    // eslint-disable-next-line no-extra-parens
    ...(this.customized && { deploy: 'node ./scripts/deploy.js' }),
    test: generateRSScript('test', '--env=jsdom'),
    eject: './node_modules/react-scripts/bin/react-scripts.js eject',
    lint: './node_modules/eslint/bin/eslint.js src',
    'lint-fix':
      "./node_modules/eslint/bin/eslint.js src --fix && ./node_modules/stylelint/bin/stylelint.js '**/*.scss' --fix",
    'lint-scss': "./node_modules/stylelint/bin/stylelint.js '**/*.scss'",
    'lint-diff': 'git diff --name-only --cached --relative --diff-filter=ACM | grep \\.js$ | xargs eslint'
  },
  husky: {
    hooks: {
      'pre-commit': 'npm run lint-diff && npm run lint-scss'
    }
  }
});

module.exports.createPackageJson = function createPackageJson() {
  const pjson = this.fs.readJSON(`./${this.projectName}/package.json`);
  const newpjson = Object.assign(pjson, getPackageJsonAttributes(this.projectName, '1.0.0', this.repoUrl));

  this.fs.writeJSON(`./${this.projectName}/package.json`, newpjson);
};

module.exports.createJSConfig = function createJSConfig() {
  const config = {
    compilerOptions: {
      target: 'esnext',
      module: 'commonjs',
      jsx: 'react',
      allowSyntheticDefaultImports: true,
      baseUrl: 'src'
    },
    include: ['src'],
    exclude: ['node_modules', '.history']
  };

  if (this.customized) {
    config.compilerOptions.paths = {
      '~app/*': ['./src/app/*'],
      '~components/*': ['./src/app/components/*'],
      '~screens/*': ['./src/app/screens/*'],
      '~config/*': ['./src/config/*'],
      '~constants/*': ['./src/constants/*'],
      '~redux/*': ['./src/redux/*'],
      '~services/*': ['./src/services/*'],
      '~utils/*': ['./src/utils/*'],
      '~assets/*': ['./src/assets/*']
    };
  }

  this.fs.writeJSON(`./${this.projectName}/jsconfig.json`, config);
};
