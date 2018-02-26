import axios from 'axios'

export default {
	getMenu() {
		return axios.get("http://amma-test.bigdropinc.net/wp-json/wp-api-menus/v2/menus/18")
	},
	// testGetArtworks(query){
	// 	let api = `http://amma-test.bigdropinc.net/wp-json/wp/v2/artworks`;
	// 	if(query){
	// 		api += query.string
	// 	}
	// 	return axios.get(api);
	// },
	getArtworks(route) {
		console.log('api ============');

		let types = route.query.types !== undefined ? '&filter[types]=' + route.query.types : '';
		let slug = route.params.id !== undefined ? '/' + route.params.id + '/' : '';
		let page = '&page=' + (route.query.pages !== undefined ? route.query.pages : 1);
		let per_page = '&per_page=' + (route.query.per_page !== undefined ? route.query.per_page : 4);

		let queryString = `http://amma-test.bigdropinc.net/wp-json/wp/v2/artworks${slug}?_embed${page}${per_page}${types}`;

		return axios.get(queryString);
	},
	getArtworksSettings() {
		return axios.get('http://amma-test.bigdropinc.net/wp-json/wp/v2/artworks-settings')
	}
}