<template>
  <div class="navigationBar">
    <el-menu
      :default-active="activeTab"
      :ellipsis="false"
      :router="true"
      class="el-menu-demo"
      mode="horizontal"
    >
      <el-menu-item index="0" route="/">
        <el-text class="mx-l" size="large">Hagrid's Hole</el-text>
      </el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="1" route="/tts"> Text-to-Speech </el-menu-item>
      <el-menu-item index="2" route="/markov">
        Markov Text Generator
      </el-menu-item>
      <el-menu-item index="3" route="/stats">Statistics</el-menu-item>
      <el-menu-item index="4" route="/about">About</el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const activeTab = ref('0')
</script>

<style scoped>
.navigationBar {
  font-family: 'Courier New', Courier, monospace;
}

.flex-grow {
  flex-grow: 1;
}
</style>
