module.exports = {
    head: [
        ['link', { rel: 'icon', href: '/img/server-icon.png'}],
        ['script',{ src: '/js/banner.js' }],
    ],
    title: 'SCCCP Community Server Wiki',
    description: 'SCCCPServerWikiMark',
    lang: 'zh-CN',
    lastUpdated: true,
    themeConfig: {
        logo: '/img/server-icon.png',
        nav: [
            { text: '主页', link: '/' },
            {
                text: '目录',
                items: navdir()
            },
            { text: '取得交流/社区信息', link: '/contact'},
        ],
        sidebar: {
            '/Mainc/': sidebarmainc()
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/EpsilonNetWorkGroup/SCCCPServerWiki' }
        ],
        footer: {
            message: '页面内容受到CC BY-NC-ND 4.0许可',
            copyright: '这不是Minecraft官方 不由Mojang认可 不隶属于Mojang Minecraft是Mojang的商标'
        },
        editLink: {
            pattern: 'https://github.com/EpsilonNetWorkGroup/SCCCPServerWiki/edit/master/docs/:path',
            text: '在Github上编辑'
        },
        lastUpdatedText: '最后更新时间'
    }
}

function navdir() {
    return [
        { items: [
            { text: '主目录', link: '/dirs' }
        ],},
        { items: [
            { text: '主社区介绍', link: 'Mainc/' }
        ]}
    ]
}

function sidebarmainc() {
    return [
        {
          text: '主社区',
          items: [
            { text: '介绍', link: 'Mainc/' },
            {
                text: '可用命令',
                collapsible: true,
                collapsed: true,
                items: [
                    { text: 'Tpa(玩家间传送)', link: '/Mainc/command/tpa' },
                    { text: 'Tpoint(传送点功能)', link: '/Mainc/command/tpoint' },
                    { text: 'df(难度调整功能)', link: '/Mainc/command/diffmod' },
                    { text: 'landclaim(私人领地标记)', link: '/Mainc/command/landclaim' },
                    { text: 'c(破坏/容器交互查询)', link: '/Mainc/command/coreprotect' },
                    { text: '杂项命令(高级功能)', link: '/Mainc/command/other' },
                ],
            },
            { text: '网页地图', link: '/Mainc/netmap' },
            { text: '使用ClientGuard时的特殊机制', link: '/Mainc/mods' },
            { text: 'FAQ(常见问题)', link: '/Mainc/faq' }
          ]
        }
    ]
}
