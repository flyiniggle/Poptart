var assert = chai.assert;

describe("Poptart", function() {
	describe("#basic", function() {
		it("should return a map", function() {
			assert.isObject(Poptart, "Poptart is not a map.");
		});
	});

	describe("#infragistics", function() {
		describe("#adding", function() {
			it("should add a new adding row", function() {
				var tableEle = jQuery("<table></table>"),
					addingRowSelector = ".ui-iggrid-adding-row",
					addingRowsLength;

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

				tableEle.igGridAdding("addAddingRow");
				addingRowsLength = jQuery(addingRowSelector).length;
				assert.equal(addingRowsLength, 2, "Expected 2 adding rows but found " + addingRowsLength);

				tableEle.igGridAdding("addAddingRow");
				addingRowsLength = jQuery(addingRowSelector).length;
				assert.equal(addingRowsLength, 3, "Expected 2 adding rows but found " + addingRowsLength);

			});
		});
	});
});