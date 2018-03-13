import { assert, expect } from "chai";
import sinon from "sinon";
import "chai-jquery";
import jQuery from "Lib/Poptart.jQuery";
import "jqueryui";
import { nunjucks, nunjucksEnvironment } from "Lib/Poptart.Nunjucks";
import "@infragistics/ignite-ui-full/en/js/infragistics.core";
import "@infragistics/ignite-ui-full/en/js/infragistics.dv";
import "@infragistics/ignite-ui-full/en/js/infragistics.lob";
import "@infragistics/ignite-ui-full/en/js/modules/infragistics.datasource";
import "@infragistics/ignite-ui-full/en/js/modules/infragistics.ui.combo";
import "@infragistics/ignite-ui-full/en/js/modules/infragistics.ui.editors";
import "@infragistics/ignite-ui-full/en/js/modules/infragistics.ui.grid.framework";
import "@infragistics/ignite-ui-full/en/js/modules/infragistics.ui.grid.shared";

import "Poptart/components/Poptart.Ignite.Adding.js";

describe("#infragistics", function() {
	describe("#Adding", function() {
		describe("#Unit", function () {
			describe("#tableAdding", function () {
				var tableEle, addingWidget;

				jQuery.ig.tmpl = function (template, data) {
					try {
						//Throws an error if a named template is not found
						return nunjucksEnvironment.render(template, data);
					} catch (e) {
						return nunjucks.renderString(template, data);
					}
				};

				before(function () {
					tableEle = jQuery("<table id='test'></table>");
					tableEle.appendTo(jQuery("body"));
					console.log(tableEle)
				});
				beforeEach(function () {

					tableEle.igGrid({
						dataSource: [],
						dataSourceType: "json",
						primaryKey: "pk",
						columns: [
							{headerText: "number", key: "number", dataType: "number"},
							{headerText: "text", key: "text", dataType: "string"},
							{headerText: "bool", key: "bool", dataType: "bool"},
							{
								headerText: "template",
								key: "template",
								dataType: "string",
								template: "{{template}} template!"
							},
							{
								headerText: "formula",
								key: "formula",
								dataType: "number",
								unbound: true,
								formula: function (row) {
									return row ? row.formulaHelper : "";
								}
							},
							{
								headerText: "object",
								key: "object",
								dataType: "object",
								mapper: function (obj) {
									return obj ? obj.testKey : "";
								}
							},
							{headerText: "readonly", key: "readonly", dataType: "text"},
							{headerText: "default", key: "default", dataType: "text"},
							{headerText: "required", key: "required", dataType: "text"},
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
									{
										columnKey: "required",
										editorType: "text",
										readOnly: false,
										required: true,
										default: "placeholder to keep older tests from breaking"
									},
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
					addingWidget._gridHandlers.rendered({}, {owner: {id: () => "test"}})
				});

				afterEach(function () {
					tableEle.igGrid("destroy");
					jQuery(".ui-iggrid-adding-add-row-button-container").remove();
				});

				describe("#model", function () {
					describe("#_getColumn", function () {
						it("should return a column model", function () {
							var columnKey = "bool",
								columnModel;

							columnModel = addingWidget._getColumn(columnKey);

							assert.property(columnModel, "key", "Cell model did not have a 'key' property.");
							assert.property(columnModel, "value", "Cell model did not have a 'value' property.");
							assert.property(columnModel, "settings", "Cell model did not have a 'settings' property.");
							assert.isFalse(columnModel.value, "Expected columnModel value to be false at start.");
							assert.equal(columnKey, columnModel.key, "Expected columnModel to have key of " + columnKey + " but found " + columnModel.key + ".");
						});
					});

					describe("#_setColumnValue", function () {
						it("should update boolean column data", function () {
							var column = "bool",
								cell;

							cell = addingWidget._setColumnValue(column, true);

							assert.property(cell, "key", "Cell model did not have a 'key' property.");
							assert.property(cell, "value", "Cell model did not have a 'value' property.");
							assert.isTrue(cell.value, "Expected cell value to be true.");
							assert.equal(column, cell.key, "Expected cell to have key of " + column + " but found " + cell.key + ".");

							cell = addingWidget._setColumnValue(column, false);
							assert.isFalse(cell.value, "Expected cell value to be false.");
						});

						it("should update text column data", function () {
							var column = "bool",
								cell;

							cell = addingWidget._setColumnValue(column, "lala");

							assert.property(cell, "key", "Cell model did not have a 'key' property.");
							assert.property(cell, "value", "Cell model did not have a 'value' property.");
							assert.equal('lala', cell.value, "Expected cell value to be 'lala'.");
							assert.equal(column, cell.key, "Expected cell to have key of " + column + " but found " + cell.key + ".");
						});

						it("should update numeric column data", function () {
							var column = "bool",
								cell;

							cell = addingWidget._setColumnValue(column, 2);

							assert.property(cell, "key", "Cell model did not have a 'key' property.");
							assert.property(cell, "value", "Cell model did not have a 'value' property.");
							assert.equal(2, cell.value, "Expected cell value to be 2.");
							assert.equal(column, cell.key, "Expected cell to have key of " + column + " but found " + cell.key + ".");
						});
					});
				});

				describe("#Adding", function () {
					it("should create a text editor for the text column.", function () {
						var column = "text",
							columModel = addingWidget._getColumn(column);

						addingWidget._startEdit(columModel);
						assert.equal(addingWidget.activeEditor.cell.cell, columModel.cell, "Active editor was not in the correct cell.");
						columModel.cell.should.have.descendants(addingWidget.activeEditor.providerWrapper);
					});

					it("should create a numeric editor for the number column.", function () {
						var column = "number",
							columModel = addingWidget._getColumn(column);

						addingWidget._startEdit(columModel);
						assert.equal(addingWidget.activeEditor.cell.cell, columModel.cell, "Active editor was not in the correct cell.");
						columModel.cell.should.have.descendants(addingWidget.activeEditor.providerWrapper);
					});

					it("should create a checkbox editor for the boolean column.", function () {
						var column = "bool",
							columModel = addingWidget._getColumn(column);

						addingWidget._startEdit(columModel);
						assert.equal(addingWidget.activeEditor.cell.cell, columModel.cell, "Active editor was not in the correct cell.");
						columModel.cell.should.have.descendants(addingWidget.activeEditor.providerWrapper);
					});

					it("should create a combo editor for the object column.", function () {
						var column = "object",
							columModel = addingWidget._getColumn(column);

						addingWidget._startEdit(columModel);
						assert.equal(addingWidget.activeEditor.cell.cell, columModel.cell, "Active editor was not in the correct cell.");
						columModel.cell.should.have.descendants(addingWidget.activeEditor.providerWrapper);
					});

					it("should display a new text value.", function () {
						var columnKey = "text",
							textVal = "test!",
							column;

						column = addingWidget._getColumn(columnKey);
						addingWidget._setColumnValue(columnKey, textVal);
						addingWidget._updateUiCell(column);

						column.cell.should.have.html(textVal);
					});

					it("should display a new number value.", function () {
						var columnKey = "number",
							numVal = 5,
							column;

						column = addingWidget._getColumn(columnKey);
						addingWidget._setColumnValue(columnKey, numVal);
						addingWidget._updateUiCell(column);

						column.cell.should.have.html(numVal.toString());
					});

					it("should display a new template value.", function () {
						var columnKey = "template",
							column;

						addingWidget._setColumnValue(columnKey, "A working");

						column = addingWidget._getColumn(columnKey);
						addingWidget._updateUiCell(column);

						column.cell.should.have.html("A working template!");
					});

					it("should display a new formula value.", function () {
						var columnKey = "formula",
							helperValue = "test!",
							column;

						addingWidget._setColumnValue("formulaHelper", helperValue);

						column = addingWidget._getColumn(columnKey);
						addingWidget._updateUiCell(column);

						column.cell.should.have.html(helperValue);
					});

					it("should display a new mapped value.", function () {
						var columnKey = "object",
							objValue = {testKey: "test!"},
							column;

						column = addingWidget._getColumn(columnKey);
						addingWidget._setColumnValue(columnKey, objValue);
						addingWidget._updateUiCell(column);

						column.cell.should.have.html("test!");
					});

					it("should display a default value.", function () {
						var columnKey = "default",
							column;

						column = addingWidget._getColumn(columnKey);

						column.cell.should.have.html("default text!");
					});

					it("display validation failures.", function () {
						var columnKey = "required",
							column;

						addingWidget._setColumnValue(columnKey, null);
						addingWidget._commitRow();
						column = addingWidget._getColumn(columnKey);

						column.cell.should.have.class(addingWidget.css.invalidCell);
						jQuery(".ui-grid-adding-failure-container[data-failure=" + columnKey + "]").should.be.visisble;

						assert.equal(jQuery("." + addingWidget.css.addRowBarCellFailures).length, 1, "Adding row divider bar did not show failures");
						assert.equal(tableEle.igGrid("allRows").length, 0, "A new row was added to the table but should not have been.");
					});

					describe("keyboard navigation", function () {
						describe("with tab", function () {
							it("should open an editor in the next (right) column.", function () {
								var startingColumn = addingWidget._getColumn("number"),
									nextColumn = "text",
									nextCell;

								sinon.spy(addingWidget, "_saveEdit");
								sinon.spy(addingWidget, "_startEdit");

								addingWidget._startEdit(startingColumn);
								addingWidget._navigateRight();

								nextCell = addingWidget._getColumn(nextColumn).cell;

								assert.equal(addingWidget.activeEditor.cell.cell, nextCell, "Active editor was not in the correct cell.");
								assert.isTrue(addingWidget._saveEdit.calledOnce, "_saveEdit was not called.");
								assert.isTrue(addingWidget._startEdit.calledTwice, "_startEdit was not called.");
							});

							it("should navigate to the submit button if on the last editable cell.", function () {
								var startingColumn = addingWidget._getColumn("required");

								addingWidget._startEdit(startingColumn);
								addingWidget._navigateRight();

								assert.isUndefined(addingWidget.activeEditor, "There should be no active editor.");
								//unreliable assert.equal(jQuery("#ui-iggrid-adding-add-row-button:focus").length, 1, "Add button was not focused.");
							});

							it("should do nothing when the submit button is focused.", function () {
								addingWidget._addAddingButton();
								jQuery("#ui-iggrid-adding-add-row-button").focus();
								addingWidget._navigateRight();

								//unreliable assert.equal(jQuery("#ui-iggrid-adding-add-row-button:focus").length, 1, "Add button was not focused.");
								assert.isUndefined(addingWidget.activeEditor, "There should be no active editor.");
							});
						});

						describe("with shift + tab", function () {
							it("should open an editor in the previous (left) column.", function () {
								var column = "text",
									previousCell;

								sinon.spy(addingWidget, "_saveEdit");
								sinon.spy(addingWidget, "_startEdit");

								addingWidget._startEdit(addingWidget._getColumn(column));
								addingWidget._navigateLeft();

								previousCell = addingWidget._getColumn("number").cell;

								assert.equal(addingWidget.activeEditor.cell.cell, previousCell, "Active editor was in '" +
									addingWidget.activeEditor.cell.key +
									"' but should have been in 'number'.");
								assert.isTrue(addingWidget._saveEdit.calledOnce, "_saveEdit was not called.");
								assert.isTrue(addingWidget._startEdit.calledTwice, "_startEdit was not called.");
							});

							it("should close the active editor if on the first editable cell.", function () {
								var startingColumn = addingWidget._getColumn("number");

								sinon.spy(addingWidget, "_saveEdit");
								sinon.spy(addingWidget, "_startEdit");

								addingWidget._startEdit(startingColumn);
								addingWidget._navigateLeft();

								assert.isUndefined(addingWidget.activeEditor, "There should be no active editor.");
								assert.isTrue(addingWidget._saveEdit.calledOnce, "_saveEdit was not called.");
								assert.isTrue(addingWidget._startEdit.calledOnce, "_startEdit was not called only once.");
							});

							it("should navigate to the right-most editable cell when on the submit button.", function () {
								addingWidget._addAddingButton();
								jQuery("#ui-iggrid-adding-add-row-button").focus();
								addingWidget._navigateFromAddButton();

								assert.equal(jQuery("#ui-iggrid-adding-add-row-button:focus").length, 0, "Add button was still focused.");
								assert.equal(addingWidget.activeEditor.cell.cell, addingWidget._getColumn("required").cell, "Active editor was in '" +
									addingWidget.activeEditor.cell.key +
									"' but should have been in 'required'.");
								;
							});
						});

						describe("with enter", function () {
							it("should add the adding row to the main table and clear the adding row if focused on an editor.", function () {
								var column = "text",
									event;

								sinon.spy(addingWidget, "_saveEdit");
								sinon.spy(addingWidget, "_startEdit");
								sinon.spy(addingWidget, "_commitRow");

								addingWidget._startEdit(addingWidget._getColumn(column));
								event = new jQuery.Event("keypress",
									{
										keyCode: jQuery.ui.keyCode.ENTER,
										target: addingWidget.activeEditor.providerWrapper.find("input")[0]
									});
								addingWidget._addingRowHandlers.keypress(event);

								assert.equal(addingWidget.activeEditor.cell.cell, addingWidget._getColumn(column).cell, "Active editor was not in the correct cell.");
								assert.isTrue(addingWidget._saveEdit.calledOnce, "_saveEdit was not called.");
								assert.isTrue(addingWidget._commitRow.calledOnce, "_commitRow was not called.");
								assert.isTrue(addingWidget._startEdit.calledTwice, "_startEdit was not called.");
								assert.equal(tableEle.igGrid("allRows").length, 1, "A new row was not added to the table.");
							});

							it("should add the adding row to the main table and clear the adding row if focused on the add button.", function () {
								var column = "number",
									event;

								addingWidget._addAddingButton();

								sinon.spy(addingWidget, "_startEdit");
								sinon.spy(addingWidget, "_commitRow");

								addingWidget._startEdit(addingWidget._getColumn(column));
								event = new jQuery.Event("keypress",
									{
										keyCode: jQuery.ui.keyCode.ENTER,
										target: document.getElementById("ui-iggrid-adding-add-row-button")
									});
								addingWidget._addingRowHandlers.keypress(event);

								assert.equal(addingWidget.activeEditor.cell.cell, addingWidget._getColumn(column).cell, "Active editor was not in the correct cell.");
								assert.isTrue(addingWidget._commitRow.calledOnce, "_commitRow was not called.");
								assert.isTrue(addingWidget._startEdit.calledTwice, "_startEdit was not called.");
								assert.equal(tableEle.igGrid("allRows").length, 1, "A new row was not added to the table.");
							});
						});
					});

					describe("mouse navigation", function () {
						it("should show the adding button when mousing over the adding row.", function () {
							sinon.spy(addingWidget, "_addAddingButton");

							addingWidget._addingRowHandlers.mouseenter();

							jQuery("#ui-iggrid-adding-add-row-button").should.exist;
							addingWidget.addingRow.row.children("td").should.have.class("ui-state-hover");
							assert.isTrue(addingWidget._addAddingButton.calledOnce, "_addAddingButton was not called.");
						});

						it("should hide the adding button when mousing off the adding row.", function () {
							sinon.spy(addingWidget, "_removeAddingButton");

							addingWidget._addingRowHandlers.mouseleave();

							jQuery("#ui-iggrid-adding-add-row-button").should.not.be.visible;
							addingWidget.addingRow.row.children("td").should.not.have.class("ui-state-hover");
							assert.isTrue(addingWidget._removeAddingButton.calledOnce, "_removeAddingButton was not called.");
						});

						it("should open an editor in the first editable cell when clicking on a non-editable cell.", function () {
							var event;

							event = new jQuery.Event("click", {
								target: addingWidget._getColumn("readonly").cell[0]
							});

							addingWidget._addingRowHandlers.click(event);

							assert.equal(addingWidget.activeEditor.cell.cell, addingWidget._getColumn("number").cell, "Active editor was not in the correct cell.");
						});

						it("should open an editor in the corresponding cell when clicking on an editable cell.", function () {
							var event;

							event = new jQuery.Event("click", {
								target: addingWidget._getColumn("text").cell[0]
							});

							addingWidget._addingRowHandlers.click(event);

							assert.equal(addingWidget.activeEditor.cell.cell, addingWidget._getColumn("text").cell, "Active editor was not in the correct cell.");
						});

						/*
						unreliable - for some reason, clikcing the second time doesn't always trigger the blur event that actually handles updating the edited cell.
						it("should save the content of and close a previously opened editor when a different editable column is clicked on.", function() {
							var testText = "Heeeey",
								event;

							sinon.spy(addingWidget, "_setColumnValue");

							event = new jQuery.Event("click", {
								target: addingWidget._getColumn("text").cell[0]
							});

							addingWidget._addingRowHandlers.click(event);

							addingWidget.activeEditor.cell.cell.find("input").val(testText);

							event = new jQuery.Event("click", {
								target: addingWidget._getColumn("number").cell[0]
							});

							addingWidget._addingRowHandlers.click(event);

							assert.equal(addingWidget.activeEditor.cell.cell, addingWidget._getColumn("number").cell, "Active editor was not in the correct cell.");
							assert.equal(addingWidget._getColumn("text").value, testText, "Text cell did not have the correct value.");
						});*/

						it("should add a new row to the main table and clear the contents of the row adding interface when the user clicks an add button.", function () {
							var event;

							event = new jQuery.Event("click", {
								target: jQuery("." + addingWidget.css.addRowButton)[0]
							});

							addingWidget._addAddingButton();
							sinon.spy(addingWidget, "_commitRow");

							addingWidget._addingButtonHandlers.mousedown(event);

							assert.isUndefined(addingWidget.activeEditor, "There should not have been an active editor.");
							assert.isTrue(addingWidget._commitRow.calledOnce, "_commitRow was not called.");
							assert.equal(tableEle.igGrid("allRows").length, 1, "A new row was not added to the table.");
						});
					});

					describe("#_getRowForRendering", function () {
						it("should return keys for each column", function () {
							var row = addingWidget._getRowForRendering();

							assert.property(row, "text", "Renderable row did not have a key for the 'text' column.");
							assert.property(row, "number", "Renderable row did not have a key for the 'number' column.");
							assert.property(row, "bool", "Renderable row did not have a key for the 'bool' column.");
						});

						it("should return values for each column", function () {
							var textVal = "test!",
								numberVal = 5,
								boolVal = true,
								row;

							addingWidget._setColumnValue("text", textVal);
							addingWidget._setColumnValue("number", numberVal);
							addingWidget._setColumnValue("bool", boolVal);

							row = addingWidget._getRowForRendering();

							assert.propertyVal(row, "text", textVal, "Expected " + textVal + " for text column value but got " + row.text + ".");
							assert.propertyVal(row, "number", numberVal, "Expected " + numberVal + " for number column value but got " + row.number + ".");
							assert.propertyVal(row, "bool", boolVal, "Expected " + boolVal + " for bool column value but got " + row.bool + ".");
						});
					});

					describe("#_createAddingRowHtml", function () {
						it("should return a row with a cell for each visible column.", function () {
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
		describe("#Integration", function () {
			var tableEle = jQuery("<table id='test'></table>"),
				baseTableConfiguration;

			beforeEach(function() {
				tableEle.appendTo(jQuery("body"));

				baseTableConfiguration = {
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
				};
			});

			afterEach(function() {
				tableEle.igGrid("destroy");
				tableEle.remove();
				baseTableConfiguration = {};
			});

			describe("API", function() {
				describe("methods", function() {
					describe("startEdit", function() {
						it("should start editing the text column and return a cell object.", function(done) {
							var config = jQuery.extend(true, {}, baseTableConfiguration),
								cell, foundCell;

							config.rendered = function() {
								cell = tableEle.igGridAdding("startEdit", "text");
								foundCell = tableEle.find("#addingRow0_text");

								foundCell.should.have.class("ui-iggrid-editingcell");
								assert.equal(cell.key, "text", "Editor did not open in the correct column.");
								assert.equal(foundCell[0], cell.cell[0], "Editor did not open in the correct column.");
								done();
							};
							tableEle.igGrid(config);
						});

						it("should start editing the first column of the adding row", function(done) {
							var config = jQuery.extend(true, {}, baseTableConfiguration),
								cell, foundCell;

							config.features.find(function(feature) { return feature.name === "Adding" }).rendered = function() {
								cell = tableEle.igGridAdding("startEdit");
								foundCell = tableEle.find("#addingRow0_number");
								foundCell.should.have.class("ui-iggrid-editingcell");
								assert.equal(cell.key, "number", "Editor did not open in the correct column.");
								assert.equal(foundCell[0], cell.cell[0], "Editor did not open in the correct column.");
								done();
							};

							tableEle.igGrid(config);
						});
					});

					describe("endEdit", function() {
						it("should close the editor and save the value.", function(done) {
							var config = jQuery.extend(true, {}, baseTableConfiguration),
								addingConfig = config.features.find(function(feature) {
									return feature.name === "Adding";
								}),
								column = "text",
								newVal = "new text!",
								addingWidget;

							addingConfig.rendered = function() {
								addingWidget = tableEle.data("Poptart-igGridAdding");
								tableEle.igGridAdding("startEdit", column);

								addingWidget.activeEditor.provider.setValue(newVal);
								tableEle.igGridAdding("endEdit", true);
							};
							addingConfig.editEnded = function() {
								assert.equal(addingWidget._getColumn(column).value, newVal, "Cell did not save properly.");
								assert.isUndefined(addingWidget.activeEditor, "Editor did not close.");
								done();
							};

							tableEle.igGrid(config);
						});

						it("should close the editor and discard changes.", function(done) {
							var config = jQuery.extend(true, {}, baseTableConfiguration),
								addingConfig = config.features.find((feature) => feature.name === "Adding"),
								column = "text",
								newVal = "new text!",
								addingWidget;

							addingConfig.rendered = function() {
								addingWidget = tableEle.data("Poptart-igGridAdding");
								tableEle.igGridAdding("startEdit", column);

								addingWidget.activeEditor.provider.setValue(newVal);
								tableEle.igGridAdding("endEdit", false);
							};
							addingConfig.editEnded = function() {
								assert.equal(addingWidget._getColumn(column).value, '', "Cell did not discard changes.");
								assert.isUndefined(addingWidget.activeEditor, "Editor did not close.");
								done();
							};

							tableEle.igGrid(config);
						});
					});
				});

				describe("events", function() {
					it("should trigger the 'rendering' handler before rendering.", function(done) {
						var config = jQuery.extend(true, {}, baseTableConfiguration),
							addingConfig = config.features.find(function(feature) {
								return feature.name === "Adding";
							}),
							timer;

						function spy() {
							clearTimeout(timer);
							done();
						}

						sinon.spy(spy);

						timer = setTimeout(function() {
							assert(spy.called, 'Event did not fire in 1000ms.');
							done();
						}, 1000);

						addingConfig.rendering = spy;

						tableEle.igGrid(config);
					});

					it("should trigger the 'rendered' handler after rendering.", function(done) {
						var config = jQuery.extend(true, {}, baseTableConfiguration),
							addingConfig = config.features.find(function(feature) {
								return feature.name === "Adding";
							}),
							timer;

						function spy() {
							clearTimeout(timer);
							done();
						}

						sinon.spy(spy);

						timer = setTimeout(function() {
							assert(spy.called, 'Event did not fire in 1000ms.');
							done();
						}, 1000);

						addingConfig.rendered = spy;

						tableEle.igGrid(config);
					});

					it("should trigger the 'editStarting' handler before cell editing starts.", function(done) {
						var config = jQuery.extend(true, {}, baseTableConfiguration),
							addingConfig = config.features.find(function(feature) {
								return feature.name === "Adding";
							}),
							timer;

						function spy() {
							clearTimeout(timer);
							done();
						}

						sinon.spy(spy);

						timer = setTimeout(function() {
							assert(spy.called, 'Event did not fire in 1000ms.');
							done();
						}, 1000);

						addingConfig.editStarting = spy;

						addingConfig.rendered = function() {
							tableEle.igGridAdding("startEdit");
						};

						tableEle.igGrid(config);
					});

					it("should trigger the 'editStarted' handler after cell editing starts.", function(done) {
						var config = jQuery.extend(true, {}, baseTableConfiguration),
							addingConfig = config.features.find(function(feature) {
								return feature.name === "Adding";
							}),
							timer;

						function spy() {
							clearTimeout(timer);
							done();
						}

						sinon.spy(spy);

						timer = setTimeout(function() {
							assert(spy.called, 'Event did not fire in 1000ms.');
							done();
						}, 1000);

						addingConfig.editStarted = spy;

						addingConfig.rendered = function() {
							tableEle.igGridAdding("startEdit");
						};

						tableEle.igGrid(config);
					});

					it("should trigger the 'rowAdding' handler before commiting a row.", function(done) {
						var config = jQuery.extend(true, {}, baseTableConfiguration),
							addingConfig = config.features.find(function(feature) {
								return feature.name === "Adding";
							}),
							timer, addingWidget;

						function spy() {
							clearTimeout(timer);
							done();
						}

						sinon.spy(spy);

						timer = setTimeout(function() {
							assert(spy.called, 'Event did not fire in 1000ms.');
							done();
						}, 1000);

						addingConfig.rowAdding = spy;

						addingConfig.rendered = function() {
							addingWidget = tableEle.data("Poptart-igGridAdding");
							addingWidget._startEdit();
							addingWidget._commitFromKeyboard(new jQuery.Event("keypress"));
						};

						tableEle.igGrid(config);
					});

					it("should trigger the 'rowAdded' handler before commiting a row.", function(done) {
						var config = jQuery.extend(true, {}, baseTableConfiguration),
							addingConfig = config.features.find(function(feature) {
								return feature.name === "Adding";
							}),
							timer, addingWidget;

						function spy() {
							clearTimeout(timer);
							done();
						}

						sinon.spy(spy);

						timer = setTimeout(function() {
							assert(spy.called, 'Event did not fire in 1000ms.');
							done();
						}, 1000);

						addingConfig.rowAdded = spy;

						addingConfig.rendered = function() {
							addingWidget = tableEle.data("Poptart-igGridAdding");
							addingWidget._startEdit();
							addingWidget._commitFromKeyboard(new jQuery.Event("keypress"));
						};

						tableEle.igGrid(config);
					});
				});
			});
		});
	});
});