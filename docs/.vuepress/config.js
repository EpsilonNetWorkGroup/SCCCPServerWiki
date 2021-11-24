module.exports = {
  title: "SCCCP Community Server Wiki",
  description: "SCCCPServerWikiMark",
  themeConfig: {
    logo: "./assets/img/server-icon.png",
    lastUpdated: '最后更新',
    locales: {
      '/': {
        lang: 'zh-CN',
      }
    },
    nav: [
      { text: "主页", link: "/" },
      { text: "服务器介绍", link: "/preface" },
      { text: "目录", link: "/dirs" },
      { text: "论坛社区", link: "https://bbs.playl.net/forums/scccp/" }
    ],
    sidebar: [
      ["/", "主页"],
      ["/dirs", "目录"],
    ],
    repo: "SCCCP-Team/SCCCPServerWiki",
    editLinks: true,
    editLinkText: "在Github上编辑",
  },
  plugins: {
    '@vuepress-reco/bgm-player': {
      audios: [
        {
          name: 'Otherside',
          artist: 'Lena Raine',
          url: '/assets/bgm/Otherside.ogg',
          cover: '/assets/bgm/Otherside.png'
        }
      ],
      autoShrink: true,
      shrinkMode: 'float',
     }
  }
};
