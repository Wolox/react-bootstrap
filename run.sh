#!/usr/bin/env bash

{ # this ensures the entire script is downloaded #

echo "Getting initial dependencies..."

system_has() {
  type "$1" > /dev/null 2>&1
}

currentnodeversion="$(node --version)"
requirednodeversion="v6.2.0"

if ! system_has git; then
  echo "git is mandatory to continue"
  echo "Check this guide to complete the installation: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"
  exit 1

elif [ "$(printf '%s\n' "$requirednodeversion" "$currentnodeversion" | sort -V | head -n1)" != "$requirednodeversion" ]; then 
  echo "The node version must be >= v6.2.0"  
  exit 1
fi

if [[ $1 == '--verbose' || $1 == '-v' ]]
then
  npm i -g yo generator-react-bootstrap
else
  npm i -g yo generator-react-bootstrap > /dev/null 2>&1
fi

if [[ $1 == '--local' || $1 == '-l' ]]
then
  yo ./generators/app
else
  yo react-bootstrap
fi


wait $!

} # this ensures the entire script is downloaded #
