<template>
	<section class="exhibitions" v-if="this.$store.state.homeDataIsReady">
		<div class="container">
			<h2>{{ homeExhibitions.title }}</h2>
			<div class="posts">
				<div class="main-post">
					<PostPreview :postData="homeExhibitions.data['0']" />
				</div>
				<div class="other-posts">
					<PostPreview v-show="index > 0" :postData="post" v-for="(post, index) in homeExhibitions.data" :key="index" />					
					<div class="more">
						<nuxt-link to="about-us" class="btn">more Exhibitions</nuxt-link>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { mapGetters } from 'vuex'
import PostPreview from './PostPreview'
export default {
	name: 'HomeExhibitions',
	components: {
		PostPreview
	},
	computed: {
		...mapGetters([
			'homeExhibitions'
		])
	}
}
</script>