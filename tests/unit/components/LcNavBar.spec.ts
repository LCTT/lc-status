import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import links from '@/data/links'
import LcNavBar from '@/components/LcNavBar.vue'

describe('LcNavBar.vue', () => {
  it('should render the site title', () => {
    const wrapper = shallowMount(LcNavBar, { stubs: ['v-toolbar-title'] })

    const titleWrapperArray = wrapper.findAll('v-toolbar-title-stub')
    expect(titleWrapperArray).to.have.lengthOf(1)

    const titleContent = titleWrapperArray.at(0).text()
    expect(titleContent).to.equals('Linux.cn Translate Team')
  })

  it('should render buttons for links defined in data', () => {
    const wrapper = shallowMount(LcNavBar, { stubs: ['v-btn'] })

    const buttonWrapperArray = wrapper.findAll('v-btn-stub')
    expect(buttonWrapperArray).to.have.lengthOf(links.length)

    for (let i = 0; i < links.length; i++) {
      const link = links[i]

      const buttonWrapper = buttonWrapperArray.at(i)

      const linkHref = buttonWrapper.attributes('href')
      expect(linkHref).to.equals(link.href)

      const linkContent = buttonWrapper.text()
      expect(linkContent).to.equals(link.title)
    }
  })
})
