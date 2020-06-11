import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginEndpoint: 'https://sheepy-meme.builtwithdark.com/meebaalogin',
    apiKey: '',
    avGetter: {
      audio: true,
      video: true
    },
    myLang: 'L1',
    peerName: ''
  },
  mutations: {
    setApiKey(state, data) {
      state.apiKey = data;
    },
    setAvGetter(state, data) {
      state.avGetter = data
    },
    setPeerName(state, data) {
      state.myLang = data.substr(0,2)
      state.peerName = data
    }
  },
  actions: {

  }
})
