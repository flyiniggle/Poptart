<script>
	import { filter } from "ramda";

	import Navigator from "./Navigator";

	const getSelectedRibbonMenu = function(selectedRibbon, list) {
		return list.filter(component => component.componentOptions.Ctor.options.data().name === selectedRibbon);
	}

	export default {
		name: "TopMenu",
		components: { Navigator },
		props: {
			selectedRibbon: {
				type: String,
				default: ""
			}
		},
		render: function(h) {
			return (
				<div class="controlsContainer">
					<div id="controls">
						<navigator>
							{ this.$slots.navigatorControls }
						</navigator>
						<div id="ribbonMenuTabs">
							{ this.$slots.ribbonLinks }
						</div>
						<div id="ribbonMenuStack">
							{ getSelectedRibbonMenu(this.selectedRibbon, this.$slots.ribbons[0].children) }
						</div>
					</div>
				</div>
			)
		}
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