<template lang='pug'>
.lc-view-translating
  lc-article-list(:articles="$store.state.status.translating")
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

import { ArticleType } from '@/types/articles.type'
import { parseArticles } from '@/utilities/articles'
import LcArticleList from '@/components/LcArticleList.vue'

@Component({components: {LcArticleList}})
class Translating extends Vue {}

export default Translating
</script>
