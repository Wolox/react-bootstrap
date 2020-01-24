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

Sometimes when running the generator, you will get an error indicating that `yeoman` is not installed and a prompt with a message like: `-bash: yo: command not found`. We've found that this is sometimes caused by not having the node modules binaries route correctly configured.
One possible way to fix it is the following:
- Uninstall `yeoman`: `npm remove -g yo`
- Reinstall it: `npm install -g yo`
- Manually set your node path: `npm config set prefix $NVM_DIR/versions/node/NODE_VERSION` -- where `NODE_VERSION` is your currently installed node version.
  eg: `npm config set prefix $NVM_DIR/versions/node/v10.16.0`
- export the `NODE_PATH` manually, including the node modules folder: `export NODE_PATH=$NVM_DIR/versions/node/NODE VERSION/lib/node_modules`

WARNING: Be careful when setting these variables to set them to the correct node versions or you may completely break npm. If you accidentaly do break it, you must uninstall node and npm, reinstall them and start over. 
