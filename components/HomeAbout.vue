<template>
	<div>
		<div class="about" v-html="homeAbout"></div>
		<div class="more">
			<nuxt-link to="about-us/about-amma" class="btn">Learn More</nuxt-link>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	name: 'HomeAbout',
	computed: {
		...mapGetters([
			'homeAbout'
		])
	}
}
</script>