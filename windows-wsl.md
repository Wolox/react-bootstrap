wolox-react-bootstrap on Windows 10/11
==================

The following instructions are intended to run the bootstrap locally on Windows systems.

### WSL and Ubuntu Installation
WSL stands for Windows Subsystem for Linux

1- Open ``Windows PowerShell`` AS ADMINISTRATOR
2- Run 
```bash
  wsl --install
``` 
This, install the WSL in the system.
3- Once it's finished, run 
```bash
wsl --set-default-version 1
```
This sets the version 1 in order to avoid problems with the windows ports.
4- Once it's finished, run
```bash
wsl --install -d ubuntu
```
This, install the Ubuntu system.

At the end you could close the Powershell programs and you should be able to look for ```Ubuntu```
in the applications.

### Updating Ubuntu
Let's open the Ubuntu application and run the following commands:

```bash
  sudo apt update
  sudo apt upgrade
```

This commands will update all the Ubuntu system.

### Installing NVM
NVM will help us to admin the node versions, in the Ubuntu console let's run;

```bash
  curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
```

```bash
  nano ~/.zshrc
```

With this last command, the console will open an editor and we need to paste the following in the bottom lines:

```
export NVM_DIR="/home/your-user/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```
your_user: must be replaced by the user of your Ubuntu machine.

Next, we must close the app and open it again. And run the following commands:

```bash
  nvm install v14.20.0
  node  --version
```

This last command should show the version v14.20.0, if not you must repeat the process again.

### SSH creation
The SSH key is necessary in order to authenticate you github user with your local wsl machine. 
Let's run the following commands from the root of the Ubuntu console:

```bash
  ssh-keygen -t ed25519 -C "you_email@accenture.com"

  eval "$(ssh-agent -s)"

  ssh-add ~/.ssh/id_ed25519

  cat ~/.ssh/id_ed25519.pub
```

This last command will show a key, this key must be added in you GutHub account following the next steps:

On your GitHub account:

- Setting -> SSH and GPG keys
- New SSH key
  - title: any name
  - key: paste here the key generated in the above commands

Now, let's verify if the connection were successful, running:

```bash
  ssh -T git@github.com
```
The command should show a message like this:

```bash
  Hi USER_NAME! You've successfully authenticated
```

### Running the bootstrap:

Now, we should be able to run the bootstrap, run the following commands in the Ubuntu console:

```bash
  git clone git@github.com:Wolox/react-bootstrap.git

  cd ./react-bootstrap
  npm install
  npm link
```

After that, every time you want to run it you may execute the run script: with the local flag
```bash
# Make sure you are in the parent folder of the bootstrap
./react-bootstrap/run.sh -l
```

### Working on your project
Once you completed all the previous steps your React project will be created and you will be able
to start with your training. In order to work from VSCode with the WSL connection, you should
install [this](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl) extension in your editor.

The VSCode will be connected with the WSL running the ```code .``` from your project folder.

That's all. Happy hacking.
