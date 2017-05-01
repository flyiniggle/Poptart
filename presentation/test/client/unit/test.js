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
								{columnKey: "object", editorType: "combo", readOnly: false},
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
				describe("#getColumn", function() {
					it("should return a column model", function() {
						var columnKey = "bool",
							columnModel;

						columnModel = addingWidget.model.getColumn(columnKey);

						assert.property(columnModel, "key", "Cell model did not have a 'key' property.");
						assert.property(columnModel, "value", "Cell model did not have a 'value' property.");
						assert.property(columnModel, "settings", "Cell model did not have a 'settings' property.");
						assert.isFalse(columnModel.value, "Expected columnModel value to be false at start.");
						assert.equal(columnKey, columnModel.key, "Expected columnModel to have key of " + columnKey + " but found " + columnModel.key + ".");
					});
				});

				describe("#setColumnValue", function() {
					it("should update boolean column data", function() {
						var column = "bool",
							cell;

						cell = addingWidget.model.setColumnValue(column, true);

						assert.property(cell, "key", "Cell model did not have a 'key' property.");
						assert.property(cell, "value", "Cell model did not have a 'value' property.");
						assert.isTrue(cell.value, "Expected cell value to be true.");
						assert.equal(column, cell.key, "Expected cell to have key of " + column + " but found " + cell.key + ".");

						cell = addingWidget.model.setColumnValue(column, false);
						assert.isFalse(cell.value, "Expected cell value to be false.");
					});

					it("should update text column data", function() {
						var column = "bool",
							cell;

						cell = addingWidget.model.setColumnValue(column, "lala");

						assert.property(cell, "key", "Cell model did not have a 'key' property.");
						assert.property(cell, "value", "Cell model did not have a 'value' property.");
						assert.equal('lala', cell.value, "Expected cell value to be 'lala'.");
						assert.equal(column, cell.key, "Expected cell to have key of " + column + " but found " + cell.key + ".");
					});

					it("should update numeric column data", function() {
						var column = "bool",
							cell;

						cell = addingWidget.model.setColumnValue(column, 2);

						assert.property(cell, "key", "Cell model did not have a 'key' property.");
						assert.property(cell, "value", "Cell model did not have a 'value' property.");
						assert.equal(2, cell.value, "Expected cell value to be 2.");
						assert.equal(column, cell.key, "Expected cell to have key of " + column + " but found " + cell.key + ".");
					});
				});
			});

			describe("#Adding", function() {
				it("should create a text editor for the text column.", function() {
					var column = "text",
						columModel = addingWidget.model.getColumn(column);

					addingWidget._startEdit(columModel);
					assert.equal(addingWidget.activeEditor.cell.cell, columModel.cell, "Active editor was not in the correct cell.");
					columModel.cell.should.have.descendants(addingWidget.activeEditor.providerWrapper);
				});

				it("should create a numeric editor for the number column.", function() {
					var column = "number",
						columModel = addingWidget.model.getColumn(column);

					addingWidget._startEdit(columModel);
					assert.equal(addingWidget.activeEditor.cell.cell, columModel.cell, "Active editor was not in the correct cell.");
					columModel.cell.should.have.descendants(addingWidget.activeEditor.providerWrapper);
				});

				it("should create a checkbox editor for the boolean column.", function() {
					var column = "bool",
						columModel = addingWidget.model.getColumn(column);

					addingWidget._startEdit(columModel);
					assert.equal(addingWidget.activeEditor.cell.cell, columModel.cell, "Active editor was not in the correct cell.");
					columModel.cell.should.have.descendants(addingWidget.activeEditor.providerWrapper);
				});

				it("should create a combo editor for the object column.", function() {
					var column = "object",
						columModel = addingWidget.model.getColumn(column);

					addingWidget._startEdit(columModel);
					assert.equal(addingWidget.activeEditor.cell.cell, columModel.cell, "Active editor was not in the correct cell.");
					columModel.cell.should.have.descendants(addingWidget.activeEditor.providerWrapper);
				});


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
						var row = addingWidget._getRowForRendering();

						assert.property(row, "text", "Renderable row did not have a key for the 'text' column.");
						assert.property(row, "number", "Renderable row did not have a key for the 'number' column.");
						assert.property(row, "bool", "Renderable row did not have a key for the 'bool' column.");
					});

					it("should return values for each column", function() {
						var textVal = "test!",
							numberVal = 5,
							boolVal = true,
							row;

						addingWidget.model.setColumnValue("text", textVal);
						addingWidget.model.setColumnValue("number", numberVal);
						addingWidget.model.setColumnValue("bool", boolVal);

						row = addingWidget._getRowForRendering();

						assert.propertyVal(row, "text", textVal, "Expected " + textVal + " for text column value but got " + row.text + ".");
						assert.propertyVal(row, "number", numberVal, "Expected " + numberVal + " for number column value but got " + row.number + ".");
						assert.propertyVal(row, "bool", boolVal, "Expected " + boolVal + " for bool column value but got " + row.bool + ".");
					});
				});

				describe("#_isLastScrollableCell", function() {
					it("should return true for the last column", function() {
						var column = "pk",
							cell;

						cell = addingWidget.model.getCell(column);
						assert.isTrue(addingWidget._isLastScrollableCell(cell.cell), "Should have returned true but returned false.");
					});

					it("should return true for other columns", function() {
						var cell;

						cell = addingWidget.model.getCell("text");
						assert.isFalse(addingWidget._isLastScrollableCell(cell.cell), "Should have returned false but returned true.");

						cell = addingWidget.model.getCell("number");
						assert.isFalse(addingWidget._isLastScrollableCell(cell.cell), "Should have returned false but returned true.");

						cell = addingWidget.model.getCell("bool");
						assert.isFalse(addingWidget._isLastScrollableCell(cell.cell), "Should have returned false but returned true.");
					});
				});

				describe("#_updateUiCell", function() {
					it("should display a new text value.", function() {
						var columnKey = "text",
							textVal = "test!",
							cell, columnSettings;

						cell = addingWidget.model.getCell(columnKey).cell;
						columnSettings = addingWidget._getColumnSettings(columnKey);
						addingWidget._updateUiCell(cell, columnSettings, textVal);

						cell.should.have.html(textVal);
					});

					it("should display a new number value.", function() {
						var columnKey = "number",
							numVal = 5,
							cell, columnSettings;

						cell = addingWidget.model.getCell(columnKey).cell;
						columnSettings = addingWidget._getColumnSettings(columnKey);
						addingWidget._updateUiCell(cell, columnSettings, numVal);

						cell.should.have.html(numVal.toString());
					});

					it("should display a new template value.", function() {
						var columnKey = "template",
							cell, columnSettings;

						addingWidget.model.setColumnValue(columnKey, "A working");

						cell = addingWidget.model.getCell(columnKey).cell;
						columnSettings = addingWidget._getColumnSettings(columnKey);
						addingWidget._updateUiCell(cell, columnSettings);

						cell.should.have.html("A working template!");
					});

					it("should display a new formula value.", function() {
						var columnKey = "formula",
							helperValue = "test!",
							cell, columnSettings;

						addingWidget.model.setColumnValue("formulaHelper", helperValue);

						cell = addingWidget.model.getCell(columnKey).cell;
						columnSettings = addingWidget._getColumnSettings(columnKey);
						addingWidget._updateUiCell(cell, columnSettings, helperValue);

						cell.should.have.html(helperValue);
					});

					it("should display a new mapped value.", function() {
						var columnKey = "object",
							objValue = {testKey: "test!"},
							cell, columnSettings;

						cell = addingWidget.model.getCell(columnKey).cell;
						columnSettings = addingWidget._getColumnSettings(columnKey);

						addingWidget._updateUiCell(cell, columnSettings, objValue);

						cell.should.have.html("test!");
					});
				});

				describe("#_updateUiRow", function() {
					it("updated calculated columns when a row is edited.", function() {
						var formulaHelperValue = "Formula test!",
							objValue = {testKey: "Object test!"},
							formulaCell, objCell;

						addingWidget.model.setColumnValue("formulaHelper", formulaHelperValue);
						addingWidget.model.setColumnValue("object", objValue);

						addingWidget._updateUiRow();

						formulaCell = addingWidget.model.getCell("formula").cell;
						objCell = addingWidget.model.getCell("object").cell;

						objCell.should.have.html(objValue.testKey);
						formulaCell.should.have.html(formulaHelperValue);
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
						var cell = addingWidget.model.getCell("text"),
							editorInfo = addingWidget._getEditorForCell("text", cell);

						assert.equal(Object.getPrototypeOf(editorInfo.provider), jQuery.ig.EditorProviderText.prototype, "Editor did not have the correct provider.");
						editorInfo.providerWrapper.should.have.class(addingWidget.css.editor);
						assert.equal(editorInfo.cell, cell, "Cells did not match.");
					});
				});

				describe("#_navigateLeft", function() {
					it("should open an editor in the previous column.", function() {
						var column = "text",
							previousCell;

						sinon.spy(addingWidget, "_saveEdit");
						sinon.spy(addingWidget, "_startEdit");

						addingWidget._startEdit(column);
						addingWidget._navigateLeft();

						previousCell = addingWidget.model.getCell("number");

						assert.equal(addingWidget.activeEditor.cell, previousCell, "Active editor was not in the correct cell.");

						assert.isTrue(addingWidget._saveEdit.calledOnce, "_saveEdit was not called.");
						assert.isTrue(addingWidget._startEdit.calledTwice, "_startEdit was not called.");
					});

					it("should close the active editor if on the first editable cell.", function() {
						var startingColumn = "number";

						sinon.spy(addingWidget, "_saveEdit");
						sinon.spy(addingWidget, "_startEdit");

						addingWidget._startEdit(startingColumn);
						addingWidget._navigateLeft();

						assert.isUndefined(addingWidget.activeEditor, "There should be no active editor.");

						assert.isTrue(addingWidget._saveEdit.calledOnce, "_saveEdit was not called.");
						assert.isTrue(addingWidget._startEdit.calledOnce, "_startEdit was not called only once.");
					});
				});

				describe("#_navigateRight", function() {
					it("should open an editor in the next column.", function() {
						var startingColumn = "number",
							nextColumn = "text",
							nextCell;

						sinon.spy(addingWidget, "_saveEdit");
						sinon.spy(addingWidget, "_startEdit");

						addingWidget._startEdit(startingColumn);
						addingWidget._navigateRight();

						nextCell = addingWidget.model.getCell(nextColumn);

						assert.equal(addingWidget.activeEditor.cell, nextCell, "Active editor was not in the correct cell.");

						assert.isTrue(addingWidget._saveEdit.calledOnce, "_saveEdit was not called.");
						assert.isTrue(addingWidget._startEdit.calledTwice, "_startEdit was not called.");
					});

					it("should do nothing when on the submit button.", function() {
					});

					it("should navigate to the submit button.", function() {
					});
				});
			});
		});
	});
});