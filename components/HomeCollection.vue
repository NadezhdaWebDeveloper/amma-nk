<template>
	<section class="collection-gallery-wrap">
		<div class="container">
			<!-- {{ homeArtworksCollection.title }} -->
			<h2>The Collection</h2>
			<slick :options="slickOptions" ref="slickCollection" class="collection-gallery">
			<!-- <ul class="collection-gallery"> -->
				<div v-for="(item, idx) in homeArtworksCollection" :key="idx">
					<div class="item">
						<figure>
							<a :href="item.link" :style="`backgroundImage: url('${item.img}');`"></a>
						</figure>
						<h4><a href="#"><span>Henry</span>, Sean</a></h4> <!-- {{ item.full_name }} -->
						<p>{{ item.title }}</p>
						<span class="date">Date: {{ item.date }}</span>
					</div>
				</div>
			</slick>
			<div class="more">
				<nuxt-link to="artworks" class="btn">Browse All</nuxt-link>
			</div>
		</div>
	</section>
</template>

<script>
import { mapGetters } from 'vuex'
import Slick from 'vue-slick'
export default {
	name: 'MainGallery',
	components: {
    Slick
	},
	data() {
		return {
			slickOptions: {
					slidesToShow: 7,
			},
		};
	},
	computed: {
		...mapGetters([
			'homeArtworksCollection'
		])
	},
	methods: {
		next() {
			this.$refs.slick.next();
		},
		prev() {
			this.$refs.slick.prev();
		},
		reInit() {
			this.$nextTick(() => {

				this.$refs.slick.reSlick();
			});
		},
	}
}
</script>

<style>
@import 'slick-carousel/slick/slick.css';

.slick-track {
	margin-left: 0 !important;
}
</style>