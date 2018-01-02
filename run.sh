#!/usr/bin/env bash

{ # this ensures the entire script is downloaded #

echo "Getting initial dependencies..."

system_has() {
  type "$1" > /dev/null 2>&1
}

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
elif ! system_has yarn; then
  echo "Yarn is mandatory to continue"
  echo "Check this guide to complete the installation: https://yarnpkg.com/lang/en/docs/install/#alternatives-tab"
  exit 1
fi


yarn global add create-react-app --prefix /usr/local > /dev/null 2>&1
PROJECT_NAME=`echo "${PWD##*/}"`
cd ..
create-react-app "${PROJECT_NAME}" --scripts-version wolox-react-scripts
yarn global add yo generator-react-bootstrap > /dev/null 2>&1
cd $PROJECT_NAME
yo react-bootstrap --force
yarn global add package-json-merge > /dev/null 2>&1
package-json-merge package.json packageB.json > packageA.json
mv packageA.json package.json
rm packageB.json
yarn add eslint-config-react-app babel-eslint@^7.2.3 eslint@^4.1.1 eslint-plugin-flowtype@^2.34.1 eslint-plugin-import@^2.6.0 eslint-plugin-jsx-a11y@^5.1.1 eslint-plugin-react@^7.1.0 --dev
yarn && yarn start

wait $!

} # this ensures the entire script is downloaded #
