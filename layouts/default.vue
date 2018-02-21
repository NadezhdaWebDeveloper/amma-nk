<template>
  <div class="wrapper">
    <app-header></app-header>
    <main class="content">
      <nuxt/>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
export default {
  components: {
    'app-header': Header,
    'app-footer': Footer
  }
}
</script>
