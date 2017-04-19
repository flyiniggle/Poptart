(function() {
	"use strict";

	var addingRowIdPrefix = "addingRow",
		dataModel, defaultValues;

	dataModel = {
		addNewRow: function(rowId, row) {
			var newRowModel = {
				rowId: rowId,
				row: row,
				cells: this.visibleColumns.map(function(column) {
					return {
						key: column.key,
						cell: jQuery(row).find("#" + rowId + "_" + column.key)
					};
				}),
				columnData: this.columnSettings.map(function(column) {
					return {
						key: column.columnKey,
						value: column.default || this.getDefaultValue(column)
					};
				}.bind(this))
			};

			this.addingRow = newRowModel;

			return newRowModel;
		},
		removeRow: function() {
			delete this.addingRow;
		},
		getRow: function() {
			return this.addingRow;
		},
		getCell: function(columnKey) {
			return this.addingRow.cells.find(function(singleCell) {
				return singleCell.key === columnKey;
			});
		},
		getColumnData: function(columnKey) {
			return this.addingRow.columnData.find(function(column) {
				return column.key === columnKey;
			});
		},
		updateColumnData: function(columnKey, value) {
			var cell;

			cell = this.addingRow.columnData.find(function(column) {
				return column.key === columnKey;
			});

			cell.value = value;
			return cell;
		},
		getDefaultValue: function(columnSetting) {
			var dataType = columnSetting.dataType,
				defaultValue;

			defaultValue = defaultValues[dataType];

			return defaultValue === undefined ? "" : defaultValue;
		}
	};

	defaultValues = {
		"object": {},
		"combo": "",
		"bool": false,
		"number": 0,
		"text": "",
		"percent": 0
	};

	jQuery.widget("Poptart.igGridAdding", {
		options: {
			columnSettings: [],
			startEditTriggers: []
		},
		events: {
			editAddingRowStarting: "editAddingRowStarting",
			editAddingRowStarted: "editAddingRowStarted",
			editAddingCellStarting: "editAddingCellStarting",
			editAddingCellStarted: "editAddingCellStarted",
			editAddingCellEnding: "editAddingCellEnding",
			editAddingCellEnded: "editAddingCellEnded",
			rowAddingAdding: "rowAdding",
			rowAddingAdded: "rowAdded"
		},
		css: {
			addingRow: "ui-iggrid-adding-row",
			addRowBarCell: "ui-iggrid-addingBarCell",
			addRowButton: "ui-iggrid-adding-add-row-button",
			editingCell: "ui-iggrid-editingcell",
			editor: "ui-iggrid-editor"
		},
		_create: function() {
			this.model = Object.create(dataModel);
			this.addingRowCounter = 0;
		},
		startEditCell: function(row, columnKey) {
			var rowModel, columnIsReadOnly;

			if(!row) {
				throw new TypeError("The parameter 'row' must be a valid row data model reference or row ID number.");
			}

			if(!columnKey) {
				throw new TypeError("The parameter 'columnKey' must be specified.");
			}

			rowModel = this._getRow(row);

			columnIsReadOnly = this._getColumnSettings(columnKey).readOnly;

			if(columnIsReadOnly) {
				throw new TypeError("The column " + columnKey + " is read only.");
			}

			return this._startEditCell(rowModel, columnKey);
		},
		endEditCell: function(row, columnKey, update) {
			if (update) {
				this._saveEdit();
			} else {
				this._cancelEdit();
			}
		},
		startEdit: function(columnKey) {
			var columnIsReadOnly;

			columnIsReadOnly = this._getColumnSettings(columnKey).readOnly;

			if(columnIsReadOnly) {
				throw new TypeError("The column " + columnKey + " is read only.");
			}

			return this._startEdit(columnKey);
		},
		_createHandlers: function() {
			this._stopEditingHandler = this._stopEditingHandler || jQuery.proxy(this._cancelEdit, this);
			this._gridHandlers = this._gridHandlers ||
				{
					stopEditing: this._stopEditingHandler,
					gridDataRendering: jQuery.proxy(this._gridDataRendering, this),
					rowsRendered: jQuery.proxy(this._rowsRendered, this),
					headerRendering: jQuery.proxy(this._processReadOnly, this),
					headerRendered: jQuery.proxy(this._headerRendered, this),
					rendered: jQuery.proxy(this._headerRendered, this),
					virtualFrameChanging: jQuery.proxy(this._virtPreRender, this),
					virtualFrameChanged: jQuery.proxy(this._virtPostRender, this),
					columnsCollectionModified: jQuery.proxy(this._columnsModified, this)
				};
			this._handlers = this._handlers ||
				{
					mouseDown: jQuery.proxy(this._mouseDown, this),
					clickTrigger: jQuery.proxy(this._clickTrigger, this),
					keyDown: jQuery.proxy(this._keyDown, this),
					focus: jQuery.proxy(this._focus, this),
					blur: jQuery.proxy(this._blur, this),
					touchStart: jQuery.proxy(this._touchStart, this),
					touchEnd: jQuery.proxy(this._touchEnd, this),
					pointerDown: jQuery.proxy(this._pointerDown, this),
					pointerUp: jQuery.proxy(this._pointerUp, this),
					mouseEnter: jQuery.proxy(this._rowMouseEnter, this),
					pointerEnter: jQuery.proxy(this._rowPointerEnter, this),
					mouseLeave: jQuery.proxy(this._containerMouseLeave, this),
					pointerLeave: jQuery.proxy(this._containerPointerLeave, this),
					scroll: jQuery.proxy(this._scroll, this)
				};
			this._buttonHandlers = this._buttonHandlers ||
				{
					mouseEnter: jQuery.proxy(this._buttonMouseEnter, this),
					mouseLeave: jQuery.proxy(this._buttonMouseLeave, this),
					focus: jQuery.proxy(this._buttonFocus, this),
					blur: jQuery.proxy(this._buttonBlur, this),
					doneClick: jQuery.proxy(this._doneButtonClick, this),
					doneKeyUp: jQuery.proxy(this._doneButtonKeyUp, this),
					cancelClick: this._stopEditingHandler,
					cancelKeyUp: jQuery.proxy(this._cancelButtonKeyUp, this),
					deleteClick: jQuery.proxy(this._deleteButtonClick, this),
					touchDeleteClick: jQuery.proxy(this._touchDeleteButtonClick, this),
					touchDeleteKeyUp: jQuery.proxy(this._touchDeleteButtonKeyUp, this)
				};
			this._addingRowHandlers = this._addingRowHandlers ||
				{
					"mouseenter": this._mouseEnter.bind(this),
					"mouseleave": this._mouseLeave.bind(this),
					"blur": this._blur.bind(this),
					"keydown": this._keyDown.bind(this),
					"keypress": this._keyPress.bind(this),
					"click": this._addingRowClick.bind(this)
				};
			this._validationHandlers = this._validationHandlers ||
				{
					errorShowing: jQuery.proxy(this._editorErrorShowing, this),
					errorShown: jQuery.proxy(this._editorErrorShown, this),
					errorHidden: jQuery.proxy(this._editorErrorHidden, this)
				};
			this._editorCallbacks = this._editorCallbacks ||
				{
					keyDown: jQuery.proxy(this._editorKeyDown, this),
					textChanged: jQuery.proxy(this._editorTextChanged, this)
				};
		},
		_bindGridEvents: function() {
			this.grid.element.on({
				iggriduidirty: this._gridHandlers.stopEditing,
				iggridresizingcolumnresizing: this._gridHandlers.stopEditing,
				ighierarchicalgridrowexpanded: this._gridHandlers.stopEditing,
				iggriddatarendering: this._gridHandlers.gridDataRendering,
				iggridrowsrendered: this._gridHandlers.rowsRendered,
				iggridvirtualrendering: this._gridHandlers.virtualFrameChanging,
				iggridvirtualrecordsrender: this._gridHandlers.virtualFrameChanged,
				iggridcolumnscollectionmodified: this._gridHandlers.columnsCollectionModified,
				iggridheaderrendering: this._gridHandlers.headerRendering,
				iggridrendered: this._gridHandlers.rendered
			});
		},
		_analyzeEditTriggers: function() {
			var trg = this.options.startEditTriggers, key;

			this._editTriggers = {click: false, dblclick: false, f2: false, enter: false};
			for(key in this._editTriggers) {
				if(this._editTriggers.hasOwnProperty(key)) {
					if(jQuery.type(trg) === "array") {
						this._editTriggers[key] = jQuery.inArray(key, trg);
					} else {
						this._editTriggers[key] = trg.toLowerCase().indexOf(key) >= 0;
					}
				}
			}
		},
		_headerRendered: function(evt, ui) {
			var gridColumnSettings, fixed, thead;

			if(ui.owner.id() !== this.grid.id()) {
				return;
			}

			gridColumnSettings = this.grid.options.columns.map(function(settings) {
				var copiedSettings = {};

				copiedSettings.columnKey = settings.key;
				copiedSettings.dataType = settings.dataType;

				if(settings.formula) {
					copiedSettings.formula = settings.formula;
				}
				if(settings.formatter) {
					copiedSettings.formatter = settings.formatter;
				}
				if(settings.template) {
					copiedSettings.template = settings.template;
				}
				if(settings.mapper) {
					copiedSettings.mapper = settings.mapper;
				}
				if(settings.hidden) {
					copiedSettings.hidden = settings.hidden;
					copiedSettings.readOnly = true;
				}
				if(settings.unbound) {
					copiedSettings.unbound = settings.unbound;
					copiedSettings.readOnly = true;
				}

				return copiedSettings;
			});

			this.element.igGridUpdating("option", "columnSettings").forEach(function(settings) {
				var gridSettings = gridColumnSettings.find(function(i) {
					return i.columnKey === settings.columnKey;
				});

				jQuery.extend(true, gridSettings, settings);
			});

			this.options.columnSettings.forEach(function(settings) {
				var gridSettings = gridColumnSettings.find(function(i) {
					return i.columnKey === settings.columnKey;
				});

				jQuery.extend(true, gridSettings, settings);
			});

			fixed = this.grid.hasFixedColumns();
			if(fixed) {
				thead = this.grid.fixedHeadersTable().children("thead");
			} else {
				thead = this.grid.headersTable().children("thead");
			}

			thead.append(this._createAddBarHtml())
				.on("mouseenter", "." + this.css.addingRow, this._addingRowHandlers.mouseenter)
				.on("mouseleave", "." + this.css.addingRow, this._addingRowHandlers.mouseleave);

			this.model.columnSettings = this.options.columnSettings = gridColumnSettings;
			this.model.visibleColumns = this.grid._visibleColumns(this.grid.hasFixedColumns());
			this._addAddingRow(evt);
		},
		_addingRowClick: function(evt) {
			var target = evt.target,
				targetType = target.nodeName.toLowerCase(),
				columnKey = targetType === "td" ? jQuery(target).data("columnKey") : null,
				columnIsReadOnly;

			if (this.activeEditor && this.activeEditor.cell.cell[0] === evt.currentTarget) {
				return false;
			}

			if(columnKey) {
				columnIsReadOnly = this._getColumnSettings(columnKey).readOnly;
			}

			if(targetType === "td" && !columnIsReadOnly) {
				this._startEdit(columnKey);
			} else {
				this._startEdit();
			}
		},
		_keyPress: function(evt) {
			if(jQuery(evt.currentTarget).hasClass(this.css.addRowButton)) {
				if(evt.keyCode === jQuery.ui.keyCode.TAB) {
					if(evt.shiftKey) {
						this._navigateFromAddButton();
					} else {
						evt.preventDefault();
						evt.stopPropagation();
						return false;
					}
				} else if(evt.keyCode === jQuery.ui.keyCode.ENTER) {
					jQuery(evt.currentTarget).trigger("mousedown");
					this._startEdit();
				}
			} else if(evt.keyCode === jQuery.ui.keyCode.TAB) {
				evt.preventDefault();
				evt.stopPropagation();
				if(evt.shiftKey) {
					this._navigateLeft();
				} else {
					this._navigateRight();
				}
			}
		},
		_keyDown: function(evt) {
			if(evt.keyCode === jQuery.ui.keyCode.ENTER) {
				evt.preventDefault();
				evt.stopPropagation();
				this.activeEditor.providerWrapper.find("input, div.ui-checkbox-container").blur();
				this._removeAddingButton();
				this._commitRow();
				if(this.model.model.length < 1) {
					this._addAddingRow();
				}
				this._startEdit();
			}
		},
		_blur: function(evt) {
			var field;

			field = this.activeEditor.providerWrapper;
			field.off("blur", "input, div.ui-checkbox-container", this._addingRowHandlers.blur);
			field.find("input").blur();
			this._saveEdit(evt.data.columnKey, this.activeEditor.provider.getValue());
			this._endRowEdit();

			return false;
		},
		_mouseEnter: function() {
			var row = this.model.addingRow.row;

			row.children("td").addClass("ui-state-hover");
			if(!this.activeEditor) {
				this._addAddingButton(row.data("rowId"));
			}
		},
		_mouseLeave: function() {
			this.model.addingRow.row.children("td").removeClass("ui-state-hover");

			if(!this.activeEditor) {
				this._removeAddingButton();
			}
		},
		_navigateRight: function() {
			var rowModel, field,
				cells, currentCellIndex, nextEditableCell;

			field = this.activeEditor.providerWrapper;
			field.off("blur", "input, div.ui-checkbox-container", this._addingRowHandlers.blur);
			field.find("input").blur();

			rowModel = this.model.addingRow;

			cells = rowModel.cells.filter((function(cell) {
				return !this._getColumnSettings(cell.key).readOnly;
			}).bind(this));

			currentCellIndex = cells.indexOf(this.activeEditor.cell);

			nextEditableCell = (function nextEditableCell(cells, currentCellIndex) {
				var isLastCell = (currentCellIndex === (cells.length - 1)),
					nextCell;

				if(isLastCell) {
					return false;
				}

				nextCell = this._getColumnSettings(cells[++currentCellIndex].key);

				return (nextCell.readOnly === false) ? nextCell : nextEditableCell.call(this, cells, currentCellIndex);
			}).call(this, cells, currentCellIndex);

			this._saveEdit(this.activeEditor.cell.key, this.activeEditor.provider.getValue());
			if(nextEditableCell) {
				this._startEdit(nextEditableCell.columnKey);
			} else {
				jQuery("." + this.css.addRowButton).focus();
			}
		},
		_navigateLeft: function() {
			var rowModel, field, cells, currentCellIndex, nextEditableCell;

			if(!this.activeEditor) {
				return;
			}
			field = this.activeEditor.providerWrapper;
			field.off("blur", "input, div.ui-checkbox-container", this._addingRowHandlers.blur);
			field.find("input").blur();

			rowModel = this.model.addingRow;

			cells = rowModel.cells.filter((function(cell) {
				return this._getColumnSettings(cell.key).readOnly === false;
			}).bind(this));

			currentCellIndex = cells.indexOf(this.activeEditor.cell);

			nextEditableCell = (function nextEditableCell(cells, currentCellIndex) {
				var isFirstCell = (currentCellIndex === 0),
					nextCell;

				if(isFirstCell) {
					return false;
				}

				nextCell = this._getColumnSettings(cells[--currentCellIndex].key);

				return (nextCell.readOnly === false) ? nextCell : nextEditableCell.call(this, cells, currentCellIndex);
			}).call(this, cells, currentCellIndex);

			this._saveEdit(this.activeEditor.cell.key, this.activeEditor.provider.getValue());
			if(nextEditableCell) {
				this._startEdit(nextEditableCell.columnKey);
			}
		},
		_navigateFromAddButton: function() {
			var cells, lastEditableCell;

			cells = this.model.addingRow.cells.filter((function(cell) {
				return this._getColumnSettings(cell.key).readOnly === false;
			}).bind(this));
			lastEditableCell = Array.from(cells).reverse()[0].key;
			this._endRowEdit();
			this._startEditCell(lastEditableCell);
		},
		_generateDummyLayout: function(cols) {
			var i, layout = [[]];

			for(i = 0; i < cols.length; i++) {
				layout[0].push({col: cols[i], rs: 1, cs: 1});
			}
			return layout;
		},
		_createAddBarHtml: function() {
			var bar = jQuery("<tr></tr>"),
				cell = jQuery("<td></td>");

			cell.attr("colspan", this.grid._visibleColumns().length)
				.addClass(this.css.addRowBarCell)
				.appendTo(bar);

			bar.attr("id", "addingRowBar");

			return bar;
		},
		_createAddingRowHtml: function(rowId, visibleColumns, fixed) {
			var newRow = document.createElement("tr"),
				layout, i, j, settings;

			layout = this.grid._isMultiRowGrid() ? this.grid._multiRowLayoutRenderingHelper(fixed) : this._generateDummyLayout(visibleColumns);
			for(i = 0; i < layout.length; i++) {
				for(j = 0; j < layout[i].length; j++) {
					settings = this._getColumnSettings(layout[i][j].col.key);
					jQuery("<td></td>")
						.html(this.model.getDefaultValue(settings))
						.data("columnKey", layout[i][j].col.key)
						.attr("id", rowId + "_" + layout[i][j].col.key)
						.attr("aria-describedby", this.grid.id() + "_" + layout[i][j].col.key)
						.attr("colspan", layout[i][j].cs || 1)
						.attr("rowspan", layout[i][j].rs || 1)
						.addClass("ui-iggrid-adding-row-cell")
						.appendTo(newRow);
				}
			}

			jQuery(newRow)
				.data("rowId", rowId)
				.addClass(this.css.addingRow)
				.on("click", "td", this._addingRowHandlers.click);

			return jQuery(newRow);
		},
		_createAddingRowButtonsHtml: function() {
			var container = jQuery("<div></div>"),
				addButton = jQuery("<button></button>");

			addButton.addClass("ion-android-checkmark-circle btn btn-success ")
				.addClass(this.css.addRowButton)
				.attr("type", "button")
				.appendTo(container);

			container.addClass("ui-iggrid-adding-add-row-button-container");

			return container;
		},
		_addAddingButton: function() {
			var rowModel = this.model.addingRow,
				addingButton = this._createAddingRowButtonsHtml(),
				rowLocation;

			addingButton.appendTo(rowModel.row)
				.on("mousedown", "button", function() {
					this._removeAddingButton();
					this._commitRow(rowModel);
					this._addAddingRow();
				}.bind(this))
				.on("keypress", "button", this._addingRowHandlers.keypress);

			rowLocation = rowModel.row.offset();

			rowLocation.left += this.grid.element.width();
			rowLocation.left -= (addingButton.width() + 10);
			rowLocation.top += (rowModel.row.height() - 1);

			addingButton.offset(rowLocation);
		},
		_removeAddingButton: function() {
			jQuery(".ui-iggrid-adding-add-row-button-container").remove();
		},
		_startEdit: function(column) {
			var visibleCols = this.grid._visibleColumns(),
				newEditor, visibleColumnKeys, columnKey, element,
				storedValue, startingValue, firstEditableColumn;

			if(!column) {
				visibleColumnKeys = visibleCols.map(function(item) {
					return item.key;
				});
				firstEditableColumn = this.options.columnSettings.find(function(item) {
					return (!item.readOnly && visibleColumnKeys.indexOf(item.columnKey) >= 0);
				});

				if(!firstEditableColumn) {
					throw new TypeError("There are no visible editable columns.");
				}

				return this.startEdit(firstEditableColumn.columnKey);
			}

			if(!this._trigger(this.events.editAddingCellStarting)) {
				return false;
			}

			if(!column) {
				visibleColumnKeys = visibleCols.map(function(item) {
					return item.key;
				});
				columnKey = this.options.columnSettings.find(function(item) {
					return (!item.readOnly && visibleColumnKeys.indexOf(item.columnKey) >= 0);
				}).columnKey;
			} else {
				columnKey = column;
			}

			storedValue = this.model.getColumnData(columnKey).value;

			element = this.model.getCell(columnKey);
			element.cell.addClass(this.css.editingCell);

			newEditor = this._getEditorForCell(columnKey, element);
			newEditor.providerWrapper
				.prependTo(element.cell)
				.on(
					"keypress",
					"input, div.ui-checkbox-container",
					{columnKey: columnKey},
					this._addingRowHandlers.keypress
				)
				.on(
					"blur",
					"input, div.ui-checkbox-container",
					{columnKey: columnKey},
					this._addingRowHandlers.blur
				);
			if(this._getColumnSettings(columnKey).editorType === "combo") {
				newEditor.providerWrapper.on("keydown", this._addingRowHandlers.keydown);
			}

			this._activateEditor(newEditor);
			startingValue = (storedValue === undefined) ? defaultValues[newEditor.editorType] : storedValue;
			newEditor.provider.setValue(startingValue);
			this._addAddingButton();
			this._trigger(this.events.editAddingCellStarted);
			/*

			args = {owner: this, rowID: rowId, columnIndex: this.grid.getVisibleIndexByKey(columnKey), columnKey: columnKey, editor: editor, value: value, rowAdding: isAdding};

			this._trigger(this.events.editCellStarted, evt, args);
			if(focus && editor) {
				this._activateEditor(providerWrapper)
			}*/
		},
		_getEditorForCell: function(columnKey, cell) {
			var element = cell.cell,
				width = this._isLastScrollableCell(element) ? element.outerWidth() - this.grid._scrollbarWidth() : element.outerWidth(),
				cellPaddingLeft = parseInt(element.css("paddingLeft").split("px")[0]) + 1,
				cellPaddingRight = parseInt(element.css("paddingRight").split("px")[0]) + 1,
				cellPaddingTop = parseInt(element.css("paddingTop").split("px")[0]) + 2 ,
				cellPaddingBottom = parseInt(element.css("paddingBottom").split("px")[0]) - 1,
				providerData, columnSettings, editorOptions,
				providerWrapper, provider;

			columnSettings = this._getColumnSettings(columnKey);

			providerData = this._getProviderForKey(columnKey, columnSettings);
			provider = providerData.provider;

			editorOptions = columnSettings.editorOptions || {};

			if(!((columnSettings.editorType === "checkbox") || (columnSettings.dataType === "bool"))) {
				editorOptions.width = editorOptions.width || width + "px";
				editorOptions.height = element.outerHeight() + "px";
			} else {
				editorOptions.width = "16px";
				editorOptions.height = "16px";
			}

			providerWrapper = provider.createEditor(this._editorCallbacks, columnKey, editorOptions, this._getNextTabIndex(), columnSettings.format);

			providerWrapper.igEditorFilter({provider: provider});
			providerWrapper
				.addClass(this.css.editor)
				.css({
					"position": "absolute",
					"z-index": 1,
					"marginLeft": "-" + cellPaddingLeft + "px",
					"marginRight": "-" + cellPaddingRight,
					"marginTop": "-" + cellPaddingTop + "px",
					"marginBottom": "-" + cellPaddingBottom,
					"width": width + "px",
					"height": element.outerHeight() + "px"
				});

			return {
				provider: provider,
				providerWrapper: providerWrapper,
				cell: cell,
				editorType: providerData.editorType
			};
		},
		_getProviderForKey: function(column, setting) {
			var dataType = setting ? setting.dataType : null,
				format = column.format,
				editorType = setting ? setting.editorType : null,
				provider;

			if(dataType === "bool") {
				editorType = "checkbox";
			} else if (format === "currency") {
				editorType = "currency";
			}

			switch(editorType) {
			case "checkbox":
				provider = new jQuery.ig.EditorProviderBoolean;
				break;
			case "combo":
				if(dataType === "object") {
					provider = new jQuery.ig.EditorProviderObjectCombo;
				} else {
					provider = new jQuery.ig.EditorProviderCombo;
				}
				break;
			case "rating":
				provider = new jQuery.ig.EditorProviderRating;
				break;
			case "mask":
				provider = new jQuery.ig.EditorProviderMask;
				break;
			case "currency":
				provider = new jQuery.ig.EditorProviderCurrency;
				break;
			case "percent":
				provider = new jQuery.ig.EditorProviderPercent;
				break;
			case "numeric":
				provider = new jQuery.ig.EditorProviderNumeric;
				break;
			case "text":
				provider = new jQuery.ig.EditorProviderText;
				break;
			case "datePicker":
				provider = new jQuery.ig.EditorProviderDatePicker;
				break;
			case "date":
				provider = new jQuery.ig.EditorProviderDate;
				break;
			default:
				throw new TypeError("Please provide an editor type.");
			}

			return {provider: provider, editorType: editorType};
		},
		_activateEditor: function(editor) {
			if(editor.providerWrapper.data("igEditorFilter")) {
				editor.providerWrapper.igEditorFilter("setFocus");
			}

			editor.provider.setSize();
			this.activeEditor = editor;
		},
		_cancelEdit: function(evt) {
			this._endCellEdit(evt);
		},
		_saveEdit: function(column, value) {
			var cell = this.model.getCell(column),
				columnSettings;

			columnSettings = this._getColumnSettings(cell.key);

			if(!value) {
				if(columnSettings.dataType === "object") {
					value = {};
				}
			}

			this.model.updateColumnData(column, value);
			this._updateUiCell(cell.cell, columnSettings, value);
			this._endCellEdit();
		},
		_endCellEdit: function() {
			this.activeEditor.providerWrapper.remove();
			this._updateUiRow();
			this.activeEditor.cell.cell.removeClass(this.css.editingCell);
			delete this.activeEditor;
		},
		_endRowEdit: function() {
			this._removeAddingButton();
		},
		_addAddingRow: function() {
			var rowId = addingRowIdPrefix + this.addingRowCounter++,
				fixed, visibleColumns,
				initialHiddenColumns, newAddingRow, i, j;

			if(!this._trigger(this.events.rowAddingAdding)) {
				return false;
			}

			visibleColumns = jQuery.extend([], this.grid._visibleColumns(fixed));
			initialHiddenColumns = this.grid._initialHiddenColumns;
			if(initialHiddenColumns && initialHiddenColumns.length) {
				for(i = 0; i < initialHiddenColumns.length; i++) {
					for(j = 0; j < visibleColumns.length; j++) {
						if(initialHiddenColumns[i].key === visibleColumns[j].key) {
							jQuery.ig.removeFromArray(visibleColumns, j, j);
							break;
						}
					}
				}
			}
			//numOfCols = this.grid._isMultiRowGrid() ? this.grid._recordHorizontalSize() : visibleColumns.length;
			newAddingRow = this._createAddingRowHtml(rowId, visibleColumns, fixed);
			this.model.addNewRow(rowId, newAddingRow);
			this._updateUiRow();
			jQuery("#addingRowBar").before(newAddingRow);
			this._trigger(this.events.rowAddingAdded);
		},
		_removeAddingRow: function() {
			this.model.addingRow.row.remove();
			this.model.removeRow();
		},
		_updateUiRow: function() {
			var visibleCols = this.grid._visibleColumns(),
				columnSettings = this.options.columnSettings,
				setting,
				settingFilter, i, value;

			settingFilter = function(visibleColumn) {
				return function(column) {
					return column.columnKey === visibleColumn.key;
				};
			};

			for(i = visibleCols.length - 1; i > -1; i--) {
				setting = columnSettings.find(settingFilter(visibleCols[i])) || {};

				if((setting.dataType === "object" && setting.hasOwnProperty("mapper")) || setting.hasOwnProperty("formula") || setting.hasOwnProperty("template")) {
					this._updateUiCell(this.model.getCell(visibleCols[i].key).cell, setting, value);
				}
			}
		},
		_updateUiCell: function(cell, settings, value) {
			var rowData = this._getRowForRendering();

			if(settings.formula) {
				cell.html(settings.formula(rowData));
			} else if(settings.template) {
				cell.html(jQuery.ig.tmpl(settings.template, rowData));
			} else if(settings.mapper) {
				value = value || this.model.addingRow.columnData.find(function(column) {
					return column.key === settings.columnKey;
				}).value;

				cell.html(settings.mapper(value));
			} else {
				cell.html(value);
			}

			return cell;
		},
		_commitRow: function() {
			var renderableRow = this._getRowForRendering(),
				renderer = this.options.newRowFormatter,
				newRowData;

			newRowData = renderer ? renderer(renderableRow) : renderableRow;
			this.element.igGridUpdating("addRow", newRowData);
			this._removeAddingRow();
		},
		_isLastScrollableCell: function(cell) {
			return cell && cell.is(":last-child");

			/*This is the original check from infragistics, but I don't know what all it does or if it's relevant to us
			(cell &&
				cell.is(":last-child") &&
				(parseInt(cell.css("padding-right"), 10) > 12 || this.grid._hscrollbar().is(":visible") && this.grid._hasVerticalScrollbar) &&
				this.grid.scrollContainer() &&
				this.grid.scrollContainer().has(cell).length);
			 */
		},
		_getNextTabIndex: function() {
			var gti = this.grid.options.tabIndex;

			return gti + 1;
		},
		_getRowForRendering: function() {
			var renderableRow = {};

			this.model.addingRow.columnData.forEach(function(column) {
				renderableRow[column.key] = column.value;
			});

			return renderableRow;
		},
		_getColumnSettings: function(columnKey) {
			var columnSettings;

			columnSettings = this.options.columnSettings.find(function(settings) {
				return settings.columnKey === columnKey;
			});

			return columnSettings || {};
		},
		_injectGrid: function(gridInstance, isRebind) {
			//var hg, cl;

			this.grid = gridInstance;
			if(isRebind) {
				return;
			}

			this._editors = this._editors || {};
			this._createHandlers();
			this._bindGridEvents();
			this._analyzeEditTriggers();
			/*
			if(this.grid.options._isHierarchicalGrid && this.grid._originalOptions) {
				if(this.options.inherit) {
					this.grid._shouldAlwaysRenderChildIndicator = this._childrenWithAddRowEnabled(this.grid.options, this.options.enableAddRow);
				} else {
					this.grid._shouldAlwaysRenderChildIndicator = this._childrenWithAddRowEnabled(this.grid.options);
				}
				if(!this.grid.dataSource.settings.schema.layouts) {
					hg = this.grid.element.closest(".ui-iggrid-root").data("igHierarchicalGrid");
					cl = [];
					hg._parseLayouts(cl, "", this.grid._originalOptions);
					this.grid.dataSource.settings.schema.layouts = cl;
				}
			}
			this._renderTouchUI = jQuery.ig.util.isTouch;
			if(window.navigator.msPointerEnabled || window.navigator.pointerEnabled) {
				this.grid.element.css("-ms-touch-action", "none");
				this.grid.element.css("touch-action", "none");
			}*/
		}
	});
})();