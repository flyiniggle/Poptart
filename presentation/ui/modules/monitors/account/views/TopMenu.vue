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
		render: function(h) {
			return (
				<top-menu startingSelectedRibbon="managementMenu">
					<div slot="navigatorControls">
						<a href="/">Dashboard</a>
					</div>
					<div slot="ribbons">
						<management-menu />
					</div>
				</top-menu>
			)
		}
	}
</script>