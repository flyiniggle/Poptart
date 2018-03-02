<script>
	import { curry, findIndex, map, pick, pipe, pluck } from "ramda";

	import Navigator from "./Navigator";
	import RibbonLink from "./RibbonLink";

	const getVNodeProps = (VNode) => VNode.componentOptions.propsData;
	const getRibbonMenuName = pluck("name");
	const getNameFromVNode = pipe(getVNodeProps, getRibbonMenuName);
	const isSelectedMenu = curry((selectedRibbon, componentName) => componentName === selectedRibbon);
	const getIsSelected = curry(function(selectedRibbon, VNode) {
		return isSelectedMenu(selectedRibbon, getNameFromVNode(VNode))
	});

	const getSelectedRibbonMenu = function(selectedRibbon, list) {
		const ribbonMenuIndex = pipe(
			map(getVNodeProps),
			getRibbonMenuName,
			findIndex(isSelectedMenu(selectedRibbon))
		)(list || []);

		return list[ribbonMenuIndex];
	};

	const getRibbonLinkData = curry(function(selectedRibbon, ribbons) {
		return pipe(
			map(getVNodeProps),
			map(pick(["name", "displayName"])),
			map((ribbon) => {
				return {
					"isSelected": (ribbon.name === selectedRibbon),
					...ribbon
				};
			})
		)(ribbons || []);
	});

	const renderRibbonLink = curry(function(h, selectHandler, ribbon) {
		return (
			<ribbon-link
				menuComponent={ ribbon.name }
				isSelected={ ribbon.isSelected }
				onSelected={ selectHandler }>
				{ ribbon.displayName }
			</ribbon-link>
		);
	});

	const renderRibbonLinks = function(h, selectHandler, selectedRibbon, ribbons) {
		return pipe(
			getRibbonLinkData(selectedRibbon),
			map(renderRibbonLink(h, selectHandler))
		)(ribbons || []);
	}

	export default {
		name: "TopMenu",
		components: { Navigator, RibbonLink },
		data: function() {
			return {
				selectedRibbon: this.startingSelectedRibbon
			}
		},
		props: {
			startingSelectedRibbon: {
				type: String,
				default: ""
			}
		},
		methods: {
			selectRibbon(ribbonName) {
				this.selectedRibbon = ribbonName;
			}
		},
		render: function(h) {
			const ribbons = (this.$slots.ribbons && this.$slots.ribbons.length) ? this.$slots.ribbons[0].children : [];

			return (
				<div class="controlsContainer">
					<div id="controls">
						<navigator>
							{ this.$slots.navigatorControls }
						</navigator>
						<div id="ribbonMenuTabs">
							{ renderRibbonLinks(h, this.selectRibbon, this.selectedRibbon, ribbons) }
						</div>
						<div id="ribbonMenuStack">
							{ getSelectedRibbonMenu(this.selectedRibbon, ribbons) }
						</div>
					</div>
				</div>
			)
		}
	};

	export {
		getNameFromVNode,
		isSelectedMenu,
		getIsSelected,
		getSelectedRibbonMenu,
		getRibbonLinkData,
		renderRibbonLink,
		renderRibbonLinks
	};
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