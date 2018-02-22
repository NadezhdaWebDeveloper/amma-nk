import axios from 'axios'

export default {
	getMenu() {
		return axios.get("http://amma-test.bigdropinc.net/wp-json/wp-api-menus/v2/menus/18")
	},
	getArtworks() {
		return axios.get('http://amma-test.bigdropinc.net/wp-json/wp/v2/artworks?_embed')
	}
}