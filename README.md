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




