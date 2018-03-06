<template>
  <div v-if="this.$store.state.homeDataIsReady">
    <MainGallery />    
    <HomeCollection />
    <HomeArtists />
    <HomeExhibitions />
    <HomeColumnView />
  </div>
</template>

<script>
import MainGallery from '@/components/MainGallery'
import HomeCollection from '@/components/HomeCollection'
import HomeArtists from '@/components/HomeArtists'
import HomeExhibitions from '@/components/HomeExhibitions'
import HomeColumnView from '@/components/HomeColumnView'
export default {
  name: 'HomePage',
  mounted() {
    this.$store.dispatch('getDataForHomePage');
  },
  components: {
    MainGallery,
    HomeCollection,
    HomeArtists,
    HomeExhibitions,
    HomeColumnView
  }
}
</script>

<style lang="scss" scoped>
// @import "@/assets/css/pages/home.scss";
</style>
