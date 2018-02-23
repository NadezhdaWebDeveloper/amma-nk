import Vuex from 'vuex'
import api from '../api'
import getUrl from "@/helpers/getUrl"

export default () => { 
  return new Vuex.Store({
    state: {
      artworks: {}
    },
    mutations: {
      setArtworks: (state, data) => {        
        state.artworks = data        
      }
    },
    actions: {
      async getArtworks({ commit }, payload = {}) {
        console.log('HELLLOOOO');
        const {data} = await api.getArtworks();
        let finalData = [];

        data.map(item => {
          let artwork = {
            artist: item.acf.artwork_artist_label,
            year: item.acf.artwork_year,
            title: item.title.rendered,
            slug: item.slug
          };
          if (item._embedded["wp:featuredmedia"] !== undefined) {
            item._embedded["wp:featuredmedia"].map(el => artwork.image_url = el.source_url);				
          }
          if (item._embedded["wp:term"] !== undefined) {
            item._embedded["wp:term"].map(el => {
              el.map( i => artwork.category = i.name );
            });
          }
          artwork.link = getUrl(item.link).pathname;
          
          artwork.gallery = [];
          item.acf.artwork_gallery.map(item => {            
            artwork.gallery.push({
              thumb: {
                imageUrl: item.sizes.thumbnail,
                imageWidth: item.sizes['thumbnail-width'],
                imageHeight: item.sizes['thumbnail-height']
              }
            });
          });
          finalData.push(artwork);
        });
        if (payload.slug) {
          finalData = finalData.find(item => item.slug === payload.slug);
        }
        // if (payload.route.query.types) {
        //   finalData = finalData.filter(el => {
        //     return el.category === payload.route.query.types;
        //   });
        // }
        commit('setArtworks', finalData);     
      }
    }    
  })
}