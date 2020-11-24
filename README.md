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

Create a clean project using create-react-app as baseline with some small addition to its configuration.

- ### Customized

Choose your preferred libraries for your project and create a new React project with standard components, default screens, api services and common utils functions.

###### Components
- Checkbox
- FormInput (input and textarea)
- ProviderWrapper
- RadioGroup
- Routes
- SearchBar
- Spinner
- Suspense

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
|[react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)| DOM bindings for React Router.
|[react-router](https://github.com/ReactTraining/react-router)| Routing for React.
|[history](https://www.npmjs.com/package/history)| Manage session history anywhere JavaScript runs.
|[i18next](https://www.i18next.com/)| An internationalization-framework written in and for JavaScript.
|[react-spinkit](https://kyleamathews.github.io/react-spinkit/)| Spinners library.
|[typescript](https://www.typescriptlang.org/)| Brings you optional static type-checking along with the latest ECMAScript
feature.

## Notes

This script will configure your system to install global npm packages without having to use sudo.

## Known Issues

### Yeoman not found during project generation

Sometimes when running the generator, you will get an error indicating that `yeoman` is not installed and a prompt with a message like: `-bash: yo: command not found`. This could be due to having more than one node version installed, or not having the right `PATH` configured. Either way, here is how to fix this issue.

**NOTE: This solution works only if you have installed node using nvm (node version manager). We are working on a different solution that does not require nvm.**

#### Step 1: Check if you have the right version of node setted
It's a common issue having two or more versions of node. What you need to do is make sure that the version that is shown with the command `node --version` is the same as the one in your nvm directory (`nvm list`). If not, you can set it using the command `nvm use -version-` (e.g.: `nvm use v13.8.0`).

#### Step 2: Add node binaries folder route to PATH
In the `~/.bashrc`, `~/.zshrc` or the configuration script for your shell you need to add the following line at the end of the file:

```
export PATH=$NVM_DIR/versions/node/$(node --version)/bin:$PATH
```

Save the changes, close and re-open the console or run `source .bashrc` to apply the changes of the file. Now run the generator again. It should work just fine.

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
