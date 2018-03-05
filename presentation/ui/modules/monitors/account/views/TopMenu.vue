<script>
	import Navigator from "Poptart/common/views/TopMenu/Navigator";
	import Ribbon from "Poptart/common/views/TopMenu/Ribbon";
	import RibbonGroup from "Poptart/common/views/TopMenu/RibbonGroup";
	import RibbonLink from "Poptart/common/views/TopMenu/RibbonLink";
	import TopMenu from "Poptart/common/views/TopMenu/TopMenu";

	import ManagementMenu from "./RibbonMenus/Management/ManagementMenu";
	import AccountLauncher from "./RibbonMenus/Management/AccountLauncher";
	import AccountControls from "./RibbonMenus/Management/AccountControls";
	import AccountDeleter from "./RibbonMenus/Management/AccountDeleter";

	const management = {
		displayName: "Management",
		ribbon: ManagementMenu
	}

	export default {
		name: "Poptart-Monitor-Account-TopMenu",
		components: {
			TopMenu,
			Ribbon,
			RibbonLink,
			RibbonGroup,
			Navigator,
			AccountLauncher,
			AccountDeleter,
			AccountControls
		},
		render: function(h) {
			return (
				<top-menu menus={[management]} startingSelectedRibbon="">
					<div slot="navigatorControls">
						<a href="/">Dashboard</a>
					</div>
				</top-menu>
			)
		}
	}
</script>