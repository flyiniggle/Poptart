<template>
	<form v-once id="am_accountDeleter" class="ribbonMenuForm">
		<input id="am_accountDeleterSelector" class="am_accountSelector" type="text"/>
		<input type="submit" value="delete" class="ribbon"/>
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
		name: "AccountDeleter",
		props: {
			accountList: {
				type: Array,
				default: () => []
			}
		},
		watch: {
			accountList: function() {
				jQuery("#am_accountDeleterSelector").igCombo({dataSource: this.accountList});
			}
		},
		mounted: function() {
			jQuery("#am_accountDeleterSelector").igCombo({
				dataSource: this.accountList,
				valueKey: "id",
				textKey: "name",
				placeHolder: "Delete account...",
				autoComplete: true,
				height: "20px"
			});
		}
	}
</script>