#!/bin/bash

# Deploy script to push project to openshift

# You need to setup following variables in your CI server :
#
#    OPENSHIFT_REMOTE - openshift git remote url

# exit with nonzero exit code if anything fails
set -e

# Check variables
if [ -z $OPENSHIFT_REMOTE ]; then
  echo "OPENSHIFT_REMOTE variable cannot be empty"
  exit 1
fi

git push ${OPENSHIFT_REMOTE} master:master
