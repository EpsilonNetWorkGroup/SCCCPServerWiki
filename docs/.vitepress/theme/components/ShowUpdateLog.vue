<template>
    <h2>此版本的改动</h2>
    <ul>
        <li v-for="i in matchedDataKeys">
            <a :href="data[i].dateUrl">{{ dateUrlFormat(data[i].dateUrl) }} - {{ data[i].description }}</a>
        </li>
    </ul>
</template>

<script lang="ts" setup>
import { useRoute } from 'vitepress'
import { data } from "./updateLog.data";

const route = useRoute()

const matchedDataKeys = Object.keys(data).filter(k => k.startsWith(route.path)).sort((a, b) => a.localeCompare(b))

function dateUrlFormat(dateString: string) {
  if (dateString[0].length >= 4)
    dateString = dateString.replace("-", "年")
  return `${dateString.replace("-", "月").split("-").join("日与")}日`
}
</script>
