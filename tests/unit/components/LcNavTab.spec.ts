import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import routes from '@/data/routes'
import LcNavTab from '@/components/LcNavTab.vue'

describe('LcNavTab.vue', () => {
  it('should render tabs for titled routes defined in data', () => {
    const titleRoutes = routes.filter(route => route.meta && route.meta.title)
    expect(titleRoutes).not.to.be.empty

    const wrapper = shallowMount(LcNavTab, { stubs: ['v-tab'] })

    const tabWrapperArray = wrapper.findAll('v-tab-stub')
    expect(tabWrapperArray).to.have.lengthOf(titleRoutes.length)

    for (let i = 0; i < titleRoutes.length; i++) {
      const route = titleRoutes[i]

      const tabWrapper = tabWrapperArray.at(i)

      const routeTo = tabWrapper.attributes('to')
      expect(routeTo).to.equals(route.path)

      const routeContent = tabWrapper.text()
      expect(routeContent).to.equals(route.meta!.title)
    }
  })
})
