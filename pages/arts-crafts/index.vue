<template>
	<div class="collection">
		<div class="container">
			<h1>The Collection</h1>
			<div class="tabs-wrap">
				<PageTabsNav/>
				<h1>Arts crafts</h1>
			</div>
		</div>
	</div>
</template>

<script>
import PageTabsNav from '@/components/PageTabsNav'
import { mapGetters } from 'vuex'
export default {
	name: 'ArtsCrafts',
	components: {
		PageTabsNav
	},
	async asyncData({ app, error }) {
		await app.store.dispatch("getArtLoansData");
	},
	data() {
		return {
			isFullText: false
		}
	},
	computed: {
		...mapGetters([
			'artLoansPageData'
    ]),
	}
}
</script>

