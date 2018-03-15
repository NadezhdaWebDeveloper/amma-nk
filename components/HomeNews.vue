<template>
	<div>
		<div class="news">
			<h3>{{ homeRss.title }}</h3>
			<!-- {{rssData}} -->
			<ul class="info-list">
				<li>
					<div class="date">
						Nov. <br>
						17
					</div>
					<div class="description">
						<h4><a href="#">Museum Highlights</a></h4>
					</div>
				</li>
				<li>
					<div class="date">
						Nov. <br>
						10
					</div>
					<div class="description">
						<h4><a href="#">Capolavori del Museo (Museum Highlights in Italian)</a></h4>
					</div>
				</li>
				<li>
					<div class="date">
						Nov. <br>
						6
					</div>
					<div class="description">
						<h4><a href="#">Arts of the Islamic World</a></h4>
					</div>
				</li>
				<li>
					<div class="date">
						Sept. <br>
						10
					</div>
					<div class="description">
						<h4><a href="#">Modern and Contemporary Art</a></h4>
					</div>
				</li>
				<li>
					<div class="date">
						Aug. <br>
						4
					</div>
					<div class="description">
						<h4><a href="#">Chefs-d'Oeuvre du Musée (Museum Highlights in French)</a></h4>
					</div>
				</li>
			</ul>
		</div>
		
		<div class="more">
			<nuxt-link to="news" class="btn">More News</nuxt-link>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
	name: 'HomeNews',
	data() {
		return {
			rssData: {}
		}
	},
	computed: {
		...mapGetters([
			'homeRss'
		])
	},
	mounted() {
		axios.get(this.homeRss.rssLink, {
			responseType: 'text'
		})
		.then(res => {
			this.rssData = res.data
		})
		.catch(err => {
			throw new Error(err)
		})
	}
}
</script>