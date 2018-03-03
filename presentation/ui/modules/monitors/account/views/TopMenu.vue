<script>
	import Navigator from "Poptart/common/views/TopMenu/Navigator";
	import Ribbon from "Poptart/common/views/TopMenu/Ribbon";
	import RibbonGroup from "Poptart/common/views/TopMenu/RibbonGroup";
	import RibbonLink from "Poptart/common/views/TopMenu/RibbonLink";
	import TopMenu from "Poptart/common/views/TopMenu/TopMenu";

	import AccountLauncher from "./RibbonMenus/Management/AccountLauncher";
	import AccountControls from "./RibbonMenus/Management/AccountControls";
	import AccountDeleter from "./RibbonMenus/Management/AccountDeleter";


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
				<top-menu menus={["Management"]} startingSelectedRibbon="">
					<div slot="navigatorControls">
						<a href="/">Dashboard</a>
					</div>
					<div slot="ribbons">
						<ribbon name="Management">
							<ribbon-group label="Launch Account">
								<account-launcher/>
							</ribbon-group>
							<ribbon-group label="Delete Account">
								<account-deleter/>
							</ribbon-group>
							<ribbon-group label="Controls">
								<account-controls/>
							</ribbon-group>
						</ribbon>
					</div>
				</top-menu>
			)
		}
	}
</script>