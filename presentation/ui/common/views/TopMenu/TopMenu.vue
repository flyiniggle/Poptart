<script>
	import { curry, find, map, pick, pipe, prop } from "ramda";

	import Navigator from "./Navigator";
	import RibbonLink from "./RibbonLink";

	const nameMenu = function(menu) {
		if(!menu.displayName) {
			throw new Error("Ribbon menus must have a displayName provided.");
		}
		return {
			name: menu.displayName.toLowerCase().replace(/\s/g, ''),
			...menu
		};
	};

	const isSelectedRibbon = curry((selectedRibbon, name) => name === selectedRibbon);
	const getIsSelectedRibbon = curry(function(selectedRibbon, ribbon) {
		return pipe(
			prop("name"),
			isSelectedRibbon(selectedRibbon)
		)(ribbon);
	});

	const getSelectedMenu = function(selectedRibbonName, ribbons) {
		return pipe(
			find(getIsSelectedRibbon(selectedRibbonName)),
			prop("ribbon")
		)(ribbons);
	}

	const renderSelectedMenu = function(h, selectedRibbonName, ribbons) {
		const selectedMenu = getSelectedMenu(selectedRibbonName, ribbons);

		return selectedMenu ? selectedMenu(h) : null;
	};

	const getRibbonLinkData = curry(function(selectedRibbon, ribbons) {
		return map(ribbon => (
				{
					isSelected: getIsSelectedRibbon(selectedRibbon, ribbon),
					...ribbon
				}
			), (ribbons || []));
	});

	const renderRibbonLink = curry(function(h, selectHandler, ribbons) {
		return map(ribbon => (
			<ribbon-link
				menuComponent={ ribbon.name }
				isSelected={ ribbon.isSelected }
				onSelected={ selectHandler }>
				{ ribbon.displayName }
			</ribbon-link>
		), (ribbons || []));
	});

	const renderRibbonLinks = function(h, selectHandler, selectedRibbon, ribbons) {
		return pipe(
			getRibbonLinkData(selectedRibbon),
			renderRibbonLink(h, selectHandler)
		)(ribbons || []);
	};

	export default {
		name: "TopMenu",
		components: { Navigator, RibbonLink },
		data: function() {
			return {
				selectedRibbon: this.startingSelectedRibbon.toLowerCase().replace(/\s/g, ''),
				menus: map(nameMenu, this.menuSettings)
			}
		},
		props: {
			menuSettings: {
				type: Array,
				default: () => []
			},
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

			return (
				<div class="controlsContainer">
					<div id="controls">
						<navigator>
							{ this.$slots.navigatorControls }
						</navigator>
						<div id="ribbonMenuTabs">
							{ renderRibbonLinks(h, this.selectRibbon, this.selectedRibbon, this.menus) }
						</div>
						<div id="ribbonMenuStack">
							{ renderSelectedMenu(h, this.selectedRibbon, this.menus) }
						</div>
					</div>
				</div>
			)
		}
	};

	export {
		nameMenu,
		isSelectedRibbon,
		getIsSelectedRibbon,
		getSelectedMenu,
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