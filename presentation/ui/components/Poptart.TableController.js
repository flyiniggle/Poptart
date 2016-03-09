Poptart.TableController = function(table){
	var self = this,
		model;

	var TableControllerModel = function() {
		var self = this;

		// Static
		self.currentPageIndex = ko.observable(0);
		self.pageSizeOptions = ko.observableArray(["10", "25", "50", "100", "500", "1000"]);
		self.pageSize = ko.observable("10");

		// Computed
		self.currentPage = ko.computed({
			read: function() {
				return self.currentPageIndex() + 1;
			},
			write: function(value) {
					self.currentPageIndex((value - 1));
				}
			}
		);
	};

	model = new TableControllerModel();

	$("#tableControlsPageSizeSelect").dataBind({optionsText: "pageSizeOptions()", value: "pageSize", options: "pageSizeOptions"});
	$("#tableControlsCurrentPage").dataBind({value: "currentPage"});

	ko.applyBindings(model, document.getElementById("tableControlsHeader"));

	model.pageSize.subscribe(function(value) {
		table.igGridPaging("pageSize", value);
	});

	model.currentPageIndex.subscribe(function(value) {
		table.igGridPaging("pageIndex", value);
	});

};