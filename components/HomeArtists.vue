<template>
<section class="artists-index">
	<!-- {{ homeArtists }} -->
	<div class="container">
		<h2>{{ homeArtists.title }}</h2>
		<div class="holder">
			<ul>
				<li v-for="(item, idx) in homeArtists.data" :key="idx"><a :href="item.link">{{ item.letter }}</a></li>
			</ul>
		</div>
		<div class="more">
			<nuxt-link to="artists" class="btn">See All Artists</nuxt-link>
		</div>
	</div>
</section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	name: 'HomeArtists',
	computed: {
		...mapGetters([
			'homeArtists'
		])
	}
}
</script>