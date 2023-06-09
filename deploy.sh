#!/usr/bin/env sh

set -e

git add .
git commit -m 'deploy'

git push -f https://github.com/PluzhnikovGA/branchard.git master:gh-pages

cd -
