import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import getters from './getter'

let state = {
  count: 0,
  topics: []
}

const isBrower = typeof window != 'undefined'
if (!isBrower || process.env.NODE_ENV == 'development') {
  Vue.use(Vuex)
}


const state2 = (isBrower && window._INIT) || state

const mutations = {
  add: (state) => {
    state.count++
  },
  milus: (state) => {
    state.count--
  },
}


export function createStroe() {
  const stroe = new Vuex.Store({
    state,
    mutations,
    getters,
    actions
  })
}