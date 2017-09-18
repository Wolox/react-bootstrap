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

yarn global add yo generator-react > /dev/null 2>&1
yo react

wait $!

} # this ensures the entire script is downloaded #
