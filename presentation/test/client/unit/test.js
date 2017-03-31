var assert = chai.assert;

describe("Poptart", function() {
	describe("#basic", function() {
		it("should return a map", function() {
			assert.isObject(Poptart, "Poptart is not a map.");
		});
	});

	describe("#infragistics", function() {
		describe("#tableAdding", function() {
			var tableEle, addingWidget;

			before(function() {
				tableEle = jQuery("<table></table>");
				tableEle.appendTo(jQuery("body"));
			});

			beforeEach(function() {
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

			afterEach(function() {
				tableEle.igGrid("destroy");
			});

			describe("#model", function() {
				describe("#getRowById", function() {
					it("should return a row model", function() {
						var firstAddingRowId = jQuery(".ui-iggrid-adding-row:first").data("rowId"),
							rowModel;

						rowModel = addingWidget.model.getRowById(firstAddingRowId);

						assert.property(rowModel, "rowId", "Row model did not have a 'rowId' property.");
						assert.property(rowModel, "row", "Row model did not have a 'row' property.");
						assert.property(rowModel, "cells", "Row model did not have a 'cells' property.");
						assert.property(rowModel, "columnData", "Row model did not have a 'columnData' property.");
						rowModel.row.should.have.prop("tagName", "TR");
						assert.equal(firstAddingRowId, rowModel.rowId, "Expected row ID of " + firstAddingRowId + " but got " + rowModel.rowId + ".");
					});
				});

				describe("#getCell", function() {
					it("should return a cell", function() {
						var firstAddingRowId = jQuery(".ui-iggrid-adding-row:first").data("rowId"),
							column = "bool",
							cell;

						cell = addingWidget.model.getCell(firstAddingRowId, column);

						assert.property(cell, "key", "Cell model did not have a 'key' property.");
						assert.property(cell, "cell", "Cell model did not have a 'cell' property.");
						cell.cell.should.have.prop("tagName", "TD");
						assert.equal(column, cell.key, "Expected cell to have column key of " + column + " but found " + cell.key + ".");
					});
				});

				describe("#getColumnData", function() {
					it("should return column data", function() {
						var firstAddingRowId = jQuery(".ui-iggrid-adding-row:first").data("rowId"),
							column = "bool",
							cell;

						cell = addingWidget.model.getColumnData(firstAddingRowId, column);

						assert.property(cell, "key", "Cell model did not have a 'key' property.");
						assert.property(cell, "value", "Cell model did not have a 'value' property.");
						assert.isUndefined(cell.value, "Expected cell value to be undefined at start.");
						assert.equal(column, cell.key, "Expected cell to have column key of " + column + " but found " + cell.key + ".");
					});
				});

				describe("#addNewRow", function() {
					it("should add a new row model", function() {
						var newRowId = "newRow",
							rowModel, newAddingRow;

						newAddingRow = addingWidget._createAddingRowHtml(newRowId, addingWidget.grid._visibleColumns(false), false);
						addingWidget.model.addNewRow("newRow", newAddingRow);

						rowModel = addingWidget.model.model[1];

						assert.lengthOf(addingWidget.model.model, 2, "Expected 2 row models but got " + addingWidget.model.model.length + ".");
						assert.equal(newRowId, rowModel.rowId, "Expected second rowModel to have ID of " + newRowId + " but found " + rowModel.rowId + ".");
					});
				});

				describe("#removeRow", function() {
					it("should remove a row model", function() {
						var firstAddingRowId = jQuery(".ui-iggrid-adding-row:first").data("rowId");

						addingWidget.model.removeRow(firstAddingRowId);

						assert.lengthOf(addingWidget.model.model, 0, "Expected 0 row models but got " + addingWidget.model.model.length + ".");
					});
				});

				describe("#updateColumnData", function() {
					it("should update boolean column data", function() {
						var firstAddingRowId = jQuery(".ui-iggrid-adding-row:first").data("rowId"),
							column = "bool",
							cell;

						cell = addingWidget.model.updateColumnData(firstAddingRowId, column, true);

						assert.property(cell, "key", "Cell model did not have a 'key' property.");
						assert.property(cell, "value", "Cell model did not have a 'value' property.");
						assert.isTrue(cell.value, "Expected cell value to be true.");
						assert.equal(column, cell.key, "Expected cell to have column key of " + column + " but found " + cell.key + ".");

						cell = addingWidget.model.updateColumnData(firstAddingRowId, column, false);
						assert.isFalse(cell.value, "Expected cell value to be false.");
					});

					it("should update text column data", function() {
						var firstAddingRowId = jQuery(".ui-iggrid-adding-row:first").data("rowId"),
							column = "bool",
							cell;

						cell = addingWidget.model.updateColumnData(firstAddingRowId, column, "lala");

						assert.property(cell, "key", "Cell model did not have a 'key' property.");
						assert.property(cell, "value", "Cell model did not have a 'value' property.");
						assert.equal('lala', cell.value, "Expected cell value to be 'lala'.");
						assert.equal(column, cell.key, "Expected cell to have column key of " + column + " but found " + cell.key + ".");
					});

					it("should update numeric column data", function() {
						var firstAddingRowId = jQuery(".ui-iggrid-adding-row:first").data("rowId"),
							column = "bool",
							cell;

						cell = addingWidget.model.updateColumnData(firstAddingRowId, column, 2);

						assert.property(cell, "key", "Cell model did not have a 'key' property.");
						assert.property(cell, "value", "Cell model did not have a 'value' property.");
						assert.equal(2, cell.value, "Expected cell value to be 2.");
						assert.equal(column, cell.key, "Expected cell to have column key of " + column + " but found " + cell.key + ".");
					});
				});
			});

			describe("#Adding", function() {
				describe("#_getColumnSettings", function() {
					it("should return column settings for text", function() {
						var columnSettings;

						columnSettings = addingWidget._getColumnSettings("text");

						assert.propertyVal(columnSettings,
							"columnKey",
							"text",
							"Expected column settings columnKey to be 'text' but got " + columnSettings.columnKey + ".");

						assert.propertyVal(columnSettings,
							"readOnly",
							false,
							"The Read Only setting was not false.");

						assert.propertyVal(columnSettings,
							"editorType",
							"text",
							"Expected an editor type of 'text' but got " + columnSettings.editorType + ".");

						assert.propertyVal(columnSettings,
							"dataType",
							"string",
							"Expected a data type of 'string' but got " + columnSettings.dataType + ".");
					});

					it("should return column settings for number", function() {
						var columnSettings;

						columnSettings = addingWidget._getColumnSettings("number");

						assert.propertyVal(columnSettings,
							"columnKey",
							"number",
							"Expected column settings columnKey to be 'number' but got " + columnSettings.columnKey + ".");

						assert.propertyVal(columnSettings,
							"readOnly",
							false,
							"The Read Only setting was not false.");

						assert.propertyVal(columnSettings,
							"editorType",
							"numeric",
							"Expected an editor type of 'numeric' but got " + columnSettings.editorType + ".");

						assert.propertyVal(columnSettings,
							"dataType",
							"string",
							"Expected a data type of 'string' but got " + columnSettings.dataType + ".");
					});

					it("should return column settings for bool", function() {
						var columnSettings;

						columnSettings = addingWidget._getColumnSettings("bool");

						assert.propertyVal(columnSettings,
							"columnKey",
							"bool",
							"Expected column settings columnKey to be 'bool' but got " + columnSettings.columnKey + ".");
						assert.propertyVal(columnSettings, "readOnly", false, "The Read Only setting was not false.");
						assert.propertyVal(columnSettings, "editorType", "checkbox", "Expected an editor type of 'checkbox' but got " + columnSettings.editorType + ".");
						//assert.propertyVal(columnSettings, "dataType", "bool", "Expected a data type of 'bool' but got " + columnSettings.dataType + ".");
					});
				});

				describe("#_getRowForRendering", function() {
					it("should return keys for each column", function() {
						var firstAddingRowId = jQuery(".ui-iggrid-adding-row:first").data("rowId"),
							row = addingWidget._getRowForRendering(firstAddingRowId);

						assert.property(row, "text", "Renderable row did not have a key for the 'text' column.");
						assert.property(row, "number", "Renderable row did not have a key for the 'number' column.");
						assert.property(row, "bool", "Renderable row did not have a key for the 'bool' column.");
					});

					it("should return values for each column", function() {
						var firstAddingRowId = jQuery(".ui-iggrid-adding-row:first").data("rowId"),
							textVal = "test!",
							numberVal = 5,
							boolVal = true,
							row;

						addingWidget.model.updateColumnData(firstAddingRowId, "text", textVal);
						addingWidget.model.updateColumnData(firstAddingRowId, "number", numberVal);
						addingWidget.model.updateColumnData(firstAddingRowId, "bool", boolVal);

						row = addingWidget._getRowForRendering(firstAddingRowId);

						assert.propertyVal(row, "text", textVal, "Expected " + textVal + " for text column value but got " + row.text + ".");
						assert.propertyVal(row, "number", numberVal, "Expected " + numberVal + " for number column value but got " + row.number + ".");
						assert.propertyVal(row, "bool", boolVal, "Expected " + boolVal + " for bool column value but got " + row.bool + ".");
					});
				});
			});
		});
	});
});