<template>
  <div>
    <main-gallary />    
    <collection />
    <artists />
    <exhibitions />
    <last-updates />
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
  async asyncData({ app, error }) {
    await app.store.dispatch("getDataForHomePage");
  },
  components: {
    'main-gallary': MainGallery,
    'collection': HomeCollection,
    'artists': HomeArtists,
    'exhibitions': HomeExhibitions,
    'last-updates': HomeColumnView
  }
}
</script>

<style lang="scss" scoped>
// @import "@/assets/css/pages/home.scss";
</style>
