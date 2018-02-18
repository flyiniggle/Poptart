const AccountsSummaryService = {
	get: function() {
		return Promise.resolve(jQuery.ajax({
			url: "/summary/account",
			accepts: "application/json"
		}));
	}
};

const SecuritiesSummaryService = {
	get: function() {
		return Promise.resolve(jQuery.ajax({
			url: "/summary/security",
			accepts: "application/json"
		}))
	}
}

export {
	AccountsSummaryService,
	SecuritiesSummaryService
}