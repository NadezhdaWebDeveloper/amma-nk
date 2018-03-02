<template>
  <div>
    <h1>Home</h1>
    {{ homeArtworksSlider }}

    <slick ref="slick">
      <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
      <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
      <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
      <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
      <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
    </slick>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Slick from 'vue-slick'

export default {
  name: 'HomePage',
  components: {
    Slick
  },
  mounted() {
    this.$store.dispatch('getDataForHomePage');    
  },
  computed: {
    ...mapGetters([
      'homePageData',
      'homeArtworksCollection',
      'homeArtworksSlider',
      'homeExhibitions',
      'homeArtists',
      'homeInfoAboutDescription'
    ])
  }
}
</script>

<style>
@import 'slick-carousel/slick/slick.css';
</style>
