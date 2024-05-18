---
layout: doc
layoutClass: m-nav-layout
sidebar: false
prev: false
next: false
editLink: false
outline: [2, 3, 4]
---

<style src="/.vitepress/theme/style/nav.scss"></style>

<script setup>
import { NAV_DATA } from '/.vitepress/theme/untils/data'
</script>


# 优秀的外部链接

::: info 教程
本文参考茂茂导航
:::

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>
