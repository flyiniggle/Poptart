var assert = chai.assert;

describe("Poptart", function() {
	describe("#infragistics", function() {
		describe("#tableAdding", function() {
			var tableEle = jQuery("<table></table>");

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
								{columnKey: "number", readOnly: false},
								{columnKey: "text", readOnly: false},
								{columnKey: "bool", readOnly: false},
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
			});

			it("should add a new adding row", function() {
				var addingRowSelector = ".ui-iggrid-adding-row",
					addingRowsLength;

				tableEle.igGridAdding("addAddingRow");
				addingRowsLength = jQuery(addingRowSelector).length;
				assert.equal(addingRowsLength, 2, "Expected 2 adding rows but found " + addingRowsLength);

				tableEle.igGridAdding("addAddingRow");
				addingRowsLength = jQuery(addingRowSelector).length;
				assert.equal(addingRowsLength, 3, "Expected 2 adding rows but found " + addingRowsLength);

			});

			it("should start editing the first adding row", function() {

				tableEle.igGridAdding("startEditCell", 0);

				tableEle.find(".ui-iggrid-adding-row-cell:first").should.have.class("ui-iggrid-editingcell");
			});
		});
	});
});