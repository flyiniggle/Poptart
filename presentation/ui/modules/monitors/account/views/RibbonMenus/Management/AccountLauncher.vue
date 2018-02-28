<template>
	<form v-once id="am_accountLauncher" class="ribbonMenuForm">
		<input id="am_accountLauncherSelector" class="am_accountSelector" type="text"/>
		<input type="submit" value="go" class="ribbon"/>
	</form>
</template>

<script>
	import jQuery from "Lib/Poptart.jQuery";
	import "jqueryui";

	import { Service as igService } from "Lib/Poptart.Ignite";

	export default {
		name: "AccountLauncher",
		mounted: function() {
			igService("igCombo")
				.then(function() {
					jQuery("#am_accountLauncherSelector").igCombo({
						dataSource: accountList,
						valueKey: "id",
						textKey: "name",
						placeHolder: "Go to account...",
						autoComplete: true,
						height: "20px"
					});
				});
		}
	}
</script>