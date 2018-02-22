<template functional>
	<div class="controlsContainer">
		<div id="controls">
			<navigator>
				<slot name="navigatorControls"></slot>
			</navigator>
			<div id="ribbonMenuTabs">
				<slot name="ribbonLinks"></slot>
			</div>
			<div id="ribbonMenuStack">
				<slot name="ribbons"></slot>
			</div>
		</div>
	</div>
</template>

<script>
	import Navigator from "./Navigator";

	export default {
		name: "TopMenu",
		components: { Navigator }
	}
</script>

<style scoped>
	.controlsContainer {
		height: 120px;
		width: 100%;
		margin-bottom: 10px;
		display: block;
	}

	#controls {
		position: fixed;
		top: 0;
		width: inherit;
		height: 50px;
		background-color: rgb(61, 61, 61);
		border-bottom: 3px solid rgb(53, 148, 209);
		-webkit-box-shadow: 0 2px 2px 0 rgba(100, 100, 100, 0.5);
		-moz-box-shadow: 0 2px 2px 0 rgba(100, 100, 100, 0.5);
		box-shadow: 0 2px 2px 0 rgba(100, 100, 100, 0.5);
		z-index: 100;
	}

	#ribbonMenuTabs {
		position: absolute;
		top: 0;
		display: inline-block;
		height: inherit;
	}

	#ribbonMenuStack {
		height: 70px;
	}
</style>