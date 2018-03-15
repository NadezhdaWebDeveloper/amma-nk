<template>
	<ul class="tabs-nav">
		<nuxt-link tag="li" :to="item.url" v-for="(item, key, index) in menuItems" :key="index">
			<a v-html="item.title"></a>
		</nuxt-link>
	</ul>
</template>

<script>
import api from '@/api'
import getUrl from "../helpers/getUrl"
export default {
	name: 'PageTabsNav',
	data() {
    return {
			menuItems: []
    };
	},
	methods: {
		createMenu(items) {
			if (items.length) {
				checkSubmenu(items);
				this.menuItems = items;
			}
			function checkSubmenu(items) {
				items.map((item, idx) => {
					item.url = getUrl(item.url).pathname + getUrl(item.url).search;
					if (item.hasOwnProperty('children')) {
						checkSubmenu(item.children);
					}
				});
			}
		}
	},
	mounted() {
		api.getCollectionMenu()
      .then(res => {				
				this.createMenu(res.data.items);
      })
      .catch(error => {
				console.log('ERROR Collection Menu');
				throw new Error(error);
      });
	}
}
</script>
