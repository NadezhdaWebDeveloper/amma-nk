<template>
	<section class="exhibitions">
		<div class="container" v-if="this.$store.state.sliderDataIsReady">
			<h2>{{ homeExhibitions.title }}</h2>
			{{homeExhibitions.data}}
			<div class="posts">
				<div class="main-post">					
					<div class="post">
						<figure>
							<a href="#" style="background-image: url(dist/images/exhibition-01.jpg);"></a>
						</figure>
						<div class="info">
							<div class="date">Nov. 18, 2016 – Feb. 5, 2017</div>
							<h3><a href="#">From the Collection: 1960–1969</a></h3>
							<h4>University Teaching Gallery, Harvard Art Museums</h4>
						</div>
					</div>
				</div>
				<div class="other-posts">
					<div class="post">
						<figure>
							<a href="#" style="background-image: url(dist/images/exhibition-02.jpg);"></a>
						</figure>
						<div class="info">
							<div class="date">Aug. 27, 2016 – Jan. 8, 2017</div>
							<h3><a href="#">Vision and Justice: The Art of Citizenship</a></h3>
							<h4>Harvard Art Museums</h4>
						</div>
					</div>
					<div class="post">
						<figure>
							<a href="#" style="background-image: url(dist/images/exhibition-03.jpg);"></a>
						</figure>
						<div class="info">
							<div class="date">Aug. 27, 2016 – Jan. 8, 2017</div>
							<h3><a href="#">From the Collection: 1960–1969</a></h3>
							<h4>University Teaching Gallery</h4>
						</div>
					</div>
					<div class="more">
						<a href="#" class="btn">more Exhibitions</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { mapGetters } from 'vuex'
import PostPreview from '@/components/PostPreview'
export default {
	name: 'HomeExhibitions',
	computed: {
		...mapGetters([
			'homeExhibitions'
		])
	}
}
</script>