<script>
	import Vue from "vue";

	import Ribbon from "Poptart/common/views/TopMenu/Ribbon";
	import RibbonGroup from "Poptart/common/views/TopMenu/RibbonGroup";
	import RibbonLink from "Poptart/common/views/TopMenu/RibbonLink";

	import AccountControls from "./AccountControls";


	const ActionsMenu = {
		name: "Poptart-Account-Action-Ribbon",
		components:{
			Ribbon,
			RibbonLink,
			RibbonGroup,
			AccountControls
		},
		render: function(h) {
			return (
				<ribbon name="Actions">
					<ribbon-group label="Controls">
						<account-controls/>
					</ribbon-group>
				</ribbon>
			)
		}
	};

	export default ActionsMenu;
</script>