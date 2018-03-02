import Vuex from 'vuex'
import api from '@/api'
import getUrl from "@/helpers/getUrl"

export default () => { 
  return new Vuex.Store({
    state: {
      artwork: {},
      artworks: {},
      artworksHeaders: {},
      contactUsData: {},
      homePageData: {},
      homeArtworksCollection: {},
      homeArtworksSlider: {},
      sliderDataIsReady: false
    },
    getters: {
      contactUsData: state => {        
        if(state.contactUsData.acf !== undefined) {
          return state.contactUsData.acf.contact_form_shortcode
        }
      },
      homePageData: state => {        
        return state.homePageData.data
      },
      homeArtworksCollection: state => {
        if(state.homePageData.data !== undefined) {
          return state.homePageData.data.acf.home_collection_artworks        
        }
      },
      homeArtworksSlider: state => {
        if(state.homePageData.data !== undefined) {
          return state.homePageData.data.acf.home_slider_artworks        
        }
      },
      homeExhibitions: state => {
        if(state.homePageData.data !== undefined) {          
          return {
             data: state.homePageData.data.acf.home_exhibitions,
             title: state.homePageData.data.acf.home_exhibitions_title
          }      
        }
      },
      homeArtists: state => {        
        if(state.homePageData.data !== undefined) {
          console.log('state.homePageData', state.homePageData.data.acf.home_artists );
          return state.homePageData.data.acf.home_artists['first-letters']
        }
      },
      homeInfoAboutDescription: state => {
        if(state.homePageData.data !== undefined) {
          return state.homePageData.data.acf.home_info_about_description    
        }
      }
    },
    mutations: {
      setDataForHomePage: (state, data) => {
        state.homePageData = data;
        state.sliderDataIsReady = true;
      },
      setContactUsData: (state, data) => {
        state.contactUsData = data;
      },
      setArtworks: (state, {data, headers}) => {
        state.artworks = data;
        state.artworksHeaders = {
          totalWorks: +headers['x-wp-total'],
          totalPages: +headers['x-wp-totalpages']
        };
      },
      setArtwork: (state, data) => {
        state.artwork = data;
      }
    },
    actions: {
      async getDataForHomePage({ commit }) {
        let data = await api.getDataForHomePage();
        commit('setDataForHomePage', data)
      },

      async getDataForContactUs({ commit }) {
        let { data } = await api.getDataForContactUs();
        commit('setContactUsData', data);
      },

      async getArtworks({ commit }, route) {        
        let queryString = ``;
        for (const key in route) {
          if (route.hasOwnProperty(key)) {
            if ( route[key] !== undefined ) {
              if ( key !== 'per_page' && key !== 'page' ) {
                queryString += `&filter[${key}]=${route[key]}`;
              } else {
                queryString += `&${key}=${route[key]}`;
              }
            }
            if ( route['per_page'] === undefined ) {              
              queryString += '&per_page=4';
            } 
          }
        }
        const { headers, data } = await api.getArtworks(queryString);        
        let finalData = [];        
        data.map(item => {
          this.dispatch('artworkInit', item)
          .then(res => {
            finalData.push(res);
          })
          .catch(err => {
            throw new Error(err);
          });
        });
        commit('setArtworks', {
          data: finalData,
          headers
        });
      },

      async getArtwork({ commit }, route) {
        let query = route.params.id != undefined ? `&filter[name]=${route.params.id}` : '';
        const { data } = await api.getArtwork(query);
        data.map(item => {
          this.dispatch('artworkInit', item)
            .then(res => {
              commit('setArtwork', res);
            })
            .catch(err => {
              throw new Error(err);
            });
        });
      },

      artworkInit(context, item) {
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
        artwork.link = getUrl(item.link).pathname;          
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
        return artwork;
      }
    }
  })
}