var assert = chai.assert;

describe("Poptart", function() {
	describe("#infragistics", function() {
		describe("#tableAdding", function() {
			var tableEle = jQuery("<table></table>");

			beforeEach(function() {
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
			});

			afterEach(function() {
				tableEle.igGrid("destroy");
			});

			it("should start editing the adding row", function() {
				tableEle.igGridAdding("startEdit");
				tableEle.find(".ui-iggrid-adding-row-cell:first").should.have.class("ui-iggrid-editingcell");
			});

			it("should start editing the text column of the adding row", function() {
				var firstAddingRowId = jQuery(".ui-iggrid-adding-row:first").data("rowId");

				tableEle.igGridAdding("startEdit", "text");
				jQuery("#" + firstAddingRowId + "_text").should.have.class("ui-iggrid-editingcell");
			});

			it("should save and trigger right navigation when pressing tab.", function() {
				var addingWidget = tableEle.data("Poptart-igGridAdding"),
					column = "number",
					event;

				sinon.spy(addingWidget, "_navigateRight");
				sinon.spy(addingWidget, "_saveEdit");
				addingWidget._startEdit(column);
				event = new jQuery.Event("keypress",
					{
						keyCode: jQuery.ui.keyCode.TAB,
						target: addingWidget.activeEditor.providerWrapper.find("input")[0]
					});
				addingWidget.activeEditor.providerWrapper.trigger(event);

				assert.isTrue(addingWidget._navigateRight.calledOnce, "_navigateRight was not called exactly once.");
				assert.isTrue(addingWidget._saveEdit.calledOnce, "_saveEdit was not called.");
			});

			it("should save and trigger left navigation when pressing shift + tab.", function() {
				var addingWidget = tableEle.data("Poptart-igGridAdding"),
					column = "text",
					event;

				sinon.spy(addingWidget, "_navigateLeft");
				sinon.spy(addingWidget, "_saveEdit");
				addingWidget._startEdit(column);
				event = new jQuery.Event("keypress",
					{
						keyCode: jQuery.ui.keyCode.TAB,
						target: addingWidget.activeEditor.providerWrapper.find("input")[0],
						shiftKey: true
					});
				addingWidget.activeEditor.providerWrapper.trigger(event);

				assert.isTrue(addingWidget._navigateLeft.calledOnce, "_navigateLeft was not called exactly once.");
				assert.isTrue(addingWidget._saveEdit.calledOnce, "_saveEdit was not called.");
			});

			it("should commit the adding row when enter is pressed.", function() {
			});
		});
	});
});