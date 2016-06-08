Poptart.TableController = function(table){
	var self = this,
		model;

	var TableControllerModel = function() {
		var self = this;

		// Static
		self.currentPageIndex = ko.observable(table.pqGrid("option", "pageModel.curPage"));
		self.pageSizeOptions = ko.observableArray(table.pqGrid("option", "pageModel.rPPOptions"));
		self.pageSize = ko.observable(table.pqGrid("option", "pageModel.rPP"));

		// Computed
		self.currentPage = ko.computed({
			read: function() {
				return parseInt(table.pqGrid("option", "pageModel.curPage"));
			},
			write: function(value) {
					self.currentPageIndex((value));
					table.pqGrid("refreshDataAndView");
				}
			}
		);
	};

	model = new TableControllerModel();

	jQuery("#tableControlsPageSizeSelect").dataBind({optionsText: "pageSizeOptions()", value: "pageSize", options: "pageSizeOptions"});
	jQuery("#tableControlsCurrentPage").dataBind({value: "currentPage"});

	ko.applyBindings(model, document.getElementById("tableControlsHeader"));

	model.pageSize.subscribe(function(value) {
		table.pqGrid("option", "pageModel.rPP", parseInt(value));
		table.pqGrid("refreshDataAndView");
	});

	model.currentPageIndex.subscribe(function(value) {
		table.pqGrid("goToPage", {page: value});
	});

};