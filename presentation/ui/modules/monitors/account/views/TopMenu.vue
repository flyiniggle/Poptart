<template>
	<top-menu >
		<div slot="navigatorControls">
			<a href="/">Dashboard</a>
		</div>
		<div slot="ribbonLinks">
			<ribbon-link menuComponent="ManagementMenu" @selected="setSelectedRibbonMenu">Management</ribbon-link>
		</div>
		<div slot="ribbons">
			<component :is="selectedRibbon">
				<management-menu />
			</component>
		</div>
	</top-menu>
</template>

<script>
	import Navigator from "Poptart/common/views/TopMenu/Navigator";
	import RibbonLink from "Poptart/common/views/TopMenu/RibbonLink";
	import TopMenu from "Poptart/common/views/TopMenu/TopMenu";
	import AccountLauncher from "./RibbonMenus/Management/AccountLauncher";
	import AccountControls from "./RibbonMenus/Management/AccountControls";
	import AccountDeleter from "./RibbonMenus/Management/AccountDeleter";

	import ManagementMenu from "./RibbonMenus/Management/Menu";

	export default {
		name: "Poptart-Monitor-Account-TopMenu",
		components: {
			TopMenu,
			RibbonLink,
			Navigator,
			ManagementMenu,
			AccountLauncher,
			AccountDeleter,
			AccountControls
		},
		data: function() {
			return {
				selectedRibbon: "managementMenu"
			}
		},
		methods: {
			setSelectedRibbonMenu: function(selected) {
				this.selectedRibbon = selected;
			}
		}
	}
</script>