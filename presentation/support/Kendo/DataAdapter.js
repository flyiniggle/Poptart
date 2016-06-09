module.exports = function() {

	var dataAdapter = {};

	dataAdapter.translateServerResponse = function(params, data) {
		return {
			total: data.total_accounts,
			data: data.accounts_data
		}
	};

	dataAdapter.translateServerRequest = function(params) {
		return {
			current_page: params.page,
			page_size: params.pageSize
		}
	};

	return dataAdapter;
}();