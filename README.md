wolox-react-bootstrap
==================

This script aims to automate the process of initializing a React App using the Wolox standards.

## Prerequisites

- [React](https://facebook.github.io/react/docs/getting-started.html)

- [Node (minimum version: 8.10) and npm](https://github.com/creationix/nvm#install-script)

- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)


## How to use

To run from server:

You don't need to clone this repository. Just follow these steps:

Run the installation script using the following command:

```bash
bash <(curl -s https://raw.githubusercontent.com/Wolox/react-bootstrap/development/run.sh)
```
Optional parameters:

- `-v` or `--verbose`: Display more information as the bootstrap is running
- `-l` or `--local`: Run a local version of the bootstrap

## Run locally

To setup a local version of the bootstrap, you may clone it and do the following:
```bash
cd ./react-bootstrap
npm link
```

After that, every time you want to run it you may execute the run script: with the local flag
```bash
# Make sure you are in the parent folder of the bootstrap
./react-bootstrap/run.sh -l
```

## Bootstrap options

You can choose between two creation types: Clean and Customized

- ### Clean

Create a clean project using crate-react-app as baseline with some small addition to its configuration.

- ### Customized

Choose your preferred libraries for your project and create a new React project with standard components, default screens, api services and common utils functions.

###### Components
- Checkbox
- InputLabel
- RadioGroup
- Routes
- SearchBar
- Spinner
- Suspense 
- TextArea

###### Screens
- Login
- Dashboard

## Bootstrap libraries

|||
|----|-----------|
|[react]()| v16.6.3


- ### Clean

|Name|Description|
|----|-----------|
|[eslint-config-wolox](https://github.com/Wolox/eslint-config-wolox)| Wolox eslint standard rules.
|[eslint-config-wolox-react](https://github.com/Wolox/eslint-config-wolox-react)| Wolox eslint React rules.
|[prettier]()| Code formatter.
|[react-hot-loader](https://www.npmjs.com/package/react-hot-loader)| Allow live reloaded without loss of state.
|[postcss](https://www.npmjs.com/package/postcss)| Tool for transforming styles with JS plugins.
|[enzyme](https://www.npmjs.com/package/enzyme)| JavaScript testing utility for React that makes it easier to test your React Components' output.
|[react-test-renderer](https://www.npmjs.com/package/react-test-renderer)| Provides an experimental React renderer that can be used to render React components to pure JavaScript objects.
|[chalk](https://www.npmjs.com/package/chalk)| Terminal Styling.
|[env-cmd](https://www.npmjs.com/package/env-cmd)| Node program for executing commands using an environment from an env file.
|[aws-deploy-script-fe](https://www.npmjs.com/package/aws-deploy-script-fe)| AWS script for deploying your frontend applications.
|[node-sass](https://github.com/sass/node-sass)| Provides binding for Node.js to LibSass, the C version of the popular stylesheet preprocessor, Sass.
|[react-dom](https://www.npmjs.com/package/react-dom)| Serves as the entry point to the DOM and server renderers for React.

- ### Customized

Additional to clean libraries are added 

|Name|Description|
|----|-----------|
|[apisauce](https://github.com/infinitered/apisauce)| Talking to APIs doesn't have to be awkward anymore.
|[redux](https://redux.js.org/)| Helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.
|[react-redux](https://react-redux.js.org/)| Is the official React binding for Redux.
|[connected-react-router](https://github.com/supasate/connected-react-router)| A Redux binding for React Router v4.
|[react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)| DOM bindings for React Router.
|[redux-recompose](https://github.com/Wolox/redux-recompose)| A Redux utility belt for reducers and actions. Inspired by acdlite/recompose.
|[redux-form](https://github.com/erikras/redux-form)| A Higher Order Component using react-redux to keep form state in a Redux store.
|[redux-thunk](https://github.com/reduxjs/redux-thunk)| Middlewere for Redux.
|[react-router](https://github.com/ReactTraining/react-router)| Routing for React.
|[redux-beacon](https://github.com/rangle/redux-beacon)| Analytics integration for Redux.
|[seamless-immutable](https://github.com/rtfeldman/seamless-immutable)| Immutable data structures for JavaScript.
|[history](https://www.npmjs.com/package/history)| Manage session history anywhere JavaScript runs.
|[i18next](https://www.i18next.com/)| An internationalization-framework written in and for JavaScript.
|[react-spinkit](https://kyleamathews.github.io/react-spinkit/)| Spinners library.
|[typescript](https://www.typescriptlang.org/)| Brings you optional static type-checking along with the latest ECMAScript feature.

Also you can select **_optional_** libraries like

|Name|Description|
|----|-----------|
|[moment](https://momentjs.com/)| Parse, validate, manipulate, and display dates and times in JavaScript.
|[seamless-immutable](https://github.com/rtfeldman/seamless-immutable)| Immutable data structures for JavaScript.
|[reselect](https://github.com/reduxjs/reselect)| Selector library for Redux.
|[babel-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver)| Custom module resolver plugin for Babel.

## Notes

This script will configure your system to install global npm packages without having to use sudo.

## Known Issues

### Yeoman not found during project generation

Sometimes when running the generator, you will get an error indicating that `yeoman` is not installed and a prompt with a message like: `-bash: yo: command not found`. We've found that this is sometimes caused by not having the node modules binaries route correctly configured.

The easiest way to fix it is by adding this line to the end of your `~/.bashrc`, `~/.zshrc` or the configuration script for your shell:
- `export PATH=/usr/local/share/npm/bin:$PATH`

If the above does not work, another possible way to fix it is the following:
- Uninstall `yeoman`: `sudo npm remove -g yo`
- Manually set your node path: `sudo npm config set prefix $NVM_DIR/versions/node/$(node--version)`
- export the `NODE_PATH` variable: `export NODE_PATH=$NVM_DIR/versions/node/$(node --version)/lib/node_modules`
- Reinstall it: `npm install -g yo`

WARNING: If you accidentaly save wrong paths here you might break npm/node. If you do, try to set the prefix again, manually inserting your node version. If doesn't work you may need to uninstall node and npm, reinstall them and start over. 

## About

This repository is maintained by everyone at [Wolox](https://wolox.co).

![Wolox](https://raw.githubusercontent.com/Wolox/press-kit/master/logos/logo_banner.png)

## License

**wolox-react-bootstrap** is available under the MIT [license](LICENSE).

    Copyright (c) 2020 Wolox

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
