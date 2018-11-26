<template lang='pug'>
v-list.lc-article-list
  lc-article-list-item(
    v-for="(article, index) in sortedArticles"
    :key="index+article.path"
    :type="type"
    :id="index+1"
    :article="article"
  )
</template>

<script lang="ts">
import moment from 'moment'
import { Component, Vue, Prop } from 'vue-property-decorator'
import LcArticleListItem from './LcArticleListItem.vue'
import { ArticleList, ArticleBase } from '@/types/articles.type'

@Component({components: {LcArticleListItem}})
class LcArticleList extends Vue {
  @Prop(String) type!: string

  get sortedArticles () {
    return (this.$store.state.status[this.type] as ArticleBase[])
      .sort((left, right) => left.time.isAfter(right.time) ? 1 : -1)
  }
}
export default LcArticleList
</script>
