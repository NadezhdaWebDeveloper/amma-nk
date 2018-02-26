<template>
<div>
  <div class="search-filter">
    <form>
      <div class="search">
        <div class="inner">
          <button type="submit" class="btn-submit">
              <svg version="1.1" id="Layer" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 21 16" style="enable-background:new 0 0 21 16;" xml:space="preserve">
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
            <label @click.prevent="addQuery(type)">{{ type }}</label>
          </li>
        </ul>
        <label>Show Only</label>
        <ul>
          <li><label><input type="checkbox" checked>new-acquisition</label></li> 
          <!-- {{artworksFilters['new-acquisition']}} -->
        </ul>
      </div>
      <!--/filter-checkboxes-->

      <div class="filter-selects">
        <label>Decade</label>
        <div class="select-wrap">
          <select>
            <option v-for="(year, key) in artworksFilters['artwork_year']" :key="key" v-bind:value="year">
              {{ year }}
            </option>
          </select>
        </div>
        <label>Sort By</label>
        <div class="select-wrap">
          <select>
            <option v-for="(item, key) in artworksFilters.orderby" :key="key" :value="item">{{ item }}</option>
          </select>
        </div>
      </div>
      <!--/filter-selects-->
    </form>
  </div>
  <!--/search-filter-->
  <div class="toolbar-sorting">
    <div class="items-showing">Showing: <span>70</span> Works</div>
    <div class="sorting">
      Per page:
      <div class="select-wrap">
        <select>
          <option v-for="(item, key) in artworksFilters['per_page']" :key="key" :value="item">{{ item }}</option>
        </select>
      </div>
    </div>
  </div>
  <!--/toolbar-sorting-->
</div>
</template>

<script>
import api from '@/api'
export default {
  name: 'ArtworksFilters',
  data() {
    return {
			artworksFilters: {}
    };
	},
	created() {
		api.getArtworksSettings()
      .then(res => {
				this.artworksFilters = res.data;
      })
      .catch(error => {
				console.log('ERROR');
				throw new Error(error);
      });
  },
  methods:{
		addQuery(queryStr){		
			this.$router.push({path: '/artworks', query: {types: queryStr}})
		}		
	}
}
</script>