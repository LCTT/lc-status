<template lang='pug'>
v-toolbar.lc-nav-bar(flat app)
  v-toolbar-side-icon(@click="toggleDrawerDisplay()")
  v-toolbar-title.headline.text-uppercase
    | #[span Linux.cn ] #[span.font-weight-light Translation Team]
  v-toolbar-items
    v-btn(
      v-for="link in links"
      :key="link.title"
      flat
      :href="link.href"
    ) {{link.title}}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import links from '@/data/links'

const siteModule = namespace('site')

@Component
class LcNavBar extends Vue {
  @siteModule.Action('toggleDrawerDisplay') toggleDrawerDisplay: any

  links = links
}
export default LcNavBar
</script>

<style lang="stylus" scoped>
@import '../common'

.lc-nav-bar
  z-index 10
  .v-toolbar__side-icon
    +desktop()
      display none
  .v-toolbar__items
    +mobile()
      display none
  .headline
    +desktop()
      margin-left 0
    @media (min-width: 370px) and (max-width: 479px)
      font-size 18px !important
    @media (max-width: 369px)
      font-size 15px !important
    margin-right 1em
</style>
