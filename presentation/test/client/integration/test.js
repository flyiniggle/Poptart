var assert = chai.assert;

describe("Poptart", function() {
	describe("#infragistics", function() {
		describe("#Adding", function() {
			var tableEle = jQuery("<table></table>"),
				baseTableConfiguration,
				addingWidget;

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

							config.features.find(function(feature) {
								return feature.name === "Adding";
							}).rendered = function() {
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
							addingConfig.editAddingCellEnded = function() {
								assert.equal(addingWidget._getColumn(column).value, newVal, "Cell did not save properly.");
								assert.isUndefined(addingWidget.activeEditor, "Editor did not close.");
								done();
							};

							tableEle.igGrid(config);

						});

						it("should close the editor and discard changes.", function() {
							tableEle.igGrid(baseTableConfiguration);
							addingWidget = tableEle.data("Poptart-igGridAdding");
							//tableEle.igGridAdding(false);
						});
					});
				});
			});
		});
	});
});