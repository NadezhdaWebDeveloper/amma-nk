<template>
  <div class="wrapper">
    <app-header></app-header>
    <main class="content">
			<div class="collection">
				<div class="container">
					<h1>The Collection</h1>
					<div class="tabs-wrap">
						<ul class="tabs-nav">
							<nuxt-link tag="li" to="/about-the-collection"><a>About the Collection</a></nuxt-link>
							<nuxt-link tag="li" to="/artworks/"><a>Artworks</a></nuxt-link>
							<nuxt-link tag="li" to="/artists/"><a>Artists Index</a></nuxt-link>
							<nuxt-link tag="li" to="/art-loans/"><a>Art Loans</a></nuxt-link>
						</ul>
						<!--/tabs-nav-->
						<nuxt/>
					</div>
				</div>
			</div>
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
