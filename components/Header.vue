<template>
<header class="_header_">
	<div class="header-area">
        <strong class="logo"><router-link to="/">Amma Foundacion</router-link></strong>
        <!--/logo-->
        <a href="#" class="btn-menu"><span></span></a>
        <!--/btn-menu-->
				<router-link to="/artworks">Artworks</router-link>
        <nav class="main-menu">
            <div class="lang-switcher">
                <a href="#">En</a>
                <ul>
                    <li><a href="#">En</a></li>
                    <li><a href="#">Es</a></li>
                </ul>
            </div>
            <!--/lang-switcher-->
						
            <div class="inner">
                <ul class="main-nav">
										<li v-for="(item, idx) in menuItems" :key="idx" v-bind:class="[item.classes, {'menu-item-has-children': item.children}]">
											<router-link :to="`${item.object_slug ? item.object_slug : item.object}`">{{ item.title }}</router-link>
											<ul v-if="item.children">
												<li v-for="(subItem, index) in item.children" :key="index">
													<router-link :to="`${item.object_slug ? item.object_slug : item.object}/${subItem.object_slug ? subItem.object_slug : subItem.object}`" append>{{ subItem.title }}</router-link>
												</li>
											</ul>
										</li>
                </ul>
                <!--/main-nav-->
            </div>
            <!--/inner-->
        </nav>
        <!--/main-menu-->
        <div class="header-search">
            <span class="icon-search">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
            </span>
            <div class="search-inner">
                <span class="close"></span>
                <div class="search-form">
                    <form>
                        <div class="form-area">
                            <input type="text" class="form-control"
                                   placeholder="Search by keyword, title, artist, object number, or gallery number">
                            <button type="submit" class="btn-submit">
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
                        </div>
                    </form>
                </div>
                <!--/search-form-->
            </div>
        </div>
        <!--/header-search-->
    </div>
		<div>
			{{menuItems}}
		</div>
</header>
</template>

<script>
import axios from "axios";

export default {
  name: "Header",
  data() {
    return {
      menuItems: []
    };
  },
  created() {
    axios
      .get("http://amma-test.bigdropinc.net/wp-json/wp-api-menus/v2/menus/18")
      .then(res => {
        this.menuItems = res.data.items;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>