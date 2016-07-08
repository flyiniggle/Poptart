module.exports = function() {
	"use strict";

	var dataAdapter = {};

	dataAdapter.translateServerRequest = function(params) {
		var queryObject = {};
		queryObject.current_page = params.current_page + 1;
		queryObject.page_size = params.page_size;

		if(params["$orderby"]){
			let orderByArr = params["$orderby"].split(" "),
				dir = (orderByArr[1] === "asc") ? "" : "-",
				field = orderByArr[0];
			queryObject.order_by = [dir + field];
		}

		return queryObject;
	};

	return dataAdapter;
}();