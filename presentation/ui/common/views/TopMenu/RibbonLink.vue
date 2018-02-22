<template>
	<div class="ribbonMenuTab ribbonMenuTabUnselected">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: "RibbonLink",
		props: {
			menuComponent: {
				type: String,
				required: true
			}
		},
		methods: {
			selected: function() {
				this.$emit("selected", this.menuComponent);
			}
		}
	}
</script>

<style scoped>
	.ribbonMenuTab {
		min-width: 70px;
		height: 100%;
		line-height: 50px;
		padding-left: 10px;
		padding-right: 10px;
	}

	.ribbonMenuTabUnselected {
		color: rgb(53, 148, 209);
		//background-color: rgb(61, 61, 61);
	}

	.ribbonMenuTabUnselected:hover {
		background: rgb(117, 169, 203);
		color: rgb(222, 222, 222);
	}

	.ribbonMenuTabSelected{
		background: rgb(117, 169, 203);
		color: rgb(222, 222, 222);
	}
</style>