<script>
	import Navigator from "Poptart/common/views/TopMenu/Navigator";
	import Ribbon from "Poptart/common/views/TopMenu/Ribbon";
	import RibbonGroup from "Poptart/common/views/TopMenu/RibbonGroup";
	import RibbonLink from "Poptart/common/views/TopMenu/RibbonLink";
	import TopMenu from "Poptart/common/views/TopMenu/TopMenu";

	import ActionsMenu from "./RibbonMenus/ActionsMenu";
	import AccountControls from "./RibbonMenus/AccountControls";

	const actions = {
		displayName: "Actions",
		components: [{"ActionsMenu": ActionsMenu}],
		ribbon: (h) => <actions-menu/>
	}

	export default {
		name: "Poptart-Monitor-Account-TopMenu",
		components: {
			TopMenu,
			Ribbon,
			RibbonLink,
			RibbonGroup,
			Navigator,
			AccountControls,
			ActionsMenu
		},
		render: function(h) {
			return (
				<top-menu menuSettings={ [actions] } startingSelectedRibbon="Actions">
					<div slot="navigatorControls">
						<a href="/">Dashboard</a>
						<a class="navigationLink" href="/monitors/account">Account Monitor</a>
					</div>
				</top-menu>
			)
		}
	}
</script>