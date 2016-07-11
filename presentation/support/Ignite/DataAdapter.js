module.exports = function() {
	"use strict";

	var dataAdapter = {};

	dataAdapter.translateServerRequest = function(params) {
		var queryObject = {},
			orderBy = params["$orderby"];

		queryObject.current_page = parseInt(params.current_page) + 1;
		queryObject.page_size = params.page_size;

		if(!!orderBy){
			orderBy = orderBy.split(",");
			queryObject.order_by = orderBy.map(function(val) {
				let orderByArr = val.split(" "),
					dir = (orderByArr[1] === "asc") ? "" : "-",
					field = orderByArr[0];

				return dir + field;
			})
		}

		return queryObject;
	};

	return dataAdapter;
}();