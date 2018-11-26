module.exports = {
  'navigation bar title test': browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.elementCount('.lc-nav-bar', 1)
      .assert.elementCount('.lc-nav-bar .v-toolbar__title.headline', 1)
      .assert.containsText('.lc-nav-bar .v-toolbar__title.headline', 'LINUX.CN TRANSLATE TEAM')
      .end()
  },

  'navigation bar links test': browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.elementCount('.lc-nav-bar', 1)
      .assert.elementCount('.lc-nav-bar .v-toolbar__items', 1)
      .assert.elementCount('.lc-nav-bar .v-toolbar__items > .v-btn', 4)
      .assert.containsText('.lc-nav-bar .v-toolbar__items', 'HOME')
      .assert.containsText('.lc-nav-bar .v-toolbar__items', 'WIKI')
      .assert.containsText('.lc-nav-bar .v-toolbar__items', 'TOKEN')
      .assert.containsText('.lc-nav-bar .v-toolbar__items', 'SHOP')
      .end()
  },

  'navigation tab links test': browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.elementCount('.lc-nav-tab', 1)
      .assert.elementCount('.lc-nav-tab .v-tabs__container', 1)
      .assert.elementCount('.lc-nav-tab .v-tabs__container > .v-tabs__div', 3)
      .assert.containsText('.lc-nav-tab .v-tabs__container', '待认领')
      .assert.containsText('.lc-nav-tab .v-tabs__container', '翻译中')
      .assert.containsText('.lc-nav-tab .v-tabs__container', '天梯榜')
      .end()
  },

  'navigation tab on navigation': browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.elementCount('.lc-nav-tab .v-tabs__container .v-tabs__item--active', 1)
      .assert.containsText('.lc-nav-tab .v-tabs__container .v-tabs__item--active', '翻译中')
      .assert.urlEquals(`${process.env.VUE_DEV_SERVER_URL}translating`)
      .click('.lc-nav-tab .v-tabs__container .v-tabs__item[href$="/new"]')
      .pause(500)
      .assert.elementCount('.lc-nav-tab .v-tabs__container .v-tabs__item--active', 1)
      .assert.containsText('.lc-nav-tab .v-tabs__container .v-tabs__item--active', '待认领')
      .assert.urlEquals(`${process.env.VUE_DEV_SERVER_URL}new`)
      .click('.lc-nav-tab .v-tabs__container .v-tabs__item[href$="/translating"]')
      .pause(500)
      .assert.elementCount('.lc-nav-tab .v-tabs__container .v-tabs__item--active', 1)
      .assert.containsText('.lc-nav-tab .v-tabs__container .v-tabs__item--active', '翻译中')
      .assert.urlEquals(`${process.env.VUE_DEV_SERVER_URL}translating`)
      .click('.lc-nav-tab .v-tabs__container .v-tabs__item[href$="/most-wanted"]')
      .pause(500)
      .assert.elementCount('.lc-nav-tab .v-tabs__container .v-tabs__item--active', 1)
      .assert.containsText('.lc-nav-tab .v-tabs__container .v-tabs__item--active', '天梯榜')
      .assert.urlEquals(`${process.env.VUE_DEV_SERVER_URL}most-wanted`)
      .end()
  }
}
