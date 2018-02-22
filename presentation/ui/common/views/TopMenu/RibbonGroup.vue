<template functional>
	<div class="ribbonMenuGroup">
		<span class="ribbonMenuGroupLabel">{{ label }}</span>
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: "RibbonGroup",
		props: {
			label: {
				type: String
			}
		}
	};
</script>