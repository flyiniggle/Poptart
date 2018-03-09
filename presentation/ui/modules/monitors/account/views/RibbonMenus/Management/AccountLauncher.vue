<template>
	<form v-once id="am_accountLauncher" class="ribbonMenuForm">
		<input id="am_accountLauncherSelector" class="am_accountSelector" type="text"/>
		<input type="submit" value="go" class="ribbon"/>
	</form>
</template>

<script>
	import jQuery from "Lib/Poptart.jQuery";
	import "jqueryui";
	import "@infragistics/ignite-ui-full/en/js/infragistics.core";
	//import "@infragistics/ignite-ui-full/en/js/infragistics.dv";
	//import "@infragistics/ignite-ui-full/en/js/infragistics.lob";
	import "@infragistics/ignite-ui-full/en/js/modules/infragistics.ui.combo";

	export default {
		name: "AccountLauncher",
		props: {
			accountList: {
				type: Array,
				default: () => []
			}
		},
		watch: {
			accountList: function() {
				console.log(this.accountList)
				jQuery("#am_accountLauncherSelector").igCombo({dataSource: this.accountList});
			}
		},
		mounted: function() {
			jQuery("#am_accountLauncherSelector").igCombo({
				dataSource: this.accountList,
				valueKey: "id",
				textKey: "name",
				placeHolder: "Go to account...",
				autoComplete: true,
				height: "20px"
			});
		}
	}
</script>