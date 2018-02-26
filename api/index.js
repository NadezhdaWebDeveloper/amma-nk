import axios from 'axios'

export default {
	getMenu() {
		return axios.get("http://amma-test.bigdropinc.net/wp-json/wp-api-menus/v2/menus/18")
	},
	testGetArtworks(query){
		let api = `http://amma-test.bigdropinc.net/wp-json/wp/v2/artworks`;
		if(query){
			api += query.string
		}


		return axios.get(api);
	},
	getArtworks(route) {
		// console.log('api ============');
		// console.log(route);

		let types = route.query.types !== undefined ? '&filter[types]=' + route.query.types : '';
		let slug = '';

		if (route.params.id !== undefined) {
			slug = '/' + route.params.id + '/';
		}

		let queryString = `http://amma-test.bigdropinc.net/wp-json/wp/v2/artworks${slug}?_embed${types}`;

		return axios.get(queryString);
	},
	getArtworksSettings() {
		return axios.get('http://amma-test.bigdropinc.net/wp-json/wp/v2/artworks-settings')
	}
}