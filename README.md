这里是 SCCCP社区服务器 的官方WIKI, 欢迎贡献  
gitcode 仓库不接受拉取请求(Pull Request), 仅镜像, 较大的静态资源类文件请提交到github的仓库, 然后使用gitcode镜像仓库的直接链接  

## 如何在本地构建测试环境
在开始前,需要自行安装node建议版本18  
安装yarn  
```sh
npm install --global yarn  
```
Clone项目, 并进入项目目录
```sh
git clone https://github.com/EpsilonNetWorkGroup/SCCCPServerWiki.git  
cd SCCCPServerWiki  
```
配置项目依赖  
```sh
yarn install  
```
运行开发服务器  
```sh
yarn docs:dev  
```
生成HTML(部署时)  
```sh
yarn docs:build  
```

## 您也可以使用Codespace(Dev Container)进行开发
