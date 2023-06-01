<template>
  <navigation-bar />
  <br />
  <router-view />
  <br />
  <page-footer />
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
