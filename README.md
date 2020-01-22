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

Create a clean proyect with the most used libraries of a react proyect

- ### Customized

Choose your preferred libraries of your proyect and create a new react proyect with standarts components, default screens, apis servicies and common utils functions.

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
|[eslint-config-wolox-react](https://github.com/Wolox/eslint-config-wolox-react)| Wolox eslint reactJs rules.
|[prettier]()| Code formatter.
|[react-hot-loader](https://www.npmjs.com/package/react-hot-loader)| Allow live reloaded without the loss of state
|[postcss](https://www.npmjs.com/package/postcss)| Is a tool for transforming styles with JS plugins.
|[enzyme](https://www.npmjs.com/package/enzyme)| Is a JavaScript Testing utility for React that makes it easier to test your React Components' output
|[react-test-renderer](https://www.npmjs.com/package/react-test-renderer)|  Provides an experimental React renderer that can be used to render React components to pure JavaScript objects
|[chalk](https://www.npmjs.com/package/chalk)| Terminal Styling
|[env-cmd](https://www.npmjs.com/package/env-cmd)| Node program for executing commands using an environment from an env file.
|[aws-deploy-script-fe](https://www.npmjs.com/package/aws-deploy-script-fe)| AWS script for deploying your frontend applications.
|[node-sass]()| Provides binding for Node.js to LibSass, the C version of the popular stylesheet preprocessor, Sass.
|[react-dom]()| Serves as the entry point to the DOM and server renderers for React

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
|[react-spinkit](https://kyleamathews.github.io/react-spinkit/)| Spinners library
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

## About

This repository is maintained by everyone at  [Wolox](https://wolox.co).

![Wolox](https://raw.githubusercontent.com/Wolox/press-kit/master/logos/logo_banner.png)


