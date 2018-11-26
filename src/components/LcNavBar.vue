<template lang='pug'>
v-toolbar.lc-nav-bar(flat app)
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
import links from '@/data/links'

@Component
class LcNavBar extends Vue {
  links = links
}
export default LcNavBar
</script>

<style lang="stylus" scoped>
.headline
  margin-right 1em
</style>
