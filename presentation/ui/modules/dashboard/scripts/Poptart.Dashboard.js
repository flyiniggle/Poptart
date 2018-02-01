// Poptart.Dashboard
////////////////////////////////
import jQuery from "Lib/Poptart.jQuery";
import { nunjucksEnvironment } from "Lib/Poptart.Nunjucks";

import * as Poptart from "Poptart/poptart";

import "Poptart/css/main";


const init = function() {
	Poptart.init();

	Promise.resolve(jQuery.ajax({
		url: "/summary/account",
		accepts: "application/json"
	}))
		.then(showAccountSummary)
		.catch(function(e) {
			alert(e);
		});

	Promise.resolve(jQuery.ajax({
		url: "/summary/security",
		accepts: "application/json"
	}))
		.then(showSecuritySummary)
		.catch(function(e) {
			alert(e);
		});
};

function showAccountSummary(data) {
	jQuery("#accountCount").html(data.totalCount);
	jQuery("#accountUpdated").html(data.recentAccounts);
	jQuery("#alertsContent").append(nunjucksEnvironment.render("presentation/templates/components/alerts/shared/alerts.ninja", data));
}

function showSecuritySummary(data) {
	jQuery("#securityCount").html(data.totalCount);
}

export { init };

