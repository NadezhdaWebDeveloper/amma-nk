<template>
  <div>
    <MainGallery />    
    <HomeCollection />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MainGallery from '@/components/MainGallery'
import HomeCollection from '@/components/HomeCollection'

export default {
  name: 'HomePage',


  mounted() {
    this.$store.dispatch('getDataForHomePage');

  },
  components: {
    MainGallery,
    HomeCollection
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