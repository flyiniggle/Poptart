<script>
	import Vue from "vue";

	import Ribbon from "Poptart/common/views/TopMenu/Ribbon";
	import RibbonGroup from "Poptart/common/views/TopMenu/RibbonGroup";
	import RibbonLink from "Poptart/common/views/TopMenu/RibbonLink";

	import AccountLauncher from "./AccountLauncher";
	import AccountControls from "./AccountControls";
	import AccountDeleter from "./AccountDeleter";


	const ManagementMenu = {
		name: "Poptart-Monitor-Account-Management-Ribbon",
		components:{
			Ribbon,
			RibbonLink,
			RibbonGroup,
			AccountLauncher,
			AccountDeleter,
			AccountControls
		},
		render: function(h) {
			return (
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
			)
		}
	};

	export default ManagementMenu;
</script>