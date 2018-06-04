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
elif ! system_has node; then
  echo "node is mandatory to continue"
  echo "We recommend using nvm to install node. Check these guides to install nvm and node:"
  echo "- https://github.com/creationix/nvm#install-script"
  echo "- https://github.com/creationix/nvm#usage"
  exit 1
elif [ "$(printf '%s\n' "$requirednodeversion" "$currentnodeversion" | sort -V | head -n1)" != "$requirednodeversion" ]; then 
  echo "The node version must be >= v6.2.0"  
  exit 1
fi

npm i -g create-react-app  > /dev/null 2>&1
PROJECT_NAME=`echo "${PWD##*/}"`
cd ..
create-react-app "${PROJECT_NAME}" --use-npm
npm i -g yo generator-react-bootstrap > /dev/null 2>&1
cd $PROJECT_NAME
echo "Project created"
yo react-bootstrap --force
npm i -g package-json-merge > /dev/null 2>&1
package-json-merge package.json packageB.json > packageA.json
mv packageA.json package.json
rm packageB.json
git init

if ! [[-z "$1" ]]; then
git remote add origin $1
fi

npm i && npm start

wait $!

} # this ensures the entire script is downloaded #
