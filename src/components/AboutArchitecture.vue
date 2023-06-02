<template>
  <el-row>
    <el-col :span="24">
      <el-text class="sectionHeader">Architecture Diagram</el-text>
    </el-col>
  </el-row>
  <el-row>
    <el-col class="center" :span="24">
      <img src="@/assets/images/architecture-diagram.png" />
    </el-col>
  </el-row>
  <br />
  <el-row>
    <el-col :span="24">
      <el-text class="sectionHeader">Other Dependencies</el-text>
    </el-col>
  </el-row>
  <br />
  <!-- TODO: dependencies -->
  <el-row>
    <el-col :span="2" />
    <el-col :span="20">
      <div>
        <el-carousel height="150px">
          <el-carousel-item class="center">
            <a href="https://vuejs.org/">
              <img src="@/assets/images/vue.png" class="dependencyLogo" />
            </a>
          </el-carousel-item>
          <!---->
          <el-carousel-item class="center">
            <a href="https://element-plus.org/en-US/">
              <img
                src="@/assets/images/element-plus.png"
                class="dependencyLogo"
              />
            </a>
          </el-carousel-item>
          <!---->
          <el-carousel-item class="center">
            <a href="https://github.com/discordjs/discord.js/">
              <img src="@/assets/images/discordjs.png" class="dependencyLogo" />
            </a>
          </el-carousel-item>
          <!---->
          <el-carousel-item class="center">
            <el-link
              style="font-size: 40px"
              href="https://github.com/jsvine/markovify"
              :underline="false"
            >
              markovify
            </el-link>
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-col>
    <el-col :span="2" />
  </el-row>
</template>

<script lang="ts" setup></script>

<style scoped>
.sectionHeader {
  font-weight: bold;
  display: flex;
  justify-content: center;
}

.center {
  display: flex;
  justify-content: center;
}

.dependencyLogo {
  display: block;
  max-height: 100px;
  width: auto;
  height: auto;
}
</style>
