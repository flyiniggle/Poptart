var assert = chai.assert;

describe("Poptart", function() {
	describe("#basic", function() {
		it("should return a map", function() {
			assert.isObject(Poptart, "Poptart is not a map.");
		});
	});

	describe("#infragistics", function() {
		describe("#tableAdding", function() {
			var tableEle = jQuery("<table></table>"), addingWidget;

			before(function() {
				tableEle.appendTo(jQuery("body"));

				tableEle.igGrid({
					dataSource: [],
					dataSourceType: "json",
					primaryKey: "pk",
					columns: [
						{headerText: "number", key: "number", datatype: "number"},
						{headerText: "text", key: "text", datatype: "text"},
						{headerText: "bool", key: "bool", datatype: "bool"},
						{headerText: "pk", key: "pk", datatype: "number"}
					],
					features: [
						{
							name: "Adding",
							columnSettings: [
								{columnKey: "number", editorType: "numeric", readOnly: false},
								{columnKey: "text", editorType: "text", readOnly: false},
								{columnKey: "bool", editorType: "checkbox", readOnly: false},
								{columnKey: "pk", readOnly: true}
							]
						},
						{
							name: "Updating",
							enableAddRow: "false",
							editMode: "cell",
							columnSettings: [
								{columnKey: "number", readOnly: false},
								{columnKey: "text", readOnly: false},
								{columnKey: "bool", readOnly: false},
								{columnKey: "pk", readOnly: true}
							]
						}
					]
				});

				addingWidget = tableEle.data("Poptart-igGridAdding");
			});

			it("should return a row model", function() {
				var firstAddingRowId = jQuery(".ui-iggrid-adding-row:first").data("rowId"),
					rowModel;

				rowModel = addingWidget.model.getRowById(firstAddingRowId);

				assert.property(rowModel, "rowId", "Row model did not have a 'rowId' property.");
				assert.property(rowModel, "row", "Row model did not have a 'row' property.");
				assert.property(rowModel, "cells", "Row model did not have a 'cells' property.");
				assert.property(rowModel, "columnData", "Row model did not have a 'columnData' property.");
				assert.equal(firstAddingRowId, rowModel.rowId, "Expected row ID of " + firstAddingRowId + " but got " + rowModel.rowId + ".");
			});

			it("should add a new row model", function() {
				var newRowId = "newRow",
					rowModel, newAddingRow;

				newAddingRow = addingWidget._createAddingRowHtml(newRowId, addingWidget.grid._visibleColumns(false), false);
				addingWidget.model.addNewRow("newRow", newAddingRow);

				rowModel = addingWidget.model.model[1];

				assert.lengthOf(addingWidget.model.model, 2, "Expected 2 row models but got " + addingWidget.model.length + ".");
				assert.equal(newRowId, rowModel.rowId, "Expected second rowModel to have ID of " + newRowId + " but found " + rowModel.rowId + ".");
			});

		});
	});
});