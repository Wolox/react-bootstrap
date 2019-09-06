#!/usr/bin/env bash

{ # this ensures the entire script is downloaded #

echo "Getting initial dependencies..."

system_has() {
  type "$1" > /dev/null 2>&1
}

currentnodeversion="$(node --version)"
requirednodeversion="v10.15.3"

currentnpmversion="$(npm --version)"
requirednpmversion="6.9.0"

if ! system_has git; then
  echo "git is mandatory to continue"
  echo "Check this guide to complete the installation: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"
  exit 1

elif [ "$(printf '%s\n' "$requirednodeversion" "$currentnodeversion" | sort -V | head -n1)" != "$requirednodeversion" ]; then 
  echo "The node version must be >= v10.15.3"
  exit 1
elif [ "$(printf '%s\n' "$requirednpmversion" "$currentnpmversion" | sort -V | head -n1)" != "$requirednpmversion" ]; then 
  echo "The npm version must be >= v6.9.0"
  exit 1
fi




printf "\n\nThis script requires an npm configuration that allows global\n"
printf "installs without sudo. We'll be checking whether you have globally\n"
printf "installed packages and if so, we'll be moving them to a new folder.\n\n"
printf "You may have to type in your password once to allow moving all\n"
printf "your currently installed packages.\n\n"

if [[ $1 == '--verbose' || $1 == '-v' ]]
then
  curl -s https://raw.githubusercontent.com/Wolox/react-bootstrap/development/scripts/npm-no-sudo.sh | bash -s -- -v
  npm i -g yo generator-react-bootstrap
else
  bash <(curl -s https://raw.githubusercontent.com/Wolox/react-bootstrap/development/scripts/npm-no-sudo.sh)
  npm i -g yo generator-react-bootstrap > /dev/null 2>&1
fi

yo --version

if [ $? -eq 0 ]; then
  echo YEOMAN installed
else
  echo YEOMAN not installed, installing now
  npm install -g yo
fi

if [[ $1 == '--local' || $1 == '-l' ]]
then
  yo ./react-bootstrap/generators/app
else
  yo react-bootstrap
fi


wait $!

} # this ensures the entire script is downloaded #
