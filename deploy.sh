#!/usr/bin/env sh

set -e

git init
git add .
git commit -m 'deploy'

git push -f https://github.com/PluzhnikovGA/vue-app.git master:gh-pages

cd -
