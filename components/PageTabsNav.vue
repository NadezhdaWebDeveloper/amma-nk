<template>
	<ul class="tabs-nav">
		<nuxt-link tag="li" to="/about-the-collection"><a>About the Collection</a></nuxt-link>
		<nuxt-link tag="li" to="/artworks/"><a>Artworks</a></nuxt-link>
		<nuxt-link tag="li" to="/artists/"><a>Artists Index</a></nuxt-link>
		<nuxt-link tag="li" to="/art-loans/"><a>Art Loans</a></nuxt-link>
	</ul>
</template>

<script>
export default {
	name: 'PageTabsNav'
}
</script>
