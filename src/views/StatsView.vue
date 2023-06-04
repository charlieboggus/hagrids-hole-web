<template>
  <div class="stats">
    <!-- Page title -->
    <el-row>
      <el-col :span="24">
        <h2 style="text-align: center">Hagrid's Statistics</h2>
      </el-col>
    </el-row>
    <br />
    <!-- Page content -->
    <div v-for="item in statsGridRef" :key="item.id">
      <el-row :gutter="16">
        <el-col v-for="data in item.stats" :key="data.userId" :span="8">
          <stats-card
            :username="data.username"
            :messages-sent="data.messageCount"
            :voice-minutes="data.minutesInVoice"
          />
        </el-col>
      </el-row>
    </div>
    <br />
    <el-text>
      <span style="font-weight: bold">Total Messages: </span>{{ totalMessages }}
    </el-text>
    <br />
    <br />
    <el-text>
      <span style="font-weight: bold">Total Voice Minutes: </span>
      {{ Math.floor(totalMinutes) }}
    </el-text>
  </div>
</template>

<script lang="ts" setup>
import StatsCard from '@/components/StatsCard.vue'
import axios from '@/clients/axios'
import env from '@/env'
import { ElNotification } from 'element-plus'
import { Ref, ref } from 'vue'

interface DynamoData {
  Count: number
  Items: HagridStats[]
  ScannedCount: number
}

interface HagridStats {
  userId: string
  username: string
  messageCount: number
  minutesInVoice: number
}

interface StatsGridRow {
  id: number
  stats: HagridStats[]
}

const client = axios.create({ baseUrl: env.API_GATEWAY_URL })
const loadStatsData = async () => {
  let responseData: DynamoData = { Count: 0, ScannedCount: 0, Items: [] }
  await client
    .get('/api/stats')
    .then((res) => {
      responseData = res.data
    })
    .catch((err) => {
      console.log(err)
      ElNotification({
        title: 'Error',
        message: 'There was an unexpected error when loading stats data.',
        type: 'error',
      })
    })
  return responseData.Items
}
const statsData: HagridStats[] = await loadStatsData()

const totalMessages = ref(0)
const totalMinutes = ref(0)
for (const stat of statsData) {
  if (stat.messageCount) {
    totalMessages.value += stat.messageCount
  }
  if (stat.minutesInVoice) {
    totalMinutes.value += stat.minutesInVoice
  }
}

const statsGrid: StatsGridRow[] = []
let colId = 0
let rowId = 1
let currentRow: StatsGridRow = { id: 0, stats: [] }
for (const data of statsData) {
  if (colId === 3) {
    statsGrid.push(currentRow)
    currentRow = { id: rowId, stats: [] }
    colId = 0
    rowId++
  }
  currentRow.stats.push(data)
  colId++
}
statsGrid.push(currentRow)
const statsGridRef: Ref<StatsGridRow[]> = ref(statsGrid)
</script>

<style scoped></style>
