import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style/var.css'
import './style/custom.css'

import vitepressMusic from 'vitepress-plugin-music'
import 'vitepress-plugin-music/lib/css/index.css'
import ShowUpdateLog from "./components/ShowUpdateLog.vue";
import {SongInfo} from "vitepress-plugin-music/lib/type";

const playlist: SongInfo[] = [
  {
    name: 'Tears',
    author: 'Amos Roddy',
    file: '/bgm/Tears.ogg',
  },
  {
    name: 'Pokopoko',
    author: '谷冈久美',
    file: '/bgm/Pokopoko.ogg',
  },
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
  {
    name: 'Labyrinthine',
    author: 'Lena Raine',
    file: '/bgm/Labyrinthine.ogg',
    hide: false
  }
]

export default {
  ...DefaultTheme,
  enhanceApp: ({ app }) => {
    vitepressMusic(playlist)
    app.component('ShowUpdateLog', ShowUpdateLog)
  }
} satisfies Theme
