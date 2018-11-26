import moment from 'moment'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

import { ArticleBase, ArticleType, ArticleList } from '@/types/articles.type'
import { parseArticles } from '@/utilities/articles'

@Module
export default class Status extends VuexModule {
  new: ArticleBase[] = []
  translating: ArticleBase[] = []
  mostWanted: ArticleBase[] = []

  @Mutation
  updateStatus (newStatus: ArticleList) {
    this.translating = parseArticles(newStatus.translating, ArticleType.TRANSLATING)

    const newArticles = parseArticles(newStatus.unselected, ArticleType.NEW)
    this.new = []
    this.mostWanted = []

    newArticles.forEach(article => {
      const target = moment().diff(article.time, 'days') > 100
        ? this.mostWanted
        : this.new
      target.push(article)
    })
  }

  @Action
  async update () {
    const result = await fetch('https://lctt.github.io/TranslateProject/status/status.json')
    const newStatus = await result.json()
    this.context.commit('updateStatus', newStatus)
  }
}
