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
						{headerText: "number", key: "number", dataType: "number"},
						{headerText: "text", key: "text", dataType: "string"},
						{headerText: "bool", key: "bool", dataType: "bool"},
						{headerText: "template", key: "template", dataType: "string", template: "{{template}} template!"},
						{
							headerText: "formula",
							key: "formula",
							dataType: "number",
							unbound: true,
							formula: function(row) {
								return row ? row.formulaHelper : "";
							}
						},
						{
							headerText: "object",
							key: "object",
							dataType: "object",
							mapper: function(obj) {
								return obj ? obj.testKey : "";
							}
						},
						{headerText: "pk", key: "pk", dataType: "number"},
						{headerText: "formulaHelper", key: "formulaHelper", dataType: "string", hidden: true}
					],
					features: [
						{
							name: "Adding",
							columnSettings: [
								{columnKey: "number", editorType: "numeric", readOnly: false},
								{columnKey: "text", editorType: "text", readOnly: false},
								{columnKey: "bool", editorType: "checkbox", readOnly: false},
								{columnKey: "template", readOnly: true},
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
							"number",
							"Expected a data type of 'number' but got " + columnSettings.dataType + ".");
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
						assert.propertyVal(columnSettings, "dataType", "bool", "Expected a data type of 'bool' but got " + columnSettings.dataType + ".");
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

				describe("#_isLastScrollableCell", function() {
					it("should return true for the last column", function() {
						var firstAddingRowId = jQuery(".ui-iggrid-adding-row:first").data("rowId"),
							column = "pk",
							cell;

						cell = addingWidget.model.getCell(firstAddingRowId, column);
						assert.isTrue(addingWidget._isLastScrollableCell(cell.cell), "Should have returned true but returned false.");
					});

					it("should return true for other columns", function() {
						var firstAddingRowId = jQuery(".ui-iggrid-adding-row:first").data("rowId"),
							cell;

						cell = addingWidget.model.getCell(firstAddingRowId, "text");
						assert.isFalse(addingWidget._isLastScrollableCell(cell.cell), "Should have returned false but returned true.");

						cell = addingWidget.model.getCell(firstAddingRowId, "number");
						assert.isFalse(addingWidget._isLastScrollableCell(cell.cell), "Should have returned false but returned true.");

						cell = addingWidget.model.getCell(firstAddingRowId, "bool");
						assert.isFalse(addingWidget._isLastScrollableCell(cell.cell), "Should have returned false but returned true.");
					});
				});

				describe("#_updateUiCell", function() {
					it("should display a new text value.", function() {
						var firstAddingRowId = jQuery(".ui-iggrid-adding-row:first").data("rowId"),
							columnKey = "text",
							textVal = "test!",
							rowModel, cell, columnSettings;

						rowModel = addingWidget.model.getRowById(firstAddingRowId);
						cell = addingWidget.model.getCell(firstAddingRowId, columnKey).cell;
						columnSettings = addingWidget._getColumnSettings(columnKey);
						addingWidget._updateUiCell(cell, columnSettings, rowModel, textVal);

						cell.should.have.html(textVal);
					});

					it("should display a new number value.", function() {
						var firstAddingRowId = jQuery(".ui-iggrid-adding-row:first").data("rowId"),
							columnKey = "number",
							numVal = 5,
							rowModel, cell, columnSettings;

						rowModel = rowModel = addingWidget.model.getRowById(firstAddingRowId);
						cell = addingWidget.model.getCell(firstAddingRowId, columnKey).cell;
						columnSettings = addingWidget._getColumnSettings(columnKey);
						addingWidget._updateUiCell(cell, columnSettings, rowModel, numVal);

						cell.should.have.html(numVal.toString());
					});

					it("should display a new template value.", function() {
						var firstAddingRowId = jQuery(".ui-iggrid-adding-row:first").data("rowId"),
							columnKey = "template",
							rowModel, cell, columnSettings;

						addingWidget.model.updateColumnData(firstAddingRowId, columnKey, "A working");

						rowModel = addingWidget.model.getRowById(firstAddingRowId);
						cell = addingWidget.model.getCell(firstAddingRowId, columnKey).cell;
						columnSettings = addingWidget._getColumnSettings(columnKey);
						addingWidget._updateUiCell(cell, columnSettings, rowModel);

						cell.should.have.html("A working template!");
					});

					it("should display a new formula value.", function() {
						var firstAddingRowId = jQuery(".ui-iggrid-adding-row:first").data("rowId"),
							columnKey = "formula",
							helperValue = "test!",
							rowModel, cell, columnSettings;

						addingWidget.model.updateColumnData(firstAddingRowId, "formulaHelper", helperValue);

						rowModel = rowModel = addingWidget.model.getRowById(firstAddingRowId);
						cell = addingWidget.model.getCell(firstAddingRowId, columnKey).cell;
						columnSettings = addingWidget._getColumnSettings(columnKey);
						addingWidget._updateUiCell(cell, columnSettings, rowModel, helperValue);

						cell.should.have.html(helperValue);
					});

					it("should display a new mapped value.", function() {
						var firstAddingRowId = jQuery(".ui-iggrid-adding-row:first").data("rowId"),
							columnKey = "object",
							objValue = {testKey: "test!"},
							rowModel, cell, columnSettings;

						rowModel = addingWidget.model.getRowById(firstAddingRowId);
						cell = addingWidget.model.getCell(firstAddingRowId, columnKey).cell;
						columnSettings = addingWidget._getColumnSettings(columnKey);

						addingWidget._updateUiCell(cell, columnSettings, rowModel, objValue);

						cell.should.have.html("test!");
					});
				});

				describe("#_updateUiRow", function() {
					it("updated calculated columns when a row is edited.", function() {
						var firstAddingRowId = jQuery(".ui-iggrid-adding-row:first").data("rowId"),
							rowModel = addingWidget.model.getRowById(firstAddingRowId),
							formulaHelperValue = "Formula test!",
							objValue = {testKey: "Object test!"},
							formulaCell, objCell;

						addingWidget.model.updateColumnData(firstAddingRowId, "formulaHelper", formulaHelperValue);
						addingWidget.model.updateColumnData(firstAddingRowId, "object", objValue);

						addingWidget._updateUiRow(rowModel);

						formulaCell = addingWidget.model.getCell(firstAddingRowId, "formula").cell;
						objCell = addingWidget.model.getCell(firstAddingRowId, "object").cell;

						objCell.should.have.html(objValue.testKey);
						formulaCell.should.have.html(formulaHelperValue);
					});
				});

				describe("#_removeAddingRow", function() {
					it("should remove the only adding row.", function() {
						var firstAddingRowId = jQuery(".ui-iggrid-adding-row:first").data("rowId"),
							rowModel = addingWidget.model.getRowById(firstAddingRowId);

						addingWidget._removeAddingRow(rowModel);

						assert.equal(jQuery(".ui-iggrid-adding-row").length, 0, "Expected not to find any adding rows");
					});
				});

				describe("#_addAddingRow", function() {
					it("should add a new adding row.", function() {
						var addingRowSelector = ".ui-iggrid-adding-row";

						addingWidget._addAddingRow();
						assert.equal(jQuery(addingRowSelector).length, 2, "Expected an adding row to be added.");
						assert.equal(addingWidget.model.model.length, 2, "Expected an adding row model to be added.");

						addingWidget._addAddingRow();
						assert.equal(jQuery(addingRowSelector).length, 3, "Expected another adding row to be added.");
						assert.equal(addingWidget.model.model.length, 3, "Expected another adding row model to be added.");
					});
				});

				describe("#_createAddingRowHtml", function() {
					it("should return a row with a cell for each visible column.", function() {
						var columns = [{key: "test1"}, {key: "test2"}, {key: "test3"}, {key: "test4"}],
							rowId = "addingRowTest",
							html, cell;

						html = addingWidget._createAddingRowHtml(rowId, columns, false);
						html.should.have.data("rowId", rowId);
						assert.equal(html.find("td").length, 4, "Did not find the expected number of cells.");

						cell = html.children(":first-child");
						cell.should.have.data("columnKey", columns[0].key);
						cell.should.have.attr("id", rowId + "_" + columns[0].key);
						cell.should.have.class("ui-iggrid-adding-row-cell");

						cell = cell.next();
						cell.should.have.data("columnKey", columns[1].key);
						cell.should.have.attr("id", rowId + "_" + columns[1].key);
						cell.should.have.class("ui-iggrid-adding-row-cell");

						cell = cell.next();
						cell.should.have.data("columnKey", columns[2].key);
						cell.should.have.attr("id", rowId + "_" + columns[2].key);
						cell.should.have.class("ui-iggrid-adding-row-cell");

						cell = cell.next();
						cell.should.have.data("columnKey", columns[3].key);
						cell.should.have.attr("id", rowId + "_" + columns[3].key);
						cell.should.have.class("ui-iggrid-adding-row-cell");
					});
				});

				describe("#_getProviderForKey", function() {
					it("should return a text editor provider.", function() {
						var provider = addingWidget._getProviderForKey({}, {editorType: "text"});

						assert.equal(provider.editorType, "text", "The property editorType did not match expected.");
						assert.equal(Object.getPrototypeOf(provider.provider), jQuery.ig.EditorProviderText.prototype, "The provider was not the expected type.");
					});

					it("should return a checkbox provider.", function() {
						var provider = addingWidget._getProviderForKey({}, {editorType: "checkbox"});

						assert.equal(provider.editorType, "checkbox", "The property editorType did not match expected.");
						assert.equal(Object.getPrototypeOf(provider.provider), jQuery.ig.EditorProviderBoolean.prototype, "The provider was not the expected type.");
					});

					it("should return a checkbox provider.", function() {
						var provider = addingWidget._getProviderForKey({}, {dataType: "bool"});

						assert.equal(provider.editorType, "checkbox", "The property editorType did not match expected.");
						assert.equal(Object.getPrototypeOf(provider.provider), jQuery.ig.EditorProviderBoolean.prototype, "The provider was not the expected type.");
					});

					it("should return a currency provider.", function() {
						var provider = addingWidget._getProviderForKey({format: "currency"}, {});

						assert.equal(provider.editorType, "currency", "The property editorType did not match expected.");
						assert.equal(Object.getPrototypeOf(provider.provider), jQuery.ig.EditorProviderCurrency.prototype, "The provider was not the expected type.");
					});

					it("should return a currency provider.", function() {
						var provider = addingWidget._getProviderForKey({}, {editorType: "currency"});

						assert.equal(provider.editorType, "currency", "The property editorType did not match expected.");
						assert.equal(Object.getPrototypeOf(provider.provider), jQuery.ig.EditorProviderCurrency.prototype, "The provider was not the expected type.");
					});

					it("should return a object combo provider.", function() {
						var provider = addingWidget._getProviderForKey({}, {dataType: "object", editorType: "combo"});

						assert.equal(provider.editorType, "combo", "The property editorType did not match expected.");
						assert.equal(Object.getPrototypeOf(provider.provider), jQuery.ig.EditorProviderObjectCombo.prototype, "The provider was not the expected type.");
					});

					it("should return a combo provider.", function() {
						var provider = addingWidget._getProviderForKey({}, {dataType: "string", editorType: "combo"});

						assert.equal(provider.editorType, "combo", "The property editorType did not match expected.");
						assert.equal(Object.getPrototypeOf(provider.provider), jQuery.ig.EditorProviderCombo.prototype, "The provider was not the expected type.");
					});

					it("should return a rating provider.", function() {
						var provider = addingWidget._getProviderForKey({}, {editorType: "rating"});

						assert.equal(provider.editorType, "rating", "The property editorType did not match expected.");
						assert.equal(Object.getPrototypeOf(provider.provider), jQuery.ig.EditorProviderRating.prototype, "The provider was not the expected type.");
					});

					it("should return a mask provider.", function() {
						var provider = addingWidget._getProviderForKey({}, {editorType: "mask"});

						assert.equal(provider.editorType, "mask", "The property editorType did not match expected.");
						assert.equal(Object.getPrototypeOf(provider.provider), jQuery.ig.EditorProviderMask.prototype, "The provider was not the expected type.");
					});

					it("should return a percent provider.", function() {
						var provider = addingWidget._getProviderForKey({}, {editorType: "percent"});

						assert.equal(provider.editorType, "percent", "The property editorType did not match expected.");
						assert.equal(Object.getPrototypeOf(provider.provider), jQuery.ig.EditorProviderPercent.prototype, "The provider was not the expected type.");
					});

					it("should return a date provider.", function() {
						var provider = addingWidget._getProviderForKey({}, {editorType: "date"});

						assert.equal(provider.editorType, "date", "The property editorType did not match expected.");
						assert.equal(Object.getPrototypeOf(provider.provider), jQuery.ig.EditorProviderDate.prototype, "The provider was not the expected type.");
					});

					it("should return a date picker provider.", function() {
						var provider = addingWidget._getProviderForKey({}, {editorType: "datePicker"});

						assert.equal(provider.editorType, "datePicker", "The property editorType did not match expected.");
						assert.equal(Object.getPrototypeOf(provider.provider), jQuery.ig.EditorProviderDatePicker.prototype, "The provider was not the expected type.");
					});

					it("should throw an error.", function() {
						assert.throws(function() {
							addingWidget._getProviderForKey({}, {});
						},
						TypeError,
						"Please provide an editor type."
						);
					});
				});

				describe("#_getEditorForCell", function() {
					it("should return information for the text column.", function() {
						var firstAddingRowId = jQuery(".ui-iggrid-adding-row:first").data("rowId"),
							rowModel = addingWidget.model.getRowById(firstAddingRowId),
							cell = addingWidget.model.getCell(firstAddingRowId, "text"),
							editorInfo = addingWidget._getEditorForCell("text", cell, rowModel);

						assert.equal(Object.getPrototypeOf(editorInfo.provider), jQuery.ig.EditorProviderText.prototype, "Editor did not have the correct provider.");
						editorInfo.providerWrapper.should.have.class(addingWidget.css.editor);
						assert.equal(editorInfo.cell, cell, "Cells did not match.");
						assert.equal(editorInfo.rowModel, rowModel, "Row models did not match.");
					});
				});

				describe("#_startEditCell", function() {
					it("should create an editor for the text column in the first row.", function() {
						var firstAddingRowId = jQuery(".ui-iggrid-adding-row:first").data("rowId"),
							column = "text",
							cell = addingWidget.model.getCell(firstAddingRowId, column);

						addingWidget._startEditCell(firstAddingRowId, column);

						assert.equal(addingWidget.activeEditor.cell, cell, "Active editor was not in the correct cell.");
						cell.cell.should.have.descendants(addingWidget.activeEditor.providerWrapper);
					});
				});

				describe("#_startEditRow", function() {
					it("should create an editor for the text column in the first row.", function() {
						var firstAddingRowId = jQuery(".ui-iggrid-adding-row:first").data("rowId"),
							column = "number",
							cell = addingWidget.model.getCell(firstAddingRowId, column);

						addingWidget._startEditRow(firstAddingRowId);

						assert.equal(addingWidget.activeEditor.cell, cell, "Active editor was not in the first editable cell.");
						cell.cell.should.have.descendants(addingWidget.activeEditor.providerWrapper);
					});
				});

				describe("#_navigateDown", function() {
					it("should open an editor in the same column of the next row.", function() {
						var firstAddingRowId = jQuery(".ui-iggrid-adding-row:first").data("rowId"),
							column = "number",
							nextRowModel, nextCell;

						sinon.spy(addingWidget, "_saveEdit");
						sinon.spy(addingWidget, "_startEditCell");

						addingWidget.addAddingRow();
						addingWidget._startEditCell(firstAddingRowId, column);
						addingWidget._navigateDown();

						nextRowModel = addingWidget.model.model[1];
						nextCell = addingWidget.model.getCell(nextRowModel.rowId, column);

						assert.equal(addingWidget.activeEditor.cell, nextCell, "Active editor was not in the correct cell.");
						assert.equal(addingWidget.activeEditor.rowModel, nextRowModel, "Active editor was not in the correct row.");

						assert.isTrue(addingWidget._saveEdit.calledOnce, "_saveEdit was not called.");
						assert.isTrue(addingWidget._startEditCell.calledTwice, "_startEditCell was not called.");
					});

					it("should add a new row when on the last adding row.", function() {
						var firstAddingRowId = jQuery(".ui-iggrid-adding-row:first").data("rowId"),
							addingRowsSelector = ".ui-iggrid-adding-row",
							column = "number",
							nextRowModel, nextCell;

						sinon.spy(addingWidget, "_addAddingRow");
						addingWidget._startEditCell(firstAddingRowId, column);
						addingWidget._navigateDown();

						assert.isTrue(addingWidget._addAddingRow.calledOnce, "_addAddingRow was not called.");
						assert.equal(addingWidget.model.model.length, 2, "Row model did not contain a new row.");
						assert.equal(jQuery(addingRowsSelector).length, 2, "Table header did not contain a new row.");

						nextRowModel = addingWidget.model.model[1];
						nextCell = addingWidget.model.getCell(nextRowModel.rowId, column);

						assert.equal(addingWidget.activeEditor.cell, nextCell, "Active editor was not in the correct cell.");
						assert.equal(addingWidget.activeEditor.rowModel, nextRowModel, "Active editor was not in the correct row.");

						addingWidget._navigateDown();

						assert.isTrue(addingWidget._addAddingRow.calledTwice, "_addAddingRow was not called.");
						assert.equal(addingWidget.model.model.length, 3, "Row model did not contain a new row.");
						assert.equal(jQuery(addingRowsSelector).length, 3, "Table header did not contain a new row.");

						nextRowModel = addingWidget.model.model[2];
						nextCell = addingWidget.model.getCell(nextRowModel.rowId, column);

						assert.equal(addingWidget.activeEditor.cell, nextCell, "Active editor was not in the correct cell.");
						assert.equal(addingWidget.activeEditor.rowModel, nextRowModel, "Active editor was not in the correct row.");
					});
				});

				describe("#_navigateLeft", function() {
					it("should open an editor in the previous column of the same row.", function() {
						var firstAddingRowId = jQuery(".ui-iggrid-adding-row:first").data("rowId"),
							column = "text",
							previousCell;

						sinon.spy(addingWidget, "_saveEdit");
						sinon.spy(addingWidget, "_startEditCell");

						addingWidget._startEditCell(firstAddingRowId, column);
						addingWidget._navigateLeft();

						previousCell = addingWidget.model.getCell(firstAddingRowId, "number");

						assert.equal(addingWidget.activeEditor.cell, previousCell, "Active editor was not in the correct cell.");
						assert.equal(addingWidget.activeEditor.rowModel.rowId, firstAddingRowId, "Active editor was not in the correct row.");

						assert.isTrue(addingWidget._saveEdit.calledOnce, "_saveEdit was not called.");
						assert.isTrue(addingWidget._startEditCell.calledTwice, "_startEditCell was not called.");
					});

					it("should open an editor in the last editable column of the previous row.", function() {
						var firstAddingRowId = jQuery(".ui-iggrid-adding-row:first").data("rowId"),
							startingColumn = "number",
							endingColumn = "bool",
							endingCell;

						sinon.spy(addingWidget, "_saveEdit");
						sinon.spy(addingWidget, "_startEditCell");

						addingWidget.addAddingRow();
						addingWidget._startEditCell(addingWidget.model.model[1].rowId, startingColumn);
						addingWidget._navigateLeft();

						endingCell = addingWidget.model.getCell(firstAddingRowId, endingColumn);

						assert.equal(addingWidget.activeEditor.cell, endingCell, "Active editor was not in the correct cell.");
						assert.equal(addingWidget.activeEditor.rowModel.rowId, firstAddingRowId, "Active editor was not in the correct row.");

						assert.isTrue(addingWidget._saveEdit.calledOnce, "_saveEdit was not called.");
						assert.isTrue(addingWidget._startEditCell.calledTwice, "_startEditCell was not called.");
					});

					it("should close the active editor if on the first editable cell of the first row.", function() {
						var firstAddingRowId = jQuery(".ui-iggrid-adding-row:first").data("rowId"),
							startingColumn = "number";

						sinon.spy(addingWidget, "_saveEdit");
						sinon.spy(addingWidget, "_startEditCell");

						addingWidget._startEditCell(firstAddingRowId, startingColumn);
						addingWidget._navigateLeft();

						assert.isUndefined(addingWidget.activeEditor, "There should be no active editor.");

						assert.isTrue(addingWidget._saveEdit.calledOnce, "_saveEdit was not called.");
						assert.isTrue(addingWidget._startEditCell.calledOnce, "_startEditCell was not called only once.");
					});
				});

				describe("#_navigateRight", function() {
					it("should open an editor in the next column of the same row.", function() {
						var firstAddingRowId = jQuery(".ui-iggrid-adding-row:first").data("rowId"),
							startingColumn = "number",
							nextColumn = "text",
							nextCell;

						sinon.spy(addingWidget, "_saveEdit");
						sinon.spy(addingWidget, "_startEditCell");

						addingWidget._startEditCell(firstAddingRowId, startingColumn);
						addingWidget._navigateRight();

						nextCell = addingWidget.model.getCell(firstAddingRowId, nextColumn);

						assert.equal(addingWidget.activeEditor.cell, nextCell, "Active editor was not in the correct cell.");
						assert.equal(addingWidget.activeEditor.rowModel.rowId, firstAddingRowId, "Active editor was not in the correct row.");

						assert.isTrue(addingWidget._saveEdit.calledOnce, "_saveEdit was not called.");
						assert.isTrue(addingWidget._startEditCell.calledTwice, "_startEditCell was not called.");
					});

					it("should open an editor in the first editable column of the next row.", function() {
						var firstAddingRowId = jQuery(".ui-iggrid-adding-row:first").data("rowId"),
							startingColumn = "bool",
							nextColumn = "number",
							nextCell;

						sinon.spy(addingWidget, "_saveEdit");
						sinon.spy(addingWidget, "_startEditCell");

						addingWidget.addAddingRow();
						addingWidget._startEditCell(firstAddingRowId, startingColumn);
						addingWidget._navigateRight();

						nextCell = addingWidget.model.getCell(addingWidget.model.model[1].rowId, nextColumn);

						assert.equal(addingWidget.activeEditor.cell, nextCell, "Active editor was not in the correct cell.");
						assert.equal(addingWidget.activeEditor.rowModel.rowId, addingWidget.model.model[1].rowId, "Active editor was not in the correct row.");

						assert.isTrue(addingWidget._saveEdit.calledOnce, "_saveEdit was not called.");
						assert.isTrue(addingWidget._startEditCell.calledTwice, "_startEditCell was not called.");
					});

					it("should add a new row and open an editor in the first editable column of the next row.", function() {
						var firstAddingRowId = jQuery(".ui-iggrid-adding-row:first").data("rowId"),
							startingColumn = "bool",
							nextColumn = "number",
							nextCell;

						sinon.spy(addingWidget, "_saveEdit");
						sinon.spy(addingWidget, "_startEditCell");
;
						addingWidget._startEditCell(firstAddingRowId, startingColumn);
						addingWidget._navigateRight();

						nextCell = addingWidget.model.getCell(addingWidget.model.model[1].rowId, nextColumn);

						assert.equal(addingWidget.model.model.length, 2, "Row model did not contain a new row.");
						assert.equal(jQuery(".ui-iggrid-adding-row").length, 2, "Table header did not contain a new row.");

						assert.equal(addingWidget.activeEditor.cell, nextCell, "Active editor was not in the correct cell.");
						assert.equal(addingWidget.activeEditor.rowModel.rowId, addingWidget.model.model[1].rowId, "Active editor was not in the correct row.");

						assert.isTrue(addingWidget._saveEdit.calledOnce, "_saveEdit was not called.");
						assert.isTrue(addingWidget._startEditCell.calledTwice, "_startEditCell was not called.");
					});
				});
			});
		});
	});
});