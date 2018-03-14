import axios from 'axios'

export default {
	getMenu() {
		return axios.get('http://amma-test.bigdropinc.net/wp-json/wp-api-menus/v2/menus/18')
	},
	getDataForHomePage() {
		return axios.get('http://amma-test.bigdropinc.net/wp-json/wp/v2/pages/394')
	},
	getDataForContactUs() {
		return axios.get('http://amma-test.bigdropinc.net/wp-json/wp/v2/pages/6')
	},
	getArtists(query) {
		return axios.get(`http://amma-test.bigdropinc.net/wp-json/wp/v2/artists${query}`);
	},
	getArtworks(query) {
		return axios.get(`http://amma-test.bigdropinc.net/wp-json/wp/v2/artworks?_embed${query}`);
	},
	getArtworksSettings() {
		return axios.get('http://amma-test.bigdropinc.net/wp-json/wp/v2/artworks-settings')
	},
	getArtwork(slug) {		
		return axios.get(`http://amma-test.bigdropinc.net/wp-json/wp/v2/artworks?_embed${slug}`);
	}	
}