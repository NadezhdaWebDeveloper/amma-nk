<template>
<div class="contact-us">
  <div class="container">
    <h1>Contact Us</h1>
    <div class="info-area">
      <figure class="map-holder">
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
      </figure>
      <div class="description">
        <p v-html="contactUsData.mapDescr"></p>
        <address>
          <span v-for="(address, key) in contactUsData.address" :key="key" v-html="address.contact_office_address_p"></span>
        </address>
        <dl class="contacts-list">
          <dt>Call:</dt>
          <dd><a href="tel:55935197" v-html="contactUsData.phone"></a></dd>
          <dt>Fax:</dt>
          <dd><a :href="`tel:${contactUsData.fax}`" v-html="contactUsData.fax"></a></dd>
        </dl>
      </div>
    </div>
    <!--/info-area-->
    <div class="contacts-area">
      <div class="row">
        <div class="lap-6">
          <div class="info">
            <p v-html="contactUsData.formDescr"></p>
            <a :href="`mailto:${contactUsData.email}`" class="link" v-html="contactUsData.email"></a>
          </div>
        </div>
        <div class="lap-6">
          <div class="contacts-form" v-html="contactUsData.form"></div>
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
// import formProcessing from '~/plugins/form-processing.js'

Vue.use(VueGoogleMaps, {
	load: {
		key: 'AIzaSyBL9AMx-tXllSKsq6mP7Hemvk7BCk5tLUI'
	}
});

// Vue.use(formProcessing);

export default {
  name: 'ContactUs',  
  async asyncData({ app, error }) {
    await app.store.dispatch("getDataForContactUs");
  },
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
	computed: {
		...mapGetters([
			'contactUsData'
    ]),
    officeLocation() {
      return {
        lat: +this.$store.getters.contactUsData.location.lat,
        lng: +this.$store.getters.contactUsData.location.lng
      }
    }
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
