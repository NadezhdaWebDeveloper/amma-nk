<template>
	<div>
		<div class="associations">
			<h3>Sister Associations</h3>
			<ul class="info-list">
				<li>
					<div class="logo">
						<!-- <img src="dist/images/logo-01.jpg" alt=""> -->
					</div>
					<div class="description">
						<h4><a href="#">Americans for the Arts</a></h4>
					</div>
				</li>
				<li>
					<div class="logo">
						<!-- <img src="dist/images/logo-02.jpg" alt=""> -->
					</div>
					<div class="description">
						<h4><a href="#">ArtTable: Leadership Organization for Professional Women in the
							Visual Arts</a></h4>
					</div>
				</li>
				<li>		
					<div class="logo">
						<!-- <img src="dist/images/logo-03.jpg" alt=""> -->
					</div>
					<div class="description">
						<h4><a href="#">National Arts Marketing Project</a></h4>
					</div>
				</li>
				<li>
					<div class="logo">
						<!-- <img src="dist/images/logo-04.jpg" alt=""> -->
					</div>
					<div class="description">
						<h4><a href="#">International Festivals and Events Association</a></h4>
					</div>
				</li>
			</ul>
		</div>
		<div class="more">
			<nuxt-link to="about-us/sister-associations" class="btn">See All</nuxt-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HomeSisterAssociations'
}
</script>