<template>
  <div class="markov">
    <!-- Page Header / Controls -->
    <el-row class="mb-4">
      <el-col :span="4">
        <el-button @click="generate" :disabled="loading">Generate</el-button>
      </el-col>
      <el-col :span="16">
        <h2 style="text-align: center">Hagrid's Hivemind</h2>
      </el-col>
      <el-col :span="4">
        <el-button
          type="danger"
          @click="clearOutput"
          :disabled="shouldDisableClear()"
          style="float: right"
        >
          <el-icon style="vertical-align: middle">
            <Close />
          </el-icon>
          <span style="vertical-align: middle">Clear</span>
        </el-button>
      </el-col>
    </el-row>
    <br />
    <!-- Output table -->
    <el-row>
      <el-col :span="24">
        <el-table
          v-loading="loading"
          :data="tableData"
          style="width: 100%; height: 100%"
        >
          <el-table-column prop="data" label="History" />
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref } from 'vue'
import env from '@/env'
import axios from '@/clients/axios'

type TableData = {
  data: string
}

const loading = ref(false)
const tableData: Ref<TableData[]> = ref([])

const generate = async () => {
  loading.value = true
  const client = axios.create({ baseUrl: env.API_GATEWAY_URL })
  await client.get('/api/markov').then((res) => {
    tableData.value.unshift({ data: res.data })
    loading.value = false
  })
}

const clearOutput = () => {
  tableData.value = []
}

const shouldDisableClear = (): boolean => {
  if (loading.value) {
    return true
  }
  return tableData.value.length === 0
}
</script>

<style scoped></style>
