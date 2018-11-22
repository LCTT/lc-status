<template lang='pug'>
v-tabs.lc-nav-tab(fixed-tabs)
  v-tab(
    v-for="route in routes"
    v-if="route.meta && route.meta.title"
    :key="route.path"
    :to="route.path"
  ) {{route.meta.title}}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import routes from '@/data/routes'

@Component
class LcNavTab extends Vue {
  routes = routes
}
export default LcNavTab
</script>

<style lang="stylus" scoped>
.subheading > a
  margin auto 10px
</style>
