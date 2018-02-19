// Poptart.Dashboard
////////////////////////////////
import Vue from "vue";
import jQuery from "Lib/Poptart.jQuery";
import { nunjucksEnvironment } from "Lib/Poptart.Nunjucks";

import AlertsList from "Poptart/common/views/AlertsList";
import Summary from "Poptart/modules/dashboard/views/Summary";
import TopMenu from "Poptart/common/views/TopMenu/TopMenu";
import { AccountsSummaryService, SecuritiesSummaryService } from "Poptart/common/services/Summary";

import "Poptart/css/main";

function showSummary(summaries) {
	const [accountsSummary, securitiesSummary] = summaries;

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
	});

	new Vue({
		el: "#alertsContent",
		components: { AlertsList },
		render: function(h) {
			return <AlertsList alerts={ accountsSummary.alerts }/>
		}
	});
}

//Main
(function() {
	new Vue({
		el: "#controlsContainer",
		components: { TopMenu },
		render: function(h) {
			return (
				<TopMenu>
					<div slot="navigatorControls">
						<a href="/monitors/account">Account Monitor</a>
						<a href="/monitors/security">Security Monitor</a>
					</div>
				</TopMenu>
			)
		}
	});

	Promise.all([AccountsSummaryService.get(), SecuritiesSummaryService.get()])
		.then(showSummary)
		.catch(alert);
})();

export { init };