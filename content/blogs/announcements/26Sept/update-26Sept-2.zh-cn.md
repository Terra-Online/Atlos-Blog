---
title: "1.5下半更新"
description: "1.5版本更新（二）：右键菜单、渲染优化、以及全新的 OEM SDK"
date: 2026-09-24
---

感谢各位对终末地地图集的持续使用与支持。

过去数周内，我们对OEM进行了若干重大更新，并将 OEM 的地图数据进行了封装开放给其他应用。下文将介绍全新的右键菜单、大批量点位的渲染优化、更深入的分享链接及移动端体验改进，以及——终末地地图集 SDK。

## 右键操作菜单

![](/blogs/announcements/26Sept/fig3.zh-cn.webp)

- 右键**点位**，会打开针对该点位及所在子地区的操作菜单。档案点位在这些批量操作中会按同一类点位处理。
- 右键**地图空白处**，可以复制直达右键坐标的链接、切换当前显示的子地区、切换已完成点位的显示状态，或撤销/重做最近的地图操作。
- 右键**点位筛选器**，您可以快速全选或者取消选择整个类别中的所有筛选器。
- 在桌面端按住 **Option(⌥)/Alt** 再右键，可以继续使用浏览器原生菜单。

## 性能优化

![](/blogs/announcements/26Sept/fig4.zh-cn.webp)

我们对大批量点位渲染进行了全面优化，OEM 的性能得到了前所未有的提升。地图操作整体更加轻快，点位密集的区域也能顺畅探索。

在当前的点位规模下，即使启用全部筛选器并关闭聚合，您依然可以流畅拖动地图，纵览整片区域。


## 分享链接与内容定位

点位和地图右键菜单现在可以生成链接，点位分享链接也可以定位到特定社区图片或公开评论；打开后会进入对应点位详情，并选中指定图片或评论。

移动端的敌人与档案分组点位筛选更便于浏览，我们还精简了首次使用引导，并减少页面隐藏期间的位置同步工作，避免后台标签页持续执行定位同步带来的性能损耗。

## 在您的网站中接入终末地地图集

![](/blogs/announcements/26Sept/fig5.webp)

我们的 SDK 已经正式发布。OEM SDK 将终末地地图集（OEM）带到 Wiki、游戏数据库和玩家工具网站。您可以为自己维护的攻略与资料加入一张开箱即用的地图；点位数据和地图资源由 OEM 持续维护，开发者无需从头搭建地图，也不必另行跟进地图数据更新，而是专注于自己的工具或攻略创作。

SDK 提供地区、楼层和界面语言切换，浏览点位、地点名称与区域边界等基础地图功能，以及不同版本的历史地图瓦片供您自由选择、免费取用。您也可以添加自己的点位，标注攻略或资料条目中提到的位置，并让地图操作与站内内容相互关联。SDK 支持 JavaScript/TypeScript 项目，并提供可直接使用的 React 集成方式。

您可以在[在线 SDK Demo](https://sdk.opendfieldmap.org/demo/)中调整地图并生成可直接使用的接入代码；也可前往 [OEM-SDK 项目主页](https://github.com/Terra-Online/OEM-SDK)，或通过 [npm](https://www.npmjs.com/package/@opendfieldmap/sdk) 安装 `@opendfieldmap/sdk`。

---

以上为本次更新的全部内容。如您在使用地图的过程中遇到任何疑问，或对上述功能有任何意见及建议，欢迎通过以下方式与我们联系：

* **项目 QQ 群组**：[加入【终末地大地图交流】](https://qm.qq.com/q/OQbocvQzCO)
* **Discord 玩家社区**：[加入【Endfield Surveying Institute】](https://discord.gg/BFMAKZSUG7)
* **Bluesky 账户**：[追踪 Open Endfield Map](https://bsky.app/profile/opendfieldmap.bsky.social)
* **X 账户**：[追踪 Open Endfield Map](https://x.com/OpenEndfieldMap)
* **支持团队邮箱**：[support@opendfieldmap.org](mailto:support@opendfieldmap.org)
* **Atlos 代码仓库**：[在 GitHub 上查看 Atlos](https://github.com/Terra-Online/Atlos)
* **OEM-SDK 代码仓库**：[在 GitHub 上查看 OEM-SDK](https://github.com/Terra-Online/OEM-SDK)
