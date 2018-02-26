import Vuex from 'vuex'
import api from '@/api'
import getUrl from "@/helpers/getUrl"

export default () => { 
  return new Vuex.Store({
    state: {
      artworks: {}
    },
    mutations: {
      setArtworks: (state, data) => {
        state.artworks = data;
      }
    },
    actions: {
      async getArtworks({ commit }, payload = {}) {
        const data = await api.getArtworks(payload);       
        commit('setArtworks', data);
      }
    }
  })
}