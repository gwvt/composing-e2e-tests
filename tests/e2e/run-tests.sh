#!/bin/sh

if [ -z "$1" ]
  then
    vue-cli-service e2e
  else
    vue-cli-service e2e tests/e2e/specs/$1.js
fi
