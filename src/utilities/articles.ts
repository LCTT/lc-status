import moment from 'moment'

import { ArticleBase, ArticleTranslating, ArticleType } from '@/types/articles.type'

export const parseArticles = (rawArticles: Array<any>, type: ArticleType): Array<ArticleBase> => {
  const ret:Array<ArticleBase> = []

  rawArticles.forEach(rawArticle => {
    const { time, file, user } = rawArticle
    if (type === ArticleType.TRANSLATING) {
      const article:ArticleTranslating = { time: moment(time), path: file, author: user }
      ret.push(article)
    } else {
      const article:ArticleBase = { time: moment(time), path: file }
      ret.push(article)
    }
  })

  return ret.sort((left, right) => left.time.isAfter(right.time) ? 1 : -1)
}
