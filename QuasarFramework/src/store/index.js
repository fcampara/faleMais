import Vue from 'vue'
import Vuex from 'vuex'

import plans from './Plans'

Vue.use(Vuex)

export default function () {
  const Store = new Vuex.Store({
    modules: {
      plans
    },
    strict: process.env.DEV
  })

  return Store
}
