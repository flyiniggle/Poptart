(function() {
	"use strict";

	var addingRowIdPrefix = "addingRow",
		addingWidget, dataModel, validationService, defaultValues;

	var Failure = function(key, displayName, reason) {
		this.key = key;
		this.displayName = displayName;
		this.reason = reason;
		this.failureDisplay = function() {
			return "<div class='ui-grid-adding-failure-container' data-failure='" + this.key + "'>" +
					"<span class='ui-iggrid-failure ion-alert-circled' style='margin-right: 5px;'></span>" +
					"<span class='ui-iggrid-failure'>" + this.displayName + ": " + this.reason + "</span>" +
					"</div>";
		}.bind(this);
	};

	defaultValues = {
		"object": {},
		"combo": "",
		"bool": false,
		"number": 0,
		"text": "",
		"percent": 0
	};


	//Data Modeling
	////////////////////////////////
	dataModel = {
		_addNewRow: function(rowId, row, columnSettings) {
			var newRowModel = {
				row: row,
				cells: columnSettings.map(function(column) {
					return {
						key: column.columnKey,
						cell: column.hidden ? null : jQuery(row).find("#" + rowId + "_" + column.columnKey),
						value: column.hasOwnProperty("default") ? column.default : this.getDefaultValue(column),
						settings: column
					};
				}, this)
			};

			this.addingRow = newRowModel;

			return newRowModel;
		},
		_clearRow: function() {
			this.addingRow.cells.forEach(function(cell) {
				cell.value = cell.settings.hasOwnProperty("default") ? cell.settings.default : this.getDefaultValue(cell.settings);
			}, this);
		},
		_getRow: function() {
			return this.addingRow;
		},
		_getColumn: function(columnKey) {
			return this.addingRow.cells.find(function(column) {
				return column.key === columnKey;
			});
		},
		_setColumnValue: function(columnKey, value) {
			var cell;

			cell = this.addingRow.cells.find(function(column) {
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


	//Validation Service
	////////////////////////////////
	validationService = Object.create(dataModel, {});

	validationService.validationRules = [],

	validationService._getFailures = function() {
		var validationFailures = this._validate();

		if(validationFailures.length > 0) {
			return validationFailures;
		}

		return undefined;
	};

	validationService._validate = function() {
		return this.validationRules.map(function(rule) {
			var column = this._getColumn(rule.key),
				failure = rule.validation(column.value);

			return failure ? new Failure(column.key, column.settings.headerText, failure) : undefined;
		}, this).filter(function(failure) {
			return !!failure;
		});
	};

	validationService._defaultValidation = function(val) {
		if(
			(typeof val === "undefined") ||
			(val === null) ||
			(val === "")
		) {
			return "This field is required";
		}

		return undefined;
	};


	//Widget Core and DOM
	////////////////////////////////
	addingWidget = Object.create(validationService, {});

	addingWidget.options = {
		columnSettings: [],
		startEditTriggers: []
	};

	addingWidget.events = {
		rendered: "rendered",
		editAddingRowStarting: "editAddingRowStarting",
		editAddingRowStarted: "editAddingRowStarted",
		editAddingCellStarting: "editAddingCellStarting",
		editAddingCellStarted: "editAddingCellStarted",
		editAddingCellEnding: "editAddingCellEnding",
		editAddingCellEnded: "editAddingCellEnded"
	};

	addingWidget.css = {
		addingRow: "ui-iggrid-adding-row",
		addingRowCell: "ui-iggrid-adding-row-cell",
		addingRowCellDefault: "ui-iggrid-adding-row-cell-default",
		addRowBarCell: "ui-iggrid-addingBarCell",
		addRowBarCellFailures: "ui-iggrid-adding-bar-cell-failures",
		addRowButton: "ui-iggrid-adding-add-row-button",
		editingCell: "ui-iggrid-editingcell",
		editor: "ui-iggrid-editor",
		invalidCell: "ui-iggrid-cell-invalid"
	};

	addingWidget._create = function() {
		this.addingRowCounter = 0;
	};

	addingWidget._setup = function(ui) {
		var gridColumnSettings, fixed, thead;

		if(ui.owner.id() !== this.grid.id()) {
			return;
		}

		//A whole lot of column setting merging...
		////////////////////////////////////////////
		gridColumnSettings = this.grid.options.columns.map(function(settings) {
			var copiedSettings = {};

			copiedSettings.columnKey = settings.key;
			copiedSettings.headerText = settings.headerText;
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

		//Setup validation rules
		////////////////////////////////////////////
		this.validationRules = gridColumnSettings.filter(function(setting) {
			return setting.required && !setting.hidden;
		}).map(function(setting) {
			return {
				key: setting.columnKey,
				validation: setting.validation || this._defaultValidation
			};
		}, this);

		//Some DOMy stuff
		////////////////////////////////////////////
		fixed = this.grid.hasFixedColumns();
		if(fixed) {
			thead = this.grid.fixedHeadersTable().children("thead");
		} else {
			thead = this.grid.headersTable().children("thead");
		}

		thead.append(this._createAddBarHtml())
			.on("mouseenter", "." + this.css.addingRow, this._addingRowHandlers.mouseenter)
			.on("mouseleave", "." + this.css.addingRow, this._addingRowHandlers.mouseleave);

		this._addAddingRow(gridColumnSettings);

		this._trigger(this.events.rendered);
	};

	addingWidget.endEdit = function(update) {
		if(!this.activeEditor) {
			return false;
		}

		if(update) {
			this._saveEdit(this.activeEditor.cell.key, this.activeEditor.provider.getValue());
		} else {
			this._cancelEdit();
		}
	};

	addingWidget.startEdit = function(columnKey) {
		var columnModel;

		if(!columnKey) {
			return this._startEdit();
		}

		columnModel = this._getColumn(columnKey);

		if(columnModel.settings.readOnly) {
			throw new TypeError("The column " + columnKey + " is read only.");
		}

		return this._startEdit(columnModel);
	};

	addingWidget._createHandlers = function() {
		this._stopEditingHandler = this._stopEditingHandler || jQuery.proxy(this._cancelEdit, this);
		this._gridHandlers = this._gridHandlers ||
			{
				rendered: function(evt, ui) {
					this._setup(ui);
				}.bind(this)/*
				stopEditing: this._stopEditingHandler,
				gridDataRendering: jQuery.proxy(this._gridDataRendering, this),
				rowsRendered: jQuery.proxy(this._rowsRendered, this),
				headerRendering: jQuery.proxy(this._processReadOnly, this),
				headerRendered: jQuery.proxy(this._headerRendered, this),
				virtualFrameChanging: jQuery.proxy(this._virtPreRender, this),
				virtualFrameChanged: jQuery.proxy(this._virtPostRender, this),
				columnsCollectionModified: jQuery.proxy(this._columnsModified, this)*/
			};
		this._handlers = this._handlers ||
			{/*
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
				scroll: jQuery.proxy(this._scroll, this)*/
			};
		this._buttonHandlers = this._buttonHandlers ||
			{/*
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
				touchDeleteKeyUp: jQuery.proxy(this._touchDeleteButtonKeyUp, this)*/
			};
		this._addingRowHandlers = this._addingRowHandlers ||
			{
				"mouseenter": function() {
					var row = this.addingRow.row;

					row.children("td").addClass("ui-state-hover");
					if(!this.activeEditor) {
						this._addAddingButton();
					}
				}.bind(this),
				"mouseleave": function() {
					this.addingRow.row.children("td").removeClass("ui-state-hover");

					if(!this.activeEditor) {
						this._removeAddingButton();
					}
				}.bind(this),
				"blur": function(evt) {
					var field;

					field = this.activeEditor.providerWrapper;
					field.off("blur", "input, div.ui-checkbox-container", this._addingRowHandlers.blur);
					field.find("input").blur();
					this._saveEdit(evt.data.columnKey, this.activeEditor.provider.getValue());
					this._endRowEdit();

					return false;
				}.bind(this),
				"keydown": function(evt) {
					if(evt.keyCode === jQuery.ui.keyCode.ENTER) {
						this._commitFromKeyboard(evt);
					}
				}.bind(this),
				"keypress": function(evt) {
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
					} else if(evt.keyCode === jQuery.ui.keyCode.ENTER) {
						this._commitFromKeyboard(evt);
					} else if(evt.keyCode === jQuery.ui.keyCode.ESCAPE) {
						this._cancelEdit();
					}
				}.bind(this),
				"click": function(evt) {
					var target = evt.target,
						targetType = target.nodeName.toLowerCase(),
						columnKey = targetType === "td" ? jQuery(target).data("columnKey") : null,
						columnModel;

					if(this.activeEditor && this.activeEditor.cell.cell[0] === evt.currentTarget) {
						return false;
					}

					columnModel = this._getColumn(columnKey);

					if(targetType === "td" && !columnModel.settings.readOnly) {
						this._startEdit(columnModel);
					} else {
						this._startEdit();
					}
				}.bind(this)
			};
		this._addingButtonHandlers = this._addingButtonHandlers ||
			{
				"mousedown": function(evt) {
					evt.preventDefault();
					evt.stopPropagation();
					if(this.activeEditor) {
						this.activeEditor.providerWrapper.find("input, div.ui-checkbox-container").blur();
					}
					this._removeAddingButton();
					this._commitRow();
				}.bind(this)
			};
		this._validationHandlers = this._validationHandlers ||
			{
				errorShowing: jQuery.proxy(this._editorErrorShowing, this),
				errorShown: jQuery.proxy(this._editorErrorShown, this),
				errorHidden: jQuery.proxy(this._editorErrorHidden, this)
			};
		this._editorCallbacks = this._editorCallbacks ||
			{/*
				keyDown: jQuery.proxy(this._editorKeyDown, this),
				textChanged: jQuery.proxy(this._editorTextChanged, this)*/
			};
	};

	addingWidget._bindGridEvents = function() {
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
	};

	addingWidget._analyzeEditTriggers = function() {
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
	};

	addingWidget._commitFromKeyboard = function(evt) {
		var targetColumn, allowCommit;

		evt.preventDefault();
		evt.stopPropagation();
		targetColumn = this._getColumn(this.activeEditor.cell.key);
		this.activeEditor.providerWrapper.find("input, div.ui-checkbox-container").blur();
		allowCommit = this._commitRow();
		if(allowCommit !== false) {
			this._removeAddingButton();
			this._startEdit(targetColumn);
		}
	};

	addingWidget._navigateRight = function() {
		var rowModel, field,
			cells, currentCellIndex, nextEditableCell;

		if(!this.activeEditor) {
			return;
		}

		field = this.activeEditor.providerWrapper;
		field.off("blur", "input, div.ui-checkbox-container", this._addingRowHandlers.blur);
		field.find("input").blur();

		rowModel = this.addingRow;

		cells = rowModel.cells.filter(function(cell) {
			return !cell.settings.readOnly;
		}, this);

		currentCellIndex = cells.indexOf(this.activeEditor.cell);

		nextEditableCell = (function nextEditableCell(cells, currentCellIndex) {
			var isLastCell = (currentCellIndex === (cells.length - 1)),
				nextCell;

			if(isLastCell) {
				return false;
			}

			nextCell = cells[++currentCellIndex];

			return (nextCell.settings.readOnly === false) ? nextCell : nextEditableCell.call(this, cells, currentCellIndex);
		}).call(this, cells, currentCellIndex);

		this._saveEdit(this.activeEditor.cell.key, this.activeEditor.provider.getValue());
		if(nextEditableCell) {
			this._startEdit(nextEditableCell);
		} else {
			jQuery("." + this.css.addRowButton).focus();
		}
	};

	addingWidget._navigateLeft = function() {
		var rowModel, field, cells, currentCellIndex, nextEditableCell;

		if(!this.activeEditor) {
			return;
		}
		field = this.activeEditor.providerWrapper;
		field.off("blur", "input, div.ui-checkbox-container", this._addingRowHandlers.blur);
		field.find("input").blur();

		rowModel = this.addingRow;

		cells = rowModel.cells.filter(function(cell) {
			return cell.settings.readOnly === false;
		}, this);

		currentCellIndex = cells.indexOf(this.activeEditor.cell);

		nextEditableCell = (function nextEditableCell(cells, currentCellIndex) {
			var isFirstCell = (currentCellIndex === 0),
				nextCell;

			if(isFirstCell) {
				return false;
			}

			nextCell = cells[--currentCellIndex];

			return (nextCell.settings.readOnly === false) ? nextCell : nextEditableCell.call(this, cells, currentCellIndex);
		}).call(this, cells, currentCellIndex);

		this._saveEdit(this.activeEditor.cell.key, this.activeEditor.provider.getValue());
		if(nextEditableCell) {
			this._startEdit(nextEditableCell);
		}
	};

	addingWidget._navigateFromAddButton = function() {
		var cells, lastEditableCell;

		cells = this.addingRow.cells.filter(function(cell) {
			return cell.settings.readOnly === false;
		}, this);
		lastEditableCell = Array.from(cells).reverse()[0];
		this._endRowEdit();
		this._startEdit(lastEditableCell);
	};

	addingWidget._generateDummyLayout = function(cols) {
		var i, layout = [[]];

		for(i = 0; i < cols.length; i++) {
			layout[0].push({col: cols[i], rs: 1, cs: 1});
		}
		return layout;
	};

	addingWidget._createAddBarHtml = function() {
		var bar = jQuery("<tr></tr>"),
			cell = jQuery("<td></td>");

		cell.attr("colspan", this.grid._visibleColumns().length)
			.addClass(this.css.addRowBarCell)
			.appendTo(bar);

		bar.attr("id", "addingRowBar");

		return bar;
	};

	addingWidget._createAddingRowHtml = function(rowId, visibleColumns, fixed) {
		var newRow = document.createElement("tr"),
			layout, i, j;

		layout = this.grid._isMultiRowGrid() ? this.grid._multiRowLayoutRenderingHelper(fixed) : this._generateDummyLayout(visibleColumns);
		for(i = 0; i < layout.length; i++) {
			for(j = 0; j < layout[i].length; j++) {
				jQuery("<td></td>")
					.data("columnKey", layout[i][j].col.key)
					.attr("id", rowId + "_" + layout[i][j].col.key)
					.attr("aria-describedby", this.grid.id() + "_" + layout[i][j].col.key)
					.attr("colspan", layout[i][j].cs || 1)
					.attr("rowspan", layout[i][j].rs || 1)
					.addClass(this.css.addingRowCell)
					.appendTo(newRow);
			}
		}

		jQuery(newRow)
			.data("rowId", rowId)
			.addClass(this.css.addingRow)
			.on("click", "td", this._addingRowHandlers.click);

		return jQuery(newRow);
	};

	addingWidget._createAddingRowButtonsHtml = function() {
		var container = jQuery("<div></div>"),
			addButton = jQuery("<button></button>");

		addButton.addClass("ion-android-checkmark-circle btn btn-success ")
			.addClass(this.css.addRowButton)
			.attr("type", "button")
			.attr("id", "ui-iggrid-adding-add-row-button")
			.appendTo(container);

		container.addClass("ui-iggrid-adding-add-row-button-container");

		return container;
	};

	addingWidget._addAddingButton = function() {
		var rowModel = this.addingRow,
			addingButton = this._createAddingRowButtonsHtml(),
			rowLocation;

		addingButton.appendTo(rowModel.row)
			.on("mousedown", "button", this._addingButtonHandlers.mousedown)
			.on("keypress", "button", this._addingRowHandlers.keypress);

		rowLocation = rowModel.row.offset();

		rowLocation.left += this.grid.element.width();
		rowLocation.left -= (addingButton.width() + 30);
		rowLocation.top += (rowModel.row.height() - 1);

		addingButton.offset(rowLocation);
	};

	addingWidget._removeAddingButton = function() {
		jQuery(".ui-iggrid-adding-add-row-button-container").remove();
	};

	addingWidget._startEdit = function(columnModel) {
		var visibleCols = this.grid._visibleColumns(),
			newEditor, visibleColumnKeys, columnKey,
			storedValue, startingValue, firstEditableColumn;

		if(!columnModel) {
			visibleColumnKeys = visibleCols.map(function(item) {
				return item.key;
			});
			firstEditableColumn = this.addingRow.cells.find(function(item) {
				return (!item.settings.readOnly && visibleColumnKeys.indexOf(item.key) >= 0);
			});

			if(!firstEditableColumn) {
				throw new TypeError("There are no visible editable columns.");
			}
			return this._startEdit(firstEditableColumn);
		}

		columnKey = columnModel.key;

		if(!this._trigger(this.events.editAddingCellStarting)) {
			return false;
		}

		storedValue = columnModel.value;
		this._hideFailure(columnModel);

		newEditor = this._getEditorForCell(columnModel);
		newEditor.providerWrapper
			.prependTo(columnModel.cell)
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
		if(columnModel.settings.editorType === "combo") {
			newEditor.providerWrapper.on("keydown", this._addingRowHandlers.keydown);
		}

		this._activateEditor(newEditor);
		startingValue = (storedValue === undefined) ? defaultValues[newEditor.editorType] : storedValue;
		newEditor.provider.setValue(startingValue);
		this._addAddingButton();
		this._trigger(this.events.editAddingCellStarted);

		return columnModel;
		/*

		args = {owner: this, rowID: rowId, columnIndex: this.grid.getVisibleIndexByKey(columnKey), columnKey: columnKey, editor: editor, value: value, rowAdding: isAdding};

		this._trigger(this.events.editCellStarted, evt, args);
		if(focus && editor) {
			this._activateEditor(providerWrapper)
		}*/
	};

	addingWidget._getEditorForCell = function(columnModel) {
		var element = columnModel.cell,
			columnKey = columnModel.columnKey,
			width = this._isLastScrollableCell(element) ? element.outerWidth() - this.grid._scrollbarWidth() : element.outerWidth(),
			cellPaddingLeft = parseInt(element.css("paddingLeft").split("px")[0]) + 1,
			cellPaddingRight = parseInt(element.css("paddingRight").split("px")[0]) + 1,
			cellPaddingTop = parseInt(element.css("paddingTop").split("px")[0]) + 2 ,
			cellPaddingBottom = parseInt(element.css("paddingBottom").split("px")[0]) - 1,
			providerData, columnSettings, editorOptions,
			providerWrapper, provider;

		columnSettings = columnModel.settings;

		providerData = this._getProviderForKey(columnSettings);
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
			cell: columnModel,
			editorType: providerData.editorType
		};
	};

	addingWidget._getProviderForKey = function(setting) {
		var dataType = setting ? setting.dataType : null,
			format = setting.format,
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
	};

	addingWidget._activateEditor = function(editor) {
		if(editor.providerWrapper.data("igEditorFilter")) {
			editor.providerWrapper.igEditorFilter("setFocus");
		}

		editor.provider.setSize();
		this.activeEditor = editor;
	};

	addingWidget._cancelEdit = function() {
		this._endCellEdit();
	};

	addingWidget._saveEdit = function(column, value) {
		var columnModel = this._getColumn(column),
			columnSettings;

		columnSettings = columnModel.settings;

		if(!value) {
			if(columnSettings.dataType === "object") {
				value = {};
			}
		}

		this._setColumnValue(column, value);
		this._updateUiCell(columnModel);
		this._endCellEdit();
	};

	addingWidget._endCellEdit = function() {
		this.activeEditor.providerWrapper.remove();
		this._updateUiRow(false);
		this.activeEditor.cell.cell.removeClass(this.css.editingCell);
		delete this.activeEditor;

		this._trigger(this.events.editAddingCellEnded);
	};

	addingWidget._endRowEdit = function() {
		this._removeAddingButton();
	};

	addingWidget._addAddingRow = function(columnSettings) {
		var rowId = addingRowIdPrefix + this.addingRowCounter++,
			fixed, visibleColumns,
			initialHiddenColumns, newAddingRow, i, j;

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
		this._addNewRow(rowId, newAddingRow, columnSettings);
		this._updateUiRow(true);
		newAddingRow.find("td").addClass(this.css.addingRowCellDefault);
		jQuery("#addingRowBar").before(newAddingRow);
	};

	addingWidget._updateUiRow = function(updateAllVisisble) {
		this.addingRow.cells.filter(function(column) {
			var settings = column.settings;

			if(updateAllVisisble) {
				return column.cell && !column.hidden;
			}

			return (column.cell && !column.hidden &&
			(settings.hasOwnProperty("mapper")) ||
			settings.hasOwnProperty("formula") ||
			settings.hasOwnProperty("template"));
		}, this).forEach(function(column) {
			return this._updateUiCell(column);
		}, this);
	};

	addingWidget._updateUiCell = function(column) {
		var rowData = this._getRowForRendering(),
			settings = column.settings,
			cell = column.cell,
			value;

		column.cell.removeClass([this.css.invalidCell, this.css.addingRowCellDefault].join(" "));

		if(settings.formula) {
			value = settings.formula(rowData);

			if (value === undefined || value === null) {
				cell.html("");
			} else {
				cell.html(value);
			}
		} else if(settings.template) {
			cell.html(jQuery.ig.tmpl(settings.template, rowData));
		} else if(settings.mapper) {
			value = settings.mapper(column.value);

			if(value === undefined || value === null) {
				cell.html("");
			} else {
				cell.html(value);
			}
		} else {
			cell.html(column.value);
		}

		return cell;
	};

	addingWidget._commitRow = function() {
		var renderableRow = this._getRowForRendering(),
			renderer = this.options.newRowFormatter,
			failures = this._getFailures(),
			newRowData;

		if(failures && failures.length) {
			this._showFailures(failures);
			return false;
		}
		newRowData = renderer ? renderer(renderableRow) : renderableRow;
		this.element.igGridUpdating("addRow", newRowData);
		this._clearRow();
		this._updateUiRow(true);
		this.addingRow.row.find("td").addClass(this.css.addingRowCellDefault);
	};

	addingWidget._showFailures = function(failures) {
		var msgDisplayCell = jQuery("." + this.css.addRowBarCell + ", ." + this.css.addRowBarCellFailures);

		msgDisplayCell.removeClass(this.css.addRowBarCell);
		msgDisplayCell.addClass(this.css.addRowBarCellFailures);
		failures.forEach(function(failure) {
			var columnModel = this._getColumn(failure.key);

			columnModel.cell.addClass(this.css.invalidCell);
			if(jQuery(".ui-grid-adding-failure-container[data-failure=" + columnModel.key + "]").length === 0) {
				msgDisplayCell.append(failure.failureDisplay());
			}
		}, this);
	};

	addingWidget._hideFailure = function(columnModel) {
		columnModel.cell.removeClass([this.css.invalidCell, this.css.addingRowCellDefault].join(" ")).addClass(this.css.editingCell);
		jQuery(".ui-grid-adding-failure-container[data-failure=" + columnModel.key + "]").remove();
		if(jQuery(".ui-grid-adding-failure-container").length === 0) {
			jQuery("." + this.css.addRowBarCellFailures)
				.removeClass(this.css.addRowBarCellFailures)
				.addClass(this.css.addRowBarCell);
		}
	};

	addingWidget._isLastScrollableCell = function(cell) {
		return cell && cell.is(":last-child");

		/*This is the original check from infragistics, but I don't know what all it does or if it's relevant to us
		(cell &&
			cell.is(":last-child") &&
			(parseInt(cell.css("padding-right"), 10) > 12 || this.grid._hscrollbar().is(":visible") && this.grid._hasVerticalScrollbar) &&
			this.grid.scrollContainer() &&
			this.grid.scrollContainer().has(cell).length);
		 */
	};

	addingWidget._getNextTabIndex = function() {
		var gti = this.grid.options.tabIndex;

		return gti + 1;
	};

	addingWidget._getRowForRendering = function() {
		var renderableRow = {};

		this.addingRow.cells.forEach(function(column) {
			renderableRow[column.key] = column.value;
		});

		return renderableRow;
	};

	addingWidget._getColumnSettings = function(columnKey) {
		var columnSettings;

		columnSettings = this.options.columnSettings.find(function(settings) {
			return settings.columnKey === columnKey;
		});

		return columnSettings || {};
	};

	addingWidget._injectGrid = function(gridInstance, isRebind) {
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
	};

	jQuery.widget("Poptart.igGridAdding", addingWidget);
})();