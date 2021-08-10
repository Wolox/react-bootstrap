#!/usr/bin/node

const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const { spawn, exec } = require('child_process');

const { error, success } = require('./utils');

const port = '5000';

const runCommand = (command) =>
  new Promise((resolve, reject) => {
    exec(command, (e, stdout, stderr) => {
      if (stderr || e) {
        reject(`Error running command '${command}': ${stderr || e}`);
      }
      resolve(stdout);
    })
  });

const runLighthouse = async () => {
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless', '--no-sandbox'] });
  const options = {logLevel: 'silent', onlyCategories: ['performance'], port: chrome.port };
  const runnerResult = await lighthouse(`http://localhost:${port}`, options);
  const performanceResult = runnerResult.lhr.categories.performance.score * 100;

  let result;
  if (performanceResult < 90) {
    error(`Performance was below expected: ${performanceResult}%`);
    result = false;
  } else {
    success(`Performance is acceptable: ${performanceResult}%`);
    result = true;
  }

  await chrome.kill();
  
  return result;
};

const buildAndServe = async (afterServe) => {
  await runCommand('npm run build development');

  const serve = spawn('serve -s build', undefined, { stdio: 'ignore', shell: true, detached: true });
  serve.unref();

  afterServe().then((result) => {
    serve.kill();

    if (result) {
      process.exit(0);
    } else {
      process.exit(1);
    }
  });
};

success('Running project metrics on a production build...');
buildAndServe(runLighthouse);
