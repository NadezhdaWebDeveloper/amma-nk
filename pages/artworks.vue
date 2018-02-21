<template>
	<div class="collection">
		<div class="container">
			<h1>The Collection</h1>
			<div class="tabs-wrap">
				<ul class="tabs-nav">
					<li><a href="#">About the Collection</a></li>
					<li class="active"><a href="#">Artworks</a></li>
					<li><a href="#">Artists Index</a></li>
					<li><a href="#">New Acquisitions</a></li>
					<li><a href="#">Art Loans</a></li>
				</ul>
				<!--/tabs-nav-->
				<h2>Artworks</h2>
				<div class="search-filter">
					<form>
						<div class="search">
							<div class="inner">
								<button type="submit" class="btn-submit">
										<svg version="1.1" id="Layer" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
							viewBox="0 0 21 16" style="enable-background:new 0 0 21 16;" xml:space="preserve">
						<style type="text/css">
							.st0 {
								fill: #434A54;
							}
						</style>
						<path class="st0" d="M9.3,0.8C6.3-0.9,2.5,0.1,0.8,3.1S0.1,10,3.1,11.7c2.6,1.5,5.9,0.9,7.8-1.4l1.5,0.9c-0.2,0.5-0.1,1,0.4,1.3
							l5.7,3.3c0.5,0.3,1.1,0.1,1.4-0.4l1.1-1.8c0.3-0.5,0.1-1.1-0.4-1.4l-5.7-3.3c-0.5-0.3-1-0.1-1.3,0.3L12,8.3C13,5.6,11.9,2.4,9.3,0.8
							z M3.4,11.1c-2.6-1.5-3.5-5-2-7.6s4.9-3.6,7.5-2s3.5,5,2,7.6S6,12.6,3.4,11.1z M14.5,9.5l5.7,3.3c0.2,0.1,0.2,0.3,0.1,0.5l-1.1,1.8
							c-0.1,0.2-0.3,0.2-0.5,0.1L13.1,12c-0.2-0.1-0.2-0.3-0.1-0.5L14,9.6C14.1,9.5,14.3,9.4,14.5,9.5z M13.2,9.8l-0.5,0.8l-1.4-0.8
							c0.1-0.1,0.2-0.3,0.3-0.4c0.1-0.1,0.1-0.3,0.2-0.4L13.2,9.8z"/>
						</svg>
								</button>
								<div class="input-holder">
										<input type="text" class="form-control"
												placeholder="Search by keyword, title, artist, or object number">
								</div>
							</div>
						</div>
						<!--/search-->
						<div class="filter-checkboxes">
							<label>Filter By Type</label>
							<ul>
								<li><label><input type="checkbox" checked>Painting</label></li>
								<li><label><input type="checkbox">Sculpture</label></li>
								<li><label><input type="checkbox">Other Media</label></li>
								<li><label><input type="checkbox" checked>Drawing</label></li>
								<li><label><input type="checkbox" checked>Photography</label></li>
							</ul>
							<label>Show Only</label>
							<ul>
								<li><label><input type="checkbox" checked>New Acquisitions</label></li>
							</ul>
						</div>
						<!--/filter-checkboxes-->

						<div class="filter-selects">
							<label>Decade</label>
							<div class="select-wrap">
								<select>
										<option value="v1">Before 1920</option>
										<option value="v3">Option 2</option>
										<option value="v3">Option 3</option>
										<option value="v3">Option 4</option>
										<option value="v3">Option 5</option>
										<option value="v3">Option 5</option>
										<option value="v3">Option 5</option>
										<option value="v3">Option 5</option>
										<option value="v3">Option 5</option>
										<option value="v3">Option 5</option>
								</select>
							</div>
							<label>Sort By</label>
							<div class="select-wrap">
								<select>
										<option value="v1">Most Viewed</option>
										<option value="v3">Option 2</option>
										<option value="v3">Option 3</option>
										<option value="v3">Option 4</option>
										<option value="v3">Option 5</option>
										<option value="v3">Option 5</option>
										<option value="v3">Option 5</option>
										<option value="v3">Option 5</option>
										<option value="v3">Option 5</option>
										<option value="v3">Option 5</option>
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
								<option value="1">12</option>
								<option value="2">13</option>
								<option value="3">14</option>
								<option value="4">15</option>
							</select>
						</div>
					</div>
				</div>
				<!--/toolbar-sorting-->
				<div class="collection-wrap">
					<ul class="collection-gallery">
						<li v-for="(artwork, idx) in artworks" :key="idx">
							<div class="item">
								<figure>
									<a :href="artwork.link" :style="{backgroundImage: `url('${(artwork.image_url !== undefined) ? artwork.image_url : '' }')`}"></a>
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
				<!-- <div class="pagination">
					<a href="#" class="prev">prev</a>
					<a href="#" class="next">next</a>
					<ul>
						<li class="current"><span>1</span></li>
						<li><a href="#">2</a></li>
						<li><a href="#">3</a></li>
						<li>...</li>
						<li><a href="#">12</a></li>
					</ul>
				</div> -->
				<div class="pagination">
					<div class="wp-pagenavi">
						<span class="current">1</span>
						<a class="page larger" title="Page 2" href="http://amma-dev.bigdropinc.net/artworks/page/2/">2</a>
						<a class="page larger" title="Page 3" href="http://amma-dev.bigdropinc.net/artworks/page/3/">3</a>
						<a class="page larger" title="Page 4" href="http://amma-dev.bigdropinc.net/artworks/page/4/">4</a>
						<a class="page larger" title="Page 5" href="http://amma-dev.bigdropinc.net/artworks/page/5/">5</a>
						<span class="extend">...</span>
						<a class="larger page" title="Page 10" href="http://amma-dev.bigdropinc.net/artworks/page/10/">10</a>
						<span class="extend">...</span>
						<a class="nextpostslink" rel="next" href="http://amma-dev.bigdropinc.net/artworks/page/2/">next</a>
					</div>
				</div>
				<!--/pagination-->
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: "Artworks",
  fetch({ store, params }) {
    return store.dispatch("getArtworks", params);
  },
  data() {
    return {
      artworks: []
    };
  },
  created() {
    this.$store.state.artworks.map(item => {
      let artwork = {
        artist: item.acf.artwork_artist_label,
        year: item.acf.artwork_year,
        title: item.title.rendered
      };
      if (item._embedded["wp:featuredmedia"] !== undefined) {
        item._embedded["wp:featuredmedia"].map(el => {
          artwork.image_url = el.source_url;
				});				
      }
      if (item._embedded["wp:term"] !== undefined) {
        item._embedded["wp:term"].map(el => {
          el.map(i => {
            artwork.category = i.name;
          });
        });
			}
      artwork.link = item.link;
      this.artworks.push(artwork);
    });
  }
};
</script>

