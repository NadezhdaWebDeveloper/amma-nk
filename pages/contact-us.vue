<template>
<div class="contact-us">
		<div class="container">
				<h1 id="doc">Contact Us</h1>
				
				<!-- :icon="{ url: 'http://inter-service.info/assets/templates/dist/images/icons/marker.svg' }" -->
				
				<div class="info-area">
						<figure>
								<div class="map-holder">										
										<gmap-map id="map" ref="map"
										:center="{lat: 19.4326077, lng: -99.13320799999997}"
										:zoom="12" :options="mapStyle"
										>
											<gmap-marker
												:key="index"
												v-for="(m, index) in markers"
												:position="m.position"
												:icon="{ url: '/marker.png' }"
												:clickable="false"
												:draggable="false"
												@click="center=m.position"
											></gmap-marker>
										</gmap-map>
								</div>
						</figure>
						<div class="description">
								<p>If in Mexico City, we would love to see you in person. Stop by to meet us at:</p>
								<address>
										<span>Las Flores #50.</span>
										<span>Colonia Tlacopac, San Ángel.</span>
										<span>Mexico City, Mexico.</span>
								</address>
								<dl class="contacts-list">
										<dt>Call:</dt>
										<dd><a href="tel:55935197">55 93 51 97</a></dd>
										<dt>Fax:</dt>
										<dd><a href="tel:55935190">55 93 51 90</a></dd>
								</dl>
						</div>
				</div>
				<!--/info-area-->
				<div class="contacts-area">
						<div class="row">
								<div class="lap-6">
										<div class="info">
												<p>Submit the form and we will get back to you as soon as possible. You can also always
														send us
														an email at`</p>
												<a href="mailto:hello@fundacionamma.org" class="link">hello@fundacionamma.org</a>
										</div>
								</div>
								<div class="lap-6">
										<div ref="contactsForm" class="contacts-form"></div>
										<!--/contacts-form-->
								</div>
						</div>
				</div>
				<!--/contacts-area-->
		</div>
</div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps/src/main'

Vue.use(VueGoogleMaps, {
	load: {
		key: 'AIzaSyBL9AMx-tXllSKsq6mP7Hemvk7BCk5tLUI'
	}
})

export default {
	name: 'ContactUs',
	data () {
    return {
			center: { lat: 19.4326077, lng: -99.13320799999997 },
			markers: [{
				position: {lat: 19.4326077, lng: -99.13320799999997}
			}],
			mapStyle: {
				styles: [
					{
            "featureType": "administrative",
            "elementType": "labels.text",
            "stylers": [
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#444444"
              }
            ]
          },
          {
            "featureType": "administrative.country",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "visibility": "on"
              },
              {
                "hue": "#ebff00"
              }
            ]
          },
          {
            "featureType": "administrative.country",
            "elementType": "labels.text",
            "stylers": [
              {
                "saturation": "-72"
              },
              {
                "gamma": "0.00"
              },
              {
                "lightness": "47"
              },
              {
                "weight": "5.59"
              },
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative.country",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative.country",
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative.province",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "saturation": "14"
              },
              {
                "lightness": "11"
              }
            ]
          },
          {
            "featureType": "administrative.province",
            "elementType": "labels.text",
            "stylers": [
              {
                "visibility": "off"
              },
              {
                "hue": "#00ff00"
              }
            ]
          },
          {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
              {
                "color": "#f2f2f2"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
              {
                "saturation": -100
              },
              {
                "lightness": 45
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
              {
                "visibility": "simplified"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
              {
                "color": "#ffffff"
              },
              {
                "visibility": "on"
              }
            ]
          }
				]
			}
    }
  },
  methods: {
    ready () {
      this.$refs.map.resize()
    }
  },
	mounted() {
		this.$store.dispatch("getDataForContactUs");
		setTimeout(() => {
			let test = this.$refs.contactsForm;
			test.innerHTML = this.$store.getters.contactUsData;
		}, 1000);
		// console.log('DOC', document.getElementById('doc'));
	},
	computed: {
		...mapGetters([
			'contactUsData'
		])
	}
}
</script>

<style>
	#map {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}
</style>
