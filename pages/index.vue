<template>
  <div>
    <MainGallery />    
    <HomeCollection />
    <HomeArtists />
    <homeExhibitions />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MainGallery from '@/components/MainGallery'
import HomeCollection from '@/components/HomeCollection'
import HomeArtists from '@/components/HomeArtists'
import homeExhibitions from '@/components/HomeExhibitions'

export default {
  name: 'HomePage',
  mounted() {
    this.$store.dispatch('getDataForHomePage');
  },
  components: {
    MainGallery,
    HomeCollection,
    HomeArtists,
    homeExhibitions
  },
  // computed: {
	// 	...mapGetters([
	// 		'homePageData',
	// 		'homeArtworksCollection',
	// 		'homeArtworksSlider',
	// 		'homeExhibitions',
	// 		'homeArtists',
	// 		'homeInfoAboutDescription'
	// 	])
	// },
}
</script>

<style lang="scss" scoped>
// @import "@/assets/css/pages/home.scss";
</style>
