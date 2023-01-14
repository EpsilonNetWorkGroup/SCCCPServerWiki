## ClientGuard反作弊程序介绍以及安装或更新
SCCCPCenter支持ClientGuard反作弊软件, 他是[半开源](https://github.com/EpsilonNetWorkGroup/ClientGuard)的  
玩家在安装完成后, SCCCPCenter与所有社区服务器都将可以获取客户端上反作弊用途必要的信息, 并在必要时执行HWID(机器码)封禁  
::: warning 关于杀毒软件
由于反作弊软件运行时所使用的权限很高，对于杀毒软件来说此类来历不明的软件很敏感，因此普遍遭到误报。  
**同时为了避免下载到非我们官方发布的文件，请在下载后确认sha-256散列正确，并在交流群内确认报毒情况与类型**  
解决方法是购买由微软签发的EV 代码签名证书，但价格(9000RMB一年~3000RMB一年)目前对于我们来说负担不起，如有意帮助我们购买证书，请联系我们。  
:::
* 安装ClientGuard后每社区都可能有对客户端环境要求不同的规则, 但ClientGuard始终对客户端进行保护以避免被恶意程序破坏  
::: details 展开安装/卸载/更新步骤(目前支持Fabric 1.19.3)
1.首先点击此处[下载最新ClientGuard反作弊软件(0.9.9)](https://gitcode.net/Dmitri233/SCCCPServerWiki/-/raw/master/docs/public/ClientGuard-0.9.9-SNAPSHOT-obf.jar), 下载完成后, 将其作为Fabric模组放入mods文件夹(仅支持Windows平台)  
**重要, 下载完成后请验证文件SHA-256：ACA7708914C95D330980C218E0BF44A796B2EAA493A46E3FB02164F0AE0E530F**  
2.现在导航到您的mods文件夹, 对于官方启动器, 你可以这样做:
![indexmods](https://s1.ax1x.com/2022/11/20/zMaQzT.png)  
3.右键mod文件, 打开属性并复制mod文件的完整位置:  
![copydir](https://s1.ax1x.com/2022/11/20/zMa1QU.png)  
4.打开一个带有管理员权限的命令提示符(cmd):  
![admincmd](https://s1.ax1x.com/2022/11/20/zMa3yF.png)  
5.在命令提示符输入mod文件所在盘符回车确认, 然后输入cd后面加空格与刚刚从属性复制的文件位置:  
![gotodir](https://s1.ax1x.com/2022/11/20/zMaKJ0.png)  
6.使用java运行mod文件, 如果没有java命令, 请自行指定java.exe的完整路径:  
![install](https://s1.ax1x.com/2022/11/20/zMaMWV.png)  
7.按照弹出的提示, 接受隐私策略后即可安装/卸载ClientGuard反作弊软件, 更新请先卸载再安装  
:::

## 高可用网络
高可用网络由各SCCCPHA(网络节点, 由官方或其他人提供的服务器)组成, 最终允许玩家通过互联网连接到SCCCPCenter  
## SCCCPCenter
SCCCPCenter是一个代理服务器, 对玩家身份进行验证, 向内部统一UUID, 皮肤, 并允许玩家连接到各个不同的社区  
必须要通过高可用节点才能够使玩家在公共互联网上连接SCCCPCenter  
## 第三方社区
由第三方合作者管理的服务器, 更新记录必须记录在此Wiki, 通过SCCCPCenter连接  
带有\*后缀的社区/服务器是第三方社区  
如果想成为第三方社区的服主, 请[联系我们](./contact)  

## 有关修改过的客户端
如果您在进入SCCCPCenter时, 收到类似以下信息, 那么说明您的客户端*已被修改*.
![avatar](https://s4.ax1x.com/2022/02/20/Hqb6Ts.png)  
这是为了提醒您, 你的客户端已经过修改, 可能不再支持最新的[玩家安全特性](https://help.minecraft.net/hc/en-us/articles/360052763631?ref=launcher),如Minecraft启动器弹出的警告一样, 服务器中的提醒不可忽略, 因为并不像启动器中一样需要点击确认  
![avatar](https://s4.ax1x.com/2022/02/20/HqbhlT.png)  
虽然我们深知社区开发的内容对于Minecraft的重要性, 但安全第一, 为了您和您的客户端, 系统着想, 修改过的客户端通常加载了第三方开发者的代码, 这使您变得极不安全, 第三方代码如果想要获得您系统上很高的权限, 很容易就可以做到. 第三方开发者的账号可能会被入侵, 通过自动更新等等方式将恶意代码放入您使用的Mod中, 享受这些额外的功能时, 总是带有代价.  
[Paper](https://github.com/PaperMC/Paper/blob/79dd62ae620c082646b2f376451cceb52d3b4618/patches/server/0801-Add-root-admin-user-detection.patch)服务端在用户使用高权限用户运行时同样会发出警告, 因为已经出现一些含有恶意代码, 开发者账户被盗的案例.  
  
* 同时对于第三方代码的质量也无法保证, 可能在您不知情的情况下做出与作弊用户一致的行为, 因此对于用户, 我们建议减少加载在客户端中的mod,并安装[ClientGuard反作弊程序](./scccpcenter#clientguard反作弊程序介绍以及安装或更新)! 
* **所有官方社区都禁止使用与原版行为不同(作弊)的Mod**  
