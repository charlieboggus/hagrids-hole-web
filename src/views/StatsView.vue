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
    <el-row :gutter="16"><stats-card /></el-row>
  </div>
</template>

<script lang="ts" setup>
import StatsCard from '@/components/StatsCard.vue'
</script>
