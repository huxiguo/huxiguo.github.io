#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
echo 'www.seekhoo.cn' > CNAME

git init
git add -A
git commit -m 'update blogs'

# 如果发布到 https://<USERNAME>.github.io
git push -f https://github.com/huxiguo/huxiguo.github.io.git main:blogs

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f https://github.com/huxiguo/docs.git

cd -