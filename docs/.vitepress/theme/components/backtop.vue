<script setup lang="ts">
function onShow (show: boolean) {
  console.log('show', show)
}
</script>
<template>
  <BackTop :right="100" @show="onShow" />
</template>