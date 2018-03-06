<template>
	<transition>
		<section class="main-info">
				<div class="container">
					<div class="row">
						<div class="lap-4">
							<HomeAbout />
						</div>
						<div class="lap-4">
							<HomeNews />
						</div>
						<div class="lap-4">
							<HomeSisterAssociations />
						</div>
					</div>
				</div>
			</section>
	</transition>
</template>

<script>
import HomeAbout from './HomeAbout'
import HomeNews from './HomeNews'
import HomeSisterAssociations from './HomeSisterAssociations'
export default {
	name: "HomeColumnView",
	components: {
		HomeAbout,
		HomeNews,
		HomeSisterAssociations
	}
};
</script>