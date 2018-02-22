<template>
	<div id="ribbonMenu_Management" class="ribbonMenu">
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
			}
		}
	}
</script>