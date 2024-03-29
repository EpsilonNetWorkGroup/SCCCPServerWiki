# 一些杂项命令
### 切换scccphelper
命令: `/helper` 
::: tip 示例
```
/helper
```
这将切换是否使用新手教学广播功能  
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
查看服务器TPS(每秒时间刻/Ticks Per Second), 可用于判断服务器是否出现卡顿, 低于20则有卡顿  
:::  
### 查看服务器MSPT
命令: `/mspt` 
::: tip 示例
```
/mspt
```

查看服务器MSPT(每毫秒时间刻/Milliseconds Per Tick), 可用于判断服务器处理压力与性能, 高于50则会开始损失TPS  
  
* 注意：  
* 此命令权限需要带上理由向管理员申请, 因为/mspt其实是带有误导性的, 并不代表服务器是否卡顿, 普通玩家应使用/tps命令查询服务器卡顿  
* 更详细的解释: SCCCP官方社区服务器的处理器并非全时保持在最高频率运行, 在当前的CPU频率不能完成处理需求时, Linux内核按照预定的调度机制使用微码向CPU发送调整频率的信号, 处理器频率提升, 此时服务器MSPT会在40-70之间浮动(频率提升延迟), 但CPU频率不一定上升到最高, 普通玩家会认为服务器已经快要丢失TPS了, 这是不正确的, 当MSPT稳定低于45-50时, 证明服务器性能空闲, 即就算CPU频率处于可降低到的最低状态, 但处理性能依然有空闲(无用功? 在物理中处理器做的都是无用功, 这里的无用功不同)  
:::  
### 查看在线玩家的反作弊判定状态与Ping
命令: `/acstatus [玩家名]`  
::: tip 示例
```
/acstatus Notch
```
可查看反作弊对某玩家的违规判定与ping判定状态  
* 注意：  
* 此命令权限需要向管理员申请, 这是安全考量, 在社区中活跃一年的玩家才有申请资格  
:::  
### 查看mobcaps(生成上限)
命令: `/mobcaps` `/pmobcaps` 
::: tip 示例
```
/mobcaps
/pmobcaps
```
/mobcaps用于列出玩家所在世界的生物生成上限, /pmobcaps用于列出玩家个人的生物生成上限, 用于帮助玩家分析生物刷新规律  
:::  
