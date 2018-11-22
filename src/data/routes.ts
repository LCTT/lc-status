const routes = [
  {
    path: '*',
    redirect: '/translating'
  },
  {
    path: '/new',
    name: 'new',
    meta: {
      title: '待认领'
    },
    component: () => import(/* webpackChunkName: "new" */ '@/views/New.vue')
  },
  {
    path: '/translating',
    name: 'translating',
    meta: {
      title: '翻译中'
    },
    component: () => import(/* webpackChunkName: "translating" */ '@/views/Translating.vue')
  },
  {
    path: '/most-wanted',
    name: 'most-wanted',
    meta: {
      title: '天梯榜'
    },
    component: () => import(/* webpackChunkName: "most-wanted" */ '@/views/MostWanted.vue')
  }
]

export default routes
