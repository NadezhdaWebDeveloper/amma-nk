import axios from 'axios'

export default {
	getMenu() {
		return axios.get("http://amma-test.bigdropinc.net/wp-json/wp-api-menus/v2/menus/18")
	},
	async getArtworks({route}) {
		console.log('api ============');
		// let types = route.query.types ? '&filter[types]=' + route.query.types : '';
		let slug = '';

		if (route.params.id !== undefined) {
			slug = '/' + route.params.id + '/';
			// console.log('route', route);
			// $router.push({fullPath: '/artworks/insouciance-2/'})
		}

		let { data } = await axios.get(`http://amma-test.bigdropinc.net/wp-json/wp/v2/artworks${slug}?_embed`);

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

		return finalData;

		// return axios.get(`http://amma-test.bigdropinc.net/wp-json/wp/v2/artworks${slug}?_embed`) //&artwork_year=all&orderby=default
		// http://amma-test.bigdropinc.net/wp-json/wp/v2/artworks?_embed&page=1&per_page=4&filter[types]=sculpture
		// http://amma-test.bigdropinc.net/wp-json/wp/v2/artworks/?_embed&page=2&per_page=3&filter[types]=sculpture%2Cother%2Cdrawing
	},
	getArtworksSettings() {
		return axios.get('http://amma-test.bigdropinc.net/wp-json/wp/v2/artworks-settings')
	}
}