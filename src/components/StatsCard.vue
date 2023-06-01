<template>
  <el-col :span="4">
    <div class="statsCard">
      <el-statistic :value="100">
        <template #title>Messages Logged</template>
      </el-statistic>
    </div>
  </el-col>
</template>

<style scoped>
.statsCard {
  height: 100%;
  padding: 20px;
  border-radius: 4px;
  background-color: rgba(134, 134, 134, 0.067);
}
</style>
