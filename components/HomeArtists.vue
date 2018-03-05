<template>
<section class="artists-index">
	<div class="container">
		<h2>Artists Index</h2>
		<div class="holder">
			<ul>
				<li v-for="(item, idx) in homeArtists" :key="idx"><a :href="item.link">{{ item.letter }}</a></li>
			</ul>
		</div>
		<div class="more">
			<a href="#" class="btn">See All Artists</a>
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