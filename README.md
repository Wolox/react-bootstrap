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

## Notes

This script will configure your system to install global npm packages without having to use sudo.


## Known Issues

### Yeoman not found during project generation

Sometimes when running the generator, you will get an error indicating that `yeoman` is not installed and a prompt with a message like: `-bash: yo: command not found`. This could be due to having more than one node version installed, or not having the right `PATH`. Either way, here is how to fix this issue.

NOTE: This solution works only if you have installed node using nvm (node version manager).

#### Step 1: Check if you have the right version of node setted
It's a common issue having two or more versions of node. What you need to do is make sure that the version that is shown with the command `node --version` is the same as the one in your nmv directory (`nvm list`). If not, you can set it using the command `nvm use -version-` (e.g.: `nvm use v13.8.0`).

#### Step 2: Add node binaries folder route to PATH
In the `~/.bashrc`, `~/.zshrc` or the configuration script for your shell you need to add the following line at the end of the file:

```
export PATH=$NVM_DIR/versions/node/$(node --version)/bin:$PATH
```

Save the changes an then open the console. Run `source .bashrc` to apply the changes of the file. Now run the generator again. It should work just fine.
