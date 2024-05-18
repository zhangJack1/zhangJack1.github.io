<template>
    <f-tabs :type="type" :position="position">
      <f-tabs-item label="知足">
        <p>怎么去拥有一道彩虹，怎么去拥抱一夏天的风</p>
      </f-tabs-item>
      <f-tabs-item label="星空">
        <p>摸不到的颜色是否叫彩虹，看不到的拥抱是否叫做微风</p>
      </f-tabs-item>
      <f-tabs-item label="彩虹">
        <p>你的爱就像彩虹，我张开了手却只能抱住风</p>
      </f-tabs-item>
    </f-tabs>
  
    <div>
      风格：
      <f-radio-group v-model="type">
        <f-radio label="line">line</f-radio>
        <f-radio label="card">card</f-radio>
        <f-radio label="segment">segment</f-radio>
      </f-radio-group>
    </div>
  
    <div>
      方向：
      <f-radio-group v-model="position">
        <f-radio label="top">top</f-radio>
        <f-radio label="right">right</f-radio>
        <f-radio label="bottom">bottom</f-radio>
        <f-radio label="left">left</f-radio>
      </f-radio-group>
    </div>
  </template>
  
  <script lang="ts" setup>
    import { ref } from 'vue'
    import type { TabsType, TabsPosition } from 'fighting-design'
  
    const type = ref<TabsType>('line')
    const position = ref<TabsPosition>('top')
  </script>
  