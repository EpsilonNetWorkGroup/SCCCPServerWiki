# 新成员快速入门
## 1连接到SCCCPCenter
首先您需要通过高可用网络连接到[SCCCPCenter](scccpcenter), 在Minecraft中添加服务器, 输入服务器地址*sccp.playl.net*  
这将通过SRV记录自动寻找[最佳HA服务器](contact.md#高可用节点列表), 双击进入服务器  

::: warning 有关加入资格
* 都必须使用自己的真实IP地址进入服务器  
* 正版玩家: 直接进入游玩, 正版账号必须是您自己的合法账户  
* 盗版玩家: 请先进入我们的[QQ交流群](contact)申请白名单 (盗版玩家还将有连续游玩会话的限制)  
:::  
## 2登录/选择社区
* 盗版玩家还需: 按照命令指示进行登录/注册, 然后继续选择社区  
选择社区提示简单明了, 不多介绍, 将鼠标移动到社区上方可看到社区介绍(取决于社区服务器的motd)与当前在线人数  
![choose](https://s1.ax1x.com/2022/08/29/vf0YJf.png)  
## SCCCPCenter中的命令
这些命令可以在任意社区游玩过程中使用  
### 切换社区 (SCCCPCenter通用命令)
命令: `/server [社区名]`
::: tip 示例
```
/server
```
输入/server将列出社区列表, 玩家可以点击切换到对应的社区  
或者直接在命令后输入社区名来切换 例如: /server 主社区
:::  
### 切换聊天模式 (SCCCPCenter通用命令)
命令: `/scccpcenter <聊天模式名>`
::: tip 示例
```
/scccpcenter chatnon
```
/scccpcenter chatnon ->默认模式, 进入社区与聊天信息与QQ群聊互相同步, 接收其他玩家进入其他社区的信息  
/scccpcenter chatoff ->安静模式, 进入社区与聊天信息互不同步, 不接收其他社区的信息, 并完全隔绝社区聊天系统  
/scccpcenter chatall ->吵闹模式, 在默认模式基础上, 还接收其他社区的聊天  
:::  
### 修改密码 (SCCCPCenter通用命令)
命令: `/changepass <原密码> <新密码>` `/changepassword <原密码> <新密码>` 
::: tip 示例
```
/changepass 123456 1233214567
```
输入完成后, 密码将被修改, 如是正版则无法操作
:::  
### 转正版命令 (SCCCPCenter通用命令)
命令: `/premium` `/license` 
::: tip 示例
```
/premium 123456
/premium 123456 confirm
```
输入完成后, 适用于盗版玩家购买正版账号后并正版用户名与盗版一样的情况下可转为正版, 成功后您保存在服务器中的密码哈希将被删除, 之后可以使用对应的正版账户进行自动登录, 此操作不可逆, 如是正版则无法操作  
:::  
### 登出/摧毁会话 (SCCCPCenter通用命令)
命令: `/destorysession` 
::: tip 示例
```
/destorysession
```
输入完成后, 会话缓存将清除, 登录服务器时将需要输入密码, 如果是正版则无影响  
:::  


还请尽情探索[Wiki内容](dirs), 如果你有任何问题, 请[联系我们](contact)
