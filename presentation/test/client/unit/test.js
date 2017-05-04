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
						{headerText: "readonly", key: "readonly", dataType: "text"},
						{headerText: "default", key: "default", dataType: "text"},
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
								{columnKey: "readonly", readOnly: true},
								{columnKey: "default", readOnly: true, default: "default text!"},
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

						columnModel = addingWidget.getColumn(columnKey);

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

						cell = addingWidget.setColumnValue(column, true);

						assert.property(cell, "key", "Cell model did not have a 'key' property.");
						assert.property(cell, "value", "Cell model did not have a 'value' property.");
						assert.isTrue(cell.value, "Expected cell value to be true.");
						assert.equal(column, cell.key, "Expected cell to have key of " + column + " but found " + cell.key + ".");

						cell = addingWidget.setColumnValue(column, false);
						assert.isFalse(cell.value, "Expected cell value to be false.");
					});

					it("should update text column data", function() {
						var column = "bool",
							cell;

						cell = addingWidget.setColumnValue(column, "lala");

						assert.property(cell, "key", "Cell model did not have a 'key' property.");
						assert.property(cell, "value", "Cell model did not have a 'value' property.");
						assert.equal('lala', cell.value, "Expected cell value to be 'lala'.");
						assert.equal(column, cell.key, "Expected cell to have key of " + column + " but found " + cell.key + ".");
					});

					it("should update numeric column data", function() {
						var column = "bool",
							cell;

						cell = addingWidget.setColumnValue(column, 2);

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
						columModel = addingWidget.getColumn(column);

					addingWidget._startEdit(columModel);
					assert.equal(addingWidget.activeEditor.cell.cell, columModel.cell, "Active editor was not in the correct cell.");
					columModel.cell.should.have.descendants(addingWidget.activeEditor.providerWrapper);
				});

				it("should create a numeric editor for the number column.", function() {
					var column = "number",
						columModel = addingWidget.getColumn(column);

					addingWidget._startEdit(columModel);
					assert.equal(addingWidget.activeEditor.cell.cell, columModel.cell, "Active editor was not in the correct cell.");
					columModel.cell.should.have.descendants(addingWidget.activeEditor.providerWrapper);
				});

				it("should create a checkbox editor for the boolean column.", function() {
					var column = "bool",
						columModel = addingWidget.getColumn(column);

					addingWidget._startEdit(columModel);
					assert.equal(addingWidget.activeEditor.cell.cell, columModel.cell, "Active editor was not in the correct cell.");
					columModel.cell.should.have.descendants(addingWidget.activeEditor.providerWrapper);
				});

				it("should create a combo editor for the object column.", function() {
					var column = "object",
						columModel = addingWidget.getColumn(column);

					addingWidget._startEdit(columModel);
					assert.equal(addingWidget.activeEditor.cell.cell, columModel.cell, "Active editor was not in the correct cell.");
					columModel.cell.should.have.descendants(addingWidget.activeEditor.providerWrapper);
				});

				it("should display a new text value.", function() {
					var columnKey = "text",
						textVal = "test!",
						column;

					column = addingWidget.getColumn(columnKey);
					addingWidget.setColumnValue(columnKey, textVal);
					addingWidget._updateUiCell(column);

					column.cell.should.have.html(textVal);
				});

				it("should display a new number value.", function() {
					var columnKey = "number",
						numVal = 5,
						column;

					column = addingWidget.getColumn(columnKey);
					addingWidget.setColumnValue(columnKey, numVal);
					addingWidget._updateUiCell(column);

					column.cell.should.have.html(numVal.toString());
				});

				it("should display a new template value.", function() {
					var columnKey = "template",
						column;

					addingWidget.setColumnValue(columnKey, "A working");

					column = addingWidget.getColumn(columnKey);
					addingWidget._updateUiCell(column);

					column.cell.should.have.html("A working template!");
				});

				it("should display a new formula value.", function() {
					var columnKey = "formula",
						helperValue = "test!",
						column;

					addingWidget.setColumnValue("formulaHelper", helperValue);

					column = addingWidget.getColumn(columnKey);
					addingWidget._updateUiCell(column);

					column.cell.should.have.html(helperValue);
				});

				it("should display a new mapped value.", function() {
					var columnKey = "object",
						objValue = {testKey: "test!"},
						column;

					column = addingWidget.getColumn(columnKey);
					addingWidget.setColumnValue(columnKey, objValue);
					addingWidget._updateUiCell(column);

					column.cell.should.have.html("test!");
				});

				it("should display a default value.", function() {
					var columnKey = "default",
						column;

					column = addingWidget.getColumn(columnKey);

					column.cell.should.have.html("default text!");
				});

				describe("keyboard navigation", function() {
					describe("with tab", function() {
						it("should open an editor in the next (right) column.", function() {
							var startingColumn = addingWidget.getColumn("number"),
								nextColumn = "text",
								nextCell;

							sinon.spy(addingWidget, "_saveEdit");
							sinon.spy(addingWidget, "_startEdit");

							addingWidget._startEdit(startingColumn);
							addingWidget._navigateRight();

							nextCell = addingWidget.getColumn(nextColumn).cell;

							assert.equal(addingWidget.activeEditor.cell.cell, nextCell, "Active editor was not in the correct cell.");
							assert.isTrue(addingWidget._saveEdit.calledOnce, "_saveEdit was not called.");
							assert.isTrue(addingWidget._startEdit.calledTwice, "_startEdit was not called.");
						});

						it("should navigate to the submit button if on the last editable cell.", function() {
							var startingColumn = addingWidget.getColumn("object");

							addingWidget._startEdit(startingColumn);
							addingWidget._navigateRight();

							assert.isUndefined(addingWidget.activeEditor, "There should be no active editor.");
							//unreliable assert.equal(jQuery("#ui-iggrid-adding-add-row-button:focus").length, 1, "Add button was not focused.");
						});

						it("should do nothing when the submit button is focused.", function() {
							addingWidget._addAddingButton();
							jQuery("#ui-iggrid-adding-add-row-button").focus();
							addingWidget._navigateRight();

							//unreliable assert.equal(jQuery("#ui-iggrid-adding-add-row-button:focus").length, 1, "Add button was not focused.");
							assert.isUndefined(addingWidget.activeEditor, "There should be no active editor.");
						});
					});

					describe("with shift + tab", function() {
						it("should open an editor in the previous (left) column.", function() {
							var column = "text",
								previousCell;

							sinon.spy(addingWidget, "_saveEdit");
							sinon.spy(addingWidget, "_startEdit");

							addingWidget._startEdit(addingWidget.getColumn(column));
							addingWidget._navigateLeft();

							previousCell = addingWidget.getColumn("number").cell;

							assert.equal(addingWidget.activeEditor.cell.cell, previousCell, "Active editor was not in the correct cell.");
							assert.isTrue(addingWidget._saveEdit.calledOnce, "_saveEdit was not called.");
							assert.isTrue(addingWidget._startEdit.calledTwice, "_startEdit was not called.");
						});

						it("should close the active editor if on the first editable cell.", function() {
							var startingColumn = addingWidget.getColumn("number");

							sinon.spy(addingWidget, "_saveEdit");
							sinon.spy(addingWidget, "_startEdit");

							addingWidget._startEdit(startingColumn);
							addingWidget._navigateLeft();

							assert.isUndefined(addingWidget.activeEditor, "There should be no active editor.");
							assert.isTrue(addingWidget._saveEdit.calledOnce, "_saveEdit was not called.");
							assert.isTrue(addingWidget._startEdit.calledOnce, "_startEdit was not called only once.");
						});

						it("should navigate to the right-most editable cell when on the submit button.", function() {
							addingWidget._addAddingButton();
							jQuery("#ui-iggrid-adding-add-row-button").focus();
							addingWidget._navigateFromAddButton();

							assert.equal(jQuery("#ui-iggrid-adding-add-row-button:focus").length, 0, "Add button was still focused.");
							assert.equal(addingWidget.activeEditor.cell.cell, addingWidget.getColumn("object").cell, "Active editor was not in the correct cell.");
						});
					});

					describe("with enter", function() {
						it("should add the adding row to the main table and clear the adding row if focused on an editor.", function() {
							var column = "text",
								event;

							sinon.spy(addingWidget, "_saveEdit");
							sinon.spy(addingWidget, "_startEdit");
							sinon.spy(addingWidget, "_commitRow");

							addingWidget._startEdit(addingWidget.getColumn(column));
							event = new jQuery.Event("keypress",
								{
									keyCode: jQuery.ui.keyCode.ENTER,
									target: addingWidget.activeEditor.providerWrapper.find("input")[0]
								});
							addingWidget._addingRowHandlers.keypress(event);

							assert.equal(addingWidget.activeEditor.cell.cell, addingWidget.getColumn(column).cell, "Active editor was not in the correct cell.");
							assert.isTrue(addingWidget._saveEdit.calledOnce, "_saveEdit was not called.");
							assert.isTrue(addingWidget._commitRow.calledOnce, "_commitRow was not called.");
							assert.isTrue(addingWidget._startEdit.calledTwice, "_startEdit was not called.");
							assert.equal(tableEle.igGrid("allRows").length, 1, "A new row was not added to the table.");
						});

						it("should add the adding row to the main table and clear the adding row if focused on the add button.", function() {
							var column = "number",
								event;

							addingWidget._addAddingButton();

							sinon.spy(addingWidget, "_startEdit");
							sinon.spy(addingWidget, "_commitRow");

							addingWidget._startEdit(addingWidget.getColumn(column));
							event = new jQuery.Event("keypress",
								{
									keyCode: jQuery.ui.keyCode.ENTER,
									target: document.getElementById("ui-iggrid-adding-add-row-button")
								});
							addingWidget._addingRowHandlers.keypress(event);

							assert.equal(addingWidget.activeEditor.cell.cell, addingWidget.getColumn(column).cell, "Active editor was not in the correct cell.");
							assert.isTrue(addingWidget._commitRow.calledOnce, "_commitRow was not called.");
							assert.isTrue(addingWidget._startEdit.calledTwice, "_startEdit was not called.");
							assert.equal(tableEle.igGrid("allRows").length, 1, "A new row was not added to the table.");
						});
					});
				});

				describe("mouse navigation", function() {
					it("should show the adding button when mousing over the adding row.", function() {
						sinon.spy(addingWidget, "_addAddingButton");

						addingWidget._addingRowHandlers.mouseenter();

						jQuery("#ui-iggrid-adding-add-row-button").should.exist;
						addingWidget.addingRow.row.children("td").should.have.class("ui-state-hover");
						assert.isTrue(addingWidget._addAddingButton.calledOnce, "_addAddingButton was not called.");
					});

					it("should hide the adding button when mousing off the adding row.", function() {
						sinon.spy(addingWidget, "_removeAddingButton");

						addingWidget._addingRowHandlers.mouseleave();

						jQuery("#ui-iggrid-adding-add-row-button").should.not.be.visible;
						addingWidget.addingRow.row.children("td").should.not.have.class("ui-state-hover");
						assert.isTrue(addingWidget._removeAddingButton.calledOnce, "_removeAddingButton was not called.");
					});

					it("should open an editor in the first editable cell when clicking on a non-editable cell.", function() {
						var event;

						event = new jQuery.Event("click", {
							target: addingWidget.getColumn("readonly").cell[0]
						});

						addingWidget._addingRowHandlers.click(event);

						assert.equal(addingWidget.activeEditor.cell.cell, addingWidget.getColumn("number").cell, "Active editor was not in the correct cell.");
					});

					it("should open an editor in the corresponding cell when clicking on an editable cell.", function() {
						var event;

						event = new jQuery.Event("click", {
							target: addingWidget.getColumn("text").cell[0]
						});

						addingWidget._addingRowHandlers.click(event);

						assert.equal(addingWidget.activeEditor.cell.cell, addingWidget.getColumn("text").cell, "Active editor was not in the correct cell.");
					});

					/*
					unreliable - for some reason, clikcing the second time doesn't always trigger the blur event that actually handles updating the edited cell.
					it("should save the content of and close a previously opened editor when a different editable column is clicked on.", function() {
						var testText = "Heeeey",
							event;

						sinon.spy(addingWidget, "setColumnValue");

						event = new jQuery.Event("click", {
							target: addingWidget.getColumn("text").cell[0]
						});

						addingWidget._addingRowHandlers.click(event);

						addingWidget.activeEditor.cell.cell.find("input").val(testText);

						event = new jQuery.Event("click", {
							target: addingWidget.getColumn("number").cell[0]
						});

						addingWidget._addingRowHandlers.click(event);

						assert.equal(addingWidget.activeEditor.cell.cell, addingWidget.getColumn("number").cell, "Active editor was not in the correct cell.");
						assert.equal(addingWidget.getColumn("text").value, testText, "Text cell did not have the correct value.");
					});*/

					it("should add a new row to the main table and clear the contents of the row adding interface when the user clicks an add button.", function() {
						addingWidget._addAddingButton();
						sinon.spy(addingWidget, "_commitRow");

						addingWidget._addingButtonHandlers.mousedown();

						assert.isUndefined(addingWidget.activeEditor, "There should not have been an active editor.");
						assert.isTrue(addingWidget._commitRow.calledOnce, "_commitRow was not called.");
						assert.equal(tableEle.igGrid("allRows").length, 1, "A new row was not added to the table.");
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

						addingWidget.setColumnValue("text", textVal);
						addingWidget.setColumnValue("number", numberVal);
						addingWidget.setColumnValue("bool", boolVal);

						row = addingWidget._getRowForRendering();

						assert.propertyVal(row, "text", textVal, "Expected " + textVal + " for text column value but got " + row.text + ".");
						assert.propertyVal(row, "number", numberVal, "Expected " + numberVal + " for number column value but got " + row.number + ".");
						assert.propertyVal(row, "bool", boolVal, "Expected " + boolVal + " for bool column value but got " + row.bool + ".");
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
			});
		});
	});
});