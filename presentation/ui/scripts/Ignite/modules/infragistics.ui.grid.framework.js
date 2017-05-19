﻿/*!@license
 * Infragistics.Web.ClientUI Grid localization resources 16.1.20161.2270
 *
 * Copyright (c) 2011-2017 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 */
(function($) {
	$.ig = $.ig || {};
	if(!$.ig.Grid) {
		$.ig.Grid = {};
		$.extend($.ig.Grid, {
			locale: {
				noSuchWidget: "{featureName} was not recognized. Verify that such a feature exists and the spelling is correct.",
				autoGenerateColumnsNoRecords: "autoGenerateColumns is enabled, but there are no records in the data source. Load a data source with records to be able to determine the columns.",
				optionChangeNotSupported: "{optionName} cannot be edited after initialization. Its value should be set during initialization.",
				optionChangeNotScrollingGrid: "{optionName} cannot be edited after initialization because your grid initially does not scroll and full re-rendering will be required. This option should be set during initialization.",
				widthChangeFromPixelsToPercentagesNotSupported: "Cannot change dynamically option width of the grid from pixels to percentages.",
				widthChangeFromPercentagesToPixelsNotSupported: "Cannot change dynamically option width of the grid from percentages to pixels.",
				noPrimaryKeyDefined: "There is no primary key defined for the grid. Define a primary key in order to use features such as Grid Editing.",
				indexOutOfRange: "The specified row index is out of range. A row index between 0 and {max} should be provided.",
				noSuchColumnDefined: "The specified column key is not valid. A column key that matches the key of one of the defined grid columns should be provided.",
				columnIndexOutOfRange: "The specified column index is out of range. A column index between 0 and {max} should be provided.",
				recordNotFound: "A record with id {id} could not be found in the data view. Verify the id used for the search and adjust it if necessary.",
				columnNotFound: "A column with key {key} could not be found. Verify the key used for the search and adjust it if necessary.",
				colPrefix: "Column ",
				columnVirtualizationRequiresWidth: "Virtualization and columnVirtualization require the width of the grid or its columns to be set. Provide a value for the grid width, defaultColumnWidth or the width of each column.",
				virtualizationRequiresHeight: "Virtualization requires the height of the grid to be set. A value for the grid height should be provided.",
				colVirtualizationDenied: "columnVirtualization requires a different virtualizationMode setting. The virtualizationMode should be set to 'fixed'.",
				noColumnsButAutoGenerateTrue: "autoGenerateColumns is disabled and no columns are defined for the grid. Either enable autoGenerateColumns or manually specify the columns.",
				noPrimaryKey: "igHierarchicalGrid requires a primary key to be defined. A primary key should be provided.",
				expandTooltip: "Expand Row",
				collapseTooltip: "Collapse Row",
				featureChooserTooltip: "Feature chooser",
				movingNotAllowedOrIncompatible: "The specified column could not be moved. Verify that such a column exists and its end position would not break the column layout.",
				allColumnsHiddenOnInitialization: "All columns cannot be hidden during initialization. At least one column should be configured as visible.",
				virtualizationNotSupportedWithAutoSizeCols: "Virtualization requires a different column width configuration than '*'. The column width should be set as a number in pixels.",
				columnVirtualizationNotSupportedWithPercentageWidth: "Column virtualization requires a different grid width configuration. The column width should be set as a number in pixels.",
				mixedWidthsNotSupported: "All columns are required to have their width set the same way. Set all column widths either as percentages or as number in pixels.",
				multiRowLayoutColumnError: "The column with key: {key1} could not be added to the multi-row-layout because its place in the layout has already been taken by the column with key: {key2} .",
				multiRowLayoutNotComplete: "The multi-row-layout is not complete. The column definition creates a layout that has empty spaces and cannot be rendered correctly.",
				multiRowLayoutMixedWidths: "Mixed widths (percentage and pixels) are not supported in the Multi-Row Layout. Please define all column widths in either pixels or percentage. ",
				scrollableGridAreaNotVisible: "Fixed header and footer areas are larger than the available grid height. The scrollable area is not visible.Please set a larger grid height."
			}
		});
		$.ig.GridFiltering = $.ig.GridFiltering || {};
		$.extend($.ig.GridFiltering, {
			locale: {
				startsWithNullText: "Starts with...",
				endsWithNullText: "Ends with...",
				containsNullText: "Contains...",
				doesNotContainNullText: "Does not contain...",
				equalsNullText: "Equals...",
				doesNotEqualNullText: "Does not equal...",
				greaterThanNullText: "Greater than...",
				lessThanNullText: "Less than...",
				greaterThanOrEqualToNullText: "Greater than or equal to...",
				lessThanOrEqualToNullText: "Less than or equal to...",
				onNullText: "On...",
				notOnNullText: "Not on...",
				afterNullText: "After",
				beforeNullText: "Before",
				emptyNullText: "Empty",
				notEmptyNullText: "Not empty",
				nullNullText: "Null",
				notNullNullText: "Not null",
				startsWithLabel: "Starts with",
				endsWithLabel: "Ends with",
				containsLabel: "Contains",
				doesNotContainLabel: "Does not contain",
				equalsLabel: "Equals",
				doesNotEqualLabel: "Does not equal",
				greaterThanLabel: "Greater than",
				lessThanLabel: "Less than",
				greaterThanOrEqualToLabel: "Greater than or equal to",
				lessThanOrEqualToLabel: "Less than or equal to",
				trueLabel: "True",
				falseLabel: "False",
				afterLabel: "After",
				beforeLabel: "Before",
				todayLabel: "Today",
				yesterdayLabel: "Yesterday",
				thisMonthLabel: "This month",
				lastMonthLabel: "Last month",
				nextMonthLabel: "Next month",
				thisYearLabel: "This year",
				lastYearLabel: "Last year",
				nextYearLabel: "Next year",
				clearLabel: "Clear Filter",
				noFilterLabel: "No",
				onLabel: "On",
				notOnLabel: "Not on",
				advancedButtonLabel: "Advanced",
				filterDialogCaptionLabel: "ADVANCED FILTER",
				filterDialogConditionLabel1: "Show records matching ",
				filterDialogConditionLabel2: " of the following criteria",
				filterDialogConditionDropDownLabel: "Filtering condition",
				filterDialogOkLabel: "Search",
				filterDialogCancelLabel: "Cancel",
				filterDialogAnyLabel: "ANY",
				filterDialogAllLabel: "ALL",
				filterDialogAddLabel: "Add",
				filterDialogErrorLabel: "You reached the maximum number of filters supported.",
				filterDialogCloseLabel: "Close filtering dialog",
				filterSummaryTitleLabel: "Search results",
				filterSummaryTemplate: "${matches} matching records",
				filterDialogClearAllLabel: "Clear ALL",
				tooltipTemplate: "${condition} filter applied",
				featureChooserText: "Hide Filter",
				featureChooserTextHide: "Show Filter",
				featureChooserTextAdvancedFilter: "Advanced Filter",
				virtualizationSimpleFilteringNotAllowed: "Column virtualization requires a different type of filtering. Set filtering mode to 'advanced' or disable advancedModeEditorsVisible",
				multiRowLayoutSimpleFilteringNotAllowed: "Multi-row-layout requires a different type of filtering. Set filtering mode to 'advanced'",
				featureChooserNotReferenced: "A reference to Feature Chooser is missing. Include infragistics.ui.grid.featurechooser.js in your project, use a loader or one of the combined script files.",
				conditionListLengthCannotBeZero: "The conditionList array in columnSettings is empty. A suitable array for the conditionList should be provided.",
				conditionNotValidForColumnType: "The condition '{0}' is not valid for the current configuration. It should be replaced with a condition suitable for {1} column type.",
				defaultConditionContainsInvalidCondition: "defaultExpression for the '{0}' column contains a condition that is not allowed. It should be replaced it with a condition suitable for {0} column type."
			}
		});
		$.ig.GridGroupBy = $.ig.GridGroupBy || {};
		$.extend($.ig.GridGroupBy, {
			locale: {
				emptyGroupByAreaContent: "Drag a column here or {0} to Group By",
				emptyGroupByAreaContentSelectColumns: "select columns",
				emptyGroupByAreaContentSelectColumnsCaption: "select columns",
				expandTooltip: "Expand Grouped Row",
				collapseTooltip: "Collapse Grouped Row",
				removeButtonTooltip: "Remove Grouped Column",
				modalDialogCaptionButtonDesc: "Sort ascending",
				modalDialogCaptionButtonAsc: "Sort descending",
				modalDialogCaptionButtonUngroup: "Ungroup",
				modalDialogGroupByButtonText: "Group By",
				modalDialogCaptionText: "Add to Group By",
				modalDialogDropDownLabel: "Showing:",
				modalDialogClearAllButtonLabel: "Clear ALL",
				modalDialogRootLevelHierarchicalGrid: "Root",
				modalDialogDropDownButtonCaption: "Show/Hide",
				modalDialogButtonApplyText: "Apply",
				modalDialogButtonCancelText: "Cancel",
				fixedVirualizationNotSupported: "Group By requires another virtualization setting. The virtualizationMode should be set to 'continuous'.",
				summaryRowTitle: "Grouping summary row"
			}
		});
		$.ig.GridHiding = $.ig.GridHiding || {};
		$.extend($.ig.GridHiding, {
			locale: {
				columnChooserDisplayText: "Column Chooser",
				hiddenColumnIndicatorTooltipText: "Hidden Column(s)",
				columnHideText: "Hide",
				columnChooserCaptionLabel: "Column Chooser",
				columnChooserCloseButtonTooltip: "Close",
				hideColumnIconTooltip: "Hide",
				featureChooserNotReferenced: "A reference to Feature Chooser is missing. Include infragistics.ui.grid.featurechooser.js in your project or use one of the combined script files.",
				columnChooserShowText: "Show",
				columnChooserHideText: "Hide",
				columnChooserResetButtonLabel: "Reset",
				columnChooserButtonApplyText: "Apply",
				columnChooserButtonCancelText: "Cancel"
			}
		});
		$.ig.GridResizing = $.ig.GridResizing || {};
		$.extend($.ig.GridResizing, {
			locale: {
				noSuchVisibleColumn: "There is no visible column for the specified key. The showColumn() method should be used on the column before trying to resize it.",
				resizingAndFixedVirtualizationNotSupported: "Resizing columns requires a different virtualization setting. Use rowVirtualization and set the virtualizationMode to 'continuous'."
			}
		});
		$.ig.GridPaging = $.ig.GridPaging || {};
		$.extend($.ig.GridPaging, {
			locale: {
				pageSizeDropDownLabel: "Show ",
				pageSizeDropDownTrailingLabel: "records",
				nextPageLabelText: "Next",
				prevPageLabelText: "Prev",
				firstPageLabelText: "",
				lastPageLabelText: "",
				currentPageDropDownLeadingLabel: "Pg",
				currentPageDropDownTrailingLabel: "of ${count}",
				currentPageDropDownTooltip: "Choose page index",
				pageSizeDropDownTooltip: "Choose number of records per page",
				pagerRecordsLabelTooltip: "Current records range",
				prevPageTooltip: "Previous page",
				nextPageTooltip: "Next page",
				firstPageTooltip: "First page",
				lastPageTooltip: "Last page",
				pageTooltipFormat: "Page ${index}",
				pagerRecordsLabelTemplate: "${startRecord} - ${endRecord} of ${recordCount} records",
				invalidPageIndex: "The specified page index is not valid. Provide a page index that is greater than or equal to 0 and less than the total number of pages."
			}
		});
		$.ig.GridSelection = $.ig.GridSelection || {};
		$.extend($.ig.GridSelection, {locale: {persistenceImpossible: "Persisting selection requires a different configuration. The primary key option of the grid should be configured."}});
		$.ig.GridRowSelectors = $.ig.GridRowSelectors || {};
		$.extend($.ig.GridRowSelectors, {
			locale: {
				selectionNotLoaded: "igGridSelection has not been initialized. Selection should be enabled for the grid.",
				columnVirtualizationEnabled: "Row Selectors require a different virtualization setting. Use rowVirtualization and set the virtualizationMode to 'continuous'.",
				selectedRecordsText: "You have selected ${checked} records.",
				deselectedRecordsText: "You have deselected ${unchecked} records.",
				selectAllText: "Select all ${totalRecordsCount} records",
				deselectAllText: "Deselect all ${totalRecordsCount} records",
				requireSelectionWithCheckboxes: "Selection is required when there are checkboxes enabled"
			}
		});
		$.ig.GridSorting = $.ig.GridSorting || {};
		$.extend($.ig.GridSorting, {
			locale: {
				sortedColumnTooltipFormat: "Sorted ${direction}",
				unsortedColumnTooltip: "Sort column",
				ascending: "ascending",
				descending: "descending",
				modalDialogSortByButtonText: "Sort by",
				modalDialogResetButton: "Reset",
				modalDialogCaptionButtonDesc: "Click to sort descending",
				modalDialogCaptionButtonAsc: "Click to sort ascending",
				modalDialogCaptionButtonUnsort: "Click to remove sorting",
				featureChooserText: "Sort on Multiple",
				modalDialogCaptionText: "Sort on Multiple",
				modalDialogButtonApplyText: "Apply",
				modalDialogButtonCancelText: "Cancel",
				sortingHiddenColumnNotSupport: "The specified column could not be sorted because it is hidden. Use the showColumn() method on it before trying to sort it.",
				featureChooserSortAsc: "Sort ascending",
				featureChooserSortDesc: "Sort descending"
			}
		});
		$.ig.GridSummaries = $.ig.GridSummaries || {};
		$.extend($.ig.GridSummaries, {
			locale: {
				featureChooserText: "Hide Summaries",
				featureChooserTextHide: "Show Summaries",
				dialogButtonOKText: "OK",
				dialogButtonCancelText: "Cancel",
				emptyCellText: "",
				summariesHeaderButtonTooltip: "Show/Hide summaries",
				defaultSummaryRowDisplayLabelCount: "Count",
				defaultSummaryRowDisplayLabelMin: "Min",
				defaultSummaryRowDisplayLabelMax: "Max",
				defaultSummaryRowDisplayLabelSum: "Sum",
				defaultSummaryRowDisplayLabelAvg: "Avg",
				defaultSummaryRowDisplayLabelCustom: "Custom",
				calculateSummaryColumnKeyNotSpecified: "Column key is missing. A column key should be specified to calculate summaries.",
				featureChooserNotReferenced: "A reference to Feature Chooser is missing. Include infragistics.ui.grid.featurechooser.js in your project or use one of the combined script files."
			}
		});
		$.ig.GridUpdating = $.ig.GridUpdating || {};
		$.extend($.ig.GridUpdating, {
			locale: {
				doneLabel: "Done",
				doneTooltip: "Stop editing and update",
				cancelLabel: "Cancel",
				cancelTooltip: "Stop editing without updating",
				addRowLabel: "Add new row",
				addRowTooltip: "Start adding a new row",
				deleteRowLabel: "Delete row",
				deleteRowTooltip: "Delete row",
				igTextEditorException: "It is currently not possible to update string columns in the grid. ui.igTextEditor should be loaded first.",
				igNumericEditorException: "It is currently not possible to update numeric columns in the grid. ui.igNumericEditor should be loaded first.",
				igCheckboxEditorException: "It is currently not possible to update checkbox columns in the grid. ui.igCheckboxEditor should be loaded first.",
				igCurrencyEditorException: "It is currently not possible to update numeric columns with currency format in the grid. ui.igCurrencyEditor should be loaded first.",
				igPercentEditorException: "It is currently not possible to update numeric columns with percent format in the grid. ui.igPercentEditor should be loaded first.",
				igDateEditorException: "It is currently not possible to update date columns in the grid. ui.igDateEditor should be loaded first.",
				igDatePickerException: "It is currently not possible to update date columns in the grid. ui.igDatePicker should be loaded first.",
				igComboException: "It is currently not possible to use a combo in the grid. ui.igCombo should be loaded first.",
				igRatingException: "It is currently not possible to use igRating as an editor in the grid. ui.igRating should be loaded first.",
				igValidatorException: "It is currently not possible to support validation with the options defined in igGridUpdating. ui.igValidator should be loaded first.",
				editorTypeCannotBeDetermined: "Updating did not have enough information to properly determine the type of editor to use for column: ",
				noPrimaryKeyException: "In order to support update operations after a row was deleted, application should define primaryKey in options of igGrid.",
				hiddenColumnValidationException: "Cannot edit row which has a hidden column with enabled validation.",
				dataDirtyException: "Grid has pending transactions which may affect rendering of data. To prevent exception, application may enable autoCommit option of igGrid, or it should process dataDirty event of igGridUpdating and return false. While processing that event, application also may do commit() data in igGrid.",
				recordOrPropertyNotFoundException: "The specified record or property was not found. Verify the criteria for your search and adjust them if necessary.",
				rowEditDialogCaptionLabel: "Edit row data",
				excelNavigationNotSupportedWithCurrentEditMode: "Excel Navigation requires a different configuration. editMode should be set to 'cell' or 'row'",
				columnNotFound: "The specified column key was not found in the visible columns' collection or the specified index was out of range.",
				rowOrColumnSpecifiedOutOfView: "Editing the specified row or column is currently not possible. It should be in view on the current page and virtualization frame.",
				editingInProgress: "A row or cell is currently being edited. Another updating procedure cannot start before the current editing is finished.",
				undefinedCellValue: "Undefined cannot be set as a cell value.",
				addChildTooltip: "Add a child row",
				multiRowGridNotSupportedWithCurrentEditMode: "When the grid has multi-row-layout enabled only dialog edit mode is supported."
			}
		});
		$.ig.ColumnMoving = $.ig.ColumnMoving || {};
		$.extend($.ig.ColumnMoving, {
			locale: {
				movingDialogButtonApplyText: "Apply",
				movingDialogButtonCancelText: "Cancel",
				movingDialogCaptionButtonDesc: "Move down",
				movingDialogCaptionButtonAsc: "Move up",
				movingDialogCaptionText: "Move Columns",
				movingDialogDisplayText: "Move Columns",
				movingDialogDropTooltipText: "Move here",
				movingDialogCloseButtonTitle: "Close moving dialog",
				dropDownMoveLeftText: "Move left",
				dropDownMoveRightText: "Move right",
				dropDownMoveFirstText: "Move first",
				dropDownMoveLastText: "Move last",
				featureChooserNotReferenced: "A reference to Feature Chooser is missing. Include infragistics.ui.grid.featurechooser.js in your project or use one of the combined script files.",
				movingToolTipMove: "Move",
				featureChooserSubmenuText: "Move To",
				columnVirtualizationEnabled: "Column Moving requires a different virtualization setting. Use rowVirtualization or set the virtualizationMode to 'continuous'."
			}
		});
		$.ig.ColumnFixing = $.ig.ColumnFixing || {};
		$.extend($.ig.ColumnFixing, {
			locale: {
				headerFixButtonText: "Fix this column",
				headerUnfixButtonText: "Unfix this column",
				featureChooserTextFixedColumn: "Fix column",
				featureChooserTextUnfixedColumn: "Unfix column",
				groupByNotSupported: "Column Fixing requires a different configuration. The Group By functionality should be disabled.",
				virtualizationNotSupported: "Column Fixing requires a different virtualization setting. rowVirtualization should be used instead.",
				columnVirtualizationNotSupported: "Column Fixing requires a different virtualization setting. columnVirtualization should be disabled.",
				columnMovingNotSupported: "Column Fixing requires a different configuration. Column Moving should be disabled.",
				hidingNotSupported: "Column Fixing requires a different configuration. The Hiding functionality should be disabled.",
				hierarchicalGridNotSupported: "igHierarchicalGrid does not support Column Fixing. Column Fixing should be disabled.",
				responsiveNotSupported: "Column Fixing requires a different configuration. The Responsive functionality should be disabled.",
				noGridWidthNotSupported: "Column Fixing requires a different configuration. The grid width should be set either as percentages or as number in pixels.",
				gridHeightInPercentageNotSupported: "Column Fixing requires a different configuration. The grid height should be set in pixels.",
				defaultColumnWidthInPercentageNotSupported: "Column Fixing requires a different configuration. The default column width should be set as a number in pixels.",
				columnsWidthShouldBeSetInPixels: "Column Fixing requires a different column width setting. The width of column with key {key} should be set in pixels.",
				unboundColumnsNotSupported: "Column Fixing requires a different configuration. Unbound Columns should be disabled.",
				excelNavigationNotSupportedWithCurrentEditMode: "Excel Navigation requires a different configuration. editMode should be set to 'cell' or 'row'.",
				initialFixingNotApplied: "Initial fixing could not be applied for column with key: {0}. Reason: {1}",
				setOptionGridWidthException: "Incorrect value for option grid width. When there are fixed columns width of the visible area of unfixed column(s) should be greater that or equal to value of minimalVisibleAreaWidth.",
				internalErrors: {
					none: "Your grid configuration is successful!",
					notValidIdentifier: "The specified column key is not valid. Provide a column key that matches the key of one of the defined grid columns.",
					fixingRefused: "Fixing this column is not currently supported. Unfix another visible column or use the showColumn() method on any hidden unfixed column first.",
					fixingRefusedMinVisibleAreaWidth: "This column cannot be fixed. Its width exceeds the available space for fixing a column in the grid.",
					alreadyHidden: "Fixing/Unfixing this column is currently not possible. The showColumn() method should be used on the column first.",
					alreadyUnfixed: "This column is already unfixed.",
					alreadyFixed: "This column is already fixed.",
					unfixingRefused: "Unfixing this column is currently not possible. The showColumn() method should be used on any hidden fixed column first.",
					targetNotFound: "Target column with key {key} could not be found. Verify the key used for the search and adjust it if necessary."
				}
			}
		});
		$.ig.GridAppendRowsOnDemand = $.ig.GridAppendRowsOnDemand || {};
		$.extend($.ig.GridAppendRowsOnDemand, {
			locale: {
				loadMoreDataButtonText: "Load more data",
				appendRowsOnDemandRequiresHeight: "Append Rows On Demand requires a different configuration. The grid height should be set.",
				groupByNotSupported: "Append Rows On Demand requires a different configuration. Group By should be disabled.",
				pagingNotSupported: "Append Rows On Demand requires a different configuration. Paging should be disabled.",
				cellMergingNotSupported: "Append Rows On Demand requires a different configuration. Cell Merging should be disabled.",
				virtualizationNotSupported: "Append Rows On Demand requires a different configuration. Virtualization should be disabled."
			}
		});
		$.ig.igGridResponsive = $.ig.igGridResponsive || {};
		$.extend($.ig.igGridResponsive, {locale: {fixedVirualizationNotSupported: 'The Responsive functionality requires a different virtualization setting. virtualizationMode should be set to "continuous".'}});
		$.ig.igGridMultiColumnHeaders = $.ig.igGridMultiColumnHeaders || {};
		$.extend($.ig.igGridMultiColumnHeaders, {locale: {multiColumnHeadersNotSupportedWithColumnVirtualization: "Multi-column headers require a different configuration. columnVirtualization should be disabled."}})
	}
})(jQuery);
/*
 //@ sourceMappingURL=E:\Work\6\967\src\DEV\jQuery\2016.1\Source\ClientUI\js\modules\i18n\infragistics.ui.grid-en.js.map
 */

/*!@license
 * Infragistics.Web.ClientUI Grid 16.1.20161.2270
 *
 * Copyright (c) 2011-2017 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 *	jquery-1.9.1.js
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	infragistics.dataSource.js
 *	infragistics.ui.shared.js
 *	infragistics.templating.js
 *	infragistics.util.js
 */
if(typeof jQuery !== "function") {
	throw new Error("jQuery is undefined")
}
(function($) {
	var _hovTR, _aNull = function(val) {
		return val === null || val === undefined
	};
	$.widget("ui.igGrid", {
		css: {
			baseClass: "ui-widget ui-helper-clearfix ui-corner-all",
			baseContentClass: "ui-widget-content",
			gridClasses: "ui-iggrid",
			recordClass: "ui-ig-record ui-iggrid-record",
			recordAltClass: "ui-ig-altrecord ui-iggrid-altrecord",
			headerClass: "ui-iggrid-header ui-widget-header",
			headerTextClass: "ui-iggrid-headertext",
			headerCellFeatureEnabledClass: "ui-iggrid-headercell-featureenabled",
			baseHeaderClass: "ui-widget-header",
			gridTableClass: "ui-iggrid-table ui-widget-content",
			mrlGridTableClass: "ui-iggrid-table-mrl ui-widget-content",
			gridHeaderTableClass: "ui-iggrid-headertable",
			mrlGridHeaderTableClass: "ui-iggrid-headertable-mrl",
			gridFooterTableClass: "ui-iggrid-footertable ui-widget-footer",
			gridFooterClass: "",
			gridCaptionTableClass: "ui-iggrid-captiontable",
			gridHeaderCaptionClass: "ui-iggrid-headercaption ui-widget-header ui-corner-top",
			gridTableBodyClass: "ui-iggrid-tablebody",
			gridScrollDivClass: "ui-iggrid-scrolldiv ui-widget-content",
			gridVirtualScrollDivClass: "ui-iggrid-virtualscrolldiv",
			gridFooterCaptionClass: "ui-iggrid-footercaption",
			deletedRecord: "ui-iggrid-deletedrecord",
			modifiedRecord: "ui-iggrid-modifiedrecord",
			rtl: "ui-iggrid-rtl",
			gridMeasurementContainerClass: "ui-iggrid-measurement-container"
		},
		options: {
			width: null,
			height: null,
			autoAdjustHeight: true,
			avgRowHeight: 25,
			avgColumnWidth: null,
			defaultColumnWidth: null,
			autoGenerateColumns: true,
			virtualization: false,
			virtualizationMode: "fixed",
			requiresDataBinding: true,
			rowVirtualization: false,
			columnVirtualization: false,
			virtualizationMouseWheelStep: null,
			adjustVirtualHeights: false,
			rowTemplate: null,
			jQueryTemplating: false,
			templatingEngine: "infragistics",
			columns: [{
				headerText: null,
				key: null,
				formatter: null,
				format: null,
				dataType: "string",
				width: null,
				hidden: false,
				template: null,
				unbound: false,
				group: [],
				rowspan: 0,
				formula: null,
				unboundValues: null,
				unboundValuesUpdateMode: "auto",
				headerCssClass: null,
				columnCssClass: null,
				mapper: null,
				rowIndex: null,
				columnIndex: null,
				colSpan: 1,
				rowSpan: 1
			}],
			dataSource: null,
			dataSourceUrl: null,
			dataSourceType: null,
			responseDataKey: null,
			responseTotalRecCountKey: null,
			requestType: "GET",
			responseContentType: "application/json; charset=utf-8",
			showHeader: true,
			showFooter: true,
			fixedHeaders: true,
			fixedFooters: true,
			caption: null,
			features: [{name: null}],
			tabIndex: 0,
			accessibilityRendering: false,
			localSchemaTransform: true,
			primaryKey: null,
			serializeTransactionLog: true,
			autoCommit: false,
			aggregateTransactions: false,
			autoFormat: "date",
			renderCheckboxes: false,
			updateUrl: null,
			restSettings: {
				create: {url: null, template: null, batch: false},
				update: {url: null, template: null, batch: false},
				remove: {url: null, template: null, batch: false},
				encodeRemoveInRequestUri: true,
				contentSerializer: null,
				contentType: "application/json; charset=utf-8"
			},
			alternateRowStyles: true,
			autofitLastColumn: true,
			enableHoverStyles: true,
			enableUTCDates: false,
			mergeUnboundColumns: false,
			jsonpRequest: false,
			enableResizeContainerCheck: true,
			featureChooserIconDisplay: "desktopOnly"
		},
		events: {
			cellClick: "cellClick",
			cellRightClick: "cellRightClick",
			dataBinding: "dataBinding",
			dataBound: "dataBound",
			rendering: "rendering",
			rendered: "rendered",
			dataRendering: "dataRendering",
			dataRendered: "dataRendered",
			headerRendering: "headerRendering",
			headerRendered: "headerRendered",
			footerRendering: "footerRendering",
			footerRendered: "footerRendered",
			headerCellRendered: "headerCellRendered",
			rowsRendering: "rowsRendering",
			rowsRendered: "rowsRendered",
			schemaGenerated: "schemaGenerated",
			columnsCollectionModified: "columnsCollectionModified",
			requestError: "requestError",
			created: "igcontrolcreated",
			destroyed: "igcontroldestroyed"
		},
		resizeTimeout: 300,
		maxScrollContainerHeight: 10737418,
		cloneChildElements: false,
		widget: function() {
			return this.element
		},
		_persistVirtualScrollTop: false,
		_createWidget: function(options) {
			var cols;
			this.options.columns = null;
			this.options.features = null;
			if(options) {
				if(options.dataSource && ($.type(options.dataSource) === "array" || $.type(options.dataSource) === "object")) {
					this.tmpDataSource = options.dataSource;
					options.dataSource = null;
					this._originalOptions = options
				}
				if(options.autoGenerateColumns === undefined) {
					cols = options.columns;
					if($.type(cols) === "array" && cols.length) {
						options.autoGenerateColumns = false
					}
				}
			}
			$.Widget.prototype._createWidget.apply(this, arguments)
		},
		_execSetOptionCallbacks: function(key, value) {
			var callbacks = this._setOptionCallbacks || [], i, len = callbacks.length;
			for(i = 0; i < len; i++) {
				callbacks[i].func(key, value)
			}
		},
		_showHideHeader: function(show) {
			var header = this.headersTable(), fHeader = this.hasFixedColumns() ? this.fixedHeadersTable() : $();
			if(!header.length || !header.is("table") || header.find("tbody").length) {
				header = this.element.find("thead tr");
				fHeader = fHeader.find("thead>tr")
			}
			if(show) {
				header.show();
				fHeader.show()
			} else {
				header.hide();
				fHeader.hide()
			}
		},
		_setOption: function(key, value) {
			var isScrolling, caption, tmp, cval;
			if(value === this.options[key]) {
				return
			}
			cval = this.options[key];
			isScrolling = this.options.height !== null || this.options.width !== null;
			if(key === "columns") {
				this.renderMultiColumnHeader(value);
				return
			}
			$.Widget.prototype._setOption.apply(this, arguments);
			if(key === "virtualization" || key === "autoGenerateColumns" || key === "rowVirtualization" || key === "columnVirtualization" || key === "fixedHeaders" || key === "scrollbars") {
				throw new Error($.ig.Grid.locale.optionChangeNotSupported.replace("{optionName}", key))
			}
			this._execSetOptionCallbacks(key, value);
			if(key === "width") {
				if(isScrolling === true) {
					if(typeof cval === "string" && cval.indexOf("%") !== -1 && this._gridHasWidthInPixels()) {
						throw new Error($.ig.Grid.locale.widthChangeFromPercentagesToPixelsNotSupported)
					} else if(!(typeof cval === "string" && cval.indexOf("%") !== -1) && this._gridHasWidthInPercent()) {
						throw new Error($.ig.Grid.locale.widthChangeFromPixelsToPercentagesNotSupported)
					}
					this._setGridWidth(value);
					this._fireInternalEvent("_gridWidthChanged")
				} else {
					throw new Error($.ig.Grid.locale.optionChangeNotScrollingGrid.replace("{optionName}", key))
				}
			} else if(key === "height") {
				if(isScrolling === true) {
					this.scrollContainer().css("overflow-y", "auto");
					if(this.options.autoAdjustHeight) {
						this.container().css("height", value);
						this._virtualHeightReset = true;
						this._initializeHeights()
					} else {
						if(this.options.virtualization === true || this.options.columnVirtualization === true || this.options.rowVirtualization === true) {
							this._vdisplaycontainer().css("height", value);
							this._scrollContainer().css("height", value);
							this.element.height(value)
						} else {
							this.scrollContainer().css("height", value)
						}
					}
					if(this.options.virtualization || this.options.rowVirtualization || this.options.columnVirtualization) {
						if(this.options.virtualizationMode === "fixed") {
							this._buildVirtualDom();
							this.virtualScrollTo(this._startRowIndex)
						} else {
							tmp = this._persistVirtualScrollTop;
							this._persistVirtualScrollTop = true;
							this._saveFirstVisibleTRIndex();
							this._renderVirtualRecords();
							this._persistVirtualScrollTop = tmp
						}
					}
					this._fireInternalEvent("_heightChanged")
				} else {
					throw new Error($.ig.Grid.locale.optionChangeNotScrollingGrid.replace("{optionName}", key))
				}
			} else if(key === "dataSource") {
				this.options.dataSource = value;
				this.dataBind();
				if(this._inferOpType() !== "remote") {
					this.autoSizeColumns()
				}
			} else if(key === "showHeader") {
				this._showHideHeader(value)
			} else if(key === "caption") {
				caption = this._caption();
				if(caption.length === 0) {
					this._renderCaption();
					if(this.options.autoAdjustHeight) {
						this._initializeHeights()
					}
				} else {
					caption.text(value)
				}
			} else if(key === "alternateRowStyles") {
				this._renderData()
			}
		},
		_initialized: false,
		_headersInitialized: false,
		_footerInitialized: false,
		_mouseClickEventHandler: function(event, eventToTrigger) {
			var $et = $(event.target), row = $et.closest("tr"), key = row.attr("data-id"), describedBy, colKey, $td, res, currGrid, colIndex = $et.closest("td").index(), rowIndex = row.index(), grid = this, i;
			if(grid.element.closest(".ui-iggrid-root").data("igGrid")) {
				currGrid = $et.closest(this._isMultiRowGrid() ? ".ui-iggrid-table-mrl" : ".ui-iggrid-table").data("igGrid");
				if(currGrid && grid.id() !== currGrid.id()) {
					return
				}
			}
			if(key === "" || key === null || key === undefined) {
				key = rowIndex
			}
			$td = $(event.target);
			if(!$td.is("td")) {
				$td = $(event.target).closest("td")
			}
			describedBy = $td.attr("aria-describedBy");
			if(describedBy === null || describedBy === undefined) {
				return
			}
			describedBy = describedBy.split(" ");
			for(i = 0; i < describedBy.length; i++) {
				if(describedBy[i].startsWith(this.id() + "_")) {
					colKey = describedBy[i].slice(describedBy[i].indexOf(this.id() + "_") + this.id().length + 1)
				}
			}
			if(colKey === null || colKey === undefined) {
				return
			}
			if(this._isMultiRowGrid()) {
				colIndex = this.columnByKey(colKey).columnIndex
			}
			if(grid.hasFixedColumns()) {
				if($td.length === 1) {
					res = grid.getColumnByTD($td);
					if(res !== null) {
						colKey = res.column.key;
						colIndex = res.index
					}
				}
			}
			if(!$et.closest("tr").parent().is("thead") && ($et.is("td") || $et.closest("td").length === 1 && $et.closest("td").parent().attr("data-container") !== "true")) {
				key = grid._fixPKValue(key);
				if(grid.hasFixedColumns()) {
					row = grid._isFixedElement(row) ? row.add(this.rowAt(rowIndex)) : row.add(this.fixedRowAt(rowIndex))
				}
				grid._trigger(eventToTrigger, event, {rowIndex: rowIndex, rowKey: key, row: row, colIndex: colIndex, colKey: colKey, cellElement: $td[0], owner: grid})
			}
		},
		_create: function() {
			var grid = this, i, container, attr;
			this._mouseClickEventHandlers = {
				click: function(event) {
					grid._mouseClickEventHandler(event, grid.events.cellClick)
				}, contextmenu: function(event) {
					grid._mouseClickEventHandler(event, grid.events.cellRightClick)
				}
			};
			this._isHierarchicalGrid = false;
			this._hasUnboundColumns = false;
			if(this.options._isHierarchicalGrid === true) {
				this._isHierarchicalGrid = true
			}
			if(this.cloneChildElements && this.element.is("table") && this.element.children().length > 0) {
				this._initialChildren = this.element.children().clone(true)
			}
			this._initialAttributes = [];
			attr = this.element[0].attributes;
			for(i = 0; i < attr.length; i++) {
				if(attr[i].name !== "id") {
					this._initialAttributes.push({name: attr[i].name, value: attr[i].value})
				}
			}
			this._rtl = this.element[0].style.direction === "rtl";
			this._padding = this._rtl ? "padding-left" : "padding-right";
			if(this.tmpDataSource !== null && this.tmpDataSource !== undefined) {
				this.options.dataSource = this.tmpDataSource;
				this._originalOptions.dataSource = this.tmpDataSource
			}
			this._testInnerHtml();
			this._setOptionCallbacks = [];
			this._headerInitCallbacks = [];
			this._footerInitCallbacks = [];
			this._cellStyleSubscribers = [];
			this._firstBind = true;
			this._isMultiColumnGrid = false;
			this._unboundValues = {};
			if(!this.options.columns) {
				this.options.columns = []
			}
			if(!this.options.features) {
				this.options.features = []
			}
			if(this._isMultiColumnHeader() === true) {
				this._isMultiColumnGrid = true;
				this._generateColumnFlatStructure(this.options.columns);
				this._headerCells = []
			}
			if(this.options.rowVirtualization === true && this.options.virtualizationMode === "continuous") {
				this.options.virtualization = true
			}
			if(this.options.columnVirtualization === true) {
				this.options.virtualization = true;
				if(this.options.virtualizationMode === "continuous") {
					throw new Error($.ig.Grid.locale.colVirtualizationDenied)
				}
				this.options.virtualizationMode = "fixed"
			}
			if(this.options.virtualization === true || this.options.columnVirtualization === true || this.options.rowVirtualization === true) {
				if(this.options.virtualizationMode === undefined || this.options.virtualizationMode === "") {
					this.options.virtualizationMode = "fixed"
				}
				if(this.options.virtualizationMode === "fixed") {
					this.options.fixedHeaders = true;
					this.options.fixedFooters = true
				}
			}
			if(this.options.virtualization === true || this.options.rowVirtualization === true) {
				if(this.options.defaultColumnWidth === "*") {
					throw new Error($.ig.Grid.locale.virtualizationNotSupportedWithAutoSizeCols)
				}
				for(i = 0; i < this.options.columns.length; i++) {
					if(this.options.columns[i].width === "*") {
						throw new Error($.ig.Grid.locale.virtualizationNotSupportedWithAutoSizeCols)
					}
				}
			}
			if(this.options.virtualization === true && this.options.virtualizationMode === "continuous") {
				this.options.fixedHeaders = true
			}
			if((this.options.height === null || parseInt(this.options.height, 10) <= 0) && this.options.fixedHeaders === true) {
				this.options.fixedHeaders = false
			}
			if((this.options.height === null || parseInt(this.options.height, 10) <= 0) && this.options.fixedFooters === true) {
				this.options.fixedFooters = false
			}
			this._analyzeMultiRowLayout();
			this.dataBind(true);
			this.element.bind(this._mouseClickEventHandlers);
			if(this.options.enableResizeContainerCheck && (this.options.height !== null && this.options.height.indexOf && this.options.height.indexOf("%") !== -1 || this.options.width !== null && this.options.width.indexOf && this.options.width.indexOf("%") !== -1 || !this.element.is(":visible"))) {
				if(!this.element.is(":visible")) {
					this._recheckVisibility = true
				}
				if($.ig.util.isIE) {
					container = this.container();
					if(container.length > 0 && container[0].attachEvent) {
						this._resizeContainerHandler = $.proxy(this.resizeContainer, this);
						container[0].attachEvent("onresize", this._resizeContainerHandler)
					}
				}
				if(!this._resizeContainerHandler) {
					this._resId = setInterval($.proxy(this.resizeContainer, this), this.resizeTimeout)
				}
			}
			for(i = 0; i < this.options.columns.length; i++) {
				if(this.options.columns[i].hidden === undefined) {
					this.options.columns[i].hidden = false
				}
			}
			this._uiSoftDirtyHandler = $.proxy(this._onFeaturesSoftDirty, this);
			this.element.bind("iggriduisoftdirty", this._uiSoftDirtyHandler);
			this._oldScrollTop = 0;
			this.element.trigger(this.events.created, {owner: this});
			if(this._rtl) {
				this.container().addClass(this.css.rtl)
			}
		},
		_fixPKValue: function(val) {
			var col, data, pk = this.options.primaryKey;
			if(_aNull(val)) {
				return null
			}
			if(pk) {
				col = this.columnByKey(pk);
				if(col && col.dataType) {
					if(col.dataType === "number" || col.dataType === "numeric") {
						val = parseInt(val, 10)
					}
				} else {
					data = this.dataSource._data;
					if(data && data.length > 0) {
						if(typeof data[0][pk] === "number") {
							val = parseInt(val, 10)
						}
					}
				}
			} else {
				data = this.dataSource._data;
				if(data && data.length > 0) {
					if(typeof data[0].ig_pk === "number") {
						val = parseInt(val, 10)
					}
				}
			}
			return val
		},
		hasFixedDataSkippedColumns: function() {
			return !!this._hasFixedDataSkippedColumns
		},
		hasFixedColumns: function() {
			return this._hasFixedColumns
		},
		fixingDirection: function() {
			return this._fixingDirection
		},
		isFixedColumn: function(colKey) {
			var isFixed = false, typeColKey = $.type(colKey), cols;
			if(!this.hasFixedColumns()) {
				return false
			}
			if(typeColKey === "string") {
				$.each(this._fixedColumns, function(ind, c) {
					if(c.key === colKey) {
						isFixed = true;
						return false
					}
				})
			} else if(typeColKey === "number") {
				cols = this._visibleColumns();
				if(colKey < 0 || colKey >= cols.length) {
					return false
				}
				isFixed = cols[colKey].fixed === true
			}
			return isFixed
		},
		_onFixedColumnsChanged: function(obj) {
			this._fireInternalEvent("_fixedColumnsChanged", obj)
		},
		_onGroupedColumnsChanging: function(groupedColumns) {
			this._fireInternalEvent("_groupedColumnsChanging", {groupedColumns: groupedColumns})
		},
		_onGroupedColumnsChanged: function(groupedColumns) {
			this._fireInternalEvent("_groupedColumnsChanged", {groupedColumns: groupedColumns})
		},
		_testInnerHtml: function() {
			var t = document.createElement("table");
			try {
				t.innerHTML = "<tr><td> t </td></tr>";
				this._canreplaceinner = true
			} catch(e) {
				this._canreplaceinner = false
			}
		},
		resizeContainer: function() {
			var scrollContainerWidth, o = this.options, visibilityChanged = false, v = o.virtualization === true || o.rowVirtualization === true || o.columnVirtualization === true;
			if(this._recheckVisibility && this.element.is(":visible")) {
				this._prevContainerHeight = 0;
				visibilityChanged = true;
				this._recheckVisibility = false;
				if(this._resId && !(this.options.height !== null && this.options.height.indexOf && this.options.height.indexOf("%") !== -1 || this.options.width !== null && this.options.width.indexOf && this.options.width.indexOf("%") !== -1)) {
					clearInterval(this._resId)
				}
			}
			if(o.autoAdjustHeight && this.container().height() !== this._prevContainerHeight) {
				this._initializeHeights();
				if(v && visibilityChanged) {
					this._avgRowHeight = null;
					if(!this.container().find("#" + this.id() + " > tbody > tr:not([data-container]):visible:first").length) {
						delete this._virtualDom;
						this._renderVirtualRecords()
					}
					this._updateVirtualScrollContainer();
					this._onVirtualVerticalScroll()
				}
			}
			if(o.width !== null && o.height !== null) {
				if(v === false) {
					scrollContainerWidth = this.scrollContainer().width()
				} else {
					scrollContainerWidth = this._vdisplaycontainer().width() + this._scrollbarWidth()
				}
				if(!scrollContainerWidth) {
					return
				}
				if(this._gridInnerWidth !== scrollContainerWidth && (this._gridInnerWidth > 0 || scrollContainerWidth > 0)) {
					this._gridInnerWidth = scrollContainerWidth;
					this._updateHScrollbarVisibility()
				}
				if(v === false && this.scrollContainer().get(0).scrollHeight > this.scrollContainer().get(0).clientHeight !== this._hasVerticalScrollbar) {
					this._adjustLastColumnWidth()
				}
			}
		},
		_isMultiColumnHeader: function() {
			var cols = this.options.columns, i;
			for(i = 0; i < cols.length; i++) {
				if(cols[i].group !== undefined && cols[i].group !== null) {
					return true
				}
			}
			return false
		},
		isGroupHeader: function(colKey) {
			if(this._isMultiColumnGrid && !this.columnByKey(colKey)) {
				return true
			}
			return false
		},
		_analyzeColumnByKey: function(key) {
			if(_aNull(key)) {
				return null
			}
			var res, isGroupHeader = this.isGroupHeader(key), children = isGroupHeader ? this._getMultiHeaderColumnById(key).children : [this.columnByKey(key)], colInfo = this._getColumnInfo(children[0].key, this.options.columns), colMCHInfo = this._isMultiColumnGrid ? this._getColumnInfo(key) : null;
			res = {
				key: key,
				vIndex: this.getVisibleIndexByKey(children[0].key, true),
				vIndexNonDataCols: this.getVisibleIndexByKey(children[0].key, false),
				dIndex: colInfo.index,
				children: children,
				colObj: colInfo.column
			};
			if(colMCHInfo) {
				res = $.extend(res, {dMCHIndex: colMCHInfo.index, colMCHObj: colMCHInfo.column, isGroupHeader: isGroupHeader})
			}
			return res
		},
		_analyzeColumnMovingObjects: function(colKey, targetKey, after, isToFix) {
			var isMCH = this._isMultiColumnGrid, i, fCols, cols = this.options.columns, at = {
				dIndex: -1,
				dMCHIndex: -1,
				vIndex: -1
			}, fdLeft = this.fixingDirection() === "left", target = this._analyzeColumnByKey(targetKey), resObj = {from: this._analyzeColumnByKey(colKey), at: at, target: target};
			if(target) {
				at.dIndex = after ? target.dIndex + target.children.length : target.dIndex;
				at.vIndex = after ? target.vIndex + target.children.length : target.dIndex;
				if(isMCH) {
					at.dMCHIndex = after ? target.dMCHIndex + 1 : target.dMCHIndex
				}
			} else {
				fCols = this._fixedColumns || [];
				if(isToFix) {
					at.dIndex = fdLeft ? fCols.length : cols.length;
					at.vIndex = this.getVisibleIndexByKey(cols[at.dIndex], true);
					if(isMCH) {
						for(i = 0; i < this._oldCols.length; i++) {
							at.dMCHIndex = i;
							if(!this._oldCols[i].fixed && fdLeft || this._oldCols[i].fixed && !fdLeft) {
								at.dMCHIndex = i;
								break
							}
						}
						at.dMCHIndex = fdLeft ? at.dMCHIndex : at.dMCHIndex + 1
					}
				} else {
					at.dIndex = fdLeft ? fCols.length - resObj.from.children.length - 1 : 0;
					at.vIndex = this.getVisibleIndexByKey(cols[at.dIndex], true);
					if(isMCH) {
						for(i = 0; i < this._oldCols.length; i++) {
							if(!this._oldCols[i].fixed && fdLeft || this._oldCols[i].fixed && !fdLeft) {
								at.dMCHIndex = i - 1;
								break
							}
						}
					}
				}
			}
			return resObj
		},
		_analyzeMultiColumnHeaders: function(cols, newCols, level, oldCols, children, isHidden) {
			var i, j, res, colsLength = cols.length, colspan = 0, ind = [], groupChildren = [], identifier, hidden;
			for(i = 0; i < colsLength; i++) {
				if(cols[i].group !== undefined && cols[i].group !== null) {
					if(cols[i].key !== undefined && cols[i].key !== null) {
						identifier = cols[i].key.toString()
					} else {
						identifier = (this._multiColumnIdentifier++).toString()
					}
					if(!cols[i].identifier) {
						cols[i].identifier = identifier
					}
					groupChildren = [];
					hidden = false;
					if(isHidden === true || cols[i].hidden === true) {
						hidden = true
					}
					res = this._analyzeMultiColumnHeaders(cols[i].group, newCols, level + 1, oldCols[i].group, groupChildren, hidden);
					oldCols[i].colspan = res.colspan;
					oldCols[i].children = groupChildren;
					for(j = 0; j < groupChildren.length; j++) {
						children.push(groupChildren[j])
					}
					ind.push(i);
					colspan += res.colspan
				} else {
					colspan++;
					oldCols[i].level = 0;
					oldCols[i].level0 = true;
					if(isHidden === true) {
						cols[i].hidden = true
					}
					children.push(cols[i]);
					newCols.push(cols[i])
				}
			}
			for(j = 0; j < ind.length; j++) {
				oldCols[ind[j]].level = this._maxLevel - level
			}
			return {colspan: colspan}
		},
		_analyzeMultiRowLayout: function() {
			var i, j, cols = this.options.columns, ri, ci, col, t, res, hasWidths = false;
			if(!cols.length) {
				return
			}
			for(i = 0; i < cols.length; i++) {
				ri = cols[i].rowIndex;
				ci = cols[i].columnIndex;
				if(ci === null || ri === null || isNaN(ri - 0) || isNaN(ci - 0)) {
					return
				}
			}
			this._rlm = [];
			for(i = 0; i < cols.length; i++) {
				this._addColumnToLayout(cols[i]);
				if(cols[i].width) {
					hasWidths = true
				}
			}
			this._mrl = $.extend(true, [], this._rlm);
			t = this._mrl;
			for(i = 0; i < t.length; i++) {
				for(j = 0; j < t[i].length; j++) {
					if(!t[i][j]) {
						throw new Error($.ig.Grid.locale.multiRowLayoutNotComplete)
					}
				}
			}
			if(hasWidths) {
				this._analyzeMCLWidths()
			}
			this._rlp = [];
			for(i = 0; i < t.length; i++) {
				this._rlp.push([]);
				for(j = 0; j < t[i].length; j++) {
					if(t[i][j] && $.type(t[i][j]) === "string") {
						col = this.columnByKey(t[i][j]);
						res = this._getSizeOfMultiSpanCol(i, j, t);
						this._rlp[i].push({col: col, rs: res.rs, cs: res.cs})
					}
				}
			}
			this._maxCols = this._rlm[0].length
		},
		_analyzeMCLWidths: function() {
			var t = this._rlm, i, j, col, colKey, minColSpan, colSpan, isPercentage = false;
			this._colGroupWidths = [];
			isPercentage = this._checkForPercentageWidths();
			for(i = 0; i < t.length; i++) {
				for(j = 0; j < t[i].length; j++) {
					colKey = t[i][j];
					col = this.columnByKey(colKey);
					if(col.width === undefined) {
						col.width = this._resolveWidth(col)
					}
					colSpan = col.colSpan ? col.colSpan : 1;
					if(colSpan === 1) {
						this._colGroupWidths[col.columnIndex] = col.width
					}
				}
			}
			if(isPercentage) {
				$(this.options.columns).each(function() {
					if(this.width && (typeof this.width !== "string" || !this.width.contains("%"))) {
						this.width = parseInt(this.width) + "%"
					}
				})
			}
			for(j = 0; j < t[0].length; j++) {
				if(!this._colGroupWidths[j]) {
					for(i = 0; i < t.length; i++) {
						col = this.columnByKey(t[i][j]);
						if(col.width && (minColSpan === undefined || minColSpan < col.colSpan)) {
							this._colGroupWidths[j] = parseInt(col.width) / col.colSpan
						}
					}
				}
				if(isPercentage && this._colGroupWidths[j] && (typeof this._colGroupWidths[j] !== "string" || !this._colGroupWidths[j].contains("%"))) {
					this._colGroupWidths[j] = parseInt(this._colGroupWidths[j]) + "%"
				}
			}
		},
		_checkForPercentageWidths: function() {
			var isPercentage = false, isPixels = false;
			$(this.options.columns).each(function() {
				if(this.width) {
					if(typeof this.width === "string" && this.width.contains("%")) {
						isPercentage = true
					} else if(this.width && typeof this.width === "number" || this.width.contains("px")) {
						isPixels = true
					}
				}
			});
			if(isPixels && isPercentage) {
				throw new Error($.ig.Grid.locale.multiRowLayoutMixedWidths)
			}
			return isPercentage
		},
		_resolveWidthMultiCol: function(col, resolveCol) {
			var subCol, subColsWidths = [], currCol, t = this._rlm, sum, cInd, rInd, ind, nullWidths, currSum, nullInd;
			for(cInd = 0; cInd < col.colSpan; cInd++) {
				for(rInd = 0; rInd < t.length; rInd++) {
					if(rInd === col.rowIndex) {
						continue
					}
					currCol = this.columnByKey(t[rInd][col.columnIndex + cInd]);
					if(!currCol.width || resolveCol === currCol.key) {
						continue
					}
					if(this._colGroupWidths[col.columnIndex + cInd]) {
						subColsWidths[cInd] = this._colGroupWidths[col.columnIndex + cInd]
					} else {
						if(currCol.colSpan === 1) {
							subColsWidths[cInd] = parseInt(currCol.width);
							this._colGroupWidths[col.columnIndex + cInd] = subColsWidths[cInd];
							break
						}
						sum = 0;
						for(ind = currCol.columnIndex; ind < currCol.columnIndex + currCol.colSpan; ind++) {
							if(ind === col.columnIndex + cInd) {
								continue
							}
							subCol = {key: currCol.key + ind, rowIndex: currCol.rowIndex, columnIndex: ind, colSpan: 1};
							subCol.width = this._resolveWidth(subCol, col.key);
							if(subCol.width) {
								sum += parseInt(subCol.width)
							} else {
								sum = 0;
								subColsWidths[cInd] = null;
								break
							}
						}
						if(sum > 0) {
							this._colGroupWidths[col.columnIndex + cInd] = parseInt(currCol.width) - sum;
							subColsWidths[cInd] = this._colGroupWidths[col.columnIndex + cInd]
						} else {
							subColsWidths[cInd] = null
						}
					}
				}
				if(subColsWidths[cInd] === undefined) {
					subColsWidths[cInd] = null
				}
			}
			nullWidths = $(subColsWidths).filter(function(index) {
				return subColsWidths[index] === null || subColsWidths[index] === undefined
			});
			if(nullWidths.length === 1) {
				currSum = 0;
				$(subColsWidths).each(function(index) {
					if(subColsWidths[index] !== undefined && subColsWidths[index] !== null) {
						currSum += parseInt(subColsWidths[index])
					} else {
						nullInd = index
					}
				});
				subColsWidths[nullInd] = parseInt(col.width) - currSum;
				this._colGroupWidths[col.columnIndex + nullInd] = subColsWidths[nullInd]
			}
			return subColsWidths
		},
		_resolveWidth: function(col, resolveCol) {
			var t = this._rlm, colSpan = col.colSpan === undefined || col.colSpan === null ? 1 : col.colSpan, columnIndex = col.columnIndex, rowIndex = col.rowIndex, rInd = 0, cInd = 0, currWidth, sum, subPartsCount = 0, currCol, relColumn, commonPart, width = null;
			if(col.width !== undefined) {
				return col.width
			}
			if(col.colSpan === 1 && this._colGroupWidths[col.columnIndex]) {
				return this._colGroupWidths[col.columnIndex]
			}
			for(rInd = 0; rInd < t.length; rInd++) {
				if(rInd === rowIndex) {
					continue
				}
				currCol = this.columnByKey(t[rInd][columnIndex]);
				currCol.colSpan = currCol.colSpan === undefined || currCol.colSpan === null ? 1 : currCol.colSpan;
				if(!currCol.width || resolveCol === currCol.key) {
					continue
				}
				commonPart = this._getCommonColIndexes(col, currCol);
				if(currCol.colSpan === colSpan && commonPart.length === currCol.colSpan) {
					width = currCol.width;
					break
				} else if(commonPart.length < currCol.colSpan && commonPart.length === colSpan) {
					sum = 0;
					for(cInd = currCol.columnIndex; cInd < currCol.columnIndex + currCol.colSpan; cInd++) {
						if(t[rowIndex][cInd] !== col.key) {
							relColumn = this.columnByKey(t[rowIndex][cInd]);
							relColumn.colSpan = relColumn.colSpan === undefined || relColumn.colSpan === null ? 1 : relColumn.colSpan;
							currWidth = relColumn.width;
							if(!currWidth) {
								if(resolveCol === relColumn.key) {
									return null
								}
								currWidth = this._resolveWidth(relColumn, col.key);
								if(!currWidth) {
									return null
								}
								relColumn.width = currWidth
							}
							if(relColumn.colSpan) {
								cInd += relColumn.colSpan - 1
							}
							commonPart = this._getCommonColIndexes(currCol, relColumn);
							if(commonPart.length !== relColumn.colSpan && commonPart.length > 0) {
								currWidth = this._calcCommonPartSum(relColumn, commonPart, resolveCol);
								if(!currWidth) {
									return null
								}
								subPartsCount += this._getCommonColIndexes(col, currCol).length
							} else {
								subPartsCount += this._getCommonColIndexes(col, currCol).length
							}
							if(!currWidth) {
								break
							}
							sum += parseInt(currWidth, 10)
						}
					}
					if(sum !== 0 && subPartsCount === currCol.colSpan - commonPart.length) {
						width = parseInt(currCol.width) - sum;
						break
					}
				} else if(commonPart.length < colSpan && currCol.colSpan === commonPart.length) {
					sum = 0;
					subPartsCount = 0;
					for(cInd = col.columnIndex; cInd < col.columnIndex + col.colSpan; cInd++) {
						relColumn = this.columnByKey(t[currCol.rowIndex][cInd]);
						relColumn.colSpan = relColumn.colSpan === undefined || relColumn.colSpan === null ? 1 : relColumn.colSpan;
						currWidth = relColumn.width;
						if(!currWidth) {
							currWidth = this._resolveWidth(relColumn, col.key);
							if(!currWidth) {
								continue
							}
							relColumn.width = currWidth
						}
						if(relColumn.colSpan) {
							cInd += relColumn.colSpan - 1
						}
						commonPart = this._getCommonColIndexes(col, relColumn);
						if(commonPart.length !== relColumn.colSpan && commonPart.length > 0) {
							if(resolveCol !== currCol.key && resolveCol !== relColumn.key) {
								currWidth = this._calcCommonPartSum(relColumn, commonPart, resolveCol);
								if(!currWidth) {
									break
								}
								subPartsCount += commonPart.length
							} else {
								break
							}
						} else {
							subPartsCount += relColumn.colSpan
						}
						if(!currWidth) {
							break
						}
						sum += parseInt(currWidth, 10)
					}
					if(sum !== 0 && subPartsCount === colSpan) {
						width = sum;
						break
					}
				} else if(commonPart.length < colSpan && commonPart.length < currCol.colSpan) {
					subPartsCount = 0;
					sum = this._calcCommonPartSum(currCol, commonPart, resolveCol);
					if(!sum) {
						return null
					}
					subPartsCount += commonPart.length;
					for(cInd = col.columnIndex; cInd < col.columnIndex + col.colSpan; cInd++) {
						relColumn = this.columnByKey(t[currCol.rowIndex][cInd]);
						relColumn.colSpan = relColumn.colSpan === undefined || relColumn.colSpan === null ? 1 : relColumn.colSpan;
						if(relColumn.key === currCol.key) {
							continue
						}
						currWidth = relColumn.width;
						if(!currWidth) {
							currWidth = this._resolveWidth(relColumn, col.key);
							if(!currWidth) {
								continue
							}
							relColumn.width = currWidth
						}
						commonPart = this._getCommonColIndexes(col, relColumn);
						if(commonPart.length !== relColumn.colSpan && commonPart.length > 0) {
							if(resolveCol !== currCol.key && resolveCol !== relColumn.key) {
								currWidth = this._calcCommonPartSum(relColumn, commonPart, resolveCol);
								if(currWidth === null) {
									return null
								}
								subPartsCount += commonPart.length
							} else {
								break
							}
						} else {
							subPartsCount += relColumn.colSpan
						}
						if(!currWidth) {
							break
						}
						sum += parseInt(currWidth, 10);
						if(sum !== 0 && subPartsCount === colSpan) {
							width = sum;
							break
						}
					}
				}
			}
			return width
		},
		_getCommonColIndexes: function(col1, col2) {
			var t = this._rlm, indexes = [], i;
			if(col1.colSpan === 1 && t[col2.rowIndex][col1.columnIndex] === col2.key) {
				indexes[0] = col1.columnIndex;
				return indexes
			}
			for(i = 0; i < t[col1.rowIndex].length; i++) {
				if(t[col1.rowIndex][i] === col1.key && t[col2.rowIndex][i] === col2.key) {
					indexes.push(i)
				}
			}
			return indexes
		},
		_calcCommonPartSum: function(relColumn, commonPart, resolveCol) {
			var currSum = 0, ind, w, hasNulls = false, widthDistribution = this._resolveWidthMultiCol(relColumn, resolveCol);
			if(widthDistribution.length !== relColumn.colSpan) {
				return null
			}
			for(ind = 0; ind < commonPart.length; ind++) {
				w = widthDistribution[commonPart[ind] - relColumn.columnIndex];
				if(w) {
					currSum += parseInt(w, 10)
				} else {
					currSum = 0;
					hasNulls = true;
					break
				}
			}
			if(hasNulls) {
				currSum = 0;
				for(ind = 0; ind < widthDistribution.length; ind++) {
					if(!commonPart.contains(ind + relColumn.columnIndex)) {
						currSum += widthDistribution[ind]
					}
				}
				if(currSum) {
					currSum = relColumn.width - currSum
				}
			}
			return currSum
		},
		_addColumnToLayout: function(col) {
			var t = this._rlm, x, y, colLen, totalWidth, totalHeight, colSpan, rowSpan;
			colLen = t.length ? t[0].length : 0;
			colSpan = col.colSpan ? col.colSpan : 1;
			rowSpan = col.rowSpan ? col.rowSpan : 1;
			totalWidth = col.columnIndex + colSpan - 1;
			totalHeight = col.rowIndex + rowSpan - 1;
			if(totalHeight >= t.length) {
				x = t.length - 1;
				while(++x <= totalHeight) {
					t.push(Array.apply(null, new Array(colLen)).map(function() {
						return null
					}))
				}
			}
			if(totalWidth >= colLen) {
				for(x = 0; x < t.length; x++) {
					for(y = colLen; y <= totalWidth; y++) {
						t[x].push(null)
					}
				}
			}
			for(x = col.rowIndex; x <= totalHeight; x++) {
				for(y = col.columnIndex; y <= totalWidth; y++) {
					if(t[x][y]) {
						throw new Error($.ig.Grid.locale.multiRowLayoutColumnError.replace("{key1}", col.key).replace("{key2}", t[x][y]))
					}
					t[x][y] = col.key
				}
			}
			return true
		},
		_isMultiRowGrid: function() {
			return !!this._rlm
		},
		_multiRowLayoutRenderingHelper: function(fixed) {
			return this._rlp
		},
		getElementInfo: function(elem) {
			var column = null, rowId = null, rowIndex = null, recordIndex = null;
			if(!(elem instanceof jQuery)) {
				elem = $(elem)
			}
			if(elem.is("td")) {
				column = this.getColumnByTD(elem).column;
				rowIndex = elem.parent("tr").index() + (this._startRowIndex || 0);
				recordIndex = parseInt(rowIndex / this._recordVerticalSize(), 10);
				if(this.options.primaryKey) {
					rowId = this.dataSource.getCellValue(this.options.primaryKey, this.dataSource.dataView()[recordIndex])
				}
			} else if(elem.is("tr")) {
				rowIndex = elem.index() + (this._startRowIndex || 0);
				recordIndex = parseInt(rowIndex / this._recordVerticalSize(), 10);
				if(this.options.primaryKey) {
					rowId = this.dataSource.getCellValue(this.options.primaryKey, this.dataSource.dataView()[recordIndex])
				}
			}
			return {column: column, rowId: rowId, rowIndex: rowIndex, recordIndex: recordIndex}
		},
		_recordHorizontalSize: function() {
			return this._rlm && this._rlm.length ? this._rlm[0].length : this._visibleColumns().length
		},
		_recordVerticalSize: function() {
			return this._rlm ? this._rlm.length : 1
		},
		_getRowsByRecordIndex: function(recIndex) {
			var rows = [], i, tbody = this.element.find("tbody")[0];
			for(i = 0; i < this._recordVerticalSize(); i++) {
				rows.push(tbody.rows[recIndex * this._recordVerticalSize() + i])
			}
			return $(rows)
		},
		_getSizeOfMultiSpanCol: function(x, y, rlm) {
			var w = 1, h = 1, i = x + 1, j = y + 1, t = rlm, key = t[x][y];
			while(j < t[x].length && t[x][j] === key) {
				t[x][j] = -1;
				w++;
				j++
			}
			while(i < t.length && t[i][y] === key) {
				t[i][y] = -1;
				h++;
				i++
			}
			for(i = x + 1; i < x + h; i++) {
				for(j = y + 1; j < y + w; j++) {
					t[i][j] = -1
				}
			}
			return {cs: w, rs: h}
		},
		_getMultiHeaderColumnById: function(id, level, cols) {
			var i, colsLength, res = null;
			if(cols === null || cols === undefined) {
				if(this._oldCols === null || this._oldCols === undefined) {
					return null
				}
				cols = this._oldCols
			}
			colsLength = cols.length;
			for(i = 0; i < colsLength; i++) {
				if(cols[i].identifier === id && (level === undefined || cols[i].level === level)) {
					return cols[i]
				}
				if(cols[i].group !== null && cols[i].group !== undefined) {
					res = this._getMultiHeaderColumnById(id, level, cols[i].group);
					if(res !== null) {
						return res
					}
				}
			}
			return null
		},
		_getMaxLevelRecursive: function(level, cols) {
			var i, colsLength = cols.length, ml = level, l, rowspan;
			for(i = 0; i < colsLength; i++) {
				rowspan = cols[i].rowspan || cols[i].rowSpan || 1;
				if(cols[i].group !== undefined && cols[i].group !== null) {
					l = this._getMaxLevelRecursive(level + rowspan, cols[i].group);
					if(l > ml) {
						ml = l
					}
				} else if(rowspan > 0) {
					l = level + rowspan - 1;
					if(l > ml) {
						ml = l
					}
				}
			}
			return ml
		},
		_headerInit: function(tr, colgroup, prepend) {
			var i;
			for(i = 0; i < this._headerInitCallbacks.length; i++) {
				this._headerInitCallbacks[i].func(tr, colgroup, prepend)
			}
		},
		_footerInit: function(tr, colgroup, prepend, cssClass) {
			var i;
			for(i = 0; i < this._footerInitCallbacks.length; i++) {
				this._footerInitCallbacks[i].func(tr, colgroup, prepend, cssClass)
			}
		},
		id: function() {
			return this.element[0].id
		},
		_caption: function() {
			return this.container().find("caption")
		},
		_rootContainer: function() {
			var rootElement;
			if(!this._rContainer || this._rContainer.length === 0) {
				rootElement = this.element.closest(".ui-iggrid-root");
				this._rContainer = rootElement.length === 1 ? rootElement.data("igGrid").container() : this.container()
			}
			return this._rContainer
		},
		container: function() {
			if(!this._container || this._container.length === 0) {
				this._container = this.element.closest("div[id=" + this.id() + "_container]")
			}
			return this._container
		},
		headersTable: function() {
			if(this.options.fixedHeaders === true && this.options.height !== null) {
				return this.container().find("#" + this.id() + "_headers")
			}
			return this.element
		},
		footersTable: function() {
			if(this.options.fixedFooters === true && this.options.height !== null) {
				return this.container().find("#" + this.id() + "_footers")
			}
			return this.element
		},
		scrollContainer: function() {
			return this.container().children("#" + this.id() + "_scroll")
		},
		fixedContainer: function() {
			return this.container().find("#" + this.id() + "_mainFixedContainer")
		},
		fixedBodyContainer: function() {
			return this.container().find("#" + this.id() + "_fixedBodyContainer")
		},
		fixedFooterContainer: function() {
			return this.container().find("#" + this.id() + "_fixedFooterContainer")
		},
		fixedHeaderContainer: function() {
			return this.container().find("#" + this.id() + "_fixedHeaderContainer")
		},
		fixedHeadersTable: function() {
			if(this.options.fixedHeaders === true && this.options.height !== null) {
				return this.container().find("#" + this.id() + "_headers_fixed")
			}
			return this.container().find("#" + this.id() + "_fixed")
		},
		fixedFootersTable: function() {
			if(this.options.fixedFooters === true && this.options.height !== null) {
				return this.container().find("#" + this.id() + "_footers_fixed")
			}
			return this.container().find("#" + this.id() + "_fixed")
		},
		_vdisplaycontainer: function() {
			return this.container().find("#" + this.id() + "_displayContainer")
		},
		_virtualcontainer: function() {
			return this.container().find("#" + this.id() + "_virtualContainer")
		},
		_vhorizontalcontainer: function() {
			return this.container().find("#" + this.id() + "_horizontalScrollContainer")
		},
		_fixedfooters: function() {
			return this.container().find("#" + this.id() + "_footer_container")
		},
		cellAt: function(x, y, isFixed) {
			var i, row, colKey, recDataIndex;
			if(x === undefined || y === undefined) {
				return null
			}
			if(this.table === undefined) {
				this.table = this.element[0]
			}
			if(this._isMultiRowGrid()) {
				colKey = this._rlm[y % this._recordVerticalSize()][x];
				recDataIndex = parseInt(y / this._recordVerticalSize(), 10);
				return this._getCellsByColKey(this._getRowsByRecordIndex(recDataIndex), colKey)[0]
			}
			i = this._dataRowIndex(y);
			if(isFixed === true) {
				if(this._fixedTable === undefined) {
					this._fixedTable = this.element
				}
				return this._fixedTable[0].rows[i].cells[x]
			}
			row = this.table.rows[i];
			if(!row) {
				return null
			}
			return row.cells[x]
		},
		cellById: function(rowId, columnKey) {
			var colIndex, i, rows, isFixed = this.isFixedColumn(columnKey);
			if(_aNull(rowId) || _aNull(columnKey)) {
				return null
			}
			if(this.table === undefined) {
				this.table = this.element[0]
			}
			if(isFixed) {
				rows = this.fixedBodyContainer().find("tbody").first().children("[data-id='" + rowId + "']")
			} else {
				rows = this.element.children("tbody").children("[data-id='" + rowId + "']")
			}
			return this._getCellsByColKey(rows, columnKey)
		},
		_getCellsByColKey: function(container, colKey) {
			var cells = container.find("td"), cell, self = this;
			cell = cells.filter(function() {
				var describedBy = $(this).attr("aria-describedby"), i;
				if(describedBy === null || describedBy === undefined) {
					return false
				}
				describedBy = describedBy.split(" ");
				for(i = 0; i < describedBy.length; i++) {
					if(describedBy[i] === self.id() + "_" + colKey) {
						return true
					}
				}
				return false
			});
			return cell
		},
		fixedTable: function() {
			if(this._fixedTable === undefined) {
				this._fixedTable = this.element
			}
			return this._fixedTable
		},
		_calculateHeaderFooterRows: function() {
			var theadCount = 0, tfootCount = 0;
			theadCount = this.element.children("thead").children("tr").length;
			if($.ig.util.isOpera) {
				tfootCount = this.element.children("tfoot").children("tr").length
			}
			return theadCount + tfootCount
		},
		_dataRowIndex: function(i) {
			var extrahr, j;
			if(this.table === undefined) {
				this.table = this.element[0]
			}
			if(this._additionalTrCount === undefined || this._additionalTrCount === null) {
				this._additionalTrCount = this._calculateHeaderFooterRows()
			}
			if(this._hc === true) {
				extrahr = this.element.children("tbody").children("tr[data-container]");
				for(j = 0; j < extrahr.length; j++) {
					if($(extrahr[j]).index() <= i) {
						i += 1
					}
				}
			}
			i = i + this._additionalTrCount;
			if(i >= this.table.rows.length) {
				i = this.table.rows.length - 1
			} else if(i < 0) {
				i = 0
			}
			return i
		},
		immediateChildrenWidgets: function() {
			return this.element.children("tbody").children("tr").children(".ui-iggrid-childarea").children("div").children("div").map(function() {
				if($(this).children(".ui-iggrid-scrolldiv").length > 0) {
					return $(this).children(".ui-iggrid-scrolldiv").children(".ui-iggrid-table").data("igGrid")
				}
				return $(this).children(".ui-iggrid-table").data("igGrid")
			})
		},
		childrenWidgets: function() {
			return this.element.find("tbody > tr > .ui-iggrid-childarea").find(".ui-iggrid-table").map(function() {
				return $(this).data("igGrid")
			})
		},
		children: function() {
			return this.element.find("tbody > tr > .ui-iggrid-childarea").find(".ui-iggrid-table")
		},
		immediateChildren: function() {
			return this.element.children("tbody").children("tr").children(".ui-iggrid-childarea").children("div").children("div").map(function() {
				if($(this).children(".ui-iggrid-scrolldiv").length > 0) {
					return $(this).children(".ui-iggrid-scrolldiv").children(".ui-iggrid-table")
				}
				return $(this).children(".ui-iggrid-table")
			})
		},
		rowAt: function(i) {
			i = this._dataRowIndex(i);
			return this.table.rows[i]
		},
		rowById: function(rowId, isFixed) {
			if(_aNull(rowId)) {
				return null
			}
			if(isFixed) {
				return this.fixedBodyContainer().find("tbody").first().children("[data-id='" + rowId + "']")
			}
			return this.element.children("tbody").children("[data-id='" + rowId + "']")
		},
		fixedRowAt: function(i) {
			var rows = this.fixedBodyContainer().find("tbody>tr");
			if(rows.length > 0) {
				return rows[i]
			}
			return null
		},
		fixedRows: function() {
			return this.fixedBodyContainer().find("tbody>tr")
		},
		rows: function() {
			return this.element.children("tbody").children("tr")
		},
		allFixedRows: function() {
			return this.fixedBodyContainer().find("tbody tr")
		},
		allRows: function() {
			return this.element.find("tbody tr")
		},
		_getColumnInfo: function(id, cols) {
			var aCols = cols || this._oldCols || this.options.columns, i;
			for(i = 0; i < aCols.length; i++) {
				if(aCols[i].key === id || aCols[i].identifier === id) {
					return {column: aCols[i], index: i}
				}
			}
			return null
		},
		columnByKey: function(key) {
			var cols = this.options.columns, i;
			for(i = 0; i < cols.length; i++) {
				if(String(cols[i].key) === String(key)) {
					return cols[i]
				}
			}
			return null
		},
		columnByText: function(text) {
			var cols = this.options.columns, i;
			for(i = 0; i < cols.length; i++) {
				if(cols[i].headerText === text) {
					return cols[i]
				}
			}
			return null
		},
		selectedCells: function() {
			if(this._selection.settings.owner !== this) {
				return []
			}
			return this._selection.settings.multipleSelection ? this._selection.selectedCells() : null
		},
		selectedRows: function() {
			if(this._selection.settings.owner !== this) {
				return []
			}
			return this._selection.settings.multipleSelection ? this._selection.selectedRows() : null
		},
		selectedCell: function() {
			var selectedCells;
			if(this._selection.settings.owner !== this) {
				return null
			}
			selectedCells = this._selection.selectedCells();
			return this._selection.settings.multipleSelection ? null : selectedCells.length === 1 ? selectedCells[0] : null
		},
		selectedRow: function() {
			var selectedRows;
			if(this._selection.settings.owner !== this) {
				return null
			}
			selectedRows = this._selection.selectedRows();
			return this._selection.settings.multipleSelection ? null : selectedRows.length === 1 ? selectedRows[0] : null
		},
		activeCell: function() {
			if(this._selection instanceof $.ig.SelectedRowsCollection) {
				return null
			}
			if(this._selection.settings.owner !== this) {
				return null
			}
			return this._selection.activeCell()
		},
		activeRow: function() {
			if(this._selection instanceof $.ig.SelectedCellsCollection) {
				return null
			}
			if(this._selection.settings.owner !== this) {
				return null
			}
			return this._selection.activeRow()
		},
		getCellValue: function(rowId, colKey) {
			var id = parseInt(rowId, 10), i, cols = this.options.columns, colFound = false, rec, primaryKeyCol, tx;
			tx = this.dataSource.pendingTransactions();
			if(this.options.autoCommit === false && tx.length > 0) {
				for(i = 0; i < tx.length; i++) {
					if(tx[i].rowId === rowId) {
						if(tx[i].type === "cell" && tx[i].col === colKey) {
							rec = $.extend(true, {}, this.dataSource.findRecordByKey(rowId));
							rec[colKey] = tx[i].value;
							return this.dataSource.getCellValue(colKey, rec)
						}
						if(tx[i].type === "row" || tx[i].type === "newrow") {
							return this.dataSource.getCellValue(colKey, tx[i].row)
						}
					}
				}
			}
			if($.type(colKey) === "string") {
				for(i = 0; i < cols.length; i++) {
					if(cols[i].key === colKey) {
						colFound = true;
						break
					}
				}
				if(colFound === false) {
					throw new Error($.ig.Grid.locale.noSuchColumnDefined)
				}
			}
			if(this.options.primaryKey !== null) {
				primaryKeyCol = this.columnByKey(this.options.primaryKey);
				if(primaryKeyCol.dataType === "number" || primaryKeyCol.dataType === "numeric") {
					rec = this.dataSource.findRecordByKey(parseInt(rowId, 10))
				} else {
					rec = this.dataSource.findRecordByKey(rowId)
				}
				if(rec === null || rec === undefined) {
					throw new Error($.ig.Grid.locale.recordNotFound.replace("{id}", rowId))
				}
				return this.dataSource.getCellValue(colKey, rec)
			}
			if(id >= this.dataSource.dataView().length) {
				throw new Error($.ig.Grid.locale.indexOutOfRange.replace("{max}", this.dataSource.dataView().length))
			}
			if($.type(colKey) === "string") {
				return this.dataSource.getCellValue(colKey, this.dataSource.dataView()[id])
			}
			if(cols.length <= colKey) {
				throw new Error($.ig.Grid.locale.columnIndexOutOfRange.replace("{max}", cols.length))
			}
			return this.dataSource.getCellValue(colKey, this.dataSource.dataView()[id])
		},
		getCellText: function(rowId, colKey) {
			var colIndex;
			if($.type(colKey) === "string") {
				if(this.columnByKey(colKey) === null) {
					throw new Error($.ig.Grid.locale.columnNotFound.replace("{key}", colKey))
				}
				if(this.options.primaryKey !== null) {
					return this._getCellsByColKey(this.element.find("tr[data-id='" + rowId + "']"), colKey).text()
				} else {
					return this._getCellsByColKey(this._getRowsByRecordIndex(rowId), colKey).text()
				}
			} else {
				if(this._isMultiRowGrid()) {
					return null
				}
				colIndex = colKey
			}
			if(colIndex === undefined) {
				throw new Error($.ig.Grid.locale.columnNotFound.replace("{key}", colKey))
			}
			if(this.options.primaryKey !== null) {
				return this.element.find("tr[data-id='" + rowId + "']>td:nth-child(" + (colIndex + 1) + ")").text()
			}
			return $(this.cellAt(colIndex, parseInt(rowId, 10))).text()
		},
		setColumnTemplate: function(col, tmpl, render) {
			var colIdx = this._getColIdxById(this.options.columns, col);
			if(colIdx === null || colIdx === undefined) {
				return
			}
			col = this.options.columns[colIdx];
			col.template = tmpl;
			render = render === null || render === undefined ? true : render;
			if(render && !col.hidden) {
				this._renderData()
			}
		},
		commit: function(rowId) {
			var key = this._normalizedKey(rowId), row, idx;
			this.dataSource.commit(key);
			if(this._fireInternalEvent("_gridCommit")) {
				return
			}
			this._isToSetUnboundColumns = true;
			if(this.options.virtualization || this.options.rowVirtualization || this.options.columnVirtualization) {
				if(this.options.virtualizationMode === "continuous") {
					this._renderVirtualRecords()
				} else {
					this._buildVirtualDom();
					this.virtualScrollTo(this._startRowIndex)
				}
			} else if(key !== null) {
				row = this.rowById(key);
				if(row && row.length) {
					if(row.hasClass(this.css.deletedRecord)) {
						idx = row.index();
						row.remove();
						this._reapplyZebraStyle(idx)
					} else {
						row.removeClass(this.css.modifiedRecord)
					}
				}
			} else {
				this._renderData()
			}
		},
		rollback: function(rowId, updateUI) {
			var key = this._normalizedKey(rowId), transactions = this.dataSource.rollback(key), i, funcUpdateUI, fCols = this.hasFixedColumns(), grid = this;
			if(updateUI === true) {
				funcUpdateUI = function(transaction, fixed) {
					var $tbl = fixed ? grid.fixedTable() : grid.element, tr = $tbl.find("tr[data-id='" + transaction.rowId + "']"), content, tridx, rec, td, index, col;
					switch(transaction.type) {
					case"newrow":
						tridx = grid.element.children("tbody").children("tr:not([data-container],[data-grouprow])").index(tr);
						tr.remove();
						grid._reapplyZebraStyle(tridx);
						break;
					case"deleterow":
						tr.removeClass(grid.css.deletedRecord);
						break;
					case"cell":
						col = grid.columnByKey(transaction.col);
						tr.removeClass(grid.css.modifiedRecord);
						td = grid.cellById(transaction.rowId, transaction.col);
						rec = grid.dataSource.findRecordByKey(transaction.rowId);
						if(col.template && col.template.length) {
							content = grid._renderTemplatedCell(rec, col);
							index = content.indexOf(">");
							content = content.substring(index + 1, content.length);
							td.html(content)
						} else {
							td.html(String(grid._renderCell(rec[transaction.col], col, rec)))
						}
						break;
					case"row":
						tr.removeClass(grid.css.modifiedRecord);
						rec = grid.dataSource.findRecordByKey(transaction.rowId);
						grid._renderRow(rec, tr[0], rec[grid.options.primaryKey]);
						break
					}
				};
				if(!_aNull(rowId)) {
					if(transactions.length === 0) {
						return
					}
					i = transactions.length;
					while(i-- > 0) {
						funcUpdateUI(transactions[i]);
						if(fCols) {
							funcUpdateUI(transactions[i], true)
						}
					}
					this._fireInternalEvent("_rollbackApplied")
				} else {
					this.dataBind()
				}
				return transactions
			}
		},
		findRecordByKey: function(key) {
			return this.dataSource.findRecordByKey(key)
		},
		getDetachedRecord: function(t) {
			return this.dataSource.getDetachedRecord(t)
		},
		pendingTransactions: function() {
			return this.dataSource.pendingTransactions()
		},
		allTransactions: function() {
			return this.dataSource.allTransactions()
		},
		transactionsAsString: function() {
			return this.dataSource.transactionsAsString()
		},
		_normalizedKey: function(id) {
			var key, primaryKeyCol;
			if(id === undefined || id === null) {
				return null
			}
			key = id;
			if(this.options.primaryKey !== null) {
				primaryKeyCol = this.columnByKey(this.options.primaryKey);
				if(primaryKeyCol.dataType === "number" || primaryKeyCol.dataType === "numeric") {
					key = parseInt(id, 10)
				}
			} else {
				key = parseInt(id, 10)
			}
			return key
		},
		saveChanges: function(success, error) {
			this.dataSource.saveChanges(success, error)
		},
		_renderRow: function(rec, tr) {
			var i, td, cols, col, cs, cl, content, cv = this._isColumnVirtualizationEnabled();
			tr = $(tr);
			cols = this._visibleColumns();
			cs = this._startColIndex || 0;
			cl = cv ? this._virtualColumnCount + cs : cols.length;
			for(i = cs; i < cl; i++) {
				col = cols[i];
				td = this._getCellsByColKey(tr, col.key);
				if(col.template && col.template.length) {
					content = this._renderTemplatedCell(rec, col);
					if(content.indexOf("<td") === 0) {
						td.html($(content).html())
					} else {
						td.html(content)
					}
				} else {
					td.html(String(this._renderCell(rec[col.key], col, rec)))
				}
			}
			return tr
		},
		renderNewRow: function(rec) {
			var tbody = this.element.children("tbody"), index, self = this, virt = this.options.virtualization === true || this.options.rowVirtualization === true, fv = this.options.virtualizationMode === "fixed";
			if(virt) {
				this._trigger("virtualrendering");
				if(fv) {
					this._buildVirtualDom()
				} else {
					this._renderVirtualRecordsContinuous();
					this._startRowIndex = 0
				}
				this.virtualScrollTo(this._totalRowCount)
			} else {
				index = tbody.children('[data-container!="true"]').length;
				MSApp.execUnsafeLocalFunction(function() {
					if(self._isMultiRowGrid()) {
						tbody.append(self._renderRecordFromLayout(rec, index))
					} else {
						tbody.append(self._renderRecord(rec, index))
					}
				})
			}
		},
		_findTableRowByKey: function(key) {
			var primaryKeyIndex, cols = this.options.columns, r, i;
			if(this.options.primaryKey !== null) {
				for(i = 0; i < cols.length; i++) {
					if(cols[i].key === this.options.primaryKey) {
						primaryKeyIndex = i;
						break
					}
				}
				if(primaryKeyIndex === undefined) {
					throw new Error($.ig.Grid.locale.columnNotFound.replace("{key}", this.options.primaryKey))
				}
				r = this.element.find("td:nth-child('" + (primaryKeyIndex + 1) + "'):contains('" + key + "')").parent();
				return r.length === 0 ? null : r[0]
			}
			return this.rowAt(parseInt(key, 10))
		},
		dataSourceObject: function(dataSource) {
			if(dataSource !== undefined) {
				this.options.dataSource = dataSource
			} else {
				return this.options.dataSource
			}
		},
		totalRecordsCount: function() {
			return this.dataSource.totalRecordsCount()
		},
		_wrapElementDiv: function() {
			this._isWrapped = true;
			this.element = $("<table role='grid'></table>").appendTo(this.element).attr("id", this.id() + "_table");
			this.element.data("igGrid", this)
		},
		dataBind: function(internal) {
			var dataOptions, i, noCancel = true, noCancelRendering = true, customFunc, dataSource;
			if(!this._initialized) {
				noCancelRendering = this._trigger(this.events.rendering, null, {owner: this})
			}
			if(noCancelRendering) {
				dataOptions = this._generateDataSourceOptions(this.options);
				dataSource = this._createDataSource(dataOptions);
				noCancel = this._trigger(this.events.dataBinding, null, {owner: this, dataSource: dataSource});
				if(internal === undefined) {
					this.options.requiresDataBinding = true
				}
				if(noCancel) {
					if(this.options.requiresDataBinding) {
						if(this._hasUnboundColumns) {
							this._rebindUnboundColumns = true
						}
						this._dataOptions = dataOptions;
						this.dataSource = dataSource;
						if(this.dataSource) {
							customFunc = this.dataSource.settings.sorting.customConvertFunc;
							this.dataSource.settings.sorting.customConvertFunc = $.proxy(this._convertSortingDataSourceValue, this);
							if(customFunc && (customFunc.guid === undefined || customFunc.guid !== this.dataSource.settings.sorting.customConvertFunc.guid)) {
								this._oSortingCustomConvertFunc = customFunc
							}
						}
						if(!this._initialized) {
							if(this.element.is("div")) {
								this._wrapElementDiv()
							}
							for(i = 0; i < this.options.features.length; i++) {
								this._initFeature(this.options.features[i], dataOptions)
							}
							if(this.options.autoGenerateColumns !== true) {
								this._captureInitiallyHiddenColumns()
							}
							this._visibleColumnsArray = undefined
						} else {
							this._isDataBoundCalled = true;
							this.element.trigger("iggriduidirty", {owner: this});
							for(i = 0; i < this.options.features.length; i++) {
								this._initFeatureSettings(this.options.features[i])
							}
						}
						this._renderGrid();
						if(this._loadingIndicator === undefined) {
							this._initLoadingIndicator()
						}
						if(this._loadingIndicator) {
							this._loadingIndicator.show()
						}
						this.dataSource.dataBind();
						this.options.requiresDataBinding = false
					} else {
						this._renderGrid()
					}
				}
			} else {
				this._cancelRendering = true
			}
		},
		_mergeUnboundValues: function() {
			var i, primaryKeyCol, metadataUC, rec, ucLength, primaryKeyColIsNumber, col, schema, type, dataLength, data, key, val, j, pk = this.options.primaryKey, metadata = this.dataSource.metadata("unboundValues"), self = this, hasPrimaryKey = pk !== null && pk !== undefined, metaDataMergeFunction;
			if(metadata === undefined || metadata === null || metadata.length === 0 || !this._unboundColumns) {
				return
			}
			if(hasPrimaryKey) {
				metaDataMergeFunction = function(ind, val) {
					if(primaryKeyColIsNumber) {
						rec = self.dataSource.findRecordByKey(parseInt(ind, 10))
					} else {
						rec = self.dataSource.findRecordByKey(ind)
					}
					if(rec === null || rec === undefined) {
						return true
					}
					if(schema !== undefined && schema !== null) {
						val = schema._convertType(type, val, rec[pk], key)
					}
					self._addUnboundColumnValue(key, val);
					rec[key] = val
				};
				primaryKeyCol = this.columnByKey(pk);
				primaryKeyColIsNumber = primaryKeyCol.dataType === "number"
			}
			ucLength = this._unboundColumns.length;
			schema = this.dataSource.schema();
			for(i = 0; i < ucLength; i++) {
				key = this._unboundColumns[i].key;
				metadataUC = metadata[key];
				if(metadataUC === null || metadataUC === undefined) {
					continue
				}
				col = this.getUnboundColumnByKey(key);
				type = null;
				if(col !== null && col.dataType) {
					type = col.dataType
				}
				if(hasPrimaryKey) {
					$.each(metadataUC, metaDataMergeFunction)
				} else {
					self._renderUnboundValues(metadataUC, key)
				}
				if(type === "bool" || type === "boolean") {
					data = this.dataSource.data();
					val = schema._convertType(type, undefined);
					dataLength = data.length;
					if(dataLength <= metadataUC.length) {
						continue
					}
					for(j = 0; j < dataLength; j++) {
						if(data[j][key] === undefined) {
							data[j][key] = val
						}
					}
				}
			}
		},
		_convertSortingDataSourceValue: function(val, key) {
			var o = this.options, enableUTCDates = o.enableUTCDates, format, rowTemplate, col, dsFunc = this._oSortingCustomConvertFunc;
			if($.type(val) === "date") {
				rowTemplate = !o.rowTemplate || o.rowTemplate.length <= 0;
				col = this.columnByKey(key);
				if(col !== undefined && col !== null) {
					format = col.format
				}
				if(format) {
					if(format === "time" || format === "timeLong" || format === "h:mm:ss tt") {
						val = new Date("January 01, 2000 " + $.ig.formatter(val, "date", format, rowTemplate, enableUTCDates))
					}
				}
			}
			if($.isFunction(dsFunc)) {
				if(dsFunc.guid === undefined || dsFunc.guid !== this.dataSource.settings.sorting.customConvertFunc.guid) {
					val = dsFunc(val, key)
				}
			}
			return val
		},
		_generateDataSourceOptions: function() {
			var schema, dataOptions, t, headers, i, instanceOfDs;
			if(!this.options.dataSource && !this.options.dataSourceUrl && this.element.is("table") && this.element.find("tbody").children().length > 0) {
				this.options.dataSource = this.element[0]
			}
			if(this.options.dataSource) {
				if(this.options.dataSource.tagName && this.options.dataSource.nodeType) {
					t = $(this.options.dataSource)
				} else if($.type(this.options.dataSource.type) === "function" && this.options.dataSource.type() === "htmlTableString" && $.type(this.options.dataSource.dataSource) === "function") {
					t = $(this.options.dataSource.dataSource())
				}
				if(t && t.is("table") && t.find("thead th").length > 0) {
					headers = t.find("thead tr th");
					this._tb_h = true;
					this._tb_h_arr = [];
					for(i = 0; i < headers.length; i++) {
						this._tb_h_arr.push($(headers[i]).text())
					}
				}
			}
			dataOptions = {
				callback: $.proxy(this._renderData, this),
				callee: this,
				responseDataKey: this.options.responseDataKey,
				responseTotalRecCountKey: this.options.responseTotalRecCountKey,
				dataSource: this.options.dataSource,
				requestType: this.options.requestType,
				responseContentType: this.options.responseContentType,
				primaryKey: this.options.primaryKey,
				localSchemaTransform: this.options.localSchemaTransform,
				autoCommit: this.options.autoCommit,
				aggregateTransactions: this.options.aggregateTransactions,
				serializeTransactionLog: this.options.serializeTransactionLog,
				updateUrl: this.options.updateUrl,
				restSettings: this.options.restSettings,
				enableUTCDates: this.options.enableUTCDates
			};
			if(this.options.dataSourceType !== null) {
				dataOptions.type = this.options.dataSourceType
			}
			if(!this.options.dataSource || !this.options.dataSource.schema || !this.options.dataSource.schema() || this.options.dataSource.schema()._type !== "xml") {
				schema = this._generateDataSourceSchema()
			}
			instanceOfDs = this.options.dataSource && typeof this.options.dataSource._xmlToArray === "function" && typeof this.options.dataSource._encodePkParams === "function";
			if(instanceOfDs && (this.options.dataSource.settings.schema === null || !this.options.dataSource.settings.schema.fields || this.options.dataSource.settings.schema.fields && this.options.dataSource.settings.schema.fields.length >= 0) || !instanceOfDs) {
				dataOptions = $.extend(dataOptions, {schema: schema})
			}
			return dataOptions
		},
		_insertUnboundColumn: function(column) {
			if(this._unboundColumns === null || this._unboundColumns === undefined) {
				this._unboundColumns = []
			}
			this._unboundColumns.push(column);
			if(column.key && (this._unboundValues[column.key] === null || this._unboundValues[column.key] === undefined)) {
				this._unboundValues[column.key] = []
			}
			if(column.unboundValues && column.unboundValues.length > 0) {
				this._isToSetUnboundColumns = true
			}
			this._hasUnboundColumns = true
		},
		_addUnboundColumnValue: function(key, value, index) {
			if(this._unboundValues[key] === null || this._unboundValues[key] === undefined) {
				this._unboundValues[key] = []
			}
			if(index !== undefined && index !== null) {
				this._unboundValues[key][index] = value
			} else {
				this._unboundValues[key].push(value)
			}
		},
		_generateDataSourceSchema: function() {
			var schema, schemaType, dsSchema, i, rec, prop, count = 0, cols = this.options.columns, ds = this.options.dataSource, cl, counter = 0, colLayoutFilter = function(elem) {
				return elem.key === prop
			};
			if(ds && typeof ds._xmlToArray === "function" && typeof ds._encodePkParams === "function") {
				dsSchema = ds.schema();
				if(dsSchema && $.type(dsSchema) === "object" && typeof dsSchema.schema === "object" && typeof dsSchema.isObjEmpty === "function" && dsSchema._type) {
					schemaType = dsSchema._type;
					if(schemaType && schemaType !== ds.settings.type) {
						ds.settings.type = schemaType
					}
				} else {
					dsSchema = null
				}
				if($.type(ds.settings.dataSource) === "array" || $.type(ds.settings.dataSource) === "object") {
					ds = ds.settings.dataSource
				} else if($.type(ds.settings.dataSource) !== "string") {
					ds = ds.data()
				} else {
					ds = []
				}
			}
			if($.type(ds) === "string" && this.dataSource) {
				ds = this.dataSource.data()
			}
			if($.type(ds) === "object" && this.options.responseDataKey) {
				ds = $.ig.findPath(ds, this.options.responseDataKey)
			}
			schema = {};
			schema.fields = [];
			schema.searchField = this.options.responseDataKey;
			this._unboundColumns = null;
			if(cols.length > 0 && !this.options.autoGenerateColumns) {
				for(i = 0; i < cols.length; i++) {
					if(cols[i].unbound === true || cols[i].unboundDS === true) {
						this._insertUnboundColumn(cols[i]);
						if(cols[i].unbound === true) {
							continue
						}
					}
					schema.fields[counter] = {};
					schema.fields[counter].name = cols[i].key;
					schema.fields[counter].type = cols[i].dataType;
					schema.fields[counter].mapper = cols[i].mapper;
					counter++
				}
				cl = this.options.columnLayouts;
				if(cl && cl.length && cl.length > 0) {
					for(i = 0; i < cl.length; i++) {
						if(cl[i].key === undefined) {
							continue
						}
						schema.fields.push({name: cl[i].key})
					}
				}
			} else if(this.options.autoGenerateColumns) {
				if(ds && ds.tagName && $(ds).is("table") && $(ds).find("tbody tr").length > 0) {
					rec = $(ds).find("tbody tr")[0];
					$(rec).find("td").each(function() {
						if(cols.length > count) {
							schema.fields.push({name: cols[count].key || count + 1, type: cols[count].dataType || "string"})
						} else {
							schema.fields.push({name: count + 1, type: "string"})
						}
						count++
					})
				} else if(ds && ds.length && ds.length > 0 && $.type(ds) === "array") {
					for(i = 0; i < ds.length; i++) {
						rec = ds[i];
						for(prop in rec) {
							if(rec.hasOwnProperty(prop)) {
								if(this.columnByKey(prop) === null && !this._fieldExists(prop, schema) && $.type(rec[prop]) !== "object" && $.type(rec[prop]) !== "array") {
									schema.fields.push({name: prop, type: $.ig.getColType(rec[prop])})
								} else if(this.options.columnLayouts && this.options.columnLayouts.filter(colLayoutFilter).length > 0) {
									schema.fields.push({name: prop})
								} else if(this.columnByKey(prop) !== null) {
									schema.fields.push({name: prop, type: this.columnByKey(prop).dataType})
								}
								count++
							}
						}
						if(!this.options._recurseSchema) {
							break
						}
					}
				} else if(dsSchema && dsSchema.fields().length) {
					schema.fields = dsSchema.fields()
				}
				for(i = 0; i < cols.length; i++) {
					if(cols[i].unbound === true || cols[i].unboundDS === true) {
						this._insertUnboundColumn(cols[i])
					}
				}
			}
			this._trigger(this.events.schemaGenerated, null, {owner: this, schema: schema, dataSource: ds});
			return schema
		},
		_fieldExists: function(prop, schema) {
			var i;
			for(i = 0; i < schema.fields.length; i++) {
				if(schema.fields[i].name === prop) {
					return true
				}
			}
			return false
		},
		_createDataSource: function(dataOptions) {
			var callee, dataSource;
			if(!this.options.dataSource || typeof this.options.dataSource._xmlToArray !== "function" || typeof this.options.dataSource._encodePkParams !== "function") {
				if($.type(dataOptions.dataSource) === "string" && (this.options.jsonpRequest || $.ig.util.isJsonpUrl(dataOptions.dataSource))) {
					dataSource = new $.ig.JSONPDataSource(dataOptions)
				} else if(this.options.restSettings.update.url !== null || this.options.restSettings.update.template !== null || this.options.restSettings.create.url !== null || this.options.restSettings.create.template !== null || this.options.restSettings.remove.url !== null || this.options.restSettings.remove.template !== null) {
					dataSource = new $.ig.RESTDataSource(dataOptions)
				} else {
					dataSource = new $.ig.DataSource(dataOptions)
				}
			} else {
				dataSource = this.options.dataSource;
				if(dataSource.settings.responseDataKey !== null) {
					delete dataOptions.responseDataKey;
					if(dataOptions.schema) {
						dataOptions.schema.searchField = dataSource.settings.responseDataKey
					}
				}
				if(dataOptions.responseTotalRecCountKey === null && dataSource.settings.responseTotalRecCountKey !== null) {
					delete dataOptions.responseTotalRecCountKey
				}
				this._tds = dataSource.settings.dataSource;
				dataSource.settings.dataSource = null;
				if($.ig.util.isIE8 && dataOptions.callee) {
					callee = dataOptions.callee;
					dataOptions.callee = null
				}
				dataSource.settings = $.extend(true, {}, dataSource.settings, dataOptions);
				if($.ig.util.isIE8 && callee) {
					dataSource.settings.callee = callee
				}
				dataSource.settings.dataSource = this._tds;
				this._tds = null;
				if(dataOptions.schema) {
					dataSource._initSchema()
				}
			}
			return dataSource
		},
		_generateColumns: function() {
			var r, key, i, hasExplicitCols = this.options.columns.length > 0, hasHeaders = false, len, col, isTable = false, arr = [], ds = this.options.dataSource, cdp = this.options.childrenDataProperty, newDs, colType, dsHtmlTableString = false;
			if(ds && typeof ds._xmlToArray === "function" && typeof ds._encodePkParams === "function") {
				if(this.options.dataSource.type() === "htmlTableString" && this.options.autoGenerateColumns) {
					dsHtmlTableString = true
				}
				ds = ds.data()
			} else if(typeof ds === "string") {
				ds = this.dataSource.data()
			}
			if($.type(ds) === "object" && this.options.responseDataKey) {
				newDs = $.ig.findPath(ds, this.options.responseDataKey);
				if($.type(newDs) === "array") {
					ds = newDs
				}
			}
			if(ds && ds.tagName && $(ds).is("table")) {
				len = $(ds).find("tbody tr").length;
				isTable = true
			} else if(ds && ds.length) {
				len = ds.length
			}
			if(ds && len && len === 0 && this.options.columns.length === 0) {
				throw new Error($.ig.Grid.locale.autoGenerateColumnsNoRecords)
			}
			if(ds && len && len > 0) {
				if(isTable) {
					r = $(ds).find("tbody tr")[0]
				} else {
					r = ds[0]
				}
				if($.type(r) === "array" || isTable) {
					hasHeaders = this._tb_h;
					if(isTable) {
						$(r).find("td").each(function() {
							arr.push($(this).text())
						});
						r = arr
					}
					for(i = 0; i < r.length; i++) {
						if(this.columnByKey(i + 1) === null && $.ig.getColType(r[i]) !== "object") {
							col = {headerText: hasHeaders ? this._tb_h_arr[i] : $.ig.Grid.locale.colPrefix + (i + 1), key: String(i + 1), dataType: $.ig.getColType(r[i]), hidden: false};
							if(dsHtmlTableString) {
								col.key = String(i)
							}
							col.headerText = (col.headerText || "").toString().trim();
							if(this._isMultiColumnGrid) {
								col.level0 = true;
								col.level = 0;
								this._oldCols.push(col)
							}
							this.options.columns.push(col);
							this._visibleColumnsArray = undefined
						} else if(hasHeaders && !this.columnByKey(i + 1).headerText) {
							this.columnByKey(i + 1).headerText = this._tb_h_arr[i]
						}
					}
				} else {
					for(key in r) {
						if(r.hasOwnProperty(key) && this.columnByKey(key) === null) {
							colType = $.ig.getColType(r[key]);
							if((cdp && cdp !== key || !cdp) && (colType !== "object" || r[key] === null) && key !== "ig_pk") {
								col = {headerText: key, key: key, dataType: $.ig.getColType(r[key]), hidden: false};
								this.options.columns.push(col);
								if(this._isMultiColumnGrid) {
									col.level0 = true;
									col.level = 0;
									this._oldCols.push(col)
								}
								this._visibleColumnsArray = undefined
							}
						}
					}
				}
			}
			this._trigger("_columnsgenerated", null, {owner: this, key: this.options.key});
			if(this.dataSource.schema() === null || this.dataSource.schema().fields().length === 0) {
				this.dataSource.settings.schema = this._generateDataSourceSchema();
				this.dataSource._initSchema()
			}
			if(this.options.width === null) {
				this._setContainerWidth(this.container())
			}
			this._trigger("columnsgenerated", null, {owner: this, key: this.options.key})
		},
		_renderGrid: function() {
			var gridElement = this.element[0], containerId, containerDiv, tbody = this.element.children("tbody");
			this._cancelRendering = false;
			if(!this._initialized) {
				this.element.attr("role", "grid");
				if(this.options.virtualization === true || this.options.rowVirtualization === true || this.options.columnVirtualization === true) {
					if(this.options.height === undefined || this.options.height === null) {
						throw new Error($.ig.Grid.locale.virtualizationRequiresHeight)
					}
					if(this._isColumnVirtualizationEnabled() && this.options.width.indexOf && this.options.width.indexOf("%") > 0) {
						throw new Error($.ig.Grid.locale.columnVirtualizationNotSupportedWithPercentageWidth)
					}
					this._createVirtualGrid()
				} else if(this.options.height !== null || this.options.width !== null) {
					this._createScrollingGrid()
				} else {
					containerId = gridElement.id + "_container";
					containerDiv = '<div id="' + containerId + '" class="' + this.css.gridClasses + " " + this.css.baseClass + '" style="position: relative"> </div>';
					this.element.wrap(containerDiv);
					this.element.addClass(this._isMultiRowGrid() ? this.css.mrlGridTableClass : this.css.gridTableClass);
					this.element.attr("aria-describedby", containerId);
					this._setContainerWidth(this.container());
					this.container().attr("tabIndex", this.options.tabIndex);
					if(this.options.height !== null) {
						this.container().css("overflow-y", "hidden")
					}
				}
				this._touch();
				if(this.options.columns.length > 0 && this.options.virtualization !== true && this.options.rowVirtualization !== true && this.options.columnVirtualization !== true && this.options.autogenerateColumns === false && this.options.columns.length > 0) {
					this._renderColgroup(this.element[0], false, false, this.options.autofitLastColumn)
				}
				$(gridElement).attr("cellpadding", "0");
				$(gridElement).attr("cellspacing", "0");
				$(gridElement).attr("border", "0");
				$(gridElement).css("table-layout", "fixed");
				$(gridElement).addClass(this._isMultiRowGrid() ? this.css.mrlGridTableClass : this.css.gridTableClass);
				if(this.options.autoGenerateColumns === false && !this._autoDetectColTypes() && this.options.columns.length > 0 && this._headerRenderCancel !== true) {
					this._renderHeader()
				}
				this._renderCaption();
				if(this.options.autoAdjustHeight) {
					this._initializeHeights()
				}
			}
			if(tbody.length === 0) {
				tbody = $('<tbody role="rowgroup"></tbody>').appendTo(gridElement).addClass(this.css.baseContentClass).addClass(this.css.gridTableBodyClass).addClass(this.css.recordClass)
			}
			if(this.dataSource.type() !== "htmlTableDom" && this.dataSource.type() !== "htmlTableId") {
				tbody.attr("role", "rowgroup").empty();
				if(this.hasFixedColumns()) {
					this.fixedBodyContainer().children("table").children("tbody").attr("role", "rowgroup").empty()
				}
			}
		},
		_autoDetectColTypes: function() {
			var i, cols = this.options.columns;
			for(i = 0; i < cols.length; i++) {
				if(!cols[i].dataType || cols[i].mapper) {
					return true
				}
			}
			return false
		},
		_setContainerWidth: function(element, rendered) {
			var cols = this._visibleColumns(), i, w, width = 0, inPerc;
			if(cols.length > 0) {
				inPerc = false;
				for(i = 0; i < cols.length; i++) {
					w = cols[i].width;
					if(w !== 0 && w !== "0") {
						w = w || this.options.defaultColumnWidth
					}
					if(_aNull(w) || w && w.indexOf && w.indexOf("%") > 0) {
						inPerc = true
					} else {
						inPerc = false;
						break
					}
				}
				if(inPerc) {
					return
				}
				this._scrollWidthAddedToContainerWidth = !!this.options.height;
				width = this._calculateContainerWidth(this._scrollWidthAddedToContainerWidth);
				if(width > 0) {
					if(rendered) {
						width = 0;
						this.container().find(".ui-iggrid-header").each(function() {
							width += $(this).outerWidth()
						});
						element.width(width)
					} else {
						width += this._calculateSpecialColumnsWidth();
						element.css("width", width)
					}
				}
			} else if(this.options.width !== null) {
				element.css("width", this.options.width)
			}
		},
		_calculateContainerWidth: function(addScrollWidth) {
			var width = 0, cols = this.options.columns, i;
			for(i = 0; i < cols.length; i++) {
				if(cols[i].hidden !== true && cols[i].fixed !== true && (this._initialHiddenColumns === undefined || $.inArray(cols[i], this._initialHiddenColumns) === -1)) {
					width += cols[i].width ? parseInt(cols[i].width, 10) : this.options.defaultColumnWidth === null ? 0 : parseInt(this.options.defaultColumnWidth, 10)
				}
			}
			if(this.options.height !== null && width > 0 && addScrollWidth === true) {
				width += this._scrollbarWidth()
			}
			return width
		},
		_createScrollingGrid: function() {
			var self = this, id = this.id() + "_scroll", dataContainer, scrollDiv = '<div id="' + id + '"></div>', isIE = $.ig.util.isIE;
			this.element.wrap(scrollDiv);
			dataContainer = this.element.parent();
			this.element.attr("aria-describedby", id);
			dataContainer.addClass(this.css.gridScrollDivClass).wrap('<div id="' + this.id() + '_container"></div>');
			if($.ig.util.isIE7) {
				dataContainer.css("padding-bottom", this._scrollbarWidth())
			}
			this.container().attr("tabIndex", this.options.tabIndex).addClass(this.css.baseClass).addClass(this.css.gridClasses);
			if(this.options.width !== null) {
				this.container().css("width", this.options.width);
				if(this.options.width.indexOf && this.options.width.indexOf("%") !== -1) {
					this.element.css("width", "100%")
				}
				if(this.options.height !== null) {
					this._addHorizontalScrollBar(dataContainer);
					this.scrollContainer().css("overflow-x", "hidden")
				}
			} else {
				this._setContainerWidth(this.container());
				this.scrollContainer().css("overflow-x", "hidden")
			}
			this.container().css("position", "relative");
			if(this.options.height !== null) {
				this.scrollContainer().css("overflow-y", "auto");
				if(this.options.autoAdjustHeight) {
					this.container().css("height", this.options.height)
				} else {
					this.scrollContainer().css("height", this.options.height)
				}
			}
			if(this._persistVirtualScrollTop) {
				this.scrollContainer().bind({
					scroll: function() {
						self._prevFirstVisibleTROffset = self.scrollContainer().scrollTop()
					}
				})
			}
			this.scrollContainer().bind({
				wheel: function(event) {
					var $scrollContainer;
					if(isIE) {
						$scrollContainer = self.scrollContainer();
						$scrollContainer.scrollTop($scrollContainer.scrollTop() + event.originalEvent.deltaY);
						return false
					}
					self._hscrollbarcontent().scrollLeft(self._hscrollbarcontent().scrollLeft() + event.originalEvent.deltaX)
				}
			})
		},
		_touch: function() {
			var id = this.id(), div = this.scrollContainer();
			if(div.length !== 1) {
				div = this._vdisplaycontainer()
			}
			if(div.length) {
				div.attr("data-scroll", "true").attr("data-oneDirection", "true");
				if(this._hscrollbarcontent()[0]) {
					div.attr("data-xScroller", "#" + id + "_hscroller")
				} else if(this._vhorizontalcontainer()[0]) {
					div.attr("data-xScroller", "#" + id + "_horizontalScrollContainer")
				}
				if(this._scrollContainer()[0]) {
					div.attr("data-yScroller", "#" + id + "_scrollContainer")
				}
				if($.ig.util.isTouch && this.element.igScroll !== undefined) {
					this._scrollbarWidthResolved = 0;
					div.css("overflow-y", "hidden")
				}
			}
		},
		_createVirtualGrid: function() {
			var id = this.id(), $vCont, evnts, $vDsplCntnr, grid, newW, percWidthStr = $.ig.util.isWebKit ? "width=100%" : "", totalWidth, scrollContainerInner, scrollbarWidth, w = 0, virtualGridMarkup = '<div id="' + id + '_container" style="margin:0px; border:0px; ' + 'padding:0px;"><table border="0" cellspacing="0" cellpadding="0" ' + 'class="ui-iggrid-layout-helper" style="border-spacing:0px" id="' + id + '_virtualContainer" ><tbody role="rowgroup"><tr><td colspan="2" ' + 'style="border-width:0px"><div id="' + id + '_headers_v" ' + 'style="overflow:hidden;"></div></td></tr><tr><td style="border-width:0px;"><div id="' + id + '_displayContainer"></td>$verticalMarkup$</tr>$horizontalMarkup$</tbody></table></div>', verticalMarkup, horizontalMarkup = '<tr><td colspan="2" style="border-width: 0px"><div id="' + id + '_horizontalScrollContainer"></div></td></tr>';
			scrollbarWidth = this._scrollbarWidth();
			if($.ig.util.isIE) {
				scrollbarWidth += 1
			}
			if(parseInt(this.options.height, 10) > 0) {
				verticalMarkup = '<td style="border-width: 0px;"><div id="' + id + '_scrollContainer" style="overflow:scroll; overflow-x:hidden; width: ' + scrollbarWidth + "px; height:" + this.options.height + ';"></div></td>'
			} else {
				verticalMarkup = '<td style="border-width: 0px;"><div id="' + id + '_scrollContainer" style="overflow:scroll; overflow-x:hidden; width: ' + scrollbarWidth + 'px;"></div></td>'
			}
			if(this.options.virtualization === true) {
				virtualGridMarkup = virtualGridMarkup.replace("$verticalMarkup$", verticalMarkup).replace("$horizontalMarkup$", horizontalMarkup)
			} else if(this.options.rowVirtualization === true) {
				virtualGridMarkup = virtualGridMarkup.replace("$verticalMarkup$", verticalMarkup).replace("$horizontalMarkup$", "")
			} else if(this.options.columnVirtualization === true) {
				virtualGridMarkup = virtualGridMarkup.replace("$horizontalMarkup$", horizontalMarkup).replace("$verticalMarkup$", "")
			}
			if(this.options.virtualization === true || this.options.columnVirtualization === true) {
				this.element.css("width", "100%")
			}
			this.element.wrap(virtualGridMarkup);
			this.container().attr("tabIndex", this.options.tabIndex).addClass(this.css.baseClass).addClass(this.css.gridClasses);
			if(this.options.width !== null) {
				this.container().width(this.options.width)
			} else {
				this._setContainerWidth(this.container())
			}
			this._vdisplaycontainer().addClass(this.css.gridScrollDivClass).addClass(this.css.gridVirtualScrollDivClass).append(this.element[0]);
			grid = this;
			totalWidth = this._calculateContainerWidth(false);
			if(this.options.width !== null) {
				w = parseInt(this.options.width, 10)
			} else {
				w = totalWidth
			}
			if(this.options.height !== null && this.options.width !== null) {
				w -= this._scrollbarWidth()
			}
			if(w <= 0) {
				w = undefined
			}
			if(w > 0 && this.options.expandColWidth && !this.options.width) {
				w += this.options.expandColWidth
			}
			$("<colgroup><col " + (this._gridHasWidthInPercent() ? "" : w <= 0 ? percWidthStr : 'width="' + w + '"') + '></col><col width="' + this._scrollbarWidth() + '"></col></colgroup>').prependTo(this._virtualcontainer());
			newW = this.options.width;
			if(newW && newW.indexOf && newW.indexOf("%") !== -1) {
				newW = "100%"
			}
			this._virtualcontainer().css("width", newW).css("max-width", newW);
			scrollContainerInner = '<div style="width:1px; overflow:hidden; height:' + this._totalRowCount * parseInt(this.options.avgRowHeight, 10) + 'px;"></div>';
			this._scrollContainer().append(scrollContainerInner);
			if($.ig.util.isFF && this.options.virtualizationMode === "fixed") {
				this._scrollContainer().height(0)
			}
			if((this.options.virtualization === true || this.options.rowVirtualization === true) && this.options.width && this.options.width.indexOf && this.options.width.indexOf("%") > 0) {
				this._addHorizontalScrollBar(this._virtualcontainer());
				this._virtualcontainer().css("table-layout", "fixed")
			} else if((this.options.virtualization === true || this.options.columnVirtualization === true) && this.options.width && totalWidth > parseInt(this.options.width, 10)) {
				this._renderHorizontalScrollContainer(totalWidth)
			}
			if(parseInt(this.options.height, 10) > 0) {
				this._vdisplaycontainer().css("height", this.options.height).css("vertical-align", "top")
			}
			this._vdisplaycontainer().css("position", "relative").css("width", w).css("maxWidth", w);
			if(this.options.virtualization === true) {
				this.container().find("#" + id + "_headers_v").append('<a href="#" id="' + id + '_displayContainer_a" tabindex="-1" ' + 'style="position:absolute;top:-100px;left:-100px">&nbsp;</a>')
			}
			if(this.options.width && this.options.virtualization === false && this.options.columnVirtualization === false) {
				this._vdisplaycontainer().css({"overflow-y": "hidden", "overflow-x": "auto"})
			} else {
				this._vdisplaycontainer().css("overflow", "hidden")
			}
			this._vdisplaycontainer().parent().bind({
				mouseenter: function() {
					grid._isMouseOverVirtualTable = true
				}, mouseleave: function() {
					grid._isMouseOverVirtualTable = false
				}
			});
			this._documentEvents = {
				DOMMouseScroll: function(event) {
					var dir = "down", delta, step, deltaX;
					step = grid.options.virtualizationMouseWheelStep === null ? parseInt(grid.options.avgRowHeight, 10) : grid.options.virtualizationMouseWheelStep;
					delta = -event.originalEvent.detail / 3;
					if(delta > 0) {
						dir = "up"
					}
					if(grid._isMouseOverVirtualTable && !event.ctrlKey) {
						if(event.originalEvent.axis === 2) {
							grid._onVirtualVerticalScroll(event, step, dir)
						}
						deltaX = event.originalEvent.offsetX;
						if(event.originalEvent.axis === 1) {
							grid._vdisplaycontainer().scrollLeft(grid._vdisplaycontainer().scrollLeft() - delta)
						}
						event.preventDefault()
					}
				}, mousewheel: function(event) {
					var dir = "down", delta, step;
					step = grid.options.virtualizationMouseWheelStep === null ? parseInt(grid.options.avgRowHeight, 10) : grid.options.virtualizationMouseWheelStep;
					delta = (event.originalEvent.wheelDeltaY === undefined ? event.originalEvent.wheelDelta : event.originalEvent.wheelDeltaY) / 120;
					if(delta > 0) {
						dir = "up"
					}
					if(grid._isMouseOverVirtualTable && !event.ctrlKey) {
						if(delta !== 0) {
							grid._onVirtualVerticalScroll(event, step, dir)
						}
						grid._vdisplaycontainer().scrollLeft(grid._vdisplaycontainer().scrollLeft() - event.originalEvent.wheelDeltaX);
						event.preventDefault()
					}
				}, wheel: function(event) {
					var dir = "down", step, delta;
					step = grid.options.virtualizationMouseWheelStep === null ? parseInt(grid.options.avgRowHeight, 10) : grid.options.virtualizationMouseWheelStep;
					delta = -event.originalEvent.deltaY;
					if(delta > 0) {
						dir = "up"
					}
					if(grid._isMouseOverVirtualTable && !event.ctrlKey) {
						if(delta !== 0) {
							grid._onVirtualVerticalScroll(event, step, dir)
						}
						grid._vdisplaycontainer().scrollLeft(grid._vdisplaycontainer().scrollLeft() + event.originalEvent.deltaX);
						event.preventDefault()
					}
				}
			};
			evnts = {};
			$vDsplCntnr = this._vdisplaycontainer();
			if(this.options.virtualizationMode === "fixed") {
				evnts["keydown.virtualizationEvents"] = function(e) {
					if(e.keyCode === $.ui.keyCode.TAB) {
						grid._syncScrollOnTabFixedVirt(e, e.shiftKey ? "up" : "down", $vDsplCntnr)
					}
				}
			} else {
				evnts["keydown.virtualizationEvents"] = function(e) {
					if(e.keyCode === $.ui.keyCode.TAB) {
						grid._syncScrollOnTab(e, e.shiftKey ? "up" : "down", $vDsplCntnr)
					}
				}
			}
			$vDsplCntnr.bind(evnts);
			this._documentEvents["keydown." + this.id()] = function(event) {
				var keyCode = event.keyCode, $sc, dir = null, step;
				if(grid._isMouseOverVirtualTable) {
					if(keyCode === $.ui.keyCode.DOWN) {
						dir = 1
					} else if(keyCode === $.ui.keyCode.UP) {
						dir = -1
					}
					if(dir && grid._isMouseOverVirtualTable) {
						step = grid.options.virtualizationMouseWheelStep === null ? parseInt(grid.options.avgRowHeight, 10) : grid.options.virtualizationMouseWheelStep;
						$sc = grid._scrollContainer();
						$sc.scrollTop($sc.scrollTop() + step * dir)
					}
				}
			};
			$(document).bind(this._documentEvents);
			if(this.options.virtualization === true || this.options.rowVirtualization === true) {
				this._scrollContainer().bind({
					scroll: function(event) {
						grid._onVirtualVerticalScroll(event);
						grid._virtualScrollMouseDown = false
					}, mousedown: function() {
						grid._virtualScrollMouseDown = true
					}
				})
			}
			if(this.options.virtualization === true || this.options.columnVirtualization === true) {
				$vCont = this._vhorizontalcontainer();
				$vCont.data("containerName", "vScrollbar").bind({
					scroll: function(event) {
						grid._onVirtualHorizontalScroll(event)
					}
				});
				if(this.options.virtualizationMode === "continuous") {
					this._registerScrllCntnrToSync($vCont)
				}
			}
			if(this._vhorizontalcontainer().length === 0 && this.options.width !== null) {
				if(!this.options.width.indexOf || this.options.width.indexOf("%") === -1) {
					this._addHorizontalScrollBar(this._virtualcontainer())
				}
				this._vdisplaycontainer().css("overflow-x", "hidden")
			}
			this.element.height(this._scrollContainer().height());
			if(this.options.width && this.options.width.indexOf && this.options.width.indexOf("%") !== -1) {
				this.container().find("#" + id + "_virtualContainer > colgroup > col:first").css("width", "100%");
				this._vhorizontalcontainer().css("width", "100%");
				this._vdisplaycontainer().css("width", "100%").css("max-width", "100%")
			}
		},
		_syncScrollOnTabFixedVirt: function(e, dir, $vDsplCntnr) {
			$vDsplCntnr = $vDsplCntnr || this._vdisplaycontainer();
			var $ae = $(document.activeElement), $next, isDown = dir === "down", scrlTop, $scrlCntnr, h, selFirstLastChild = isDown ? ":last-child" : ":first-child";
			$next = isDown ? $ae.closest("tr").next() : $ae.closest("tr").prev();
			if(!$ae.is("td, th") || !$ae.is(selFirstLastChild) || $next.length) {
				return
			}
			$scrlCntnr = this._scrollContainer();
			scrlTop = $scrlCntnr.scrollTop();
			h = parseInt(this.options.avgRowHeight, 10);
			scrlTop += isDown ? h : -h;
			$scrlCntnr.scrollTop(scrlTop);
			if(scrlTop <= 0 || scrlTop + $vDsplCntnr.outerHeight() >= $scrlCntnr.children("div").outerHeight()) {
				return
			}
			e.preventDefault()
		},
		_syncScrollOnTab: function(e, dir, $vDsplCntnr) {
			$vDsplCntnr = $vDsplCntnr || this._vdisplaycontainer();
			var $ae = $(document.activeElement), $next, $currTr, $scCntnr, scrTop, id, isDown = dir === "down", selFirstLastChild = isDown ? ":last-child" : ":first-child";
			if(!$ae.is("td, th") || !$ae.is(selFirstLastChild)) {
				return
			}
			$currTr = $ae.closest("tr");
			$next = isDown ? $currTr.next() : $currTr.prev();
			this._focusDataRowIndex = null;
			if(!$next.length) {
				$scCntnr = this._scrollContainer();
				scrTop = $scCntnr.scrollTop();
				if(isDown) {
					if($scCntnr[0].scrollHeight - scrTop === $scCntnr.outerHeight()) {
						this._focusDataRowIndex = 0
					} else {
						$scCntnr.scrollTop(scrTop + 2);
						id = parseInt($currTr.attr("data-row-idx"), 10);
						this._focusDataRowIndex = !isNaN(id) && id - 1 > 0 ? id - 1 : null
					}
					return
				} else if(!isDown) {
					if(!scrTop) {
						this._focusDataRowIndex = this._getTotalRowsCount() - 1;
						return
					} else {
						$scCntnr.scrollTop(scrTop - 2);
						id = parseInt($currTr.attr("data-row-idx"), 10);
						this._focusDataRowIndex = !isNaN(id) && id - 1 > 0 ? id - 1 : null
					}
				}
				e.preventDefault();
				return
			}
			this._focusDataRowIndex = parseInt($next.attr("data-row-idx"), 10);
			this._onVirtualVerticalScroll(e, $next.outerHeight(), dir)
		},
		_renderHorizontalScrollContainer: function(totalWidth) {
			var horizontalScrollContainerInner, w = this.options.width, $vhc = this._vhorizontalcontainer();
			if(w && w.indexOf && w.indexOf("%") !== -1 && (this.options.virtualization === true || this.options.rowVirtualization === true)) {
				return
			}
			$vhc.css("height", this._scrollbarWidth() + "px").css("overflow", "scroll");
			w = this.hasFixedColumns() ? parseFloat(w) - this.fixedBodyContainer().outerWidth() : w;
			if($.ig.util.isIE) {
				$vhc.css("width", parseInt(w, 10) + 1).css("height", $vhc.outerHeight() + 1 + "px")
			} else {
				if($.ig.util.isFF && ($.type(w) === "number" || w && w.indexOf && w.indexOf("px") > 0)) {
					w = parseFloat(w) - this._scrollbarWidth()
				}
				$vhc.css("width", w)
			}
			horizontalScrollContainerInner = '<div style="width:' + totalWidth + 'px;height:1px;"></div>';
			$vhc.append(horizontalScrollContainerInner)
		},
		_suppressVirtVertScroll: function(suppress) {
			this._virtVertScrollSuppressed = suppress
		},
		_isVirtVertScrollSuppressed: function() {
			if(this._virtVertScrollSuppressed) {
				return true
			}
			return false
		},
		_correctVirtVertScrollTop: function(oldScrollTop, oldScrollContHeight) {
			this._suppressVirtVertScroll();
			this._setScrollContainerScrollTop(oldScrollTop / oldScrollContHeight * this._getScrollContainerHeight());
			this._suppressVirtVertScroll(false)
		},
		_onVirtualVerticalScroll: function(event, offset, dir) {
			this._isHorizontal = false;
			if(this._isVirtVertScrollSuppressed()) {
				return
			}
			var newSri, scrollContainer = this._scrollContainer(), scrollTopDiff, isIE = $.ig.util.isIE, scrollerHeight, avgRowHeight = parseInt(this.options.avgRowHeight, 10), current = scrollContainer.scrollTop(), mode = this.options.virtualizationMode;
			if(offset !== undefined) {
				if(dir === "down") {
					scrollContainer.scrollTop(current + offset)
				} else {
					scrollContainer.scrollTop(current - offset)
				}
				current = scrollContainer.scrollTop()
			}
			scrollTopDiff = scrollContainer.scrollTop() - this._oldScrollTop;
			if(Math.abs(scrollTopDiff) < 5 && $.ig.util.isFF && !isIE) {
				return
			}
			if(mode === undefined || mode === "") {
				mode = "continuous"
			}
			if(mode === "fixed") {
				newSri = Math.ceil(scrollContainer.scrollTop() / avgRowHeight);
				if($.ig.util.isIE) {
					scrollerHeight = this._getScrollContainerHeight();
					if(this._totalRowCount * avgRowHeight >= scrollerHeight + 2) {
						if(current + 5 > scrollerHeight - scrollContainer.innerHeight()) {
							newSri = this._getDataView().length - this._virtualRowCount
						} else {
							newSri = Math.ceil(current / scrollerHeight * this._totalRowCount)
						}
					}
				} else if(newSri === this._startRowIndex && this._virtualScrollMouseDown) {
					if(scrollTopDiff > 0 && scrollTopDiff < avgRowHeight) {
						newSri++;
						scrollContainer.scrollTop(scrollContainer.scrollTop() - scrollTopDiff + avgRowHeight)
					} else if(scrollTopDiff < 0 && Math.abs(scrollTopDiff) < avgRowHeight) {
						newSri--;
						scrollContainer.scrollTop(scrollContainer.scrollTop() - scrollTopDiff - avgRowHeight)
					}
				}
				if(newSri > this._totalRowCount - this._virtualRowCount) {
					newSri = this._totalRowCount - this._virtualRowCount
				}
				if(newSri < 0) {
					newSri = 0
				}
				if(newSri !== this._startRowIndex) {
					this._startRowIndex = newSri;
					this._renderVirtualRecords()
				}
			} else if(mode === "continuous") {
				this._virtualScrollToInternal(current)
			}
			this._oldScrollTop = scrollContainer.scrollTop();
			this._oldDisplayContainerScrollTop = this._vdisplaycontainer().scrollTop();
			if(this._persistVirtualScrollTop) {
				this._saveFirstVisibleTRIndex()
			}
		},
		_scrollContainer: function() {
			if(!this._scrollContainerObj || this._scrollContainerObj.length === 0) {
				this._scrollContainerObj = this.container().find("#" + this.id() + "_scrollContainer")
			}
			return this._scrollContainerObj
		},
		_onVirtualHorizontalScroll: function(event) {
			var newSci, internallyTriggered = event === undefined, horizontalScrollContainer = this._vhorizontalcontainer(), scrollLeft = horizontalScrollContainer.scrollLeft(), hiddenContentWidth = horizontalScrollContainer[0].scrollWidth - horizontalScrollContainer[0].offsetWidth;
			if(this.options.virtualization === true && this.options.virtualizationMode === "continuous") {
				this._onScrollContainer(event);
				return
			}
			this._isHorizontal = true;
			if(hiddenContentWidth > 0) {
				newSci = Math.ceil(scrollLeft * this._totalColumnCount / hiddenContentWidth);
				newSci = Math.min(newSci, this._totalColumnCount - this._virtualColumnCount)
			} else {
				newSci = 0
			}
			if(internallyTriggered || newSci !== this._startColIndex) {
				this._startColIndex = newSci;
				this._renderVirtualRecords();
				this._trigger("virtualhorizontalscroll", null, {startColIndex: this._startColIndex, endColIndex: this._startColIndex + this._virtualColumnCount - 1})
			}
		},
		_initLoadingIndicator: function() {
			var widget;
			if(this.container().data("igLoading")) {
				this._loadingIndicator = this.container().data("igLoading").indicator()
			} else {
				widget = this.container().igLoading().data("igLoading");
				if(widget) {
					this._loadingIndicator = widget.indicator()
				}
			}
		},
		_addHorizontalScrollBar: function(parent) {
			this._outerHScrollbar = true;
			var sb = $('<div id="' + this.id() + '_hscroller_container" ></div>').css("height", this._scrollbarWidth() + "px").css("position", "relative").css("display", "none").css("overflow", "hidden").append($('<div id="' + this.id() + '_hscroller" ></div>').data("containerName", "hScrollbar").css("width", "100%").css("position", "absolute").css("bottom", "0px").css("overflow-x", "scroll").css("overflow-y", "scroll").append($('<div id="' + this.id() + '_hscroller_inner" data-scroller ></div>').css("height", "1px")).bind("scroll", $.proxy(this._onScrollContainer, this)));
			if(parent) {
				sb.insertAfter(parent)
			}
			this._registerScrllCntnrToSync($("#" + this.id() + "_hscroller"))
		},
		_updateVirtualHorizontalScrollbar: function() {
			var horizontalScrollContainerInner, horizontalScrollContainer, isVisible;
			horizontalScrollContainerInner = this.container().find("#" + this.id() + "_horizontalScrollContainer div");
			horizontalScrollContainerInner.css("width", this._calculateContainerWidth(false));
			horizontalScrollContainer = this._vhorizontalcontainer();
			isVisible = horizontalScrollContainer.is(":visible");
			if(horizontalScrollContainer.width() > horizontalScrollContainerInner.width()) {
				horizontalScrollContainer.css("display", "none")
			} else {
				horizontalScrollContainer.css("display", "")
			}
			if(isVisible !== horizontalScrollContainer.is(":visible")) {
				this._initializeHeights()
			}
		},
		_generateColumnFlatStructure: function(treeStructure) {
			var cols, oldCols, newCols = [];
			cols = treeStructure.slice(0);
			oldCols = treeStructure.slice(0);
			this._multiColumnIdentifier = 0;
			this._maxLevel = this._getMaxLevelRecursive(0, cols);
			this._hiddenColumns = {};
			this._analyzeMultiColumnHeaders(cols, newCols, 0, oldCols, []);
			this._oldCols = oldCols;
			this.options.columns = newCols
		},
		moveColumn: function(column, target, after, inDom, callback) {
			var grid = this, found, nColArray, movingParams, hcPreserve, isFixed, cCols = this._oldCols ? jQuery.extend(true, [], this._oldCols) : jQuery.extend(true, [], this.options.columns);
			after = after === null || after === undefined ? true : after;
			inDom = inDom === null || inDom === undefined ? true : inDom;
			movingParams = {column: column, target: target, after: after};
			if(this._oldCols) {
				found = this._performInternalMove(movingParams, this._oldCols);
				hcPreserve = jQuery.extend(true, {}, this._hiddenColumns);
				this._generateColumnFlatStructure(this._oldCols);
				this._hiddenColumns = hcPreserve;
				this._preserveColspans(this._oldCols)
			} else {
				found = this._performInternalMove(movingParams, this.options.columns)
			}
			if(found === false) {
				throw new Error($.ig.Grid.locale.movingNotAllowedOrIncompatible)
			}
			if(movingParams.columnFixed === movingParams.targetFixed) {
				nColArray = this._buildColumnLayoutArray(cCols, movingParams.columnFixed)
			} else {
				return movingParams
			}
			column = movingParams.column;
			target = movingParams.target;
			after = movingParams.after;
			isFixed = movingParams.columnFixed;
			if(inDom === true) {
				this._loadingIndicator.show();
				setTimeout(function() {
					grid._columnMovingResets();
					grid._performDomColumnMove(column, target, after, nColArray, isFixed);
					grid._updateVerticalScrollbarCellPadding(true);
					grid._loadingIndicator.hide();
					if(callback) {
						$.ig.util.invokeCallback(callback, [grid.options.columns])
					}
				}, 0)
			} else {
				this._columnMovingResets();
				this._performColumnMove(column, target, after, nColArray, isFixed);
				if(callback) {
					$.ig.util.invokeCallback(callback, [grid.options.columns])
				}
			}
		},
		_columnMovingResets: function() {
			var i, $th;
			this._updateHeaderColumnIndexes();
			delete this._virtualDom;
			delete this._visibleColumnsArray;
			this._headerCells = [];
			for(i = 0; i < this.options.columns.length; i++) {
				$th = this.container().find("#" + this.id() + "_" + this.options.columns[i].key).data("columnIndex", i);
				$th.data("data-mch-order", i);
				if($th.length && $th[0].style.display !== "none" && $th[0].style.visibility !== "hidden" && $th.parent().is("tr")) {
					this._headerCells.push($th)
				}
			}
		},
		_preserveColspans: function(cols) {
			var i, cs = 0, col, res;
			for(i = 0; i < cols.length; i++) {
				col = cols[i];
				if(col.group !== undefined && col.group !== null) {
					res = this._preserveColspans(col.group);
					col.colspan = res;
					cs += res
				} else {
					if(col.hidden !== true) {
						cs++
					}
				}
			}
			return cs
		},
		_columnVisible: function(col) {
			return !col.hidden
		},
		_buildColumnLayoutArray: function(cCols, fixed) {
			var i = 0, j = 0, col, id, colrs, l, x = 0, nCols, level = 0, colgrp = fixed ? this.fixedBodyContainer().find("colgroup:first") : this.element.find("colgroup:first"), width = colgrp.children("col:not([data-skip=true])").length, htbl = fixed ? this.fixedHeadersTable() : this.headersTable(), height = htbl.find("thead tr").length, array = [];
			if(height === 0 && this.options.showHeader === false) {
				height = 1
			}
			for(i = 0; i < width; i++) {
				array[i] = []
			}
			i = 0;
			while(level < height) {
				nCols = [];
				while(i < cCols.length) {
					col = cCols[i];
					if(col.hidden === true || this._isSubsetFixed(col) !== fixed) {
						i++;
						continue
					}
					colrs = col.rowspan || 1;
					id = this._getColMarkForLevel(col);
					l = col.colspan || 1;
					for(j = 0; j < l; j++) {
						array[x + j][level] = id
					}
					if(col.crs === colrs && col.group) {
						nCols.push.apply(nCols, $.grep(col.group, this._columnVisible).slice(0))
					} else {
						nCols.push(col)
					}
					x += l;
					i++
				}
				cCols = nCols;
				level++;
				x = 0;
				i = 0
			}
			return array
		},
		_getColMarkForLevel: function(col) {
			if(!col.crs) {
				col.crs = 0
			}
			col.crs++;
			if(col.crs > 1) {
				return -1
			}
			return col.key || col.identifier
		},
		_performInternalMove: function(movingParams, subset) {
			var i = 0, j, success = true;
			i = this._getColIdxById(subset, movingParams.column);
			if(typeof movingParams.column === "number") {
				movingParams.column = subset[i].key || subset[i].identifier
			}
			if(i || i === 0) {
				movingParams.columnFixed = this._isSubsetFixed(subset[i]);
				j = this._getColIdxById(subset, movingParams.target);
				if(typeof movingParams.target === "number") {
					movingParams.target = subset[j].key || subset[j].identifier;
					movingParams.after = j >= i
				}
				if(j || j === 0) {
					movingParams.targetFixed = this._isSubsetFixed(subset[j]);
					delete subset[i].oWidth;
					delete subset[j].oWidth;
					success = success && this._rearrangeArray(subset, i, 1, movingParams.after === true ? j + 1 : j);
					success = success || movingParams.targetFixed !== movingParams.columnFixed;
					return success
				}
				return false
			}
			for(i = 0; i < subset.length; i++) {
				if(subset[i].group) {
					if(this._performInternalMove(movingParams, subset[i].group) === true) {
						return true
					}
				}
			}
			return false
		},
		_getColIdxById: function(array, id) {
			var i, col;
			if(typeof id === "number") {
				return id
			}
			for(i = 0; i < array.length; i++) {
				col = array[i];
				if(col.key) {
					if(col.key === id) {
						return i
					}
				} else if(col.identifier) {
					if(col.identifier === id) {
						return i
					}
				}
			}
		},
		_isSubsetFixed: function(subset) {
			var mchc;
			if(subset.group) {
				mchc = this._getMultiHeaderColumnById(subset.identifier);
				return !!mchc.children[0].fixed
			}
			return !!subset.fixed
		},
		_getCellIndexByColumnKey: function(key) {
			var i = this.getVisibleIndexByKey(key);
			return i === -1 ? i : i + this.element.find("tbody>tr:not([data-grouprow='true']):first").children("th,td[data-skip='true'],td[data-parent]").length
		},
		_findColAreaInLayout: function(col, nColArray, depth) {
			var i, j, res = {};
			for(i = 0; i < nColArray.length; i++) {
				if(nColArray[i][depth] === col) {
					res.start = i;
					for(j = i; j < nColArray.length; j++) {
						if(nColArray[j][depth] !== col) {
							break
						}
					}
					res.length = j - i;
					return res
				}
			}
			return null
		},
		_rearrangeArray: function(array, start, length, at) {
			var col, targetAfter = start < at, n;
			if(start === at || start < 0 || at < 0 || start >= array.length || at > array.length) {
				return false
			}
			col = array.splice(start, length);
			for(n = 0; n < col.length; n++) {
				array.splice(targetAfter ? at - length + n : at + n, 0, col[n])
			}
			return true
		},
		_moveColumnInHeader: function(column, target, after, nColArray, fixed) {
			var rmil, movedColumn, targetColumn, targetIndex, targetObject, spStart, spEnd, i, j, cols, n, header;
			if(fixed) {
				header = this.fixedHeadersTable().children("thead")
			} else {
				header = this.headersTable().children("thead")
			}
			for(j = 0; j < nColArray[0].length; j++) {
				movedColumn = this._findColAreaInLayout(column, nColArray, j);
				if(movedColumn) {
					targetColumn = this._findColAreaInLayout(target, nColArray, j);
					if(targetColumn) {
						break
					}
				}
			}
			rmil = [movedColumn, targetColumn];
			if(!movedColumn || !targetColumn) {
				return rmil
			}
			if(this.options.showHeader === false) {
				return rmil
			}
			this._moveThs({from: header}, column, target, after);
			while(++j < nColArray[0].length) {
				cols = [];
				n = null;
				for(i = movedColumn.start; i < movedColumn.start + movedColumn.length; i++) {
					if(nColArray[i][j] === -1) {
						continue
					}
					if(nColArray[i][j] !== n) {
						n = nColArray[i][j];
						cols.push(n)
					}
				}
				targetIndex = after === true ? targetColumn.start + targetColumn.length - 1 : targetColumn.start;
				if(nColArray[targetIndex][j] !== -1) {
					this._moveThs({from: header}, cols, nColArray[targetIndex][j], after);
					continue
				}
				if(after === true) {
					spStart = targetColumn.start + targetColumn.length;
					spEnd = movedColumn.start > targetColumn.start + targetColumn.length - 1 ? movedColumn.start : nColArray.length;
					targetObject = this._findTargetRight(spStart, spEnd, j, nColArray);
					if(!targetObject) {
						spStart = targetColumn.start + targetColumn.length - 2;
						spEnd = movedColumn.start > targetColumn.start + targetColumn.length - 1 ? -1 : movedColumn.start + movedColumn.length;
						targetObject = this._findTargetLeft(spStart, spEnd, j, nColArray)
					}
				} else {
					spStart = targetColumn.start - 1;
					spEnd = movedColumn.start > targetColumn.start + targetColumn.length - 1 ? -1 : movedColumn.start + movedColumn.length;
					targetObject = this._findTargetLeft(spStart, spEnd, j, nColArray);
					if(!targetObject) {
						spStart = targetColumn.start + 1;
						spEnd = movedColumn.start > targetColumn.start + targetColumn.length - 1 ? movedColumn.start : nColArray.length;
						targetObject = this._findTargetRight(spStart, spEnd, j, nColArray)
					}
				}
				if(targetObject && targetObject.pos && targetObject.left !== undefined && targetObject.left !== null) {
					this._moveThs({from: header}, cols, nColArray[targetObject.pos][j], targetObject.left)
				}
			}
			return rmil
		},
		_moveColumnInBodyFooter: function(area, movedColumn, targetColumn, after) {
			var i, j, trs, $tr, tds, tar, skip = 0, trsTo, $trTo, children, len, areaFrom = area.from || area;
			trs = area.trsFrom || areaFrom.find(">tr:not([data-container='true'],[data-grouprow='true'])");
			if(area.to || area.trsTo) {
				trsTo = area.trsTo || area.to.find(">tr:not([data-container='true'],[data-grouprow='true'])")
			}
			if(trs.length > 0 && !area.ignoreDataSkip) {
				skip = trs.eq(0).find("[data-parent],[data-skip='true'],th").length
			}
			len = trs.length;
			for(j = 0; j < len; j++) {
				tds = $();
				$tr = trs.eq(j);
				$trTo = trsTo ? trsTo.eq(j) : $tr;
				children = $tr.children();
				for(i = movedColumn.start; i < movedColumn.start + movedColumn.length; i++) {
					tds = tds.add(children.eq(i + skip))
				}
				if(targetColumn.start === -1) {
					tds.appendTo($trTo);
					continue
				}
				if(after === true) {
					tar = $trTo.children().eq(targetColumn.start + targetColumn.length + skip - 1);
					tds.insertAfter(tar)
				} else {
					tar = $trTo.children().eq(targetColumn.start + skip);
					tds.insertBefore(tar)
				}
			}
		},
		_findTargetRight: function(start, end, level, nColArray) {
			var i, colFound = {};
			for(i = start; i >= 0 && i < end && i < nColArray.length; i++) {
				if(nColArray[i][level] !== -1) {
					colFound.pos = i;
					colFound.left = false;
					return colFound
				}
			}
		},
		_findTargetLeft: function(start, end, level, nColArray) {
			var i, colFound = {};
			for(i = start; i >= 0 && i > end && i < nColArray.length; i--) {
				if(nColArray[i][level] !== -1) {
					colFound.pos = i;
					colFound.left = true;
					return colFound
				}
			}
		},
		_moveCols: function(area, movedColumn, targetColumn, after) {
			var i, cols = $(), tCol, areaFrom = area.from || area, areaTo = area.to || areaFrom, skip = !area.ignoreDataSkip ? areaFrom.children("[data-skip='true']").length : 0;
			for(i = movedColumn.start; i < movedColumn.start + movedColumn.length; i++) {
				cols = cols.add(areaFrom.children().eq(i + skip))
			}
			if(targetColumn.start === -1) {
				cols.detach().appendTo(areaTo);
				return
			}
			if(after === true) {
				tCol = areaTo.children().eq(targetColumn.start + targetColumn.length + skip - 1);
				cols.detach().insertAfter(tCol)
			} else {
				tCol = areaTo.children().eq(targetColumn.start + skip);
				cols.detach().insertBefore(tCol)
			}
		},
		_moveThs: function(header, ids, tar, after) {
			var $tar, $ids = $(), $id, i, $pid, headerFrom = header.from || header, headerTo = header.to || headerFrom;
			$tar = headerTo.find("th[data-mch-id='" + tar + "'],th[id='" + this.id() + "_" + tar + "']");
			if(typeof ids === "object") {
				for(i = 0; i < ids.length; i++) {
					$id = headerFrom.find("th[data-mch-id='" + ids[i] + "'],th[id='" + this.id() + "_" + ids[i] + "']");
					if($id.attr("data-vscr-padding-icrement")) {
						$pid = $id
					}
					$ids = $ids.add($id)
				}
			} else {
				$ids = headerFrom.find("th[data-mch-id='" + ids + "'],th[id='" + this.id() + "_" + ids + "']");
				if($ids.attr("data-vscr-padding-icrement")) {
					$pid = $ids
				}
			}
			$ids.detach();
			if(after) {
				$ids.insertAfter($tar)
			} else {
				$ids.insertBefore($tar)
			}
			if($tar.attr("data-vscr-padding-icrement") && after === true) {
				$ids.last().css(this._padding, $tar.css(this._padding)).attr("data-vscr-padding-icrement", $tar.attr("data-vscr-padding-icrement"));
				$tar.css(this._padding, "");
				$tar.removeAttr("data-vscr-padding-icrement")
			} else if($pid) {
				$pid.parent().children(":last").css(this._padding, $pid.css(this._padding)).attr("data-vscr-padding-icrement", $pid.attr("data-vscr-padding-icrement"));
				$pid.css(this._padding, "");
				$pid.removeAttr("data-vscr-padding-icrement")
			}
		},
		_moveSpecialThs: function(movedColumn, targetColumn, after, fixed) {
			var i, j, spTrs, header, skip, ths, $tr, tar;
			if(fixed) {
				header = this.fixedHeadersTable().children("thead")
			} else {
				header = this.headersTable().children("thead")
			}
			spTrs = header.find(">tr[data-role]");
			if(spTrs.length > 0) {
				skip = spTrs.eq(0).find("[data-parent],[data-skip='true']").length
			}
			for(j = 0; j < spTrs.length; j++) {
				ths = $();
				$tr = $(spTrs[j]);
				for(i = movedColumn.start; i < movedColumn.start + movedColumn.length; i++) {
					ths = ths.add($tr.children("td,th").eq(i + skip))
				}
				if(after === true) {
					tar = $tr.children().eq(targetColumn.start + targetColumn.length + skip - 1);
					ths.detach().insertAfter(tar)
				} else {
					tar = $tr.children().eq(targetColumn.start + skip);
					ths.detach().insertBefore(tar)
				}
			}
		},
		_performDomColumnMove: function(column, target, after, nColArray, fixed) {
			var rmil = this._moveColumnInHeader(column, target, after, nColArray, fixed), movedColumn = rmil[0], targetColumn = rmil[1], body, footer, indexMod = 0;
			if(!movedColumn || !targetColumn) {
				this._trigger("_columnsmoved", null, {owner: this});
				return
			}
			this._moveSpecialThs(movedColumn, targetColumn, after, fixed);
			if(this.options.fixedHeaders === true) {
				this._moveCols({from: fixed ? this.fixedHeadersTable().children("colgroup") : this.headersTable().children("colgroup")}, movedColumn, targetColumn, after)
			}
			if(fixed) {
				body = this.fixedBodyContainer().children("table")
			} else {
				body = this.element
			}
			this._moveColumnInBodyFooter({from: body.children("tbody")}, movedColumn, targetColumn, after);
			this._moveCols({from: body.children("colgroup")}, movedColumn, targetColumn, after);
			if(this.options.fixedFooters === true) {
				footer = fixed ? this.fixedFootersTable() : this.footersTable();
				this._moveColumnInBodyFooter({from: footer.children("tfoot")}, movedColumn, targetColumn, after);
				this._moveCols({from: footer.children("colgroup")}, movedColumn, targetColumn, after)
			} else {
				this._moveColumnInBodyFooter({from: body.children("tfoot")}, movedColumn, targetColumn, after)
			}
			if(!fixed && this.fixingDirection() === "left" || fixed && this.fixingDirection() === "right") {
				indexMod = this._fixedColumns ? this._fixedColumns.length : 0
			}
			this._trigger("_columnsmoved", null, {
				owner: this,
				start: movedColumn.start + indexMod,
				len: movedColumn.length,
				index: after === true ? targetColumn.start + targetColumn.length + indexMod : targetColumn.start + indexMod,
				isFixed: fixed
			})
		},
		_performColumnMove: function(column, target, after, nColArray, fixed) {
			var rmil = this._moveColumnInHeader(column, target, after, nColArray, fixed), movedColumn = rmil[0], targetColumn = rmil[1], indexMod = 0, footer, body;
			if(this.options.fixedHeaders === true) {
				this._moveCols({from: fixed ? this.fixedHeadersTable().children("colgroup") : this.headersTable().children("colgroup")}, movedColumn, targetColumn, after)
			}
			this._moveSpecialThs(movedColumn, targetColumn, after, fixed);
			this._renderData();
			if(fixed) {
				body = this.fixedBodyContainer().children("table")
			} else {
				body = this.element
			}
			if(this.options.fixedFooters === true) {
				footer = fixed ? this.fixedFootersTable() : this.footersTable();
				this._moveColumnInBodyFooter({from: footer.children("tfoot")}, movedColumn, targetColumn, after);
				this._moveCols({from: footer.children("colgroup")}, movedColumn, targetColumn, after)
			} else {
				this._moveColumnInBodyFooter({from: body.children("tfoot")}, movedColumn, targetColumn, after)
			}
			this._rerenderColgroups();
			if(!fixed && this.fixingDirection() === "left" || fixed && this.fixingDirection() === "right") {
				indexMod = this._fixedColumns ? this._fixedColumns.length : 0
			}
			this._trigger("_columnsmoved", null, {
				owner: this,
				start: movedColumn.start + indexMod,
				len: movedColumn.length,
				index: after === true ? targetColumn.start + targetColumn.length + indexMod : targetColumn.start + indexMod,
				isFixed: fixed
			})
		},
		showColumn: function(column, callback) {
			var grid = this;
			this._loadingIndicator.show();
			if(!this._isShowingAllowed([column])) {
				return false
			}
			setTimeout(function() {
				var col;
				col = grid._setHidden(column, false);
				grid._loadingIndicator.hide();
				if(callback) {
					$.ig.util.invokeCallback(callback, [[col], false])
				}
			}, 0);
			return true
		},
		hideColumn: function(column, callback) {
			var grid = this;
			if(!this._isHidingAllowed([column])) {
				return false
			}
			if(grid._visibleColumns().length === 1) {
				return false
			}
			this._loadingIndicator.show();
			setTimeout(function() {
				var col;
				col = grid._setHidden(column, true);
				grid._loadingIndicator.hide();
				if(callback) {
					$.ig.util.invokeCallback(callback, [[col], true])
				}
			}, 0);
			return true
		},
		_setHidden: function(column, hidden) {
			var col, applied = false;
			if(typeof column === "number") {
				col = this.options.columns[column]
			} else {
				col = this.columnByKey(column)
			}
			if(col && col.hidden !== hidden) {
				this._setHiddenColumns([col], hidden, false);
				if(!hidden && col._initiallyHidden && col._shouldAutoSize) {
					this.autoSizeColumns();
					delete col._shouldAutoSize
				}
				applied = true
			}
			if(applied) {
				return col
			}
			return null
		},
		_visibleAreaWidth: function(w) {
			if(w !== undefined) {
				this._minVAreaWidth = w
			} else {
				return this._minVAreaWidth
			}
		},
		_isShowingAllowed: function(columns) {
			if(!this.hasFixedColumns()) {
				return true
			}
			var i, columnsLength = columns.length, totalW = 0, w, gridW, colType, col;
			for(i = 0; i < columnsLength; i++) {
				colType = typeof columns[i];
				if(colType === "string") {
					col = this.columnByKey(columns[i])
				} else if(colType === "number") {
					col = this.options.columns[columns[i]]
				} else {
					col = columns[i]
				}
				if(!col || !col.hidden) {
					continue
				}
				if(col.fixed && (col.width || col.oWidth)) {
					w = col.width || col.oWidth;
					w = parseInt(w, 10);
					totalW += w
				}
			}
			if(totalW !== 0) {
				gridW = this.container().outerWidth();
				if(gridW - parseInt(this.fixedContainer().outerWidth(), 10) - totalW < this._visibleAreaWidth()) {
					return false
				}
			}
			return true
		},
		_isHidingAllowed: function(columns) {
			if(!this.hasFixedColumns()) {
				return true
			}
			var i, columnsLength = columns.length, col, colType, fixed = [], unfixed = [];
			for(i = 0; i < columnsLength; i++) {
				colType = typeof columns[i];
				if(colType === "string") {
					col = this.columnByKey(columns[i])
				} else if(colType === "number") {
					col = this.options.columns[columns[i]]
				} else {
					col = columns[i]
				}
				if(!col || col.hidden) {
					continue
				}
				if(col.fixed) {
					fixed.push(col)
				} else {
					unfixed.push(col)
				}
			}
			if(fixed.length !== 0 && this._visibleColumns(true).length <= fixed.length || this._visibleColumns(false).length <= unfixed.length) {
				return false
			}
			return true
		},
		_setHiddenColumns: function(columns, hidden, initial) {
			var columnNumberChanged = false, visibleColumnsWithWidthLength, gridWidth, self = this, inPerc, visibleColumnsLength, hasVirtualization = this.options.virtualization === true || this.options.columnVirtualization === true || this.options.rowVirtualization === true, hasColumnVirtualization = this.options.virtualizationMode !== "continuous" && (this.options.virtualization === true && this.options.width || this.options.columnVirtualization === true), isContinuos = false;
			if(columns.length === 0) {
				return
			}
			this._fireInternalEvent("_hidingFinishing", {columns: columns, hidden: hidden});
			if(hasVirtualization) {
				isContinuos = this.options.virtualizationMode === "continuous";
				self._updateVirtColCounters();
				if(!isContinuos) {
					$.each(columns, function(index, col) {
						var oldVirtualColumnCount = self._virtualColumnCount;
						col.hidden = hidden;
						self._visibleColumnsArray = undefined;
						self._updateVirtColCounters();
						if(self._virtualColumnCount !== oldVirtualColumnCount) {
							if(self._virtualColumnCount < oldVirtualColumnCount) {
								self._detachColumn(col)
							} else if(self._virtualColumnCount > oldVirtualColumnCount) {
								self._attachColumn(col)
							}
							columnNumberChanged = true;
							self._resetVirtualDom()
						}
					});
					if(hasColumnVirtualization) {
						this._vheaders = undefined;
						this._updateVirtualHorizontalScrollbar();
						this._onVirtualHorizontalScroll();
						if(!this._initialized) {
							this._adjustLastColumnWidth(true)
						}
					}
					this._renderVirtualRecords()
				}
			}
			if(!hasVirtualization || isContinuos) {
				$.each(columns, function(index, col) {
					var pos;
					col.hidden = hidden;
					self._visibleColumnsArray = undefined;
					if(col.hidden) {
						pos = self._detachColumn(col);
						self.element.find("colgroup>col").not("[data-skip]").eq(pos).attr("data-hiding", true)
					} else {
						self._attachColumn(col);
						$('<col data-showing="true">').appendTo(self.element.find("colgroup"))
					}
				});
				if(this._isHierarchicalGrid) {
					this.element.children("tbody").children("tr[data-container]").empty()
				}
				this._cleanupTBody();
				if(this.hasFixedColumns()) {
					this._rerenderColgroups()
				}
				columnNumberChanged = true;
				if(hasVirtualization) {
					this._updateVirtColCounters();
					if(this._initialized) {
						this._renderVirtualRecords()
					}
				} else {
					this._renderRecords()
				}
				self.element.find("colgroup>col[data-showing]").remove();
				self.element.find("colgroup>col[data-hiding]").removeAttr("data-hiding")
			}
			if(columnNumberChanged) {
				if(!this._initialized) {
					if(this._visibleColumns().length === 0) {
						throw new Error($.ig.Grid.locale.allColumnsHiddenOnInitialization)
					}
					this._rerenderColgroups(initial);
					this._adjustLastColumnWidth(true);
					if(hasVirtualization) {
						this._renderVirtualRecords()
					}
				} else {
					if(this._visibleColumns().length > 0) {
						this._rerenderColgroups(initial);
						this._adjustLastColumnWidth(true);
						visibleColumnsLength = this._visibleColumns().length;
						visibleColumnsWithWidthLength = $.grep(this._visibleColumns(), function(col) {
							return col.width
						}).length;
						if(visibleColumnsWithWidthLength === visibleColumnsLength) {
							if(this.options.width && parseInt(this.options.width, 10) > 0) {
								this._updateGridContentWidth()
							} else {
								this._setContainerWidth(this.container());
								if(hasVirtualization) {
									gridWidth = this._calculateContainerWidth(true);
									if(this.options.height !== null) {
										gridWidth -= this._scrollbarWidth()
									}
									this._vdisplaycontainer().css("width", gridWidth).css("max-width", gridWidth)
								}
							}
						}
					}
				}
			}
			this.element.trigger("iggriduisoftdirty", {owner: this});
			this._trigger(this.events.columnsCollectionModified, null, {owner: this});
			if(columnNumberChanged && hasVirtualization && this._visibleColumns().length > 0 && visibleColumnsWithWidthLength === visibleColumnsLength) {
				if(this.options.virtualizationMode === "continuous") {
					if(!isNaN(gridWidth)) {
						gridWidth += this._calculateSpecialColumnsWidth();
						this._vdisplaycontainer().css("width", gridWidth).css("max-width", gridWidth)
					}
				}
				if(!isNaN(gridWidth)) {
					this.container().find("#" + this.id() + "_virtualContainer>colgroup col").eq(0).attr("width", gridWidth)
				}
				if(this.options.width === null || this.options.width === undefined) {
					this._setContainerWidth(this.container().find("#" + this.id() + "_headers_v"))
				}
			}
			this._origWidth = parseInt(this.container().css("width"), 10);
			if(columnNumberChanged && $.ig.util.isSafari && this.options.showHeader) {
				self.headersTable().find("[data-header-row]").hide();
				setTimeout(function() {
					self.headersTable().find("[data-header-row]").show();
					if(self.options.height) {
						self._initializeHeights()
					}
				}, 0)
			}
			if(columnNumberChanged && ($.ig.util.isFF || $.ig.util.isIE8)) {
				inPerc = this.options.width === null || typeof this.options.width === "string" && this.options.width.indexOf("%") !== -1;
				if(inPerc) {
					if($.ig.util.isIE8) {
						this._refreshUI()
					}
					this._refreshTableUI(this.element);
					if(this.options.showHeader) {
						this._refreshTableUI(this.headersTable())
					}
					if(this.options.fixedFooters === true && this.options.height !== null) {
						this._refreshTableUI(this.footersTable())
					}
				}
			}
			if(columnNumberChanged) {
				this._checkAndReinitializeContainersHeights()
			}
			this._fireInternalEvent("_hidingFinished", {columns: columns, hidden: hidden})
		},
		_refreshTableUI: function($tbl) {
			if(!$tbl.length) {
				return
			}
			var overflow;
			overflow = $tbl[0].style.overflow;
			$tbl[0].style.overflow = "hidden";
			setTimeout(function() {
				$tbl[0].style.overflow = overflow
			}, 0)
		},
		_checkAndReinitializeContainersHeights: function(initH) {
			var c;
			if(_aNull(this.options.height) || !this.options.height || $.type(this.options.height) === "string" && this.options.height.indexOf("%") > 0) {
				return
			}
			c = this.container();
			if(!c.length) {
				return
			}
			if(_aNull(initH)) {
				initH = c.height()
			}
			if(c[0].scrollHeight - initH > 1) {
				this._initializeHeights()
			}
		},
		_calculateSpecialColumnsWidth: function() {
			var width = 0, cols = $();
			if(this.hasFixedColumns() && this.fixingDirection() === "left") {
				cols = this.fixedHeadersTable().find("> colgroup > col[data-skip=true]")
			}
			this.headersTable().find("> colgroup > col[data-skip=true]").each(function() {
				cols = cols.add(this)
			});
			cols.each(function() {
				var colWidth = this.style.width;
				if(colWidth) {
					width += parseInt(colWidth, 10)
				}
			});
			return width
		},
		_allSpecialColumnsInPercentage: function() {
			var specCols = this.headersTable().find("> colgroup > col[data-skip=true]"), i;
			for(i = 0; i < specCols.length; i++) {
				if(!specCols[i].style.width.endsWith("%")) {
					return false
				}
			}
			return true
		},
		_synchronizeHScroll: function() {
			var hasFixedHeaders = this.options.showHeader && this.options.fixedHeaders === true && this.options.height !== null, hasFixedFooters = this.options.showFooter && this.options.fixedFooters === true && this.options.height !== null, scroller = this._hscrollbarcontent(), scrollContainer = this.scrollContainer(), $vContainer, horizontalScrollContainer, scrLeft = scroller.scrollLeft(), headers, footers;
			if(scroller.length === 0) {
				horizontalScrollContainer = $("#" + this.id() + "_horizontalScrollContainer");
				if(horizontalScrollContainer.length === 1) {
					scrLeft = horizontalScrollContainer.scrollLeft();
					this._vdisplaycontainer().scrollLeft(scrLeft)
				} else {
					return
				}
			} else if(scrollContainer.length > 0) {
				scrollContainer.scrollLeft(scrLeft);
				if(scrollContainer.scrollLeft() !== 0 || this.element.height() !== 0) {
					scrLeft = scrollContainer.scrollLeft();
					scroller.scrollLeft(scrLeft)
				}
			} else {
				$vContainer = this._vdisplaycontainer();
				if($vContainer.length) {
					$vContainer.scrollLeft(scrLeft)
				}
			}
			if(hasFixedHeaders) {
				headers = this.headersTable().parent();
				headers.scrollLeft(scrLeft)
			}
			if(hasFixedFooters) {
				footers = this._fixedfooters();
				footers.scrollLeft(scrLeft)
			}
		},
		_updateGridContentWidth: function() {
			var gridWidth = 0, hasWidthInPixels = this._gridHasWidthInPixels(), scroller, scrLeft, hasFixedHeader = this.options.height !== null && this.options.fixedHeaders === true && this.options.showHeader && this._headerParent;
			$.each(this._visibleColumns(), function(index, col) {
				if(col.fixed === true) {
					return true
				}
				if(gridWidth !== undefined && col.width && !(col.width.charAt && col.width.endsWith("%"))) {
					gridWidth += parseInt(col.width, 10)
				} else {
					gridWidth = undefined
				}
			});
			if(gridWidth === undefined) {
				return
			}
			gridWidth += this.hasFixedColumns() && this.fixingDirection() === "left" ? 0 : this._calculateSpecialColumnsWidth();
			if(!hasFixedHeader && this._hasVerticalScrollbar && (!hasWidthInPixels || hasWidthInPixels && gridWidth <= parseInt(this.options.width, 10))) {
				gridWidth -= this._scrollbarWidth()
			}
			if(this.options.width !== null && this.options.height !== null) {
				scroller = this._hscrollbarcontent();
				scrLeft = scroller.scrollLeft()
			}
			this._setGridContentWidth(gridWidth);
			if(this.options.height !== null && this.options.width !== null && !this.options.virtualization && !this.options.rowVirtualization && !this.options.columnVirtualization) {
				this._updateVerticalScrollbarCellPadding()
			}
			if(this.options.width !== null && this.options.height !== null) {
				scroller.scrollLeft(scrLeft);
				this._synchronizeHScroll()
			}
		},
		_updateVerticalScrollbarCellPadding: function(skipHeaderFooters) {
			var o = this.options, hasFixedHeaders = o.showHeader && o.fixedHeaders === true && o.height !== null, hasFixedFooters = o.showFooter && o.fixedFooters === true && o.height !== null, hasVirtualization = o.virtualization === true || o.columnVirtualization === true || o.rowVirtualization === true, emptySpace, paddingIncrement;
			if(o.height === null) {
				return
			}
			if(this._gridInnerWidth === undefined || this._gridContentWidth === undefined) {
				emptySpace = 0
			} else {
				emptySpace = this.element.closest("div").width() - this.element.width()
			}
			if(this._hasVerticalScrollbar || (o.virtualization || o.rowVirtualization) && typeof o.width === "string" && o.width.indexOf("%") > 0) {
				paddingIncrement = this._scrollbarWidth()
			} else {
				paddingIncrement = 0
			}
			if(hasVirtualization || !hasFixedHeaders && !hasFixedFooters && !(emptySpace >= 0 && emptySpace < paddingIncrement)) {
				return
			}
			paddingIncrement -= emptySpace >= 0 ? emptySpace : 0;
			paddingIncrement = paddingIncrement < 0 ? 0 : paddingIncrement;
			this._updateVScrollbarCellPaddingHelper(paddingIncrement, skipHeaderFooters);
			return paddingIncrement
		},
		_updateVScrollbarCellPaddingHelper: function(paddingIncrement, skipHeaderFooters) {
			var hasFixedFooters = this.options.showFooter && this.options.fixedFooters === true && this.options.height !== null;
			if(!skipHeaderFooters) {
				if(this.options.showHeader && this.options.height !== null) {
					if(!this.options.fixedHeaders) {
						this._increaseLastCellVScrollbarPadding(this.element, "thead", "th", paddingIncrement)
					} else {
						this._increaseLastHeaderCellVScrollbarPadding(this.headersTable(), paddingIncrement)
					}
				}
				if(hasFixedFooters) {
					this._increaseLastCellVScrollbarPadding(this.footersTable(), "tfoot", "td", paddingIncrement)
				} else {
					this._increaseLastCellVScrollbarPadding(this.element, "tfoot", "td", paddingIncrement)
				}
			}
			this._increaseLastCellVScrollbarPadding(this.element, "tbody", "td", paddingIncrement)
		},
		_getLastCellsInMCH: function(headerTable) {
			var $thead, ml = this._maxLevel, $tr, lastCells = $(), i, $th, rowspan;
			if(!headerTable) {
				headerTable = this.headersTable()
			}
			$thead = headerTable.find("thead");
			if(!ml || !$thead.length) {
				return lastCells
			}
			for(i = ml; i >= 0; i--) {
				$tr = $thead.children("tr[data-mch-level=" + i + "]");
				if(!$tr.length) {
					continue
				}
				$th = $tr.children("th:last-child").not("[data-skip=true]");
				lastCells = lastCells.add($th);
				rowspan = parseInt($th.attr("rowspan"), 10);
				if(!isNaN(rowspan) && rowspan > 1) {
					i -= rowspan - 1
				}
			}
			lastCells = lastCells.add($thead.children("tr:not([data-mch-level])").not("[data-skip=true]").children("th:last-child").not("[data-skip=true]"));
			return lastCells
		},
		_increaseLastHeaderCellVScrollbarPadding: function(table, paddingIncrement) {
			var lastCells, currIncrement, paddingValue, selector = "", i = 0, updateNonPaddedInd = true;
			if(this._isMultiColumnGrid) {
				lastCells = this._getLastCellsInMCH(table)
			} else if(this._isMultiRowGrid()) {
				for(i = 0; i < this._rlm.length; i++) {
					selector += "#" + this.id() + "_" + this._rlm[i][this._maxCols - 1] + ", "
				}
				selector = selector.slice(0, selector.lastIndexOf(", "));
				lastCells = table.find(selector)
			} else {
				updateNonPaddedInd = false;
				lastCells = table.children("thead").children("tr").not("[data-skip=true]").children("th:last-child").not("[data-skip=true]")
			}
			currIncrement = parseInt(lastCells.first().attr("data-vscr-padding-icrement"), 10);
			paddingValue = parseInt(lastCells.first().css(this._padding), 10);
			if(currIncrement) {
				paddingValue -= currIncrement
			}
			this._removeHeaderCellPadding(table);
			lastCells.css(this._padding, paddingValue + paddingIncrement);
			lastCells.first().attr("data-vscr-padding-icrement", paddingIncrement);
			if(updateNonPaddedInd) {
				lastCells.find("[data-nonpaddedindicator=right]").css(this._rtl ? "margin-left" : "margin-right", -parseInt(lastCells.css(this._padding), 10) + "px")
			}
		},
		_removeHeaderCellPadding: function(table, removeAllPaddings) {
			var withoutLastCell = ":not(:last)";
			if(removeAllPaddings === true) {
				withoutLastCell = ""
			}
			table.find("thead > tr > th" + withoutLastCell + "[data-vscr-padding-icrement],thead > tr > td:not(:last)[data-vscr-padding-icrement]").removeAttr("data-vscr-padding-icrement").css(this._padding, "")
		},
		_removeCellPadding: function(table, tableGroup, rowElement, removeAllPaddings) {
			var i, $cell, cells, withoutLastCell = ":not(:last)";
			if(removeAllPaddings === true) {
				withoutLastCell = ""
			}
			cells = table.find(" > " + tableGroup + " > tr:first > " + rowElement + withoutLastCell + "[data-vscr-padding-icrement]");
			for(i = 0; i < cells.length; i++) {
				$cell = $(cells[i]);
				$cell.removeAttr("data-vscr-padding-icrement");
				table.find(" > " + tableGroup + " > tr > " + rowElement + ":nth-child(" + ($cell.index() + 1) + ")").css(this._padding, "")
			}
		},
		_increaseLastCellVScrollbarPadding: function(table, tableGroup, rowElement, paddingIncrement) {
			var paddingValue, lastCells = table.find(" > " + tableGroup + " > tr > " + rowElement + ":last-child"), currIncrement = parseInt(lastCells.first().attr("data-vscr-padding-icrement"), 10), i = 0, cell;
			if(this._isMultiRowGrid()) {
				lastCells = [];
				for(i = 0; i < this._rlm.length; i++) {
					cell = this._getCellsByColKey(table, this._rlm[i][this._maxCols - 1]);
					if(cell.length > 0) {
						lastCells = lastCells.concat(cell.toArray())
					}
				}
				lastCells = $(lastCells);
				currIncrement = parseInt(lastCells.first().attr("data-vscr-padding-icrement"), 10)
			}
			this._removeCellPadding(table, tableGroup, rowElement);
			paddingValue = parseInt(lastCells.first().css(this._padding), 10);
			paddingValue = paddingValue || 0;
			if(currIncrement) {
				paddingValue -= currIncrement
			}
			lastCells.css(this._padding, paddingValue + paddingIncrement);
			lastCells.first().attr("data-vscr-padding-icrement", paddingIncrement)
		},
		_updateHScrollbarVisibility: function() {
			var o = this.options, hasColVirt = o.columnVirtualization === true, $hScrollCntnrInner = this._getHScrollContainerInner(), scrollerContainer = this._hscrollbar(), visibleScroller = scrollerContainer.is(":visible"), gridW = this._gridInnerWidth, contW = this._gridContentWidth, shouldInitHeights = false;
			if(!scrollerContainer.length && o.virtualizationMode === "continuous") {
				scrollerContainer = this._vhorizontalcontainer();
				visibleScroller = scrollerContainer.is(":visible")
			}
			scrollerContainer.css("display", "");
			if(!scrollerContainer.is(":visible") && scrollerContainer.length > 0) {
				scrollerContainer.css("display", "none");
				return
			}
			if(o.rowVirtualization || o.virtualization) {
				gridW = this.element.parent().width();
				if($.ig.util.isIE && this._allColumnWidthsInPixels) {
					contW = 0;
					this.element.find(">colgroup>col").each(function(i, col) {
						var w = col.width || col.style.width;
						if(w && w.indexOf("px") > 0) {
							contW += parseInt(w, 10)
						} else {
							contW = this.element.width();
							return false
						}
					})
				} else {
					contW = this.element.width()
				}
			}
			if(gridW < contW) {
				if(o.virtualizationMode === "continuous" && (scrollerContainer.length === 0 || $hScrollCntnrInner.length === 0)) {
					this._vhorizontalcontainer().empty();
					this._renderHorizontalScrollContainer(this._calculateContainerWidth(false));
					shouldInitHeights = true
				} else if(o.virtualization || o.rowVirtualization) {
					if((!o.width || o.width.indexOf && o.width.indexOf("%") > 0) && !this._allColumnWidthsInPercentage && !this._allColumnWidthsInPixels) {
						scrollerContainer.css("display", "none")
					}
				}
			} else {
				if(o.virtualizationMode === "continuous" && scrollerContainer.length === 0 && $hScrollCntnrInner.length) {
					this._vhorizontalcontainer().empty().attr("style", "");
					shouldInitHeights = true
				}
				scrollerContainer.css("display", "none")
			}
			shouldInitHeights = shouldInitHeights || scrollerContainer.is(":visible") !== visibleScroller;
			if(o.autoAdjustHeight && shouldInitHeights) {
				this._initializeHeights()
			}
		},
		_applyAutofitLastColInVirtGrid: function(gridContentWidth) {
			var o = this.options, widthInPerc, widthInPx;
			if(!o.rowVirtualization || o.columnVirtualization || o.autofitLastColumn) {
				return true
			}
			gridContentWidth = gridContentWidth || this._gridContentWidth;
			widthInPx = this._gridHasWidthInPixels() && gridContentWidth < parseFloat(o.width) && gridContentWidth;
			widthInPerc = this._allColumnWidthsInPixels && this._gridHasWidthInPercent();
			return !(widthInPx || widthInPerc)
		},
		_setGridWidthVirtGrid: function(width) {
			var widthUnfixedContainer = width, id = this.id(), cols, $col, scrlbWidth = this._scrollbarWidth(), hasFixedCols = this.hasFixedColumns(), widthInPerc = typeof width === "string" && width.indexOf("%") > 0, wWithoutScrlbr = width;
			if(hasFixedCols && !widthInPerc) {
				widthUnfixedContainer = parseInt(width, 10) - this.fixedBodyContainer().outerWidth()
			}
			wWithoutScrlbr = widthInPerc ? width : parseInt(widthUnfixedContainer, 10) - scrlbWidth;
			this.container().css("width", width);
			this.element.css("width", widthInPerc ? "100%" : wWithoutScrlbr);
			if(this.options.fixedHeaders) {
				this.headersTable().css("width", widthInPerc ? "100%" : widthUnfixedContainer)
			}
			this.container().find("#" + id + "_headers_v").css("max-width", "").css("width", widthInPerc ? "100%" : widthUnfixedContainer);
			this._vdisplaycontainer().css("max-width", "").css("width", widthInPerc ? "100%" : wWithoutScrlbr);
			this._virtualcontainer().css("width", widthInPerc ? "100%" : widthUnfixedContainer);
			cols = this._virtualcontainer().find("> colgroup > col");
			$col = hasFixedCols && this.fixingDirection() === "left" ? cols.eq(1) : cols.first();
			$col.attr("width", widthInPerc ? "100%" : wWithoutScrlbr);
			this.container().find("#" + id + "_footer_container").css("max-width", "").css("width", widthInPerc ? "100%" : widthUnfixedContainer);
			this.container().find("#" + id + "_footers").css("max-width", "").css("width", widthInPerc ? "100%" : widthUnfixedContainer);
			this._vhorizontalcontainer().css("width", widthInPerc ? "100%" : $.ig.util.isFF ? parseFloat(widthUnfixedContainer) - scrlbWidth : widthUnfixedContainer);
			if(this.options.autofitLastColumn && !(hasFixedCols && this.fixingDirection() === "right")) {
				this._rerenderColgroups();
				this._adjustLastColumnWidth(true)
			}
			this._gridInnerWidth = this._vdisplaycontainer().width();
			if(this._allColumnWidthsInPixels && widthInPerc) {
				if(this.options.fixedHeaders) {
					this.headersTable().css("max-width", this._gridInnerWidth)
				}
				this.element.css("max-width", this._gridInnerWidth);
				if(this.options.fixedFooters) {
					this.footersTable().css("max-width", this._gridInnerWidth)
				}
			}
			this._updateGridContentWidth()
		},
		_setGridWidth: function(width) {
			if(this.options.virtualization === true || this.options.columnVirtualization === true || this.options.rowVirtualization === true) {
				return this._setGridWidthVirtGrid(width)
			}
			var widthUnfixedContainer = width, hasFixedCols = this.hasFixedColumns(), widthInPerc = typeof width === "string" && width.indexOf("%") > 0;
			if(hasFixedCols && width && !widthInPerc) {
				widthUnfixedContainer = parseInt(width, 10) - this.fixedBodyContainer().outerWidth()
			} else if(widthInPerc) {
				widthUnfixedContainer = "100%"
			}
			this.container().css("width", width);
			this.element.css("width", widthUnfixedContainer);
			if(this.options.fixedHeaders) {
				this.headersTable().css("width", widthInPerc ? "100%" : width)
			}
			if(this.options.fixedFooters) {
				this.footersTable().css("width", widthInPerc ? "100%" : width)
			}
			if(!this._allColumnWidthsInPercentage || !widthInPerc) {
				this._gridInnerWidth = this.scrollContainer().width()
			}
			if(this.options.autofitLastColumn && !(hasFixedCols && this.fixingDirection() === "right")) {
				this._rerenderColgroups();
				this._adjustLastColumnWidth(true)
			}
			if(this.options.width !== null || this.options.height !== null) {
				this._updateGridContentWidth()
			}
		},
		_setGridContentWidth: function(gridContentWidth) {
			var o = this.options, w, $hscrlbar, $parent, oAvgRowHeight, fixedCols = this.hasFixedColumns(), fixedDirRight = this.fixingDirection() === "right", v = o.virtualization === true || o.rowVirtualization === true || o.columnVirtualization === true;
			if(v === false || o.rowVirtualization && !this._applyAutofitLastColInVirtGrid(gridContentWidth)) {
				this._setGridTablesWidth(gridContentWidth);
				if(v) {
					this._avgRowHeight = this._calculateAvgRowHeight();
					if(oAvgRowHeight !== this._avgRowHeight) {
						this._trigger("avgRowHeightChanged", null, {owner: this, oAvgRowHeight: null, avgRowHeight: this._avgRowHeight})
					}
				}
			} else {
				this._checkAndSetTableWidths()
			}
			if(this.options.height !== null) {
				this._gridContentWidth = gridContentWidth || this._gridContentWidth;
				if(this._gridContentWidth) {
					w = (this._hasVerticalScrollbar || this.options.rowVirtualization || this.options.virtualizationMode === "continuous" && this.options.virtualization) && !v && !(fixedCols && fixedDirRight) && this.options.fixedHeaders ? this._gridContentWidth - this._scrollbarWidth() : this._gridContentWidth;
					$hscrlbar = this._getHScrollContainerInner();
					if(!v && !$hscrlbar.length) {
						$parent = this.element.parent();
						this._addHorizontalScrollBar($parent);
						if($parent.css("overflow-x") !== "hidden") {
							$parent.css("overflow-x", "hidden")
						}
						$hscrlbar = this._getHScrollContainerInner()
					}
					w = v ? this.element.width() || w : w;
					$hscrlbar.css("width", w)
				}
				this._updateHScrollbarVisibility()
			}
		},
		_checkAndSetTableWidths: function() {
			var o = this.options, w, func;
			func = function(tbl, w) {
				if(!tbl.length) {
					return
				}
				var tblw = tbl[0].style.width;
				if(!tblw || tblw.indexOf("%") > 0) {
					return null
				}
				if(!w) {
					w = 0;
					tbl.find(">colgroup>col").each(function(ind, col) {
						var cw = col.width || col.style.width;
						if(!cw || cw.indexOf && cw.indexOf("%") > 0) {
							w = 0;
							return false
						}
						w += parseInt(cw, 10)
					})
				}
				if(w) {
					tbl[0].style.width = w + "px"
				}
				return w
			};
			if(o.showHeader && o.fixedHeaders && o.height !== null) {
				w = func(this.headersTable())
			}
			func(this.element, w);
			if(o.showFooter && o.fixedFooters === true && o.height !== null) {
				func(this.footersTable(), w)
			}
		},
		_setGridTablesWidth: function(width) {
			var hasFixedHeaders = this.options.showHeader && this.options.fixedHeaders === true && this.options.height !== null, hasFixedFooters = this.options.showFooter && this.options.fixedFooters === true && this.options.height !== null;
			this.element.css("width", width);
			if(hasFixedHeaders) {
				this.headersTable().css("width", width)
			}
			if(hasFixedFooters) {
				this.footersTable().css("width", width)
			}
		},
		_detachHiddenColumns: function() {
			var col, i;
			for(i = 0; i < this.options.columns.length; i++) {
				col = this.options.columns[i];
				if(col.hidden) {
					this._detachColumn(col)
				}
			}
		},
		_rerenderColgroups: function() {
			var hasFixedHeader = this.options.height !== null && this.options.fixedHeaders === true && this.options.showHeader, hasFixedFooter = this.options.height !== null && this.options.fixedFooters === true && this.options.showFooter, initial = this.options.autofitLastColumn;
			if(hasFixedHeader) {
				this.headersTable().children("colgroup").remove();
				this._renderColgroup(this.headersTable()[0], true, false, initial)
			}
			if(hasFixedFooter) {
				this.footersTable().children("colgroup").remove();
				this._renderColgroup(this.footersTable()[0], false, true, initial)
			}
			this.element.children("colgroup").remove();
			this._renderColgroup(this.element[0], false, false, initial)
		},
		_detachColumn: function(col) {
			var position, cols, headerCells, isMultiColumnGrid = this._isMultiColumnGrid;
			col.hidden = false;
			this._visibleColumnsArray = undefined;
			cols = this._visibleColumns();
			position = $.inArray(col, cols);
			col.hidden = true;
			this._visibleColumnsArray = undefined;
			this._initializeDetachedContainers();
			headerCells = this.headersTable().children("thead").children("tr").not("[data-skip=true]");
			if(isMultiColumnGrid) {
				this._hideMultiHeaderCells(this._headerCells, col.key);
				headerCells = this.headersTable().children("thead").children("tr:not([data-mch-level])").not("[data-skip=true]");
				this._detachCells(headerCells, function(row) {
					return row.filter(":not([data-new-row],[data-add-row])").children("th, td").not("[data-skip=true]")
				}, position, this._detachedHeaderCells, col.key)
			} else {
				this._detachCells(headerCells, function(row) {
					return row.filter(":not([data-new-row],[data-add-row])").children("th, td").not("[data-skip=true]")
				}, position, this._detachedHeaderCells, col.key)
			}
			this._detachCells(this.footersTable().children("tfoot").children("tr"), function(row) {
				return row.children("td").not("[data-skip=true]")
			}, position, this._detachedFooterCells, col.key);
			return position
		},
		_attachColumn: function(col) {
			var headerCells, visibleCols = this._visibleColumns(), position = $.inArray(col, visibleCols);
			this._initializeDetachedContainers();
			if(this._isMultiColumnGrid) {
				this._showMultiHeaderCells(col.key);
				headerCells = this.headersTable().children("thead").children("tr:not([data-mch-level])").not("[data-skip=true]");
				this._attachCells(headerCells, function(row) {
					return row.children("th, td").not("[data-skip=true]")
				}, position, this._detachedHeaderCells, col.key);
				delete this._detachedHeaderCells[col.key]
			} else {
				this._attachCells(this.headersTable().children("thead").children("tr").not("[data-skip=true]"), function(row) {
					return row.children("th, td").not("[data-skip=true]")
				}, position, this._detachedHeaderCells, col.key)
			}
			this._attachCells(this.footersTable().children("tfoot").children("tr"), function(row) {
				return row.children("td").not("[data-skip=true]")
			}, position, this._detachedFooterCells, col.key);
			return position
		},
		_initializeDetachedContainers: function() {
			if(!this._detachedContainersInitialized) {
				this._detachedHeaderCells = {};
				this._detachedFooterCells = {};
				this._detachedContainersInitialized = true
			}
		},
		_getParentsMultiHeader: function(key) {
			var i, cols = this._oldCols, colsLength = cols.length, arr = [];
			for(i = 0; i < colsLength; i++) {
				if(cols[i].key === key || cols[i].identifier === key) {
					arr.push(cols[i]);
					break
				}
				if(cols[i].group) {
					if(this._getParentsMultiHeaderRecursive(key, cols[i].group, arr) === true) {
						arr.push(cols[i]);
						break
					}
				}
			}
			return arr
		},
		_getParentsMultiHeaderRecursive: function(key, arr, resArr) {
			var i, cols = arr, colsLength = arr.length, res = false;
			for(i = 0; i < colsLength; i++) {
				if(cols[i].key === key || cols[i].identifier === key) {
					resArr.push(cols[i]);
					res = true;
					break
				}
				if(cols[i].group && this._getParentsMultiHeaderRecursive(key, cols[i].group, resArr) === true) {
					resArr.push(cols[i]);
					res = true;
					break
				}
			}
			return res
		},
		_hideMultiHeaderCells: function(headerCells, key) {
			var i, currentCell, parents = this._getParentsMultiHeader(key), parent, colspan, $th, headersTable = this.headersTable().find("thead > tr"), $tr, position = -1, cells = [];
			for(i = 0; i < headerCells.length; i++) {
				if(this.id() + "_" + key === headerCells[i].attr("id")) {
					position = i;
					break
				}
			}
			if(position === -1) {
				currentCell = $("#" + this.id() + "_" + key);
				if(!currentCell.length || !currentCell.parent().is("tr")) {
					return
				}
			} else {
				currentCell = headerCells[position];
				this._headerCells.splice(position, 1)
			}
			$tr = currentCell.closest("tr");
			if($tr[0].style.height === "") {
				$tr[0].style.height = $tr.outerHeight() + "px"
			}
			currentCell.css("display", "none");
			this._hiddenColumns[key] = currentCell;
			cells.push(currentCell);
			this._detachedHeaderCells[key] = cells;
			if(parents.length > 0) {
				for(i = 0; i < parents.length; i++) {
					parent = parents[i];
					if(parent.level === 0) {
						continue
					}
					$th = headersTable.find("th[data-mch-id=" + parent.identifier + "]");
					if($th.length === 0) {
						$th = this.fixedHeadersTable().find("thead > tr").find("th[data-mch-id=" + parent.identifier + "]")
					}
					colspan = parseInt($th.attr("colspan"), 10);
					if(colspan > 1) {
						$th.attr("colspan", --colspan);
						parent.colspan = colspan
					} else {
						$tr = $th.closest("tr");
						if($tr[0].style.height === "") {
							$tr[0].style.height = $tr.outerHeight() + "px"
						}
						$th.attr("ishidden", 1);
						$th.css("display", "none");
						parent.hidden = true;
						parent.colspan = 0
					}
				}
			}
		},
		_detachCells: function(rows, cellSelectorFunction, position, container, key) {
			var detachedCells = [], i, cells, currentCell;
			if(rows.length > 0) {
				for(i = 0; i < rows.length; i++) {
					cells = cellSelectorFunction(rows.eq(i));
					currentCell = cells.eq(position);
					if(cells.length === 1) {
						currentCell.after($("<" + currentCell[0].tagName + "></" + currentCell[0].tagName + ">").attr("data-hiddenreplacement", "true").css("height", currentCell.height()).attr("class", currentCell.attr("class")))
					}
					detachedCells.push(currentCell.detach())
				}
				container[key] = detachedCells
			}
		},
		_showMultiHeaderCells: function(key) {
			var i, currentCell = this._hiddenColumns[key], parents = this._getParentsMultiHeader(key), parent, colspan, $th, currentOrder, order, headerCellsLength = this._headerCells.length, headersTable = this.headersTable().find("thead > tr"), isHidden;
			if(currentCell === null || currentCell === undefined) {
				return
			}
			currentOrder = currentCell.data("data-mch-order");
			for(i = 0; i < headerCellsLength; i++) {
				order = this._headerCells[i].data("data-mch-order");
				if(currentOrder < order) {
					this._headerCells.splice(i, 0, currentCell);
					break
				}
			}
			if(i === headerCellsLength) {
				this._headerCells.push(currentCell)
			}
			currentCell.css("display", "");
			currentCell.removeAttr("ishidden");
			if(parents.length > 0) {
				for(i = 0; i < parents.length; i++) {
					parent = parents[i];
					if(parent.level === 0) {
						continue
					}
					$th = headersTable.find("th[data-mch-id=" + parent.identifier + "]");
					if($th.length === 0) {
						$th = this.fixedHeadersTable().find("thead > tr").find("th[data-mch-id=" + parent.identifier + "]")
					}
					isHidden = $th.attr("ishidden") === "1";
					colspan = parseInt($th.attr("colspan"), 10);
					if(!isHidden) {
						$th.attr("colspan", ++colspan);
						parent.colspan = colspan
					} else {
						$th.removeAttr("ishidden");
						$th.css("display", "");
						parent.hidden = false;
						parent.colspan = 1
					}
				}
			}
		},
		_attachCells: function(rows, cellSelectorFunction, position, container, key) {
			var detachedCells, i, cells, replacementCell, storedKey;
			if(rows.length > 0) {
				if(this.options.virtualization === true || this.options.columnVirtualization === true) {
					detachedCells = container[key];
					if(detachedCells === null || detachedCells === undefined) {
						for(storedKey in container) {
							if(container.hasOwnProperty(storedKey)) {
								detachedCells = container[storedKey];
								delete container[storedKey];
								break
							}
						}
					} else {
						delete container[key]
					}
				} else {
					detachedCells = container[key];
					delete container[key]
				}
				if(detachedCells === undefined || detachedCells === null) {
					return
				}
				for(i = 0; i < rows.length; i++) {
					cells = cellSelectorFunction(rows.eq(i)).not("[data-hiddenreplacement=true]");
					if(position === 0) {
						if(cells.length === 0) {
							replacementCell = rows.eq(i).find("[data-hiddenreplacement=true]");
							replacementCell.after(detachedCells[i]);
							replacementCell.remove()
						} else {
							cells.eq(0).before(detachedCells[i])
						}
					} else {
						cells.eq(position - 1).after(detachedCells[i])
					}
				}
			}
		},
		_cleanupTBody: function() {
			this._fireInternalEvent("_cleanupTBody");
			return this.element.children("tbody").empty()
		},
		_captureInitiallyHiddenColumns: function() {
			this._initialHiddenColumns = $.grep(this.options.columns, function(column) {
				var hidden = column.hidden;
				column.hidden = false;
				return hidden
			})
		},
		getUnboundValues: function(key) {
			var res;
			if(key === undefined || key === null) {
				return this._unboundValues
			}
			res = this._unboundValues[key];
			if(res === undefined || res === null) {
				if(this.getUnboundColumnByKey(key) !== null) {
					res = []
				} else {
					res = null
				}
			}
			return res
		},
		setUnboundValues: function(key, values, removeOldValues) {
			var i, column = this.getUnboundColumnByKey(key), uVals, data, len, reRenderData = false;
			if(column && !column.formula) {
				uVals = column.unboundValues;
				if(removeOldValues) {
					column.unboundValues = values;
					data = this.dataSource.data();
					len = data.length;
					for(i = 0; i < len; i++) {
						if(data[i][key] !== null && data[i][key] !== undefined) {
							reRenderData = true;
							delete data[i][key]
						}
					}
					if(reRenderData) {
						this._renderData()
					}
				} else {
					len = values.length;
					if(uVals && uVals.length > len) {
						for(i = 0; i < len; i++) {
							column.unboundValues[i] = values[i]
						}
					} else {
						column.unboundValues = values
					}
				}
			}
			if(!this._hasInitialUnboundValues) {
				this._hasInitialUnboundValues = {}
			}
			this._hasInitialUnboundValues[key] = true;
			this._renderUnboundValues(values, key)
		},
		setUnboundValueByPK: function(col, rowId, val, notToRender) {
			var data = this.dataSource.data(), pkCol, rec, tr, f, pk = this.options.primaryKey, colKey, pkVal;
			if($.type(col) === "string") {
				colKey = col;
				col = this.columnByKey(colKey)
			} else {
				colKey = col.key
			}
			if(!col || !col.unbound) {
				return false
			}
			if(pk === null) {
				pkVal = parseInt(rowId, 10);
				rec = data[pkVal]
			} else {
				pkCol = this.columnByKey(this.options.primaryKey);
				if(pkCol) {
					pkVal = rowId;
					if(pkCol.dataType === "number" || pkCol.dataType === "numeric") {
						pkVal = parseInt(rowId, 10);
						rec = this.dataSource.findRecordByKey(rowId)
					} else {
						rec = this.dataSource.findRecordByKey(rowId)
					}
				} else {
					return false
				}
			}
			if(!rec) {
				return false
			}
			if(val === undefined) {
				if(col.formula) {
					f = this._getUnboundColumnFormula(col);
					if(f) {
						val = f.apply(col, [rec, this.element])
					}
				}
			}
			if(this.dataSource && this.dataSource.schema) {
				rec[colKey] = this.dataSource.schema()._convertType(col.type, val, pkVal, colKey)
			} else {
				rec[colKey] = val
			}
			if(!notToRender) {
				tr = this.rowById(rowId, col.isFixed);
				if(tr.length) {
					this._renderRow(rec, tr[0])
				}
			}
			return rec
		},
		_getUnboundColumnFormula: function(col) {
			if(!col) {
				return null
			}
			var f = null, colType = typeof col;
			if(colType === "string") {
				col = this.getUnboundColumnByKey(col);
				if(!col) {
					return null
				}
				colType = typeof col
			}
			if(!col.formula || colType !== "object") {
				return null
			}
			f = col.formula;
			if(typeof f === "function") {
				return f
			} else if(window[f] && typeof window[f] === "function") {
				return window[f]
			}
			return null
		},
		_renderUnboundValues: function(values, key, notToRender) {
			var i, data = this.dataSource.data(), dataLength = data.length, valuesLength = values.length, isToConvert = false, type = "string", pk = this.options.primaryKey, col, schema, pkVal;
			if(valuesLength === 0) {
				return
			}
			col = this.getUnboundColumnByKey(key);
			if(col === null) {
				return
			}
			if(this.dataSource && this.dataSource.schema) {
				if(col.dataType) {
					type = col.dataType;
					isToConvert = true;
					schema = this.dataSource.schema()
				}
			}
			if(pk === undefined) {
				pk = null
			}
			for(i = 0; i < valuesLength; i++) {
				if(data[i] === undefined || data[i] === null) {
					break
				}
				if(isToConvert) {
					if(pk === null) {
						pkVal = i
					} else {
						pkVal = data[i][pk]
					}
					values[i] = schema._convertType(type, values[i], pkVal, key)
				}
				data[i][key] = values[i];
				this._addUnboundColumnValue(key, values[i], i)
			}
			if((type === "bool" || type === "boolean") && valuesLength < dataLength) {
				for(i = valuesLength; i < dataLength; i++) {
					data[i][key] = schema._convertType(type, null, pkVal, key)
				}
			}
			if(this.options.virtualization === true || this.options.rowVirtualization === true && this._persistVirtualScrollTop) {
				this._scrollTo(0)
			}
			if(notToRender !== true) {
				this._renderColumnData(key, this.dataSource.dataView())
			}
		},
		getUnboundColumnByKey: function(key) {
			if(this._unboundColumns === undefined || this._unboundColumns === null || this._unboundColumns.length === 0 || key === null || key === undefined) {
				return null
			}
			var column = null;
			$.each(this._unboundColumns, function(ind, col) {
				if(col.key === key) {
					column = col;
					return false
				}
			});
			return column
		},
		_renderColumnData: function(key, values) {
			if(values.length === 0) {
				return
			}
			var visibleColumns = this._visibleColumns(), grid = this, tdIndex, index, tds, column, ds, isToConvertToString = false, hasTemplate, temp;
			index = this.getVisibleIndexByKey(key);
			column = visibleColumns[index];
			hasTemplate = column.template && column.template.length > 0;
			if(column === undefined || column === null) {
				return
			}
			isToConvertToString = column.dataType === "bool";
			if(hasTemplate) {
				ds = this.dataSource.dataView()
			}
			tdIndex = index + this.headersTable().find(">thead>tr:eq(0)>th[data-skip=true]").length;
			tds = this.element.find(">tbody> tr > td:not([data-skip]):nth-child(" + (tdIndex + 1) + ")");
			$.each(values, function(ind, val) {
				var innerHtml;
				if(val[key] === undefined) {
					return true
				}
				if(hasTemplate) {
					temp = grid._renderTemplatedCell(ds[ind], column);
					if(temp.indexOf("<td") === 0) {
						innerHtml = $(temp).html()
					} else {
						innerHtml = temp
					}
				} else {
					innerHtml = grid._renderCell(val[key], column, val);
					if(isToConvertToString === true) {
						innerHtml = innerHtml.toString()
					}
				}
				if(!tds[ind]) {
					return false
				}
				$(tds[ind]).html(innerHtml)
			})
		},
		_renderData: function(success, errmsg, response) {
			if(success !== undefined || !this._isDataBoundCalled) {
				this._trigger(this.events.dataBound, null, {owner: this, dataSource: this.dataSource});
				this._isDataBoundCalled = false
			}
			var gridElement = this.element, div, self = this, noCancel = true, sum = 0, cols, colsToUnbound, colsLength, data, key, j, i, f, w, diff = 0, isTable = false, noCancelError = true, isRemoteDS = this._inferOpType() === "remote", ucFormulaFunction, tbody, newW, totalWidth, isToRefreshUI = false, jsrnd = String(this.options.templatingEngine).toLowerCase() === "jsrender", displayCont;
			if((this.options.requiresDataBinding === true || this._isToSetUnboundColumns === true || isRemoteDS) && this._hasUnboundColumns) {
				this._isToSetUnboundColumns = false;
				if(this._hasInitialUnboundValues === null || this._hasInitialUnboundValues === undefined) {
					this._hasInitialUnboundValues = {}
				}
				cols = this.options.columns;
				colsLength = cols.length;
				data = this.dataSource.data();
				ucFormulaFunction = function(data, f, col) {
					$.each(data, function(ind, val) {
						val[key] = f.apply(col, [val, gridElement]);
						self._addUnboundColumnValue(key, val[key], ind)
					})
				};
				colsToUnbound = [];
				if(isRemoteDS) {
					this._unboundValues = {}
				}
				for(i = 0; i < colsLength; i++) {
					if(cols[i].unbound === true) {
						key = cols[i].key;
						if(cols[i].unboundValues !== null && cols[i].unboundValues !== undefined && $.type(cols[i].unboundValues) === "array") {
							if(this._rebindUnboundColumns === true || cols[i].unboundValues.length > 0 && this._hasInitialUnboundValues[key] === undefined) {
								this._hasInitialUnboundValues[key] = true;
								this._renderUnboundValues(cols[i].unboundValues, key, true)
							}
						} else if(cols[i].formula !== null && cols[i].formula !== undefined) {
							f = this._getUnboundColumnFormula(cols[i]);
							if(f) {
								ucFormulaFunction(data, f, cols[i])
							}
						} else if(this._unboundValues[key] && this._unboundValues[key].length > 0) {
							colsToUnbound.push(key)
						}
					}
				}
				this._rebindUnboundColumns = false;
				if(this.options.localSchemaTransform === true && colsToUnbound.length > 0 && data.length > 0) {
					for(i = 0; i < colsToUnbound.length; i++) {
						key = colsToUnbound[i];
						if(data[0][key] === undefined) {
							this._renderUnboundValues(this._unboundValues[key], key)
						}
					}
				}
				if(this.options.mergeUnboundColumns === false) {
					this._mergeUnboundValues()
				}
			}
			if(success === false) {
				noCancelError = this._trigger(this.events.requestError, null, {owner: this, message: errmsg, response: response});
				if(noCancelError) {
					throw new Error(errmsg)
				}
			}
			if(this._cancelRendering === true) {
				this._cancelRendering = false;
				return
			}
			this.element.trigger("iggriduisoftdirty", {owner: this});
			if(!this._initialized) {
				if(this.options.autoGenerateColumns === true) {
					this._generateColumns();
					if((this.options.virtualization === true || this.options.columnVirtualization === true) && this.options.width) {
						totalWidth = this._calculateContainerWidth(false);
						if(totalWidth > parseInt(this.options.width, 10) && $("#" + this.id() + "_horizontalScrollContainer").children().length === 0) {
							this._renderHorizontalScrollContainer(totalWidth)
						}
					}
					for(i = 0; i < this.options.features.length; i++) {
						this._initFeature(this.options.features[i], this._dataOptions)
					}
				} else {
					cols = this.options.columns;
					for(i = 0; i < cols.length; i++) {
						if(!cols[i].dataType && this.dataSource.data().length > 0) {
							cols[i].dataType = $.ig.getColType(this.dataSource.data()[0][cols[i].key])
						} else if(!cols[i].dataType && this.dataSource.data().length === 0) {
							cols[i].dataType = "string"
						}
					}
				}
			}
			tbody = gridElement.children("tbody");
			noCancel = this._trigger(this.events.dataRendering, null, {owner: this, tbody: tbody});
			if(noCancel) {
				if(!(this.options.dataSource && this.options.dataSource.tagName && $(this.options.dataSource).is("table"))) {
					tbody = this._cleanupTBody()
				} else {
					isTable = true
				}
				this._resetVirtualDom();
				if(!this._initialized) {
					if(this.options.autoGenerateColumns === true) {
						this._captureInitiallyHiddenColumns();
						this._visibleColumnsArray = undefined;
						this._updateVirtColCounters()
					}
					if(isTable) {
						tbody.empty()
					}
					if(this._renderHeaderCalled !== true) {
						this._renderHeader();
						this._renderCaption()
					} else {
						if(this.options.width !== null && this.options.height === null) {
							this.scrollContainer().css("overflow-y", "hidden").css("overflow-x", "auto")
						}
					}
					if(this._rmvClgrpOnInitRenderData && !this.element.find("colgroup[data-cols-injected]").length) {
						this.element.find("colgroup").remove()
					}
					if(this.element.find("colgroup").length === 0 || this.element.find("colgroup").children().length === 0) {
						this._renderColgroup(this.element[0], false, false, this.options.autofitLastColumn)
					}
					this._renderFooter();
					div = this.scrollContainer();
					if(!div.length) {
						div = this._vdisplaycontainer()
					}
					div.data("containerName", "dataContainer").bind("scroll.syncScrollContainers", $.proxy(this._onScrollContainer, this));
					this._registerScrllCntnrToSync(div);
					if((this.options.virtualization === true || this.options.columnVirtualization === true) && this._allColumnWidthsInPixels && this._gridHasWidthInPercent) {
						w = 0;
						this.element.find(">colgroup>col").each(function(ind, col) {
							var cw = col.width || col.style.width;
							if(!cw || cw.indexOf && cw.indexOf("%") > 0) {
								w = 0;
								return false
							}
							w += parseInt(cw, 10)
						});
						if(w) {
							if(this.options.fixedHeaders) {
								this.headersTable().css("max-width", w)
							}
							this.element.css("max-width", w);
							if(this.options.fixedFooters) {
								this.footersTable().css("max-width", w)
							}
						}
					}
					this._trigger("_gridContainersRendered", null, {owner: this, tbody: tbody});
					if(this.options.virtualization && this.options.virtualizationMode === "continuous") {
						this.element.bind("iggridvirtualrecordsrender.setFocusElement", function() {
							if(_aNull(self._focusDataRowIndex)) {
								return
							}
							var $tbody = self.container().find("#" + self.id() + " > tbody"), fe = self._focusDataRowIndex;
							if(fe === 0) {
								$tbody.find("> tr[data-row-idx=" + fe + "]").focus()
							} else {
								$tbody.find("> tr[data-row-idx=" + fe + "] > td:visible:last").focus()
							}
							self._focusDataRowIndex = null
						})
					}
				}
				this._trigger("dataEmpty", null, {owner: this, tbody: tbody});
				if(this.options.autoGenerateColumns === false && (this.options.columns && this.options.columns.length === 0 || !this.options.columns)) {
					throw new Error($.ig.Grid.locale.noColumnsButAutoGenerateTrue)
				}
				this._tmplWrappers = jsrnd ? $.render : {};
				this._setTemplateDefinition(jsrnd);
				if(this._initialHiddenColumns === undefined || this._initialHiddenColumns.length === 0) {
					if(this.options.columns.length > 0) {
						if(this.options.virtualization === true || this.options.rowVirtualization === true || this.options.columnVirtualization === true) {
							if(!this._persistVirtualScrollTop) {
								this._scrollContainer()[0].scrollTop = 0
							}
							this._renderVirtualRecords()
						} else {
							this._renderRecords()
						}
						if(this._initialized) {
							this._adjustLastColumnWidth(false);
							if(this.options.width !== null && this.options.height !== null) {
								this._synchronizeHScroll()
							}
						} else {
							if(this.options.height !== null && this.options.autoAdjustHeight) {
								this._initializeHeights()
							}
							this._adjustLastColumnWidth(true)
						}
					}
				}
				if(!this._initialized && this.options.autoAdjustHeight) {
					this._initializeHeights()
				}
				if(this._initialHiddenColumns !== undefined && this._initialHiddenColumns.length > 0) {
					this._setHiddenColumns(this._initialHiddenColumns, true, true);
					if(this._initialHiddenCells !== undefined && this._initialHiddenCells.length > 0) {
						$.each(this._initialHiddenCells, function(index, cell) {
							cell.css("display", "")
						})
					}
					$.each(this._initialHiddenColumns, function(index, column) {
						column._initiallyHidden = true;
						column._shouldAutoSize = true
					});
					this._initialHiddenCells = undefined;
					this._initialHiddenColumns = undefined;
					if($.ig.util.isFF) {
						isToRefreshUI = true
					}
				}
				this._registerAdditionalEvents();
				this._updateVirtualScrollContainer();
				this._fireInternalEvent("_dataRendered");
				if(!this._initialized) {
					this.autoSizeColumns()
				}
				this._trigger(this.events.dataRendered, null, {owner: this});
				if(this._loadingIndicator === undefined) {
					this._initLoadingIndicator()
				}
				this._loadingIndicator.hide()
			}
			if(this._fixScrollY) {
				this.scrollContainer().css("overflow-y", this.rows().length > 1 ? "hidden" : "visible")
			}
			if(this.options.width === null) {
				this._updateContainersWidthOnGridWidthNull()
			}
			if(this.options.dataSourceUrl !== null && this._firstBind) {
				this.options.dataSource = this.options.dataSourceUrl;
				this.dataSource.settings.dataSource = this.options.dataSourceUrl;
				this.dataSource.settings.type = "remoteUrl";
				this.dataSource._runtimeType = this.dataSource.analyzeDataSource();
				this._firstBind = false
			}
			if(!this._initialized) {
				this._trigger(this.events.rendered, null, {owner: this});
				this._hc = this.container().find(".ui-iggrid-expandheadercell").length > 0;
				this._initialized = true;
				if(document.documentMode === 7 || $.ig.util.isIE7) {
					$.each($("#" + this.id() + "_container colgroup col"), function() {
						var $col = $(this), styleWidth = parseInt(this.style.width, 10), width = $col.outerWidth();
						if(styleWidth && styleWidth < width) {
							$col.width(2 * styleWidth - width)
						}
					})
				}
			}
			this._fireInternalEvent("_gridRendered", this.container());
			if(this._isMultiRowGrid() && this.scrollContainer() && this.scrollContainer().height() === 0) {
				throw new Error($.ig.Grid.locale.scrollableGridAreaNotVisible)
			}
			if(isToRefreshUI) {
				this._refreshUI()
			}
		},
		_updateContainersWidthOnGridWidthNull: function() {
			var $cntnr = this.container(), sum = 0, j, cols, diff, displayCont, scw = this._scrollbarWidth();
			if(this.options.width === null && $cntnr[0] && $cntnr[0].style.width) {
				cols = this.element.find("colgroup > col");
				if(cols.length) {
					for(j = 0; j < cols.length; j++) {
						sum += parseInt(cols[j].style.width, 10) || 0
					}
				} else {
					sum = parseInt($cntnr[0].style.width, 10) - scw
				}
				displayCont = this._vdisplaycontainer();
				if(displayCont.length > 0) {
					$cntnr.css("width", sum);
					$cntnr.find("#" + this.id() + "_headers_v").css("width", sum + scw);
					$cntnr.css("width", sum + scw);
					displayCont.css("width", sum).css("max-width", sum);
					this._fixedfooters().css("width", sum + scw);
					this._virtualcontainer().find(">colgroup>col:first").attr("width", sum)
				} else {
					$cntnr.css("width", sum += this.hasVerticalScrollbar() ? scw : 0)
				}
			}
		},
		_refreshUI: function() {
			var self = this;
			self.container().hide();
			setTimeout(function() {
				self.container().show()
			}, 0)
		},
		_updateVirtualScrollContainer: function() {
			var h, e = this.element;
			this._totalRowCount = this._getTotalRowCount();
			if((this.options.virtualization || this.options.rowVirtualization) && this._totalRowCount) {
				if(this._avgRowHeight === undefined || this._avgRowHeight === null) {
					this._avgRowHeight = this._calculateAvgRowHeight()
				}
				h = this._totalRowCount * this._avgRowHeight;
				if(this._scrollContainer().height() >= h) {
					e.height("");
					if(this.options.virtualizationMode === "fixed") {
						e.find(".ui-iggrid-virtualrow").height(this._avgRowHeight)
					}
					this._setScrollContainerHeight(h)
				} else {
					if(this.options.virtualizationMode === "continuous") {
						e.height("");
						this._setScrollContainerHeight(h)
					} else {
						e.height(this._initialVirtualHeight)
					}
				}
			}
		},
		_hasColumnTemplates: function() {
			var i, hasTemplates = false, t;
			for(i = 0; i < this.options.columns.length; i++) {
				t = this.options.columns[i].template;
				if(t !== null && t !== undefined && t !== "" && t.length > 0) {
					hasTemplates = true;
					break
				}
			}
			return hasTemplates
		},
		_gridHasWidthInPixels: function() {
			if(typeof this.options.width === "string" && this.options.width.indexOf("%") !== -1) {
				return false
			}
			return parseInt(this.options.width, 10) > 0
		},
		_gridHasWidthInPercent: function() {
			if(typeof this.options.width === "string" && this.options.width.indexOf("%") !== -1) {
				return true
			}
			return false
		},
		_isColumnVirtualizationEnabled: function() {
			var i, w, o = this.options, cols, allColsInPercentage = true;
			if(!o.virtualization || o.virtualizationMode === "continuous" || o.width === null) {
				return false
			}
			if(o.columnVirtualization) {
				return true
			}
			cols = o.columns;
			for(i = 0; i < cols.length; i++) {
				if(cols[i].width) {
					w = cols[i].width
				}
				w = _aNull(w) ? o.defaultColumnWidth : w;
				if(!_aNull(w) && ($.type(w) !== "string" || !w.endsWith("%"))) {
					allColsInPercentage = false;
					break
				}
			}
			if(!allColsInPercentage) {
				return true
			}
			return false
		},
		hasVerticalScrollbar: function() {
			if(this.options.height === null || this.options.height === undefined) {
				return false
			}
			var hasVScrollbar;
			hasVScrollbar = this.options.autoAdjustHeight && this.element.outerHeight() <= this.scrollContainer().height() || !this.options.autoAdjustHeight && this.options.avgRowHeight * this.element[0].rows.length < parseInt(this.options.height, 10);
			return !hasVScrollbar
		},
		_adjustLastColumnWidth: function(colgroupsRerendered) {
			var grid = this, calcGridWidth, hasFixedHeader = this.options.height !== null && this.options.fixedHeaders === true && this.options.showHeader && this._headerParent, hasFixedFooter = this.options.height !== null && this.options.fixedFooters === true && this.options.showFooter && this._footerParent, hasHeight = this.options.height && parseInt(this.options.height, 10) > 0, hasWidthInPixels = this._gridHasWidthInPixels(), hasWidthInPercent = this._gridHasWidthInPercent(), hasVirtualization = this.options.virtualization === true || this.options.columnVirtualization === true || this.options.rowVirtualization === true, gridWidth, specialColumnsWidth;
			if(hasHeight && !hasVirtualization) {
				if(this.hasVerticalScrollbar()) {
					this._hasVerticalScrollbar = true
				} else {
					this._hasVerticalScrollbar = false;
					if(this._scrollWidthAddedToContainerWidth) {
						this.container().width(this._calculateContainerWidth(false))
					}
				}
			}
			if(colgroupsRerendered) {
				if(hasVirtualization) {
					if(hasFixedHeader) {
						this._headerParent.css(this._padding, this._scrollbarWidth())
					}
					if(hasFixedFooter) {
						this._footerParent.css(this._padding, this._scrollbarWidth())
					}
				}
				if(hasWidthInPixels || hasWidthInPercent) {
					if(this._allColumnWidthsInPixels) {
						gridWidth = this._totalColPixelWidth;
						if(this.hasFixedColumns() && !this._initialized) {
							gridWidth = 0;
							$.each(this.options.columns, function(ind, col) {
								gridWidth += col.fixed || col.hidden ? 0 : parseInt(col.width, 10) || 0
							})
						}
						specialColumnsWidth = this._calculateSpecialColumnsWidth();
						if(specialColumnsWidth > 0) {
							if(this._autoadjustedColumn && this._lastColPixelWidth) {
								if(this._autoadjustedColumn.difference < specialColumnsWidth) {
									this._lastColPixelWidth -= this._autoadjustedColumn.difference;
									gridWidth -= this._autoadjustedColumn.difference - specialColumnsWidth
								} else {
									this._lastColPixelWidth -= specialColumnsWidth
								}
								this._autoadjustedColumn.width = this._lastColPixelWidth;
								if(hasFixedHeader) {
									this._lastHeaderCol.css("width", this._lastColPixelWidth + "px")
								}
								if(hasFixedFooter) {
									this._lastFooterCol.css("width", this._lastColPixelWidth + "px")
								}
								this._lastDataCol.css("width", this._lastColPixelWidth + "px")
							} else {
								gridWidth += specialColumnsWidth
							}
						}
						if(!hasFixedHeader && this._gridWidthGTColWidth && this._hasVerticalScrollbar) {
							gridWidth -= this._scrollbarWidth();
							this._lastColPixelWidth -= this._scrollbarWidth();
							this._lastDataCol.css("width", this._lastColPixelWidth + "px")
						}
					} else if(this._allColumnWidthsInPercentage) {
						gridWidth = this.container().width();
						specialColumnsWidth = this._calculateSpecialColumnsWidth();
						if(this._allSpecialColumnsInPercentage() === true && specialColumnsWidth > 0) {
							this._lastColPercentWidth = this._lastColPercentWidth - specialColumnsWidth
						}
						this._lastDataCol.css("width", this._lastColPercentWidth + "%");
						if(hasFixedHeader) {
							this._lastHeaderCol.css("width", this._lastColPercentWidth + "%")
						}
						if(hasFixedFooter) {
							this._lastFooterCol.css("width", this._lastColPercentWidth + "%")
						}
					} else if(hasWidthInPixels) {
						calcGridWidth = this._calculateContainerWidth(false);
						gridWidth = parseInt(grid.options.width, 10);
						if(calcGridWidth > gridWidth) {
							gridWidth = calcGridWidth
						}
					} else if(hasWidthInPercent) {
						gridWidth = this.container().width()
					}
					if(!this._allColumnWidthsInPercentage || !hasWidthInPercent) {
						if(hasVirtualization === false) {
							this._gridInnerWidth = this.scrollContainer().width()
						} else {
							this._gridInnerWidth = this._vdisplaycontainer().width() + this._scrollbarWidth()
						}
						grid._setGridContentWidth(gridWidth);
						if(!this._hasVerticalScrollbar && this.hasVerticalScrollbar() && hasHeight && !hasVirtualization) {
							this._hasVerticalScrollbar = true;
							grid._setGridContentWidth(gridWidth)
						}
					}
				}
			} else {
				this._setGridContentWidth()
			}
			if(hasHeight && !hasVirtualization) {
				if(this.options.width !== null && this.options.height !== null) {
					if(this._hasVerticalScrollbar) {
						this._hscrollbarcontent().css("overflow-y", "scroll")
					} else {
						this._hscrollbarcontent().css("overflow-y", "hidden")
					}
				}
				if(this._allColumnWidthsInPercentage && hasWidthInPercent || !(hasWidthInPixels || hasWidthInPercent)) {
					if(this._hasVerticalScrollbar) {
						if(hasFixedHeader) {
							this._headerParent.css(this._padding, this._scrollbarWidth())
						}
						if(hasFixedFooter) {
							this._footerParent.css(this._padding, this._scrollbarWidth())
						}
					} else {
						if(hasFixedHeader) {
							this._headerParent.css(this._padding, "")
						}
						if(hasFixedFooter) {
							this._footerParent.css(this._padding, "")
						}
					}
				} else {
					this._updateVerticalScrollbarCellPadding()
				}
			}
			this._trigger("_lastColumnWidthAutoAdjusted", null, {specialColumnsWidth: specialColumnsWidth})
		},
		_initializeHeights: function() {
			if(this.options.height === null || this.options.height === undefined) {
				return
			}
			if(this.options.height.indexOf && this.options.height.indexOf("%") !== -1) {
				if(this._isWrapped && !this._initialized) {
					this.container().parent().height(this.options.height);
					this.container().height("100%")
				}
			} else if(!this.hasFixedColumns()) {
				this.scrollContainer().height(parseInt(this.options.height, 10))
			}
			this._initializeHeightsInternal()
		},
		_initializeHeightsInternal: function() {
			var children, height, i, $child, ch, heightChanged = false, dc = this._vdisplaycontainer(), vhcntnr, sc = this._scrollContainer();
			ch = this.container().height();
			this._prevContainerHeight = ch;
			if(this.options.height !== null) {
				children = this.container().children(":visible");
				height = 0;
				for(i = 0; i < children.length; i++) {
					$child = $(children[i]);
					if(($child.attr("id") !== undefined && !$child.attr("id").endsWith("_scroll") && !$child.attr("data-fixed-container") && !$child.attr("id").endsWith("_virtualContainer") && !$child.attr("id").endsWith("_loading") || !$child.attr("id")) && $child.is(":visible") && $child.data("efh") !== "1") {
						if($child.is("table") && $child.children().first().is("caption")) {
							height += $child.children().first().outerHeight()
						} else {
							if($child.css("position") !== "absolute") {
								height += $child.outerHeight()
							}
						}
					}
				}
				if(height > 0) {
					this._trigger("_heightChanging", null, {ch: ch, h: height});
					this.scrollContainer().height(ch - height);
					heightChanged = true
				}
				if(this.options.virtualization || this.options.rowVirtualization) {
					if($.type(this.options.height) === "string" && this.options.height.indexOf("%") !== -1 || ch !== parseInt(this.options.height, 10)) {
						this.container().height(this.options.height);
						if($.type(this.options.height) === "string" && this.options.height.indexOf("%") !== -1) {
							ch = parseInt(this.container().height() || 0, 10)
						}
					}
					height += this.container().find("#" + this.id() + "_headers_v").outerHeight() || 0;
					height += this.container().find("#" + this.id() + "_footers_v").outerHeight() || 0;
					height += this._fixedfooters().outerHeight() || 0;
					vhcntnr = this._vhorizontalcontainer();
					height += vhcntnr.is(":visible") ? vhcntnr.outerHeight() : 0;
					if(!this._virtualHeightReset) {
						height = height * 2;
						this._virtualHeightReset = true
					}
					if(height > 0 && dc.height() !== ch - height) {
						if(!heightChanged) {
							this._trigger("_heightChanging", null, {ch: ch, h: height})
						}
						dc.height(ch - height);
						sc.height(ch - height);
						if(!this.options.rowVirtualization) {
							this.element.height(ch - height)
						}
						this._initialVirtualHeight = ch - height;
						heightChanged = true
					}
				}
				if(heightChanged) {
					this._prevContainerHeight = this.container().height();
					this._trigger("_heightChanged", null, {ch: ch, h: height})
				}
			}
		},
		_registerAdditionalEvents: function() {
			if(this._hovEvts) {
				return
			}
			var self = this;
			if(this.options.enableHoverStyles) {
				this._hovEvts = {
					mousemove: function(e) {
						var par, tag, tr = e.target;
						while(tr) {
							par = tr.parentNode;
							tag = tr.nodeName;
							if(tag === "TR" && par.nodeName === "TBODY") {
								break
							}
							tr = tag === "TABLE" ? null : par
						}
						self._mousemoveTr(tr, e)
					}, mouseleave: function() {
						self._mouseleaveTr()
					}
				};
				this.element.bind(this._hovEvts)
			}
		},
		_mousemoveTr: function(tr, e) {
			var css = "ui-state-hover", topmostGrid, $tr = $(tr);
			if(_hovTR !== tr) {
				if(_hovTR && $(_hovTR).attr("data-container") !== "true") {
					$("td", _hovTR).removeClass(css)
				}
				if(tr && $tr.attr("data-container") !== "true" && e.target.id.indexOf("_scrollContainer") === -1 && e.target.parentNode.id.indexOf("_scrollContainer") === -1) {
					topmostGrid = this.element.closest(".ui-iggrid-root").data("igGrid") || this;
					tr = $tr.add($tr.siblings("[data-id='" + $tr.attr("data-id") + "']"));
					if(!topmostGrid._cancelHoveringEffects) {
						$("td", tr).addClass(css)
					}
				}
				_hovTR = tr
			}
		},
		_mouseleaveTr: function() {
			var css = "ui-state-hover";
			if(_hovTR) {
				$("td", _hovTR).removeClass(css);
				_hovTR = null
			}
		},
		_renderColgroup: function(table, isHeader, isFooter, autofitLastColumn, md) {
			var colgroup, hasFixedColumns = this.hasFixedColumns(), i, lc, fixed = !!(md && md.fixed), f, cols = this._visibleColumns(), col, defWidth = this.options.defaultColumnWidth, totalColWidth = 0, totalGridWidth, hasWidthInPixels = this._gridHasWidthInPixels(), hasWidthInPercent = this._gridHasWidthInPercent(), hasWidth = hasWidthInPixels || hasWidthInPercent, hasVirtualization = this.options.virtualization === true || this.options.columnVirtualization === true || this.options.rowVirtualization === true, hasColumnVirtualization = this.options.virtualization === true && this.options.virtualizationMode === "fixed" || this.options.columnVirtualization === true, hasColumnsWithNoWidth = false, isPercentage = true, desiredColWidth, desiredColWidthNumber, lastCol, lastColWidth, difference;
			colgroup = $(table).find(">colgroup");
			if(colgroup.length === 0) {
				colgroup = $("<colgroup></colgroup>").prependTo(table)
			}
			if(hasVirtualization && this.options.virtualizationMode === "fixed" || hasColumnVirtualization) {
				this._updateVirtColCounters();
				cols = cols.slice(0, this._virtualColumnCount)
			}
			for(i = 0; i < cols.length; i++) {
				if(this._isMultiRowGrid()) {
					col = $.extend(true, {}, cols[i])
				} else {
					col = cols[i]
				}
				f = !!col.fixed;
				if(f !== fixed) {
					continue
				}
				if(this._rlp && i >= this._maxCols) {
					break
				}
				if(this._colGroupWidths) {
					col.width = this._colGroupWidths[i]
				}
				if(col.width || col.width === 0) {
					if(col.oWidth) {
						desiredColWidth = col.oWidth
					} else {
						desiredColWidth = col.width
					}
				} else {
					desiredColWidth = defWidth;
					col.width = defWidth
				}
				if(desiredColWidth || desiredColWidth === 0) {
					if(!desiredColWidth.charAt || !desiredColWidth.endsWith("%")) {
						isPercentage = false
					}
					desiredColWidthNumber = parseInt(desiredColWidth, 10);
					if(desiredColWidthNumber < 0 || isNaN(desiredColWidthNumber)) {
						desiredColWidthNumber = undefined
					}
				} else {
					desiredColWidthNumber = undefined;
					isPercentage = false
				}
				if(!_aNull(desiredColWidthNumber)) {
					lastCol = $("<col></col>").appendTo(colgroup).css("width", desiredColWidth);
					lastColWidth = desiredColWidthNumber;
					totalColWidth += desiredColWidthNumber;
					if($.type(col.width) === "string" && col.width.endsWith("px")) {
						col.width = desiredColWidthNumber + "px"
					} else {
						col.width = desiredColWidthNumber
					}
					if(desiredColWidth && desiredColWidth.charAt && desiredColWidth.endsWith("%")) {
						col.width = col.width + "%"
					}
				} else {
					lastCol = $("<col></col>").appendTo(colgroup);
					lastColWidth = undefined;
					hasColumnsWithNoWidth = true
				}
				lc = col
			}
			if((!hasColumnVirtualization || this._vhorizontalcontainer().find("div").length === 0) && autofitLastColumn && hasWidth && !hasColumnsWithNoWidth && lastColWidth) {
				if(isPercentage) {
					if(totalColWidth < 100) {
						lastColWidth += 100 - totalColWidth;
						lastCol.css("width", lastColWidth + "%");
						this._autoadjustedColumn = cols.slice(-1)[0];
						if(!this._autoadjustedColumn.oWidth) {
							this._autoadjustedColumn.oWidth = this._autoadjustedColumn.width
						}
						this._autoadjustedColumn.width = lastColWidth + "%";
						lc.width = lastColWidth + "%"
					}
				} else {
					if(hasWidthInPixels) {
						totalGridWidth = parseInt(this.options.width, 10)
					} else if(hasWidthInPercent) {
						totalGridWidth = parseInt(this.container()[0].getBoundingClientRect().width, 10)
					}
					if(hasFixedColumns && totalGridWidth) {
						if(hasWidthInPercent && this.element[0].style.width.indexOf("px") > 0) {
							totalGridWidth = parseInt(this.element[0].style.width, 10)
						} else {
							for(i = 0; i < cols.length; i++) {
								if(cols[i].fixed && cols[i].width && !cols[i].hidden) {
									totalGridWidth -= parseInt(cols[i].width, 10)
								}
							}
						}
						totalGridWidth -= hasVirtualization && this.fixingDirection() === "right" && !fixed ? parseFloat(this._virtualcontainer().children("colgroup").children().last().css("width")) : 0
					}
					this._gridWidthGTColWidth = false;
					if(totalGridWidth && totalGridWidth > totalColWidth) {
						difference = totalGridWidth - totalColWidth;
						lastColWidth += difference;
						totalColWidth += difference;
						lastCol.css("width", lastColWidth + "px");
						this._autoadjustedColumn = lc;
						if(!this._autoadjustedColumn.oWidth) {
							this._autoadjustedColumn.oWidth = this._autoadjustedColumn.width
						}
						this._autoadjustedColumn.width = lastColWidth + "px";
						this._autoadjustedColumn.difference = difference;
						lc.width = lastColWidth + "px";
						this._gridWidthGTColWidth = true
					} else {
						this._autoadjustedColumn = undefined
					}
				}
			} else {
				this._autoadjustedColumn = undefined
			}
			this._allColumnWidthsInPercentage = isPercentage && !hasColumnsWithNoWidth && cols.length > 0;
			this._allColumnWidthsInPixels = !isPercentage && !hasColumnsWithNoWidth && cols.length > 0;
			if(hasWidth && hasVirtualization && !hasColumnsWithNoWidth && lastColWidth) {
				if(!isPercentage && (!hasFixedColumns || !fixed && this.fixingDirection() === "left")) {
					if(this.options.autofitLastColumn || !this.options.rowVirtualization || this._applyAutofitLastColInVirtGrid(totalColWidth)) {
						lastColWidth -= this._scrollbarWidth();
						lastCol.css("width", lastColWidth + "px");
						if(this._autoadjustedColumn) {
							lc.width = lastColWidth + "px"
						}
					}
				}
			}
			if(isHeader) {
				this._lastHeaderCol = lastCol
			}
			if(isFooter) {
				this._lastFooterCol = lastCol
			}
			if(!isHeader && !isFooter) {
				this._lastDataCol = lastCol
			}
			if(this._allColumnWidthsInPixels) {
				this._lastColPixelWidth = lastColWidth;
				this._totalColPixelWidth = totalColWidth
			} else if(this._allColumnWidthsInPercentage) {
				this._lastColPercentWidth = lastColWidth;
				this._totalColPixelWidth = undefined
			} else {
				this._lastColPixelWidth = undefined;
				this._totalColPixelWidth = undefined
			}
		},
		_renderRecordsForTable: function(start, end, table, tbody, isFixed) {
			var i, d = "", ds = this._getDataView(), grid = this, tbodytmp, ph, rrFunc;
			if(this._rlp) {
				rrFunc = grid._renderRecordFromLayout
			} else {
				rrFunc = grid._renderRecord
			}
			tbody = tbody || table.children("tbody");
			if(!tbody.length) {
				return
			}
			for(i = start; i <= end; i++) {
				d += rrFunc.apply(this, [ds[i], i, isFixed])
			}
			if(!this._canreplaceinner) {
				tbody.unbind();
				ph = document.createElement("div");
				ph.innerHTML = "<table><tbody class='" + this.css.baseContentClass + " " + this.css.gridTableBodyClass + " " + this.css.recordClass + "' role='rowgroup'>" + d + "</tbody></table>";
				tbodytmp = ph.firstChild.firstChild;
				table[0].replaceChild(tbodytmp, tbody[0])
			} else if(this._canreplaceinner) {
				MSApp.execUnsafeLocalFunction(function() {
					tbody[0].innerHTML = d
				})
			}
			d = ""
		},
		_renderRecords: function(start, end) {
			var tbody = this.element.children("tbody"), noCancelInternal = true, ds = this._getDataView(), noCancel = true;
			noCancelInternal = this._trigger("_rowsRendering", null, {owner: this, tbody: tbody, vrtWnd: {start: start, end: end}});
			if(noCancelInternal) {
				noCancel = this._trigger(this.events.rowsRendering, null, {owner: this, tbody: tbody, vrtWnd: {start: start, end: end}});
				if(start === undefined) {
					start = 0;
					end = ds.length - 1
				}
				if(start !== undefined && end === undefined) {
					end = start;
					if(end > ds.length - 1) {
						end = ds.length - 1
					}
					start = 0
				}
				if(start < 0) {
					start = 0
				}
				if(end > ds.length - 1) {
					end = ds.length - 1
				}
				if(noCancel) {
					this._renderRecordsForTable(start, end, this.element);
					this._buildVirtualDomForContinuousVirtualization();
					this._trigger(this.events.rowsRendered, null, {owner: this, tbody: tbody});
					if((this.options.virtualization === false || this.options.rowVirtualization === false) && this._persistVirtualScrollTop && this._prevFirstVisibleTROffset && this.scrollContainer().length > 0) {
						this.scrollContainer()[0].scrollTop = this._prevFirstVisibleTROffset
					}
				}
			}
		},
		autoSizeColumns: function() {
			var cols = this._visibleColumns(), fCols = [], ufCols = [], self = this;
			$.each(cols, function(ind, col) {
				var colObj;
				if((col.width === "*" || col._oWidth === "*") && !col.hidden) {
					colObj = {column: col, visibleIndex: self.getVisibleIndexByKey(col.key)};
					if(col.fixed) {
						fCols.push(colObj)
					} else {
						ufCols.push(colObj)
					}
				}
			});
			if(fCols.length || ufCols.length) {
				this._calculateAutoResizableWidths(ufCols);
				this._calculateAutoResizableWidths(fCols, true);
				this._rerenderColgroups(false);
				this._updateGridContentWidth()
			}
		},
		_calculateAutoResizableWidths: function(columns, fixed) {
			if(!columns || !columns.length) {
				return []
			}
			var rowsContainer = fixed ? $("#" + this.id() + "_fixed") : this.element, $parentDiv, col, cell, w, clientRect, $trs, i, index, $firstRowCells, $table, $measureDiv, html, $thead, $tfoot;
			$parentDiv = rowsContainer.closest("div");
			html = $parentDiv.html();
			$measureDiv = $("<div></div>").attr("style", $parentDiv.attr("style")).attr("class", $parentDiv.attr("class") + " " + this.container().attr("class") + " " + this.css.gridMeasurementContainerClass);
			$measureDiv.css({position: "absolute", resize: "both", visibility: "hidden", height: "auto", width: "auto", left: -6e3, top: -6e3}).appendTo(this.container());
			$measureDiv[0].innerHTML = html;
			$table = $measureDiv.find(">table");
			if(this._initialized) {
				$table.find(">colgroup>col:not([data-skip])").each(function(ind, c) {
					c.style.width = "";
					c.width = ""
				})
			}
			if(this.options.showHeader) {
				$thead = fixed ? this.fixedHeadersTable() : this.headersTable();
				$table.find(">thead").remove();
				$trs = $thead.find(">thead").find(">tr[data-header-row],>tr[data-mch-level]");
				if($trs.length) {
					html = "";
					$trs.each(function(ind, tr) {
						html += tr.outerHTML
					});
					$("<thead>" + html + "</thead>").appendTo($table);
					$trs = $table.find(">thead>tr");
					$trs.children("th,td").css("width", "");
					if($.ig.util.isSafari) {
						$trs.each(function(ind, tr) {
							tr.style.display = ""
						})
					}
				}
			}
			if(this.options.showFooter) {
				$tfoot = fixed ? this.fixedFootersTable() : this.footersTable();
				$table.find(">tfoot").remove();
				$tfoot = $tfoot.find(">tfoot");
				if($tfoot.length) {
					$($tfoot[0].outerHTML).appendTo($table);
					$table.find(">tfoot>tr").children("td").css("width", "")
				}
			}
			$table.css("width", "auto").attr("id", $table.attr("id") + "__");
			$firstRowCells = $table.find(">tbody>tr:not([data-grouprow='true']):first").children("td:not([data-skip]):not([data-parent])");
			if(!$firstRowCells.length) {
				$firstRowCells = $table.find("tr:visible:not([data-grouprow='true']):first").children("th:not([data-skip]):not([data-parent]), td:not([data-skip]):not([data-parent])")
			}
			if(!$firstRowCells.length) {
				return
			}
			for(i = 0; i < columns.length; i++) {
				col = columns[i].column;
				index = columns[i].visibleIndex;
				cell = $firstRowCells[index];
				clientRect = cell.getBoundingClientRect();
				w = clientRect.width;
				if(w !== undefined) {
					col.width = Math.ceil(w)
				} else {
					col.width = Math.ceil(clientRect.right - clientRect.left)
				}
				col._oWidth = "*"
			}
			$measureDiv.remove();
			return columns
		},
		calculateAutoFitColumnWidth: function(columnIndex) {
			var res, col = this._visibleColumns()[columnIndex];
			if(!col) {
				return -1
			}
			res = this._calculateAutoResizableWidths([{column: $.extend(true, {}, col), visibleIndex: this.getVisibleIndexByKey(col.key)}], !!col.fixed);
			return res[0].column.width
		},
		_reapplyZebraStyle: function(from) {
			var funcApplyStyles, grid = this;
			if(!this.options.alternateRowStyles) {
				return
			}
			funcApplyStyles = function(dataRows) {
				var toChange;
				from = from || 0;
				toChange = dataRows.slice(from);
				toChange.filter(from % 2 === 0 ? ":odd" : ":even").addClass(grid.css.recordAltClass);
				toChange.filter(from % 2 === 0 ? ":even" : ":odd").removeClass(grid.css.recordAltClass)
			};
			funcApplyStyles(this.element.children("tbody").children("tr:not([data-container],[data-grouprow])"));
			if(this.hasFixedColumns()) {
				funcApplyStyles(this.fixedContainer().find("tbody").children("tr:not([data-container],[data-grouprow])"))
			}
		},
		_buildFormatters: function() {
			var i, cols = this.options.columns, ret = {};
			for(i = 0; i < cols.length; i++) {
				if(cols[i].formatter !== undefined) {
					if($.type(cols[i].formatter) === "function") {
						ret[cols[i].key + "Formatter"] = cols[i].formatter
					} else if(window[cols[i].formatter] && typeof window[cols[i].formatter] === "function") {
						ret[cols[i].key + "Formatter"] = window[cols[i].formatter]
					}
				}
			}
			return ret
		},
		getVisibleIndexByKey: function(columnKey, includeDataSkip) {
			var hasFixedColumns = this.hasFixedColumns(), fixedCounters, unfixedCounters, prevColumn, cols = this._visibleColumns(), index = -1, fixed = false, $colgroup;
			if(hasFixedColumns) {
				fixedCounters = 0;
				unfixedCounters = 0;
				prevColumn = null;
				$.each(cols, function(ind, value) {
					var isFixed = value.fixed === true, prevColumnFixed = prevColumn && prevColumn.fixed === true;
					if(prevColumn === null || prevColumnFixed !== isFixed) {
						if(value.fixed === true) {
							fixedCounters = 0
						} else {
							unfixedCounters = 0
						}
					}
					prevColumn = value;
					if(value.hidden) {
						return true
					}
					if(isFixed !== true) {
						unfixedCounters++
					} else {
						fixedCounters++
					}
					if(value.key === columnKey) {
						if(isFixed) {
							fixed = true;
							index = fixedCounters - 1
						} else {
							index = unfixedCounters - 1
						}
						if(index === -1) {
							index = 0
						}
						return false
					}
				})
			} else {
				$.each(cols, function(ind, value) {
					if(value.key === columnKey) {
						index = ind;
						return false
					}
				})
			}
			if(index === -1) {
				return -1
			}
			if(includeDataSkip) {
				if(fixed) {
					$colgroup = $("#" + this.id() + "_fixed").find("colgroup:first")
				} else {
					$colgroup = this.element.find("colgroup:first")
				}
				index += $colgroup.children("col[data-skip]").length
			}
			return index
		},
		_isColumnHidden: function(columnKey) {
			var cols = this.options.columns, i = cols.length;
			while(i-- >= 0) {
				if(cols[i].key === columnKey) {
					return cols[i].hidden || false
				}
			}
			return true
		},
		_visibleColumns: function(isFixed, cols) {
			cols = cols || this.options.columns;
			if(isFixed !== undefined) {
				return $.grep(cols, function(col) {
					var fixed = col.fixed === true;
					return !col.hidden && fixed === isFixed
				})
			}
			if(this._visibleColumnsArray === undefined) {
				this._visibleColumnsArray = $.grep(cols, function(col) {
					return !col.hidden
				})
			}
			return this._visibleColumnsArray
		},
		_visibleMchColumns: function(curLvl) {
			var vmch = [], cl = curLvl || this._oldCols, self = this;
			if(!cl) {
				return null
			}
			$.each(cl, function() {
				if(!this.hidden || this.hidden === false) {
					vmch.push($.extend({}, this));
					if(this.group) {
						vmch[vmch.length - 1].group = self._visibleMchColumns(this.group)
					}
				}
			});
			return vmch
		},
		_renderVirtualRecordsFixed: function() {
			var noVirtualDom = this._virtualDom === null || this._virtualDom === undefined;
			if(this.hasFixedColumns()) {
				this._updateVirtColCounters(true);
				this._renderVirtualRecordsFixedInternal(true);
				this._updateVirtColCounters(false)
			}
			this._renderVirtualRecordsFixedInternal(false);
			this._trigger("virtualrecordsrender", null, {owner: this, tbody: this.element.children("tbody"), dom: this._virtualDom, isBuiltVirtualDom: !noVirtualDom})
		},
		_renderVirtualRecordsFixedInternal: function(isFixed) {
			var i, j, row, c, headerText, vheaderNode, trs, iRow, tr, ds = this.dataSource, data = ds.dataView(), key = this.options.primaryKey, vd = this._getVirtualDom(isFixed), col, noVirtualDom = vd === null || vd === undefined, visibleCols = this._visibleColumns(isFixed);
			if(this._startRowIndex === undefined || this._startRowIndex === null) {
				this._startRowIndex = 0
			}
			if(this._startColIndex === undefined || this._startColIndex === null) {
				this._startColIndex = 0
			}
			if(noVirtualDom) {
				if(!this._persistVirtualScrollTop && !this._startRowIndex) {
					this._scrollTo(0, true)
				}
				this._buildVirtualDom();
				if(this._startRowIndex) {
					this._updateVirtColCounters(isFixed)
				}
				vd = this._getVirtualDom(isFixed);
				if(this.options.adjustVirtualHeights === true) {
					this._adjustVirtualHeights()
				}
			}
			if(!noVirtualDom || noVirtualDom && this._startRowIndex > 0) {
				if(this._virtualColumnCount) {
					for(i = 0; i < this._virtualRowCount && i < this._totalRowCount && this._startRowIndex + i < data.length; i++) {
						if($.type(data[i]) === "array") {
							row = $(this._renderRecord([data[this._startRowIndex + i]], i, isFixed))
						} else {
							row = $(this._renderRecord(data[this._startRowIndex + i], i, isFixed))
						}
						c = row.children();
						for(j = 0; j < this._virtualColumnCount; j++) {
							vd[i][j].innerHTML = c[j + this._startColIndex].innerHTML;
							vd[i][j].className = c[j + this._startColIndex].className;
							vd[i][j].setAttribute("aria-describedby", c[j + this._startColIndex].getAttribute("aria-describedby"));
							vd[i][j].setAttribute("aria-readonly", c[j + this._startColIndex].getAttribute("aria-readonly"))
						}
						iRow = this._startRowIndex + i;
						tr = vd[i][0].parentNode;
						tr.className = this.options.alternateRowStyles && iRow % 2 ? "ui-iggrid-virtualrow ui-ig-altrecord" : "ui-iggrid-virtualrow";
						if(data[iRow]) {
							if(!_aNull(key)) {
								tr.setAttribute("data-id", this._kval_from_key(key, data[iRow]))
							} else if(!_aNull(data[iRow].ig_pk)) {
								tr.setAttribute("data-id", data[iRow].ig_pk)
							}
						}
					}
				} else if(isFixed) {
					trs = this.fixedBodyContainer().find("tbody>tr");
					for(i = 0; i < this._virtualRowCount && i < this._totalRowCount && this._startRowIndex + i < data.length; i++) {
						iRow = this._startRowIndex + i;
						tr = trs.eq(i)[0];
						if(_aNull(tr)) {
							continue
						}
						tr.className = this.options.alternateRowStyles && iRow % 2 ? "ui-iggrid-virtualrow ui-ig-altrecord" : "ui-iggrid-virtualrow";
						if(data[iRow]) {
							if(!_aNull(key)) {
								tr.setAttribute("data-id", this._kval_from_key(key, data[iRow]))
							} else if(!_aNull(data[iRow].ig_pk)) {
								tr.setAttribute("data-id", data[iRow].ig_pk)
							}
						}
					}
				}
			}
			if(this._isHorizontal) {
				this._isHorizontal = false;
				if((this.options.virtualization === true || this.options.columnVirtualization === true) && parseInt(this.options.width, 10) > 0) {
					if(!this._vheaders) {
						this._vheaders = this.headersTable().find("thead > tr > th > span.ui-iggrid-headertext")
					}
					for(i = 0; i < visibleCols.length; i++) {
						col = visibleCols[i];
						if(col.headerCssClass) {
							this.headersTable().find("th." + col.headerCssClass).removeClass(col.headerCssClass)
						}
					}
					for(j = 0; j < this._virtualColumnCount; j++) {
						headerText = visibleCols[j + this._startColIndex].headerText;
						vheaderNode = $(this._vheaders[j]);
						vheaderNode.closest("th").attr("id", this.element[0].id + "_" + visibleCols[j + this._startColIndex].key);
						vheaderNode.parent().addClass(visibleCols[j + this._startColIndex].headerCssClass || "");
						vheaderNode.html(headerText)
					}
				}
			}
		},
		_updateVirtColCounters: function(isFixed) {
			var visibleColsLength = this._visibleColumns(isFixed).length;
			if(this.options.columns) {
				this._totalColumnCount = visibleColsLength;
				this._maxVirtualColumnCount = this.options.columns.length
			} else {
				this._totalColumnCount = this.dataSource.dataView()[0].length;
				this._maxVirtualColumnCount = this._totalColumnCount
			}
			if(this.options.columnVirtualization === false && this.options.virtualization === false) {
				this._virtualColumnCount = visibleColsLength
			} else {
				if(this.options.width === null) {
					this._virtualColumnCount = this._totalColumnCount
				} else {
					this._virtualColumnCount = Math.ceil(parseInt(this.options.width, 10) / this._avgColumnWidth());
					this._maxVirtualColumnCount = Math.min(this._maxVirtualColumnCount, this._virtualColumnCount);
					this._virtualColumnCount = Math.min(this._totalColumnCount, this._virtualColumnCount);
					this._vhorizontalcontainer().children().first().css("width", this._calculateContainerWidth(false))
				}
			}
			if(this.options.virtualizationMode === "continuous") {
				this._virtualColumnCount = undefined
			}
		},
		_getVirtualDom: function(isFixed) {
			if(!isFixed) {
				return this._virtualDom
			}
			return this._fixedVirtualDom
		},
		_resetVirtualDom: function() {
			this._virtualDom = null;
			this._fixedVirtualDom = null
		},
		_buildVirtualDom: function() {
			var fixed, trs, fixedTrs;
			if(this.hasFixedColumns()) {
				fixedTrs = this._buildVirtualDomInternal(true);
				fixed = false
			}
			trs = this._buildVirtualDomInternal(fixed);
			this._trigger("virtualdombuilt", null, {rows: trs, fixedRows: fixedTrs})
		},
		_buildVirtualDomInternal: function(isFixed) {
			var grid = this, markup = "", row, i, j, dataLinkFn, vdh, $vcont, shouldHide = false, $tbody, visibleCols = this._visibleColumns(isFixed), key = this.options.primaryKey, data = this.dataSource.dataView(), temp, vd = this._getVirtualDom(isFixed), startIndex = 0;
			if(this._startRowIndex === undefined || this._startRowIndex === null) {
				this._startRowIndex = 0;
				this._startColIndex = 0
			}
			vd = [];
			if(!isFixed) {
				this._virtualDom = vd
			} else {
				this._fixedVirtualDom = vd
			}
			this._totalRowCount = data.length;
			if(this.options.height === null) {
				this._virtualRowCount = this._totalRowCount
			} else {
				$vcont = this._vdisplaycontainer();
				vdh = $vcont.innerHeight();
				if(!vdh && $vcont.is(":visible")) {
					this._virtualHeightReset = true;
					this._initializeHeights();
					this.element.height("");
					vdh = $vcont.innerHeight()
				}
				this._virtualRowCount = Math.floor(vdh / parseInt(this.options.avgRowHeight, 10))
			}
			this._updateVirtColCounters(isFixed);
			if(this.options.height !== null) {
				this._setScrollContainerHeight(this._totalRowCount * parseInt(this.options.avgRowHeight, 10))
			}
			dataLinkFn = function(row, i, vc) {
				for(j = 0; j < vc; j++) {
					if(j < grid._totalColumnCount) {
						vd[i][j] = row[0].cells[j]
					}
				}
			};
			if(this._persistVirtualScrollTop) {
				if(this._startRowIndex > this.dataSource.dataView().length - this._virtualRowCount) {
					if(this.dataSource.dataView().length - this._virtualRowCount > 0) {
						this._startRowIndex = this.dataSource.dataView().length - this._virtualRowCount
					} else {
						this._startRowIndex = 0
					}
				}
				startIndex = this._startRowIndex
			}
			if(isFixed) {
				this.element.children("tbody").empty();
				$tbody = this.fixedBodyContainer().find("tbody")
			} else {
				$tbody = this.element.children("tbody")
			}
			$tbody.empty();
			for(i = 0; i < this._virtualRowCount; i++) {
				shouldHide = false;
				vd[i] = [];
				markup = "";
				for(j = this._startColIndex; j < this._virtualColumnCount + this._startColIndex; j++) {
					if(j >= this._totalColumnCount) {
						break
					}
					markup += '<td role="gridcell" aria-readonly="' + !!visibleCols[j].readOnly + '" aria-describedby="' + this.id() + "_" + visibleCols[j].key + '" tabindex="' + this.options.tabIndex + '"';
					if(!data[startIndex + i]) {
						shouldHide = true;
						markup += "></td>"
					} else {
						if(this.options.autoFormat !== false) {
							if(visibleCols[j].template && visibleCols[j].template.length) {
								temp = this._renderTemplatedCell(data[startIndex + i], visibleCols[j]);
								if(temp.indexOf("<td") === 0) {
									markup += temp.substring(3)
								} else {
									markup += ">" + temp
								}
								markup = grid._editCellStyle(markup, data[startIndex + i], visibleCols[j].key || j)
							} else {
								markup += grid._addCellStyle(data[startIndex + i], visibleCols[j].key || j, visibleCols[j]) + ">" + this._renderCell(data[startIndex + i][visibleCols[j].key], visibleCols[j], data[startIndex + i])
							}
						} else {
							markup += grid._addCellStyle(data[startIndex + i], visibleCols[j].key, visibleCols[j]) + ">" + data[i][visibleCols[j].key]
						}
						markup += "</td>"
					}
				}
				row = $("<tr>" + markup + "</tr>").appendTo($tbody);
				if(shouldHide) {
					row.css("visibility", "hidden")
				}
				if(i % 2 !== 0 && this.options.alternateRowStyles) {
					row.addClass("ui-ig-altrecord")
				}
				row.addClass("ui-iggrid-virtualrow");
				row.attr("role", "row");
				row.attr("tabindex", this.options.tabIndex);
				if(data[i + startIndex]) {
					if(!_aNull(key)) {
						row.attr("data-id", this._kval_from_key(key, data[i + startIndex]))
					} else if(!_aNull(data[i + startIndex].ig_pk)) {
						row.attr("data-id", data[i + startIndex].ig_pk)
					}
				}
				dataLinkFn(row, i, this._virtualColumnCount);
				if(i === data.length - 1) {
					break
				}
			}
			this._updateVirtualScrollContainer();
			return $tbody.children("tr")
		},
		_adjustVirtualHeights: function() {
			var c = this._vdisplaycontainer(), tbody = c.find("tbody"), h = tbody.children().first().height();
			if(this.options.height === null) {
				return
			}
			if(this.options.avgRowHeight !== h) {
				this.options.avgRowHeight = h;
				this._buildVirtualDom()
			}
		},
		_verticalScroller: function() {
			if(!this._verticalScrollerObj || this._verticalScrollerObj.length === 0) {
				this._verticalScrollerObj = this._scrollContainer().children().first()
			}
			return this._verticalScrollerObj
		},
		_hscrollbar: function() {
			return this.container().find("#" + this.id() + "_hscroller_container")
		},
		_hscrollbarcontent: function() {
			return this.container().find("#" + this.id() + "_hscroller")
		},
		_hscrollbarinner: function() {
			return this.container().find("#" + this.id() + "_hscroller_inner")
		},
		_avgColumnWidth: function() {
			var width = 0, cols = this.options.columns, count = cols.length, def = this.options.defaultColumnWidth, i;
			if(this.options.avgColumnWidth !== null) {
				return parseInt(this.options.avgColumnWidth, 10)
			}
			for(i = 0; i < count; i++) {
				width += parseInt(cols[i].width, 10)
			}
			if((count === 0 || isNaN(width)) && def) {
				return parseInt(def, 10)
			}
			if(count > 0 && this.options.autoGenerateColumns && isNaN(width)) {
				if(this.options.width === null || this.options.width === undefined) {
					throw new Error($.ig.Grid.locale.columnVirtualizationRequiresWidth)
				}
				return parseInt(this.options.width, 10) / count
			}
			if(width === 0 || width < def) {
				return def
			}
			if(isNaN(width)) {
				width = 100
			}
			return width / count
		},
		_registerScrllCntnrToSync: function($container) {
			var name = $container.data("containerName");
			this._scrllCntrsToSync = this._scrllCntrsToSync || {};
			this._scrllCntrsToSync[name] = $container
		},
		_syncScrollLeft: function(scrLeft, ignoreContainer) {
			var name, $container, containers = this._scrllCntrsToSync;
			for(name in containers) {
				if(containers.hasOwnProperty(name)) {
					if(name === ignoreContainer) {
						continue
					}
					$container = containers[name];
					$container.scrollLeft(scrLeft)
				}
			}
		},
		_onScrollContainer: function(event) {
			var $container = $(event.target), containerName, $hScrollBar, scrLeft = $container.scrollLeft(), scrTop = $(event.target).scrollTop();
			containerName = $container.data("containerName");
			if(scrLeft !== this._scrollLeft) {
				this._syncScrollLeft(scrLeft, containerName);
				if($.ig.util.isIE && containerName !== "hScrollbar" && containerName !== "vScrollbar") {
					$hScrollBar = this._scrllCntrsToSync.vScrollbar || this._scrllCntrsToSync.hScrollbar;
					if($hScrollBar && $hScrollBar.scrollLeft() !== scrLeft) {
						this._synchronizeHScroll();
						return
					}
				}
				this._scrollLeft = scrLeft
			}
			if(this._oldDisplayContainerScrollTop === undefined) {
				this._oldDisplayContainerScrollTop = 0
			}
			if(scrTop !== this._oldDisplayContainerScrollTop && containerName === "dataContainer") {
				if($container[0].scrollHeight - scrTop === $container.outerHeight()) {
					this._focusDataRowIndex = this._getTotalRowsCount() - 1;
					this._scrollContainer().scrollTop(this._scrollContainer().children().first().outerHeight())
				} else if(scrTop === 0) {
					this._focusDataRowIndex = 0;
					this._scrollContainer().scrollTop(0);
					$hScrollBar = this._scrllCntrsToSync.vScrollbar || this._scrllCntrsToSync.hScrollbar;
					if($hScrollBar) {
						$hScrollBar.scrollLeft(0)
					}
				}
			}
		},
		_renderCaption: function() {
			var colgroup, caption, tbl, scrollc;
			if(this.options.caption !== null) {
				if(this.container().find(".ui-iggrid-headercaption").length > 0) {
					return
				}
				if(this.options.fixedHeaders === true && this.options.showHeader === true) {
					colgroup = this.headersTable().children("colgroup").first();
					if(colgroup.length === 0) {
						caption = $("<caption></caption>").prependTo(this.headersTable())
					} else {
						caption = $("<caption></caption>").insertAfter(colgroup)
					}
					caption.text(this.options.caption).attr("id", this.id() + "_caption").addClass(this.css.gridHeaderCaptionClass)
				} else {
					scrollc = this.scrollContainer();
					if(scrollc.length === 0) {
						tbl = $("<table></table>").prependTo(this.container())
					} else {
						tbl = $("<table></table>").insertBefore(scrollc)
					}
					caption = $("<caption></caption>").appendTo(tbl.css("width", "100%").addClass(this.css.captionTable)).text(this.options.caption).attr("id", this.id() + "_caption").addClass(this.css.gridHeaderCaptionClass)
				}
				caption.parent().css("margin", 0)
			}
		},
		_renderFixedCaption: function() {
			var colgroup, caption;
			if(this.options.caption !== null) {
				if(this.options.fixedHeaders === true && this.options.showHeader === true) {
					colgroup = this.fixedHeadersTable().children("colgroup").first();
					if(colgroup.length === 0) {
						caption = $("<caption></caption>").prependTo(this.fixedHeadersTable())
					} else {
						caption = $("<caption></caption>").insertAfter(colgroup)
					}
					caption.css("white-space", "nowrap").text(this.options.caption).attr("id", this.id() + "_caption_fixed").addClass(this.css.gridHeaderCaptionClass)
				}
				caption.parent().css("margin", 0)
			}
		},
		_createHeaderColumnMarkup: function(column, index) {
			var headerClass = this.css.headerClass, customClass = column.headerCssClass ? column.headerCssClass : "", headerText = $("<span>" + column.headerText + "</span>").addClass(this.css.headerTextClass), markup = "<th></th>";
			return $(markup).append(headerText).attr({
				id: this.id() + "_" + column.key,
				role: "columnheader",
				"aria-label": column.headerText,
				tabIndex: this.options.tabIndex
			}).addClass(headerClass).addClass(customClass).data("columnIndex", index)
		},
		_updateHeaderColumnIndexes: function() {
			var grid = this, cols = this.options.columns;
			if(this.options.virtualization === true && this.options.virtualizationMode === "fixed" || this.options.columnVirtualization === true) {
				cols = cols.slice(0, this._maxVirtualColumnCount)
			}
			grid._initialHiddenCells = this._initialized ? [] : grid._initialHiddenCells;
			$(cols).each(function(i) {
				grid.container().find("#" + grid.id() + "_" + this.key).data("columnIndex", i)
			})
		},
		_renderHeaderColumns: function(header) {
			var grid = this, cols = this.options.columns;
			if(this.options.virtualization === true && this.options.virtualizationMode === "fixed" || this.options.columnVirtualization === true) {
				cols = cols.slice(0, this._maxVirtualColumnCount)
			}
			grid._initialHiddenCells = [];
			$(cols).each(function(i) {
				var headerCell, key = this.key;
				if(key) {
					headerCell = grid._createHeaderColumnMarkup(this, i);
					header.append(headerCell);
					grid._trigger(grid.events.headerCellRendered, null, {owner: grid, th: headerCell, columnKey: this.key});
					$.each(grid._initialHiddenColumns, function() {
						if(this.key === key) {
							grid._initialHiddenCells.push(headerCell);
							headerCell.css("display", "none");
							return false
						}
					})
				}
			})
		},
		renderMultiColumnHeader: function(cols) {
			var topmostGrid, layout;
			this._clearPersistenceData();
			this.destroy(true);
			this.options.columns = cols;
			this._container = null;
			this._rContainer = null;
			this._prevContainerHeight = null;
			this._virtualHeightReset = null;
			this._scrollContainerObj = null;
			this._initialized = false;
			this._rlm = undefined;
			this._mrl = undefined;
			this._rlp = undefined;
			this.options.requiresDataBinding = true;
			this._renderHeaderCalled = false;
			this.persistenceData = {};
			if(this._isHierarchicalGrid) {
				topmostGrid = this.element.closest(".ui-iggrid-root").data("igHierarchicalGrid");
				if(topmostGrid) {
					if(topmostGrid.element[0].id !== this.element[0].id && this.options.key) {
						layout = topmostGrid._findLayout(topmostGrid.options.columnLayouts, this.options.key);
						layout.columns = cols;
						topmostGrid._setOption("columnLayouts", topmostGrid.options.columnLayouts)
					}
					topmostGrid.persistenceData = {};
					topmostGrid._clearVariablesAndEvents();
					topmostGrid._create();
					return
				}
			}
			this._create()
		},
		_renderHeaderLayout: function(thead) {
			var i, j, t = this._rlp, l, cell, hrow, col, headerCell;
			thead.empty();
			for(i = 0; i < t.length; i++) {
				l = t[i];
				hrow = $("<tr></tr>").attr("data-header-row", true).attr("role", "row").appendTo(thead);
				for(j = 0; j < l.length; j++) {
					cell = l[j];
					if(cell.col) {
						col = cell.col
					} else {
						col = this.columnByKey(cell.key);
						cell.col = col
					}
					headerCell = this._createHeaderColumnMarkup(col, i * j + j).attr("colspan", cell.cs).attr("rowspan", cell.rs);
					hrow.append(headerCell);
					this._trigger(this.events.headerCellRendered, null, {owner: this, th: headerCell, columnKey: col.key})
				}
			}
		},
		_renderHeader: function() {
			var w, header, id, headerDom, headerMarkup = "", scrollc = this.scrollContainer(), noCancel = true, fHeader = false, headerParent = this.element[0], width, headerScrollDiv, existingHeader, o = this.options, v = o.virtualization === true || o.rowVirtualization === true || o.columnVirtualization === true;
			this._renderHeaderCalled = true;
			if(this.options.showHeader) {
				noCancel = this._trigger(this.events.headerRendering, null, {owner: this});
				if(noCancel) {
					this._rmvClgrpOnInitRenderData = true;
					id = this.id();
					headerMarkup = '<thead role="rowgroup"><tr data-header-row role="row"></tr></thead>';
					headerParent = this.container();
					width = scrollc.css("width");
					if(this.options.fixedHeaders && this.options.height !== null) {
						if(v === false) {
							if(headerParent.length === 0) {
								scrollc.removeClass(this.css.gridClasses).removeClass(this.css.baseClasses).css("width", "").wrap("<div id='" + id + "_container'></div>");
								headerParent = this.container().addClass(this.css.baseClasses).addClass(this.css.gridClasses).css("width", width);
								this._isWrapped = true
							}
						} else {
							width = this.element.parents(".ui-widget").css("width");
							headerParent = this.container().find("#" + id + "_headers_v");
							if(o.width !== null) {
								w = o.width;
								w = w.indexOf && w.indexOf("%") !== -1 ? "100%" : w;
								headerParent.css("width", w).css("max-width", w).css("overflow-x", "hidden")
							}
						}
						headerParent = $('<table id="' + id + '_headers"></table>').prependTo(headerParent).addClass(this._isMultiRowGrid() ? this.css.mrlGridHeaderTableClass : this.css.gridHeaderTableClass).attr("cellpadding", 0).attr("cellspacing", 0).attr("border", "0");
						if(v === false) {
							headerScrollDiv = $("<div></div>").prependTo(headerParent.parent());
							headerScrollDiv.css("overflow", "hidden").css("position", "relative").css("white-space", "nowrap");
							headerScrollDiv.addClass("ui-widget-header ui-helper-reset");
							headerScrollDiv.append(headerParent)
						} else if(this.options.rowVirtualization === true) {
							headerParent.addClass("ui-widget-header ui-helper-reset")
						}
						this.headersTable().parent().data("containerName", "headerContainer").bind("scroll.syncScrollContainers", $.proxy(this._onScrollContainer, this));
						this._registerScrllCntnrToSync(this.headersTable().parent());
						fHeader = true;
						this._rmvClgrpOnInitRenderData = false
					} else if(this.options.fixedHeaders !== true) {
						headerParent = this.element
					}
					if(this.options.width === null && this.options.height === null) {
						headerParent = this.element
					}
					if(this.options.width !== null && this.options.height === null) {
						this._fixScrollY = 1;
						scrollc.css("overflow-y", "hidden").css("overflow-x", "auto");
						headerParent = this.element
					}
					if(!headerParent.find("colgroup").length) {
						this._renderColgroup(headerParent, fHeader, false, this.options.autofitLastColumn)
					}
					if(this._isMultiColumnGrid === true) {
						this._headerParent = headerParent;
						this._fireInternalEvent("_renderingMultiColumnHeader");
						if(this.options.virtualization === true || this.options.rowVirtualization === true) {
							this.container().find("#" + id + "_headers_v").css("position", "relative").addClass("ui-widget-header ui-helper-reset").addClass(this.css.baseClasses);
							headerParent.addClass(this._isMultiRowGrid() ? this.css.mrlGridHeaderTableClass : this.css.gridHeaderTableClass).attr("cellpadding", 0).attr("cellspacing", 0).attr("border", "0")
						}
					} else {
						if(this.options.headerTemplate === null || this.options.headerTemplate === undefined) {
							if(this.options.virtualization === true || this.options.rowVirtualization === true) {
								this.container().find("#" + id + "_headers_v").css("position", "relative").addClass("ui-widget-header ui-helper-reset").addClass(this.css.baseClasses);
								headerParent.addClass(this._isMultiRowGrid() ? this.css.mrlGridHeaderTableClass : this.css.gridHeaderTableClass).attr("cellpadding", 0).attr("cellspacing", 0).attr("border", "0")
							}
							this.element.find(">thead").remove();
							existingHeader = headerParent.find(">thead");
							if(existingHeader.length === 0) {
								header = $(headerMarkup).appendTo(headerParent).children().first()
							} else {
								existingHeader.empty();
								header = $('<tr data-header-row role="row"></tr>').appendTo(existingHeader)
							}
							if(this._rlp) {
								this._renderHeaderLayout(header.parent())
							} else {
								this._renderHeaderColumns(header)
							}
						} else {
							headerDom = this.options.headerTemplate;
							if(this.options.virtualization === true || this.options.rowVirtualization === true) {
								$(headerDom).children().each(function() {
									this.appendTo(this.container().find("#" + id + "_headers"))
								});
								header = this.headersTable().addClass(this.css.gridClasses)
							} else {
								header = $(headerMarkup).appendTo(headerParent).append(headerDom)
							}
						}
						this._headerParent = headerParent;
						this._trigger(this.events.headerRendered, null, {owner: this, table: this.headersTable()});
						this._headerRenderCancel = false
					}
				} else {
					this._headerRenderCancel = true
				}
			}
			this._trigger("headerRenderedInternal", null, {owner: this, table: this.headersTable()})
		},
		_renderFooter: function() {
			var gridId = this.id(), w, o = this.options, elemParent, footerId = gridId + "_footer_container", footerMarkup = '<tfoot role="rowgroup" class="' + this.css.gridFooterClass + '"></tfoot>', $footer = this.container().find("#" + footerId), $table, width, noCancel, tableGrid = this.element, $tableGridContainer;
			if(tableGrid.length === 0) {
				return
			}
			if($footer.length === 0 && o.showFooter) {
				noCancel = this._trigger(this.events.footerRendering, null, {owner: this});
				if(noCancel) {
					if((o.virtualization === true || o.rowVirtualization === true || o.columnVirtualization === true) && (o.height !== null && o.height !== undefined || o.width !== null && o.width !== undefined)) {
						$tableGridContainer = this._vdisplaycontainer();
						this.options.fixedFooters = true;
						w = o.width;
						if(w && w.indexOf && w.indexOf("%") !== -1) {
							w = "100%"
						}
						$tableGridContainer = $('<tr><td colspan="2" style="border-width: 0px;"></td></tr>').insertAfter($tableGridContainer.closest("tr"));
						$footer = $("<div></div>").attr("id", footerId).css({
							overflow: "hidden",
							position: "relative"
						}).addClass("ui-widget-footer").addClass(this.css.footerContainer).width(w).appendTo($tableGridContainer.find("td"));
						$table = $("<table></table>").attr("cellpadding", 0).attr("cellspacing", 0).attr("border", 0).appendTo($footer).addClass(this.css.gridFooterTableClass).width(w).attr("id", gridId + "_footers");
						this._renderColgroup($table, false, true, this.options.autofitLastColumn);
						$(footerMarkup).appendTo($table);
						if(this.options.showFooter && this.options.fixedFooters === true && this.options.height !== null) {
							elemParent = this.element.parents(".ui-widget:first");
							if(elemParent.length === 1 && elemParent[0].style) {
								width = elemParent[0].style.width;
								if(width && (!width.indexOf || width.indexOf("%") === -1)) {
									$footer.css("width", width)
								}
							}
						}
						if(o.expandColWidth && !o.width) {
							$footer.css("width", parseInt($footer.width(), 10) + o.expandColWidth + "px")
						}
					} else if(o.fixedFooters === true && o.height !== null) {
						if(o.width !== null) {
							$tableGridContainer = this._hscrollbar()
						} else {
							$tableGridContainer = this.scrollContainer()
						}
						if($tableGridContainer.length === 0) {
							$tableGridContainer = tableGrid
						}
						$footer = $("<div></div>").attr("id", footerId).css({
							overflow: "hidden",
							position: "relative",
							"white-space": "nowrap"
						}).addClass(this.css.footerContainer).addClass("ui-widget-footer").insertAfter($tableGridContainer);
						$table = $("<table></table>").attr("cellpadding", 0).attr("cellspacing", 0).attr("border", 0).appendTo($footer).addClass(this.css.gridFooterTableClass).attr("id", gridId + "_footers");
						this._renderColgroup($table, false, true, this.options.autofitLastColumn);
						$(footerMarkup).appendTo($table)
					} else {
						$tableGridContainer = tableGrid;
						$footer = $(footerMarkup).attr("id", footerId).insertAfter($tableGridContainer.find("tbody:eq(0)"))
					}
					$footer.data("containerName", "footerContainer").bind("scroll.syncScrollContainers", $.proxy(this._onScrollContainer, this));
					this._registerScrllCntnrToSync($footer);
					$footer.css("display", "none");
					this._footer = $footer;
					this._footerParent = $table;
					this._trigger(this.events.footerRendered, null, {owner: this, table: this.footersTable()})
				}
			}
			return $footer
		},
		_renderRecord: function(data, rowIndex, isFixed) {
			var key = this.options.primaryKey, gridId = this.id(), grid = this, dstr = "", cols = this.options.columns, noVisibleColumns, temp;
			dstr += "<tr";
			if(rowIndex % 2 !== 0 && this.options.alternateRowStyles) {
				dstr += ' class="' + grid.css.recordAltClass + '"'
			}
			if(!_aNull(key)) {
				dstr += ' data-id="' + this._kval_from_key(key, data) + '"'
			} else if(!_aNull(data.ig_pk)) {
				dstr += ' data-id="' + data.ig_pk + '"'
			}
			if(this.options.virtualization && this.options.virtualizationMode === "continuous") {
				dstr += ' data-row-idx="' + rowIndex + '"'
			}
			dstr += ' role="row" tabindex="' + this.options.tabIndex + '">';
			noVisibleColumns = true;
			isFixed = !!isFixed;
			$(cols).each(function(colIndex) {
				var col = cols[colIndex], f = !!col.fixed;
				if(col.hidden || f !== isFixed) {
					return
				}
				noVisibleColumns = false;
				dstr += '<td role="gridcell" aria-readonly="' + !!this.readOnly + '" aria-describedby="' + gridId + "_" + this.key + '" tabindex="' + grid.options.tabIndex + '"';
				if(col.template && col.template.length) {
					temp = grid._renderTemplatedCell(data, this);
					if(temp.indexOf("<td") === 0) {
						dstr += temp.substring(3)
					} else {
						dstr += ">" + temp
					}
					dstr = grid._editCellStyle(dstr, data, this.key)
				} else {
					dstr += grid._addCellStyle(data, this.key || colIndex, col) + ">" + grid._renderCell(data[this.key || colIndex], this, data)
				}
				dstr += "</td>"
			});
			if(noVisibleColumns && !isFixed) {
				dstr += '<td role="gridcell"></td>'
			}
			dstr += "</tr>";
			return dstr
		},
		_renderRecordFromLayout: function(data, rowIndex, isFixed) {
			var t = this._rlp, l, cell, key = this.options.primaryKey, dstr = "", col, noVisibleColumns, temp, i, j, alt = rowIndex % 2 !== 0 && this.options.alternateRowStyles;
			for(i = 0; i < t.length; i++) {
				l = t[i];
				dstr += "<tr" + (alt ? ' class="' + this.css.recordAltClass + '"' : "");
				if(!_aNull(key)) {
					dstr += ' data-id="' + this._kval_from_key(key, data) + '"'
				} else if(!_aNull(data.ig_pk)) {
					dstr += ' data-id="' + data.ig_pk + '"'
				}
				if(this.options.virtualization && this.options.virtualizationMode === "continuous") {
					dstr += ' data-row-idx="' + rowIndex + '"'
				}
				dstr += ' role="row" tabindex="' + this.options.tabIndex + '">';
				noVisibleColumns = true;
				for(j = 0; j < l.length; j++) {
					cell = l[j];
					if(cell.col) {
						col = cell.col
					} else {
						col = this.columnByKey(cell.key);
						cell.col = col
					}
					if(col.hidden || col.fixed === true && !isFixed || col.fixed !== true && isFixed) {
						return
					}
					noVisibleColumns = false;
					dstr += '<td role="gridcell" aria-readonly="' + !!col.readOnly + '" ' + (cell.cs > 0 ? 'colspan="' + cell.cs + '" ' : "") + (cell.rs > 0 ? 'rowspan="' + cell.rs + '" ' : "") + 'aria-describedby="' + this.id() + "_" + col.key + '" tabindex="' + this.options.tabIndex + '"';
					if(col.template && col.template.length) {
						temp = this._renderTemplatedCell(data, col);
						if(temp.indexOf("<td") === 0) {
							dstr += temp.substring(3)
						} else {
							dstr += ">" + temp
						}
						dstr = this._editCellStyle(dstr, data, col.key)
					} else {
						dstr += this._addCellStyle(data, col.key, col) + ">" + this._renderCell(data[col.key], col, data)
					}
					dstr += "</td>"
				}
				if(noVisibleColumns) {
					dstr += '<td role="gridcell"></td>'
				}
				dstr += "</tr>"
			}
			return dstr
		},
		_editCellStyle: function(dstr, data, col, isFixed) {
			var lastCellIdx, lastCellClose, lastCellClass, start, end, nc = "", i;
			if(!this._cellStyleSubscribers || this._cellStyleSubscribers.length === 0) {
				return dstr
			}
			for(i = 0; i < this._cellStyleSubscribers.length; i++) {
				nc += this._cellStyleSubscribers[i](data, col, isFixed) + " "
			}
			nc = nc.trim();
			if(nc.length === 0) {
				return dstr
			}
			lastCellIdx = dstr.lastIndexOf("<td");
			lastCellClose = dstr.indexOf(">", lastCellIdx);
			if(lastCellClose > 0) {
				lastCellClass = dstr.substring(lastCellIdx, lastCellClose).indexOf("class");
				if(lastCellClass > 0) {
					lastCellClass += lastCellIdx
				}
			} else {
				lastCellClass = dstr.indexOf("class", lastCellIdx)
			}
			if(lastCellClass > 0) {
				start = dstr.substring(0, lastCellClass + 7);
				end = dstr.substring(lastCellClass + 7);
				dstr = start + nc + " " + end
			} else {
				start = dstr.substring(0, lastCellIdx + 3);
				end = dstr.substring(lastCellIdx + 3);
				dstr = start + ' class="' + nc + '"' + end
			}
			return dstr
		},
		_addCellStyle: function(data, colId, col, isFixed) {
			var dstr = "", i, hasSubs = this._cellStyleSubscribers && this._cellStyleSubscribers.length, hasColClasses = col ? col.columnCssClass : false;
			if(hasSubs) {
				for(i = 0; i < this._cellStyleSubscribers.length; i++) {
					dstr += this._cellStyleSubscribers[i](data, colId, isFixed) + " "
				}
			}
			if(hasColClasses) {
				dstr += col.columnCssClass
			}
			dstr = dstr.trim();
			return dstr.length > 0 ? ' class="' + dstr + '"' : dstr
		},
		_getCellStyle: function(data, col, isFixed) {
			var dstr = "", i;
			if(!this._cellStyleSubscribers || this._cellStyleSubscribers.length === 0) {
				return dstr
			}
			for(i = 0; i < this._cellStyleSubscribers.length; i++) {
				dstr += this._cellStyleSubscribers[i](data, col, isFixed) + " "
			}
			return dstr.trim()
		},
		_enableHeaderCellFeature: function(th) {
			var $th;
			if($.type(th) === "string") {
				$th = this.container().find("#" + this.id() + "_" + th)
			} else {
				$th = th
			}
			$th.addClass(this.css.headerCellFeatureEnabledClass)
		},
		_renderRecordInArray: function(darr, tbody, data, rowIndex) {
			var key = this.options.primaryKey, grid = this, appendBehavior = false, cols = this.options.columns, temp, tdIndex;
			if(darr === null) {
				darr = [];
				appendBehavior = true
			}
			darr.push("<tr");
			if(rowIndex % 2 !== 0 && this.options.alternateRowStyles) {
				darr.push(' class="' + grid.css.recordAltClass + '"')
			}
			if(!_aNull(key)) {
				darr.push(' data-id="' + this._kval_from_key(key, data) + '"')
			} else if(!_aNull(data.ig_pk)) {
				darr.push(' data-id="' + data.ig_pk + '"')
			}
			darr.push(' role="row" tabindex="' + this.options.tabIndex + '">');
			$(cols).each(function(colIndex) {
				if(cols[colIndex].hidden) {
					return
				}
				darr.push('<td role="gridcell" aria-readonly=' + !!this.readOnly + ' aria-describedby="' + grid.id() + "_" + this.key + '" tabindex="' + grid.options.tabIndex + '"');
				if(data[this.key] === undefined) {
					if(cols[colIndex].template && cols[colIndex].template.length) {
						temp = grid._renderTemplatedCell(data, this);
						if(temp.indexOf("<td") === 0) {
							tdIndex = darr.length - 1;
							darr[tdIndex] = temp.replace("<td", darr[tdIndex])
						} else {
							darr.push(">" + temp);
							tdIndex = darr.length - 2
						}
						darr[tdIndex] = grid._editCellStyle(darr[tdIndex], data, colIndex)
					} else {
						darr.push(grid._addCellStyle(data, colIndex, cols[colIndex]) + ">" + grid._renderCell(data[colIndex], this, data))
					}
					darr.push("</td>")
				} else {
					if(cols[colIndex].template && cols[colIndex].template.length) {
						temp = grid._renderTemplatedCell(data, this);
						if(temp.indexOf("<td") === 0) {
							tdIndex = darr.length - 1;
							darr[tdIndex] = temp.replace("<td", darr[tdIndex])
						} else {
							darr.push(">" + temp);
							tdIndex = darr.length - 2
						}
						darr[tdIndex] = grid._editCellStyle(darr[tdIndex], data, this.key)
					} else {
						darr.push(grid._addCellStyle(data, this.key, cols[colIndex]) + ">" + grid._renderCell(data[this.key], this, data))
					}
					darr.push("</td>")
				}
			});
			darr.push("</tr>");
			if(appendBehavior) {
				tbody.append(darr.join(""))
			}
		},
		_fixDate: function(val, col) {
			var d, i;
			if(!col || !val) {
				return val
			}
			if(col.dataType === "date" && !val.getTime) {
				i = val.indexOf ? val.indexOf("ate(") : -1;
				if(i > 0) {
					d = val.substring(i + 4);
					i = d.indexOf(")");
					if(i > 0) {
						d = parseInt(d.substring(0, i), 10);
						if(!isNaN(d)) {
							val = new Date(d)
						}
					}
				}
			}
			return val
		},
		_renderCell: function(val, col, record, displayStyle, returnObject) {
			var type = col.dataType, format = col.format, o = this.options, auto = o.autoFormat;
			if(record && !returnObject) {
				val = this.dataSource.getCellValue(col.key, record)
			}
			val = this._fixDate(val, col);
			if(col.formatter) {
				return col.formatter(val, record)
			}
			if(!format && type === "bool" && o.renderCheckboxes) {
				format = "checkbox"
			}
			if(format === "checkbox" && type !== "bool") {
				format = null
			}
			type = type === "date" || type === "number" ? type : "";
			if(format || (auto === true || auto === "dateandnumber") && type || auto && auto === type) {
				return $.ig.formatter(val, type, format, true, o.enableUTCDates, displayStyle, col.headerText, this.options.tabIndex)
			}
			if(returnObject) {
				return val
			}
			return val || val === 0 || val === false ? val.toString() : "&nbsp;"
		},
		_renderTemplatedCell: function(val, col) {
			var v, d = $.extend({}, val);
			if(val === undefined || val === null || val[col.key] === undefined) {
				if(col.unbound === true) {
					v = "&nbsp;"
				} else {
					v = this._renderCell(val, col, val, null, true)
				}
			} else {
				v = this._renderCell(val[col.key], col, val, null, true)
			}
			v = v === "&nbsp;" ? null : v;
			d[col.key] = v;
			return this._tmplWrappers[this.id() + "_" + col.key](d, this._jsrnd ? undefined : col.template)
		},
		_defaultTemplateFunc: function(d, tmpl) {
			return $.ig.tmpl(tmpl, d)
		},
		_setTemplateDefinition: function(jsrnd) {
			var i, key;
			for(i = 0; i < this.options.columns.length; i++) {
				if(this.options.columns[i].template && this.options.columns[i].template.length) {
					key = this.id() + "_" + this.options.columns[i].key;
					if(jsrnd) {
						$.templates(key, this.options.columns[i].template);
						this._jsrnd = true
					} else {
						this._tmplWrappers[key] = this._defaultTemplateFunc
					}
				}
			}
		},
		_scrollbarWidth: function() {
			if(this._scrollbarWidthResolved === null || this._scrollbarWidthResolved === undefined) {
				var $parent, $div = $('<div id="' + this.id() + '_tmp"></div>').css({
					width: 50,
					height: 50,
					position: "absolute",
					top: -500,
					left: -500
				}).prependTo("body").append("<div></div>").find("div").css({height: 100}), w1, w2;
				if(document.documentMode === 7 || $.ig.util.isIE7) {
					w1 = $div.innerWidth();
					$div.parent().css("overflow-y", "scroll");
					w2 = $div.innerWidth();
					this._scrollbarWidthResolved = w1 - w2
				} else {
					$parent = $div.parent();
					$parent.css({overflow: "auto"});
					$div.css({width: "100%"});
					this._scrollbarWidthResolved = $parent.width() - $div.width()
				}
				$("#" + this.id() + "_tmp").remove()
			}
			return this._scrollbarWidthResolved
		},
		_fireInternalEvent: function(name, args) {
			var i, f, featureName, feature;
			for(i = 0; i < this.options.features.length; i++) {
				f = this.options.features[i];
				if(f !== undefined && f !== null && f.name !== undefined) {
					featureName = "igGrid" + f.name;
					feature = this.element.data(featureName);
					if(feature !== null && feature !== undefined && feature[name]) {
						if(args) {
							feature[name](args)
						} else {
							feature[name]()
						}
					}
				}
			}
		},
		_initFeature: function(featureObject) {
			if(!featureObject) {
				return
			}
			if(featureObject.name === undefined) {
				return
			}
			var widget = "igGrid" + featureObject.name;
			if($.type(this.element[widget]) !== "function") {
				throw new Error($.ig.Grid.locale.noSuchWidget.replace("{featureName}", widget))
			}
			if(this.element.data(widget)) {
				this.element[widget]("destroy")
			}
			this.element[widget](featureObject);
			this.element.data(widget)._injectGrid(this)
		},
		_initFeatureSettings: function(featureObject) {
			if(!featureObject) {
				return
			}
			if(featureObject.name === undefined) {
				return
			}
			var widget = "igGrid" + featureObject.name;
			if($.type(this.element[widget]) !== "function") {
				throw new Error($.ig.Grid.locale.noSuchWidget.replace("{featureName}", widget))
			}
			if(this.element.data(widget)) {
				this.element.data(widget)._injectGrid(this, true)
			}
		},
		_onFeaturesSoftDirty: function(e, args) {
			var i, feature;
			if(args.owner.options.type !== "remote") {
				return
			}
			for(i = 0; i < this.options.features.length; i++) {
				feature = this.element.data("igGrid" + this.options.features[i].name);
				if(feature && feature !== args.owner && feature.options && feature.options.type === "local") {
					if(feature._onUIDirty && $.type(feature._onUIDirty) === "function") {
						feature._onUIDirty(e, args)
					}
				}
			}
		},
		_kval_from_key: function(key, data) {
			var k, k_val = "", i;
			if(key.indexOf(",") !== -1) {
				k = key.split(",");
				for(i = 0; i < k.length; i++) {
					k_val += data[k[i]];
					if(i < k.length - 1) {
						k_val += ","
					}
				}
			} else {
				k_val = data[key]
			}
			return k_val
		},
		_rowId: function(rec, index) {
			var key = this.options.primaryKey;
			key = key ? this._kval_from_key(key, rec) : null;
			if(!key) {
				key = index;
				if(key !== 0) {
					key = this.rows().length - 1
				}
			}
			return key
		},
		_inferOpType: function() {
			if(this.options.dataSourceUrl || this.dataSource.type() === "remoteUrl") {
				return "remote"
			}
			return "local"
		},
		_renderVirtualRecords: function() {
			var mode = this.options.virtualizationMode;
			this._trigger("virtualrendering");
			if(mode === undefined || mode === "") {
				mode = "continuous"
			}
			if(mode === "fixed" || this.options.columnVirtualization === true) {
				if(this._persistVirtualScrollTop) {
					this._startRowIndex = Math.ceil(this._scrollContainer().scrollTop() / parseInt(this.options.avgRowHeight, 10));
					if(this._startRowIndex > this.dataSource.dataView().length - this._virtualRowCount) {
						if(this.dataSource.dataView().length - this._virtualRowCount > 0) {
							this._startRowIndex = this.dataSource.dataView().length - this._virtualRowCount
						} else {
							this._startRowIndex = 0
						}
					}
				}
				this._renderVirtualRecordsFixed()
			} else if(mode === "continuous") {
				this._renderVirtualRecordsContinuous();
				this._trigger("virtualrecordsrender", null, {owner: this, dom: this._virtualDom})
			}
		},
		_getHScrollContainerInner: function() {
			var ret = this._hscrollbarinner();
			if(ret.length === 0 && this.options.virtualizationMode === "continuous") {
				ret = this.container().find("#" + this.id() + "_horizontalScrollContainer div")
			}
			return ret
		},
		_getScrollContainerHeight: function() {
			return this._scrollContainer().children(":first-child").height()
		},
		_getDisplayContainerHeight: function() {
			return this._vdisplaycontainer().height()
		},
		_getDisplayContainerWidth: function() {
			return this._vdisplaycontainer().width()
		},
		_setDisplayContainerWidth: function(width) {
			if(width === undefined) {
				return
			}
			this._vdisplaycontainer().css("max-width", width);
			this._vdisplaycontainer().width(width)
		},
		_getVHeadersWidth: function() {
			return this.container().find("#" + this.id() + "_headers_v").width()
		},
		_setVHeadersWidth: function(width) {
			if(width === undefined) {
				return
			}
			this.container().find("#" + this.id() + "_headers_v").width(width)
		},
		_setScrollContainerHeight: function(height) {
			var sc = this._scrollContainer();
			if(height === undefined) {
				return
			}
			if($.ig.util.isIE && height > this.maxScrollContainerHeight) {
				this._setMaxHeightForScrollCntnr = true;
				height = this.maxScrollContainerHeight
			}
			sc.children(":first-child").height(height)
		},
		_setScrollContainerScrollTop: function(top) {
			if(top === undefined) {
				return
			}
			this._scrollContainer().scrollTop(top)
		},
		_getScrollContainerScrollTop: function() {
			return this._scrollContainer().scrollTop()
		},
		_setDisplayContainerScrollTop: function(top) {
			if(top === undefined) {
				return
			}
			this._vdisplaycontainer().scrollTop(top)
		},
		_getDisplayContainerScrollTop: function() {
			return this._vdisplaycontainer().scrollTop()
		},
		_setDisplayContainerScrollLeft: function(left) {
			if(left === undefined) {
				return
			}
			this._vdisplaycontainer().scrollLeft(left)
		},
		_getDisplayContainerScrollLeft: function() {
			return this._vdisplaycontainer().scrollLeft()
		},
		_calculateAvgRowHeight: function() {
			var rowHeightSum = this.container().find("#" + this.id() + " > tbody").height();
			if(rowHeightSum === 0) {
				rowHeightSum = parseInt(this.options.height, 10)
			}
			if(this.options.virtualizationMode === "fixed") {
				if(this._fixedAvgRowHeight) {
					return this._fixedAvgRowHeight
				}
				this._fixedAvgRowHeight = rowHeightSum / this._virtualRowCount
			}
			return rowHeightSum / this._virtualRowCount
		},
		_getDisplayContainerVisibleArea: function() {
			var scrollTop = this._getDisplayContainerScrollTop(), height = this._getDisplayContainerHeight();
			return {top: scrollTop, bottom: scrollTop + height}
		},
		virtualScrollTo: function(scrollerPosition) {
			var avgRowHeight, $scrollContainer = this._scrollContainer(), pos = parseInt(scrollerPosition, 10);
			if($.type(scrollerPosition) !== "string") {
				if(this.options.virtualizationMode === "fixed") {
					avgRowHeight = parseInt(this.options.avgRowHeight, 10)
				} else {
					if(this._avgRowHeight) {
						avgRowHeight = this._avgRowHeight
					} else {
						avgRowHeight = this._calculateAvgRowHeight()
					}
				}
				scrollerPosition--;
				pos = avgRowHeight * scrollerPosition;
				pos = Math.ceil(pos);
				this._virtualScrollToIndex = scrollerPosition
			}
			$scrollContainer.scrollTop(pos)
		},
		_virtualScrollToInternal: function(virtualScrollerY) {
			var tableId, firstRow, lastRow, scrollData, scrollResult;
			if(virtualScrollerY === this._oldScrollTop) {
				return
			}
			tableId = "#" + this.id();
			firstRow = this.container().find(tableId + " > tbody > tr:not([data-container]):visible:first");
			lastRow = this.container().find(tableId + " > tbody > tr:not([data-container]):visible:last");
			if(firstRow.length === 0 || lastRow.length === 0) {
				return
			}
			scrollData = {
				virtualScrollerY: this._getScrollContainerScrollTop(),
				deltaScroll: virtualScrollerY - this._oldScrollTop,
				firstRow: firstRow,
				lastRow: lastRow,
				firstRowDataIndex: parseInt(firstRow.attr("data-row-idx"), 0),
				lastRowDataIndex: parseInt(lastRow.attr("data-row-idx"), 0),
				visibleArea: this._getDisplayContainerVisibleArea()
			};
			scrollResult = {action: "SA_INITIAL"};
			if(!this._tryScroll(scrollData, scrollResult)) {
				this._trigger("virtualrendering");
				this._rebuildVirtualRows(scrollData, scrollResult)
			}
			this._correctScrollPosition(this._getTotalRowsCount())
		},
		_getTotalRowsCount: function() {
			return this._getDataView().length
		},
		_tryScroll: function(scrollData, scrollResult) {
			var deltaScroll, firstRow, lastRow, displayContainerHeight, displayContainerScrollTop;
			if(scrollResult === undefined) {
				throw new Error("scrollResult parameter should be provided")
			}
			deltaScroll = scrollData.deltaScroll;
			firstRow = scrollData.firstRow;
			lastRow = scrollData.lastRow;
			displayContainerHeight = this._getDisplayContainerHeight();
			displayContainerScrollTop = this._getDisplayContainerScrollTop();
			if(this._rlp && this._isScrolledToBottomInVirtGrid() && scrollData.lastRowDataIndex < this._totalRowCount) {
				scrollResult.action = "SA_NEED_LAST_PAGE";
				return false
			}
			if(deltaScroll > 0) {
				if(lastRow[0].offsetTop + lastRow.outerHeight() >= displayContainerScrollTop + deltaScroll + displayContainerHeight || isNaN(scrollData.lastRowDataIndex) || scrollData.lastRowDataIndex >= this._getLastVisibleDataRecordIndex()) {
					this._setDisplayContainerScrollTop(displayContainerScrollTop + deltaScroll);
					scrollResult.action = "SA_SUCCESSFUL";
					return true
				}
				if(deltaScroll <= this._avgRowHeight * this._virtualRowCount) {
					if(deltaScroll + displayContainerHeight > this._avgRowHeight * this._virtualRowCount) {
						scrollResult.action = "SA_NEED_SOME_PAGE";
						return false
					}
					scrollResult.action = "SA_NEED_NEXT_PAGE";
					return false
				}
			}
			if(deltaScroll < 0) {
				if(firstRow[0].offsetTop <= displayContainerScrollTop + deltaScroll || scrollData.firstRowDataIndex === 0) {
					this._setDisplayContainerScrollTop(displayContainerScrollTop + deltaScroll);
					scrollResult.action = "SA_SUCCESSFUL";
					return true
				}
				if(Math.abs(deltaScroll) <= this._avgRowHeight * this._virtualRowCount) {
					scrollResult.action = "SA_NEED_PREV_PAGE";
					return false
				}
			}
			scrollResult.action = "SA_NEED_SOME_PAGE";
			return false
		},
		_getDataView: function() {
			return this.dataSource.dataView()
		},
		_isScrolledToBottomInVirtGrid: function() {
			var scrlCntnr = this._scrollContainer();
			return this._getScrollContainerScrollTop() + 5 >= scrlCntnr[0].scrollHeight - scrlCntnr.innerHeight()
		},
		_rebuildVirtualRows: function(scrollData, scrollResult) {
			var noCancel, virtualScrollerY, deltaScroll, tableId, visibleArea, tbody, scrlCntnr, oAvgRowHeight, expandedRowsHeight, trs, i, scrollerHeight, firstVisibleTR, firstVisibleTRRelativeOffset, startIndexToBeLoaded, newFirstVisibleRow, displayContainerScrollTop, maxScrollPos, avgRowHeight, tr, lastVisibleTR, lastVisibleTRIndex, firstVisibleTRIndex, endIndexToBeLoaded, dataRowIndexToBeFirst, hasOverflow;
			noCancel = this._trigger("rebuildingvirtualrows", null, {owner: this, scrollData: scrollData, scrollResult: scrollResult});
			if(noCancel === false) {
				return
			}
			virtualScrollerY = scrollData.virtualScrollerY;
			deltaScroll = scrollData.deltaScroll;
			tableId = "#" + this.id();
			visibleArea = scrollData.visibleArea;
			tbody = this.container().find(tableId + " > tbody");
			expandedRowsHeight = 0;
			trs = this.container().find(tableId + ' > tbody > tr[data-container="true"]');
			for(i = 0; i < trs.length; i++) {
				expandedRowsHeight += $(trs[i]).outerHeight()
			}
			if(expandedRowsHeight > 0) {
				scrollerHeight = this._getScrollContainerHeight();
				this._setScrollContainerHeight(scrollerHeight - expandedRowsHeight)
			}
			if(deltaScroll > 0 && scrollResult.action === "SA_NEED_LAST_PAGE") {
				startIndexToBeLoaded = this._getDataView().length - this._virtualRowCount;
				endIndexToBeLoaded = startIndexToBeLoaded + this._virtualRowCount - 1;
				tbody.empty();
				this._startRowIndex = startIndexToBeLoaded;
				this._startColIndex = 0;
				this._renderRecords(startIndexToBeLoaded, endIndexToBeLoaded);
				if(!this._persistVirtualScrollTop) {
					this._setDisplayContainerScrollTop(1e4)
				}
			}
			if(deltaScroll > 0 && scrollResult.action === "SA_NEED_NEXT_PAGE") {
				firstVisibleTR = this._getFirstVisibleTR(visibleArea);
				firstVisibleTRRelativeOffset = Math.abs(firstVisibleTR[0].offsetTop - visibleArea.top);
				startIndexToBeLoaded = parseInt(firstVisibleTR.attr("data-row-idx"), 0);
				dataRowIndexToBeFirst = startIndexToBeLoaded;
				endIndexToBeLoaded = parseInt(this._virtualRowCount, 0) + startIndexToBeLoaded - 1;
				hasOverflow = false;
				if(endIndexToBeLoaded > this._getDataView().length - 1) {
					endIndexToBeLoaded = this._getDataView().length - 1;
					startIndexToBeLoaded = endIndexToBeLoaded - this._virtualRowCount + 1;
					hasOverflow = true
				}
				tbody.empty();
				this._startRowIndex = startIndexToBeLoaded;
				this._startColIndex = 0;
				this._renderRecords(startIndexToBeLoaded, endIndexToBeLoaded);
				if(hasOverflow) {
					tr = this.container().find(tableId + " > tbody > tr[data-row-idx='" + dataRowIndexToBeFirst + "']");
					firstVisibleTRRelativeOffset = tr[0].offsetTop + firstVisibleTRRelativeOffset
				}
				this._setDisplayContainerScrollTop(firstVisibleTRRelativeOffset + deltaScroll)
			}
			if(deltaScroll < 0 && scrollResult.action === "SA_NEED_PREV_PAGE") {
				lastVisibleTR = this._getLastVisibleTR(visibleArea);
				lastVisibleTRIndex = parseInt(lastVisibleTR.attr("data-row-idx"), 0);
				firstVisibleTR = this._getFirstVisibleTR(visibleArea);
				firstVisibleTRIndex = parseInt(firstVisibleTR.attr("data-row-idx"), 0);
				endIndexToBeLoaded = lastVisibleTRIndex;
				startIndexToBeLoaded = endIndexToBeLoaded - parseInt(this._virtualRowCount, 0) + 1;
				if(startIndexToBeLoaded < 0) {
					startIndexToBeLoaded = 0;
					endIndexToBeLoaded = startIndexToBeLoaded + this._virtualRowCount - 1
				}
				tbody.empty();
				this._startRowIndex = startIndexToBeLoaded;
				this._renderRecords(startIndexToBeLoaded, endIndexToBeLoaded);
				tableId = "#" + this.id();
				newFirstVisibleRow = this.container().find(tableId + ' > tbody > tr[data-row-idx="' + firstVisibleTRIndex + '"]');
				this._setDisplayContainerScrollTop(newFirstVisibleRow[0].offsetTop + deltaScroll)
			}
			if(scrollResult.action === "SA_NEED_SOME_PAGE") {
				startIndexToBeLoaded = Math.floor(virtualScrollerY / this._avgRowHeight);
				scrollerHeight = this._getScrollContainerHeight();
				if(($.ig.util.isIE || this._setMaxHeightForScrollCntnr || this._rlp) && this._totalRowCount * this._avgRowHeight >= scrollerHeight + 2) {
					if(this._isScrolledToBottomInVirtGrid()) {
						startIndexToBeLoaded = this._getDataView().length - this._virtualRowCount
					} else {
						startIndexToBeLoaded = Math.ceil(virtualScrollerY / scrollerHeight * this._totalRowCount)
					}
				}
				endIndexToBeLoaded = startIndexToBeLoaded + this._virtualRowCount - 1;
				if(startIndexToBeLoaded < 0) {
					startIndexToBeLoaded = 0;
					endIndexToBeLoaded = startIndexToBeLoaded + this._virtualRowCount - 1
				}
				if(endIndexToBeLoaded >= this._getDataView().length - 1) {
					endIndexToBeLoaded = this._getDataView().length - 1;
					startIndexToBeLoaded = endIndexToBeLoaded - this._virtualRowCount + 1
				}
				tbody.empty();
				this._startRowIndex = startIndexToBeLoaded;
				this._renderRecords(startIndexToBeLoaded, endIndexToBeLoaded);
				displayContainerScrollTop = 0;
				maxScrollPos = scrollerHeight - this._getDisplayContainerHeight();
				if(maxScrollPos - 3 <= virtualScrollerY && virtualScrollerY <= maxScrollPos + 3) {
					displayContainerScrollTop = 1e4
				}
				if(!this._persistVirtualScrollTop) {
					this._setDisplayContainerScrollTop(displayContainerScrollTop)
				}
			}
			avgRowHeight = this._calculateAvgRowHeight();
			if(avgRowHeight > this._avgRowHeight) {
				oAvgRowHeight = this._avgRowHeight;
				this._avgRowHeight = avgRowHeight;
				this._trigger("avgRowHeightChanged", null, {owner: this, oAvgRowHeight: oAvgRowHeight, avgRowHeight: this._avgRowHeight})
			}
			this._trigger("virtualrecordsrender", null, {owner: this, tbody: tbody, dom: this._virtualDom})
		},
		_correctScrollPosition: function(totalRowCount) {
			var scrollTop, maxScrollPos, tableId, firstRow, firstRowDataIndex, lastRow, lastRowDataIndex, visibleArea, tbody, rowsLeft, displayContainerScrollTop, targetRow, delta;
			scrollTop = this._getScrollContainerScrollTop();
			maxScrollPos = this._getScrollContainerHeight() - this._getDisplayContainerHeight();
			tableId = "#" + this.id();
			firstRow = this.container().find(tableId + " > tbody > tr:first");
			firstRowDataIndex = parseInt(firstRow.attr("data-row-idx"), 0);
			lastRow = this.container().find(tableId + " > tbody > tr:last");
			lastRowDataIndex = parseInt(lastRow.attr("data-row-idx"), 0);
			visibleArea = this._getDisplayContainerVisibleArea();
			tbody = this.container().find(tableId + " > tbody");
			if(scrollTop === 0) {
				if(visibleArea.top > 0) {
					this._scrollTo(visibleArea.top, true)
				} else if(firstRowDataIndex > 0) {
					this._scrollTo(firstRowDataIndex * this._avgRowHeight, true)
				}
			} else if(scrollTop >= maxScrollPos - 3 && scrollTop <= maxScrollPos + 3) {
				if(visibleArea.bottom < tbody.height() && lastRowDataIndex === totalRowCount - 1) {
					this._scrollTo(this._getScrollContainerScrollTop() - (tbody.height() - visibleArea.bottom), true)
				} else if(lastRowDataIndex < totalRowCount - 1) {
					rowsLeft = totalRowCount - lastRowDataIndex;
					this._setScrollContainerHeight(this._getScrollContainerHeight() + rowsLeft * this._avgRowHeight)
				}
			}
			displayContainerScrollTop = this._getDisplayContainerScrollTop();
			if(displayContainerScrollTop === 0 && firstRowDataIndex === 0 && this._getScrollContainerScrollTop() !== 0) {
				if(!this._persistVirtualScrollTop) {
					this._setScrollContainerHeight(this._totalRowCount * this._avgRowHeight);
					this._scrollTo(this._getScrollContainerScrollTop(), false)
				} else {
					this._scrollTo(0, true)
				}
			}
			if(displayContainerScrollTop === tbody.height() - this._getDisplayContainerHeight() && lastRowDataIndex === totalRowCount - 1) {
				this._scrollTo(this._getScrollContainerHeight(), true)
			}
			if(this._virtualScrollToIndex !== undefined && this._virtualScrollToIndex !== null) {
				targetRow = this.container().find(tableId + " > tbody > tr[data-row-idx=" + this._virtualScrollToIndex + "]");
				delta = 0;
				if(targetRow.length === 1 && firstRowDataIndex !== this._virtualScrollToIndex) {
					delta = targetRow.offset().top - firstRow.offset().top
				}
				this._virtualScrollToIndex = null;
				if(delta > 0) {
					this._vdisplaycontainer().scrollTop(delta)
				}
			}
		},
		_scrollTo: function(scrollTop, suppressScrollEvent) {
			if(suppressScrollEvent) {
				this._suppressScroll = true
			}
			this._setScrollContainerScrollTop(scrollTop)
		},
		_getFirstVisibleTR: function(visibleArea) {
			var tableId = "#" + this.element[0].id, firstVisibleTR, visibleAreaTop = visibleArea.top;
			$(tableId + " > tbody > tr:visible").each(function() {
				firstVisibleTR = $(this);
				if(this.offsetTop + firstVisibleTR.height() > visibleAreaTop) {
					return false
				}
			});
			return firstVisibleTR
		},
		_getLastVisibleTR: function(visibleArea) {
			var tableId = "#" + this.id(), lastVisibleTR;
			lastVisibleTR = this.container().find(tableId + " > tbody > tr:visible").filter(function() {
				return this.offsetTop < visibleArea.bottom
			}).last();
			return lastVisibleTR
		},
		_determineVirtualRowCount: function() {
			var div, rowNumber = 10, ds, rows = "", html, i, height, rrFunc, avgRowHeight, displayContainerHeight, rowsPerPage, result, $colgroup;
			ds = this._getDataView();
			if(rowNumber > ds.length) {
				rowNumber = ds.length
			}
			div = $('<div class="' + this.css.gridClasses + " " + this.css.baseClass + '"></div>)').appendTo("body").css({position: "absolute", top: -1800, left: -1800, visibility: "hidden"});
			if(this._rlp) {
				rrFunc = this._renderRecordFromLayout
			} else {
				rrFunc = this._renderRecord
			}
			for(i = 0; i < rowNumber; i++) {
				rows += rrFunc.apply(this, [ds[i], i])
			}
			html = '<table cellpadding="0" cellspacing="0" border="0" class="' + (this._isMultiRowGrid() ? this.css.mrlGridTableClass : this.css.gridTableClass) + '">';
			$colgroup = this.element.children("colgroup");
			if($colgroup.length) {
				html += $colgroup[0].outerHTML
			}
			html += '<tbody role="rowgroup">' + rows + "</tbody></table>";
			div.html(html);
			height = div.height();
			avgRowHeight = height / rowNumber;
			displayContainerHeight = this._getDisplayContainerHeight();
			rowsPerPage = displayContainerHeight / avgRowHeight;
			result = Math.ceil(rowsPerPage * 3);
			div.remove();
			this._fireInternalEvent("_virtRowCountDetermined", result);
			return result
		},
		_getTotalRowCount: function() {
			return this.dataSource.dataView().length
		},
		_renderVirtualRecordsContinuous: function() {
			var dvLen, firstVisibleTRIndex, oAvgRowHeight, endIndexToBeLoaded, lastVisibleRow, isScrolledToBottom;
			this._totalRowCount = this._getTotalRowCount();
			this._oldScrollTop = 0;
			if(this._totalRowCount === 0) {
				this._setScrollContainerHeight(0);
				this._virtualDom = []
			}
			this._virtualRowCount = this._determineVirtualRowCount();
			if(this._virtualRowCount > this._totalRowCount) {
				this._virtualRowCount = this._totalRowCount
			}
			if(!this._persistVirtualScrollTop) {
				this._scrollTo(0, true);
				this._startRowIndex = 0;
				this._renderRecords(this._virtualRowCount - 1);
				oAvgRowHeight = this._avgRowHeight;
				this._avgRowHeight = this._calculateAvgRowHeight();
				if(this._avgRowHeight !== oAvgRowHeight) {
					this._trigger("avgRowHeightChanged", null, {owner: this, oAvgRowHeight: oAvgRowHeight, avgRowHeight: this._avgRowHeight})
				}
				this._setScrollContainerHeight(this._totalRowCount * this._avgRowHeight)
			} else {
				dvLen = this._getDataView().length;
				if(this._prevFirstVisibleTRIndex || this._prevFirstVisibleTRIndex === 0) {
					firstVisibleTRIndex = this._prevFirstVisibleTRIndex
				} else {
					firstVisibleTRIndex = 0
				}
				if(firstVisibleTRIndex >= dvLen - 1) {
					endIndexToBeLoaded = dvLen - 1;
					firstVisibleTRIndex = dvLen - this._virtualRowCount - 1
				} else {
					endIndexToBeLoaded = parseInt(this._virtualRowCount, 0) + firstVisibleTRIndex
				}
				if(endIndexToBeLoaded > dvLen - 1) {
					endIndexToBeLoaded = dvLen - 1;
					firstVisibleTRIndex = dvLen - this._virtualRowCount - 1
				}
				if(firstVisibleTRIndex < 0) {
					firstVisibleTRIndex = 0
				}
				this._renderRecords(firstVisibleTRIndex, endIndexToBeLoaded);
				lastVisibleRow = this.container().find("#" + this.id() + " > tbody > tr:visible:last");
				isScrolledToBottom = this._getScrollContainerScrollTop() + 5 > this._scrollContainer()[0].scrollHeight - this._scrollContainer().innerHeight();
				if(endIndexToBeLoaded === dvLen - 1 && isScrolledToBottom) {
					this._setDisplayContainerScrollTop(lastVisibleRow.length ? lastVisibleRow[0].offsetTop : 0)
				} else {
					this._setDisplayContainerScrollTop(this._prevFirstVisibleTROffset)
				}
			}
		},
		_rerenderVirtualRecordsContinuous: function() {
			var tableId = "#" + this.id(), lastRow, lastRowDataIndex;
			lastRow = this.container().find(tableId + " > tbody > tr:last");
			lastRowDataIndex = parseInt(lastRow.attr("data-row-idx"), 0);
			this._startRowIndex = this._startRowIndex || 0;
			this._renderRecords(this._startRowIndex, lastRowDataIndex);
			this._trigger("virtualrecordsrender", null, {owner: this, tbody: this.element.children("tbody"), dom: this._virtualDom})
		},
		_buildVirtualDomForContinuousVirtualization: function() {
			var rows, cells, i, j;
			if(this.options.virtualization === true && this.options.virtualizationMode === "continuous") {
				this._virtualDom = [];
				rows = this.container().find("#" + this.id() + " > tbody > tr");
				for(i = 0; i < rows.length; i++) {
					this._virtualDom[i] = [];
					cells = rows[i].children;
					for(j = 0; j < cells.length; j++) {
						this._virtualDom[i][j] = cells[j]
					}
				}
				this._updateVirtualScrollContainer()
			}
		},
		_isFixedElement: function($td) {
			if(this.hasFixedColumns() && $td.closest("div").attr("data-fixed-container") !== undefined) {
				return true
			}
			return false
		},
		getColumnByTD: function($td) {
			if(!($td instanceof jQuery)) {
				$td = $($td)
			}
			var $tr = $td.closest("tr"), describedBy = $td.attr("aria-describedBy"), column, res = {}, visibleInd, i;
			if($tr.length === 0) {
				return null
			}
			if($td.attr("data-parent") || $td.attr("data-skip")) {
				return null
			}
			if(!describedBy) {
				return {column: this._visibleColumns()[0], index: 0}
			}
			describedBy = describedBy.split(" ");
			for(i = 0; i < describedBy.length; i++) {
				column = describedBy[i].trim();
				if(column.startsWith(this.id() + "_")) {
					column = this.columnByKey(column.slice(column.indexOf(this.id() + "_") + this.id().length + 1));
					break
				}
			}
			visibleInd = this.getVisibleIndexByKey(column.key, true);
			res = {column: column, index: visibleInd};
			return res
		},
		_clearPersistenceData: function() {
			var topmostGrid = this.element.closest(".ui-iggrid-root").data("igGrid") || this;
			delete topmostGrid.persistenceData
		},
		_savePersistenceData: function(data, feature, layout) {
			var topmostGrid = this, featureId = feature;
			if($.type(layout) === "string" && layout.length > 0) {
				topmostGrid = this.element.closest(".ui-iggrid-root").data("igGrid") || this;
				if(layout !== topmostGrid.element[0].id) {
					featureId = feature + "_" + layout
				}
			}
			topmostGrid.persistenceData = topmostGrid.persistenceData || {};
			topmostGrid.persistenceData[featureId] = data
		},
		_getPersistenceData: function(feature, layout) {
			var topmostGrid = this, featureId = feature;
			if($.type(layout) === "string" && layout.length > 0) {
				topmostGrid = this.element.closest(".ui-iggrid-root").data("igGrid") || this;
				if(layout !== topmostGrid.element[0].id) {
					featureId = feature + "_" + layout
				}
			}
			topmostGrid.persistenceData = topmostGrid.persistenceData || {};
			return topmostGrid.persistenceData[featureId]
		},
		_saveFirstVisibleTRIndex: function() {
			var fvtr = this._getFirstVisibleTR(this._getDisplayContainerVisibleArea());
			if(fvtr && fvtr.length) {
				this._prevFirstVisibleTRIndex = parseInt(fvtr.attr("data-row-idx"), 10);
				this._prevFirstVisibleTROffset = this._getDisplayContainerScrollTop() - fvtr[0].offsetTop
			}
		},
		_getLastVisibleDataRecordIndex: function() {
			return this._getDataView().length - 1
		},
		_revertToInitialState: function() {
			var i, a, attr;
			if(this.element.is("table") && this._initialChildren) {
				this._initialChildren.appendTo(this.element)
			}
			attr = this.element[0].attributes;
			a = [];
			for(i = 0; i < attr.length; i++) {
				if(attr[i].name !== "id") {
					a.push(attr[i].name)
				}
			}
			for(i = 0; i < a.length; i++) {
				this.element.removeAttr(a[i])
			}
			for(i = 0; i < this._initialAttributes.length; i++) {
				if(this._initialAttributes[i].name !== "id") {
					this.element.attr(this._initialAttributes[i].name, this._initialAttributes[i].value)
				}
			}
		},
		_removeDetachedDOM: function(container) {
			if(!container) {
				return
			}
			var colKey, arr, i;
			for(colKey in container) {
				if(container.hasOwnProperty(colKey)) {
					arr = container[colKey];
					for(i = 0; i < arr.length; i++) {
						if(arr[i] && arr[i].length) {
							arr[i].remove()
						}
					}
				}
			}
		},
		_detachEvents: function() {
			var container;
			if(this._cellClickHandler) {
				this.element.unbind({click: this._cellClickHandler});
				this._cellClickHandler = null
			}
			if(this._mouseClickEventHandlers) {
				this.element.unbind(this._mouseClickEventHandlers);
				delete this._mouseClickEventHandlers
			}
			if(this._uiSoftDirtyHandler) {
				this.element.unbind("iggriduisoftdirty", this._uiSoftDirtyHandler);
				this._uiSoftDirtyHandler = null
			}
			if(this._hovEvts) {
				this.element.unbind(this._hovEvts);
				this._hovEvts = null
			}
			if(this._documentEvents) {
				$(document).unbind(this._documentEvents);
				this._documentEvents = null
			}
			container = this.scrollContainer();
			if(!container.length) {
				container = this._vdisplaycontainer()
			}
			container.unbind(".syncScrollContainers");
			this.headersTable().parent().unbind(".syncScrollContainers");
			container = this.footersTable().closest("div");
			container.unbind(".syncScrollContainers");
			this.element.unbind(".setFocusElement")
		},
		_destroyFeatures: function() {
			var i, features = this.options.features, e = this.element;
			if(this._internalFeatures && this._internalFeatures.length) {
				features = features.concat(this._internalFeatures)
			}
			for(i = 0; i < features.length; i++) {
				if(e.data("igGrid" + features[i].name)) {
					e["igGrid" + features[i].name]("destroy")
				}
			}
		},
		destroy: function(notToCallDestroy) {
			var prev = this.container().prev(), prepend = false;
			if(this._scrollHeader && this._hscrollbarcontent().length > 0) {
				this._hscrollbarcontent().unbind("scroll", $.proxy(this._scrollHeader, this))
			}
			if(this.scrollContainer()) {
				this.scrollContainer().unbind("scroll");
				this.scrollContainer().unbind("wheel")
			}
			if(this.dataSource._ajaxRequest && this.dataSource._ajaxRequest.readyState !== 4) {
				this.dataSource._ajaxRequest.abort()
			}
			this._headerInitCallbacks = [];
			this._footerInitCallbacks = [];
			this.tmpDataSource = null;
			if(this._resId) {
				clearInterval(this._resId)
			}
			this._destroyFeatures();
			if(this._detachedContainersInitialized) {
				this._removeDetachedDOM(this._detachedHeaderCells);
				delete this._detachedHeaderCells;
				this._removeDetachedDOM(this._detachedFooterCells);
				delete this._detachedFooterCells;
				delete this._detachedContainersInitialized
			}
			this._detachEvents();
			if(this._isWrapped && this.container().parent().data("igGrid")) {
				this.element = this.container().parent();
				this.element.empty();
				if(notToCallDestroy !== true) {
					$.Widget.prototype.destroy.call(this)
				}
				this._revertToInitialState();
				this.element.trigger(this.events.destroyed, {owner: this});
				return this
			}
			if(prev.length === 0) {
				prev = this.container().parent();
				prepend = true
			}
			this.element.empty();
			if(prepend) {
				prev.prepend(this.element)
			} else {
				this.element.insertAfter(prev)
			}
			if(notToCallDestroy !== true) {
				$.Widget.prototype.destroy.call(this)
			}
			this.container().remove();
			this._container = null;
			this._revertToInitialState();
			if(notToCallDestroy === true) {
				return this
			}
			this.element.trigger(this.events.destroyed, {owner: this});
			return this
		}
	});
	$.extend($.ui.igGrid, {version: "16.1.20161.2270"})
})(jQuery);
/*
 //@ sourceMappingURL=E:\Work\6\967\src\DEV\jQuery\2016.1\Source\ClientUI\js\modules\infragistics.ui.grid.framework.js.map
 */


