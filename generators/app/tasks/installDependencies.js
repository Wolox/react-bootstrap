const latestSemver = require('latest-semver');
const semverRegex = require('semver-regex');

const { OPTIONAL_DEPENDENCIES } = require('../constants');

const runCommand = require('./runCommand');

const DEPENDENCIES = [
  'apisauce',
  'history',
  'i18next',
  'lodash',
  'postcss',
  'react',
  'react-dom',
  'react-router',
  'react-router-dom',
  'react-spinkit',
  'wolox-equalizer',
  'node-sass',
  'redux',
  'react-redux@6.0.0',
  'react-router-redux',
  'redux-recompose',
  'redux-form@5.3.6',
  'redux-thunk',
  'react-router',
  'redux-beacon',
  'connected-react-router',
  '@redux-beacon/google-analytics'
];

const DEV_DEPENDENCIES = [
  'react-app-rewired',
  'eslint-config-airbnb',
  'eslint-config-prettier',
  'eslint-plugin-flowtype',
  'eslint-plugin-import',
  'eslint-plugin-jsx-a11y',
  'eslint-plugin-prettier',
  'eslint-plugin-react',
  'eslint-plugin-react-native',
  'eslint-config-wolox-react',
  'eslint-config-wolox',
  'husky',
  'prettier',
  'prettier-eslint',
  'react-hot-loader',
  'react-app-rewire-wolox',
  '@storybook/react',
  'prop-types',
  '@babel/plugin-proposal-optional-chaining'
];

/**
 * @param {string} projectName The project's name
 * @param {object} options options
 * @returns {Promise} Installs dependencies
 * The eslint config we use may have issues between the different plugins we use.
 * The solution for this is installing the proper version of each plugin declared in the eslint config package
 * More info here: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb#usage
 */
function getLinterPluginVersions(projectName, options) {
  /*
   * Get peer dependencies of eslint-config-airbnb and its versions
   * This command will return something like the following:
   * { eslint: '^3.19.0 || ^4.3.0', 'eslint-plugin-jsx-a11y': '^5.1.1', 'eslint-plugin-import': '^2.7.0', 'eslint-plugin-react': '^7.1.0' }
   */
  return runCommand({
    command: [
      'npm',
      ['info', 'eslint-config-airbnb@latest', 'peerDependencies', '--json'],
      { cwd: `${process.cwd()}/${projectName}` }
    ],
    loadingMessage: "Getting eslint plugins' versions",
    successMessage: 'Successfuly downloaded plugins version info',
    failureMessage: 'Error getting info of eslint plugins. Turn verbose mode on for detailed logging',
    context: options
  }).then(({ result }) => {
    // Keep latest if the dependency has different versions. e.g: eslint: '^3.19.0 || ^4.3.0'
    const dependencies = JSON.parse(result);

    Object.keys(dependencies).forEach(eachDependency => {
      const latestDependencyVersion = latestSemver(dependencies[eachDependency].match(semverRegex()));

      dependencies[eachDependency] = `^${latestDependencyVersion}`;
    });

    return dependencies;
  });
}

function npmInstall(projectName, deps, options, dev) {
  const npmArgs = dev ? ['install', '-D'].concat(deps) : ['install'].concat(deps);

  return runCommand({
    command: ['npm', npmArgs, { cwd: `${process.cwd()}/${projectName}` }],
    loadingMessage: `Fetching ${dev ? 'dev dependencies' : 'dependencies'}`,
    successMessage: `${dev ? 'Dev dependencies' : 'Dependencies'} ready!`,
    failureMessage: `${
      dev ? 'Dev dependencies' : 'Dependencies'
    } installation failed. Turn verbose mode on for detailed logging`,
    context: options
  });
}

module.exports = function installDependencies() {
  return getLinterPluginVersions(this.projectName, this.options)
    .then(plugins => {
      const pluginNames = Object.keys(plugins);
      const fixedDevDeps = DEV_DEPENDENCIES.map(
        // Use a specific version of a dependency to avoid conflicts with other dependencies.
        dependency => (pluginNames.includes(dependency) ? `${dependency}@${plugins[dependency]}` : dependency)
      );

      return npmInstall(this.projectName, DEPENDENCIES, this.options)
        .then(() => npmInstall(this.projectName, fixedDevDeps, this.options, true))
        .catch(() => {
          process.exit(1);
        });
    })
    .then(() => {
      const optionalDependencies = Object.keys(this.features).reduce(
        (dependenciesObject, option) => {
          const dependencies = OPTIONAL_DEPENDENCIES[option].dependencies || [];
          const devDependencies = OPTIONAL_DEPENDENCIES[option].devDependencies || [];

          return {
            dependencies: [...dependenciesObject.dependencies, ...dependencies],
            devDependencies: [...dependenciesObject.devDependencies, ...devDependencies]
          };
        },
        { dependencies: [], devDependencies: [] }
      );

      return npmInstall(this.projectName, optionalDependencies.dependencies, this.options).then(() =>
        npmInstall(this.projectName, optionalDependencies.devDependencies, this.options, true)
      );
    });
};
