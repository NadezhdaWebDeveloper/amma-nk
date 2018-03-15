import Vuex from 'vuex'
import api from '@/api'
import getUrl from "@/helpers/getUrl"

export default () => { 
  return new Vuex.Store({
    state: {
      artists: {},
      artwork: {},
      artworks: {},
      artworksHeaders: {},
      contactUsData: {},
      homePageData: {},
      artLoansPageData: {}
    },
    getters: {
      artists: state => {
        return state.artists
      },
      contactUsData: state => {
        return {
          mapDescr: state.contactUsData.contact_description_before_address,
          formDescr: state.contactUsData.contact_description_before_form,
          formPostEndpoint: state.contactUsData.contact_form_post_endpoint,
          form: state.contactUsData.contact_form_shortcode,
          email: state.contactUsData.contact_email,
          fax: state.contactUsData.contact_fax,
          phone: state.contactUsData.contact_fax,
          address: state.contactUsData.contact_office_address,
          location: state.contactUsData.contact_office_location
        }
      },
      homeArtworksCollection: state => {
        return {
          data: state.homePageData.home_collection_artworks,
          title: state.homePageData.home_collection_title
        }
      },
      homeArtworksSlider: state => {
        return state.homePageData.home_slider_artworks
      },
      homeExhibitions: state => {   
        return {
          data: state.homePageData.home_exhibitions,
          title: state.homePageData.home_exhibitions_title
        }
      },
      homeArtists: state => {
        return {
          data: state.homePageData.home_artists.first_letters,
          title: state.homePageData.home_artists_title,
        }
      },
      homeAbout: state => {
        return state.homePageData.home_info_about_description
      },
      homeRss: state => {
        return {
          title: state.homePageData.home_rss_news_title,
          rssLink: state.homePageData.home_rss_feeds
        }
      },
      homeSisterAssociations: state => {
        return {
          title: state.homePageData.home_info_sister_title
        }
      },
      artLoansPageData: state => {
        console.log(state.artLoansPageData._embedded['wp:featuredmedia'][0]);
        
        return {
          title: state.artLoansPageData.title.rendered,
          content: state.artLoansPageData.content.rendered,
          excerpt: state.artLoansPageData.excerpt.rendered,
          pdfLink: state.artLoansPageData.acf.pdf_source,
          reqBtnLabel: state.artLoansPageData.acf.request_button_label,
          reqForm: state.artLoansPageData.acf.request_form,
          media: {
            target: state.artLoansPageData._embedded['wp:featuredmedia'][0].link,
            src: state.artLoansPageData._embedded['wp:featuredmedia'][0].source_url
          }
        }
      }
    },
    mutations: {
      setArtists: (state, data) => {
        state.artists = data;
      },
      setArtwork: (state, data) => {
        state.artwork = data;
      },
      setArtworks: (state, {data, headers}) => {
        state.artworks = data;
        state.artworksHeaders = {
          totalWorks: +headers['x-wp-total'],
          totalPages: +headers['x-wp-totalpages']
        };
      },
      setContactUsData: (state, data) => {
        state.contactUsData = data.acf;
      },
      setDataForHomePage: (state, data) => {
        state.homePageData = data.acf;
      },
      setDataForArtLoansPage: (state, data) => {
        state.artLoansPageData = data;
      }
    },
    actions: {
      async getArtists({ commit }, route) {
        let queryString = '';
        let { data } = await api.getArtists(queryString);
        commit('setArtists', data)
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
      async getDataForContactUs({ commit }) {
        let { data } = await api.getDataForContactUs();
        commit('setContactUsData', data);
      },
      async getDataForHomePage({ commit }) {
        let { data } = await api.getDataForHomePage();
        commit('setDataForHomePage', data)
      },
      async getArtLoansData({ commit }) {
        let { data } = await api.getArtLoansData();
        commit('setDataForArtLoansPage', data);
      },

      // Helper Function
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