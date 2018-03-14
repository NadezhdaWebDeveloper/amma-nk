<template>
	<section class="main-gallery-wrap">
		<slick ref="slick" :options="slickOptions" class="big-slider">
			<div v-for="(slide, index) in homeArtworksSlider" :key="index" class="item">
				<div class="holder">
					<div class="info">
						<div class="date">{{ slide.date }}</div>
						<div class="author">by <span v-html="slide.full_name"></span>. <cite v-html="slide.title"></cite></div>
					</div>
					<div class="page-bg" :style="`backgroundImage: url('${slide.img}')`"></div>
				</div>
			</div>
		</slick>
	</section>
</template>

<script>
import { mapGetters } from 'vuex'
import slick from 'vue-slick'
export default {
	name: 'MainGallery',
	components: {
    slick
	},
	data() {
		return {
			slickOptions: {
				slidesToShow: 1,
				dots: true,
				dotsClass: 'slider-controls',
				appendDots: this.$refs.slickDots,
				customPaging : function() {
					return '<a></a>';
				},
			},
		};
	},
	computed: {
		...mapGetters([
			'homeArtworksSlider'
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
			// Helpful if you have to deal with v-for to update dynamic lists
			this.$nextTick(() => {
				this.$refs.slick.reSlick();
			});
		},
	}
}
</script>

<style>
@import 'slick-carousel/slick/slick.css';

.big-slider .holder {
  position: static !important;
}
.big-slider a:hover {
	cursor: pointer;
}
.big-slider .slick-active a:after,
.big-slider a:hover:after {
	background: #ff3a1a;
}
</style>