<template lang='pug'>
.lc-view-translating
  lc-article-list(:articles="$store.state.status.mostWanted")
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

import { ArticleType } from '@/components/types/articles.type'
import { parseArticles } from '@/components/utilities/articles'
import LcArticleList from '@/components/LcArticleList.vue'

@Component({components: {LcArticleList}})
class MostWanted extends Vue {}

export default MostWanted
</script>
