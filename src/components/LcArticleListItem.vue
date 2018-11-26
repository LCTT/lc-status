<template lang='pug'>
v-list-tile.lc-article-list-item
  v-list-tile-content
    v-container.grid-list-lg
      v-layout(align-center)
        v-flex.id(shrink) {{id}}
        v-flex.days(shrink) {{days}}
        v-flex.filename(shrink): a(:href="viewUrl" target="_blank") {{filename}}
        v-flex.end(grow)
          .author(v-if="asTranslating.author") {{author}}
          .claim(v-else): v-btn(depressed small :href="editUrl" target="_blank") 认领
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { ArticleBase, ArticleTranslating } from '@/types/articles.type'

const URL_PREFIX = 'https://github.com/LCTT/TranslateProject'

@Component
class LcArticleListItem extends Vue {
  @Prop(Number) id!: number
  @Prop(Object) article!: ArticleBase

  get asTranslating () {
    return this.article as ArticleTranslating
  }

  get days () {
    return this.article.time.fromNow()
  }

  get filename () {
    const basename = this.article.path.split('/').pop()
    return basename && basename!.replace(/^\d{8} |\.md$/g, '')
  }

  get author () {
    return this.asTranslating.author
  }

  get viewUrl () {
    return `${URL_PREFIX}/blob/master/${this.article.path}`
  }

  get editUrl () {
    return `${URL_PREFIX}/edit/master/${this.article.path}`
  }
}
export default LcArticleListItem
</script>

<style lang="stylus" scoped>
.lc-article-list-item
  color #666
  &:nth-child(2n+1)
    color #444
    background-color #00000006
  .container
    white-space nowrap
    .flex
      overflow hidden
      text-overflow ellipsis
      font-weight 300
      &.id
        text-align right
        min-width 3em
      &.days
        min-width 8em
      &.filename
        font-weight 400
      &.end
        text-align right
</style>
