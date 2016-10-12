module.exports = function() {
	"use strict";

	var dataAdapter = {};

	dataAdapter.translateServerResponse = function(params, data) {
		var result = {
				total: data.total_accounts,
				data: data.accounts_data
			},
			groups = params.group;

		if(groups) {
			result.group = buildGroup(groups, 0, data.accounts_data);
		}

		return result;
	};

	dataAdapter.translateServerRequest = function(params) {
		var orderBy = [];

		if(params.group) {
			for(let group of params.group) {
				let dir = group.dir === "asc" ? "" : "-";

				orderBy.push(dir + group.field);
			}
		}
		return {
			current_page: params.page,
			page_size: params.pageSize,
			order_by: orderBy
		};
	};

	// Private Functions
	/////////////////////

	function buildGroup(groups, groupsIndex, results) {
		var group = groups[groupsIndex],
			areSubGroups = (groupsIndex < (groups.length - 1)),
			field = group.field,
			groupValues = [...new Set(results.map((result) => result[field]))],
			items = [];

		for(let groupValue of groupValues) {
			let resultSet = [],
				newGroup = {};

			for(let item of results) {
				if(item[field] === groupValue) {
					resultSet.push(item);
				}
			}

			newGroup.field = field;
			newGroup.value = groupValue;
			newGroup.aggregates = [];
			newGroup.hasSubgroups = areSubGroups;
			newGroup.items = areSubGroups ? buildGroup(groups, (groupsIndex + 1), resultSet) : resultSet;
			items.push(newGroup);
		}

		return items;
	}

	return dataAdapter;
}();