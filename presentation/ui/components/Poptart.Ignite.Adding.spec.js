describe("#infragistics", function() {
	describe("#Adding", function() {
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
						const configInstance = Object.create(loaderConfig, {});

						configInstance.resources = "igGrid.Updating.Adding,igCombo";
						configInstance.ready = function() {
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
						};

						loader(configInstance);
					});

					it("should start editing the first column of the adding row", function(done) {
						const configInstance = Object.create(loaderConfig, {});

						configInstance.resources = "igGrid.Updating.Adding,igCombo";
						configInstance.ready = function() {
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
						};

						loader(configInstance);
					});
				});

				describe("endEdit", function() {
					it("should close the editor and save the value.", function(done) {
						const configInstance = Object.create(loaderConfig, {});

						configInstance.resources = "igGrid.Updating.Adding,igCombo";
						configInstance.ready = function() {
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
						};

						loader(configInstance);

					});

					it("should close the editor and discard changes.", function(done) {
						const configInstance = Object.create(loaderConfig, {});

						configInstance.resources = "igGrid.Updating.Adding,igCombo";
						configInstance.ready = function() {
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
						};
						loader(configInstance);
					});
				});
			});

			describe("events", function() {
				it("should trigger the 'rendering' handler before rendering.", function(done) {
					const configInstance = Object.create(loaderConfig, {});

					configInstance.resources = "igGrid.Updating.Adding,igCombo";
					configInstance.ready = function() {
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
					};

					loader(configInstance);
				});

				it("should trigger the 'rendered' handler after rendering.", function(done) {
					const configInstance = Object.create(loaderConfig, {});

					configInstance.resources = "igGrid.Updating.Adding,igCombo";
					configInstance.ready = function() {
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
					};

					loader(configInstance);
				});

				it("should trigger the 'editStarting' handler before cell editing starts.", function(done) {
					const configInstance = Object.create(loaderConfig, {});

					configInstance.resources = "igGrid.Updating.Adding,igCombo";
					configInstance.ready = function() {
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
					};

					loader(configInstance);
				});

				it("should trigger the 'editStarted' handler after cell editing starts.", function(done) {
					const configInstance = Object.create(loaderConfig, {});

					configInstance.resources = "igGrid.Updating.Adding,igCombo";
					configInstance.ready = function() {
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
					};

					loader(configInstance);
				});

				it("should trigger the 'rowAdding' handler before commiting a row.", function(done) {
					const configInstance = Object.create(loaderConfig, {});

					configInstance.resources = "igGrid.Updating.Adding,igCombo";
					configInstance.ready = function() {
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
					};

					loader(configInstance);
				});

				it("should trigger the 'rowAdded' handler before commiting a row.", function(done) {
					const configInstance = Object.create(loaderConfig, {});

					configInstance.resources = "igGrid.Updating.Adding,igCombo";
					configInstance.ready = function() {
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
					};

					loader(configInstance);
				});
			});
		});
	});
});