module.exports = function() {

	var dataAdapter = {};

	dataAdapter.translateServerResponse = function(params, data) {

		return {
			currentPage: params.pq_curpage,
			totalRecords: data.total_accounts,
			data: data.accounts_data
		};
	};

	dataAdapter.translateServerRequest = function(params) {
		return {
			current_page: params.pq_curpage,
			page_size: params.pq_rpp
		};
	};

	return dataAdapter;
}();