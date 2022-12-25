import Theme from 'vitepress/theme'
import './style/var.css'

import vitepressMusic from 'vitepress-plugin-music'
import 'vitepress-plugin-music/lib/css/index.css'

const playlist = [
  {
    name: '5',
    author: 'Samuel Åberg & Jagdaggar Remix',
    file: '/bgm/Disc 5 Jagdaggar Remix.mp3',
  },
  {
    name: 'Infinite Amethyst',
    author: 'Lena Raine',
    file: '/bgm/Infinite Amethyst.ogg',
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