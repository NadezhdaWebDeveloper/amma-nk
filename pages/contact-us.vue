<template>
<div class="contact-us">
		<div class="container">
				<h1 id="doc">Contact Us</h1>

				<!-- {{ contactUsData }} -->
				<div class="info-area">
						<figure>
								<div class="map-holder" data-lat="19.4326077" data-lng="-99.13320799999997"
											data-image="dist/images/marker.png">
										<div id="map"></div>
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
import { mapGetters } from 'vuex'
export default {
	name: 'ContactUs',
	mounted() {
		this.getData();
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
	},
	methods: {
		getData() {
			this.$store.dispatch("getDataForContactUs");			
		}
	}
}
</script>

