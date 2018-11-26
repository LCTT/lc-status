import Vue from 'vue'
import Vuex from 'vuex'

import Status from './stores/status'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    status: Status
  }
})
