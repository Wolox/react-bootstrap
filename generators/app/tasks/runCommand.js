require('colors');

const { spawn } = require('child_process');

const ora = require('ora');

/**
 * @param {object} options which has the follpwing options:
 * - (mandatory) command {array}: list of paramaters to send to child_process.spawn
 * - loadingMessage {string}: Message shown while the command is running
 * - successMessage {string}: Message shown when the command finishes successfuly
 * - failureMessage {string}: Message shown when the command fails
 * - context {obj}: Yeoman context options and arguments
 * - timeout {int}: Time in millis that will be waited after the last console output to kill the process
 *
 * @returns {Promise} resolves to the loading spinner if the loading message is present
 */
module.exports = function runCommand(options) {
  const spinner =
    options.loadingMessage && ora({ spinner: 'bouncingBall', text: options.loadingMessage }).start();
  spinner.successMessage = options.successMessage;
  spinner.failureMessage = options.failureMessage;

  return new Promise((resolve, reject) => {
    const command = spawn(...options.command);
    const result = [];

    let killTimeout = undefined;
    let processKilled = undefined;

    function killProcess() {
      command.kill();
      processKilled = true;
      clearTimeout(killTimeout);
    }
    function refreshKillTimeout() {
      clearTimeout(killTimeout);
      killTimeout = setTimeout(killProcess, options.timeout);
    }

    if (options.timeout) {
      refreshKillTimeout();
    }

    command.stdout.on('data', (data) => {
      if (options.timeout) {
        refreshKillTimeout();
      }
      if (data) {
        result.push(data);
        if (options.context && options.context.verbose) {
        }
      }
    });
    
    command.stderr.on('data', (data) => {
      console.log('sterr[61]', data.toString()); // eslint-disable-line no-console
      if (options.timeout) {
        refreshKillTimeout();
      }
      if (options.context && options.context.verbose && data) {
        const msg = data.toString();
        
        console.log(/warning/.test(msg) ? msg.yellow : msg.red); // eslint-disable-line no-console
      }
    });
    
    command.on('close', (code) => {
      console.log('close[74]', code); // eslint-disable-line no-console
      if (options.timeout) {
        clearTimeout(killTimeout);
      }
      if (code === 0 || processKilled) {
        if (spinner && options.successMessage) {
          spinner.succeed(options.successMessage);
        }
        resolve({ spinner, result: result.join('\n') });
      } else {
        if (spinner && options.failureMessage) {
          spinner.fail(options.failureMessage);
        }
        reject(spinner);
      }
    });
  });
};
