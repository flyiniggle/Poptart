// Poptart.Dashboard
////////////////////////////////
import Vue from "vue";
import jQuery from "Lib/Poptart.jQuery";
import { nunjucksEnvironment } from "Lib/Poptart.Nunjucks";

import * as Poptart from "Poptart/poptart";
import Summary from "Poptart/modules/dashboard/views/Summary";
import { AccountsSummaryService, SecuritiesSummaryService } from "Poptart/common/services/Summary";

import "Poptart/css/main";


const init = function() {
	Poptart.init();

	Promise.all([AccountsSummaryService.get(), SecuritiesSummaryService.get()])
		.then(showSummary)
		.catch(alert);
};

function showSummary(summaries) {
	const [accountsSummary, securitiesSummary] = summaries;
console.log(summaries)
	new Vue({
		el: "#summaryContent",
		components: { Summary },
		render: function(h) {
			return (
				<Summary
					accountsCount={ accountsSummary.totalCount }
					recentlyUsed={ accountsSummary.recentAccounts }
					securitiesCount={ securitiesSummary.totalCount }
				/>
			);
		}
	})
	jQuery("#alertsContent").append(nunjucksEnvironment.render("presentation/templates/components/alerts/shared/alerts.ninja", accountsSummary));
}


export { init };

