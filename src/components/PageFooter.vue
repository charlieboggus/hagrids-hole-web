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
          <el-text>🤠</el-text>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup></script>

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
