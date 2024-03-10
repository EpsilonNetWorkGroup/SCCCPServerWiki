import Theme from 'vitepress/theme'
import './style/var.css'

import vitepressMusic from 'vitepress-plugin-music'
import 'vitepress-plugin-music/lib/css/index.css'

const playlist = [
  {
    name: 'Relic',
    author: 'Aaron Cherof',
    file: '/bgm/Relic.ogg',
  },
  {
    name: '5',
    author: 'Samuel Åberg & Jagdaggar Remix',
    file: '/bgm/Disc%205%20Jagdaggar%20Remix.mp3',
  },
  {
    name: 'Infinite Amethyst',
    author: 'Lena Raine',
    file: '/bgm/Infinite%20Amethyst.ogg',
    hide: false
  },
  {
    name: 'Otherside',
    author: 'Lena Raine',
    file: '/bgm/Otherside.ogg',
    hide: false
  },
]

export default {
  ...Theme,
  enhanceApp: (ctx) => {
    vitepressMusic(playlist)
  }
}
