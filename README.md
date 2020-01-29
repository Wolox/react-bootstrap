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

Sometimes when running the generator, you will get an error indicating that `yeoman` is not installed and a prompt with a message like: `-bash: yo: command not found`. We've found that this is sometimes caused by not having the node modules binaries route correctly configured.

The easiest way to fix it is by adding this line to the end of your `~/.bashrc`, `~/.zshrc` or the configuration script for your shell:
- `export PATH=/usr/local/share/npm/bin:$PATH`

If the above does not work, another possible way to fix it is the following:
- Uninstall `yeoman`: `sudo npm remove -g yo`
- Manually set your node path: `sudo npm config set prefix $NVM_DIR/versions/node/NODE_VERSION` -- where `NODE_VERSION` is your currently installed node version.
  _eg: `sudo npm config set prefix $NVM_DIR/versions/node/v10.16.0`_
- export the `NODE_PATH` variable: `export NODE_PATH=$NVM_DIR/versions/node/NODE VERSION/lib/node_modules`
- Reinstall it: `npm install -g yo`

WARNING: Be careful when setting these variables to set them to the correct node version or you may completely break npm. If you accidentaly do break it, try to set the prefix again, if you can't you may need to uninstall node and npm, reinstall them and start over. 
