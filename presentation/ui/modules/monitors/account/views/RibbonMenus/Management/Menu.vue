<template>
	<ribbon name="Management">
		<ribbon-group label="Launch Account">
			<account-launcher />
		</ribbon-group>
		<ribbon-group label="Delete Account">
			<account-deleter />
		</ribbon-group>
		<ribbon-group label="Controls">
			<account-controls />
		</ribbon-group>
	</ribbon>
</template>

<script>
	import Ribbon from "Poptart/common/views/TopMenu/Ribbon";
	import RibbonGroup from "Poptart/common/views/TopMenu/RibbonGroup";

	import AccountLauncher from "./AccountLauncher";
	import AccountDeleter from "./AccountDeleter";
	import AccountControls from "./AccountControls";

	export default {
		name: "Menu",
		components: {
			AccountDeleter,
			AccountLauncher,
			Ribbon,
			RibbonGroup,
			AccountControls
		}
	}
</script>