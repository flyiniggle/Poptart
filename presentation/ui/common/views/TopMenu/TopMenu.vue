<script>
	import { curry, find, map, pipe, pluck } from "ramda";

	import Navigator from "./Navigator";
	import RibbonLink from "./RibbonLink";

	const getVNodeData = (VNode) => VNode.componentOptions.Ctor.options.data();
	const getRibbonMenuName = pluck("name");
	const getRibbonMenuLinkName = pluck("displayName");
	const getNameFromVNode = pipe(getVNodeData, getRibbonMenuName);
	const getLinkNameFromVNode = pipe(getVNodeData, getRibbonMenuLinkName);
	const isSelectedMenu = curry((selectedRibbon, componentName) => componentName === selectedRibbon);
	const getIsSelected = curry(function(selectedRibbon, VNode) {
		return isSelectedMenu(selectedRibbon, getNameFromVNode(VNode))
	});

	const getSelectedRibbonMenu = function(selectedRibbon, list) {
		return pipe(
			map(getVNodeData),
			map(getRibbonMenuName),
			find(isSelectedMenu(selectedRibbon))
		)(list);
	};

	const getRibbonLinkData = function(selectedRibbon, ribbons) {
		return map(ribbon => {
				return {
					name: getRibbonMenuName(ribbon),
					displayName: getRibbonMenuLinkName(ribbon),
					isSelected: getIsSelected(selectedRibbon, ribbon)
				};
			}
		);
	};

	const renderRibbonLink = curry(function(h, ribbon) {
		return (
			<ribbon-link
				menuComponent={ ribbon.name }
				isSelected={ ribbon.isSelected }>
				{ ribbon.displayName }
			</ribbon-link>
		);
	});

	const renderRibbonLinks = function(h, selectedRibbon, ribbons) {
		return pipe(
			getRibbonLinkData(selectedRibbon),
			map(renderRibbonLink(h))
		)(ribbons);
	}

	export default {
		name: "TopMenu",
		components: { Navigator, RibbonLink },
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
							{ renderRibbonLinks(h, this.selectedRibbon, this.$slots.ribbons[0].children) }
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