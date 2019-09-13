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

1- Run the installation script using the following command:

```bash
bash <(curl -s https://raw.githubusercontent.com/Wolox/react-bootstrap/development/run.sh) [--verbose]
```

2- Search for `TODO` commented lines and follow the instructions. (Search "// TODO")

3- Add .env file with your API_BASE_URL

To run from repository 

1- Run
``` npm link
```
2- ./run.sh

## Notes

This script will configure your system to install global npm packages without having to use sudo.
