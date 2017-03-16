(function() {
	"use strict";

	var addingRowIdPrefix = "addingRow",
		dataModel;

	dataModel = {
		model: [],
		events: {
			updated: "modelUpdated"
		},
		addNewRow: function(rowId, row) {
			this.model.push({
				rowId: rowId,
				row: row,
				cells: this.visibleColumns.map(function(column) {
					return {
						key: column.key,
						cell: jQuery(row).find("#" + rowId + "_" + column.key)
					};

				}),
				columnData: this.columns.map(function(column) {
					return {
						key: column.key,
						value: ""
					};
				})
			});
			return this.model;
		},
		getRowById: function(id) {
			return this.model.find(function(row) {
				return row.rowId === id;
			});
		},
		getCell: function(row, columnKey) {
			var rowData = typeof row === "string" ? this.getRowById(row) : row;

			return rowData.cells.find(function(singleCell) {
				return singleCell.key === columnKey;
			});
		},
		getColumnData: function(row, columnKey) {
			var rowData = typeof row === "string" ? this.getRowById(row) : row;

			return rowData.columnData.find(function(column) {
				return column.key === columnKey;
			});
		},
		updateColumnData: function(row, columnKey, value) {
			var rowData = typeof row === "string" ? this.getRowById(row) : row,
				cell;

			cell = rowData.columnData.find(function(column) {
				return column.key === columnKey;
			});

			cell.value = value;
			return cell;
		}
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

			return this._startEditCell(rowModel.attr("id"), columnKey);
		},
		endEditCell: function(row, columnKey, update) {
			if (update) {
				this._saveEdit();
			} else {
				this._cancelEdit();
			}
		},
		startEditRow: function(row) {
			var rowModel;

			if(!row) {
				throw new TypeError("The parameter 'row' must be a valid row data model reference or row ID number.");
			}

			rowModel = this._getRow(row);

			return this._startEditRow(rowModel);
		},
		_addDSSuccessHandler: function() {
			var fS, grid = this.grid;

			if(this._addChangesSuccessHandler !== null && this._addChangesSuccessHandler !== undefined) {
				grid.dataSource._removeChangesSuccessHandler(this._addChangesSuccessHandler);
			}
			fS = this.options.saveChangesSuccessHandler;
			if(fS) {
				if(jQuery.type(fS) === "string" && window[fS] && jQuery.type(window[fS]) === "function") {
					fS = window[fS];
				}
			}
			if(jQuery.type(fS) !== "function") {
				fS = null;
			}
			this._addChangesSuccessHandler = function(data) {
				if(grid.rows().parent().find("." + grid.css.deletedRecord).length) {
					grid._renderData();
				}
				grid.rows().removeClass(grid.css.modifiedRecord);
				if(fS) {
					fS(data);
				}
			};
			grid.dataSource._addChangesSuccessHandler(this._addChangesSuccessHandler);
		},
		_addDSErrorHandler: function() {
			var fE;

			if(this._addChangesErrorHandler !== null && this._addChangesErrorHandler !== undefined) {
				this.grid.dataSource._removeChangesErrorHandler(this._addChangesErrorHandler);
			}
			if(this.options.saveChangesErrorHandler) {
				fE = this.options.saveChangesErrorHandler;
				if(jQuery.type(fE) === "string" && window[fE] && jQuery.type(window[fE]) === "function") {
					fE = window[fE];
				}
				if(jQuery.type(fE) === "function") {
					this._addChangesErrorHandler = function(jqXHR, textStatus, errorThrown) {
						fE(jqXHR, textStatus, errorThrown);
					};
					this.grid.dataSource._addChangesErrorHandler(this._addChangesErrorHandler);
				}
			}
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
			this._addingRowHandlers = this._addNewRowHandlers ||
				{
					//"focus": this._addRowFocus.bind(this),
					//"blur": this._addingRowBlur.bind(this),
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
				//iggridheaderrenderedinternal: this._gridHandlers.headerRendered,
				iggridrendered: this._gridHandlers.rendered
			});
		},
		_bindModelEvents: function() {
			var events = {};

			events[this.model.events.updated] = this._updateUiRow.bind(this);

			jQuery(this.model).on(events);
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
			if(ui.owner.id() !== this.grid.id()) {
				return;
			}
			this.options.columnSettings = jQuery.extend(this.element.igGridUpdating("option", "columnSettings"), this.options.columnSettings);
			this.options.columnSettings = this.options.columnSettings.map((function(settings) {
				var gridColumnSettings = this.grid.options.columns.find(function(gridColumn) {
					return gridColumn.key === settings.columnKey;
				});

				if(gridColumnSettings) {
					if(!settings.formula && gridColumnSettings.formula) {
						settings.formula = gridColumnSettings.formula;
					}

					if(!settings.template && gridColumnSettings.template) {
						settings.template = gridColumnSettings.template;
					}
				}

				return settings;
			}).bind(this));
			this.model.columns = this.grid.options.columns;
			this.model.visibleColumns = this.grid._visibleColumns(this.grid.hasFixedColumns());
			this._addAddingRow(evt);
		},
		_addingRowClick: function(evt) {
			var target = evt.target,
				targetType = target.nodeName.toLowerCase(),
				columnKey = targetType === "td" ? jQuery(target).data("columnKey") : null,
				row = (target.nodeName.toLowerCase() === "tr") ? jQuery(target) : jQuery(target.closest("tr")),
				columnIsReadOnly;

			if (this.activeEditor && jQuery.contains(this.activeEditor.providerWrapper[0], evt.target[0])) {
				return false;
			}

			if(columnKey) {
				columnIsReadOnly = this._getColumnSettings(columnKey).readOnly;
			}

			if(targetType === "td" && !columnIsReadOnly) {
				this._startEditCell(row.data("rowId"), columnKey);
			} else {
				this._startEditRow(row.data("rowId"));
			}
		},
		_generateDummyLayout: function(cols) {
			var i, layout = [[]];

			for(i = 0; i < cols.length; i++) {
				layout[0].push({col: cols[i], rs: 1, cs: 1});
			}
			return layout;
		},
		_createAddingRowHtml: function(rowId, visibleColumns, fixed) {
			var newRow = document.createElement("tr"),
				layout, i, j;

			layout = this.grid._isMultiRowGrid() ? this.grid._multiRowLayoutRenderingHelper(fixed) : this._generateDummyLayout(visibleColumns);
			for(i = 0; i < layout.length; i++) {
				for(j = 0; j < layout[i].length; j++) {
					jQuery("<td></td>")
						.html(j === 0 ? "Add..." : "")
						.data("columnKey", layout[i][j].col.key)
						.attr("id", rowId + "_" + layout[i][j].col.key)
						//.attr("aria-readonly", !!layout[i][j].col.readOnly)
						.attr("aria-describedby", this.grid.id() + "_" + layout[i][j].col.key)
						.attr("colspan", layout[i][j].cs || 1)
						.attr("rowspan", layout[i][j].rs || 1)
						.addClass("ui-iggrid-adding-row-cell")
						.appendTo(newRow);
				}
			}

			jQuery(newRow)
				.data("rowId", rowId)
				.addClass("ui-iggrid-adding-row")
				.on(this._addingRowHandlers);

			return newRow;
		},
		_addAddingRow: function(evt) {
			var rowId = addingRowIdPrefix + this.addingRowCounter++,
				fixed, thead, visibleColumns,
				initialHiddenColumns, newAddingRow, i, j;

			if(!this._trigger(this.events.rowAddingAdding, evt)) {
				return false;
			}

			fixed = this.grid.hasFixedColumns();
			if(fixed) {
				thead = this.grid.fixedHeadersTable().children("thead");
			} else {
				thead = this.grid.headersTable().children("thead");
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
			thead.append(newAddingRow);
			this._trigger(this.events.rowAddingAdded, evt);
		},
		_startEditRow: function(row) {
			var visibleCols = this.grid._visibleColumns(),
				rowModel = this._getRow(row),
				visibleColumnKeys, firstEditableColumn;

			visibleColumnKeys = visibleCols.map(function(item) {
				return item.key;
			});
			firstEditableColumn = this.options.columnSettings.find(function(item) {
				return (!item.readOnly && visibleColumnKeys.indexOf(item.columnKey) >= 0);
			});

			if(!firstEditableColumn) {
				throw new TypeError("There are no visible editable columns.");
			}

			return this._startEditCell(rowModel, firstEditableColumn.columnKey);
		},
		_startEditCell: function(row, column) {
			var visibleCols = this.grid._visibleColumns(),
				rowModel = this._getRow(row),
				visibleColumnKeys, columnKey, element;

			if(!this._trigger(this.events.editAddingCellStarting)) {
				return false;
			}

			if(!column) {
				visibleColumnKeys = visibleCols.map(function(item) {
					return item.key;
				});
				columnKey = this.options.columnSettings.find(function(item) {
					return (!item.readOnly && visibleColumnKeys.indexOf(item.columnKey) >= 0);
				}) || column;
			} else {
				columnKey = column;
			}

			element = this.model.getCell(rowModel, columnKey).cell;
			element.addClass(this.css.editingCell);

			this.activeEditor = this._getEditorForCell(columnKey, element);
			this.activeEditor.provider.setValue(0);
			this.activeEditor.providerWrapper
				.prependTo(element)
				.find("input")
				.on("blur",
					{rowModel: rowModel, columnKey: columnKey},
					(function(evt) {
						this._saveEdit(evt.data.rowModel, evt.data.columnKey, this.activeEditor.provider.getValue());
					}).bind(this))
				.focus();

			this._trigger(this.events.editAddingCellStarted);
			/*

			args = {owner: this, rowID: rowId, columnIndex: this.grid.getVisibleIndexByKey(columnKey), columnKey: columnKey, editor: editor, value: value, rowAdding: isAdding};

			this._trigger(this.events.editCellStarted, evt, args);
			if(focus && editor) {
				this._activateEditor(providerWrapper)
			}
			this.hideDeleteButton();
			this._editingForRowId = rowId;
			return true*/
		},
		_getEditorForCell: function(columnKey, element) {
			var width = this._isLastScrollableCell(element) ? element.outerWidth() - this.grid._scrollbarWidth() : element.outerWidth(),
				cellPaddingLeft = element.css("paddingLeft"),
				cellPaddingRight = element.css("paddingRight"),
				cellPaddingTop = element.css("paddingTop"),
				cellPaddingBottom = element.css("paddingBottom"),
				columnSettings, editorOptions,
				providerWrapper, provider;

			columnSettings = this._getColumnSettings(columnKey);

			provider = this._getProviderForKey(columnKey, columnSettings);

			editorOptions = columnSettings.editorOptions || {};
			editorOptions.width = editorOptions.width || width + "px";
			editorOptions.height = element.outerHeight() + "px";

			providerWrapper = provider.createEditor(this._editorCallbacks, columnKey, editorOptions, this._getNextTabIndex(), columnSettings.format);

			providerWrapper
				.addClass(this.css.editor)
				.css({
					"position": "absolute",
					"z-index": 1,
					"marginLeft": "-" + cellPaddingLeft,
					"marginRight": "-" + cellPaddingRight,
					"marginTop": "-" + cellPaddingTop,
					"marginBottom": "-" + cellPaddingBottom
				});

			return {
				provider: provider,
				providerWrapper: providerWrapper
			};
		},
		_getProviderForKey: function(column, setting) {
			var dataType = column.dataType,
				format = column.format,
				editorType = setting ? setting.editorType : null,
				provider;

			if(dataType === "bool") {
				editorType = "checkbox";
			} else if (format === "currency") {
				editorType === "percent";
			} else if (dataType === "number") {
				editorType === "numeric";
			} else if (dataType === "string") {
				editorType === "text";
			} else if (dataType === "date") {
				editorType === "date";
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

			return provider;
		},
		_cancelEdit: function(evt) {
			this._endEdit(evt);
		},
		_saveEdit: function(row, column, value) {
			var cell = this.model.getCell(row, column),
				columnSettings;

			columnSettings = this._getColumnSettings(cell.key);

			this.model.updateColumnData(row, column, value);
			this._updateUiCell(cell.cell, columnSettings, row, value);
			this._endEdit(row);
		},
		_endEdit: function(row) {
			this.activeEditor.providerWrapper.remove();
			delete this.activeEditor;
			if(row) {
				this._updateUiRow(row);
			}
			//this.activeEditor.element.removeClass(this.css.editingCell);
		},
		_updateUiRow: function(row) {
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

				if(setting.readOnly && (setting.formula || setting.template)) {
					this._updateUiCell(this.model.getCell(row, visibleCols[i].key).cell, setting, row, value);
				}
			}
		},
		_updateUiCell: function(cell, settings, rowModel, value) {
			var rowData = this._getRowForRendering(rowModel);

			if(settings.formula) {
				cell.html(settings.formula(rowData));
			} else if(settings.template) {
				cell.html(jQuery.ig.tmp(settings.template, rowData));
			} else {
				cell.html(value);
			}
		},
		_isLastScrollableCell: function(cell) {
			return (cell &&
				cell.is(":last-child") &&
				(parseInt(cell.css("padding-right"), 10) > 12 || this.grid._hscrollbar().is(":visible") && this.grid._hasVerticalScrollbar) &&
				this.grid.scrollContainer() &&
				this.grid.scrollContainer().has(cell).length);
		},
		_getNextTabIndex: function() {
			var gti = this.grid.options.tabIndex;

			return gti + 1;
		},
		_getRow: function(row) {
			return typeof row === "string" ? this.model.getRowById(row) : row;
		},
		_getRowForRendering: function(rowModel) {
			var renderableRow = {};

			rowModel.columnData.forEach(function(column) {
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
			this._addDSSuccessHandler();
			this._addDSErrorHandler();
			if(isRebind) {
				return;
			}
			/*this._dialogInvalid = true;
			this._defaultDialogTemplate = "<table><colgroup><col></col><col></col></colgroup><tbody data-render-tmpl></tbody></table>";*/
			this._editors = this._editors || {};
			/*if(this.options.excelNavigationMode && this.options.editMode !== "cell" && this.options.editMode !== "row") {
				throw new Error(jQuery.ig.GridUpdating.locale.excelNavigationNotSupportedWithCurrentEditMode)
			}
			if(this.grid._isMultiRowGrid() && this.options.editMode !== "dialog") {
				throw new Error(jQuery.ig.GridUpdating.locale.multiRowGridNotSupportedWithCurrentEditMode)
			}*/
			this._createHandlers();
			this._bindGridEvents();
			this._bindModelEvents();
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