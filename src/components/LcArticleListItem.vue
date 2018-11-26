<template lang='pug'>
v-list-tile.lc-article-list-item(:class="type")
  v-list-tile-content
    v-container.grid-list-lg
      v-layout(align-center)
        v-flex.id(v-if="type == 'translating'" shrink) {{id}}
        v-flex.shortdate(v-if="type == 'new'" shrink) {{date}}
        v-flex.days(v-if="type == 'translating'" shrink) {{days}} 天以前
        v-flex.fulldate(v-if="type == 'mostWanted'" shrink) {{date}}
        v-flex.filename(shrink): a(:href="viewUrl" target="_blank") {{filename}}
        v-flex.end(grow)
          .author(v-if="asTranslating.author") {{author}}
          .claim(v-else): v-btn(depressed small :href="editUrl" target="_blank") 认领
</template>

<script lang="ts">
import moment from 'moment'

import { Component, Vue, Prop } from 'vue-property-decorator'
import { ArticleBase, ArticleTranslating } from '@/types/articles.type'

const URL_PREFIX = 'https://github.com/LCTT/TranslateProject'

@Component
class LcArticleListItem extends Vue {
  @Prop(String) type!: string
  @Prop(Number) id!: number
  @Prop(Object) article!: ArticleBase

  get asTranslating () {
    return this.article as ArticleTranslating
  }

  get days () {
    return moment().diff(this.article.time, 'days')
  }

  get date () {
    switch (this.type) {
      case 'new':
        return this.article.time.format('MM - DD')
      case 'mostWanted':
        return this.article.time.format('YYYY/MM/DD')
    }
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
        min-width 3em
        text-align right
      &.shortdate
        min-width 4em
      &.days
        min-width 5.5em
        text-align right
      &.fulldate
        min-width 6.5em
      &.filename
        font-weight 400
      &.end
        text-align right
</style>
