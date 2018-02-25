import axios from 'axios'

export default {
	getMenu() {
		return axios.get("http://amma-test.bigdropinc.net/wp-json/wp-api-menus/v2/menus/18")
	},
	getArtworks(filter) {
		console.log('FILTER', filter);
		console.log(`http://amma-test.bigdropinc.net/wp-json/wp/v2/artworks?_embed&filter[types]=${filter.query.types}`);

		return axios.get(`http://amma-test.bigdropinc.net/wp-json/wp/v2/artworks?_embed&filter[types]=${filter.query.types}`)
		// http://amma-test.bigdropinc.net/wp-json/wp/v2/artworks?_embed&page=1&per_page=4&filter[types]=sculpture
		// http://amma-test.bigdropinc.net/wp-json/wp/v2/artworks/?_embed&page=2&per_page=3&filter[types]=sculpture%2Cother%2Cdrawing
	},
	getArtworksSettings() {
		return axios.get('http://amma-test.bigdropinc.net/wp-json/wp/v2/artworks-settings')
	}
}