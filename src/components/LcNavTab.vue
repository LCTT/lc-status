<template lang='pug'>
v-container.lc-nav-tab(v-bind:class="{ lock: isLock }" fluid)
  v-layout(align-center)
    v-flex(grow)
      v-tabs(fixed-tabs color="transparent" slider-color="#999")
        v-tab(
          v-for="route in routes"
          v-if="route.meta && route.meta.title"
          :key="route.path"
          :to="route.path"
        ) {{route.meta.title}}
    v-flex(shrink)
      v-btn(flat small icon @click="isLock = !isLock")
        v-icon(v-if="isLock" small) mdi-lock
        v-icon(v-else small) mdi-lock-open
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import routes from '@/data/routes'

@Component
class LcNavTab extends Vue {
  isLock = true // TODO: store in vuex (persistence as site setting)
  routes = routes
}
export default LcNavTab
</script>

<style lang="stylus" scoped>
@import '../common'

.lc-nav-tab
  width 100%
  height nav-tab-height
  padding 0
  background #FFFFFFF0
  z-index 2
  .subheading > a
    margin auto 10px
</style>
