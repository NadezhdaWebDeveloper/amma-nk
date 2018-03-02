<template>
  <div>
    <h1>Home</h1>
    {{ homeArtworksSlider }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HomePage',
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
