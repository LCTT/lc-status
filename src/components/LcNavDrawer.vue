<template lang='pug'>
v-navigation-drawer.lc-nav-drawer(v-model="drawerShown" fixed temporary)
  v-list
    v-list-tile(
      v-for="link in links"
      :key="link.title"
      :href="link.href"
    ) {{link.title}}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import links from '@/data/links'

const siteModule = namespace('site')

@Component
class LcNavDrawer extends Vue {
  @siteModule.State('showDrawer') showDrawer: any
  @siteModule.Action('setDrawerDisplay') setDrawerDisplay: any

  get drawerShown () {
    return this.showDrawer
  }

  set drawerShown (newState: boolean) {
    this.setDrawerDisplay(newState)
  }

  links = links
}
export default LcNavDrawer
</script>

<style lang="stylus" scoped>
@import '../common'

.lc-nav-drawer
  padding-top nav-bar-height
  z-index 5
</style>
