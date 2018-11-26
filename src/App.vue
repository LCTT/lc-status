<template lang='pug'>
v-app
  lc-nav-bar
  lc-nav-drawer
  v-content
    lc-nav-tab
    router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import LcNavBar from '@/components/LcNavBar.vue'
import LcNavDrawer from '@/components/LcNavDrawer.vue'
import LcNavTab from '@/components/LcNavTab.vue'

@Component({components: {LcNavBar, LcNavDrawer, LcNavTab}})
class App extends Vue {}
export default App
</script>

<style lang="stylus">
@import './common'

#app
  // override link color
  a
    color #666
  .lc-nav-tab.lock
    position fixed
    &+*
      margin-top nav-tab-height
  .v-overlay
    z-index 3
</style>
