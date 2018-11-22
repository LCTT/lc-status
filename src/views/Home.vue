<template lang='pug'>
.home
  HelloWorld(msg='Welcome to Your Vuetify + TypeScript App')
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'

@Component({components: {HelloWorld}})
class Home extends Vue {}

export default Home
</script>
