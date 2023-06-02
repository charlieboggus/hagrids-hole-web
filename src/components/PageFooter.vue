<template>
  <div class="pageFooter">
    <el-divider />
    <el-row :gutter="15">
      <el-col :span="8">
        <el-link href="https://github.com/charlieboggus" target="_blank"
          >Github</el-link
        >
      </el-col>
      <el-col :span="8" class="center">
        <el-text>&copy; Copyright 2023. All rights reserved.</el-text>
      </el-col>
      <el-col :span="8">
        <div style="float: right">
          <el-link :underline="false" @click="cowboyClick">🤠</el-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import env from '@/env'
import axios from '@/clients/axios'
import { ElNotification } from 'element-plus'

const cowboyClick = async () => {
  const client = axios.create({ baseUrl: env.API_GATEWAY_URL })
  await client
    .put('/api/cowboy', { token: env.COWBOY_TOKEN })
    .then(() => {
      ElNotification({
        message: 'yeehaw',
        type: 'success',
      })
    })
    .catch((err) => {
      console.log(err)
    })
}
</script>

<style scoped>
.pageFooter {
  font-family: 'Courier New', Courier, monospace;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
