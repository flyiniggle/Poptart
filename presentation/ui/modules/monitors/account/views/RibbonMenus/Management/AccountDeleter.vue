<template>
	<form v-once id="am_accountDeleter" class="ribbonMenuForm">
		<input id="am_accountDeleterSelector" class="am_accountSelector" type="text"/>
		<input type="submit" value="delete" class="ribbon"/>
	</form>
</template>

<script>
	import jQuery from "jquery";
	import { Service as igService } from "Lib/Poptart.Ignite";

	export default {
		name: "AccountDeleter",
		mounted: function() {
			igService("igCombo")
				.then(function() {
					jQuery("#am_accountDeleter").igCombo({
						dataSource: accountList,
						valueKey: "id",
						textKey: "name",
						placeHolder: "Delete account...",
						autoComplete: true,
						height: "20px"
					});
				});
		}
	}
</script>