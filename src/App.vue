<template lang='pug'>
v-app
  v-toolbar(app)
    v-toolbar-title.headline.text-uppercase
      span Vuetify
      span.font-weight-light MATERIAL DESIGN
    v-toolbar-items
      v-btn(flat to='/') Home
      v-btn(flat to='/about') About
    v-spacer
    v-btn(flat href='https://github.com/vuetifyjs/vuetify/releases/latest' target='_blank')
      span.mr-2 Latest Release
      v-icon mdi-open-in-new
  v-content
    router-view
</template>
