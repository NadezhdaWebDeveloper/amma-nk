<template>
	<div class="collection">
		<div class="container">
			<h1>The Collection</h1>
			<div class="tabs-wrap">
				<PageTabsNav/>
				<!--/tabs-nav-->
				<h2>Artworks</h2>
				<div class="search-filter">
					<form>
						
						<div class="search">
							<div class="inner">
								<button type="submit" class="btn-submit">
										<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 21 16" style="enable-background:new 0 0 21 16;" xml:space="preserve">
											<path fill="#434A54" d="M9.3,0.8C6.3-0.9,2.5,0.1,0.8,3.1S0.1,10,3.1,11.7c2.6,1.5,5.9,0.9,7.8-1.4l1.5,0.9c-0.2,0.5-0.1,1,0.4,1.3
											l5.7,3.3c0.5,0.3,1.1,0.1,1.4-0.4l1.1-1.8c0.3-0.5,0.1-1.1-0.4-1.4l-5.7-3.3c-0.5-0.3-1-0.1-1.3,0.3L12,8.3C13,5.6,11.9,2.4,9.3,0.8
											z M3.4,11.1c-2.6-1.5-3.5-5-2-7.6s4.9-3.6,7.5-2s3.5,5,2,7.6S6,12.6,3.4,11.1z M14.5,9.5l5.7,3.3c0.2,0.1,0.2,0.3,0.1,0.5l-1.1,1.8
											c-0.1,0.2-0.3,0.2-0.5,0.1L13.1,12c-0.2-0.1-0.2-0.3-0.1-0.5L14,9.6C14.1,9.5,14.3,9.4,14.5,9.5z M13.2,9.8l-0.5,0.8l-1.4-0.8
											c0.1-0.1,0.2-0.3,0.3-0.4c0.1-0.1,0.1-0.3,0.2-0.4L13.2,9.8z"/>
										</svg>
								</button>
								<div class="input-holder">
										<input type="text" class="form-control" placeholder="Search by keyword, title, artist, or object number">
								</div>
							</div>
						</div>
						<!--/search-->
						
						<div class="filter-checkboxes">
							<label>Filter By Type</label>
							<ul>
								<li v-for="(type, idx) in artworksFilters.types" :key="idx">
									<label>
										<input type="checkbox" :value="type" v-model="checkedTypes">
										{{ type }}
									</label>
								</li>
							</ul>
							<label>Show Only</label>
							<ul>
								<li>
									<label>
										<input type="checkbox" v-model="showOnly">
										{{artworksFilters['new-acquisition']}}
									</label>
								</li>
							</ul>
						</div>
						<!--/filter-checkboxes-->

						<div class="filter-selects">
							<label>Decade</label>
							<div class="select-wrap">
								<select v-model="decade">
									<option>All</option>
									<option v-for="(year, key) in artworksFilters['artwork_year']" :key="key" :value="year">
										{{ year }}
									</option>
								</select>
							</div>
							<label>Sort By</label>
							<div class="select-wrap">
								<select v-model="sortBy">
									<option v-for="(item, key) in artworksFilters.orderby" :key="key" :value="key">{{ item }}</option>
								</select>
							</div>
						</div>
						<!--/filter-selects-->
					</form>
				</div>
				<!--/search-filter-->
				<div class="toolbar-sorting">
					<div class="items-showing">Showing: <span>{{ artworksHeaders.totalWorks }}</span> Works</div>
					<div class="sorting">
						Per page:
						<div class="select-wrap">
							<select v-model="perPage">
								<option v-for="(item, key) in artworksFilters['per_page']" :key="key" :value="item">{{ item }}</option>
							</select>
						</div>
					</div>
				</div>
				<!--/toolbar-sorting-->
				<h3 style="text-align: center" v-if="artworksHeaders.totalWorks === 0">Not Found</h3>
				<div v-else class="collection-wrap">					
					<ul class="collection-gallery">
						<li v-for="(artwork, idx) in artworks" :key="idx">
							<div class="item">
								<figure>
									<nuxt-link :to="artwork.link" :style="{backgroundImage: `url('${(artwork.gallery[0].medium.imageUrl !== undefined) ? artwork.gallery[0].medium.imageUrl : '' }')`}"></nuxt-link>
								</figure>
								<h3><a href="#">{{ artwork.artist }}</a></h3>
								<h4><a href="#">{{ artwork.title }}</a></h4>
								<span class="date">Date: {{ artwork.year }}</span>
								<span class="category">{{ artwork.category }}</span>
							</div>
						</li>
					</ul>
				</div>
				<!--/collection-->
				<div v-show="artworksHeaders.totalWorks !== 0" class="pagination">
					<div class="wp-pagenavi">
						<a class="previouspostslink" v-show="page !== 1" @click.prevent="--page" rel="prev">prev</a>
						<a class="page larger" :title="`Page ${item}`"  v-if="item != page" v-for="(item, key) in artworksHeaders.totalPages" :key="key"
							@click.prevent="page = item">{{ item }}</a>
						<span class="current" v-else>{{ page }}</span>
						<!-- <span class="extend">...</span> -->
						<a class="nextpostslink" v-show="page !== artworksHeaders.totalPages" @click.prevent="++page" rel="next">next</a>
					</div>
				</div>
				<!--/pagination-->
			</div>
		</div>
	</div>
</template>

<script>
import api from "@/api";
import { mapState } from "vuex";

import PageTabsNav from "@/components/PageTabsNav";

export default {
  name: "Artworks",
  components: {
    PageTabsNav
  },
  // fetch({ store, route }) {
  // const arr = [
  // store.dispatch("getArtworks", route),
  // store.dispatch("getArtworks", route)
  // ]
  // return Promise.all(arr);
  // return store.dispatch("getArtworks", route);
  // },
  data() {
    return {
      checkedTypes: [],
      sortBy: this.$route.query.orderby || "default",
      perPage: +this.$route.query.per_page || 4,
      decade: this.$route.query.artwork_year || "All",
      page: +this.$route.query.page || 1,
      showOnly: this.$route.query["new-acquisition"] || ""
    };
  },
  watch: {
    $route({ params, query }) {
      this.getArtworks(query);
    },
    checkedTypes(arr) {
      let oldQuery = this.$route.query;
      let newQuery = {
        ...oldQuery,
        types: arr.length > 0 ? arr.join("%2C") : undefined
      };
      this.$router.push({ query: newQuery });
    },
    showOnly(val) {
      let oldQuery = this.$route.query;
      let newQuery = {
        ...oldQuery,
        "new-acquisition": val ? "yes" : undefined
      };
      this.$router.push({ query: newQuery });
    },
    decade(val) {
      let oldQuery = this.$route.query;
      let newQuery = { ...oldQuery, artwork_year: val };
      this.$router.push({ query: newQuery });
    },
    sortBy(val) {
      let oldQuery = this.$route.query;
      let newQuery = { ...oldQuery, orderby: val };
      this.$router.push({ query: newQuery });
    },
    page(val) {
      let oldQuery = this.$route.query;
      let newQuery = { ...oldQuery, page: val };
      this.$router.push({ query: newQuery });
    },
    perPage(val) {
      let oldQuery = this.$route.query;
      let newQuery = { ...oldQuery, per_page: val };
      this.$router.push({ query: newQuery });
    }
  },
  mounted() {
    this.getArtworks();	
	jcf.replaceAll();
  },
  async asyncData({ app }) {
	let { data } = await api.getArtworksSettings();
	return {
		artworksFilters: data
	}
  },
  computed: {
    ...mapState(["artworks", "artworksHeaders"])
  },
  methods: {
    getArtworks() {
      let route = null;
      if (Object.keys(this.$route.query).length === 0) {
        route = {
          per_page: this.perPage,
          page: this.page
        };
      } else {
        route = this.$route.query;
      }
      this.$store.dispatch("getArtworks", route);
    }
  }
};
</script>