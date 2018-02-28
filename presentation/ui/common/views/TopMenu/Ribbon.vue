<template>
	<div class="ribbonMenu">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: "Ribbon",
		props: {
			name: {
				type: String,
				required: true
			},
			displayName: {
				type: String,
				required: true
			}
		}
	}
</script>

<style>
	.ribbonMenu {
		background-color: rgb(117, 169, 203);
		height: 70px;
		padding-top: 5px;
		padding-bottom: 5px;
	}
</style>