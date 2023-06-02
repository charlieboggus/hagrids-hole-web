<template>
  <div class="spacer" style="margin-top: 15%" />
  <div class="home">
    <div class="centerImage">
      <img style="height: 100%" class="logo" src="~@/assets/hagrid.png" />
    </div>
    <br />
    <h1 style="text-align: center">Hagrid's Hole</h1>
    <br />
    <!-- links -->
    <el-row>
      <el-col class="links">
        <span>
          <el-link
            type="info"
            href="https://github.com/charlieboggus/hagrids-ears-bot"
            target="_blank"
          >
            bot
          </el-link>
          <el-text> • </el-text>
          <el-link
            type="info"
            href="https://github.com/charlieboggus/hagrids-lambdas"
            target="_blank"
          >
            lambda
          </el-link>
          <el-text> • </el-text>
          <el-link
            type="info"
            href="https://github.com/charlieboggus/hagrids-hole-web"
            target="_blank"
          >
            web
          </el-link>
        </span>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.home {
  height: 100%;
  position: relative;
}

.centerImage {
  display: flex;
  justify-content: center;
}

.logo {
  border-radius: 100%;
  overflow: hidden;
  height: 150px;
  width: 150px;
  filter: drop-shadow(0 0 0.75rem rgb(179, 179, 179));
}

.links {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: lighter;
}
</style>
