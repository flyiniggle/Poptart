(function() {
	var dataModel = {
		model: [],
		addNewRow: function(row) {
			this.model.push({
				row: row
			});
			return this.model;
		}
	};

	jQuery.widget("Poptart.igGridAdding", {
		options: {
			columns: [],
			startEditTriggers: []
		},
		events: {
			editRowStarting: "editRowStarting",
			editRowStarted: "editRowStarted",
			editRowEnding: "editRowEnding",
			editRowEnded: "editRowEnded",
			editCellStarting: "editCellStarting",
			editCellStarted: "editCellStarted",
			editCellEnding: "editCellEnding",
			editCellEnded: "editCellEnded",
			rowAdding: "rowAdding",
			rowAdded: "rowAdded"
		},
		css: {},
		_create: function() {
			this.model = Object.create(dataModel);
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
			this._stopEditingHandler = this._stopEditingHandler || jQuery.proxy(this._stopEditing, this);
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
			this._addNewRowHandlers = this._addNewRowHandlers ||
				{
					focus: jQuery.proxy(this._addRowFocus, this),
					blur: jQuery.proxy(this._addRowBlur, this)
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
			this._addAddingRow();
		},
		_generateDummyLayout: function(cols) {
			var i, layout = [[]];

			for(i = 0; i < cols.length; i++) {
				layout[0].push({col: cols[i], rs: 1, cs: 1});
			}
			return layout;
		},
		_createAddingRowHtml: function(visibleColumns, fixed) {
			var newRow = document.createElement("tr"),
				layout, i, j;

			layout = this.grid._isMultiRowGrid() ? this.grid._multiRowLayoutRenderingHelper(fixed) : this._generateDummyLayout(visibleColumns);
			for(i = 0; i < layout.length; i++) {
				for(j = 0; j < layout[i].length; j++) {
					jQuery("<td></td>")
						.html(j === 0 ? "Add..." : "")
						//.attr("aria-readonly", !!layout[i][j].col.readOnly)
						.attr("aria-describedby", this.grid.id() + "_" + layout[i][j].col.key)
						.attr("colspan", layout[i][j].cs || 1)
						.attr("rowspan", layout[i][j].rs || 1)
						.appendTo(newRow);
				}
			}

			return newRow;
		},
		_addAddingRow: function() {
			var fixed, thead, visibleColumns,
				initialHiddenColumns, newAddingRow, i, j;

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
			newAddingRow = this._createAddingRowHtml(visibleColumns, fixed);
			this.model.addNewRow(newAddingRow);
			thead.append(newAddingRow);
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
			}
			if(String(this.grid.options.templatingEngine).toLowerCase() === "jsrender") {
				this._jsr = true;
				if(this.options.rowEditDialogOptions.dialogTemplate && typeof this.options.rowEditDialogOptions.dialogTemplate === "string") {
					jQuery.templates(this.grid.id() + "_rowEditDialogTemplate", this.options.rowEditDialogOptions.dialogTemplate);
				}
				if(this.options.rowEditDialogOptions.editorsTemplate && typeof this.options.rowEditDialogOptions.editorsTemplate === "string") {
					jQuery.templates(this.grid.id() + "_rowEditDialogEditorsTemplate", this.options.rowEditDialogOptions.editorsTemplate);
				}
			}*/
		}
	});
})();