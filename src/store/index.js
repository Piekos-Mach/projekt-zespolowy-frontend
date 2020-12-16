import Vue from 'vue'
import Vuex from 'vuex'
// import initPlugin from './initPlugin'

Vue.use(Vuex)

import offers from '../mock/offers.json'
import images from '../mock/images.json'

export default new Vuex.Store({
  state: {
    isGuest: true,
    offers: offers,
    images: images
  },
  getters: {
    getOfferById: state => id => {
      return state.offers.find(offer => id == offer.id)
    },
    getImgById: state => id => {
      return state.images.filter(img => img.id == id)[0].content
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  // plugins: [initPlugin]
})
