

<script setup lang="ts">
import { ref } from 'vue'
const images = ref([
  {
    src: './store.jpg',
    name: 'image-1.jpg'
  },
  {
    src: './giscus-01.png',
    name: 'image-2.jpg'
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.5/3.jpg',
    name: 'image-3.jpg'
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.5/4.jpg',
    name: 'image-4.jpg'
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.5/5.jpg',
    name: 'image-5.jpg'
  }
])
</script>
<template>
  <Image :src="images" loop album 
    height="360px" width="480px"/>
</template>

