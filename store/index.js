import Vuex from 'vuex'
import api from '@/api'
import getUrl from "@/helpers/getUrl"

export default () => { 
  return new Vuex.Store({
    state: {
      artworks: {}
    },
    getters:{
      artworks: state => state.artworks
    },
    mutations: {
      setArtworks: (state, data) => {
        state.artworks = data;
      }
    },
    actions: {
      async getArtworks({ commit }, route) {
        const { data } = await api.getArtworks(route);
        console.log(data);    

        let mapData = [];
        let finalData = [];

        if (data.id === undefined) {
          mapData = data;
        } else {
          mapData.push(data);
        }
        
        mapData.map(item => {
          let artwork = {
            id: item.id !== undefined ? item.id : '',
            artist: item.acf.artwork_artist_label !== undefined ? item.acf.artwork_artist_label : '',
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
          // artwork.link = getUrl(item.link).pathname;
          artwork.link = '/artworks/' + artwork.id;
          
          artwork.gallery = [];
          item.acf.artwork_gallery.map(item => {
            artwork.gallery.push({
              thumb: {
                imageUrl: item.sizes.thumbnail,
                imageWidth: item.sizes['thumbnail-width'],
                imageHeight: item.sizes['thumbnail-height']
              },
              medium: {
                imageUrl: item.sizes.medium,
                imageWidth: item.sizes['medium-width'],
                imageHeight: item.sizes['medium-height']
              }
            });
          });
          finalData.push(artwork);
        });

        console.log('final data', finalData);
        commit('setArtworks', finalData);
      }
    }
  })
}