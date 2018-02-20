import Vuex from 'vuex'
import api from '../api'

export default () => { 
  return new Vuex.Store({ // const store = new Vuex.Store
    state: {
      artworks: {}
    },
    mutations: {
      setArtworks: (state, {data, headers}) => {        
        state.artworks = data        
      }
    },
    actions: {
      getArtworks({ commit }, payload = {}) {
        return api.get().then(response => {          
          commit('setArtworks', response)
        })
      }
    }
  })
}