<template>
  <div class="markov">
    <!-- Page Header / Controls -->
    <el-row class="mb-4">
      <el-col :span="4">
        <el-button @click="generate">Generate</el-button>
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
        <el-table :data="tableData" style="width: 100%; height: 100%">
          <el-table-column prop="data" label="History" />
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref } from 'vue'
import { MarkovTableData } from '../model/markov-table-data'

let tableData: Ref<MarkovTableData[]> = ref([])
let i = 0

const generate = () => {
  // TODO: here's where the call to the Lambda function will be made...
  // we'll populate the table with whatever the Lambda returns
  const tableItem: MarkovTableData = new MarkovTableData()
  tableItem.data = `Item${i}`
  i++
  tableData.value.unshift(tableItem)
}

const clearOutput = () => {
  tableData.value = []
}

const shouldDisableClear = (): boolean => {
  return tableData.value.length === 0
}
</script>

<style scoped></style>
