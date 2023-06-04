import Theme from 'vitepress/theme'
import './style/var.css'

import vitepressMusic from 'vitepress-plugin-music'
import 'vitepress-plugin-music/lib/css/index.css'

const playlist = [
  {
    name: '5',
    author: 'Samuel Åberg & Jagdaggar Remix',
    file: 'https://gitcode.net/Dmitri233/SCCCPServerWikiPublicFile/-/raw/main/bgm/Infinite%20Amethyst.ogg',
  },
  {
    name: 'Infinite Amethyst',
    author: 'Lena Raine',
    file: 'https://gitcode.net/Dmitri233/SCCCPServerWikiPublicFile/-/raw/main/bgm/Infinite%20Amethyst.ogg',
    hide: false
  },
  {
    name: 'Otherside',
    author: 'Lena Raine',
    file: 'https://gitcode.net/Dmitri233/SCCCPServerWikiPublicFile/-/raw/main/bgm/Otherside.ogg',
    hide: false
  },
]

export default {
  ...Theme,
  enhanceApp: (ctx) => {
    vitepressMusic(playlist)
  }
}