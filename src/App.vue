<template>
  <div class="app">
    <el-container>
      <navigation-bar />
      <el-main class="content">
        <Suspense>
          <router-view />
        </Suspense>
      </el-main>
      <el-footer class="pageFooter">
        <page-footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavigationBar from './components/NavigationBar.vue'
import PageFooter from './components/PageFooter.vue'

export default defineComponent({
  components: {
    NavigationBar,
    PageFooter,
  },
})
</script>

<style>
@font-face {
  font-family: 'Mona Sans';
  src: url('~@/assets/fonts/Mona-Sans.woff2')
      format('woff2 supports variations'),
    url('~@/assets/fonts/Mona-Sans.woff2') format('woff2-variations');
  font-weight: 200 900;
  font-stretch: 75% 125%;
}

* {
  margin: 0;
}

html,
body {
  height: 100%;
  font-family: 'Mona Sans';
}

.content {
  margin: 0;
  min-height: calc(100vh - 142px);
  display: flex;
  flex-direction: column;
}

.pageFooter {
  height: -142px;
}
</style>
