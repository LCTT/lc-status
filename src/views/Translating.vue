<template lang='pug'>
.lc-view-translating
  lc-article-list(:articles="$store.state.status.translating")
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

import { ArticleType } from '@/components/types/articles.type'
import { parseArticles } from '@/components/utilities/articles'
import LcArticleList from '@/components/LcArticleList.vue'

@Component({components: {LcArticleList}})
class Translating extends Vue {}

export default Translating
</script>
