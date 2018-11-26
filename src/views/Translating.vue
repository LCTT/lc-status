<template lang='pug'>
.lc-view-translating
  lc-article-list(type="translating")
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

import LcArticleList from '@/components/LcArticleList.vue'

@Component({components: {LcArticleList}})
class Translating extends Vue {}

export default Translating
</script>
