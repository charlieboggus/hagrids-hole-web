<template>
  <div class="pageFooter">
    <el-divider />
    <el-row>
      <el-col :span="8">
        <el-link href="https://github.com/charlieboggus" target="_blank"
          >Github</el-link
        >
      </el-col>
      <el-col :span="8">
        <el-text style="text-align: center"
          >&copy; Copyright 2023. All rights reserved.</el-text
        >
      </el-col>
      <!-- Figure out what to do with this... I like the emoji tho fr -->
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
</style>
