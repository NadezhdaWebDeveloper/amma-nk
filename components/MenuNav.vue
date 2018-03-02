<template>
	<ul class="main-nav">
		<router-link tag="li" :to="item.url" v-for="(item, idx) in menuItems" :key="idx" :class="[item.classes, {'menu-item-has-children': item.children}]" >
			<a>{{ item.title }}</a>
			<ul v-if="item.children">
				<router-link tag="li" :to="subItem.url" v-for="(subItem, index) in item.children" :key="index" >
					<a>{{ subItem.title }}</a>
				</router-link>
			</ul>
		</router-link>
	</ul>
</template>

<script>
import api from "../api";
import getUrl from "../helpers/getUrl"
export default {
	name: 'MenuNav',
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
	beforeCreate() {
		api.getMenu()
      .then(res => {				
				this.createMenu(res.data.items);
      })
      .catch(error => {
				console.log('ERROR Menu Nav');
				throw new Error(error);
      });
	}
}
</script>

<style>

</style>
