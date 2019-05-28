const latestSemver = require('latest-semver');
const semverRegex = require('semver-regex');

const { OPTIONAL_DEPENDENCIES } = require('../constants');

const runCommand = require('./runCommand');

const DEPENDENCIES = [
  'apisauce@^1.0.1',
  'history@^4.7.2',
  'i18next@^13.0.0',
  'postcss@^7.0.7',
  'react@^16.6.3',
  'react-dom@^16.6.3',
  'react-spinkit@^3.0.0',
  'wolox-equalizer@^0.0.3',
  'node-sass@^4.11.0',
  'redux@^4.0.1',
  'react-redux@^6.0.0',
  'connected-react-router@^6.0.0',
  'react-router-dom@^4.3.1',
  'redux-recompose@^2.1.0',
  'redux-form@^8.0.4',
  'redux-thunk@^2.3.0',
  'react-router@^4.3.1',
  'redux-beacon@^2.0.3',
  '@redux-beacon/google-analytics@^1.1.1',
  'seamless-immutable@^7.1.4'
];

const DEV_DEPENDENCIES = [
  'react-app-rewired@^1.6.2',
  'eslint-plugin-flowtype@^2.29.1',
  'eslint-plugin-import@^2.14.0',
  'eslint-plugin-jsx-a11y@^6.1.2',
  'eslint-plugin-prettier',
  'eslint-plugin-react@^7.11.1',
  'eslint-plugin-react-native@^3.5.0',
  'eslint-config-wolox-react@^1.1.0',
  'eslint-config-wolox@^2.3.0',
  'husky@^1.2.1',
  'prettier@^1.15.3',
  'prettier-eslint@^8.8.2',
  'react-hot-loader@^4.6.1',
  'prop-types@^15.6.2',
  '@babel/plugin-proposal-optional-chaining@^7.2.0',
  '@rescripts/cli@^0.0.7',
  'eslint-plugin-babel@^5.3.0',
  'env-cmd@8.0.2',
  'aws-deploy-script-fe@0.0.4',
  'chalk@2.4.2',
  'minimist@1.2.0',
  'stylelint-config-wolox@^1.0.5',
  'stylelint-no-indistinguishable-colors@^1.2.1',
  'stylelint-scss@^3.5.4',
  'stylelint@^9.10.1',
  'prettier-stylelint@^0.4.2',
  'prettier-eslint-cli@^4.7.1',
  'postcss-syntax@^0.36.2',
  'postcss-html@^0.36.0'
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
