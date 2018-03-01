<template>
	<div class="contact-us">
		<div class="container">
				<h1>Contact Us</h1>
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
										<div class="contacts-form">
												<form>
														<div class="row">
																<div class="desk-6">
																		<div class="form-group">
																				<input class="form-control" placeholder="Your Name *" type="text">
																		</div>
																</div>
																<div class="desk-6">
																		<div class="form-group">
																				<input class="form-control" placeholder="Your Last Name *" type="text">
																		</div>
																</div>
														</div>
														<div class="row">
																<div class="desk-6">
																		<div class="form-group">
																				<input class="form-control" placeholder="Email *" type="email">
																		</div>
																</div>
																<div class="desk-6">
																		<div class="form-group">
																				<input class="form-control" placeholder="Phone" type="text">
																		</div>
																</div>
														</div>
														<div class="form-group textarea">
																<textarea class="form-control" placeholder="Enter Message *"></textarea>
														</div>
														<div class="form-footer">
																<span class="note">* Indicates required field.</span>
																<button type="submit" class="btn">Send</button>
														</div>
												</form>
										</div>
										<!--/contacts-form-->
								</div>
						</div>
				</div>
				<!--/contacts-area-->
		</div>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: 'ContactUs',
	created() {
		this.$store.dispatch('getDataForContactUs');
		this.insertWpForm(contactUsData.acf.contact_form_shortcode);
	},
	computed: {
		...mapState([
			'contactUsData'
		])
	},
	methods: {
		insertWpForm(htmlStr) {
			console.log('DATA', contactUsData.acf.contact_form_shortcode);
		}
	}
}
</script>

