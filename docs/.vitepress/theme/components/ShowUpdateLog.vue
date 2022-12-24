<template>
    <h2>此版本的改动</h2>
    <ul>
        <li v-for="(value, key) in updates">
            <a :href="String(key)">{{ value }}</a>
        </li>
    </ul>
</template>

<!-- unused components -->
<script lang="ts" setup>
import { useRoute } from 'vitepress'
// import { readdirSync } from 'fs'

    let updates
    initUpdates()

    function initUpdates() {
        const route = useRoute()
        const Reversin = route.data.title
        // const currentRoute = ref(route)
        // const files = readdirSync('/docs/updatelog/'+Reversin)

        updates = {
            '11-28': '11月28日 - 传送点,scccpsecurity, 新存储, wiki, 维护记录公开',
            '12-4': '12月4日 - 更新scccpsys与scccpbot,Alpha测试服重置到最新存档'
        }
    }
</script>
