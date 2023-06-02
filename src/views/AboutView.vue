<template>
  <div class="about">
    <!-- Page title -->
    <el-row>
      <el-col :span="24">
        <h2 style="text-align: center">About Hagrid's Hole</h2>
      </el-col>
    </el-row>
    <br />
    <!-- Page content -->
    <el-row>
      <el-col :span="2" />
      <el-col :span="20">
        <div class="collapse-menu">
          <el-collapse v-model="active">
            <el-collapse-item title="Background" name="1">
              <div class="background">
                <about-background />
              </div>
            </el-collapse-item>
            <el-collapse-item title="Architecture" name="2">
              <div class="architecture">
                <about-architecture />
              </div>
            </el-collapse-item>
            <el-collapse-item title="FAQ" name="3">
              <div v-for="item in loadedFaq" :key="item.question">
                <about-faq-item
                  :question="item.question"
                  :answer="item.answer"
                />
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-col>
      <el-col :span="2" />
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import AboutArchitecture from '@/components/AboutArchitecture.vue'
import AboutBackground from '@/components/AboutBackground.vue'
import AboutFaqItem from '@/components/AboutFaqItem.vue'
import faq from '@/assets/json/faq.json'

const active = ref(['0'])
const loadedFaq = ref(faq)
</script>

<style scoped></style>
