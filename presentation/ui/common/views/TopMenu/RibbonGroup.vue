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

<style>
	.ribbonMenuGroup {
		height: 60px;
		padding-right: 10px;
		padding-left: 10px;
		border-right: 1px solid rgb(61, 61, 61);
		float: left;
	}

	.ribbonMenuGroup:first-child {
		margin-left: 15px;
		border-left: 1px solid rgb(61, 61, 61);
	}

	.ribbonMenuGroupLabel {
		display: block;
		color: rgb(61, 61, 61);
		margin-bottom: 5px;
	}

	.ribbonMenuForm {
		display: inline;
	}

	.ribbonMenuLink {
		display: block;
		cursor: pointer;
		font-size: 13px;
		color: rgb(222, 222, 222);
		text-decoration: none;
	}

	.ribbonMenuLink:hover {
		text-decoration: underline;
	}
</style>