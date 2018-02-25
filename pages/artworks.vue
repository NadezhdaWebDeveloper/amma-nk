<template>
	<div>
		<h2>Artworks</h2>
		<ArtworksFilters/>
		<div class="collection-wrap">
			<ul class="collection-gallery">				
				<li v-for="(artwork, idx) in artworks" :key="idx">
					<div class="item">
						<figure>
							<nuxt-link :to="artwork.link" :style="{backgroundImage: `url('${(artwork.gallery[0].medium.imageUrl !== undefined) ? artwork.gallery[0].medium.imageUrl : '' }')`}"></nuxt-link>
						</figure>
						<h3><a href="#">{{ artwork.artist }}</a></h3>
						<h4><a href="#">{{ artwork.title }}</a></h4>
						<span class="date">Date: {{ artwork.year }}</span>
						<span class="category">{{ artwork.category }}</span>
					</div>
				</li>
			</ul>
		</div>
		<!--/collection-->
		<div class="pagination">
			<div class="wp-pagenavi">
				<span class="current">1</span>
				<a class="page larger" title="Page 2" href="http://amma-dev.bigdropinc.net/artworks/page/2/">2</a>
				<a class="page larger" title="Page 3" href="http://amma-dev.bigdropinc.net/artworks/page/3/">3</a>
				<a class="page larger" title="Page 4" href="http://amma-dev.bigdropinc.net/artworks/page/4/">4</a>
				<a class="page larger" title="Page 5" href="http://amma-dev.bigdropinc.net/artworks/page/5/">5</a>
				<span class="extend">...</span>
				<a class="larger page" title="Page 10" href="http://amma-dev.bigdropinc.net/artworks/page/10/">10</a>
				<span class="extend">...</span>
				<a class="nextpostslink" rel="next" href="http://amma-dev.bigdropinc.net/artworks/page/2/">next</a>
			</div>
		</div>
		<!--/pagination-->
	</div>
</template>

<script>
import ArtworksFilters from '@/components/ArtworksFilters'
export default {
	layout: 'collections',
  name: "Artworks",
  components: {
    ArtworksFilters
  },
  fetch({ store, route }) {
		// console.log('fetch');
		// console.log('route.query', route.query);
		console.log('fetch', route);
		return store.dispatch("getArtworks", {route}); //{params, route}
	},
  data() {
    return {
      artworks: this.$store.state.artworks
    };
	}
};
</script>

