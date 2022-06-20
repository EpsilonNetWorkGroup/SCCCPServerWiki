# 一些杂项命令
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
### 更换皮肤 (SCCCPCenter通用命令)
命令: `/skin set <玩家名/皮肤对应的网址> [steve/slim]`
::: tip 示例
```
/skin set Notch
```
输入完成后, 重进服务器, 将更换为该正版玩家的皮肤, 盗版也可用  
steve/slim参数用于从网站获取皮肤的情况下指定玩家模型(经典/纤细)  
:::  
### 重置皮肤 (SCCCPCenter通用命令)
命令: `/skin clear`
::: tip 示例
```
/skin clear
```
输入完成后, 重进服务器, 将清除皮肤为默认  
:::  
### 查看在线玩家
命令: `/list` 
::: tip 示例
```
/list
```
列出在线的玩家  
:::  
### 查看服务器TPS
命令: `/tps` 
::: tip 示例
```
/tps
```
查看服务器TPS(每秒时间刻), 可用于判断服务器是否出现卡顿, 低于20则有卡顿  
:::  
### 查看服务器MSPT
命令: `/mspt` 
::: tip 示例
```
/mspt
```
查看服务器MSTP(每毫秒时间刻), 可用于判断服务器处理压力与性能, 高于50则会开始损失TPS  
:::  
### 查看mobcap
命令: `/mobcap` `/pmobcap` 
::: tip 示例
```
/mobcap
/pmobcap
```
mobcap用于列出当前世界的生成上限, pmobcap用于列出玩家个人生成上限, 用于帮助玩家分析刷怪规则  
:::  