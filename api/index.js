import axios from 'axios'

export default {
	getMenu() {
		return axios.get("http://amma-test.bigdropinc.net/wp-json/wp-api-menus/v2/menus/18")
	},
	getArtworks(filter) {
		return axios.get('http://amma-test.bigdropinc.net/wp-json/wp/v2/artworks?_embed')
		// http://amma-test.bigdropinc.net/wp-json/wp/v2/artworks?_embed&page=1&per_page=4&filter[types]=sculpture
	}
}