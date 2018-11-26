import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

// TODO: states for site settings should be persistence

@Module({ namespaced: true })
export default class Site extends VuexModule {
  showDrawer = true

  @Mutation
  commitSetDrawerDisplay (newState: boolean) {
    this.showDrawer = newState
  }

  @Action
  setDrawerDisplay (newState: boolean) {
    this.context.commit('commitSetDrawerDisplay', newState)
  }

  @Mutation
  commitToggleDrawerDisplay () {
    this.showDrawer = !this.showDrawer
  }

  @Action
  toggleDrawerDisplay () {
    this.context.commit('commitToggleDrawerDisplay')
  }

  lockNavTab = true

  @Mutation
  commitToggleNavTabLock () {
    this.lockNavTab = !this.lockNavTab
  }

  @Action
  toggleNavTabLock () {
    this.context.commit('commitToggleNavTabLock')
  }
}
