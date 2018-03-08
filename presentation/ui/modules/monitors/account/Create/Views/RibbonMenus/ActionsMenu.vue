<script>
	import Vue from "vue";

	import Ribbon from "Poptart/common/views/TopMenu/Ribbon";
	import RibbonGroup from "Poptart/common/views/TopMenu/RibbonGroup";
	import RibbonLink from "Poptart/common/views/TopMenu/RibbonLink";

	import CreateControls from "./CreateControls";


	const ActionsMenu = {
		name: "Poptart-Monitor-Account-Create-Action-Ribbon",
		components:{
			Ribbon,
			RibbonLink,
			RibbonGroup,
			CreateControls
		},
		render: function(h) {
			return (
				<ribbon name="Actions">
					<ribbon-group label="Controls">
						<create-controls/>
					</ribbon-group>
				</ribbon>
			)
		}
	}
	Vue.component('actions-menu', ActionsMenu);

	export default ActionsMenu;
</script>