import { Moment } from 'moment'

export interface ArticleBase {
  time: Moment
  path: string
}

export interface ArticleTranslating extends ArticleBase {
  author: string
}

export interface ArticleList {
  translating: Array<Object>,
  unselected: Array<Object>
}

export enum ArticleType {
  NEW,
  TRANSLATING,
  MOST_WANTED
}
