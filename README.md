这里是SCCCP社区服务器的官方WIKI, 欢迎贡献(PR请求), 被接受的贡献可获得服务器内5000奖励可占领方块数

## 如何在本机构建测试环境
在开始前,需要自行安装nodejs  
安装yarn  
```sh
npm install --global yarn  
```
Clone项目, 并进入项目目录
```sh
git clone https://github.com/SCCCP-Team/SCCCPServerWiki.git  
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
生成HTML  
```sh
yarn docs:build  
```

## 您也可以使用Codespace(Dev Container)直接获得开发环境
