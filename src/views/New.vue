<template lang='pug'>
.lc-view-new
  lc-article-list(:articles="$store.state.status.new")
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

import { ArticleType } from '@/types/articles.type'
import { parseArticles } from '@/utilities/articles'
import LcArticleList from '@/components/LcArticleList.vue'

@Component({components: {LcArticleList}})
class New extends Vue {}

export default New
</script>
