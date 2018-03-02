<template>
  <div>
    <MainGallery />    
    <HomeCollection />
    <HomeArtists />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MainGallery from '@/components/MainGallery'
import HomeCollection from '@/components/HomeCollection'
import HomeArtists from '@/components/HomeArtists'

export default {
  name: 'HomePage',
  mounted() {
    this.$store.dispatch('getDataForHomePage');
  },
  components: {
    MainGallery,
    HomeCollection,
    HomeArtists
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