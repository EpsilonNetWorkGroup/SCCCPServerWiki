module.exports = {
  head: [
    [ "link", { rel: "icon", href: "/assets/img/server-icon.png"} ],
    ['script',{ src: '/assets/banner.js' }],
  ],
  title: "SCCCP Community Server Wiki",
  description: "SCCCPServerWikiMark",
  themeConfig: {
    logo: "./assets/img/server-icon.png",
    lastUpdated: "最后更新",
    nav: [
      { text: "主页", link: "/" },
      { text: "目录", link: "/dirs" },
      { text: "加入QQ群", link: "/contact"},
    ],
    sidebar: [
      ["/", "主页"],
      ["/guide", "新成员快速入门"],
      ["/scccpcenter", "反作弊软件与SCCCPCenter"],
      {
        title: "主社区",
        path: "/Mainc",
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ["/Mainc/", "介绍主社区"],
          {
            title: "命令",
            collapsable: true,
            sidebarDepth: 1,
            children: [
              ["/Mainc/command/tpa", "Tpa(玩家间传送)"],
              ["/Mainc/command/tpoint", "Tpoint(传送点功能)"],
              ["/Mainc/command/diffmod", "df(难度调整功能)"],
              ["/Mainc/command/landclaim", "landclaim(私人领地标记)"],
              ["/Mainc/command/coreprotect", "c(破坏/容器交互查询)"],
              ["/Mainc/command/other", "杂项命令(高级功能)"]
            ],
          },
          ["/Mainc/netmap", "网页地图"],
          ["/Mainc/mods", "使用ClientGuard时的特殊机制"],
          ["/Mainc/faq", "FAQ(常见问题)"]
        ]
      },
      ["/updatelog/", "全社区更新日志"],
      ["/contact", "联系我们/社区信息"]
    ],

    repo: "EpsilonNetWorkGroup/SCCCPServerWiki",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "在Github上编辑",
  },
  plugins: {
    "@vuepress-reco/bgm-player": {
      audios: [
        {
          name: "5",
          artist: "Samuel Åberg & Jagdaggar Remix",
          url: "/assets/bgm/Disc 5 Jagdaggar Remix.mp3",
          cover: "/assets/bgm/Disc5.png",
        },
        {
          name: "Infinite Amethyst",
          artist: "Lena Raine",
          url: "/assets/bgm/Infinite Amethyst.ogg",
          cover: "/assets/bgm/Infinite Amethyst.png",
        },
        {
          name: "Otherside",
          artist: "Lena Raine",
          url: "/assets/bgm/Otherside.ogg",
          cover: "/assets/bgm/Otherside.png",
        },
      ],
      autoShrink: true,
      shrinkMode: "float",
    },
  },
};
