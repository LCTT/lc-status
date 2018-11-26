<template lang='pug'>
.lc-view-new
  lc-article-list(type="new")
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

import LcArticleList from '@/components/LcArticleList.vue'

@Component({components: {LcArticleList}})
class New extends Vue {}

export default New
</script>
