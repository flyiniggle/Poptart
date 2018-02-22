<template>
	<div class="mainNavMenuTarget">
		<div @mouseover="hovered = true" @mouseout="hovered = false">
			<h2 id="mainNavMenuTargetText" class="ion-android-exit">
				Go To
			</h2>
		</div>
		<div v-show="hovered" @mouseover="hovered = true" @mouseout="hovered = false" class="mainNavMenu">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Navigator",
		data: function() {
			return {
				hovered: false
			}
		}
	}
</script>

<style scoped>
	.mainNavMenuTarget {
		display: inline-block;
		padding-left: 20px;
		padding-right: 20px;
		height: inherit;
	}

	#mainNavMenuTargetText {
		display: block;
		height: inherit;
		line-height: 50px;
		font-size: 17px;
	}

	.mainNavMenu {
		position: absolute;
		top: 50px;
		z-index: 10;
		background-color: rgb(53, 148, 209);
		padding: 10px;
		border-bottom: 2px solid rgb(117, 169, 203);
		-webkit-box-shadow: 2px 2px 2px 0 rgba(100, 100, 100, 0.5);
		-moz-box-shadow: 2px 2px 2px 0 rgba(100, 100, 100, 0.5);
		box-shadow: 2px 2px 2px 0 rgba(100, 100, 100, 0.5);
	}

	#mainNavMenu * {
		font-size: 13px;
		font-weight: normal;
		color: rgb(61, 61, 61);
	}
</style>