<template lang='pug'>
.lc-view-translating
  lc-article-list(type="mostWanted")
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

import LcArticleList from '@/components/LcArticleList.vue'

@Component({components: {LcArticleList}})
class MostWanted extends Vue {}

export default MostWanted
</script>
