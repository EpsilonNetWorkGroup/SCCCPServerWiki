```
服务器地址: sccp.playl.net  
Java交流群: 374790793  
Bedrock交流群: 786406537
```

## 社区列表
|官方社区|详细信息|  
|:--:|-------|  
|主社区|此wiki主要介绍的服务器|  

|第三方社区|详细信息|  
|:--:|-------|  
|私人社区1|拥有者为Gtem|  

## 高可用节点列表
|HA|详细信息|连接地址|  
|:--:|-------|-------|  
|01|官方提供的节点, 支持IPV4+IPV6接入|ha01.playl.net|  
|02|由gtem提供的节点，支持IPv4+IPV6接入|ha02.playl.net:5000|  
::: tip 自选高可用节点
如您觉得某个HA更适合自己的网络环境, 你可以通过以上的列表, 使用对应HA的连接地址指定HA节点  
地址请使用列表中的连接地址，类似于: **ha01.playl.net**  
注意, 当对应HA无法连接时, 请使用默认的地址: **sccp.playl.net**  
:::
::: warning 有关IPV6
遗憾的是, Mojang的Api并没有IPV6的DNS记录, 但是Mojang的API使用了AWS CloudFront前端, 所以实际上是支持IPV6的, 只是Mojang不愿意启用他们, 可以将2600:9000:2012::地址加入host以解决问题, 官方启动器将无法登录, 因为客户端与启动器都不会解析IPV6记录, 导致没有使用IPV6加入服务器  
同时在1.17后, Minecraft客户端存在bug, 不会解析srv中的IPV6记录, 导致IPV6不会被自动使用  
话虽如此, 你依然可以通过手动解析某一HA的IPV6地址并使用该IPV6地址加入服务器  
:::

## 现任工作人员列表
|管理员|详细信息|  
|:--:|-------|  
|Dmitri_233|根系统管理员|  
|gtem|私人社区管理员, HA02提供者|  

###  特别感谢/Special Thanks To:
![Paper](https://z3.ax1x.com/2021/08/27/hMKHN6.png)
![MariaDB](https://z3.ax1x.com/2021/08/27/hMK7Ax.png)
![Debian](https://z3.ax1x.com/2021/08/27/hMKL9O.png)
![GitHub](https://z3.ax1x.com/2021/08/27/hMKb4K.png)  
以及所有对本社区做出贡献的人/and everyone who contributes to this community  
