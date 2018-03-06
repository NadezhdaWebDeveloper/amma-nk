<template>
	<div class="post">
		<figure>
			<a :href="postData.link" :style="`backgroundImage: url('${postData.img}');`"></a>
		</figure>
		<div class="info">
			<div class="date">{{postData.start_date}} – {{postData.end_date}}</div>
			<h3><a :href="postData.link">{{postData.title}}</a></h3>
			<h4>{{postData.address}}</h4>
		</div>
	</div>
</template>

<script>
export default {
	name: 'PostPreview',
	props: ['postData']
}
</script>
