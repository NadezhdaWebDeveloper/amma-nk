<template>
	<div class="collection">
		<div class="container">
			<h1>The Collection</h1>
			<div class="tabs-wrap">
				<PageTabsNav/>
				<div class="info-area">
						<figure :style="`backgroundImage: url('${artLoansPageData.media.src}');`"></figure>
						<div class="description">
								<h2 v-html="artLoansPageData.title"></h2>
								<div class="text-content short full">
										<div class="text" v-if="isFullText" v-html="artLoansPageData.content"></div>
										<div class="text" v-else v-html="artLoansPageData.excerpt"></div>
								</div>
						</div>
						<div class="bottom-buttons">
								<a href="#" class="link more" v-show="!isFullText" @click.prevent="isFullText = true">Read More</a>
								<a href="#" class="link show-popup" v-html="artLoansPageData.reqBtnLabel"></a>
								<a :href="artLoansPageData.pdfLink" class="link icon-acrobat" download="">Info Art Loans</a>
						</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import PageTabsNav from '@/components/PageTabsNav'
import { mapGetters } from 'vuex'
export default {
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