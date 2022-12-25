这里是SCCCP社区服务器的官方WIKI, 欢迎贡献(PR请求)

## 如何在本地构建测试环境
在开始前,需要自行安装node建议版本16  
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

## 您也可以使用Codespace(Dev Container)直接获得开发环境
