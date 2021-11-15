#!/user/bin/env sh

# stop deploy if there are errors
set -e

# set base url
export REACT_APP_PUBLIC_URL=alef-development_test-task

# build
npm run build
cd build

# github pages reload fix
cp index.html 404.html

# init git and push to a gh-pages branch
git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:kandiana/alef-development_test-task.git master:gh-pages

# back to root
cd -
