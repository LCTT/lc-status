<template lang='pug'>
v-app
  lc-nav-bar
  v-content
    lc-nav-tab
    router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import LcNavBar from '@/components/LcNavBar.vue'
import LcNavTab from '@/components/LcNavTab.vue'

@Component({components: {LcNavBar, LcNavTab}})
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
</style>
