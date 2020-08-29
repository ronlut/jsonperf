#!/usr/bin/env sh

# abort on errors
set -ex

git checkout --orphan gh-pages
git config user.name "GitHub" && git config user.email "noreply@github.com"

# build
yarn run build
echo 'jsonperf.com' > dist/CNAME

git --work-tree dist add --all

git --work-tree dist commit -m 'deploy' --author="${GITHUB_ACTOR} <${GITHUB_ACTOR}@users.noreply.github.com>"

git push -f origin HEAD:gh-pages