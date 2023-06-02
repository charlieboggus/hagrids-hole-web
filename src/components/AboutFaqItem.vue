<template>
  <div class="aboutFaqItem">
    <el-text class="question">{{ props.question }}?</el-text>
    <br />
    <el-text class="answer">{{ props.answer }}</el-text>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
const props = defineProps({
  question: { type: String, required: true },
  answer: { type: String, required: true },
})
</script>

<style scoped>
.aboutFaqItem {
  margin-bottom: 20px;
}

.question {
  font-weight: bold;
}
</style>
