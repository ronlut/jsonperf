#!/usr/bin/env sh

# abort on errors
set -ex

# build
yarn run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'jsonperf.com' > CNAME

git init
git config user.name "GitHub Actions" && git config user.email "actions@github.com"
git add -A
git commit -m 'deploy' --author="${GITHUB_ACTOR} <${GITHUB_ACTOR}@users.noreply.github.com>"

git push -f git@github.com:ronlut/jsonperf.git master:gh-pages

cd -
