import axios from 'axios'

export default {
	get() {
		return axios.get('http://amma-test.bigdropinc.net/wp-json/wp/v2/artworks?_embed')
	}
}