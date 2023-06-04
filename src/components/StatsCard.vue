<template>
  <el-col :span="4">
    <div class="statsCard">
      <el-statistic :value="100">
        <template #title>Messages Logged</template>
      </el-statistic>
    </div>
  </el-col>
  <!-- messages sent per user, time spent in voice per user -->
  <!-- most common words used by user? maybe, but that would take a lot of compute -->
</template>

<style scoped>
.statsCard {
  height: 100%;
  padding: 20px;
  border-radius: 4px;
  background-color: rgba(134, 134, 134, 0.067);
}
</style>
