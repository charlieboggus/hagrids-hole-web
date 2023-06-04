<template>
  <el-card>
    <template #header>
      <el-avatar
        :size="25"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
      <span>&nbsp;&nbsp;&nbsp;</span>
      <span>{{ props.username }}</span>
    </template>
    <el-row class="center">
      <el-col :span="12">
        <el-statistic title="Messages Sent" :value="props.messagesSent" />
      </el-col>
      <el-col :span="12">
        <el-statistic title="Minutes in Voice" :value="props.voiceMinutes" />
      </el-col>
    </el-row>
  </el-card>
  <br />
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
const props = defineProps({
  username: { type: String, required: true },
  messagesSent: { type: Number, required: true },
  voiceMinutes: { type: Number, required: true },
})
</script>

<style scoped>
.center {
  text-align: center;
}
</style>
