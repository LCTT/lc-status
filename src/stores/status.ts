import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

import { ArticleBase, ArticleType, ArticleList } from '@/types/articles.type'
import { parseArticles } from '@/utilities/articles'

@Module({ namespaced: true })
export default class Status extends VuexModule {
  new: ArticleBase[] = []
  translating: ArticleBase[] = []
  mostWanted: ArticleBase[] = []

  @Mutation
  updateStatus (newStatus: ArticleList) {
    this.translating = parseArticles(newStatus.translating, ArticleType.TRANSLATING)

    this.new = parseArticles(newStatus.unselected, ArticleType.NEW)
    this.mostWanted = this.new.splice(0, Math.round(this.new.length * 0.2))
  }

  @Action
  async update () {
    const result = await fetch('https://lctt.github.io/TranslateProject/status/status.json')
    const newStatus = await result.json()
    this.context.commit('updateStatus', newStatus)
  }
}
