﻿/*!@license
* Infragistics.Web.ClientUI data source localization resources 16.1.20161.2270
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function ($) {
	$.ig = $.ig || {};
	if (!$.ig.DataSourceLocale) {
		$.ig.DataSourceLocale = {};
		$.extend($.ig.DataSourceLocale, {
			locale: {
				invalidDataSource: "The supplied data source is invalid. It happens to be a scalar.",
				unknownDataSource: "Cannot determine the data source type. Please specify if it is JSON or XML data.",
				errorParsingArrays: "There was an error parsing the array data and applying the defined data schema: ",
				errorParsingJson: "There was an error parsing the JSON data and applying the defined data schema: ",
				errorParsingXml: "There was an error parsing the XML data and applying the defined data schema: ",
				errorParsingHtmlTable: "There was an error extracting the data from the HTML Table and applying the schema : ",
				errorExpectedTbodyParameter: "Expected a tbody or a table as a parameter.",
				errorTableWithIdNotFound: "The HTML Table with the following ID was not found: ",
				errorParsingHtmlTableNoSchema: "There was an error parsing the Table DOM: ",
				errorParsingJsonNoSchema: "There was an error parsing/evaluating the JSON string: ",
				errorParsingXmlNoSchema: "There was an error parsing the XML string: ",
				errorXmlSourceWithoutSchema: "The supplied data source is an xml document, but there is no defined data schema ($.IgDataSchema) ",
				errorUnrecognizedFilterCondition: " The filter condition that was passed was not recognized: ",
				errorRemoteRequest: "The remote request to fetch data has failed: ",
				errorSchemaMismatch: "The input data doesn't match the schema, the following field couldn't be mapped: ",
				errorSchemaFieldCountMismatch: "The input data doesn't match the schema in terms of number of fields. ",
				errorUnrecognizedResponseType: "The response type was either not set correctly, or it was not possible to detect it automatically. Please set settings.responseDataType and/or settings.responseContentType.",
				hierarchicalTablesNotSupported: "Tables are not supported for HierarchicalSchema",
				cannotBuildTemplate: "The jQuery template could not be built. There are no records present in the data source, and no columns defined.",
				unrecognizedCondition: "Unrecognized filtering condition in the following expression: ",
				fieldMismatch: "The following expression contains an invalid field or filtering condition: ",
				noSortingFields: "There are no fields specified. You need to specify at least one field to sort by, when calling sort().",
				filteringNoSchema: "There is no schema / fields specified. You need to specify a schema with field definitions and types to be able to filter the data source.",
				noSaveChanges: "Saving changes was not successful. Server did not return Success object or returned Success:false.",
				errorUnexpectedCustomFilterFunction: "An unexpected value was provided for a custom filtering function. A function or string is expected."
			}
		})
	}
})(jQuery);
/*
//@ sourceMappingURL=E:\Work\6\967\src\DEV\jQuery\2016.1\Source\ClientUI\js\modules\i18n\infragistics.datasource-en.js.map
*/
/*!@license
* Infragistics.Web.ClientUI common DV widget localization resources 16.1.20161.2270
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function ($) {
	$.ig = $.ig || {};
	if (!$.ig.Chart) {
		$.ig.Chart = {};
		$.extend($.ig.Chart, {
			locale: {
				seriesName: "must specify series name option when setting options.",
				axisName: "must specify axis name option when setting options.",
				invalidLabelBinding: "There is no such value for the labels to bind.",
				invalidSeriesAxisCombination: "Invalid combination of series and axis types: ",
				close: "Close",
				overview: "Overview",
				zoomOut: "Zoom Out",
				zoomIn: "Zoom In",
				resetZoom: "Reset Zoom",
				seriesUnsupportedOption: "the current series type does not support the option: ",
				seriesTypeNotLoaded: "the JavaScript file containing the requested series type has not been loaded or the series type is invalid: ",
				axisTypeNotLoaded: "the JavaScript file containing the requested axis type has not been loaded or the axis type is invalid: ",
				axisUnsupportedOption: "the current axis type does not support the option: "
			}
		})
	}
})(jQuery);
/*
//@ sourceMappingURL=E:\Work\6\967\src\DEV\jQuery\2016.1\Source\ClientUI\js\modules\i18n\infragistics.dvcommonwidget-en.js.map
*/
/*!@license
* Infragistics.Web.ClientUI shared localization resources 16.1.20161.2270
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function ($) {
	$.ig = $.ig || {};
	if (!$.ig.SharedLocale) {
		$.ig.SharedLocale = {};
		$.extend($.ig.SharedLocale, {locale: {}})
	}
})(jQuery);
/*
//@ sourceMappingURL=E:\Work\6\967\src\DEV\jQuery\2016.1\Source\ClientUI\js\modules\i18n\infragistics.shared-en.js.map
*/
/*!@license
* Infragistics.Web.ClientUI templating localization resources 16.1.20161.2270
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function ($) {
	$.ig = $.ig || {};
	if (!$.ig.Templating) {
		$.ig.Templating = {};
		$.extend($.ig.Templating, {locale: {undefinedArgument: "An error has occurred while trying to retrieve data source property: "}})
	}
})(jQuery);
/*
//@ sourceMappingURL=E:\Work\6\967\src\DEV\jQuery\2016.1\Source\ClientUI\js\modules\i18n\infragistics.templating-en.js.map
*/
/*!@license
* Infragistics.Web.ClientUI Barcode localization resources 16.1.20161.2270
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function ($) {
	$.ig = $.ig || {};
	if (!$.ig.Barcode) {
		$.ig.Barcode = {
			locale: {
				aILength: "The AI should have at least 2 digits.",
				badFormedUCCValue: "The Data property value of the UCC barcode is not well formed. It should look like (AI)GTIN.",
				code39_NonNumericError: "The character '{0}' is invalid for CODE39 Data property value. The valid ones are: {1}",
				countryError: "Error converting Country property value code. It should be a numeric value.",
				emptyValueMsg: "The Data property value is empty.",
				encodingError: "Error in the convertion. Refer to the documentation for the valid property values.",
				errorMessageText: "Invalid value! Reference the documentation for the valid barcode Data property value structure.",
				gS1ExMaxAlphanumNumber: "The GS1 DataBar Expanded family can encode up to 41 alphanumeric characters.",
				gS1ExMaxNumericNumber: "The GS1 DataBar Expanded family can encode up to 74 numeric characters.",
				gS1Length: "The GS1 DataBar Data property value is used for GTIN - 8, 12, 13, 14 and its length should be 7, 11, 12 or 13. The last digit is reserved for a check sum.",
				gS1LimitedFirstChar: "GS1 DataBar Limited barcode should have 0 or 1 in the first digit. When encoding GTIN-14 data with an Indicator value greater than 1, Omnidirectional, Stacked, Stacked Omnidirectional or Truncated barcode type must be used.",
				i25Length: "The Interleaved2of5 barcode should have even number of digits. You can put 0 in the front of it if they are odd number.",
				intelligentMailLength: "The length of the Intelligent Mail barcode Data property value should be 20, 25, 29 or 31 characters - 20 digits track code (2 for barcode identifier, 3 for service type identifier, 6 or 9 for mailer identifier and 9 or 6 for serial number) and 0, 5, 9 or 11 zip code symbols.",
				intelligentMailSecondDigit: "The second digit should be in the range of 0-4.",
				invalidAI: "Invalid Application Identifier element strings. Please, ensure that the AI string in the Data property value is well formed.",
				invalidCharacter: "The character '{0}' is invalid for the current barcode type. The valid ones are: {1}",
				invalidDimension: "The barcode dimension cannot be determined because of an incorrect combination of Stretch, BarsFillMode and XDimension property values.",
				invalidHeight: "This number of barcode grid rows ({0}) cannot fit in such a height ({1} pixel(s)).",
				invalidLength: "The barcode Data property value should have {0} digit(s).",
				invalidPostalCode: "Invalid PostalCode value - Mode 2 encodes up to 9 digits postal code (U.S. zip code) while Mode 3 encodes up to 6 characters alpha-numeric code.",
				invalidPropertyValue: "The {0} property value should be in the range of {1}-{2}.",
				invalidVersion: "The SizeVersion propery value number does not generate enough cells to encode the data with the current encoding mode and error correction level.",
				invalidWidth: "This number of barcode grid columns ({0}) cannot fit in such a width ({1} pixel(s)). Check the XDimension or/and the WidthToHeightRatio property values.",
				invalidXDimensionValue: "The XDimension property value should be in the range of {0} to {1} for the current barcode type.",
				maxLength: "The length {0} of the text exceeds the maximum encodable for the current type of barcode. It could encode max {1} characters.",
				notSupportedEncoding: "The encoding corresponding under the {0} {1} is not supported.",
				pDF417InvalidRowsColumnsCombination: "The codewords (data & error correction) are more than can be encoded in symbol with a matrix {0}x{1}.",
				primaryMessageError: "Cannot extract the primary message from the Data property value. Refer to the documentation for its structure.",
				serviceClassError: "Error converting service class. It should be a numeric value.",
				smallSize: "Cannot fit the grid in Size({0}, {1}) with the defined Stretch settings.",
				unencodableCharacter: "The character '{0}' cannot be encoded.",
				uPCEFirstDigit: "The first UPCE digit shall always be zero by specification.",
				warningString: "Barcode warning: ",
				wrongCompactionMode: "The Data property value cannot be compacted with {0} mode.",
				notLoadedEncoding: "The {0} encoding is not loaded."
			}
		}
	}
})(jQuery);
/*
//@ sourceMappingURL=E:\Work\6\967\src\DEV\jQuery\2016.1\Source\ClientUI\js\modules\i18n\infragistics.ui.barcode-en.js.map
*/
/*!@license
* Infragistics.Web.ClientUI Combo localization resources 16.1.20161.2270
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function ($) {
	$.ig = $.ig || {};
	if (!$.ig.Combo) {
		$.ig.Combo = {
			locale: {
				noMatchFoundText: "No matches found",
				dropDownButtonTitle: "Show drop-down",
				clearButtonTitle: "Clear value",
				placeHolder: "select...",
				notSuported: "Operation is not supported.",
				errorNoSupportedTextsType: "A different filtering text is required. Provide a value that is either a string or an array of strings.",
				errorUnrecognizedHighlightMatchesMode: "A different highlight matches mode is required. Choose a value between 'multi', 'contains', 'startsWith', 'full' and 'null'.",
				errorIncorrectGroupingKey: "Grouping key is not correct."
			}
		}
	}
})(jQuery);
/*
//@ sourceMappingURL=E:\Work\6\967\src\DEV\jQuery\2016.1\Source\ClientUI\js\modules\i18n\infragistics.ui.combo-en.js.map
*/
/*!@license
* Infragistics.Web.ClientUI Dialog localization resources 16.1.20161.2270
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function ($) {
	$.ig = $.ig || {};
	if (!$.ig.Dialog) {
		$.ig.Dialog = {
			locale: {
				closeButtonTitle: "Close",
				minimizeButtonTitle: "Minimize",
				maximizeButtonTitle: "Maximize",
				pinButtonTitle: "Pin",
				unpinButtonTitle: "Unpin",
				restoreButtonTitle: "Restore"
			}
		}
	}
})(jQuery);
/*
//@ sourceMappingURL=E:\Work\6\967\src\DEV\jQuery\2016.1\Source\ClientUI\js\modules\i18n\infragistics.ui.dialog-en.js.map
*/
/*!@license
* Infragistics.Web.ClientUI Doughnut Chart localization resources 16.1.20161.2270
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function ($) {
	$.ig = $.ig || {};
	if (!$.ig.igDoughnutChart) {
		$.ig.igDoughnutChart = {};
		$.extend($.ig.igDoughnutChart, {locale: {invalidBaseElement: " is not supported as base element. Use DIV instead."}})
	}
})(jQuery);
/*
//@ sourceMappingURL=E:\Work\6\967\src\DEV\jQuery\2016.1\Source\ClientUI\js\modules\i18n\infragistics.ui.doughnutchart-en.js.map
*/
/*!@license
* Infragistics.Web.ClientUI Editors localization resources 16.1.20161.2270
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function ($) {
	$.ig = $.ig || {};
	if (!$.ig.Editor) {
		$.ig.Editor = {
			locale: {
				spinUpperTitle: "Increment",
				spinLowerTitle: "Decrement",
				buttonTitle: "Show list",
				clearTitle: "Clear value",
				ariaTextEditorFieldLabel: "Text Editor",
				ariaNumericEditorFieldLabel: "Numeric Editor",
				ariaCurrencyEditorFieldLabel: "Currency Editor",
				ariaPercentEditorFieldLabel: "Percent Editor",
				ariaMaskEditorFieldLabel: "Mask Editor",
				ariaDateEditorFieldLabel: "Date Editor",
				ariaDatePickerFieldLabel: "Date Picker",
				ariaSpinUpButton: "Spin up",
				ariaSpinDownButton: "Spin down",
				ariaDropDownButton: "Drop down",
				ariaClearButton: "Clear",
				ariaCalendarButton: "Calendar",
				datePickerButtonTitle: "Show calendar",
				updateModeUnsupportedValue: 'updateMode requires a different configuration. Choose a value between "onChange" and "immediate".',
				updateModeNotSupported: 'updateMode property supports only "onchange" mode for igMaskEditor, igDateEditor and igDatePicker extensions',
				renderErrMsg: "A base editor cannot be instantiated directly. Try with a text, numeric, date, or other editor.",
				multilineErrMsg: 'textArea requires a different configuration. The textMode should be set to "multiline".',
				targetNotSupported: "This target element is not supported.",
				placeHolderNotSupported: "The placeholder attribute is not supported by your browser.",
				allowedValuesMsg: "Pick a value from the drop-down list",
				maxLengthErrMsg: "Entry is too long and was trimmed to {0} symbols",
				maxLengthWarningMsg: "Entry reached the maximum length of {0} for this field",
				minLengthErrMsg: "At least {0} characters should be entered",
				maxValErrMsg: "Entry reached the maximum value of {0} for this field",
				minValErrMsg: "Entry reached the minimum value of {0} for this field",
				maxValExceedRevertErrMsg: "Entry exceeded the maximum value of {0} and was reverted to previous one",
				minValExceedRevertErrMsg: "Entry was less than the minimum value of {0} and was reverted to previous one",
				maxValExceedSetErrMsg: "Entry exceeded the maximum value of {0} and was set to the maximum value",
				minValExceedSetErrMsg: "Entry exceeded the minimum value of {0} and was set to the minimum value",
				maxValExceededWrappedAroundErrMsg: "Entry exceeded the maximum value of {0} and was set to the minimum allowed one",
				minValExceededWrappedAroundErrMsg: "Entry was less than the minimum value of {0} and was set to the maximum allowed one",
				btnValueNotSupported: 'A different button value is required. Choose a value between "dropdown", "clear" and "spin".',
				scientificFormatErrMsg: 'A different scientificFormat is required. Choose a value between "E", "e", "E+" and "e+".',
				spinDeltaIsOfTypeNumber: "A different type of spinDelta is required. A positive number should be entered.",
				spinDeltaCouldntBeNegative: "The spinDelta option cannot be negative. A positive number should be entered.",
				spinDeltaContainsExceedsMaxDecimals: "Maximum allowed fractions for spinDelta are set to {0}. Either change MaxDecimals or try to shrink your value.",
				spinDeltaIncorrectFloatingPoint: 'A floating point spinDelta requires a different configuration. Set the dataMode of the editor to either "double" or "float" or set spinDelta to integer.',
				notEditableOptionByInit: "This option cannot be edited after initialization. Its value should be set during initialization.",
				numericEditorNoSuchMethod: "The numeric editor does not support this method.",
				numericEditorNoSuchOption: "The numeric editor does not support this option.",
				displayFactorIsOfTypeNumber: "displayFactor requires a different value. Its value should be set to 1 or 100 as a number.",
				displayFactorAllowedValue: "displayFactor requires a different value. Its value should be set to 1 or 100 as a number.",
				instantiateCheckBoxErrMsg: "igCheckboxEditor requires a different element. Use INPUT, SPAN or DIV element.",
				cannotParseNonBoolValue: "igCheckboxEditor requires a different value. A boolean value should be provided.",
				cannotSetNonBoolValue: "igCheckboxEditor requires a different value. A boolean value should be provided.",
				maskEditorNoSuchMethod: "The mask editor does not support this method.",
				datePickerEditorNoSuchMethod: "The date editor does not support this method.",
				datePickerNoSuchMethodDropDownContainer: "The date editor does not support this method. Use 'getCalendar' one instead.",
				buttonTypeIsDropDownOnly: "Datepicker allows only dropdown and clear values for the buttonType option.",
				cannotSetRuntime: "This option can not be set runtime",
				invalidDate: "Invalid date",
				maskMessage: "All required positions should be filled",
				dateMessage: "A valid date should be entered",
				centuryThresholdValidValues: "centuryThreshold property shoud be between 0 and 99. The value has been reverted to defaults.",
				noListItemsNoButton: "No spin or dropdown button is rendered because there are no listitems."
			}
		}
	}
})(jQuery);
/*
//@ sourceMappingURL=E:\Work\6\967\src\DEV\jQuery\2016.1\Source\ClientUI\js\modules\i18n\infragistics.ui.editors-en.js.map
*/
/*!@license
* Infragistics.Web.ClientUI Grid localization resources 16.1.20161.2270
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function ($) {
	$.ig = $.ig || {};
	if (!$.ig.Grid) {
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
* Infragistics.Web.ClientUI HTML Editor localization resources 16.1.20161.2270
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function ($) {
	$.ig = $.ig || {};
	if (!$.ig.HtmlEditor) {
		$.ig.HtmlEditor = {};
		$.extend($.ig.HtmlEditor, {
			locale: {
				boldButtonTitle: "Bold",
				italicButtonTitle: "Italic",
				underlineButtonTitle: "Underline",
				strikethroughButtonTitle: "Strikethrough",
				increaseFontSizeButtonTitle: "Increase Font Size",
				decreaseFontSizeButtonTitle: "Decrease Font Size",
				alignTextLeftButtonTitle: "Align Text Left",
				alignTextRightButtonTitle: "Align Text Right",
				alignTextCenterButtonTitle: "Center",
				justifyButtonTitle: "Justify",
				bulletsButtonTitle: "Bullets",
				numberingButtonTitle: "Numbering",
				decreaseIndentButtonTitle: "Decrease Indent",
				increaseIndentButtonTitle: "Increase Indent",
				insertPictureButtonTitle: "Insert Picture",
				fontColorButtonTitle: "Font Color",
				textHighlightButtonTitle: "Text Highlight Color",
				insertLinkButtonTitle: "Insert Hyperlink",
				insertTableButtonTitle: "Table",
				addRowButtonTitle: "Add Row",
				removeRowButtonTitle: "Remove Row",
				addColumnButtonTitle: "Add Column",
				removeColumnButtonTitle: "Remove Column",
				inserHRButtonTitle: "Insert Horizontal Rule",
				viewSourceButtonTitle: "View Source",
				cutButtonTitle: "Cut",
				copyButtonTitle: "Copy",
				pasteButtonTitle: "Paste",
				undoButtonTitle: "Undo",
				redoButtonTitle: "Redo",
				imageUrlDialogText: "Image URL:",
				imageAlternativeTextDialogText: "Alternative Text:",
				imageWidthDialogText: "Image Width:",
				imageHeihgtDialogText: "Image Height:",
				linkNavigateToUrlDialogText: "Navigate to URL:",
				linkDisplayTextDialogText: "Display Text:",
				linkOpenInDialogText: "Open In:",
				linkTargetNewWindowDialogText: "New Window",
				linkTargetSameWindowDialogText: "Same Window",
				linkTargetParentWindowDialogText: "Parent Window",
				linkTargetTopmostWindowDialogText: "Topmost Window",
				applyButtonTitle: "Apply",
				cancelButtonTitle: "Cancel",
				defaultToolbars: {
					textToolbar: "text manipulation toolbar",
					formattingToolbar: "text formatting toolbar",
					insertObjectToolbar: "objects insertion toolbar",
					copyPasteToolbar: "copy/paste toolbar"
				},
				fontNames: {
					win: [{text: "Times New Roman", value: "Times New Roman"}, {
						text: "Arial",
						value: "Arial"
					}, {text: "Arial Black", value: "Arial Black"}, {
						text: "Helvetica",
						value: "Helvetica"
					}, {text: "Comic Sans MS", value: "Comic Sans MS"}, {
						text: "Courier New",
						value: "Courier New"
					}, {text: "Georgia", value: "Georgia"}, {text: "Impact", value: "Impact"}, {
						text: "Lucida Console",
						value: "Lucida Console"
					}, {text: "Lucida Sans Unicode", value: "Lucida Sans Unicode"}, {
						text: "Palatino Linotype",
						value: "Palatino Linotype"
					}, {text: "Tahoma", value: "Tahoma"}, {
						text: "Trebuchet MS",
						value: "Trebuchet MS"
					}, {text: "Verdana", value: "Verdana"}, {text: "Symbol", value: "Symbol"}, {
						text: "Webdings",
						value: "Webdings"
					}, {text: "Wingdings", value: "Wingdings"}, {
						text: "MS Sans Serif",
						value: "MS Sans Serif"
					}, {text: "MS Serif", value: "MS Serif"}],
					mac: [{text: "Times New Roman", value: "Times New Roman"}, {
						text: "Arial",
						value: "Arial"
					}, {text: "Arial Black", value: "Arial Black"}, {
						text: "Helvetica",
						value: "Helvetica"
					}, {text: "Comic Sans MS", value: "Comic Sans MS"}, {
						text: "Courier New",
						value: "Courier New"
					}, {text: "Georgia", value: "Georgia"}, {text: "Impact", value: "Impact"}, {
						text: "Monaco",
						value: "Monaco"
					}, {text: "Lucida Grande", value: "Lucida Grande"}, {
						text: "Book Antiqua",
						value: "Book Antiqua"
					}, {text: "Geneva", value: "Geneva"}, {text: "Trebuchet MS", value: "Trebuchet"}, {
						text: "Verdana",
						value: "Verdana"
					}, {text: "Symbol", value: "Symbol"}, {text: "Webdings", value: "Webdings"}, {
						text: "Zapf Dingbats",
						value: "Zapf Dingbats"
					}, {text: "New York", value: "New York"}]
				},
				fontSizes: [{text: "1", value: "7.5 pt"}, {text: "2", value: "10 pt"}, {
					text: "3",
					value: "12 pt"
				}, {text: "4", value: "13.5 pt"}, {text: "5", value: "18 pt"}, {text: "6", value: "24 pt"}, {
					text: "7",
					value: "36 pt"
				}],
				formatsList: [{text: "h1", value: "Heading 1"}, {text: "h2", value: "Heading 2"}, {
					text: "h3",
					value: "Heading 3"
				}, {text: "h4", value: "Heading 4"}, {text: "h5", value: "Heading 5"}, {
					text: "h6",
					value: "Heading 6"
				}, {text: "p", value: "Normal"}]
			}
		})
	}
})(jQuery);
/*
//@ sourceMappingURL=E:\Work\6\967\src\DEV\jQuery\2016.1\Source\ClientUI\js\modules\i18n\infragistics.ui.htmleditor-en.js.map
*/
/*!@license
* Infragistics.Web.ClientUI Notifier localization resources 16.1.20161.2270
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function ($) {
	$.ig = $.ig || {};
	if (!$.ig.Notifier) {
		$.ig.Notifier = {};
		$.extend($.ig.Notifier, {locale: {successMsg: "Success", errorMsg: "Error", warningMsg: "Warning"}})
	}
})(jQuery);
/*
//@ sourceMappingURL=E:\Work\6\967\src\DEV\jQuery\2016.1\Source\ClientUI\js\modules\i18n\infragistics.ui.notifier-en.js.map
*/
/*!@license
* Infragistics.Web.ClientUI Pivot Shared localization resources 16.1.20161.2270
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function ($) {
	$.ig = $.ig || {};
	if (!$.ig.PivotShared) {
		$.ig.PivotShared = {};
		$.extend($.ig.PivotShared, {
			locale: {
				invalidDataSource: "The passed data source either null or not supported.",
				measureList: "Measures",
				ok: "OK",
				cancel: "Cancel",
				addToMeasures: "Add to Measures",
				addToFilters: "Add to Filters",
				addToColumns: "Add to Columns",
				addToRows: "Add to Rows"
			}
		})
	}
})(jQuery);
/*
//@ sourceMappingURL=E:\Work\6\967\src\DEV\jQuery\2016.1\Source\ClientUI\js\modules\i18n\infragistics.ui.pivot.shared-en.js.map
*/
/*!@license
* Infragistics.Web.ClientUI Pivot Data Selector localization resources 16.1.20161.2270
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function ($) {
	$.ig = $.ig || {};
	if (!$.ig.PivotDataSelector) {
		$.ig.PivotDataSelector = {};
		$.extend($.ig.PivotDataSelector, {
			locale: {
				invalidBaseElement: " is not supported as base element. Use DIV instead.",
				catalog: "Catalog",
				cube: "Cube",
				measureGroup: "Measure Group",
				measureGroupAll: "(All)",
				rows: "Rows",
				columns: "Columns",
				measures: "Measures",
				filters: "Filters",
				deferUpdate: "Defer Update",
				updateLayout: "Update Layout",
				selectAll: "Select All"
			}
		})
	}
})(jQuery);
/*
//@ sourceMappingURL=E:\Work\6\967\src\DEV\jQuery\2016.1\Source\ClientUI\js\modules\i18n\infragistics.ui.pivotdataselector-en.js.map
*/
/*!@license
* Infragistics.Web.ClientUI Pivot Grid localization resources 16.1.20161.2270
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function ($) {
	$.ig = $.ig || {};
	if (!$.ig.PivotGrid) {
		$.ig.PivotGrid = {};
		$.extend($.ig.PivotGrid, {
			locale: {
				filtersHeader: "Drop Filter Fields Here",
				measuresHeader: "Drop Data Items Here",
				rowsHeader: "Drop Row Fields Here",
				columnsHeader: "Drop Column Fields Here",
				disabledFiltersHeader: "Filter Fields",
				disabledMeasuresHeader: "Data Items",
				disabledRowsHeader: "Row Fields",
				disabledColumnsHeader: "Column Fields",
				noSuchAxis: "No such axis"
			}
		})
	}
})(jQuery);
/*
//@ sourceMappingURL=E:\Work\6\967\src\DEV\jQuery\2016.1\Source\ClientUI\js\modules\i18n\infragistics.ui.pivotgrid-en.js.map
*/
/*!@license
* Infragistics.Web.ClientUI Popover localization resources 16.1.20161.2270
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function ($) {
	$.ig = $.ig || {};
	if (!$.ig.Popover) {
		$.ig.Popover = {};
		$.extend($.ig.Popover, {
			locale: {
				popoverOptionChangeNotSupported: "Changing the following option after igPopover has been initialized is not supported:",
				popoverShowMethodWithoutTarget: "The target parameter of the show function is mandatory when the selectors option is used"
			}
		})
	}
})(jQuery);
/*
//@ sourceMappingURL=E:\Work\6\967\src\DEV\jQuery\2016.1\Source\ClientUI\js\modules\i18n\infragistics.ui.popover-en.js.map
*/
/*!@license
* Infragistics.Web.ClientUI Rating localization resources 16.1.20161.2270
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function ($) {
	$.ig = $.ig || {};
	if (!$.ig.Rating) {
		$.ig.Rating = {};
		$.extend($.ig.Rating, {locale: {setOptionError: "Runtime changes are not allowed for the following option: "}})
	}
})(jQuery);
/*
//@ sourceMappingURL=E:\Work\6\967\src\DEV\jQuery\2016.1\Source\ClientUI\js\modules\i18n\infragistics.ui.rating-en.js.map
*/
/*!@license
* Infragistics.Web.ClientUI Splitter localization resources 16.1.20161.2270
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function ($) {
	$.ig = $.ig || {};
	if (!$.ig.Splitter) {
		$.ig.Splitter = {};
		$.extend($.ig.Splitter, {
			locale: {
				errorPanels: "The number of panels have to be no more than two.",
				errorSettingOption: "Error setting option."
			}
		})
	}
})(jQuery);
/*
//@ sourceMappingURL=E:\Work\6\967\src\DEV\jQuery\2016.1\Source\ClientUI\js\modules\i18n\infragistics.ui.splitter-en.js.map
*/
/*!@license
* Infragistics.Web.ClientUI Tile Manager localization resources 16.1.20161.2270
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function ($) {
	$.ig = $.ig || {};
	if (!$.ig.TileManager) {
		$.ig.TileManager = {};
		$.extend($.ig.TileManager, {
			locale: {
				renderDataError: "Data was not successfully retrieved or parsed.",
				setOptionItemsLengthError: "The length of the items configurations does not match the number of the tiles."
			}
		})
	}
})(jQuery);
/*
//@ sourceMappingURL=E:\Work\6\967\src\DEV\jQuery\2016.1\Source\ClientUI\js\modules\i18n\infragistics.ui.tilemanager-en.js.map
*/
/*!@license
* Infragistics.Web.ClientUI Toolbar localization resources 16.1.20161.2270
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function ($) {
	$.ig = $.ig || {};
	if (!$.ig.Toolbar) {
		$.ig.Toolbar = {};
		$.extend($.ig.Toolbar, {locale: {collapseButtonTitle: "Collapse", expandButtonTitle: "Expand"}})
	}
})(jQuery);
/*
//@ sourceMappingURL=E:\Work\6\967\src\DEV\jQuery\2016.1\Source\ClientUI\js\modules\i18n\infragistics.ui.toolbar-en.js.map
*/
/*!@license
* Infragistics.Web.ClientUI Tree localization resources 16.1.20161.2270
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function ($) {
	$.ig = $.ig || {};
	if (!$.ig.Tree) {
		$.ig.Tree = {};
		$.extend($.ig.Tree, {
			locale: {
				invalidArgumentType: "Invalid argument type provided.",
				errorOnRequest: "An error has occurred while retrieving data: ",
				noDataSourceUrl: "The igTree control requires a dataSourceUrl provided in order to initiate a request for data to that URL.",
				incorrectPath: "A node was not found at the provided path: ",
				incorrectNodeObject: "The provided argument is not a jQuery node element.",
				setOptionError: "Runtime changes are not allowed for the following option: ",
				moveTo: "<strong>Move to</strong> {0}",
				moveBetween: "<strong>Move between</strong> {0} and {1}",
				moveAfter: "<strong>Move after</strong> {0}",
				moveBefore: "<strong>Move before</strong> {0}",
				copyTo: "<strong>Copy to</strong> {0}",
				copyBetween: "<strong>Copy between</strong> {0} and {1}",
				copyAfter: "<strong>Copy after</strong> {0}",
				copyBefore: "<strong>Copy before</strong> {0}",
				and: "and"
			}
		})
	}
})(jQuery);
/*
//@ sourceMappingURL=E:\Work\6\967\src\DEV\jQuery\2016.1\Source\ClientUI\js\modules\i18n\infragistics.ui.tree-en.js.map
*/
/*!@license
* Infragistics.Web.ClientUI Tree Grid localization resources 16.1.20161.2270
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function ($) {
	$.ig = $.ig || {};
	if (!$.ig.TreeGrid) {
		$.ig.TreeGrid = {};
		$.extend($.ig.TreeGrid, {locale: {fixedVirtualizationNotSupported: "Row Virtualization requires a different virtualizationMode setting. The virtualizationMode should be set to 'continuous'."}});
		$.ig.TreeGridPaging = $.ig.TreeGridPaging || {};
		$.extend($.ig.TreeGridPaging, {
			locale: {
				contextRowLoadingText: "Loading...",
				contextRowRootText: "Root",
				columnFixingWithContextRowNotSupported: "Column Fixing requires a different contextRowMode setting. contextRowMode should be set to 'none' in order to enable column fixing."
			}
		});
		$.ig.TreeGridFiltering = $.ig.TreeGridFiltering || {};
		$.extend($.ig.TreeGridFiltering, {locale: {filterSummaryInPagerTemplate: "${currentPageMatches} of ${totalMatches} matching records"}});
		$.ig.TreeGridRowSelectors = $.ig.TreeGridRowSelectors || {};
		$.extend($.ig.TreeGridRowSelectors, {locale: {multipleSelectionWithTriStateCheckboxesNotSupported: "Multiple selection requires a different checkBoxMode setting. checkBoxMode should be set to biState in order to enable multiple selection."}})
	}
})(jQuery);
/*
//@ sourceMappingURL=E:\Work\6\967\src\DEV\jQuery\2016.1\Source\ClientUI\js\modules\i18n\infragistics.ui.treegrid-en.js.map
*/
/*!@license
* Infragistics.Web.ClientUI Upload localization resources 16.1.20161.2270
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function ($) {
	$.ig = $.ig || {};
	if (!$.ig.Upload) {
		$.ig.Upload = {};
		$.extend($.ig.Upload, {
			locale: {
				labelUploadButton: "Upload File",
				labelAddButton: "Add",
				labelClearAllButton: "Clear Uploaded",
				labelSummaryTemplate: "{0} of {1} uploaded",
				labelSummaryProgressBarTemplate: "{0}/{1}",
				labelShowDetails: "Show Details",
				labelHideDetails: "Hide Details",
				labelSummaryProgressButtonCancel: "Cancel",
				labelSummaryProgressButtonContinue: "Upload",
				labelSummaryProgressButtonDone: "Done",
				labelProgressBarFileNameContinue: "...",
				errorMessageFileSizeExceeded: "Max file size exceeded.",
				errorMessageGetFileStatus: "Could not get your current file status! Probably connection dropped.",
				errorMessageCancelUpload: "Could not send to server command to cancel upload! Probably connection dropped.",
				errorMessageNoSuchFile: "The file you requested could not be found. Probably this file is too big.",
				errorMessageOther: "There is internal error uploading file. Error code: {0}.",
				errorMessageValidatingFileExtension: "File extension validation failed.",
				errorMessageAJAXRequestFileSize: "AJAX error while trying to get file size.",
				errorMessageMaxUploadedFiles: "Maximum count of uploading files exceeded.",
				errorMessageMaxSimultaneousFiles: "Value of maxSimultaneousFilesUploads is incorrect. It should be more than 0 or null.",
				errorMessageTryToRemoveNonExistingFile: "You are trying to remove non-existing file with id {0}.",
				errorMessageTryToStartNonExistingFile: "You are trying to start non-existing file with id {0}.",
				errorMessageDropMultipleFilesWhenSingleModel: "It is not allowed to drop more than 1 file when mode is single",
				titleUploadFileButtonInit: "Upload File",
				titleAddFileButton: "Add",
				titleCancelUploadButton: "Cancel",
				titleSummaryProgressButtonContinue: "Upload",
				titleClearUploaded: "Clear Uploaded",
				titleShowDetailsButton: "Show Details",
				titleHideDetailsButton: "Hide Details",
				titleSummaryProgressButtonCancel: "Cancel",
				titleSummaryProgressButtonDone: "Done",
				titleSingleUploadButtonContinue: "Upload",
				titleClearAllButton: "Clear Uploaded"
			}
		})
	}
})(jQuery);
/*
//@ sourceMappingURL=E:\Work\6\967\src\DEV\jQuery\2016.1\Source\ClientUI\js\modules\i18n\infragistics.ui.upload-en.js.map
*/
/*!@license
* Infragistics.Web.ClientUI Validator localization resources 16.1.20161.2270
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function ($) {
	$.ig = $.ig || {};
	if (!$.ig.Validator) {
		$.ig.Validator = {
			locale: {
				defaultMessage: "This field needs attention",
				selectMessage: "A value should be selected",
				rangeSelectMessage: "At least {0} but no more than {1} items should be selected",
				minSelectMessage: "At least {0} item(s) should be selected",
				maxSelectMessage: "No more than {0} item(s) should be selected",
				rangeLengthMessage: "Entry should be between {0} and {1} characters long",
				minLengthMessage: "Entry should be at least {0} character(s) long",
				maxLengthMessage: "Entry should be no more than {0} character(s) long",
				requiredMessage: "This field is required",
				patternMessage: "Entry does not match the required pattern",
				maskMessage: "All required positions should be filled",
				dateFieldsMessage: "Date field values should be entered",
				invalidDayMessage: "A valid day of the month should be entered",
				dateMessage: "A valid date should be entered",
				numberMessage: "A valid number should be entered",
				rangeValueMessage: "A value between {0} and {1} should be entered",
				minValueMessage: "A value of at least {0} should be entered",
				maxValueMessage: "A value no more than {0} should be entered",
				emailMessage: "A valid email address should be entered",
				equalToMessage: "The two values do not match",
				optionalString: "(optional)"
			}
		}
	}
})(jQuery);
/*
//@ sourceMappingURL=E:\Work\6\967\src\DEV\jQuery\2016.1\Source\ClientUI\js\modules\i18n\infragistics.ui.validator-en.js.map
*/
/*!@license
* Infragistics.Web.ClientUI Video Player localization resources 16.1.20161.2270
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function ($) {
	$.ig = $.ig || {};
	if (!$.ig.VideoPlayer) {
		$.ig.VideoPlayer = {};
		$.extend($.ig.VideoPlayer, {
			locale: {
				liveStream: "Live video",
				live: "Live",
				paused: "Paused",
				playing: "Playing",
				play: "Play",
				volume: "Volume",
				unsupportedVideoSource: "The current video sources does not contain a format that is supported by your browser.",
				missingVideoSource: "No compatible video source.",
				progressLabelLongFormat: "$currentTime$ / $duration$",
				progressLabelShortFormat: "$currentTime$",
				enterFullscreen: "Go Fullscreen",
				exitFullscreen: "Exit Fullscreen",
				skipTo: "SKIP TO",
				unsupportedBrowser: "The current browser does not support HTML5 video. <br/>Try upgrading to any of the following versions:",
				currentBrowser: "Current browser: {0}",
				ie9: "Microsoft Internet Explorer V 9+",
				chrome8: "Google Chrome V 8+",
				firefox36: "Mozilla Firefox V 3.6+",
				safari5: "Apple Safari V 5+",
				opera11: "Opera V 11+",
				ieDownload: "http://www.microsoft.com/windows/internet-explorer/default.aspx",
				operaDownload: "http://www.opera.com/download/",
				chromeDownload: "http://www.google.com/chrome",
				firefoxDownload: "http://www.mozilla.com/",
				safariDownload: "http://www.apple.com/safari/download/",
				buffering: "Buffering...",
				adMessage: "Ad: Video will resume in $duration$ seconds.",
				adMessageLong: "Ad: Video will resume in $duration$.",
				adMessageNoDuration: "Ad: Video will resume after the commercial.",
				adNewWindowTip: "Ad: Click to open ad content in a new window.",
				nonDivException: "The Infragistics HTML5 Video Player can be instantiated only on a DIV tag.",
				relatedVideos: "RELATED VIDEOS",
				replayButton: "Replay",
				replayTooltip: "Click to replay last video."
			}
		})
	}
})(jQuery);
/*
//@ sourceMappingURL=E:\Work\6\967\src\DEV\jQuery\2016.1\Source\ClientUI\js\modules\i18n\infragistics.ui.videoplayer-en.js.map
*/
/*!@license
* Infragistics.Web.ClientUI Zoombar localization resources 16.1.20161.2270
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function ($) {
	$.ig = $.ig || {};
	if (!$.ig.Zoombar) {
		$.ig.Zoombar = {};
		$.extend($.ig.Zoombar, {
			locale: {
				zoombarTargetNotSpecified: "igZoombar requires a valid target to attach to!",
				zoombarTypeNotSupported: "The type of widget the Zoombar is trying to attach to is not supported!",
				optionChangeNotSupported: "Changing the following option after the igZoombar has been created is not supported:"
			}
		})
	}
})(jQuery);
/*
//@ sourceMappingURL=E:\Work\6\967\src\DEV\jQuery\2016.1\Source\ClientUI\js\modules\i18n\infragistics.ui.zoombar-en.js.map
*/
/*!@license
* Infragistics.Web.ClientUI common utilities localization resources 16.1.20161.2270
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function ($) {
	$.ig = $.ig || {};
	if (!$.ig.util) {
		$.ig.util = {};
		$.extend($.ig.util, {
			locale: {
				unsupportedBrowser: "The current browser does not support HTML5 canvas element. <br/>Try upgrading to any of the following versions:",
				currentBrowser: "Current browser: {0}",
				ie9: "Microsoft Internet Explorer V 9+",
				chrome8: "Google Chrome V 8+",
				firefox36: "Mozilla Firefox V 3.6+",
				safari5: "Apple Safari V 5+",
				opera11: "Opera V 11+",
				ieDownload: "http://www.microsoft.com/windows/internet-explorer/default.aspx",
				operaDownload: "http://www.opera.com/download/",
				chromeDownload: "http://www.google.com/chrome",
				firefoxDownload: "http://www.mozilla.com/",
				safariDownload: "http://www.apple.com/safari/download/"
			}
		})
	}
})(jQuery);
/*
//@ sourceMappingURL=E:\Work\6\967\src\DEV\jQuery\2016.1\Source\ClientUI\js\modules\i18n\infragistics.util-en.js.map
*/


/*!@license
 * Infragistics.Web.ClientUI Util functions 16.1.20161.2270
 *
 * Copyright (c) 2011-2017 Infragistics Inc.
 *
 * util functions that extend the jQuery  namespace
 * if something is not already available in jQuery, please add it here.
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 *  jquery-1.9.1.js
 * modernizr.js (Optional)
 *
 */
(function ($) {
	var initializing = false, fnTest = /xyz/.test(function () {
		xyz()
	}) ? /\b_super\b/ : /.*/;
	this.Class = this.Class || function () {
	};
	Class.extend = function (prop, doAugment) {
		var doSuper = true, _super = this.prototype, prototype, name;
		if (doAugment) {
			doSuper = false
		}
		initializing = true;
		prototype = new this;
		initializing = false;

		function makeFn(name, fn) {
			return function () {
				var tmp = this._super, ret;
				this._super = _super[name];
				ret = fn.apply(this, arguments);
				this._super = tmp;
				return ret
			}
		}

		if (doAugment) {
			prototype.getType = function () {
				return this.$type
			};
			prototype.getHashCode = function () {
				if (this.$hashCode !== undefined) {
					return this.$hashCode
				}
				this.$hashCode = $.ig.nextHashCode++;
				return this.$hashCode
			}
		}
		for (name in prop) {
			if (prop.hasOwnProperty(name)) {
				prototype[name] = doSuper && typeof prop[name] === "function" && typeof _super[name] === "function" && fnTest.test(prop[name]) ? makeFn(name, prop[name]) : prop[name]
			}
		}
		var isForIntellisense = window.intellisense && window.intellisense.annotate;

		function Class() {
			if (!initializing && this.init) {
				if (!isForIntellisense || Class === $.ig.Type) {
					this.init.apply(this, arguments)
				}
			}
		}

		if (prop.$type) {
			prop.$type.InstanceConstructor = Class
		}
		Class.prototype = prototype;
		Class.constructor = Class;
		Class.extend = this.extend;
		if (doAugment) {
			Class.typeName = function () {
				return this.prototype.$type
			};
			Class.baseType = function () {
				return this.$type.baseType
			}
		}
		return Class
	};
	if (typeof define === "function" && define.amd && define.amd.jQuery) {
		define("ig.util", [], function () {
			return Class
		})
	}
	if (!window.console) {
		window.console = {
			log: function () {
			}
		}
	}
})(jQuery);
(function ($) {
	$.fn.startsWith = function (str) {
		return this[0].innerHTML.indexOf(str) === 0
	};
	$.ig = $.ig || {_isNamespace: true};
	$.ig.util = $.ig.util || {};
	$.ig.util.browserVersion = "";
	$.ig.util.isIE = window.navigator.userAgent.indexOf("MSIE") > -1 || !!window.navigator.userAgent.match(/trident/i);
	$.ig.util.isIEOld = $.ig.util.isIE && !window.HTMLElement ? true : false;
	if ($.ig.util.isIE) {
		$.ig.util.browserVersion = document.documentMode;
		$.ig.util.isIE7 = $.ig.util.browserVersion <= 7;
		$.ig.util.isIE8 = $.ig.util.browserVersion === 8;
		$.ig.util.isIE9 = $.ig.util.browserVersion === 9;
		$.ig.util.isIE10 = $.ig.util.browserVersion === 10;
		$.ig.util.isIE11 = $.ig.util.browserVersion >= 11
	}
	$.ig.util.isChrome = window.chrome;
	$.ig.util.isFF = window.mozInnerScreenX !== undefined;
	$.ig.util.isOpera = !!window.opera;
	$.ig.util.isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0 || window.ApplePaySession ? true : false;
	$.ig.util.isWebKit = !!window.webkitURL;
	$.ig.util.isEdge = window.navigator.userAgent.indexOf("Edge") > -1;
	$.ajaxQueue = function (queueName, options) {
		var callback;
		if (typeof document.ajaxQueue === "undefined") {
			document.ajaxQueue = {queue: {}}
		}
		if (typeof document.ajaxQueue.queue[queueName] === "undefined") {
			document.ajaxQueue.queue[queueName] = []
		}
		if (typeof options === "undefined") {
			return
		}
		callback = options.complete;
		options.complete = function (request, status) {
			document.ajaxQueue.queue[queueName].shift();
			if (typeof callback !== "undefined") {
				callback(request, status)
			}
			if (document.ajaxQueue.queue[queueName].length > 0) {
				$.ajax(document.ajaxQueue.queue[queueName][0])
			}
		};
		document.ajaxQueue.queue[queueName].push(options);
		if (document.ajaxQueue.queue[queueName].length === 1) {
			$.ajax(document.ajaxQueue.queue[queueName][0])
		}
	};
	if (typeof $.ig.useDefineProperty === "undefined") {
		$.ig.useDefineProperty = true
	}
	$.ig.util.isModernizrAvailable = typeof Modernizr === "object";
	$.ig.util.isTouch = $.ig.util.isModernizrAvailable && (Modernizr.touch === true || Modernizr.touchevents === true || Modernizr.pointerevents === true);
	$.ig.util.isTouchDevice = function () {
		return "ontouchstart" in window || window.navigator.msMaxTouchPoints > 0
	};
	$.ig.extendNativePrototype = function (proto, propName, val) {
		if ($.ig.useDefineProperty) {
			try {
				Object.defineProperty(proto, propName, {
					value: val,
					enumerable: false,
					configurable: true,
					writable: true
				})
			} catch (e) {
				proto[propName] = val
			}
		} else {
			proto[propName] = val
		}
	};
	$.ig.util.stackPeek = function (array) {
		return array[array.length - 1]
	};
	$.ig.util.stackContains = function (array, item) {
		for (var i = 0; i < array.length; i++) {
			if ($.ig.Object.prototype.equalsStatic(array[i], item)) {
				return true
			}
		}
		return false
	};
	$.ig.util.createString1 = function (charArray) {
		return charArray.join("")
	};
	$.ig.util.createString2 = function (c, count) {
		var ret = "";
		for (var i = 0; i < count; i++) {
			ret = ret + c
		}
		return ret
	};
	$.ig.util.createString3 = function (charArray, start, length) {
		var ret = "";
		for (var i = 0; i < length; i++) {
			ret = ret + charArray[start + i]
		}
		return ret
	};
	String.prototype.copyTo = function (sourceIndex, destination, destinationIndex, count) {
		for (var i = destinationIndex; i < destinationIndex + count; i++) {
			destination[i] = this.charAt(sourceIndex + i - destinationIndex)
		}
	};
	Date.prototype.stdTimezoneOffset = function () {
		var jan, jul, janOffset, julOffset;
		jan = new Date(this.getFullYear(), 0, 1);
		jul = new Date(this.getFullYear(), 6, 1);
		julOffset = jul.getTimezoneOffset();
		janOffset = jan.getTimezoneOffset();
		return Math.max(janOffset, julOffset)
	};
	Date.prototype.dst = function () {
		return this.getTimezoneOffset() < this.stdTimezoneOffset()
	};
	if (!Object.keys) {
		Object.keys = function () {
			"use strict";
			var hasOwnProperty = Object.prototype.hasOwnProperty,
				hasDontEnumBug = !{toString: null}.propertyIsEnumerable("toString"),
				dontEnums = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
				dontEnumsLength = dontEnums.length;
			return function (obj) {
				if (typeof obj !== "object" && (typeof obj !== "function" || obj === null)) {
					throw new TypeError("Object.keys called on non-object")
				}
				var result = [], prop, i;
				for (prop in obj) {
					if (hasOwnProperty.call(obj, prop)) {
						result.push(prop)
					}
				}
				if (hasDontEnumBug) {
					for (i = 0; i < dontEnumsLength; i++) {
						if (hasOwnProperty.call(obj, dontEnums[i])) {
							result.push(dontEnums[i])
						}
					}
				}
				return result
			}
		}()
	}
	$.ig.findPath = function (dsObj, resKey) {
		var resPath, ds = dsObj;
		resPath = resKey.split(".");
		if (resPath.length > 0) {
			for (var i = 0; i < resPath.length; i++) {
				if (ds) {
					ds = ds[resPath[i]]
				} else {
					break
				}
			}
		}
		return ds
	};
	$.ig.checkboxMarkupClasses = "";
	$.ig.formatter = function (val, type, format, notTemplate, enableUTCDates, displayStyle, labelText, tabIndex) {
		var min, y, h, m, s, ms, am, e, day, pattern, len, n, dot, gr, gr0, grps, curS, percS, cur, perc, prefix, i,
			d = val && val.getTime, reg = $.ig.regional.defaults, pow, display = displayStyle || "inline-block";
		if (format === "checkbox" && notTemplate) {
			s = '<span class="ui-igcheckbox-container" style="display:' + display + ';" role="checkbox" aria-disabled="true" aria-checked="' + val + '" aria-label="' + labelText + '" tabindex="' + tabIndex + '">';
			s += '<span class="' + $.ig.checkboxMarkupClasses + '" style="display:inline-block">';
			s += '<span style="display:block" class="' + (val ? "" : "ui-igcheckbox-small-off ");
			return s + 'ui-icon ui-icon-check ui-igcheckbox-small-on"></span></span></span>'
		}
		if (!val && val !== 0 && val !== false) {
			return "&nbsp;"
		}
		if (type === "date" || d) {
			if (!val) {
				return "&nbsp;"
			}
			if (!d) {
				return val
			}
			pattern = reg[format && format !== "null" && format !== "undefined" ? format + "Pattern" : "datePattern"] || format;
			if (enableUTCDates) {
				y = val.getUTCFullYear();
				m = val.getUTCMonth() + 1;
				d = val.getUTCDate();
				h = val.getUTCHours();
				min = val.getUTCMinutes();
				s = val.getUTCSeconds();
				ms = val.getUTCMilliseconds();
				day = val.getUTCDay()
			} else {
				y = val.getFullYear();
				m = val.getMonth() + 1;
				d = val.getDate();
				h = val.getHours();
				min = val.getMinutes();
				s = val.getSeconds();
				ms = val.getMilliseconds();
				day = val.getDay()
			}
			pattern = pattern.replace(/\\d/g, "").replace(/\\y/g, "").replace(/\\M/g, "\b").replace(/\\m/g, "	").replace(/\\t/g, "\n").replace(/\\s/g, "").replace(/\\f/g, "\f").replace(/\\h/g, "\r").replace(/\\H/g, "");
			pattern = pattern.replace("MMMM", "").replace("MMM", "").replace("dddd", "").replace("ddd", "");
			if (pattern.indexOf("t") >= 0) {
				am = h >= 12 ? reg.pm : reg.am;
				am = am || " ";
				if (pattern.indexOf("tt") >= 0) {
					pattern = pattern.replace("tt", "t")
				} else if (am.length > 1) {
					am = am.substring(0, 1)
				}
				pattern = pattern.replace("t", "")
			}
			if (pattern.indexOf("h") >= 0) {
				if (h > 12) {
					h -= 12
				}
				if (h === 0) {
					h = 12
				}
			}
			pattern = pattern.replace(/H/g, "h");
			pattern = pattern.replace("yyyy", y < 10 ? "000" + y : y < 100 ? "00" + y : y < 1e3 ? "0" + y : y).replace("yy", (y = y % 100) < 10 ? "0" + y : y).replace("y", y % 100).replace("MM", m < 10 ? "0" + m : m).replace("M", m);
			pattern = pattern.replace("dd", d < 10 ? "0" + d : d).replace("d", d);
			pattern = pattern.replace("hh", h < 10 ? "0" + h : h).replace("h", h).replace("mm", min < 10 ? "0" + min : min).replace("m", min).replace("ss", s < 10 ? "0" + s : s).replace("s", s);
			pattern = pattern.replace("fff", ms < 10 ? "00" + ms : ms < 100 ? "0" + ms : ms).replace("ff", (ms = Math.round(ms / 10)) < 10 ? "0" + ms : ms).replace("f", Math.round(ms / 100));
			pattern = pattern.replace("", reg.monthNames[m - 1]).replace("", reg.monthNamesShort[m - 1]).replace("", am);
			pattern = pattern.replace("", reg.dayNames[day]).replace("", reg.dayNamesShort[day]);
			pattern = pattern.replace(/\x06/g, "d").replace(/\x07/g, "y").replace(/\x08/g, "M").replace(/\x09/g, "m").replace(/\x0A/g, "t").replace(/\x0B/g, "s").replace(/\x0C/g, "f").replace("\r", "h").replace("", "H");
			return pattern
		}
		d = format === "double";
		if (!d) {
			cur = format === (curS = "currency");
			if (!cur) {
				perc = format === (percS = "percent");
				if (!perc) {
					i = format === "int"
				}
			}
		}
		n = typeof val === "number";
		if (d || n || i || cur || perc || type === "number") {
			if (!n) {
				val = parseFloat(val.replace("(", "-").replace(new RegExp("[^0-9\\-eE\\" + reg.numericDecimalSeparator + "\\+]", "gm"), "").replace(reg.numericDecimalSeparator, "."))
			}
			if (isNaN(val)) {
				return "&nbsp;"
			}
			if (perc) {
				val *= 100
			}
			prefix = cur ? curS : perc ? percS : "numeric";
			pattern = reg[prefix + (val < 0 ? "Negative" : "Positive") + "Pattern"] || "n";
			len = format ? format.length : 0;
			if (len > 0 && ((s = format.charAt(0)) === "0" || s === "#")) {
				min = m = 0;
				dot = format.indexOf(".");
				if (dot > 0) {
					m = len - 1 - dot;
					while (++dot < len) {
						if (format.charAt(dot) !== "0") {
							break
						}
						min++
					}
				}
			} else {
				min = reg[prefix + "MinDecimals"] || 0;
				if (d) {
					m = 999
				} else {
					m = reg[prefix + "MaxDecimals"];
					m = m && !i ? m : 0
				}
			}
			if (val < 0) {
				val = -val
			}
			if (m === 999) {
				val = val.toString(10)
			} else {
				if ($.ig.util.isIE && $.ig.util.browserVersion <= 8) {
					pow = Math.pow(10, m);
					val = (Math.round(pow * val) / pow).toFixed(m)
				} else {
					val = val.toFixed(m)
				}
			}
			if ((i = val.indexOf("E")) < 0) {
				i = val.indexOf("e")
			}
			e = "";
			if (i > 0) {
				e = val.substring(i);
				val = val.substring(0, i)
			}
			dot = val.indexOf(".");
			len = val.length;
			i = 0;
			while (dot > 0 && m > min + i && val.charAt(len - 1 - i) === "0") {
				i++
			}
			if (i > 0) {
				val = val.substring(0, len -= i)
			}
			if (dot === len - 1) {
				val = val.substring(0, dot)
			}
			if (dot > 0) {
				len = dot
			}
			s = reg[prefix + "DecimalSeparator"];
			if (s) {
				val = val.replace(".", s)
			}
			s = reg[prefix + "GroupSeparator"];
			grps = s ? reg[prefix + "Groups"] : "";
			gr = gr0 = grps.length > 0 ? grps[i = 0] : 0;
			while (gr > 0 && --len > 0) {
				if (--gr === 0) {
					val = val.substring(0, len) + s + val.substring(len);
					gr = grps[++i];
					if (!gr || gr < 1) {
						gr = gr0
					} else {
						gr0 = gr
					}
				}
			}
			s = reg[prefix + "Symbol"] || "";
			return pattern.replace("-", reg.negativeSign).replace("n", val + e).replace("$", s)
		}
		if (format) {
			if (format.indexOf(s = "{0}") >= 0) {
				return format.replace(s, val)
			}
			if (format.indexOf(s = "[0]") >= 0) {
				return format.replace(s, val)
			}
		}
		return val || val === 0 ? val : "&nbsp;"
	};
	$.ig._regional = {
		monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
		monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
		dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		am: "AM",
		pm: "PM",
		datePattern: "M/d/yyyy",
		dateLongPattern: "dddd, MMMM dd, yyyy",
		dateTimePattern: "M/d/yyyy h:mm tt",
		timePattern: "h:mm tt",
		timeLongPattern: "h:mm:ss tt",
		negativeSign: "-",
		numericNegativePattern: "-$n",
		numericDecimalSeparator: ".",
		numericGroupSeparator: ",",
		numericGroups: [3],
		numericMaxDecimals: 2,
		numericMinDecimals: 0,
		currencyPositivePattern: "$n",
		currencyNegativePattern: "-$n",
		currencySymbol: "$",
		currencyDecimalSeparator: ".",
		currencyGroupSeparator: ",",
		currencyGroups: [3],
		currencyMaxDecimals: 2,
		currencyMinDecimals: 2,
		percentPositivePattern: "n$",
		percentNegativePattern: "-n$",
		percentSymbol: "%",
		percentDecimalSeparator: ".",
		percentGroupSeparator: ",",
		percentGroups: [3],
		percentDisplayFactor: 100,
		percentMaxDecimals: 2,
		percentMinDecimals: 2
	};
	$.ig.regional = $.ig.regional || {};
	$.ig.regional.defaults = $.ig._regional;
	$.ig.setRegionalDefault = function (regional) {
		if ($.ui && $.ui.igEditor) {
			$.ui.igEditor.setDefaultCulture(regional)
		} else {
			$.ig.regional.defaults = $.extend($.ig._regional, typeof regional === "string" ? $.ig.regional[regional] : regional)
		}
	};
	$.ig.calcSummaries = function (summaryFunction, data, caller, dataType) {
		var sum = function (data) {
			var sum = 0, i;
			for (i = 0; i < data.length; i++) {
				sum += data[i]
			}
			return sum
		};
		summaryFunction = summaryFunction.toLowerCase();
		if (summaryFunction.startsWith("custom")) {
			summaryFunction = "custom"
		}
		switch (summaryFunction) {
			case"min":
				if (data.length === 0) {
					if (dataType === "date") {
						return null
					}
					return 0
				}
				return Math.min.apply(Math, data);
			case"max":
				if (data.length === 0) {
					if (dataType === "date") {
						return null
					}
					return 0
				}
				return Math.max.apply(Math, data);
			case"sum":
				return sum(data);
			case"avg":
				if (data.length === 0) {
					return 0
				}
				return sum(data) / data.length;
			case"count":
				return data.length;
			case"custom":
				if (caller !== undefined && caller !== null) {
					if ($.type(caller) === "function") {
						return caller(data)
					}
					if ($.type(caller) === "string") {
						caller = eval(caller);
						return caller(data)
					}
				} else {
					return null
				}
				break
		}
	};
	$.ig.getMaxZIndex = function (id) {
		var maxZ = 1e4, thisZ;
		$(".ui-dialog").each(function () {
			if (!id || $(this)[0].id !== id) {
				thisZ = $(this).css("z-index");
				if (!isNaN(thisZ)) {
					maxZ = Math.max(maxZ, thisZ)
				}
			}
		});
		return maxZ
	};
	$.ig.uid = function () {
		return ((1 + Math.random()) * parseInt("10000", 16)).toString(16).substring(1, 5)
	};
	$.ig.nextHashCode = 0;
	$.ig.util.ensureUniqueId = function (obj) {
		if (!obj.getHashCode) {
			var code = $.ig.nextHashCode++;
			obj.getHashCode = function () {
				return code
			}
		}
	};
	$.ig.getColType = function (o) {
		var t = typeof o;
		if (t === "undefined") {
			return "string"
		} else if (o && o.getTime && !isNaN(o.getTime()) && Object.prototype.toString.call(o) === "[object Date]") {
			return "date"
		} else if (t === "boolean") {
			return "bool"
		} else if (t === "number") {
			return t
		} else if (t === "object") {
			return "object"
		} else {
			return "string"
		}
	};
	$.ig.typeIdentifierCache = {};
	$.ig.nextTypeIdentifier = 0;
	$.ig.Type = Class.extend({
		init: function (identifier, baseType, interfaces, staticInitializer) {
			this.specializationCache = {};
			this._staticInitializer = staticInitializer;
			this._fullName = identifier;
			this.name = identifier;
			var lastDotIndex = this.name.lastIndexOf(".");
			if (lastDotIndex >= 0) {
				this.name = this.name.substr(lastDotIndex + 1)
			}
			this.typeArguments = null;
			this.baseType = null;
			this.interfaces = null;
			if (baseType) {
				this.baseType = baseType
			}
			if (interfaces) {
				this.interfaces = interfaces
			}
			if ($.ig.typeIdentifierCache[identifier]) {
				this.identifier = $.ig.typeIdentifierCache[identifier]
			} else {
				this.identifier = $.ig.nextTypeIdentifier++;
				$.ig.typeIdentifierCache[identifier] = this.identifier
			}
			if (baseType && $.ig.Enum && baseType == $.ig.Enum.prototype.$type) this.isEnumType = true
		}, typeName: function () {
			return this.name
		}, fullName: function () {
			return this._fullName
		}, getSpecId: function (types) {
			if (types.length === 1) {
				if (!types[0]) {
					return "undef"
				} else if (types[0] === -1) {
					return undefined
				} else if (!types[0].typeName) {
					return types[0].toString()
				} else if (types[0].stringId) {
					return types[0].stringId
				} else {
					return types[0].identifier.toString()
				}
			}
			var ret = "";
			for (var i = 0; i < types.length; i++) {
				var type = types[i];
				if (!type) {
					ret += "undef"
				} else if (type == -1) {
					return undefined
				} else if (!type.typeName) {
					ret += type.toString()
				} else if (type.stringId) {
					ret += type.stringId
				} else {
					ret += type.identifier.toString()
				}
			}
			return ret
		}, _isGenericType: null, isGenericType: function () {
			if (this._isGenericType === null) {
				this._isGenericType = this.name.indexOf("$") >= 0
			}
			return this._isGenericType
		}, isGenericTypeDefinition: function () {
			return this.typeArguments === null && this.isGenericType()
		}, genericTypeArguments: function () {
			return this.typeArguments
		}, _staticInitializer: null, _staticFields: null, getStaticFields: function (type) {
			if (type === undefined) type = this;
			var t = this;
			while (t != null) {
				if (t === type || t._fullName == type._fullName) {
					if (t._staticFields == null && t._staticInitializer) {
						t._staticFields = {};
						t._staticInitializer.apply(t._staticFields, t.typeArguments)
					}
					return t._staticFields
				}
				t = t.baseType
			}
			return null
		}, specializationCache: null, initSelfReferences: function (replacement) {
			var i, j;
			if (replacement) {
				if (this.typeArguments) {
					var updateCache = false;
					for (j = 0; j < this.typeArguments.length; j++) {
						var typeArg = this.typeArguments[j];
						if (typeArg == -1) {
							updateCache = true;
							this.typeArguments[j] = replacement
						} else if (typeArg && typeArg.initSelfReferences) {
							typeArg.initSelfReferences(replacement)
						}
					}
					if (updateCache) {
						var specId = this.getSpecId(this.typeArguments);
						var ret = this.specializationCache[specId];
						if (!ret) {
							this.specializationCache[specId] = this
						}
					}
				}
			} else {
				if (this.baseType) this.baseType.initSelfReferences(this);
				if (this.interfaces) {
					for (i = 0; i < this.interfaces.length; i++) this.interfaces[i].initSelfReferences(this)
				}
			}
		}, specialize: function () {
			var i;
			if (!this.isGenericType()) {
				return this
			}
			var specId = this.getSpecId(arguments);
			var ret = this.specializationCache[specId];
			if (ret) {
				return ret
			}
			ret = new $.ig.Type(this._fullName, this.baseType, this.interfaces, this._staticInitializer);
			var placeholders = this.typeArguments;
			var hasPlaceholders = false;
			if (placeholders && placeholders.length) {
				hasPlaceholders = true
			}
			ret.typeArguments = [];
			if (hasPlaceholders) {
				for (i = 0; i < placeholders.length; i++) {
					if (isFinite(placeholders[i]) && !isFinite(arguments[placeholders[i]])) {
						ret.typeArguments[i] = arguments[placeholders[i]]
					} else {
						ret.typeArguments[i] = placeholders[i]
					}
				}
			} else {
				for (i = 0; i < arguments.length; i++) {
					ret.typeArguments[i] = arguments[i]
				}
			}
			if (this.baseType && this.baseType.typeArguments) {
				ret.baseType = this.specialize.apply(this.baseType, ret.typeArguments)
			}
			if (this.interfaces) {
				ret.interfaces = [];
				for (i = 0; i < this.interfaces.length; i++) {
					ret.interfaces[i] = this.specialize.apply(this.interfaces[i], ret.typeArguments)
				}
			}
			if (this._fullName == "Nullable$1" && ret.typeArguments.length == 1) ret.isNullable = true;
			if (specId) {
				this.specializationCache[specId] = ret;
				ret.stringId = ret.generateString()
			}
			var _self = this;
			ret.InstanceConstructor = function () {
				_self.InstanceConstructor.apply(this, ret.typeArguments.concat(Array.prototype.slice.call(arguments, 0)));
				return this
			};
			ret.InstanceConstructor.prototype = this.InstanceConstructor.prototype;
			return ret
		}, equals: function (other) {
			if (!(other instanceof $.ig.Type)) {
				return false
			}
			if (this.identifier !== other.identifier) {
				return false
			}
			if (this.typeArguments === null && other.typeArguments === null) {
				return true
			}
			if (this.typeArguments === null && other.typeArguments !== null) {
				return false
			}
			if (this.typeArguments !== null && other.typeArguments === null) {
				return false
			}
			if (this.typeArguments.length !== other.typeArguments.length) {
				return false
			}
			for (var i = 0; i < this.typeArguments.length; i++) {
				if (!$.ig.Type.prototype.checkEquals(this.typeArguments[i], other.typeArguments[i])) {
					return false
				}
			}
			return true
		}, checkEquals: function (type1, type2) {
			if (type1 instanceof $.ig.Type) {
				return type1.equals(type2)
			} else if (type2 instanceof $.ig.Type) {
				return type2.equals(type1)
			} else {
				return type1 === type2
			}
		}, op_Equality: function (type1, type2) {
			return type1.equals(type2)
		}, op_Inequality: function (type1, type2) {
			return !type1.equals(type2)
		}, generateString: function () {
			if (!this.typeArguments || !this.typeArguments.length) {
				return this.identifier.toString()
			} else {
				var ret = this.identifier.toString() + "[";
				var first = true;
				for (var i = 0; i < this.typeArguments.length; i++) {
					if (this.typeArguments[i] == undefined) {
						continue
					}
					if (first) {
						first = false
					} else {
						ret += ","
					}
					if (this.typeArguments[i].toString) {
						ret += this.typeArguments[i].toString()
					} else {
						ret += this.typeArguments[i].identifier.toString()
					}
				}
				ret += "]";
				return ret
			}
		}, isEnum: function () {
			return this.baseType === $.ig.Enum.prototype.$type
		}, isValueType: function () {
			return this.baseType === $.ig.ValueType.prototype.$type
		}, isAssignableFrom: function (tOther) {
			if (this === tOther) {
				return true
			}
			if (tOther.baseType && this.isAssignableFrom(tOther.baseType)) {
				return true
			}
			if (tOther.interfaces) {
				for (var i = 0; i < tOther.interfaces.length; i++) {
					if (this.isAssignableFrom(tOther.interfaces[i])) {
						return true
					}
				}
			}
			return false
		}, isInstanceOfType: function (value) {
			return $.ig.util.cast(this, value) !== null
		}, isPrimitive: function () {
			return this === $.ig.Number.prototype.$type || this === $.ig.Boolean.prototype.$type
		}
	}, true);
	$.ig.Object = Class.extend({
		init: function () {
		}, equals: function (other) {
			return this === other
		}, equalsStatic: function (a, b) {
			var aIsNull = a == null || !!a.isNullable && !a.hasValue();
			var bIsNull = b == null || !!b.isNullable && !b.hasValue();
			if (aIsNull || bIsNull) {
				return aIsNull && bIsNull
			}
			if (a.equals) {
				return a.equals(b)
			}
			if (b.equals) {
				return b.equals(a)
			}
			if ($.ig.util.isNaN(a) && $.ig.util.isNaN(b)) {
				return true
			}
			return a == b && typeof a == typeof b
		}, memberwiseClone: function () {
			function Cons() {
			}

			Cons.prototype = this.$type.InstanceConstructor.prototype;
			var clone = new Cons;
			for (var prop in this) {
				if (this.hasOwnProperty(prop)) {
					clone[prop] = this[prop]
				}
			}
			return clone
		}, referenceEquals: function (a, b) {
			return a === b || a == null && b == null
		}, $type: new $.ig.Type("Object")
	}, true);
	$.ig.$o = $.ig.Object;
	$.ig.$op = $.ig.Object.prototype;
	$.ig.$ot = $.ig.Object.prototype.$type;
	$.ig.Type.prototype.$type = new $.ig.Type("Type", $.ig.Object.prototype.$type);
	$.ig.IConvertible = Class.extend({$type: new $.ig.Type("IConvertible")}, true);
	$.ig.IComparable = Class.extend({$type: new $.ig.Type("IComparable")}, true);
	$.ig.IComparable$1 = Class.extend({$type: new $.ig.Type("IComparable$1")}, true);
	$.ig.IEquatable$1 = Class.extend({$type: new $.ig.Type("IEquatable$1")}, true);
	$.ig.Enum = Class.extend({
		parse: function (enumType, value, ignoreCase) {
			var info = $.ig.util.getDefinedNameAndNamespace(enumType.fullName());
			if ($.ig.util.canAssign(this.$type, enumType)) {
				var p = info.namespace[info.name].prototype;
				var values = p.$type.InstanceConstructor._isEnum ? p.$type.InstanceConstructor : p;
				if (values.hasOwnProperty(value)) {
					return p.getBox(values[value])
				} else if (ignoreCase) {
					var upper = value.toUpperCase();
					for (var x in values) {
						if (x.toUpperCase() === upper) {
							return p.getBox(values[x])
						}
					}
				} else {
					var firstChar = value.charAt(0);
					value = firstChar.toLowerCase() + value.substr(1);
					if (values.hasOwnProperty(value)) {
						return p.getBox(values[value])
					}
				}
			}
			throw new Error("Invalid " + info.name + " value: " + value)
		}, getBox: function (v) {
			if (!this._boxes) {
				this._boxes = {}
			}
			if (!this._boxes[v]) {
				this._boxes[v] = new this.$type.InstanceConstructor(v)
			}
			return this._boxes[v]
		}, toString: function () {
			return this.$type.InstanceConstructor.prototype.$getName(this._v)
		}, getFlaggedName: function (v, getName) {
			var names = [];
			var original = v;
			var zeroValueName;
			var value;
			var values = [];
			for (var p in this) {
				if (this.hasOwnProperty(p)) {
					value = this[p];
					if (typeof this[p] == "number") {
						values.push(p)
					}
				}
			}
			values.sort(function (a, b) {
				return this[a] - this[b]
			});
			for (var i = values.length - 1; i >= 0; i--) {
				value = this[values[i]];
				if (value === 0) {
					zeroValueName = getName(0)
				} else if ((v & value) === value) {
					v -= value;
					names.unshift(getName(value))
				}
			}
			if (v !== 0) {
				return original.toString()
			}
			if (original !== 0) {
				return names.join(", ")
			}
			return zeroValueName || "0"
		}, getValues: function ($t) {
			var result = [];
			var p = $t.InstanceConstructor._isEnum ? $t.InstanceConstructor : $t.InstanceConstructor.prototype;
			for (var member in p) {
				if (p.hasOwnProperty(member)) {
					if (typeof p[member] === "number") {
						result.push(p[member])
					}
				}
			}
			return result
		}, getNames: function ($t) {
			var result = [];
			var p = $t.InstanceConstructor._isEnum ? $t.InstanceConstructor : $t.InstanceConstructor.prototype;
			for (var member in p) {
				if (p.hasOwnProperty(member)) {
					if (typeof p[member] === "number") {
						result.push(member)
					}
				}
			}
			return result
		}, isDefined: function ($t, value) {
			value = $.ig.util.getValue(value);
			var p = $t.InstanceConstructor._isEnum ? $t.InstanceConstructor : $t.InstanceConstructor.prototype;
			for (var member in p) {
				if (p.hasOwnProperty(member)) {
					if (p[member] === value) {
						return true
					}
				}
			}
			return false
		}, toDouble: function (provider) {
			return this.$value()
		}, toObject: function ($t, value) {
			return value
		}, tryParse$1: function ($tEnum, value, ignoreCase, result) {
			try {
				return {ret: true, p2: this.parse($tEnum, value, ignoreCase).$value()}
			} catch (e) {
				result = $.ig.util.createInstance($tEnum);
				return {ret: false, p2: result}
			}
		}, $type: new $.ig.Type("Enum", $.ig.Object.prototype.$type, [$.ig.IConvertible.prototype.$type])
	}, true);
	$.ig.$e = $.ig.Enum;
	$.ig.$ep = $.ig.Enum.prototype;
	$.ig.$et = $.ig.Enum.prototype.$type;
	$.ig.ValueType = Class.extend({
		init: function () {
		}, $type: new $.ig.Type("ValueType", $.ig.Object.prototype.$type)
	}, true);
	$.ig.INotifyPropertyChanged = Class.extend({
		init: function () {
		}, _PropertyChanged: function () {
		}, $type: new $.ig.Type("INotifyPropertyChanged")
	}, true);
	$.ig.PropertyChangedEventArgs = $.ig.Object.extend({
		init: function (propertyName) {
			this._propertyName = propertyName
		}, _propertyName: null, propertyName: function (value) {
			if (arguments.length === 0) {
				return this._propertyName
			} else {
				this._propertyName = value
			}
		}, $type: new $.ig.Type("PropertyChangedEventArgs", $.ig.Object.$type)
	}, true);
	$.ig.XmlNodeType = Class.extend({
		_None: 0,
		_Attribute: 2,
		_CDATA: 4,
		_Comment: 8,
		_Document: 9,
		_DocumentFragment: 11,
		_DocumentType: 10,
		_Element: 1,
		_EndElement: 15,
		_EndEntity: 16,
		_Entity: 6,
		_EntityReference: 5,
		_Notation: 12,
		_ProcessingInstruction: 7,
		_SignificantWhitespace: 14,
		_Text: 3,
		_Whitespace: 13,
		_XmlDeclaration: 17,
		none: 0,
		element: 1,
		attribute: 2,
		text: 3,
		cDATA: 4,
		entityReference: 5,
		entity: 6,
		processingInstruction: 7,
		comment: 8,
		document: 9,
		documentType: 10,
		documentFragment: 11,
		notation: 12,
		whitespace: 13,
		significantWhitespace: 14,
		endElement: 15,
		endEntity: 16,
		xmlDeclaration: 17
	}, true);
	$.ig.XmlDocumentParser = Class.extend({
		parse: function (markup) {
			if (!window.DOMParser) {
				var parsers = ["Msxml2.DOMDocument.3.0", "Msxml2.DOMDocument"];
				for (var i = 0; i < parsers.length; i++) {
					try {
						var xmlDOM = new ActiveXObject(parsers[i]);
						xmlDOM.async = false;
						xmlDOM.loadXML(markup);
						xmlDOM.setProperty("SelectionLanguage", "XPath");
						return xmlDOM
					} catch (ex) {
					}
				}
			} else {
				try {
					var domParser = new DOMParser;
					return domParser.parseFromString(markup, "text/xml")
				} catch (ex) {
				}
			}
			return null
		}
	}, true);
	$.ig.Array = Array;
	$.ig.extendNativePrototype(Array.prototype, "add", function (item) {
		this[this.length] = item
	});
	$.ig.addToArray = function (arr, item) {
		arr[arr.length] = item
	};
	$.ig.indexInArray = function (arr, item) {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] == item) {
				return i
			}
		}
		return -1
	};
	$.ig.arrayContains = function (arr, item) {
		var index = arr.indexOf(item);
		return index >= 0
	};
	if (!Array.prototype.indexOf) {
		$.ig.extendNativePrototype(Array.prototype, "indexOf", function (item) {
			for (var i = 0; i < this.length; i++) {
				if (this[i] == item) {
					return i
				}
			}
			return -1
		})
	}
	if (!Array.prototype.lastIndexOf) {
		$.ig.extendNativePrototype(Array.prototype, "lastIndexOf", function (item) {
			for (var i = this.length - 1; i >= 0; i--) {
				if (this[i] == item) {
					return i
				}
			}
			return -1
		})
	}
	$.ig.extendNativePrototype(Array.prototype, "copy", function (source, sourceIndex, dest, destIndex, count) {
		for (var i = 0; i < count; i++) {
			dest[destIndex + i] = source[sourceIndex + i]
		}
	});
	$.ig.removeFromArray = function (arr, from, to) {
		var rest = arr.slice((to || from) + 1 || arr.length);
		arr.length = from < 0 ? arr.length + from : from;
		return arr.push.apply(arr, rest)
	};
	$.ig.extendNativePrototype(Array.prototype, "contains", function (item) {
		var index = this.indexOf(item);
		return index >= 0
	});
	$.ig.extendNativePrototype(Array.prototype, "insert", function (index, item) {
		this.splice(index, 0, item)
	});
	$.ig.extendNativePrototype(Array.prototype, "removeAt", function (i) {
		this.splice(i, 1)
	});
	$.ig.extendNativePrototype(Array.prototype, "removeItem", function (item) {
		var index = this.indexOf(item);
		if (index >= 0) {
			this.splice(index, 1);
			return true
		}
		return false
	});
	$.ig.extendNativePrototype(Array.prototype, "getEnumerator", function () {
		return new $.ig.ArrayEnumerator(this)
	});
	$.ig.extendNativePrototype(Array.prototype, "count", function () {
		return this.length
	});
	$.ig.extendNativePrototype(Array.prototype, "item", function (index, value) {
		if (arguments.length === 2) {
			this[index] = value;
			return value
		} else {
			return this[index]
		}
	});
	$.ig.extendNativePrototype(Array.prototype, "getLength", function (dimension) {
		var array = this;
		var dim = dimension;
		while (array) {
			if (dim === 0) {
				return array.length
			}
			dim--;
			array = array[0]
		}
		return this.dimensionLength[dimension - 1]
	});
	$.ig.extendNativePrototype(Array.prototype, "resize", function () {
		this.length = 0
	});
	$.ig.ArrayEnumerator = Class.extend({
		init: function (array) {
			this._array = array;
			this._index = -1
		}, current: function () {
			return this._array[this._index]
		}, moveNext: function () {
			this._index++;
			return this._index < this._array.length
		}, reset: function () {
			this._index = -1
		}, dispose: function () {
		}
	}, true);
	$.ig.Date = Class.extend({
		init: function () {
			return new Date
		},
		fromOADate: function (value) {
			var result = new Date(+new Date(1899, 11, 30) + Math.round(value * 864e5));
			if (result.dst && result.dst()) {
				return $.ig.Date.prototype.addHours(result, -1)
			}
			return result
		},
		fromValues: function (year, month, day, hour, minute, second, millisecond) {
			return new Date(year, month - 1, day, hour, minute, second, millisecond)
		},
		fromTicks: function (ticks) {
			return new Date(ticks)
		},
		addSeconds: function (value, seconds) {
			return $.ig.Date.prototype.addDays(value, seconds / 86400)
		},
		addMinutes: function (value, minutes) {
			return $.ig.Date.prototype.addDays(value, minutes / 1440)
		},
		addHours: function (value, hours) {
			return $.ig.Date.prototype.addDays(value, hours / 24)
		},
		addDays: function (value, days) {
			var result = new Date(+value + days * 864e5);
			if (value.dst) {
				if (!value.dst()) {
					if (result.dst()) {
						result = new Date(+result - 36e5)
					}
				} else {
					if (!result.dst()) {
						result = new Date(+result + 36e5)
					}
				}
			}
			return result
		},
		addMonths: function (value, num) {
			var result = new Date(value.getTime());
			var currentMonth = result.getMonth() + result.getFullYear() * 12;
			result.setMonth(result.getMonth() + num);
			var diff = result.getMonth() + result.getFullYear() * 12 - currentMonth;
			if (diff != num) {
				result.setDate(0)
			}
			return result
		},
		addYears: function (value, num) {
			var result = new Date(value.getTime());
			result.setFullYear(result.getFullYear() + num);
			return result
		},
		daysInMonth: function (year, month) {
			switch (month) {
				case 1:
					return 31;
				case 2:
					return $.ig.Date.prototype.isLeapYear(year) ? 29 : 28;
				case 3:
					return 31;
				case 4:
					return 30;
				case 5:
					return 31;
				case 6:
					return 30;
				case 7:
					return 31;
				case 8:
					return 31;
				case 9:
					return 30;
				case 10:
					return 31;
				case 11:
					return 30;
				case 12:
					return 31
			}
			return 0
		},
		isLeapYear: function (year) {
			return year % 4 === 0 && year % 100 !== 0
		},
		toFileTime: function (value) {
			return (value - new Date(1600, 11, 31, 19, 0, 0, 0)) * 1e4
		},
		fromFileTime: function (value) {
			return value / 1e4 + new Date(1600, 11, 31, 19, 0, 0, 0)
		},
		tryParse: function (s) {
			var date = new Date(s);
			if (date == null || $.ig.util.isNaN(+date)) {
				var r = /(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2}):(\d{2}))?/.exec(s);
				if (r) {
					if (r[4]) {
						return {p1: new Date(+r[1], +r[2] - 1, +r[3], +r[4], +r[5], +r[6]), ret: true}
					} else {
						return {p1: new Date(+r[1], +r[2] - 1, +r[3]), ret: true}
					}
				}
				return {p1: null, ret: false}
			}
			if (date.getFullYear() < 1930 && /\d+\/\d+\/\d\d(?!\d)/.test(s)) {
				date.setFullYear(date.getFullYear() + 100)
			}
			return {p1: date, ret: true}
		},
		parseExact: function (s, format, provider) {
			var r = $.ig.Date.prototype.tryParse(s);
			if (!r.ret) {
				throw new $.ig.FormatException("Unknown date format")
			}
			return r.p1
		},
		toLocalTime: function (value) {
			return value
		},
		toUniversalTime: function (value) {
			return value
		},
		getMonth: function (value) {
			return value.getMonth() + 1
		},
		today: function (value) {
			var r = new Date;
			r.setHours(0, 0, 0, 0);
			return r
		},
		getTimeOfDay: function (value) {
			return value.getHours() * 36e5 + value.getMinutes() * 6e4 + value.getSeconds() * 1e3 + value.getMilliseconds()
		},
		getDate: function (value) {
			return new Date(value - $.ig.Date.prototype.getTimeOfDay(value))
		},
		_requiresISOCorrection: !isNaN(+new Date("2000-01-01T00:00:00")) && new Date("2000-01-01T00:00:00").getHours() !== 0,
		_requiresISODateCorrection: !isNaN(new Date("2000-01-01")) && new Date("2000-01-01").getHours() !== 0,
		parse: function (s, provider) {
			provider = provider || $.ig.CultureInfo.prototype.currentCulture();
			var result;
			var isoTest = /(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2})(?:\.| )?(\d*)?/.exec(s);
			if (isoTest) {
				result = $.ig.Date.prototype.parseExact(isoTest[1]);
				if (isoTest[2]) {
					var ms = Number("0." + isoTest[2]) * 1e3;
					result = new Date(+result + ms)
				}
				if (!$.ig.Date.prototype._requiresISOCorrection) {
					return result
				}
			} else {
				result = $.ig.Date.prototype.parseExact(s);
				if (!$.ig.Date.prototype._requiresISODateCorrection) {
					return result
				}
			}
			return new Date(result.getUTCFullYear(), result.getUTCMonth(), result.getUTCDate(), result.getUTCHours(), result.getUTCMinutes(), result.getUTCSeconds(), result.getUTCMilliseconds())
		},
		_longDateFormatOptions: {weekday: "long", year: "numeric", month: "long", day: "numeric"},
		toLongDateString: function (value) {
			return value.toLocaleString($.ig.CultureInfo.prototype.currentCulture().name(), this._longDateFormatOptions).replace(/\u200E/g, "")
		},
		_longTimeFormatOptions: {hour: "numeric", minute: "numeric", second: "numeric"},
		toLongTimeString: function (value) {
			return value.toLocaleString($.ig.CultureInfo.prototype.currentCulture().name(), this._longTimeFormatOptions).replace(/\u200E/g, "")
		},
		$type: new $.ig.Type("Date", $.ig.Object.$type)
	}, true);
	$.ig.extendNativePrototype(Date.prototype, "toOADate", function () {
		var result = (this - new Date(1899, 11, 30)) / 864e5;
		if (this.dst && this.dst()) {
			return result + 1 / 24
		}
		return result
	});
	$.ig.extendNativePrototype(Date.prototype, "kind", function () {
		return $.ig.DateTimeKind.prototype.local
	});
	$.ig.Date.prototype.now = function () {
		return new Date
	};
	$.ig.Date.prototype.minValue = function () {
		return new Date(1, 1, 1, 0, 0, 0, 0)
	};
	$.ig.Date.prototype.maxValue = function () {
		return new Date(9999, 12, 31, 23, 59, 59, .9999999)
	};
	$.ig.Date.prototype.fromMilliseconds = function (value) {
		return value
	};
	$.ig.Date.prototype.toString = function (value, provider) {
		return $.ig.Date.prototype.toStringFormat(value, "s", provider)
	};
	if (!Date.prototype.toISOString) {
		if (!Date.prototype.toJSON) {
			Date.prototype.toJSON = function (key) {
				function f(n) {
					return n < 10 ? "0" + n : n
				}

				return this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z"
			}
		}
		Date.prototype.toISOString = Date.prototype.toJSON
	}
	$.ig.Date.prototype.toStringFormat = function (value, format, provider) {
		var result;
		provider = provider || $.ig.CultureInfo.prototype.currentCulture();
		switch (format) {
			case"s": {
				var s = new Date(Date.UTC(value.getFullYear(), value.getMonth(), value.getDate(), value.getHours(), value.getMinutes(), value.getSeconds())).toISOString();
				var d = s.lastIndexOf(".");
				if (d < 0) {
					return s
				}
				return s.slice(0, d)
			}
			case"MMM": {
				var cultureName = provider.name();
				if (cultureName == "ja-JP") {
					result = value.toLocaleString("en-US", {month: "numeric"}).replace(/\u200E/g, "")
				} else {
					result = value.toLocaleString(provider.name(), {month: "short"}).replace(/\u200E/g, "")
				}
				if (result.contains(" ")) {
					return ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][value.getMonth()]
				}
				return result
			}
			case"MMMM":
				return value.toLocaleString(provider.name(), {month: "long"}).replace(/\u200E/g, "");
			case"ddd":
				return value.toLocaleString(provider.name(), {weekday: "short"}).replace(/\u200E/g, "");
			case"dddd": {
				result = value.toLocaleString(provider.name(), {weekday: "long"}).replace(/\u200E/g, "");
				if (result.contains(" ")) {
					return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][value.getDay()]
				}
				return result
			}
			case"tt":
				return value.getHours() <= 11 ? "AM" : "PM";
			case"%t":
				return value.getHours() <= 11 ? "A" : "P"
		}
		throw new $.ig.FormatException(1, "Unknown Date format: " + format)
	};
	$.ig.util.canAssign = function (targetType, type) {
		if (targetType.name === "Nullable$1" && type.name !== "Nullable$1") {
			targetType = $.ig.Nullable.prototype.getUnderlyingType(targetType)
		}
		return $.ig.util.canAssignSimple(targetType, type)
	};
	$.ig.util.canAssignSimple = function (targetType, type) {
		if (targetType === type || $.ig.Type.prototype.checkEquals(targetType, type)) {
			return true
		}
		if (type.interfaces) {
			for (var i = 0; i < type.interfaces.length; i++) {
				if ($.ig.util.canAssignSimple(targetType, type.interfaces[i])) {
					return true
				}
			}
		}
		if (type.baseType) {
			return $.ig.util.canAssignSimple(targetType, type.baseType)
		}
		return false
	};
	$.ig.util.cast = function (targetType, obj) {
		if (obj === undefined || obj === null) {
			return null
		}
		if (targetType === Array) {
			return obj instanceof Array ? obj : null
		}
		if (targetType === String) {
			targetType = $.ig.String.prototype.$type
		}
		var type = obj;
		if (obj.$type) {
			type = obj.$type
		} else if (typeof obj === "number") {
			type = targetType === Number ? Number : $.ig.Number.prototype.$type
		} else if (typeof obj === "string") {
			type = $.ig.String.prototype.$type
		} else if (typeof obj === "boolean") {
			type = $.ig.Boolean.prototype.$type
		} else if (obj instanceof Date) {
			type = $.ig.Date.prototype.$type
		}
		if ($.ig.util.canAssignSimple(targetType, type)) {
			return obj
		}
		if (targetType.name === "Nullable$1" && type.name !== "Nullable$1") {
			targetType = $.ig.Nullable.prototype.getUnderlyingType(targetType);
			if ($.ig.util.canAssignSimple(targetType, type)) {
				return $.ig.util.toNullable(targetType, obj)
			}
			return $.ig.util.toNullable(targetType, null)
		}
		return null
	};
	$.ig.Dictionary = Class.extend({
		init: function () {
			this.proxy = {};
			this.keysHolder = this.proxy;
			this._count = 0
		}, $type: new $.ig.Type("Dictionary", $.ig.Object.prototype.$type), proxy: null
	}, true);
	$.ig.Dictionary.prototype.getDictionary = function (o) {
		var dict = new $.ig.Dictionary;
		dict.proxy = o;
		dict.keysHolder = o;
		return dict
	};
	$.ig.Dictionary.prototype.containsKey = function (key) {
		return this.proxy[key] !== undefined
	};
	$.ig.Dictionary.prototype.count = function () {
		return this._count
	};
	$.ig.Dictionary.prototype.item = function (key, value) {
		if (arguments.length === 1) {
			return this.proxy[key]
		} else {
			if (!this.proxy[key]) {
				this._count++
			}
			this.proxy[key] = value
		}
	};
	$.ig.Dictionary.prototype.add = function (key, value) {
		if (!this.proxy[key]) {
			this._count++
		}
		this.proxy[key] = value
	};
	$.ig.Dictionary.prototype.remove = function (key) {
		delete this.proxy[key];
		this._count--
	};
	$.ig.Dictionary.prototype.keys = function () {
		return new $.ig.KeyEnumerator(this)
	};
	$.ig.Dictionary.prototype.values = function () {
		return new $.ig.ValueEnumerator(this)
	};
	$.ig.Dictionary.prototype.clear = function () {
		this.proxy = {};
		this.keysHolder = this.proxy;
		this._count = 0
	};
	$.ig.EventArgs = $.ig.Object.extend({
		init: function () {
		}
	}, true);
	$.ig.String = Class.extend({$type: new $.ig.Type("String", $.ig.Object.prototype.$type, [$.ig.IConvertible.prototype.$type, $.ig.IComparable.prototype.$type])}, true);
	$.ig.String.prototype.isDigit = function (str, index) {
		index = index || 0;
		var ch = str.charAt(index);
		if (ch >= "0" && ch <= "9") {
			return true
		}
		return false
	};
	$.ig.String.prototype.charMaxValue = function (s) {
		return "\uffff"
	};
	$.ig.String.prototype.charMinValue = function (s) {
		return "\0"
	};
	$.ig.Boolean = Class.extend({
		tryParse: function (value) {
			value = value.toLowerCase();
			if (value == "true") {
				return {p1: true, ret: true}
			} else if (value == "false") {
				return {p1: false, ret: true}
			}
			return {p1: false, ret: false}
		},
		$type: new $.ig.Type("Boolean", $.ig.Object.prototype.$type, [$.ig.IConvertible.prototype.$type, $.ig.IComparable.prototype.$type])
	}, true);
	$.ig.Number = Class.extend({$type: new $.ig.Type("Number", $.ig.Object.prototype.$type, [$.ig.IConvertible.prototype.$type, $.ig.IComparable.prototype.$type])}, true);
	$.ig.Number.prototype.parseInt = function (a, b) {
		return parseInt(a, b)
	};
	$.ig.Number.prototype.log10 = function (x) {
		return Math.log(x) / Math.log(10)
	};
	if (!Number.isPrimitive) {
		Number.isPrimitive = function () {
			return true
		}
	}
	if (!String.isPrimitive) {
		String.isPrimitive = function () {
			return false
		}
	}
	$.ig.extendNativePrototype(String.prototype, "toDateTime", function (provider) {
		var result = new Date(this);
		if (!isNaN(+result)) {
			return result
		}
		if (/^((([0-9]{1,4})\s*(\s+((a|p)m?)\s*))|(([0-9]{1,4})\s*:\s*([0-9]?[0-9])\s*(:\s*([0-9]?[0-9])\s*(.\s*([0-9]{0,4})[0-9]*\s*)?)?(\s+((a|p)m?)\s*)?)|(\s*([0-9]?[0-9])\s*:\s*([0-9]?[0-9])\s*.\s*([0-9]{0,4})[0-9]*\s*(\s+((a|p)m?)\s*)?))$/i.test(this)) {
			return new Date((new Date).toDateString() + " " + this)
		}
		throw new $.ig.FormatException(1, "The string cannot be converted to a date")
	});
	$.ig.extendNativePrototype(String.prototype, "toDecimal", function (provider) {
		var result = +this;
		if ($.ig.util.isNaN(result)) {
			throw new $.ig.FormatException(1, "The string cannot be converted to a number")
		}
		return result
	});
	$.ig.extendNativePrototype(String.prototype, "toString1", function (provider) {
		return this.toString()
	});
	String.isInstanceOfType = function (value) {
		return typeof value == "string"
	};
	$.ig.extendNativePrototype(Number.prototype, "toDecimal", function (provider) {
		return +this
	});
	$.ig.extendNativePrototype(Number.prototype, "toDouble", function (provider) {
		return +this
	});
	$.ig.extendNativePrototype(Number.prototype, "toString1", function (provider) {
		return this.toLocaleString(provider.name(), {useGrouping: false})
	});
	$.ig.extendNativePrototype(Date.prototype, "getType", function (provider) {
		return $.ig.Date.prototype.$type
	});
	$.ig.extendNativePrototype(Date.prototype, "equals", function (other) {
		return other instanceof Date && +this === +other
	});
	$.ig.extendNativePrototype(Boolean.prototype, "getHashCode", function (provider) {
		return +this
	});
	$.ig.extendNativePrototype(Boolean.prototype, "toByte", function (provider) {
		return +this
	});
	$.ig.extendNativePrototype(Boolean.prototype, "toSByte", function (provider) {
		return +this
	});
	$.ig.extendNativePrototype(Boolean.prototype, "toInt16", function (provider) {
		return +this
	});
	$.ig.extendNativePrototype(Boolean.prototype, "toUInt16", function (provider) {
		return +this
	});
	$.ig.extendNativePrototype(Boolean.prototype, "toInt32", function (provider) {
		return +this
	});
	$.ig.extendNativePrototype(Boolean.prototype, "toUInt32", function (provider) {
		return +this
	});
	$.ig.extendNativePrototype(Boolean.prototype, "toInt64", function (provider) {
		return +this
	});
	$.ig.extendNativePrototype(Boolean.prototype, "toUInt64", function (provider) {
		return +this
	});
	$.ig.extendNativePrototype(Boolean.prototype, "toSingle", function (provider) {
		return +this
	});
	$.ig.extendNativePrototype(Boolean.prototype, "toDouble", function (provider) {
		return +this
	});
	$.ig.extendNativePrototype(Boolean.prototype, "toDecimal", function (provider) {
		return +this
	});
	$.ig.extendNativePrototype(Boolean.prototype, "toBoolean", function (provider) {
		return !!+this
	});
	$.ig.extendNativePrototype(Boolean.prototype, "toString1", function (provider) {
		return this.toString()
	});
	$.ig.extendNativePrototype(Boolean.prototype, "compareTo", function (other) {
		return $.ig.util.boolCompare(this, other)
	});
	$.ig.extendNativePrototype(Number.prototype, "compareTo", function (other) {
		return $.ig.util.compareSimple(+this, other)
	});
	$.ig.Single = Class.extend({}, true);
	$.ig.Single.prototype.parseFloat = function (s) {
		return parseFloat(s)
	};
	$.ig.Single.prototype.isInfinity = function (s) {
		return s === Infinity || s === -Infinity
	};
	$.ig.Int32 = Class.extend({$type: new $.ig.Type("Int32", $.ig.Object.prototype.$type, [$.ig.IComparable.prototype.$type, $.ig.IComparable$1.prototype.$type.specialize(-1), $.ig.IEquatable$1.prototype.$type.specialize(-1)])}, true);
	$.ig.Int32.prototype.$type.initSelfReferences();
	$.ig.Double = Class.extend({$type: new $.ig.Type("Double", $.ig.Object.prototype.$type)}, true);
	$.ig.Delegate = Class.extend({$type: new $.ig.Type("Delegate", $.ig.Object.prototype.$type)}, true);
	$.ig.Delegate.prototype.combine = function (del1, del2) {
		if (!del1) {
			return del2
		}
		if (!del2) {
			return del1
		}
		var ret = function () {
			del1.apply(null, arguments);
			return del2.apply(null, arguments)
		};
		ret.enumerate = function (arr) {
			if (del1) {
				if (del1.enumerate) {
					del1.enumerate(arr)
				} else {
					arr.push(del1)
				}
			}
			if (del2) {
				if (del2.enumerate) {
					del2.enumerate(arr)
				} else {
					arr.push(del2)
				}
			}
		};
		return ret
	};
	$.ig.Delegate.prototype.remove = function (del1, del2) {
		if (!del1) {
			return null
		}
		if (!del2) {
			return del1
		}
		var arr = [];
		var del = null;
		if (del1.enumerate) {
			del1.enumerate(arr)
		} else {
			arr.push(del1)
		}
		for (var i = 0; i < arr.length; i++) {
			if (del2.original) {
				if (arr[i].original == del2.original && arr[i].target == del2.target) {
					continue
				}
			}
			if (arr[i] == del2) {
				continue
			}
			del = $.ig.Delegate.prototype.combine(del, arr[i])
		}
		return del
	};
	$.ig.ReflectionUtil = Class.extend({$type: new $.ig.Type("ReflectionUtil", $.ig.Object.prototype.$type)}, true);
	$.ig.ReflectionUtil.prototype.getPropertyGetter = function (type, propertyName) {
		if (typeof type.prototype[propertyName] === "function") {
			return function (instance) {
				return type.prototype[propertyName].apply(instance, arguments)
			}
		}
		return function (instance) {
			return instance[propertyName]
		}
	};
	$.ig.IEnumerable = Class.extend({$type: new $.ig.Type("IEnumerable", null)}, true);
	$.ig.IEnumerator = Class.extend({$type: new $.ig.Type("IEnumerator", null)}, true);
	$.ig.IEqualityComparer$1 = Class.extend({$type: new $.ig.Type("IEqualityComparer", $.ig.Object.prototype.$type)}, true);
	$.ig.IList = Class.extend({$type: new $.ig.Type("IList", null, [$.ig.IEnumerable.prototype.$type])}, true);
	$.ig.IEnumerable$1 = Class.extend({$type: new $.ig.Type("IEnumerable$1", null, [$.ig.IEnumerable.prototype.$type])}, true);
	$.ig.ICollection$1 = Class.extend({$type: new $.ig.Type("ICollection$1", null, [$.ig.IEnumerable$1.prototype.$type.specialize(0), $.ig.IEnumerable.prototype.$type])}, true);
	$.ig.IList$1 = Class.extend({$type: new $.ig.Type("IList$1", null, [$.ig.ICollection$1.prototype.$type.specialize(0), $.ig.IEnumerable$1.prototype.$type.specialize(0), $.ig.IEnumerable.prototype.$type])}, true);
	$.ig.IEnumerator$1 = Class.extend({$type: new $.ig.Type("IEnumerator$1", null, [$.ig.IEnumerator.prototype.$type])}, true);
	$.ig.Error = Class.extend({
		init: function (initNumber) {
			if (initNumber > 0) {
				switch (initNumber) {
					case 1:
						this.init1.apply(this, arguments);
						break;
					case 2:
						this.init2.apply(this, arguments);
						break
				}
				return
			}
			this.__message = null;
			this.__innerException = null
		}, init1: function (initNumber, message) {
			this.__message = message
		}, init2: function (initNumber, message, innerException) {
			this.__message = message;
			this.__innerException = innerException
		}, toString: function () {
			return this.message()
		}, $type: new $.ig.Type("Error", $.ig.Object.prototype.$type)
	}, true);
	$.ig.Error.prototype.message = function () {
		return this.__message
	};
	$.ig.Error.prototype.innerException = function () {
		return this.__innerException
	};
	$.ig.IDictionary = Class.extend({$type: new $.ig.Type("IDictionary", null)}, true);
	$.ig.ValueEnumerator = Class.extend({
		init: function (dict) {
			this._dict = dict;
			this._index = -1;
			this._count = 0;
			this._values = [];
			for (var item in this._dict.proxy) {
				if (this._dict.proxy.hasOwnProperty(item)) {
					this._values[this._count] = this._dict.proxy[item];
					this._count++
				}
			}
		}, current: function () {
			return this._values[this._index]
		}, dispose: function () {
		}, moveNext: function () {
			this._index++;
			return this._index < this._count
		}, reset: function () {
			this._index = -1
		}, getEnumerator: function () {
			this.reset();
			return this
		}, $type: new $.ig.Type("ValueEnumerator", $.ig.Object.prototype.$type, [$.ig.IEnumerable.prototype.$type])
	}, true);
	$.ig.KeyEnumerator = Class.extend({
		init: function (dict) {
			this._dict = dict;
			this._index = -1;
			this._count = 0;
			this._keys = [];
			for (var item in this._dict.proxy) {
				if (this._dict.proxy.hasOwnProperty(item)) {
					this._keys[this._count] = item;
					this._count++
				}
			}
		}, current: function () {
			return this._keys[this._index]
		}, moveNext: function () {
			this._index++;
			return this._index < this._count
		}, reset: function () {
			this._index = -1
		}, getEnumerator: function () {
			this.reset();
			return this
		}, $type: new $.ig.Type("KeyEnumerator", $.ig.Object.prototype.$type, [$.ig.IEnumerable.prototype.$type])
	}, true);
	$.ig.truncate = function (val) {
		if (val >= 0) {
			return Math.floor(val)
		} else {
			return Math.ceil(val)
		}
	};
	$.ig.intDivide = function (int1, int2) {
		var result = int1 / int2;
		return $.ig.truncate(result)
	};
	$.ig.Nullable = Class.extend({
		getUnderlyingType: function (nullableType) {
			if (nullableType.isGenericType !== undefined && nullableType.isGenericType() && !nullableType.isGenericTypeDefinition() && $.ig.Nullable$1.prototype.$type.typeName() == nullableType.typeName()) {
				return nullableType.genericTypeArguments()[0]
			}
			return null
		}, $type: new $.ig.Type("Nullable", $.ig.Object.prototype.$type)
	}, true);
	$.ig.Nullable$1 = Class.extend({
		$t: null, init: function ($t, value) {
			this.$t = $t;
			this.$type = this.$type.specialize(this.$t);
			$.ig.Object.prototype.init.call(this);
			if (value !== undefined) {
				this._value = value
			}
		}, equals: function (value) {
			return $.ig.util.nullableEquals(this, value)
		}, getHashCode: function () {
			return this._value === null ? 0 : this._value.getHashCode()
		}, hasValue: function () {
			return this._value !== null
		}, toString: function () {
			return this._value === null ? "" : this._value.toString()
		}, _value: null, value: function (value) {
			if (arguments.length === 1) {
				this._value = value;
				return value
			} else {
				return this._value
			}
		}, getValueOrDefault: function () {
			if (this.hasValue()) {
				return this._value
			} else {
				return this.getDefaultValue()
			}
		}, getDefaultValue: function () {
			if ($.ig.util.canAssign($.ig.Number.prototype.$type, this.$t)) {
				return 0
			} else if ($.ig.util.canAssign($.ig.Boolean.prototype.$type, this.$t)) {
				return false
			} else if (this.$t.baseType == $.ig.ValueType.prototype.$type) {
				return $.ig.util.createInstance(this.$t)
			} else {
				return null
			}
		}, getValueOrDefault1: function (defaultValue) {
			if (this.hasValue()) {
				return this._value
			} else {
				return defaultValue
			}
		}, preIncrement: function () {
			if (!this.hasValue()) {
				return this
			}
			this._value++;
			return this
		}, preDecrement: function () {
			if (!this.hasValue()) {
				return this
			}
			this._value--;
			return this
		}, postIncrement: function () {
			if (!this.hasValue()) {
				return this
			}
			var originalValue = this._value;
			this._value++;
			return new $.ig.Nullable$1(this.$t, originalValue)
		}, postDecrement: function () {
			if (!this.hasValue()) {
				return this
			}
			var originalValue = this._value;
			this._value--;
			return new $.ig.Nullable$1(this.$t, originalValue)
		}, isNullable: true, $type: new $.ig.Type("Nullable$1", $.ig.Object.prototype.$type)
	}, true);
	$.ig.util.toNullable = function (t, value) {
		if (value == null) {
			return t._$nullNullable || (t._$nullNullable = new $.ig.Nullable$1(t, value))
		} else if (value.isNullable) {
			return value
		}
		return new $.ig.Nullable$1(t, value)
	};
	$.ig.util.toLowerCase = function (c) {
		return c.toLowerCase()
	};
	$.ig.util.isLower = function (c) {
		return c === c.toLowerCase()
	};
	$.ig.util.isLetterOrDigit = function (c) {
		var charCode = c.charCodeAt(0);
		if (97 <= charCode && charCode <= 122) {
			return true
		}
		if (65 <= charCode && charCode <= 90) {
			return true
		}
		if (48 <= charCode && charCode <= 57) {
			return true
		}
		if (charCode <= 127) {
			return false
		}
		return $.ig.unicode_hack("(\\p{L}|\\p{Nd})").test(c)
	};
	$.ig.util.isLetter = function (c) {
		var charCode = c.charCodeAt(0);
		if (97 <= charCode && charCode <= 122) {
			return true
		}
		if (65 <= charCode && charCode <= 90) {
			return true
		}
		if (charCode <= 127) {
			return false
		}
		return $.ig.unicode_hack("\\p{L}").test(c)
	};
	$.ig.util.isDigit1 = function (c, index) {
		return $.ig.util.isDigit(c[index])
	};
	$.ig.util.isDigit = function (c) {
		var charCode = c.charCodeAt(0);
		if (48 <= charCode && charCode <= 57) {
			return true
		}
		if (charCode <= 127) {
			return false
		}
		return $.ig.unicode_hack("\\p{Nd}").test(c)
	};
	$.ig.util.isNumber = function (c) {
		var charCode = c.charCodeAt(0);
		if (48 <= charCode && charCode <= 57) {
			return true
		}
		if (charCode <= 127) {
			return false
		}
		return $.ig.unicode_hack("\\p{N}").test(c)
	};
	$.ig.util.toUpperCase = function (c) {
		return c.toUpperCase()
	};
	$.ig.util.concat = function (v1, v2) {
		if (v1 == null) {
			v1 = ""
		} else if (!!v1.isNullable) {
			v1 = v1.getValueOrDefault1("")
		}
		if (v2 == null) {
			v2 = ""
		} else if (!!v2.isNullable) {
			v2 = v2.getValueOrDefault1("")
		}
		return v1.toString() + v2.toString()
	};
	$.ig.util.nullableAdd = function (v1, v2) {
		if (v1.isNullable && !v1.hasValue()) {
			return null
		}
		if (v2.isNullable && !v2.hasValue()) {
			return null
		}
		var val1 = v1;
		var val2 = v2;
		if (v1.isNullable) {
			val1 = v1.value()
		}
		if (v2.isNullable) {
			val2 = v2.value()
		}
		return $.ig.util.toNullable($.ig.Number.prototype.$type, val1 + val2)
	};
	$.ig.util.nullableSubtract = function (v1, v2) {
		if (v1.isNullable && !v1.hasValue()) {
			return null
		}
		if (v2.isNullable && !v2.hasValue()) {
			return null
		}
		var val1 = v1;
		var val2 = v2;
		if (v1.isNullable) {
			val1 = v1.value()
		}
		if (v2.isNullable) {
			val2 = v2.value()
		}
		return $.ig.util.toNullable($.ig.Number.prototype.$type, val1 - val2)
	};
	$.ig.util.nullableMultiply = function (v1, v2) {
		if (v1.isNullable && !v1.hasValue()) {
			return null
		}
		if (v2.isNullable && !v2.hasValue()) {
			return null
		}
		var val1 = v1;
		var val2 = v2;
		if (v1.isNullable) {
			val1 = v1.value()
		}
		if (v2.isNullable) {
			val2 = v2.value()
		}
		return $.ig.util.toNullable($.ig.Number.prototype.$type, val1 * val2)
	};
	$.ig.util.nullableDivide = function (v1, v2) {
		if (v1.isNullable && !v1.hasValue()) {
			return null
		}
		if (v2.isNullable && !v2.hasValue()) {
			return null
		}
		var val1 = v1;
		var val2 = v2;
		if (v1.isNullable) {
			val1 = v1.value()
		}
		if (v2.isNullable) {
			val2 = v2.value()
		}
		return $.ig.util.toNullable($.ig.Number.prototype.$type, val1 / val2)
	};
	$.ig.util.nullableModulus = function (v1, v2) {
		if (v1.isNullable && !v1.hasValue()) {
			return null
		}
		if (v2.isNullable && !v2.hasValue()) {
			return null
		}
		var val1 = v1;
		var val2 = v2;
		if (v1.isNullable) {
			val1 = v1.value()
		}
		if (v2.isNullable) {
			val2 = v2.value()
		}
		return $.ig.util.toNullable($.ig.Number.prototype.$type, val1 % val2)
	};
	$.ig.util.nullableGreaterThan = function (v1, v2) {
		if (v1.isNullable && !v1.hasValue()) {
			return false
		}
		if (v2.isNullable && !v2.hasValue()) {
			return false
		}
		var val1 = v1;
		var val2 = v2;
		if (v1.isNullable) {
			val1 = v1.value()
		}
		if (v2.isNullable) {
			val2 = v2.value()
		}
		return val1 > val2
	};
	$.ig.util.nullableGreaterThanOrEqual = function (v1, v2) {
		if (v1.isNullable && !v1.hasValue()) {
			return false
		}
		if (v2.isNullable && !v2.hasValue()) {
			return false
		}
		var val1 = v1;
		var val2 = v2;
		if (v1.isNullable) {
			val1 = v1.value()
		}
		if (v2.isNullable) {
			val2 = v2.value()
		}
		return val1 >= val2
	};
	$.ig.util.nullableLessThan = function (v1, v2) {
		if (v1.isNullable && !v1.hasValue()) {
			return false
		}
		if (v2.isNullable && !v2.hasValue()) {
			return false
		}
		var val1 = v1;
		var val2 = v2;
		if (v1.isNullable) {
			val1 = v1.value()
		}
		if (v2.isNullable) {
			val2 = v2.value()
		}
		return val1 < val2
	};
	$.ig.util.nullableLessThanOrEqual = function (v1, v2) {
		if (v1.isNullable && !v1.hasValue()) {
			return false
		}
		if (v2.isNullable && !v2.hasValue()) {
			return false
		}
		var val1 = v1;
		var val2 = v2;
		if (v1.isNullable) {
			val1 = v1.value()
		}
		if (v2.isNullable) {
			val2 = v2.value()
		}
		return val1 <= val2
	};
	$.ig.util.nullableIsNull = function (v) {
		return v == null || !!v.isNullable && !v.hasValue()
	};
	$.ig.util.nullableEquals = function (v1, v2) {
		var v1IsNull = v1 == null || !!v1.isNullable && !v1.hasValue();
		var v2IsNull = v2 == null || !!v2.isNullable && !v2.hasValue();
		if (v1IsNull && v2IsNull) {
			return true
		}
		if (v1IsNull != v2IsNull) {
			return false
		}
		var val1 = v1;
		var val2 = v2;
		if (v1.isNullable) {
			val1 = v1.value()
		}
		if (v2.isNullable) {
			val2 = v2.value()
		}
		return val1 == val2
	};
	$.ig.util.nullableNotEquals = function (v1, v2) {
		return !$.ig.util.nullableEquals(v1, v2)
	};
	$.ig.util.unwrapNullable = function (v) {
		if (v == null || !v.isNullable) {
			return v
		}
		if (!v.hasValue()) {
			return null
		}
		return v.value()
	};
	$.ig.util.wrapNullable = function ($t, v) {
		if (v != null && v.isNullable) {
			return v
		}
		return $.ig.util.toNullable($t, v)
	};
	$.ig.util.getColorStringSafe = function (v) {
		return v == null ? null : v.colorString()
	};
	$.ig.util.wellKnownColors = {
		aliceblue: "f0f8ff",
		antiquewhite: "faebd7",
		aqua: "00ffff",
		aquamarine: "7fffd4",
		azure: "f0ffff",
		beige: "f5f5dc",
		bisque: "ffe4c4",
		black: "000000",
		blanchedalmond: "ffebcd",
		blue: "0000ff",
		blueviolet: "8a2be2",
		brown: "a52a2a",
		burlywood: "deb887",
		cadetblue: "5f9ea0",
		chartreuse: "7fff00",
		chocolate: "d2691e",
		coral: "ff7f50",
		cornflowerblue: "6495ed",
		cornsilk: "fff8dc",
		crimson: "dc143c",
		cyan: "00ffff",
		darkblue: "00008b",
		darkcyan: "008b8b",
		darkgoldenrod: "b8860b",
		darkgray: "a9a9a9",
		darkgreen: "006400",
		darkkhaki: "bdb76b",
		darkmagenta: "8b008b",
		darkolivegreen: "556b2f",
		darkorange: "ff8c00",
		darkorchid: "9932cc",
		darkred: "8b0000",
		darksalmon: "e9967a",
		darkseagreen: "8fbc8f",
		darkslateblue: "483d8b",
		darkslategray: "2f4f4f",
		darkturquoise: "00ced1",
		darkviolet: "9400d3",
		deeppink: "ff1493",
		deepskyblue: "00bfff",
		dimgray: "696969",
		dodgerblue: "1e90ff",
		feldspar: "d19275",
		firebrick: "b22222",
		floralwhite: "fffaf0",
		forestgreen: "228b22",
		fuchsia: "ff00ff",
		gainsboro: "dcdcdc",
		ghostwhite: "f8f8ff",
		gold: "ffd700",
		goldenrod: "daa520",
		gray: "808080",
		green: "008000",
		greenyellow: "adff2f",
		honeydew: "f0fff0",
		hotpink: "ff69b4",
		indianred: "cd5c5c",
		indigo: "4b0082",
		ivory: "fffff0",
		khaki: "f0e68c",
		lavender: "e6e6fa",
		lavenderblush: "fff0f5",
		lawngreen: "7cfc00",
		lemonchiffon: "fffacd",
		lightblue: "add8e6",
		lightcoral: "f08080",
		lightcyan: "e0ffff",
		lightgoldenrodyellow: "fafad2",
		lightgrey: "d3d3d3",
		lightgreen: "90ee90",
		lightpink: "ffb6c1",
		lightsalmon: "ffa07a",
		lightseagreen: "20b2aa",
		lightskyblue: "87cefa",
		lightslateblue: "8470ff",
		lightslategray: "778899",
		lightsteelblue: "b0c4de",
		lightyellow: "ffffe0",
		lime: "00ff00",
		limegreen: "32cd32",
		linen: "faf0e6",
		magenta: "ff00ff",
		maroon: "800000",
		mediumaquamarine: "66cdaa",
		mediumblue: "0000cd",
		mediumorchid: "ba55d3",
		mediumpurple: "9370d8",
		mediumseagreen: "3cb371",
		mediumslateblue: "7b68ee",
		mediumspringgreen: "00fa9a",
		mediumturquoise: "48d1cc",
		mediumvioletred: "c71585",
		midnightblue: "191970",
		mintcream: "f5fffa",
		mistyrose: "ffe4e1",
		moccasin: "ffe4b5",
		navajowhite: "ffdead",
		navy: "000080",
		oldlace: "fdf5e6",
		olive: "808000",
		olivedrab: "6b8e23",
		orange: "ffa500",
		orangered: "ff4500",
		orchid: "da70d6",
		palegoldenrod: "eee8aa",
		palegreen: "98fb98",
		paleturquoise: "afeeee",
		palevioletred: "d87093",
		papayawhip: "ffefd5",
		peachpuff: "ffdab9",
		peru: "cd853f",
		pink: "ffc0cb",
		plum: "dda0dd",
		powderblue: "b0e0e6",
		purple: "800080",
		red: "ff0000",
		rosybrown: "bc8f8f",
		royalblue: "4169e1",
		saddlebrown: "8b4513",
		salmon: "fa8072",
		sandybrown: "f4a460",
		seagreen: "2e8b57",
		seashell: "fff5ee",
		sienna: "a0522d",
		silver: "c0c0c0",
		skyblue: "87ceeb",
		slateblue: "6a5acd",
		slategray: "708090",
		snow: "fffafa",
		springgreen: "00ff7f",
		steelblue: "4682b4",
		tan: "d2b48c",
		teal: "008080",
		thistle: "d8bfd8",
		tomato: "ff6347",
		turquoise: "40e0d0",
		violet: "ee82ee",
		violetred: "d02090",
		wheat: "f5deb3",
		white: "ffffff",
		whitesmoke: "f5f5f5",
		yellow: "ffff00",
		yellowgreen: "9acd32"
	};
	$.ig.util.stringToColor = function (str) {
		var ret = {a: 255, r: 0, g: 0, b: 0};
		var asColorName = str.replace(" ", "").toLowerCase();
		if (asColorName === "transparent") {
			return {a: 0, r: 0, g: 0, b: 0}
		}
		if ($.ig.util.wellKnownColors[asColorName] !== undefined) {
			str = $.ig.util.wellKnownColors[asColorName]
		}
		var parts;
		if (str.lastIndexOf("rgba", 0) === 0) {
			str = str.replace("rgba", "").replace(" ", "").replace("(", "").replace(")", "");
			parts = str.split(",");
			ret.r = parseInt(parts[0], 10);
			ret.g = parseInt(parts[1], 10);
			ret.b = parseInt(parts[2], 10);
			ret.a = parseFloat(parts[3]) * 255
		} else if (str.lastIndexOf("rgb", 0) === 0) {
			str = str.replace("rgb", "").replace(" ", "").replace("(", "").replace(")", "");
			parts = str.split(",");
			ret.r = parseInt(parts[0], 10);
			ret.g = parseInt(parts[1], 10);
			ret.b = parseInt(parts[2], 10)
		} else {
			str = str.replace("#", "").replace(" ", "");
			if (str.length === 6) {
				ret.r = parseInt(str.substr(0, 2), 16);
				ret.g = parseInt(str.substr(2, 2), 16);
				ret.b = parseInt(str.substr(4, 2), 16)
			} else if (str.length === 3) {
				ret.r = parseInt(str.substr(0, 1) + str.substr(0, 1), 16);
				ret.g = parseInt(str.substr(1, 1) + str.substr(1, 1), 16);
				ret.b = parseInt(str.substr(2, 1) + str.substr(2, 1), 16)
			}
		}
		return ret
	};
	$.ig.util.rgbToHex = function (color) {
		var r, g, b, colHex = null;
		if (color.charAt(0) === "r") {
			color = color.replace("rgb(", "").replace(")", "").split(",");
			r = parseInt(color[0], 10).toString(16);
			g = parseInt(color[1], 10).toString(16);
			b = parseInt(color[2], 10).toString(16);
			r = r.length === 1 ? "0" + r : r;
			g = g.length === 1 ? "0" + g : g;
			b = b.length === 1 ? "0" + b : b;
			colHex = "#" + r + g + b
		}
		return colHex
	};
	$.ig.util.isResponseTypeSupported = function (responseType) {
		var xhr = null;
		try {
			xhr = new XMLHttpRequest;
			xhr.open("GET", "/");
			xhr.responseType = responseType
		} catch (e) {
			return false
		}
		if (xhr === null) {
			return false
		}
		return xhr.responseType === responseType
	};
	$.ig.util.getBinary = function (url, callback, error) {
		var data, ret, req, useVbArray = false,
			arrayBufferSupported = $.ig.util.isResponseTypeSupported("arraybuffer") && typeof Uint8Array != "undefined";
		if (typeof XMLHttpRequest == "undefined") {
			try {
				req = new ActiveXObject("Msxml2.XMLHTTP.6.0")
			} catch (e) {
			}
			try {
				req = new ActiveXObject("Msxml2.XMLHTTP.3.0")
			} catch (e) {
			}
			req = new ActiveXObject("Microsoft.XMLHTTP")
		} else {
			req = new XMLHttpRequest
		}
		if (!arrayBufferSupported) {
			if (req.overrideMimeType) {
				req.overrideMimeType("text/plain; charset=x-user-defined")
			}
		}
		if (typeof VBArray != "undefined") {
			useVbArray = true
		}
		req.onreadystatechange = function () {
			if (req.readyState == 4) {
				if (req.status == 200) {
					if (arrayBufferSupported && typeof this.response != "undefined") {
						callback(new Uint8Array(this.response))
					} else {
						if (useVbArray) {
							data = new VBArray(req.responseBody).toArray();
							for (var i = 0; i < data.length; i++) {
								data[i] = String.fromCharCode(data[i])
							}
							ret = data.join("");
							callback(ret)
						} else {
							callback(req.responseText)
						}
					}
				} else {
					error(req.error)
				}
			}
		};
		req.open("GET", url, true);
		if (arrayBufferSupported) {
			req.responseType = "arraybuffer"
		}
		req.send(null)
	};
	$.ig.util.extCopy = function (source, bindings) {
		var i, j, k;
		if (typeof source == "undefined" || !source) {
			return
		}
		for (j = 0; j < bindings.length; j++) {
			var dests = bindings[j][0];
			var meths = bindings[j][1];
			for (k = 0; k < dests.length; k++) {
				for (i = 0; i < meths.length; i++) {
					if (typeof dests[k] == "undefined" || !dests[k] || typeof meths[i] == "undefined" || !meths[i]) {
						continue
					}
					$.ig.extendNativePrototype(dests[k].prototype, meths[i], source.prototype[meths[i]])
				}
			}
		}
	};
	$.ig.$currDefinitions = null;
	$.ig.$allDefinitions = [];
	$.ig.util.getDefinedNameAndNamespace = function (name) {
		var ns = $.ig;
		var nParts = name.split(".");
		if (nParts.length != 1) {
			for (var i = 0; i < nParts.length - 1; i++) {
				var nsName = nParts[i];
				if (!ns[nsName]) {
					ns[nsName] = {}
				}
				ns = ns[nsName]
			}
			name = nParts[nParts.length - 1]
		}
		return {name: name, namespace: ns}
	};
	$.ig.util.bulkDefine = function (toDefine) {
		var i = 0, curr = null, els = null;
		for (i = 0; i < toDefine.length; i++) {
			curr = toDefine[i];
			els = curr.split(":");
			curr = els[0];
			var info = $.ig.util.getDefinedNameAndNamespace(curr);
			info.namespace[info.name] = info.namespace[info.name] || Class.extend({
				$type: new $.ig.Type(curr, $.ig.Object.prototype.$type),
				$placeholder: true
			}, true);
			if (els.length > 1 && $.ig.$currDefinitions) {
				$.ig.$currDefinitions[els[1]] = info.namespace[info.name];
				$.ig.$currDefinitions["$" + els[1]] = info.namespace[info.name].prototype;
				$.ig.$currDefinitions["$_" + curr] = els[1]
			}
			if ($.ig.$allDefinitions && $.ig.$allDefinitions.indexOf($.ig.$currDefinitions) < 0) {
				$.ig.$allDefinitions.push($.ig.$currDefinitions)
			}
		}
	};
	$.ig.util.defType = function (name, baseName, definition) {
		var els = null, i, currDefs, shortName;
		els = name.split(":");
		name = els[0];
		var info = $.ig.util.getDefinedNameAndNamespace(name);
		var result = info.namespace[info.name];
		if (!result || result.prototype.$placeholder) {
			var baseInfo = $.ig.util.getDefinedNameAndNamespace(baseName);
			result = baseInfo.namespace[baseInfo.name].extend(definition);
			info.namespace[info.name] = result
		}
		if (els.length > 1 && $.ig.$currDefinitions) {
			$.ig.$currDefinitions[els[1]] = result;
			$.ig.$currDefinitions["$" + els[1]] = result.prototype;
			$.ig.$currDefinitions["$_" + name] = els[1];
			if ($.ig.$allDefinitions) {
				for (i = 0; i < $.ig.$allDefinitions.length; i++) {
					currDefs = $.ig.$allDefinitions[i];
					if (currDefs["$_" + name] !== undefined) {
						shortName = currDefs["$_" + name];
						currDefs[shortName] = result;
						currDefs["$" + shortName] = result.prototype
					}
				}
			}
		}
		return result
	};
	$.ig.util.getClassCount = function (classNamePrefix, isPrefix) {
		var styleSheets = document.styleSheets, numFound = 0, count = 0, currSheet, rules, currSelector, currVal;
		classNamePrefix = classNamePrefix.toLowerCase();
		if (!styleSheets) {
			return 0
		}
		for (var i = 0; i < styleSheets.length; i++) {
			try {
				currSheet = styleSheets[i];
				rules = currSheet.rules ? currSheet.rules : currSheet.cssRules;
				if (!rules) {
					continue
				}
				for (var j = 0; j < rules.length; j++) {
					currSelector = rules[j].selectorText;
					if (currSelector) {
						currSelector = currSelector.toLowerCase();
						if (isPrefix) {
							if (currSelector.indexOf(classNamePrefix) === 0) {
								currVal = parseInt(currSelector.replace(classNamePrefix, ""), 10);
								if (isNaN(currVal)) {
									count++
								} else {
									numFound = Math.max(numFound, currVal)
								}
							}
						} else {
							if (currSelector == classNamePrefix) {
								numFound++
							}
						}
					}
				}
			} catch (e) {
			}
		}
		return Math.max(numFound, count)
	};
	$.ig.util._isCanvasSupported = function () {
		var canvas = document.createElement("canvas");
		return !!(canvas.getContext && canvas.getContext("2d"))
	};
	$.ig.util._renderUnsupportedBrowser = function (widget, locale) {
		if (!widget.events || !widget.events.browserNotSupported || widget._trigger(widget.events.browserNotSupported)) {
			var elem = widget.element, o = widget.options,
				container = $("<div></div>").css("overflow", "auto").addClass(widget.css.unsupportedBrowserClass).appendTo(elem),
				ul, browserUnsupported;
			locale = locale || $.ig.util.locale;
			if ($.ig.util.isIE) {
				browserUnsupported = "Internet Explorer " + $.ig.util.browserVersion
			} else if ($.ig.util.isOpera) {
				browserUnsupported = "Opera " + $.ig.util.browserVersion
			} else if ($.ig.util.isWebKit) {
				browserUnsupported = "Webkit " + $.ig.util.browserVersion
			} else if ($.ig.util.isFF) {
				browserUnsupported = "Mozilla Firefox " + $.ig.util.browserVersion
			} else {
				browserUnsupported = $.ig.util.browserVersion
			}
			$("<div></div>").addClass("ui-html5-current-browser-label").html(locale.currentBrowser.replace("{0}", browserUnsupported)).appendTo(container);
			$("<div></div>").addClass("ui-html5-non-html5-text").html(locale.unsupportedBrowser).appendTo(container);
			ul = $("<ul></ul>").addClass("ui-html5-browsers-list").appendTo(container);
			$("<a></a>").attr("href", locale.chromeDownload).attr("target", "_blank").addClass("ui-html5-chrome-icon").html(locale.chrome8).appendTo($("<li></li>").addClass("ui-corner-all").appendTo(ul));
			$("<a></a>").attr("href", locale.firefoxDownload).attr("target", "_blank").addClass("ui-html5-firefox-icon").html(locale.firefox36).appendTo($("<li></li>").addClass("ui-corner-all").appendTo(ul));
			$("<a></a>").attr("href", locale.operaDownload).attr("target", "_blank").addClass("ui-html5-Opera-icon").html(locale.opera11).appendTo($("<li></li>").addClass("ui-corner-all").appendTo(ul));
			$("<a></a>").attr("href", locale.safariDownload).attr("target", "_blank").addClass("ui-html5-safari-icon").html(locale.safari5).appendTo($("<li></li>").addClass("ui-corner-all").appendTo(ul));
			$("<a></a>").attr("href", locale.ieDownload).attr("target", "_blank").addClass("ui-html5-ie-icon").html(locale.ie9).appendTo($("<li></li>").addClass("ui-corner-all").appendTo(ul));
			if (widget.css.unsupportedBrowserClass.indexOf(" ui-html5-non-html5") === -1) {
				elem.addClass("ui-html5-non-html5")
			}
			if (o.width) {
				elem.css("width", o.width)
			}
			if (o.height) {
				elem.css("height", o.height)
			}
		}
	};
	var globalInfo = {
		invariant: {c: "\u00a4", d: "MM/dd/yyyy"},
		127: "invariant",
		af: {c: "R", d: "yyyy/MM/dd"},
		54: "af",
		"af-ZA": {c: "R", d: "yyyy/MM/dd"},
		1078: "af-ZA",
		am: {c: "ETB", d: "d/M/yyyy"},
		94: "am",
		"am-ET": {c: "ETB", d: "d/M/yyyy"},
		1118: "am-ET",
		ar: {
			c: "\u0631.\u0633.\u200f",
			d: "dd/MM/yy",
			n: "\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"
		},
		1: "ar",
		"ar-AE": {
			c: "\u062f.\u0625.\u200f",
			d: "dd/MM/yyyy",
			n: "\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"
		},
		14337: "ar-AE",
		"ar-BH": {
			c: "\u062f.\u0628.\u200f",
			d: "dd/MM/yyyy",
			n: "\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"
		},
		15361: "ar-BH",
		"ar-DZ": {c: "\u062f.\u062c.\u200f", d: "dd-MM-yyyy"},
		5121: "ar-DZ",
		"ar-EG": {
			c: "\u062c.\u0645.\u200f",
			d: "dd/MM/yyyy",
			n: "\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"
		},
		3073: "ar-EG",
		"ar-IQ": {
			c: "\u062f.\u0639.\u200f",
			d: "dd/MM/yyyy",
			n: "\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"
		},
		2049: "ar-IQ",
		"ar-JO": {
			c: "\u062f.\u0627.\u200f",
			d: "dd/MM/yyyy",
			n: "\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"
		},
		11265: "ar-JO",
		"ar-KW": {
			c: "\u062f.\u0643.\u200f",
			d: "dd/MM/yyyy",
			n: "\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"
		},
		13313: "ar-KW",
		"ar-LB": {
			c: "\u0644.\u0644.\u200f\u200f",
			d: "dd/MM/yyyy",
			n: "\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"
		},
		12289: "ar-LB",
		"ar-LY": {c: "\u062f.\u0644.\u200f\u200f", d: "dd/MM/yyyy"},
		4097: "ar-LY",
		"ar-MA": {c: "\u062f.\u0645.\u200f\u200f", d: "dd-MM-yyyy"},
		6145: "ar-MA",
		arn: {c: "$", d: "dd-MM-yyyy"},
		122: "arn",
		"arn-CL": {c: "$", d: "dd-MM-yyyy"},
		1146: "arn-CL",
		"ar-OM": {
			c: "\u0631.\u0639.\u200f\u200f",
			d: "dd/MM/yyyy",
			n: "\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"
		},
		8193: "ar-OM",
		"ar-QA": {
			c: "\u0631.\u0642.\u200f\u200f",
			d: "dd/MM/yyyy",
			n: "\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"
		},
		16385: "ar-QA",
		"ar-SA": {
			c: "\u0631.\u0633.\u200f",
			d: "dd/MM/yy",
			n: "\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"
		},
		1025: "ar-SA",
		"ar-SY": {
			c: "\u0644.\u0633.\u200f\u200f",
			d: "dd/MM/yyyy",
			n: "\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"
		},
		10241: "ar-SY",
		"ar-TN": {c: "\u062f.\u062a.\u200f\u200f", d: "dd-MM-yyyy"},
		7169: "ar-TN",
		"ar-YE": {
			c: "\u0631.\u064a.\u200f\u200f",
			d: "dd/MM/yyyy",
			n: "\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"
		},
		9217: "ar-YE",
		as: {c: "\u20b9", d: "dd-MM-yyyy", n: "\u09e6\u09e7\u09e8\u09e9\u09ea\u09eb\u09ec\u09ed\u09ee\u09ef"},
		77: "as",
		"as-IN": {c: "\u20b9", d: "dd-MM-yyyy", n: "\u09e6\u09e7\u09e8\u09e9\u09ea\u09eb\u09ec\u09ed\u09ee\u09ef"},
		1101: "as-IN",
		az: {c: "man.", d: "dd.MM.yyyy"},
		44: "az",
		"az-Cyrl": {c: "\u043c\u0430\u043d.", d: "dd.MM.yyyy"},
		29740: "az-Cyrl",
		"az-Cyrl-AZ": {c: "\u043c\u0430\u043d.", d: "dd.MM.yyyy"},
		2092: "az-Cyrl-AZ",
		"az-Latn": {c: "man.", d: "dd.MM.yyyy"},
		30764: "az-Latn",
		"az-Latn-AZ": {c: "man.", d: "dd.MM.yyyy"},
		1068: "az-Latn-AZ",
		ba: {c: "\u20bd", d: "dd.MM.yy"},
		109: "ba",
		"ba-RU": {c: "\u20bd", d: "dd.MM.yy"},
		1133: "ba-RU",
		be: {c: "Br", d: "dd.MM.yy"},
		35: "be",
		"be-BY": {c: "Br", d: "dd.MM.yy"},
		1059: "be-BY",
		bg: {c: "\u043b\u0432.", d: "d.M.yyyy '\u0433.'"},
		2: "bg",
		"bg-BG": {c: "\u043b\u0432.", d: "d.M.yyyy '\u0433.'"},
		1026: "bg-BG",
		bn: {c: "\u20b9", d: "dd-MM-yy", n: "\u09e6\u09e7\u09e8\u09e9\u09ea\u09eb\u09ec\u09ed\u09ee\u09ef"},
		69: "bn",
		"bn-BD": {c: "\u09f3", d: "dd-MM-yy", n: "\u09e6\u09e7\u09e8\u09e9\u09ea\u09eb\u09ec\u09ed\u09ee\u09ef"},
		2117: "bn-BD",
		"bn-IN": {c: "\u20b9", d: "dd-MM-yy", n: "\u09e6\u09e7\u09e8\u09e9\u09ea\u09eb\u09ec\u09ed\u09ee\u09ef"},
		1093: "bn-IN",
		bo: {c: "\u00a5", d: "yyyy/M/d", n: "\u0f20\u0f21\u0f22\u0f23\u0f24\u0f25\u0f26\u0f27\u0f28\u0f29"},
		81: "bo",
		"bo-CN": {c: "\u00a5", d: "yyyy/M/d", n: "\u0f20\u0f21\u0f22\u0f23\u0f24\u0f25\u0f26\u0f27\u0f28\u0f29"},
		1105: "bo-CN",
		br: {c: "\u20ac", d: "dd/MM/yyyy"},
		126: "br",
		"br-FR": {c: "\u20ac", d: "dd/MM/yyyy"},
		1150: "br-FR",
		bs: {c: "KM", d: "d.M.yyyy"},
		30746: "bs",
		"bs-Cyrl": {c: "\u041a\u041c", d: "d.M.yyyy"},
		25626: "bs-Cyrl",
		"bs-Cyrl-BA": {c: "\u041a\u041c", d: "d.M.yyyy"},
		8218: "bs-Cyrl-BA",
		"bs-Latn": {c: "KM", d: "d.M.yyyy"},
		26650: "bs-Latn",
		"bs-Latn-BA": {c: "KM", d: "d.M.yyyy"},
		5146: "bs-Latn-BA",
		ca: {c: "\u20ac", d: "dd/MM/yyyy"},
		3: "ca",
		"ca-ES": {c: "\u20ac", d: "dd/MM/yyyy"},
		1027: "ca-ES",
		"ca-ES-valencia": {c: "\u20ac", d: "dd/MM/yy"},
		2051: "ca-ES-valencia",
		chr: {c: "$", d: "M/d/yyyy"},
		92: "chr",
		"chr-Cher": {c: "$", d: "M/d/yyyy"},
		31836: "chr-Cher",
		"chr-Cher-US": {c: "$", d: "M/d/yyyy"},
		1116: "chr-Cher-US",
		co: {c: "\u20ac", d: "dd/MM/yyyy"},
		131: "co",
		"co-FR": {c: "\u20ac", d: "dd/MM/yyyy"},
		1155: "co-FR",
		cs: {c: "K\u010d", d: "d. M. yyyy"},
		5: "cs",
		"cs-CZ": {c: "K\u010d", d: "d. M. yyyy"},
		1029: "cs-CZ",
		cy: {c: "\u00a3", d: "dd/MM/yy"},
		82: "cy",
		"cy-GB": {c: "\u00a3", d: "dd/MM/yy"},
		1106: "cy-GB",
		da: {c: "kr.", d: "dd-MM-yyyy"},
		6: "da",
		"da-DK": {c: "kr.", d: "dd-MM-yyyy"},
		1030: "da-DK",
		de: {c: "\u20ac", d: "dd.MM.yyyy"},
		7: "de",
		"de-AT": {c: "\u20ac", d: "dd.MM.yyyy"},
		3079: "de-AT",
		"de-CH": {c: "Fr.", d: "dd.MM.yyyy"},
		2055: "de-CH",
		"de-DE": {c: "\u20ac", d: "dd.MM.yyyy"},
		1031: "de-DE",
		"de-LI": {c: "CHF", d: "dd.MM.yyyy"},
		5127: "de-LI",
		"de-LU": {c: "\u20ac", d: "dd.MM.yyyy"},
		4103: "de-LU",
		dsb: {c: "\u20ac", d: "d. M. yyyy"},
		31790: "dsb",
		"dsb-DE": {c: "\u20ac", d: "d. M. yyyy"},
		2094: "dsb-DE",
		dv: {c: "\u0783.", d: "dd/MM/yy"},
		101: "dv",
		"dv-MV": {c: "\u0783.", d: "dd/MM/yy"},
		1125: "dv-MV",
		el: {c: "\u20ac", d: "d/M/yyyy"},
		8: "el",
		"el-GR": {c: "\u20ac", d: "d/M/yyyy"},
		1032: "el-GR",
		en: {c: "$", d: "M/d/yyyy"},
		9: "en",
		"en-029": {c: "EC$", d: "dd/MM/yyyy"},
		9225: "en-029",
		"en-AU": {c: "$", d: "d/MM/yyyy"},
		3081: "en-AU",
		"en-BZ": {c: "BZ$", d: "dd/MM/yyyy"},
		10249: "en-BZ",
		"en-CA": {c: "$", d: "yyyy-MM-dd"},
		4105: "en-CA",
		"en-GB": {c: "\u00a3", d: "dd/MM/yyyy"},
		2057: "en-GB",
		"en-HK": {c: "$", d: "d/M/yy"},
		15369: "en-HK",
		"en-IE": {c: "\u20ac", d: "dd/MM/yyyy"},
		6153: "en-IE",
		"en-IN": {c: "\u20b9", d: "dd-MM-yyyy"},
		16393: "en-IN",
		"en-JM": {c: "J$", d: "dd/MM/yyyy"},
		8201: "en-JM",
		"en-MY": {c: "RM", d: "d/M/yyyy"},
		17417: "en-MY",
		"en-NZ": {c: "$", d: "d/MM/yyyy"},
		5129: "en-NZ",
		"en-PH": {c: "\u20b1", d: "M/d/yyyy"},
		13321: "en-PH",
		"en-SG": {c: "$", d: "d/M/yyyy"},
		18441: "en-SG",
		"en-TT": {c: "TT$", d: "dd/MM/yyyy"},
		11273: "en-TT",
		"en-US": {c: "$", d: "M/d/yyyy"},
		1033: "en-US",
		"en-ZA": {c: "R", d: "yyyy-MM-dd"},
		7177: "en-ZA",
		"en-ZW": {c: "$", d: "dd/MM/yyyy"},
		12297: "en-ZW",
		es: {c: "\u20ac", d: "dd/MM/yyyy"},
		10: "es",
		"es-419": {c: "US$", d: "dd/MM/yy"},
		22538: "es-419",
		"es-AR": {c: "$", d: "dd/MM/yyyy"},
		11274: "es-AR",
		"es-BO": {c: "Bs.", d: "dd/MM/yyyy"},
		16394: "es-BO",
		"es-CL": {c: "$", d: "dd-MM-yyyy"},
		13322: "es-CL",
		"es-CO": {c: "$", d: "dd/MM/yyyy"},
		9226: "es-CO",
		"es-CR": {c: "\u20a1", d: "dd/MM/yyyy"},
		5130: "es-CR",
		"es-DO": {c: "RD$", d: "d/M/yy"},
		7178: "es-DO",
		"es-EC": {c: "$", d: "dd/MM/yyyy"},
		12298: "es-EC",
		"es-ES": {c: "\u20ac", d: "dd/MM/yyyy"},
		3082: "es-ES",
		"es-GT": {c: "Q", d: "dd/MM/yyyy"},
		4106: "es-GT",
		"es-HN": {c: "L.", d: "dd/MM/yyyy"},
		18442: "es-HN",
		"es-MX": {c: "$", d: "dd/MM/yyyy"},
		2058: "es-MX",
		"es-NI": {c: "C$", d: "dd/MM/yyyy"},
		19466: "es-NI",
		"es-PA": {c: "B/.", d: "d/M/yy"},
		6154: "es-PA",
		"es-PE": {c: "S/.", d: "dd/MM/yyyy"},
		10250: "es-PE",
		"es-PR": {c: "$", d: "dd/MM/yyyy"},
		20490: "es-PR",
		"es-PY": {c: "\u20b2", d: "dd/MM/yyyy"},
		15370: "es-PY",
		"es-SV": {c: "$", d: "dd/MM/yyyy"},
		17418: "es-SV",
		"es-US": {c: "$", d: "M/d/yyyy"},
		21514: "es-US",
		"es-UY": {c: "$U", d: "dd/MM/yyyy"},
		14346: "es-UY",
		"es-VE": {c: "Bs.F.", d: "dd-MM-yyyy"},
		8202: "es-VE",
		et: {c: "\u20ac", d: "d.MM.yyyy"},
		37: "et",
		"et-EE": {c: "\u20ac", d: "d.MM.yyyy"},
		1061: "et-EE",
		eu: {c: "\u20ac", d: "yyyy/MM/dd"},
		45: "eu",
		"eu-ES": {c: "\u20ac", d: "yyyy/MM/dd"},
		1069: "eu-ES",
		fa: {
			c: "\u0631\u064a\u0627\u0644",
			d: "dd/MM/yyyy",
			n: "\u06f0\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9"
		},
		41: "fa",
		"fa-IR": {
			c: "\u0631\u064a\u0627\u0644",
			d: "dd/MM/yyyy",
			n: "\u06f0\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9"
		},
		1065: "fa-IR",
		ff: {c: "CFA", d: "dd/MM/yyyy"},
		103: "ff",
		"ff-Latn": {c: "CFA", d: "dd/MM/yyyy"},
		31847: "ff-Latn",
		"ff-Latn-SN": {c: "CFA", d: "dd/MM/yyyy"},
		2151: "ff-Latn-SN",
		fi: {c: "\u20ac", d: "d.M.yyyy"},
		11: "fi",
		"fi-FI": {c: "\u20ac", d: "d.M.yyyy"},
		1035: "fi-FI",
		fil: {c: "\u20b1", d: "M/d/yyyy"},
		100: "fil",
		"fil-PH": {c: "\u20b1", d: "M/d/yyyy"},
		1124: "fil-PH",
		fo: {c: "kr.", d: "dd-MM-yyyy"},
		56: "fo",
		"fo-FO": {c: "kr.", d: "dd-MM-yyyy"},
		1080: "fo-FO",
		fr: {c: "\u20ac", d: "dd/MM/yyyy"},
		12: "fr",
		"fr-BE": {c: "\u20ac", d: "dd-MM-yy"},
		2060: "fr-BE",
		"fr-CA": {c: "$", d: "yyyy-MM-dd"},
		3084: "fr-CA",
		"fr-CD": {c: "FC", d: "dd/MM/yyyy"},
		9228: "fr-CD",
		"fr-CH": {c: "fr.", d: "dd.MM.yyyy"},
		4108: "fr-CH",
		"fr-CI": {c: "CFA", d: "dd/MM/yyyy"},
		12300: "fr-CI",
		"fr-CM": {c: "FCFA", d: "dd/MM/yyyy"},
		11276: "fr-CM",
		"fr-FR": {c: "\u20ac", d: "dd/MM/yyyy"},
		1036: "fr-FR",
		"fr-HT": {c: "G", d: "dd/MM/yyyy"},
		15372: "fr-HT",
		"fr-LU": {c: "\u20ac", d: "dd/MM/yyyy"},
		5132: "fr-LU",
		"fr-MA": {c: "DH", d: "dd/MM/yyyy"},
		14348: "fr-MA",
		"fr-MC": {c: "\u20ac", d: "dd/MM/yyyy"},
		6156: "fr-MC",
		"fr-ML": {c: "CFA", d: "dd/MM/yyyy"},
		13324: "fr-ML",
		"fr-RE": {c: "\u20ac", d: "dd/MM/yyyy"},
		8204: "fr-RE",
		"fr-SN": {c: "CFA", d: "dd/MM/yyyy"},
		10252: "fr-SN",
		fy: {c: "\u20ac", d: "d-M-yyyy"},
		98: "fy",
		"fy-NL": {c: "\u20ac", d: "d-M-yyyy"},
		1122: "fy-NL",
		ga: {c: "\u20ac", d: "dd/MM/yyyy"},
		60: "ga",
		"ga-IE": {c: "\u20ac", d: "dd/MM/yyyy"},
		2108: "ga-IE",
		gd: {c: "\u00a3", d: "dd/MM/yyyy"},
		145: "gd",
		"gd-GB": {c: "\u00a3", d: "dd/MM/yyyy"},
		1169: "gd-GB",
		gl: {c: "\u20ac", d: "dd/MM/yyyy"},
		86: "gl",
		"gl-ES": {c: "\u20ac", d: "dd/MM/yyyy"},
		1110: "gl-ES",
		gn: {c: "\u20b2", d: "dd/MM/yyyy"},
		116: "gn",
		"gn-PY": {c: "\u20b2", d: "dd/MM/yyyy"},
		1140: "gn-PY",
		gsw: {c: "\u20ac", d: "dd/MM/yyyy"},
		132: "gsw",
		"gsw-FR": {c: "\u20ac", d: "dd/MM/yyyy"},
		1156: "gsw-FR",
		gu: {c: "\u20b9", d: "dd-MM-yy", n: "\u0ae6\u0ae7\u0ae8\u0ae9\u0aea\u0aeb\u0aec\u0aed\u0aee\u0aef"},
		71: "gu",
		"gu-IN": {c: "\u20b9", d: "dd-MM-yy", n: "\u0ae6\u0ae7\u0ae8\u0ae9\u0aea\u0aeb\u0aec\u0aed\u0aee\u0aef"},
		1095: "gu-IN",
		ha: {c: "\u20a6", d: "d/M/yyyy"},
		104: "ha",
		"ha-Latn": {c: "\u20a6", d: "d/M/yyyy"},
		31848: "ha-Latn",
		"ha-Latn-NG": {c: "\u20a6", d: "d/M/yyyy"},
		1128: "ha-Latn-NG",
		haw: {c: "$", d: "M/d/yyyy"},
		117: "haw",
		"haw-US": {c: "$", d: "M/d/yyyy"},
		1141: "haw-US",
		he: {c: "\u20aa", d: "dd/MM/yyyy"},
		13: "he",
		"he-IL": {c: "\u20aa", d: "dd/MM/yyyy"},
		1037: "he-IL",
		hi: {c: "\u20b9", d: "dd-MM-yyyy", n: "\u0966\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f"},
		57: "hi",
		"hi-IN": {c: "\u20b9", d: "dd-MM-yyyy", n: "\u0966\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f"},
		1081: "hi-IN",
		hr: {c: "kn", d: "d.M.yyyy."},
		26: "hr",
		"hr-BA": {c: "KM", d: "d.M.yyyy."},
		4122: "hr-BA",
		"hr-HR": {c: "kn", d: "d.M.yyyy."},
		1050: "hr-HR",
		hsb: {c: "\u20ac", d: "d. M. yyyy"},
		46: "hsb",
		"hsb-DE": {c: "\u20ac", d: "d. M. yyyy"},
		1070: "hsb-DE",
		hu: {c: "Ft", d: "yyyy.MM.dd."},
		14: "hu",
		"hu-HU": {c: "Ft", d: "yyyy.MM.dd."},
		1038: "hu-HU",
		hy: {c: "\u058f", d: "dd.MM.yyyy"},
		43: "hy",
		"hy-AM": {c: "\u058f", d: "dd.MM.yyyy"},
		1067: "hy-AM",
		id: {c: "Rp", d: "dd/MM/yyyy"},
		33: "id",
		"id-ID": {c: "Rp", d: "dd/MM/yyyy"},
		1057: "id-ID",
		ig: {c: "\u20a6", d: "d/M/yyyy"},
		112: "ig",
		"ig-NG": {c: "\u20a6", d: "d/M/yyyy"},
		1136: "ig-NG",
		ii: {c: "\u00a5", d: "yyyy/M/d"},
		120: "ii",
		"ii-CN": {c: "\u00a5", d: "yyyy/M/d"},
		1144: "ii-CN",
		is: {c: "kr.", d: "d.M.yyyy"},
		15: "is",
		"is-IS": {c: "kr.", d: "d.M.yyyy"},
		1039: "is-IS",
		it: {c: "\u20ac", d: "dd/MM/yyyy"},
		16: "it",
		"it-CH": {c: "fr.", d: "dd.MM.yyyy"},
		2064: "it-CH",
		"it-IT": {c: "\u20ac", d: "dd/MM/yyyy"},
		1040: "it-IT",
		iu: {c: "$", d: "d/MM/yyyy"},
		93: "iu",
		"iu-Cans": {c: "$", d: "d/M/yyyy"},
		30813: "iu-Cans",
		"iu-Cans-CA": {c: "$", d: "d/M/yyyy"},
		1117: "iu-Cans-CA",
		"iu-Latn": {c: "$", d: "d/MM/yyyy"},
		31837: "iu-Latn",
		"iu-Latn-CA": {c: "$", d: "d/MM/yyyy"},
		2141: "iu-Latn-CA",
		ja: {c: "\u00a5", d: "yyyy/MM/dd"},
		17: "ja",
		"ja-JP": {c: "\u00a5", d: "yyyy/MM/dd"},
		1041: "ja-JP",
		jv: {c: "Rp", d: "dd/MM/yyyy"},
		4096: "jv",
		"jv-Latn": {c: "Rp", d: "dd/MM/yyyy"},
		"jv-Latn-ID": {c: "Rp", d: "dd/MM/yyyy"},
		ka: {c: "\u10da.", d: "dd.MM.yyyy"},
		55: "ka",
		"ka-GE": {c: "\u10da.", d: "dd.MM.yyyy"},
		1079: "ka-GE",
		kk: {c: "\u20b8", d: "d-MMM-yy"},
		63: "kk",
		"kk-KZ": {c: "\u20b8", d: "d-MMM-yy"},
		1087: "kk-KZ",
		kl: {c: "kr.", d: "dd-MM-yyyy"},
		111: "kl",
		"kl-GL": {c: "kr.", d: "dd-MM-yyyy"},
		1135: "kl-GL",
		km: {c: "\u17db", d: "dd/MM/yy", n: "\u17e0\u17e1\u17e2\u17e3\u17e4\u17e5\u17e6\u17e7\u17e8\u17e9"},
		83: "km",
		"km-KH": {c: "\u17db", d: "dd/MM/yy", n: "\u17e0\u17e1\u17e2\u17e3\u17e4\u17e5\u17e6\u17e7\u17e8\u17e9"},
		1107: "km-KH",
		kn: {c: "\u20b9", d: "dd-MM-yy", n: "\u0ce6\u0ce7\u0ce8\u0ce9\u0cea\u0ceb\u0cec\u0ced\u0cee\u0cef"},
		75: "kn",
		"kn-IN": {c: "\u20b9", d: "dd-MM-yy", n: "\u0ce6\u0ce7\u0ce8\u0ce9\u0cea\u0ceb\u0cec\u0ced\u0cee\u0cef"},
		1099: "kn-IN",
		ko: {c: "\u20a9", d: "yyyy-MM-dd"},
		18: "ko",
		kok: {c: "\u20b9", d: "dd-MM-yyyy", n: "\u0966\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f"},
		87: "kok",
		"kok-IN": {c: "\u20b9", d: "dd-MM-yyyy", n: "\u0966\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f"},
		1111: "kok-IN",
		"ko-KR": {c: "\u20a9", d: "yyyy-MM-dd"},
		1042: "ko-KR",
		ku: {
			c: "\u062f.\u0639.\u200f",
			d: "yyyy/MM/dd",
			n: "\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"
		},
		146: "ku",
		"ku-Arab": {
			c: "\u062f.\u0639.\u200f",
			d: "yyyy/MM/dd",
			n: "\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"
		},
		31890: "ku-Arab",
		"ku-Arab-IQ": {
			c: "\u062f.\u0639.\u200f",
			d: "yyyy/MM/dd",
			n: "\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"
		},
		1170: "ku-Arab-IQ",
		ky: {c: "\u0441\u043e\u043c", d: "d-MMM yy"},
		64: "ky",
		"ky-KG": {c: "\u0441\u043e\u043c", d: "d-MMM yy"},
		1088: "ky-KG",
		lb: {c: "\u20ac", d: "dd.MM.yy"},
		110: "lb",
		"lb-LU": {c: "\u20ac", d: "dd.MM.yy"},
		1134: "lb-LU",
		lo: {c: "\u20ad", d: "dd/MM/yyyy", n: "\u0ed0\u0ed1\u0ed2\u0ed3\u0ed4\u0ed5\u0ed6\u0ed7\u0ed8\u0ed9"},
		84: "lo",
		"lo-LA": {c: "\u20ad", d: "dd/MM/yyyy", n: "\u0ed0\u0ed1\u0ed2\u0ed3\u0ed4\u0ed5\u0ed6\u0ed7\u0ed8\u0ed9"},
		1108: "lo-LA",
		lt: {c: "Lt", d: "yyyy-MM-dd"},
		39: "lt",
		"lt-LT": {c: "Lt", d: "yyyy-MM-dd"},
		1063: "lt-LT",
		lv: {c: "\u20ac", d: "dd.MM.yyyy."},
		38: "lv",
		"lv-LV": {c: "\u20ac", d: "dd.MM.yyyy."},
		1062: "lv-LV",
		mg: {c: "Ar", d: "d/M/yyyy"},
		"mg-MG": {c: "Ar", d: "d/M/yyyy"},
		mi: {c: "$", d: "dd/MM/yyyy"},
		129: "mi",
		"mi-NZ": {c: "$", d: "dd/MM/yyyy"},
		1153: "mi-NZ",
		mk: {c: "\u0434\u0435\u043d.", d: "dd.MM.yyyy"},
		47: "mk",
		"mk-MK": {c: "\u0434\u0435\u043d.", d: "dd.MM.yyyy"},
		1071: "mk-MK",
		ml: {c: "\u20b9", d: "dd-MM-yy", n: "\u0d66\u0d67\u0d68\u0d69\u0d6a\u0d6b\u0d6c\u0d6d\u0d6e\u0d6f"},
		76: "ml",
		"ml-IN": {c: "\u20b9", d: "dd-MM-yy", n: "\u0d66\u0d67\u0d68\u0d69\u0d6a\u0d6b\u0d6c\u0d6d\u0d6e\u0d6f"},
		1100: "ml-IN",
		mn: {c: "\u20ae", d: "yyyy-MM-dd"},
		80: "mn",
		"mn-Cyrl": {c: "\u20ae", d: "yyyy-MM-dd"},
		30800: "mn-Cyrl",
		"mn-MN": {c: "\u20ae", d: "yyyy-MM-dd"},
		1104: "mn-MN",
		"mn-Mong": {c: "\u00a5", d: "yyyy/M/d"},
		31824: "mn-Mong",
		"mn-Mong-CN": {c: "\u00a5", d: "yyyy/M/d"},
		2128: "mn-Mong-CN",
		"mn-Mong-MN": {c: "\u20ae", d: "yyyy/M/d"},
		3152: "mn-Mong-MN",
		moh: {c: "$", d: "M/d/yyyy"},
		124: "moh",
		"moh-CA": {c: "$", d: "M/d/yyyy"},
		1148: "moh-CA",
		mr: {c: "\u20b9", d: "dd-MM-yyyy", n: "\u0966\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f"},
		78: "mr",
		"mr-IN": {c: "\u20b9", d: "dd-MM-yyyy", n: "\u0966\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f"},
		1102: "mr-IN",
		ms: {c: "RM", d: "dd/MM/yyyy"},
		62: "ms",
		"ms-BN": {c: "$", d: "dd/MM/yyyy"},
		2110: "ms-BN",
		"ms-MY": {c: "RM", d: "dd/MM/yyyy"},
		1086: "ms-MY",
		mt: {c: "\u20ac", d: "dd/MM/yyyy"},
		58: "mt",
		"mt-MT": {c: "\u20ac", d: "dd/MM/yyyy"},
		1082: "mt-MT",
		my: {c: "K", d: "dd-MM-yyyy", n: "\u1040\u1041\u1042\u1043\u1044\u1045\u1046\u1047\u1048\u1049"},
		85: "my",
		"my-MM": {c: "K", d: "dd-MM-yyyy", n: "\u1040\u1041\u1042\u1043\u1044\u1045\u1046\u1047\u1048\u1049"},
		1109: "my-MM",
		nb: {c: "kr", d: "dd.MM.yyyy"},
		31764: "nb",
		"nb-NO": {c: "kr", d: "dd.MM.yyyy"},
		1044: "nb-NO",
		ne: {c: "\u0930\u0941", d: "M/d/yyyy", n: "\u0966\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f"},
		97: "ne",
		"ne-IN": {c: "\u20b9", d: "yyyy-MM-dd", n: "\u0966\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f"},
		2145: "ne-IN",
		"ne-NP": {c: "\u0930\u0941", d: "M/d/yyyy", n: "\u0966\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f"},
		1121: "ne-NP",
		nl: {c: "\u20ac", d: "d-M-yyyy"},
		19: "nl",
		"nl-BE": {c: "\u20ac", d: "d/MM/yyyy"},
		2067: "nl-BE",
		"nl-NL": {c: "\u20ac", d: "d-M-yyyy"},
		1043: "nl-NL",
		nn: {c: "kr", d: "dd.MM.yyyy"},
		30740: "nn",
		"nn-NO": {c: "kr", d: "dd.MM.yyyy"},
		2068: "nn-NO",
		no: {c: "kr", d: "dd.MM.yyyy"},
		20: "no",
		nqo: {c: "\u07d6\u07d5.", d: "dd/MM/yyyy", n: "\u07c0\u07c1\u07c2\u07c3\u07c4\u07c5\u07c6\u07c7\u07c8\u07c9"},
		"nqo-GN": {
			c: "\u07d6\u07d5.",
			d: "dd/MM/yyyy",
			n: "\u07c0\u07c1\u07c2\u07c3\u07c4\u07c5\u07c6\u07c7\u07c8\u07c9"
		},
		nso: {c: "R", d: "dd/MM/yy"},
		108: "nso",
		"nso-ZA": {c: "R", d: "dd/MM/yy"},
		1132: "nso-ZA",
		oc: {c: "\u20ac", d: "dd/MM/yyyy"},
		130: "oc",
		"oc-FR": {c: "\u20ac", d: "dd/MM/yyyy"},
		1154: "oc-FR",
		om: {c: "Br", d: "dd/MM/yy"},
		114: "om",
		"om-ET": {c: "Br", d: "dd/MM/yy"},
		1138: "om-ET",
		or: {c: "\u20b9", d: "dd-MM-yy", n: "\u0b66\u0b67\u0b68\u0b69\u0b6a\u0b6b\u0b6c\u0b6d\u0b6e\u0b6f"},
		72: "or",
		"or-IN": {c: "\u20b9", d: "dd-MM-yy", n: "\u0b66\u0b67\u0b68\u0b69\u0b6a\u0b6b\u0b6c\u0b6d\u0b6e\u0b6f"},
		1096: "or-IN",
		pa: {c: "\u20b9", d: "dd-MM-yy", n: "\u0a66\u0a67\u0a68\u0a69\u0a6a\u0a6b\u0a6c\u0a6d\u0a6e\u0a6f"},
		70: "pa",
		"pa-Arab": {c: "Rs", d: "dd-MM-yy", n: "\u06f0\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9"},
		31814: "pa-Arab",
		"pa-Arab-PK": {c: "Rs", d: "dd-MM-yy", n: "\u06f0\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9"},
		2118: "pa-Arab-PK",
		"pa-IN": {c: "\u20b9", d: "dd-MM-yy", n: "\u0a66\u0a67\u0a68\u0a69\u0a6a\u0a6b\u0a6c\u0a6d\u0a6e\u0a6f"},
		1094: "pa-IN",
		pl: {c: "z\u0142", d: "yyyy-MM-dd"},
		21: "pl",
		"pl-PL": {c: "z\u0142", d: "yyyy-MM-dd"},
		1045: "pl-PL",
		prs: {c: "\u060b", d: "yyyy/M/d", n: "\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"},
		140: "prs",
		"prs-AF": {c: "\u060b", d: "yyyy/M/d", n: "\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"},
		1164: "prs-AF",
		ps: {c: "\u060b", d: "yyyy/M/d", n: "\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"},
		99: "ps",
		"ps-AF": {c: "\u060b", d: "yyyy/M/d", n: "\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"},
		1123: "ps-AF",
		pt: {c: "R$", d: "dd/MM/yyyy"},
		22: "pt",
		"pt-AO": {c: "Kz", d: "dd/MM/yy"},
		"pt-BR": {c: "R$", d: "dd/MM/yyyy"},
		1046: "pt-BR",
		"pt-PT": {c: "\u20ac", d: "dd/MM/yyyy"},
		2070: "pt-PT",
		qut: {c: "Q", d: "dd/MM/yyyy"},
		134: "qut",
		"qut-GT": {c: "Q", d: "dd/MM/yyyy"},
		1158: "qut-GT",
		quz: {c: "Bs.", d: "dd/MM/yyyy"},
		107: "quz",
		"quz-BO": {c: "Bs.", d: "dd/MM/yyyy"},
		1131: "quz-BO",
		"quz-EC": {c: "$", d: "dd/MM/yyyy"},
		2155: "quz-EC",
		"quz-PE": {c: "S/.", d: "dd/MM/yyyy"},
		3179: "quz-PE",
		rm: {c: "fr.", d: "dd-MM-yyyy"},
		23: "rm",
		"rm-CH": {c: "fr.", d: "dd-MM-yyyy"},
		1047: "rm-CH",
		ro: {c: "lei", d: "dd.MM.yyyy"},
		24: "ro",
		"ro-MD": {c: "L", d: "dd.MM.yyyy"},
		2072: "ro-MD",
		"ro-RO": {c: "lei", d: "dd.MM.yyyy"},
		1048: "ro-RO",
		ru: {c: "\u20bd", d: "dd.MM.yyyy"},
		25: "ru",
		"ru-RU": {c: "\u20bd", d: "dd.MM.yyyy"},
		1049: "ru-RU",
		rw: {c: "RWF", d: "d/MM/yyyy"},
		135: "rw",
		"rw-RW": {c: "RWF", d: "d/MM/yyyy"},
		1159: "rw-RW",
		sa: {c: "\u20b9", d: "dd-MM-yyyy", n: "\u0966\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f"},
		79: "sa",
		sah: {c: "\u20bd", d: "dd.MM.yyyy"},
		133: "sah",
		"sah-RU": {c: "\u20bd", d: "dd.MM.yyyy"},
		1157: "sah-RU",
		"sa-IN": {c: "\u20b9", d: "dd-MM-yyyy", n: "\u0966\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f"},
		1103: "sa-IN",
		sd: {c: "Rs", d: "dd/MM/yyyy", n: "\u06f0\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9"},
		89: "sd",
		"sd-Arab": {c: "Rs", d: "dd/MM/yyyy", n: "\u06f0\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9"},
		31833: "sd-Arab",
		"sd-Arab-PK": {c: "Rs", d: "dd/MM/yyyy", n: "\u06f0\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9"},
		2137: "sd-Arab-PK",
		se: {c: "kr", d: "dd.MM.yyyy"},
		59: "se",
		"se-FI": {c: "\u20ac", d: "d.M.yyyy"},
		3131: "se-FI",
		"se-NO": {c: "kr", d: "dd.MM.yyyy"},
		1083: "se-NO",
		"se-SE": {c: "kr", d: "yyyy-MM-dd"},
		2107: "se-SE",
		si: {c: "\u0dbb\u0dd4.", d: "yyyy-MM-dd"},
		91: "si",
		"si-LK": {c: "\u0dbb\u0dd4.", d: "yyyy-MM-dd"},
		1115: "si-LK",
		sk: {c: "EUR", d: "d.M.yyyy"},
		27: "sk",
		"sk-SK": {c: "EUR", d: "d.M.yyyy"},
		1051: "sk-SK",
		sl: {c: "\u20ac", d: "d.M.yyyy"},
		36: "sl",
		"sl-SI": {c: "\u20ac", d: "d.M.yyyy"},
		1060: "sl-SI",
		sma: {c: "kr", d: "yyyy-MM-dd"},
		30779: "sma",
		"sma-NO": {c: "kr", d: "dd.MM.yyyy"},
		6203: "sma-NO",
		"sma-SE": {c: "kr", d: "yyyy-MM-dd"},
		7227: "sma-SE",
		smj: {c: "kr", d: "yyyy-MM-dd"},
		31803: "smj",
		"smj-NO": {c: "kr", d: "dd.MM.yyyy"},
		4155: "smj-NO",
		"smj-SE": {c: "kr", d: "yyyy-MM-dd"},
		5179: "smj-SE",
		smn: {c: "\u20ac", d: "d.M.yyyy"},
		28731: "smn",
		"smn-FI": {c: "\u20ac", d: "d.M.yyyy"},
		9275: "smn-FI",
		sms: {c: "\u20ac", d: "d.M.yyyy"},
		29755: "sms",
		"sms-FI": {c: "\u20ac", d: "d.M.yyyy"},
		8251: "sms-FI",
		sn: {c: "US$", d: "dd/MM/yyyy"},
		"sn-Latn": {c: "US$", d: "dd/MM/yyyy"},
		"sn-Latn-ZW": {c: "US$", d: "dd/MM/yyyy"},
		so: {c: "S", d: "dd/MM/yy"},
		119: "so",
		"so-SO": {c: "S", d: "dd/MM/yy"},
		1143: "so-SO",
		sq: {c: "Lek", d: "d.M.yyyy"},
		28: "sq",
		"sq-AL": {c: "Lek", d: "d.M.yyyy"},
		1052: "sq-AL",
		sr: {c: "din.", d: "d.M.yyyy."},
		31770: "sr",
		"sr-Cyrl": {c: "\u0434\u0438\u043d.", d: "d.M.yyyy."},
		27674: "sr-Cyrl",
		"sr-Cyrl-BA": {c: "\u041a\u041c", d: "d.M.yyyy."},
		7194: "sr-Cyrl-BA",
		"sr-Cyrl-CS": {c: "\u0434\u0438\u043d.", d: "d.M.yyyy."},
		3098: "sr-Cyrl-CS",
		"sr-Cyrl-ME": {c: "\u20ac", d: "d.M.yyyy."},
		12314: "sr-Cyrl-ME",
		"sr-Cyrl-RS": {c: "\u0434\u0438\u043d.", d: "d.M.yyyy."},
		10266: "sr-Cyrl-RS",
		"sr-Latn": {c: "din.", d: "d.M.yyyy."},
		28698: "sr-Latn",
		"sr-Latn-BA": {c: "KM", d: "d.M.yyyy."},
		6170: "sr-Latn-BA",
		"sr-Latn-CS": {c: "din.", d: "d.M.yyyy."},
		2074: "sr-Latn-CS",
		"sr-Latn-ME": {c: "\u20ac", d: "d.M.yyyy."},
		11290: "sr-Latn-ME",
		"sr-Latn-RS": {c: "din.", d: "d.M.yyyy."},
		9242: "sr-Latn-RS",
		st: {c: "R", d: "yyyy-MM-dd"},
		48: "st",
		"st-ZA": {c: "R", d: "yyyy-MM-dd"},
		1072: "st-ZA",
		sv: {c: "kr", d: "yyyy-MM-dd"},
		29: "sv",
		"sv-FI": {c: "\u20ac", d: "d.M.yyyy"},
		2077: "sv-FI",
		"sv-SE": {c: "kr", d: "yyyy-MM-dd"},
		1053: "sv-SE",
		sw: {c: "KSh", d: "M/d/yyyy"},
		65: "sw",
		"sw-KE": {c: "KSh", d: "M/d/yyyy"},
		1089: "sw-KE",
		syr: {c: "\u0720.\u0723.\u200f", d: "dd/MM/yyyy"},
		90: "syr",
		"syr-SY": {c: "\u0720.\u0723.\u200f", d: "dd/MM/yyyy"},
		1114: "syr-SY",
		ta: {c: "\u20b9", d: "dd-MM-yyyy", n: "\u0be6\u0be7\u0be8\u0be9\u0bea\u0beb\u0bec\u0bed\u0bee\u0bef"},
		73: "ta",
		"ta-IN": {c: "\u20b9", d: "dd-MM-yyyy", n: "\u0be6\u0be7\u0be8\u0be9\u0bea\u0beb\u0bec\u0bed\u0bee\u0bef"},
		1097: "ta-IN",
		"ta-LK": {c: "Rs", d: "dd-MM-yyyy", n: "\u0be6\u0be7\u0be8\u0be9\u0bea\u0beb\u0bec\u0bed\u0bee\u0bef"},
		2121: "ta-LK",
		te: {c: "\u20b9", d: "dd-MM-yy", n: "\u0c66\u0c67\u0c68\u0c69\u0c6a\u0c6b\u0c6c\u0c6d\u0c6e\u0c6f"},
		74: "te",
		"te-IN": {c: "\u20b9", d: "dd-MM-yy", n: "\u0c66\u0c67\u0c68\u0c69\u0c6a\u0c6b\u0c6c\u0c6d\u0c6e\u0c6f"},
		1098: "te-IN",
		tg: {c: "\u0441\u043c\u043d", d: "dd.MM.yyyy"},
		40: "tg",
		"tg-Cyrl": {c: "\u0441\u043c\u043d", d: "dd.MM.yyyy"},
		31784: "tg-Cyrl",
		"tg-Cyrl-TJ": {c: "\u0441\u043c\u043d", d: "dd.MM.yyyy"},
		1064: "tg-Cyrl-TJ",
		th: {c: "\u0e3f", d: "d/M/yyyy", n: "\u0e50\u0e51\u0e52\u0e53\u0e54\u0e55\u0e56\u0e57\u0e58\u0e59"},
		30: "th",
		"th-TH": {c: "\u0e3f", d: "d/M/yyyy", n: "\u0e50\u0e51\u0e52\u0e53\u0e54\u0e55\u0e56\u0e57\u0e58\u0e59"},
		1054: "th-TH",
		ti: {c: "ERN", d: "d/M/yyyy"},
		115: "ti",
		"ti-ER": {c: "ERN", d: "d/M/yyyy"},
		2163: "ti-ER",
		"ti-ET": {c: "\u1265\u122d", d: "d/M/yyyy"},
		1139: "ti-ET",
		tk: {c: "m.", d: "dd.MM.yy '\u00fd.'"},
		66: "tk",
		"tk-TM": {c: "m.", d: "dd.MM.yy '\u00fd.'"},
		1090: "tk-TM",
		tn: {c: "R", d: "dd/MM/yy"},
		50: "tn",
		"tn-BW": {c: "P", d: "dd/MM/yy"},
		2098: "tn-BW",
		"tn-ZA": {c: "R", d: "dd/MM/yy"},
		1074: "tn-ZA",
		tr: {c: "\u20ba", d: "d.M.yyyy"},
		31: "tr",
		"tr-TR": {c: "\u20ba", d: "d.M.yyyy"},
		1055: "tr-TR",
		ts: {c: "R", d: "yyyy-MM-dd"},
		49: "ts",
		"ts-ZA": {c: "R", d: "yyyy-MM-dd"},
		1073: "ts-ZA",
		tt: {c: "\u20bd", d: "dd.MM.yyyy"},
		68: "tt",
		"tt-RU": {c: "\u20bd", d: "dd.MM.yyyy"},
		1092: "tt-RU",
		tzm: {c: "DA", d: "dd-MM-yyyy"},
		95: "tzm",
		"tzm-Latn": {c: "DA", d: "dd-MM-yyyy"},
		31839: "tzm-Latn",
		"tzm-Latn-DZ": {c: "DA", d: "dd-MM-yyyy"},
		2143: "tzm-Latn-DZ",
		"tzm-Tfng": {c: "\u2d37\u2d54", d: "dd-MM-yyyy"},
		30815: "tzm-Tfng",
		"tzm-Tfng-MA": {c: "\u2d37\u2d54", d: "dd-MM-yyyy"},
		4191: "tzm-Tfng-MA",
		ug: {c: "\u00a5", d: "yyyy-M-d"},
		128: "ug",
		"ug-CN": {c: "\u00a5", d: "yyyy-M-d"},
		1152: "ug-CN",
		uk: {c: "\u20b4", d: "dd.MM.yyyy"},
		34: "uk",
		"uk-UA": {c: "\u20b4", d: "dd.MM.yyyy"},
		1058: "uk-UA",
		ur: {c: "Rs", d: "dd/MM/yyyy", n: "\u06f0\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9"},
		32: "ur",
		"ur-IN": {c: "\u20b9", d: "d/M/yy", n: "\u06f0\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9"},
		2080: "ur-IN",
		"ur-PK": {c: "Rs", d: "dd/MM/yyyy", n: "\u06f0\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9"},
		1056: "ur-PK",
		uz: {c: "so'm", d: "dd.MM.yyyy"},
		67: "uz",
		"uz-Cyrl": {c: "\u0441\u045e\u043c", d: "dd.MM.yyyy"},
		30787: "uz-Cyrl",
		"uz-Cyrl-UZ": {c: "\u0441\u045e\u043c", d: "dd.MM.yyyy"},
		2115: "uz-Cyrl-UZ",
		"uz-Latn": {c: "so'm", d: "dd.MM.yyyy"},
		31811: "uz-Latn",
		"uz-Latn-UZ": {c: "so'm", d: "dd.MM.yyyy"},
		1091: "uz-Latn-UZ",
		vi: {c: "\u20ab", d: "dd/MM/yyyy"},
		42: "vi",
		"vi-VN": {c: "\u20ab", d: "dd/MM/yyyy"},
		1066: "vi-VN",
		wo: {c: "CFA", d: "dd/MM/yyyy"},
		136: "wo",
		"wo-SN": {c: "CFA", d: "dd/MM/yyyy"},
		1160: "wo-SN",
		xh: {c: "R", d: "yyyy/MM/dd"},
		52: "xh",
		"xh-ZA": {c: "R", d: "yyyy/MM/dd"},
		1076: "xh-ZA",
		yo: {c: "\u20a6", d: "d/M/yyyy"},
		106: "yo",
		"yo-NG": {c: "\u20a6", d: "d/M/yyyy"},
		1130: "yo-NG",
		zgh: {c: "\u2d37\u2d54\u2d4e", d: "dd-MM-yyyy"},
		"zgh-Tfng": {c: "\u2d37\u2d54\u2d4e", d: "dd-MM-yyyy"},
		"zgh-Tfng-MA": {c: "\u2d37\u2d54\u2d4e", d: "dd-MM-yyyy"},
		zh: {c: "\u00a5", d: "yyyy/M/d"},
		30724: "zh",
		"zh-CHS": {c: "\u00a5", d: "yyyy/M/d"},
		4: "zh-CHS",
		"zh-CHT": {c: "HK$", d: "d/M/yyyy"},
		31748: "zh-CHT",
		"zh-CN": {c: "\u00a5", d: "yyyy/M/d"},
		2052: "zh-CN",
		"zh-Hans": {c: "\u00a5", d: "yyyy/M/d"},
		"zh-Hant": {c: "HK$", d: "d/M/yyyy"},
		"zh-HK": {c: "HK$", d: "d/M/yyyy"},
		3076: "zh-HK",
		"zh-MO": {c: "MOP", d: "d/M/yyyy"},
		5124: "zh-MO",
		"zh-SG": {c: "$", d: "d/M/yyyy"},
		4100: "zh-SG",
		"zh-TW": {c: "NT$", d: "yyyy/M/d"},
		1028: "zh-TW",
		zu: {c: "R", d: "dd-MM-yyyy"},
		53: "zu",
		"zu-ZA": {c: "R", d: "dd-MM-yyyy"},
		1077: "zu-ZA"
	};
	$.ig.CultureInfo = Class.extend({
		_name: null, _isInvariant: false, init: function (name) {
			this._name = name
		}, clone: function () {
			var copy = new $.ig.CultureInfo(this._name);
			for (var attr in this) {
				if (this.hasOwnProperty(attr)) {
					copy[attr] = this[attr]
				}
			}
			if (copy._dateTimeFormat) {
				copy._dateTimeFormat = copy._dateTimeFormat.clone()
			}
			if (copy._numberFormat) {
				copy._numberFormat = copy._numberFormat.clone()
			}
			return copy
		}, compareInfo: function () {
			return new $.ig.CompareInfo
		}, getFormat: function ($t) {
			if ($t === $.ig.NumberFormatInfo.prototype.$type) {
				return this.numberFormat()
			}
			if ($t === $.ig.DateTimeFormat.prototype.$type) {
				return this.dateTimeFormat()
			}
			throw new Error("Unknown format type")
		}, name: function () {
			return this._name
		}, calendar: function () {
			return new $.ig.Calendar
		}, dateTimeFormat: function (value) {
			if (arguments.length === 1) {
				this._dateTimeFormat = value
			}
			if (!this._dateTimeFormat) {
				this._dateTimeFormat = new $.ig.DateTimeFormat(this._name, this._isInvariant)
			}
			return this._dateTimeFormat
		}, numberFormat: function (value) {
			if (arguments.length === 1) {
				this._numberFormat = value
			}
			if (!this._numberFormat) {
				this._numberFormat = new $.ig.NumberFormatInfo(this._name, this._isInvariant)
			}
			return this._numberFormat
		}, twoLetterISOLanguageName: function () {
			if (this._name.length > 2 && this._name[2] == "-") return this._name.substr(0, 2);
			return ""
		}, getCultureInfo: function (lcid) {
			var name = globalInfo[lcid];
			if (name) {
				if (name === "invariant") {
					return $.ig.CultureInfo.prototype.invariantCulture()
				}
				return new $.ig.CultureInfo(name)
			}
			return $.ig.CultureInfo.prototype.invariantCulture()
		}, $type: new $.ig.Type("CultureInfo", $.ig.Object.prototype.$type)
	}, true);
	$.ig.CultureInfo.prototype.currentCulture = function () {
		return $.ig.Thread.prototype.currentThread().currentCulture()
	};
	$.ig.CultureInfo.prototype.invariantCulture = function () {
		if (this._cachedInvariant) {
			return this._cachedInvariant
		}
		this._cachedInvariant = new $.ig.CultureInfo("en-US");
		this._cachedInvariant._isInvariant = true;
		return this._cachedInvariant
	};
	$.ig.Calendar = Class.extend({
		init: function () {
		}, eras: function () {
			return [1]
		}, getEra: function (time) {
			return 1
		}, getDayOfMonth: function (time) {
			return time.getDate()
		}, getDaysInMonth: function (year, month, era) {
			return $.ig.Date.prototype.daysInMonth(year, month)
		}, getDaysInYear: function (year, era) {
			return $.ig.Date.prototype.isLeapYear(year) ? 366 : 365
		}, getMonth: function (time) {
			return $.ig.Date.prototype.getMonth(time)
		}, getYear: function (time) {
			return time.getFullYear()
		}, toDateTime: function (year, month, day, hour, minute, second, millisecond, era) {
			return $.ig.Date.prototype.fromValues(year, month, day, hour, minute, second, millisecond)
		}, $type: new $.ig.Type("Calendar", $.ig.Object.prototype.$type)
	}, true);
	$.ig.util.defType("CompareInfo", "Object", {
		init: function () {
		}, compare1: function (string1, offset1, length1, string2, offset2, length2, options) {
			var v1 = string1.substr(offset1, length1);
			var v2 = string2.substr(offset2, length2);
			if ((options & $.ig.CompareOptions.prototype.ignoreCase) !== 0) {
				v1 = v1.toLowerCase();
				v2 = v2.toLowerCase()
			}
			return $.ig.util.compare(v1, v2)
		}, compare4: function (string1, string2) {
			return this.compare5(string1, string2, $.ig.CompareOptions.prototype.none)
		}, compare5: function (string1, string2, options) {
			return this.compare1(string1, 0, string1.length, string2, 0, string2.length, options)
		}, indexOf1: function (source, value) {
			return this.indexOf6(source, value, 0, $.ig.CompareOptions.prototype.none)
		}, indexOf3: function (source, value, options) {
			return this.indexOf6(source, value, 0, options)
		}, indexOf6: function (source, value, startIndex, options) {
			if ((options & $.ig.CompareOptions.prototype.ignoreCase) !== 0) {
				source = source.toLowerCase();
				value = value.toLowerCase()
			}
			return source.indexOf(value, startIndex)
		}, indexOf5: function (source, value, options) {
			return source.indexOf(value)
		}, referenceEquals: function (a, b) {
			return a === b
		}, $type: new $.ig.Type("CompareInfo", $.ig.Object.prototype.$type)
	}, true);
	$.ig.DateTimeFormat = Class.extend({
		init: function (cultureName, isInvariant) {
			this._cultureName = cultureName;
			this._isInvariant = isInvariant
		}, clone: function () {
			var copy = new $.ig.DateTimeFormat(this._cultureName, this._isInvariant);
			for (var attr in this) {
				if (this.hasOwnProperty(attr)) {
					copy[attr] = this[attr]
				}
			}
			return copy
		}, dateSeparator: function (value) {
			if (arguments.length === 1) {
				this._dateSeparator = value
			}
			if (!this._dateSeparator) {
				this._dateSeparator = "/"
			}
			return this._dateSeparator
		}, timeSeparator: function (value) {
			if (arguments.length === 1) {
				this._timeSeparator = value
			}
			if (!this._timeSeparator) {
				this._timeSeparator = ":"
			}
			return this._timeSeparator
		}, longDatePattern: function (value) {
			if (arguments.length === 1) {
				this._longDatePattern = value
			}
			if (!this._longDatePattern) {
				this._longDatePattern = "dddd, MMMM d, yyyy"
			}
			return this._longDatePattern
		}, shortDatePattern: function (value) {
			if (arguments.length === 1) {
				this._shortDatePattern = value
			}
			if (!this._shortDatePattern) {
				var g = globalInfo[this._isInvariant ? "invariant" : this._cultureName];
				if (g) {
					this._shortDatePattern = g.d
				} else {
					this._shortDatePattern = "M/d/yyyy"
				}
			}
			return this._shortDatePattern
		}, shortTimePattern: function (value) {
			if (arguments.length === 1) {
				this._shortTimePattern = value
			}
			if (!this._shortTimePattern) {
				this._shortTimePattern = "h:mm tt"
			}
			return this._shortTimePattern
		}, $type: new $.ig.Type("DateTimeFormat", $.ig.Object.prototype.$type)
	}, true);
	$.ig.NumberFormatInfo = Class.extend({
		init: function (cultureName, isInvariant) {
			this._cultureName = cultureName;
			this._isInvariant = isInvariant
		}, clone: function () {
			var copy = new $.ig.NumberFormatInfo(this._cultureName, this._isInvariant);
			for (var attr in this) {
				if (this.hasOwnProperty(attr)) {
					copy[attr] = this[attr]
				}
			}
			return copy
		}, currencySymbol: function (value) {
			if (arguments.length === 1) {
				this._currencySymbol = value
			}
			if (!this._currencySymbol) {
				var g = globalInfo[this._isInvariant ? "invariant" : this._cultureName];
				if (g) {
					this._currencySymbol = g.c
				} else {
					this._currencySymbol = "$"
				}
			}
			return this._currencySymbol
		}, nativeDigits: function () {
			if (!this._nativeDigits) {
				var g = globalInfo[this._isInvariant ? "invariant" : this._cultureName];
				if (g && g.n) {
					this._nativeDigits = g.n
				} else {
					this._nativeDigits = "0123456789"
				}
			}
			return this._nativeDigits
		}, negativeSign: function (value) {
			if (arguments.length === 1) {
				this._negativeSign = value
			}
			if (!this._negativeSign) {
				this._negativeSign = "-"
			}
			return this._negativeSign
		}, percentSymbol: function (value) {
			if (arguments.length === 1) {
				this._percentSymbol = value
			}
			if (!this._percentSymbol) {
				var temp = 1..toLocaleString(this._cultureName, {style: "percent"});
				this._percentSymbol = temp[temp.length - 1]
			}
			return this._percentSymbol
		}, positiveSign: function (value) {
			if (arguments.length === 1) {
				this._positiveSign = value
			}
			if (!this._positiveSign) {
				this._positiveSign = "+"
			}
			return this._positiveSign
		}, numberDecimalSeparator: function (value) {
			if (arguments.length === 1) {
				this._numberDecimalSeparator = value
			}
			if (!this._numberDecimalSeparator) {
				this._numberDecimalSeparator = 1.1.toLocaleString(this._cultureName).substring(1, 2)
			}
			return this._numberDecimalSeparator
		}, numberGroupSeparator: function (value) {
			if (arguments.length === 1) {
				this._numberGroupSeparator = value
			}
			if (!this._numberGroupSeparator) {
				var s = 123456789..toLocaleString(this._cultureName);
				var result = /\D/.exec(s);
				if (result === null || result.length === 0) {
					this._numberGroupSeparator = ","
				} else {
					this._numberGroupSeparator = result[0]
				}
			}
			return this._numberGroupSeparator
		}, numberGroupSizes: function (value) {
			if (arguments.length === 1) {
				this._numberGroupSizes = value
			}
			if (!this._numberGroupSizes) {
				var s = 123456789..toLocaleString(this._cultureName);
				var result = /\D(\d+)\D/.exec(s);
				if (result === null || result.length === 0) {
					this._numberGroupSizes = [3]
				} else {
					this._numberGroupSizes = [result[1].length]
				}
			}
			return this._numberGroupSizes
		}, $type: new $.ig.Type("NumberFormatInfo", $.ig.Object.prototype.$type)
	}, true);
	$.ig.util.defType("Thread", "Object", {
		init: function () {
		}, currentThread: function () {
			if (!this._currentThread) {
				this._currentThread = new $.ig.Thread
			}
			return this._currentThread
		}, currentCulture: function (value) {
			if (arguments.length === 1) {
				this._currentCulture = value
			}
			if (!this._currentCulture) {
				var currentLocale = navigator.language || navigator.userLanguage;
				this._currentCulture = new $.ig.CultureInfo(currentLocale)
			}
			return this._currentCulture
		}, $type: new $.ig.Type("Thread", $.ig.Object.prototype.$type)
	}, true);
	$.ig.util.defType("Stream", "Object", {
		init: function () {
		}, close: function () {
			this.disposeCore(true)
		}, dispose: function () {
			this.close()
		}, disposeCore: function (disposing) {
		}, flush: function () {
		}, readByte: function () {
			var bytes = [0];
			var count = this.read(bytes, 0, 1);
			if (count === 0) {
				return -1
			}
			return bytes[0]
		}, writeByte: function (value) {
			this.write([value], 0, 1)
		}, $type: new $.ig.Type("Stream", $.ig.Object.prototype.$type)
	}, true);
	(function ($) {
		$.ig.util.profiler = {};
		var methods = {};
		$.ig.util.profiler.recordTime = function (methodName, time) {
			var key = "meth: " + methodName;
			if (!methods[key]) {
				methods[key] = []
			}
			methods[key][methods[key].length] = time
		};
		$.ig.util.profiler.reset = function () {
			methods = {}
		};
		$.ig.util.profiler.logReport = function () {
			var meths = [];
			var j = 0;
			var sum = 0;
			var avg = 0;
			for (var prop in methods) {
				if (prop.indexOf("meth:") === 0) {
					var meth = {};
					meth.name = prop.substr(5);
					sum = 0;
					for (var i = 0; i < methods[prop].length; i++) {
						sum = sum + methods[prop][i]
					}
					avg = sum / methods[prop].length;
					meth.avg = avg;
					meth.callCount = methods[prop].length;
					meths[j] = meth;
					j++
				}
			}
			meths.sort(function (m1, m2) {
				if (m1.avg < m2.avg) {
					return 1
				}
				if (m1.avg > m2.avg) {
					return -1
				}
				if (m1.avg == m2.avg) {
					return 0
				}
			});
			for (var k = 0; k < Math.min(200, meths.length); k++) {
				console.log(meths[k].name + " avg: " + meths[k].avg + " callCount: " + meths[k].callCount)
			}
		}
	})(jQuery);
	$.ig.extendNativePrototype(Function.prototype, "invoke", function () {
		return this.apply(null, arguments)
	});
	$.ig.extendNativePrototype(Function.prototype, "runOn", function (target) {
		var self = this;
		var ret = function () {
			return self.apply(target, arguments)
		};
		ret.original = this;
		ret.target = target;
		return ret
	});
	String.prototype.startsWith = function (s) {
		return this.indexOf(s) === 0
	};
	String.prototype.startsWith1 = function (s, comparisonType) {
		if (this.length < s.length) {
			return false
		}
		return $.ig.util.stringCompare1(this.slice(0, s.length), s, comparisonType || 0) === 0
	};
	String.prototype.endsWith = function (s, comparisonType) {
		if (this.length < s.length) {
			return false
		}
		return $.ig.util.stringCompare1(this.slice(-s.length), s, comparisonType || 0) === 0
	};
	String.prototype.remove = function (index, count) {
		if (!count || index + count > this.length) {
			return this.substr(0, index)
		}
		return this.substr(0, index) + this.substr(index + count)
	};
	String.prototype.compareTo = function (other) {
		if (this == other) {
			return 0
		}
		if (this < other) {
			return -1
		}
		return 1
	};
	if (!String.prototype.trim) {
		String.prototype.trim = function () {
			return this.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
		}
	}
	if (!String.prototype.getHashCode) {
		String.prototype.getHashCode = function () {
			var hash = 0, i, chr, len;
			if (this.length === 0) {
				return hash
			}
			for (i = 0, len = this.length; i < len; i++) {
				chr = this.charCodeAt(i);
				hash = (hash << 5) - hash + chr;
				hash |= 0
			}
			return hash
		}
	}
	String.prototype.fullTrim = function () {
		return this.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, "").replace(/\s+/g, " ")
	};
	String.prototype.trimStart = function () {
		var args = [" "];
		if (arguments.length > 0) {
			args = Array.prototype.slice.call(arguments);
			if (args.length === 1 && $.isArray(args[0])) {
				args = args[0]
			}
		}
		if (this.length === 0) {
			return this
		}
		var i = 0;
		for (; i < this.length && args.indexOf(this.charAt(i)) > -1; i++) ;
		return this.substring(i)
	};
	String.prototype.trimEnd = function () {
		var args = [" "];
		if (arguments.length > 0) {
			args = Array.prototype.slice.call(arguments);
			if (args.length === 1 && $.isArray(args[0])) {
				args = args[0]
			}
		}
		var i = this.length - 1;
		for (; i >= 0 && args.indexOf(this.charAt(i)) > -1; i--) ;
		return this.substring(0, i + 1)
	};
	String.getHashCode = function () {
		return this
	};
	String.isNullOrEmpty = function (s) {
		return !s || s.length < 1
	};
	String.isNullOrWhiteSpace = function (s) {
		return !s || s.trim().length < 1
	};
	String.empty = function () {
		return ""
	};
	String.concat = function () {
		return [].join.call(arguments, "")
	};
	String.concat1 = function (o1, o2) {
		return [].join.call(arguments, "")
	};
	String.concat2 = function (s1, s2) {
		return [].join.call(arguments, "")
	};
	String.concat3 = function () {
		return [].join.call(arguments, "")
	};
	String.concat4 = function (o1, o2, o3) {
		return [].join.call(arguments, "")
	};
	String.concat5 = function (s1, s2, s3) {
		return [].join.call(arguments, "")
	};
	String.concat6 = function (o1, o2, o3, o4) {
		return [].join.call(arguments, "")
	};
	String.concat7 = function (s1, s2, s3, s4) {
		return [].join.call(arguments, "")
	};
	String.equalsStatic = $.ig.Object.prototype.equalsStatic;
	String.prototype.equals = function (other) {
		return this == other
	};
	String.prototype.contains = function (s) {
		return this.indexOf(s) > -1
	};
	String.prototype.padLeft = function (len, c) {
		var s = this;
		c = c || " ";
		while (s.length < len) {
			s = c + s
		}
		return s
	};
	String.prototype.padRight = function (len, c) {
		var s = this;
		c = c || " ";
		while (s.length < len) {
			s += c
		}
		return s
	};
	String.prototype.capitalize = function () {
		return this.charAt(0).toUpperCase() + this.slice(1)
	};
	if (!String.prototype.indexOfAny) {
		String.prototype.indexOfAny = function (chars) {
			var s = this.toString();
			for (var i = 0; i < s.length; i++) {
				if (chars.contains(s[i])) {
					return i
				}
			}
			return -1
		}
	}
	if (!String.prototype.lastIndexOfAny) {
		String.prototype.lastIndexOfAny = function (chars) {
			var s = this.toString();
			for (var i = s.length - 1; i >= 0; i--) {
				if (chars.contains(s[i])) {
					return i
				}
			}
			return -1
		}
	}
	if (!Array.prototype.filter) {
		Array.prototype.filter = function (fun) {
			var t, len, res, thisp, val, i;
			if (this === undefined || this === null) {
				throw new TypeError
			}
			t = Object(this);
			len = t.length >>> 0;
			if (typeof fun != "function") {
				throw new TypeError
			}
			res = [];
			thisp = arguments[1];
			for (i = 0; i < len; i++) {
				if (i in t) {
					val = t[i];
					if (fun.call(thisp, val, i, t)) {
						res.push(val)
					}
				}
			}
			return res
		}
	}
	$.ig.extendNativePrototype(Array.prototype, "insertRange", function (index, items) {
		var i = 0;
		if (this.length === 0) {
			for (i = 0; i < items.length; i++) {
				this[index++] = items[i]
			}
		} else {
			for (i = 0; i < items.length; i++) {
				this.splice(index++, 0, items[i])
			}
		}
	});
	$.ig.extendNativePrototype(Array.prototype, "insertRange1", function (index, items) {
		var i = 0;
		if (this.length === 0) {
			for (i = 0; i < items.length; i++) {
				this[index++] = items[i]
			}
		} else {
			for (i = 0; i < items.length; i++) {
				this.splice(index++, 0, items[i])
			}
		}
	});
	$.ig.extendNativePrototype(Array.prototype, "clone", function () {
		return $.extend(true, [], this)
	});
	$.ig.extendNativePrototype(Array.prototype, "clear", function () {
		this.length = 0
	});
	Math.log10 = function (n) {
		return Math.log(n) / Math.log(10)
	};
	Math.logBase = function (n, n2) {
		return Math.log(n) / Math.log(n2)
	};
	Math.sign = function (n) {
		if (n < 0) {
			return -1
		} else if (n > 0) {
			return 1
		} else {
			return 0
		}
	};
	if (!Math.cosh) {
		Math.cosh = function (x) {
			var y = Math.exp(x);
			return (y + 1 / y) / 2
		}
	}
	if (!Math.sinh) {
		Math.sinh = function (x) {
			var y = Math.exp(x);
			return (y - 1 / y) / 2
		}
	}
	if (!Math.tanh) {
		Math.tanh = function (x) {
			if (x === Infinity) {
				return 1
			} else if (x === -Infinity) {
				return -1
			} else {
				var y = Math.exp(2 * x);
				return (y - 1) / (y + 1)
			}
		}
	}
	if (!Math.ieeeRemainder) {
		Math.ieeeRemainder = function (a, b) {
			var r = Math.abs(a % b);
			if (isNaN(r) || r == b || r <= Math.abs(b) / 2) {
				return r
			} else {
				return Math.signum(a) * (r - b)
			}
		}
	}
	Number.getHashCode = function () {
		return this
	};
	Number.isInfinity = function (n) {
		return n === Infinity || n === -Infinity
	};
	if (!Number.prototype.getHashCode) {
		Number.prototype.getHashCode = function () {
			return this
		}
	}
	Boolean.prototype.getType = function () {
		return jQuery.ig.Boolean.prototype.$type
	};
	Number.prototype.getType = function () {
		return Number
	};
	String.prototype.getType = function () {
		return String
	};
	window.toStaticHTML = window.toStaticHTML || function (s) {
		return s
	};
	window.MSApp = window.MSApp || {};
	window.MSApp.execUnsafeLocalFunction = window.MSApp.execUnsafeLocalFunction || function (fn) {
		fn.apply()
	};
	$.ig.util.jQueryUIMainVersion = $.ui && $.ui.version && $.ui.version.length > 0 ? parseInt($.ui.version.split(".", 1)[0], 10) : null;
	$.ig.util.jQueryUISubVersion = $.ui && $.ui.version && $.ui.version.length > 0 ? parseInt($.ui.version.split(".", 2)[1], 10) : null;
	$.ig.util.jQueryMainVersion = $.fn.jquery && $.fn.jquery.length ? parseInt($.fn.jquery.split(".", 1)[0], 10) : null;
	$.ig.util.jQuerySubVersion = $.fn.jquery && $.fn.jquery.length ? parseInt($.fn.jquery.split(".", 2)[1], 10) : null;
	$.ig.util.jqueryFlagsCache = {};
	$.ig.util.jqueryCreateFlags = function (flags) {
		var object = $.ig.util.jqueryFlagsCache[flags] = {}, i, length;
		flags = flags.split(/\s+/);
		for (i = 0, length = flags.length; i < length; i++) {
			object[flags[i]] = true
		}
		return object
	};
	$.ig.util.jqueryCallbacks = function (flags) {
		flags = flags ? $.ig.util.jqueryFlagsCache[flags] || $.ig.util.jqueryCreateFlags(flags) : {};
		var self, list = [], stack = [], memory, fired, firing, firingStart, firingLength, firingIndex,
			add = function (args) {
				var i, length, elem, type, actual;
				for (i = 0, length = args.length; i < length; i++) {
					elem = args[i];
					type = jQuery.type(elem);
					if (type === "array") {
						add(elem)
					} else if (type === "function") {
						if (!flags.unique || !self.has(elem)) {
							list.push(elem)
						}
					}
				}
			}, fire = function (context, args) {
				args = args || [];
				memory = !flags.memory || [context, args];
				fired = true;
				firing = true;
				firingIndex = firingStart || 0;
				firingStart = 0;
				firingLength = list.length;
				for (; list && firingIndex < firingLength; firingIndex++) {
					if (list[firingIndex].apply(context, args) === false && flags.stopOnFalse) {
						memory = true;
						break
					}
				}
				firing = false;
				if (list) {
					if (!flags.once) {
						if (stack && stack.length) {
							memory = stack.shift();
							self.fireWith(memory[0], memory[1])
						}
					} else if (memory === true) {
						self.disable()
					} else {
						list = []
					}
				}
			};
		self = {
			add: function () {
				if (list) {
					var length = list.length;
					add(arguments);
					if (firing) {
						firingLength = list.length
					} else if (memory && memory !== true) {
						firingStart = length;
						fire(memory[0], memory[1])
					}
				}
				return this
			}, remove: function () {
				if (list) {
					var args = arguments, argIndex = 0, argLength = args.length;
					for (; argIndex < argLength; argIndex++) {
						for (var i = 0; i < list.length; i++) {
							if (args[argIndex] === list[i]) {
								if (firing) {
									if (i <= firingLength) {
										firingLength--;
										if (i <= firingIndex) {
											firingIndex--
										}
									}
								}
								list.splice(i--, 1);
								if (flags.unique) {
									break
								}
							}
						}
					}
				}
				return this
			}, has: function (fn) {
				if (list) {
					var i = 0, length = list.length;
					for (; i < length; i++) {
						if (fn === list[i]) {
							return true
						}
					}
				}
				return false
			}, empty: function () {
				list = [];
				return this
			}, disable: function () {
				list = stack = memory = undefined;
				return this
			}, disabled: function () {
				return !list
			}, lock: function () {
				stack = undefined;
				if (!memory || memory === true) {
					self.disable()
				}
				return this
			}, locked: function () {
				return !stack
			}, fireWith: function (context, args) {
				if (stack) {
					if (firing) {
						if (!flags.once) {
							stack.push([context, args])
						}
					} else if (!(flags.once && memory)) {
						fire(context, args)
					}
				}
				return this
			}, fire: function () {
				self.fireWith(this, arguments);
				return this
			}, fired: function () {
				return !!fired
			}
		};
		return self
	};
	$.ig.util.jqueryDeferred = function (func) {
		var deferred, doneList = $.ig.util.jqueryCallbacks("once memory"),
			failList = $.ig.util.jqueryCallbacks("once memory"), progressList = $.ig.util.jqueryCallbacks("memory"),
			state = "pending", lists = {resolve: doneList, reject: failList, notify: progressList}, promise = {
				done: doneList.add,
				fail: failList.add,
				progress: progressList.add,
				state: function () {
					return state
				},
				isResolved: doneList.fired,
				isRejected: failList.fired,
				then: function (doneCallbacks, failCallbacks, progressCallbacks) {
					deferred.done(doneCallbacks).fail(failCallbacks).progress(progressCallbacks);
					return this
				},
				always: function () {
					deferred.done.apply(deferred, arguments).fail.apply(deferred, arguments);
					return this
				},
				pipe: function (fnDone, fnFail, fnProgress) {
					return $.ig.util.jqueryDeferred(function (newDefer) {
						jQuery.each({
							done: [fnDone, "resolve"],
							fail: [fnFail, "reject"],
							progress: [fnProgress, "notify"]
						}, function (handler, data) {
							var fn = data[0], action = data[1], returned;
							if (jQuery.isFunction(fn)) {
								deferred[handler](function () {
									returned = fn.apply(this, arguments);
									if (returned && jQuery.isFunction(returned.promise)) {
										returned.promise().then(newDefer.resolve, newDefer.reject, newDefer.notify)
									} else {
										newDefer[action + "With"](this === deferred ? newDefer : this, [returned])
									}
								})
							} else {
								deferred[handler](newDefer[action])
							}
						})
					}).promise()
				},
				promise: function (obj) {
					if (obj === undefined || obj === null) {
						obj = promise
					} else {
						for (var key in promise) {
							obj[key] = promise[key]
						}
					}
					return obj
				}
			}, key;
		deferred = promise.promise({});
		for (key in lists) {
			deferred[key] = lists[key].fire;
			deferred[key + "With"] = lists[key].fireWith
		}
		deferred.done(function () {
			state = "resolved"
		}, failList.disable, progressList.lock).fail(function () {
			state = "rejected"
		}, doneList.disable, progressList.lock);
		if (func) {
			func.call(deferred, deferred)
		}
		return deferred
	};
	$.ig.util.checkDeferred = function () {
		$.ig.util.deferredDefined = !!($.Deferred !== undefined && $.Deferred().state)
	};
	$.ig.util.deferred = function () {
		if ($.ig.util.deferredDefined === undefined) {
			$.ig.util.checkDeferred()
		}
		if ($.ig.util.deferredDefined) {
			return $.Deferred()
		} else {
			return $.ig.util.jqueryDeferred()
		}
	};
	$.ig.util.ajax = function (url, contentType, data, method, requestOptions) {
		var deferred = $.ig.util.deferred();
		var isCrossDomain;
		if (requestOptions && "isCrossDomain" in requestOptions) {
			isCrossDomain = requestOptions.isCrossDomain
		} else {
			isCrossDomain = $.support.cors
		}
		var xhrObj = function (rOptions) {
			var xhr = new XMLHttpRequest;
			if (isCrossDomain && !("withCredentials" in xhr || rOptions && "withCredentials" in rOptions && rOptions.withCredentials) && typeof XDomainRequest != "undefined") {
				xhr = new XDomainRequest;
				xhr.getResponseHeader = function () {
					return null
				};
				xhr.setRequestHeader = function () {
					xhr.status = 200
				};
				xhr.getAllResponseHeaders = function () {
					return null
				};
				xhr.onload = function () {
					xhr.readyState = 4;
					xhr.status = 200;
					xhr.statusText = "success";
					xhr.getAllResponseHeaders = function () {
					};
					xhr.onreadystatechange()
				};
				xhr.onerror = function () {
					xhr.readyState = 4;
					xhr.status = 0;
					xhr.statusText = "error";
					xhr.getAllResponseHeaders = function () {
					};
					xhr.onreadystatechange()
				};
				xhr.ontimeout = function () {
					xhr.readyState = 4;
					xhr.status = 0;
					xhr.statusText = "timeout";
					xhr.getAllResponseHeaders = function () {
					};
					xhr.onreadystatechange()
				};
				xhr.onprogress = function () {
				}
			}
			return xhr
		}(requestOptions);
		var xhrFields;
		if ("withCredentials" in xhrObj && requestOptions && "withCredentials" in requestOptions && requestOptions.withCredentials) {
			xhrFields = {withCredentials: true}
		}
		var beforeSend = function (jqXHR, options) {
			if (requestOptions) {
				if ($.isFunction(requestOptions.beforeSend)) {
					jqXHR.setRequestHeader("Content-Type", contentType);
					requestOptions.beforeSend.call(this, jqXHR, options, requestOptions)
				}
			}
		};
		$.ajax({
			crossDomain: isCrossDomain ? true : false,
			isLocal: false,
			url: url,
			contentType: contentType,
			data: data,
			type: method,
			dataType: "text",
			xhrFields: xhrFields,
			beforeSend: beforeSend,
			xhr: function () {
				return xhrObj
			},
			success: function (responce, textStatus, jqXHR) {
				deferred.resolve(responce)
			},
			error: function (jqXHR, textStatus, errorThrown) {
				deferred.reject(errorThrown)
			}
		});
		return deferred.promise()
	};
	$.ig.util.offset = function (e, xy) {
		var doc = e ? e[0].ownerDocument : document, windowBorderWidth = 8,
			zoom = (window.outerWidth - windowBorderWidth * 2) / window.innerWidth;
		xy = xy || e.offset();
		if (zoom && zoom > 1 && ($.ig.util.isIE10 || $.ig.util.isIE11 || $.ig.util.isEdge)) {
			if ($.ig.util.isIE) {
				xy.documentScrollLeft = doc.documentElement.scrollLeft;
				xy.documentScrollTop = doc.documentElement.scrollTop
			} else if ($.ig.util.isEdge) {
				xy.documentScrollLeft = doc.body.scrollLeft;
				xy.documentScrollTop = doc.body.scrollTop
			}
			xy.left += xy.documentScrollLeft - window.pageXOffset;
			xy.top += xy.documentScrollTop - window.pageYOffset
		}
		return xy
	};
	$.ig.util.getRelativeOffset = function (e) {
		var elem = e.parent(), o = {left: 0, top: 0}, position;
		while (elem[0] !== null && elem[0] !== undefined && elem[0].nodeName !== "#document") {
			position = elem.css("position");
			if (position !== "static" && position !== "") {
				o.left = elem.offset().left - elem.scrollLeft();
				o.top = elem.offset().top - elem.scrollTop();
				break
			}
			elem = elem.parent()
		}
		return o
	};
	$.ig.util.setSize = function (elem, prop, val, chart, notifyResized) {
		if (!elem || !elem[0]) {
			return
		}
		var timer, px, obj = elem[0]._w_s_f = elem[0]._w_s_f || {}, perc = obj.perc;
		if (!prop) {
			if (obj.tickID) {
				obj.onTick(true)
			}
			delete obj.elem;
			delete obj.chart;
			elem[0]._w_s_f = null;
			return
		}
		if (!val) {
			val = elem[prop]()
		}
		if (perc && perc.indexOf(prop) >= 0) {
			perc = perc.replace(prop, "")
		}
		if (val) {
			elem[prop](val);
			if (typeof val !== "number") {
				val = val.toString();
				if (val.indexOf("%") > 0) {
					perc = perc || "";
					if (perc.indexOf(prop) < 0) {
						timer = perc += prop
					}
				}
				px = val.indexOf("px");
				if (px > 0) {
					val = val.substring(0, px)
				}
				px = parseFloat(val);
				if (px.toString() === val) {
					val = px
				} else {
					val = elem[prop]();
					if (!val) {
						obj.wait = obj.wait || "";
						if (obj.wait.indexOf(prop) < 0) {
							obj.wait += prop
						}
						timer = prop
					}
				}
			}
			obj.perc = perc;
			if (val && chart) {
				if (chart[prop]) {
					chart[prop](val)
				}
				if (notifyResized) {
					chart[notifyResized]()
				}
			}
		}
		if (!timer && !elem[0].offsetWidth) {
			timer = obj.wait = "width"
		}
		if (timer) {
			obj.elem = elem;
			obj.chart = chart;
			obj.notify = notifyResized;
			obj.onTick = obj.onTick || function (stop) {
				var resize, obj = this, chart = obj.chart, elem = obj.elem, perc = obj.perc || "",
					wait = obj.wait || "", width = stop || elem[0].offsetWidth, height = stop || elem[0].offsetHeight,
					oldWidth = obj.oldWidth || 0, oldHeight = obj.oldHeight || 0;
				stop = stop === true || !perc && !wait;
				if (stop) {
					if (obj.tickID) {
						clearInterval(obj.tickID)
					}
					delete obj.tickID;
					return
				}
				if (!obj.tickID && (!width || !height || perc)) {
					obj.tickID = setInterval(function () {
						obj.onTick()
					}, 200)
				}
				if (!width || !height) {
					return
				}
				delete obj.wait;
				obj.oldWidth = width;
				obj.oldHeight = height;
				if (!chart) {
					return
				}
				if (chart.width && (perc.indexOf("width") >= 0 && width !== oldWidth || wait.indexOf("width") >= 0)) {
					chart.width(resize = width)
				}
				if (chart.height && (perc.indexOf("height") >= 0 && height !== oldHeight || wait.indexOf("height") >= 0)) {
					chart.height(resize = height)
				}
				if (resize && obj.notify) {
					chart[obj.notify]()
				}
			};
			obj.onTick()
		}
	};
	$.ig.util.getEasingFunction = function (easingValue) {
		if (easingValue === null || easingValue == "null" || easingValue == "linear") {
			return null
		}
		switch (easingValue) {
			case"cubic":
				return $.ig.EasingFunctions.prototype.cubicEase
		}
		return easingValue
	};
	$.ig.util.hasVerticalScroll = function (elem) {
		var overflow = $(elem).css("overflow-y");
		return overflow === "scroll" || overflow === "auto" && elem[0].scrollHeight > elem[0].clientHeight
	};
	$.ig.util.hasHorizontalScroll = function (elem) {
		var overflow = $(elem).css("overflow-x");
		return overflow === "scroll" || overflow === "auto" && elem[0].scrollWidth > elem[0].clientWidth
	};
	$.ig.util.getScrollWidth = function () {
		var el = $('<div style="width: 100px; height: 100px; position: absolute; top: -10000px; left: -10000px; overflow: scroll"></div>').appendTo($(document.body)),
			scrollWidth;
		scrollWidth = el[0].offsetWidth - el[0].clientWidth;
		el.remove();
		return scrollWidth
	};
	$.ig.util.getScrollHeight = function () {
		var el = $('<div style="width: 100px; height: 100px; position: absolute; top: -10000px; left: -10000px; overflow: scroll"></div>').appendTo($(document.body)),
			scrollHeight;
		scrollHeight = el[0].offsetHeight - el[0].clientHeight;
		el.remove();
		return scrollHeight
	};
	$.ig.util.isDomElement = function (o) {
		return typeof HTMLElement === "object" ? o instanceof HTMLElement : o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string"
	};
	$.ig.util.isJsonpUrl = function (url) {
		var isJSONPExpr = /(=)\?(?=&|$)|\?\?/;
		return isJSONPExpr.test(url)
	};
	$.ig.util.evtButton = function (e) {
		e = e ? e.button : null;
		if (e === 1) {
			e = this._ie_8;
			if (!e) {
				var v;
				e = window.navigator.userAgent;
				if (e) {
					v = e.toLowerCase().indexOf("msie ");
					if (v > 0) {
						v = parseFloat(e.substring(v + 5));
						if (v > 8) {
							v = parseFloat(document.documentMode)
						}
					}
				}
				this._ie_8 = e = v && !isNaN(v) && v > 5 && v < 9 ? 1 : -1
			}
			e = e < 0 ? 1 : 0
		}
		return e === 2 ? 2 : e ? 1 : 0
	};
	$.fn.animateRotate = function (startAngle, endAngle, duration, easing, complete) {
		return this.each(function () {
			var elem = $(this);
			$({deg: startAngle}).animate({deg: endAngle}, {
				duration: duration, easing: easing, step: function (now) {
					elem.css({
						"-moz-transform": "rotate(" + now + "deg)",
						"-webkit-transform": "rotate(" + now + "deg)",
						"-o-transform": "rotate(" + now + "deg)",
						"-ms-transform": "rotate(" + now + "deg)",
						transform: "rotate(" + now + "deg)"
					})
				}, complete: complete || $.noop
			})
		})
	};
	$.ig.util.dateFromISO = function (obj) {
		var regexIso8601 = /^(\d{4}|\+\d{6})(?:-(\d{2})(?:-(\d{2})(?:T(\d{2})(?::(\d{2})(?::(\d{2})(?:\.(\d{1,7})(?:Z|([\-+])(\d{2}):(\d{2}))?)?)?)?)?)?)?$/,
			m = regexIso8601.exec(obj);
		if (m) {
			return new Date(Date.UTC(m[1], (m[2] || 1) - 1, m[3] || 1, m[4] - (m[8] ? m[8] + m[9] : 0) || 0, m[5] - (m[8] ? m[8] + m[10] : 0) || 0, m[6] || 0, ((m[7] || 0) + "00").substr(0, 3)))
		}
		return obj
	};
	$.ig.util.defaultDVDateParse = function (obj) {
		return new Date(parseInt(obj.replace("/Date(", "").replace(")/", ""), 10))
	};
	$.ig.util.makeCRCTable = function () {
		var c, n, k, crcTable = [];
		for (n = 0; n < 256; n++) {
			c = n;
			for (k = 0; k < 8; k++) {
				c = c & 1 ? 3988292384 ^ c >>> 1 : c >>> 1
			}
			crcTable[n] = c
		}
		return crcTable
	};
	$.ig.util.crc32 = function (str) {
		var crcTable = $.ig.util.crcTable || ($.ig.util.crcTable = $.ig.util.makeCRCTable()), crc = 0 ^ -1, i;
		str = unescape(encodeURIComponent(str));
		for (i = 0; i < str.length; i++) {
			crc = crc >>> 8 ^ crcTable[(crc ^ str.charCodeAt(i)) & 255]
		}
		return (crc ^ -1) >>> 0
	};
	$.ig.util.getCheckSumForObject = function (obj) {
		var str = "", key;
		for (key in obj) {
			if (obj.hasOwnProperty(key) && typeof obj[key] !== "object") {
				str += obj[key]
			}
		}
		return $.ig.util.crc32(str)
	};
	$.ig.util.createGuid = function () {
		function S4() {
			return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1)
		}

		return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0, 3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase()
	};
	$.ig.util.escapeRegExp = function (str) {
		return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
	};
	$.ig.util.escapeStr = function (str) {
		return str.replace(/([ !"#$%&'()*+,.\/:;<=>?@[\\\]^`{|}~])/g, "\\$1")
	};
	$.ig.util.escapeHtmlTags = function (htmlElemContent) {
		if (typeof htmlElemContent === "string") {
			return htmlElemContent.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
		} else {
			return htmlElemContent
		}
	};
	$.ig.util.replace = function (str, oldValue, newValue) {
		return str.replace(new RegExp($.ig.util.escapeRegExp(oldValue), "g"), newValue)
	};
	$.ig.util.stringFormat = function (format) {
		return $.ig.util.stringFormat1(format, Array.prototype.slice.call(arguments, 1))
	};
	$.ig.util.stringFormat1 = function (format, args) {
		return $.ig.util.stringFormat2($.ig.CultureInfo.prototype.currentCulture(), format, args)
	};
	$.ig.util.stringFormat2 = function (provider, format, args) {
		return format.replace(/{(\d+)(?::)?([^}]*)?}/g, function (match, number, format) {
			var arg = args[number];
			if (arg === void 0) return match;
			if (arg === null) return "";
			if (format) {
				if (format[0] === "X") {
					return $.ig.util.intToString1(arg, format, provider)
				} else {
					return $.ig.util.numberToString1(arg, format, provider)
				}
			}
			return arg
		})
	};
	$.ig.util.createInstance = function ($t) {
		if ($t === Number || $t == $.ig.Number.prototype.$type || $t.baseType === $.ig.Enum.prototype.$type) {
			return 0
		}
		if ($t == Boolean || $t == $.ig.Boolean.prototype.$type) {
			return false
		}
		if ($t.InstanceConstructor) {
			var result;
			if (typeof Object.create === "function") {
				result = Object.create($t.InstanceConstructor.prototype)
			} else {
				var Cons = function () {
				};
				Cons.prototype = $t.InstanceConstructor.prototype;
				result = new Cons
			}
			$t.InstanceConstructor.apply(result, Array.prototype.slice.call(arguments, 1));
			return result
		}
		throw new Error("Cannot find instance constructor for the type parameter")
	};
	$.ig.util.getDefaultValue = function ($t) {
		if ($t === Number || $t == $.ig.Number.prototype.$type || $t.baseType === $.ig.Enum.prototype.$type) {
			return 0
		}
		if ($t == Boolean || $t == $.ig.Boolean.prototype.$type) {
			return false
		}
		if ($t.baseType === $.ig.ValueType.prototype.$type) {
			return $.ig.util.createInstance($t)
		}
		return null
	};
	$.ig.util.equalsSimple = function (item1, item2) {
		return item1 == item2
	};
	$.ig.util.compareSimple = function (item1, item2) {
		if (item1 == item2) {
			return 0
		}
		if (item1 < item2) {
			return -1
		}
		return 1
	};
	$.ig.util.compare = function (item1, item2) {
		if (item1 === item2) {
			return 0
		}
		var xComparable = $.ig.util.cast($.ig.IComparable.prototype.$type, item1);
		if (xComparable !== null) {
			return xComparable.compareTo(item2)
		}
		var yComparable = $.ig.util.cast($.ig.IComparable.prototype.$type, item2);
		if (yComparable !== null) {
			return -yComparable.compareTo(item1)
		}
		return $.ig.util.compareSimple(item1, item2)
	};
	$.ig.util.boolCompare = function (item1, item2) {
		if (item1 == item2) {
			return 0
		}
		return item1 ? 1 : -1
	};
	$.ig.util.areSetsEqual = function (array1, array2) {
		var sortedArray1, sortedArray2;
		if (!array1 || !array2 || array1.length !== array2.length) {
			return false
		}
		if (array1 === array2) {
			return true
		}
		sortedArray1 = array1.slice().sort();
		sortedArray2 = array2.slice().sort();
		for (var i = 0; i < sortedArray1.length; i++) {
			if (sortedArray1[i] !== sortedArray2[i]) {
				return false
			}
		}
		return true
	};
	$.ig.util.sleep = function (milliseconds) {
		var start = (new Date).getTime();
		for (var i = 0; i < 1e7; i++) {
			if ((new Date).getTime() - start > milliseconds) {
				break
			}
		}
	};
	$.ig.util.toCharArray = function (string) {
		{
			return string.split("")
		}
	};
	$.ig.util.IMEtoENNumbersMapping = function () {
		return {
			"\uff11": "1",
			"\uff12": "2",
			"\uff13": "3",
			"\uff14": "4",
			"\uff15": "5",
			"\uff16": "6",
			"\uff17": "7",
			"\uff18": "8",
			"\uff19": "9",
			"\uff10": "0"
		}
	};
	$.ig.util.IMEtoNumberString = function (stringValue, mapping) {
		if (mapping === undefined) {
			return stringValue
		}
		if (stringValue) {
			stringValue = stringValue.toString();
			$.each(mapping, function (jpVal, engVal) {
				stringValue = stringValue.replace(new RegExp(jpVal, "g"), engVal)
			})
		}
		return stringValue
	};
	$.ig.util.stringCompare1 = function (strA, strB, comparisonType) {
		if (!strA) {
			return !strB ? 0 : -1
		} else if (!strB) {
			return 1
		}
		switch (comparisonType) {
			case $.ig.StringComparison.prototype.currentCulture:
				return $.ig.CultureInfo.prototype.currentCulture().compareInfo().compare4(strA, strB);
			case $.ig.StringComparison.prototype.currentCultureIgnoreCase:
				return $.ig.CultureInfo.prototype.currentCulture().compareInfo().compare4(strA.toLowerCase(), strB.toLowerCase());
			case $.ig.StringComparison.prototype.invariantCulture:
			case $.ig.StringComparison.prototype.ordinal:
				return strA.compareTo(strB);
			case $.ig.StringComparison.prototype.invariantCultureIgnoreCase:
			case $.ig.StringComparison.prototype.ordinalIgnoreCase:
				return strA.toLowerCase().compareTo(strB.toLowerCase());
			default:
				break
		}
		return 0
	};
	$.ig.util.stringCompare2 = function (strA, strB, culture, options) {
		return culture.compareInfo().compare5(strA, strB, options)
	};
	$.ig.util.stringCompare3 = function (strA, indexA, strB, indexB, length) {
		var v1 = strA.substr(indexA, length);
		var v2 = strB.substr(indexB, length);
		return $.ig.util.stringCompare1(v1, v2, $.ig.StringComparison.prototype.currentCulture)
	};
	$.ig.util.tryParseNumber = function (s) {
		var value = Number(s);
		if (value !== null && isFinite(value) && s.trim().length !== 0) {
			return {p1: value, ret: true}
		} else {
			return {p1: 0, ret: false}
		}
	};
	$.ig.util.tryParseNumber1 = function (s, style, provider) {
		var value, i, currentCharCode;
		provider = provider || $.ig.CultureInfo.prototype.currentCulture();
		if (style & $.ig.NumberStyles.prototype.allowLeadingWhite) {
			s = s.trimStart()
		}
		if (style & $.ig.NumberStyles.prototype.allowTrailingWhite) {
			s = s.trimEnd()
		}
		if (s.length != s.trim().length) {
			return {p3: 0, ret: false}
		}
		var numberFormat = provider.numberFormat();
		if (style & $.ig.NumberStyles.prototype.allowCurrencySymbol) {
			if (s[0] == "$") {
				s = s.slice(1)
			}
		}
		var multiplier = 1;
		var hadParentheses = false;
		if (style & $.ig.NumberStyles.prototype.allowParentheses) {
			if (s[0] == "(" && s[s.length - 1] == ")") {
				hadParentheses = true;
				multiplier *= -1;
				s = s.slice(1, -1)
			}
		}
		if (style & $.ig.NumberStyles.prototype.allowCurrencySymbol) {
			if (s[0] == "$") {
				s = s.slice(1)
			}
		}
		if (style & $.ig.NumberStyles.prototype.allowLeadingSign) {
			var positiveSign = numberFormat.positiveSign();
			var negativeSign = numberFormat.negativeSign();
			if (s[0] == positiveSign || s[0] == negativeSign) {
				if (hadParentheses) {
					return {p3: 0, ret: false}
				}
				if (s[0] == negativeSign) {
					multiplier *= -1
				}
				s = s.slice(1)
			}
		}
		if (style & $.ig.NumberStyles.prototype.allowTrailingSign) {
		}
		if (style & $.ig.NumberStyles.prototype.allowDecimalPoint) {
			if (style & $.ig.NumberStyles.prototype.allowExponent) {
			}
			if (style & $.ig.NumberStyles.prototype.allowThousands) {
				var decimalSeparator = numberFormat.numberDecimalSeparator();
				var groupSeparator = numberFormat.numberGroupSeparator();
				var hitDecimalSeparator = false;
				for (i = 0; i < s.length; i++) {
					switch (s[i]) {
						case groupSeparator:
							if (hitDecimalSeparator) {
								return {p3: 0, ret: false}
							}
							s = s.slice(0, i) + s.slice(i + 1);
							i--;
							break;
						case decimalSeparator:
							hitDecimalSeparator = true;
							if (decimalSeparator != ".") {
								s = s.slice(0, i) + "." + s.slice(i + 1)
							}
							break
					}
				}
			}
			value = Number(s);
			if (value !== null && isFinite(value) && s.trim().length !== 0) {
				return {p3: value * multiplier, ret: true}
			}
		} else {
			var zeroCharCode = "0".charCodeAt(0);
			var nineCharCode = "9".charCodeAt(0);
			value = 0;
			if (style & $.ig.NumberStyles.prototype.allowHexSpecifier) {
				var aCharCode = "a".charCodeAt(0);
				var fCharCode = "f".charCodeAt(0);
				var ACharCode = "A".charCodeAt(0);
				var FCharCode = "F".charCodeAt(0);
				for (i = 0; i < s.length; i++) {
					value *= 16;
					currentCharCode = s[i].charCodeAt(0);
					if (zeroCharCode <= currentCharCode && currentCharCode <= nineCharCode) {
						value += currentCharCode - zeroCharCode
					} else if (aCharCode <= currentCharCode && currentCharCode <= fCharCode) {
						value += currentCharCode - aCharCode + 10
					} else if (ACharCode <= currentCharCode && currentCharCode <= FCharCode) {
						value += currentCharCode - ACharCode + 10
					} else {
						return {p3: 0, ret: false}
					}
				}
			} else {
				for (i = 0; i < s.length; i++) {
					value *= 10;
					currentCharCode = s[i].charCodeAt(0);
					if (zeroCharCode <= currentCharCode && currentCharCode <= nineCharCode) {
						value += currentCharCode - zeroCharCode
					} else {
						return {p3: 0, ret: false}
					}
				}
			}
			return {p3: value * multiplier, ret: true}
		}
		return {p3: 0, ret: false}
	};
	$.ig.util.parseNumber = function (s, provider) {
		var r = $.ig.util.tryParseNumber1(s, 231, provider);
		if (!r.ret) {
			throw new $.ig.FormatException(1, "Incorrect number format")
		}
		return r.p3
	};
	$.ig.util.isNegativeInfinity = function (v) {
		return v == Number.NEGATIVE_INFINITY
	};
	$.ig.util.isPositiveInfinity = function (v) {
		return v == Number.POSITIVE_INFINITY
	};
	$.ig.util.parseInt8_1 = function (s, provider) {
		return $.ig.util.parseIntCore(s, provider, -128, 127)
	};
	$.ig.util.parseInt8_2 = function (s, style, provider) {
		return $.ig.util.parseIntCore(s, provider, -128, 127, style)
	};
	$.ig.util.parseInt16_1 = function (s, provider) {
		return $.ig.util.parseIntCore(s, provider, -32768, 32767)
	};
	$.ig.util.parseInt16_2 = function (s, style, provider) {
		return $.ig.util.parseIntCore(s, provider, -32768, 32767, style)
	};
	$.ig.util.parseInt32_1 = function (s, provider) {
		return $.ig.util.parseIntCore(s, provider, -2147483648, 2147483647)
	};
	$.ig.util.parseInt32_2 = function (s, style, provider) {
		return $.ig.util.parseIntCore(s, provider, -2147483648, 2147483647, style)
	};
	$.ig.util.parseInt64_1 = function (s, provider) {
		return $.ig.util.parseIntCore(s, provider, -0x8000000000000000, 0x8000000000000000)
	};
	$.ig.util.parseInt64_2 = function (s, style, provider) {
		return $.ig.util.parseIntCore(s, provider, -0x8000000000000000, 0x8000000000000000, style)
	};
	$.ig.util.parseUInt8_1 = function (s, provider) {
		return $.ig.util.parseIntCore(s, provider, 0, 255)
	};
	$.ig.util.parseUInt8_2 = function (s, style, provider) {
		return $.ig.util.parseIntCore(s, provider, 0, 255, style)
	};
	$.ig.util.parseUInt16_1 = function (s, provider) {
		return $.ig.util.parseIntCore(s, provider, 0, 65535)
	};
	$.ig.util.parseUInt16_2 = function (s, style, provider) {
		return $.ig.util.parseIntCore(s, provider, 0, 65535, style)
	};
	$.ig.util.parseUInt32_1 = function (s, provider) {
		return $.ig.util.parseIntCore(s, provider, 0, 4294967295)
	};
	$.ig.util.parseUInt32_2 = function (s, style, provider) {
		return $.ig.util.parseIntCore(s, provider, 0, 4294967295, style)
	};
	$.ig.util.parseUInt64_1 = function (s, provider) {
		return $.ig.util.parseIntCore(s, provider, 0, 0x10000000000000000)
	};
	$.ig.util.parseUInt64_2 = function (s, style, provider) {
		return $.ig.util.parseIntCore(s, provider, 0, 0x10000000000000000, style)
	};
	$.ig.util.parseIntCore = function (s, provider, min, max, style) {
		var r = $.ig.util.tryParseIntCore(s, provider, min, max, style);
		if (!r.ret) {
			throw new $.ig.FormatException(1, "Incorrect number format")
		}
		return r.p3
	};
	$.ig.util.tryParseInt8_1 = function (s) {
		return $.ig.util.tryParseIntCore(s, null, -128, 127)
	};
	$.ig.util.tryParseInt8_2 = function (s, style, provider) {
		return $.ig.util.tryParseIntCore(s, provider, -128, 127, style)
	};
	$.ig.util.tryParseInt16_1 = function (s) {
		return $.ig.util.tryParseIntCore(s, null, -32768, 32767)
	};
	$.ig.util.tryParseInt16_2 = function (s, style, provider) {
		return $.ig.util.tryParseIntCore(s, provider, -32768, 32767, style)
	};
	$.ig.util.tryParseInt32_1 = function (s) {
		return $.ig.util.tryParseIntCore(s, null, -2147483648, 2147483647)
	};
	$.ig.util.tryParseInt32_2 = function (s, style, provider) {
		return $.ig.util.tryParseIntCore(s, provider, -2147483648, 2147483647, style)
	};
	$.ig.util.tryParseInt64_1 = function (s) {
		return $.ig.util.tryParseIntCore(s, null, -0x8000000000000000, 0x8000000000000000)
	};
	$.ig.util.tryParseInt64_2 = function (s, style, provider) {
		return $.ig.util.tryParseIntCore(s, provider, -0x8000000000000000, 0x8000000000000000, style)
	};
	$.ig.util.tryParseUInt8_1 = function (s) {
		return $.ig.util.tryParseIntCore(s, null, 0, 255)
	};
	$.ig.util.tryParseUInt8_2 = function (s, style, provider) {
		return $.ig.util.tryParseIntCore(s, provider, 0, 255, style)
	};
	$.ig.util.tryParseUInt16_1 = function (s) {
		return $.ig.util.tryParseIntCore(s, null, 0, 65535)
	};
	$.ig.util.tryParseUInt16_2 = function (s, style, provider) {
		return $.ig.util.tryParseIntCore(s, provider, 0, 65535, style)
	};
	$.ig.util.tryParseUInt32_1 = function (s) {
		return $.ig.util.tryParseIntCore(s, null, 0, 4294967295)
	};
	$.ig.util.tryParseUInt32_2 = function (s, style, provider) {
		return $.ig.util.tryParseIntCore(s, provider, 0, 4294967295, style)
	};
	$.ig.util.tryParseUInt64_1 = function (s) {
		return $.ig.util.tryParseIntCore(s, null, 0, 0x10000000000000000)
	};
	$.ig.util.tryParseUInt64_2 = function (s, style, provider) {
		return $.ig.util.tryParseIntCore(s, provider, 0, 0x10000000000000000, style)
	};
	$.ig.util.tryParseIntCore = function (s, provider, min, max, style) {
		style = style != null ? style : $.ig.NumberStyles.prototype.integer;
		provider = provider || $.ig.CultureInfo.prototype.currentCulture();
		var r = $.ig.util.tryParseNumber1(s, style, provider);
		if (style & $.ig.NumberStyles.prototype.allowHexSpecifier && max < r.p3) {
			r.p3 -= -min * 2
		}
		if (!r.ret || r.p3 < min || max < r.p3 || r.p3 % 1 !== 0) {
			return {p1: 0, p3: 0, ret: false}
		}
		r.p1 = r.p3;
		return r
	};
	$.ig.util.parseBool = function (s) {
		var r = $.ig.util.tryParseBool(s);
		if (!r.ret) {
			throw new $.ig.FormatException(1, "Incorrect boolean format")
		}
		return r.p1
	};
	$.ig.util.tryParseBool = function (s) {
		switch (s == null ? "" : s.trim().toLowerCase()) {
			case"true":
				return {p1: true, ret: true};
			case"false":
				return {p1: false, ret: true};
			default:
				return {p1: false, ret: false}
		}
	};
	$.ig.util.arrayClear1 = function (array, index, length) {
		for (var i = index; i < index + length; i++) {
			array[i] = null
		}
	};
	$.ig.util.arrayCopy1 = function (source, sourceIndex, dest, destIndex, count) {
		for (var i = 0; i < count; i++) {
			dest[i + destIndex] = source[i + sourceIndex]
		}
	};
	$.ig.util.arrayCopy2 = function (source, dest, count) {
		for (var i = 0; i < count; i++) {
			dest[i] = source[i]
		}
	};
	$.ig.util.arrayCopyTo = function (source, dest, index) {
		for (var i = 0; i < source.length; i++) {
			dest[index++] = source[i]
		}
	};
	$.ig.util.arrayIndexOf1 = function ($t, array, value) {
		return array.indexOf(value)
	};
	$.ig.util.isNaN = function (v) {
		return v !== v
	};
	$.ig.util.numberToString = function (number, provider) {
		return $.ig.util.numberToString1(number, "G", provider)
	};
	var gFormatOptions = {useGrouping: false, maximumSignificantDigits: 15};
	var zeroFormatOptions = {useGrouping: false, maximumSignificantDigits: 15, maximumFractionDigits: 0};
	$.ig.util.numberToString1 = function (number, format, provider) {
		provider = provider || $.ig.CultureInfo.prototype.currentCulture();
		switch (format) {
			case"G":
				return number.toLocaleString(provider.name(), gFormatOptions);
			case"R":
			case"r":
				return number.toString().replace(".", provider.numberFormat().numberDecimalSeparator())
		}
		if (format.startsWith("0")) {
			var integerDigitsRequired = 0;
			var isValid = true;
			for (var i = 0; i < format.length; i++) {
				if (format[i] === "0") {
					integerDigitsRequired++
				} else {
					isValid = false;
					break
				}
			}
			if (isValid) {
				var result = number.toLocaleString(provider.name(), zeroFormatOptions);
				while (result.length < integerDigitsRequired) {
					result = "0" + result
				}
				return result
			}
		}
		throw new $.ig.FormatException(1, "Unsupported format code: " + format)
	};
	$.ig.util.intToString = function (number, provider) {
		return $.ig.util.intToString1(number, "G", provider)
	};
	$.ig.util.intToString1 = function (number, format, provider) {
		provider = provider || $.ig.CultureInfo.prototype.currentCulture();
		if (format && format.length) {
			if (format[0] == "X") {
				number = $.ig.util.intSToU(number);
				var result = number.toString(16).toUpperCase();
				if (format.length !== 1) {
					var digits = +format.substr(1);
					if (!isFinite(digits)) {
						throw new Error("Unsupported format code: " + format)
					}
					while (result.length < digits) {
						result = "0" + result
					}
				}
				return result
			}
		}
		switch (format) {
			case"G":
				return number.toLocaleString(provider.name(), gFormatOptions)
		}
		throw new Error("Unsupported format code: " + format)
	};
	$.ig.util.intSToU = function (number) {
		if (number < 0) {
			number = number + 1 + 4294967295
		}
		return number
	};
	$.ig.util.enumHasFlag = function (value, flag) {
		return (value & flag) === flag
	};
	$.ig.util.boolToString = function (value, provider) {
		return value.toString()
	};
	$.ig.util.getArrayOfValues = function (obj) {
		var result = [];
		for (var i in obj) {
			if (obj.hasOwnProperty(i)) {
				result.push(obj[i])
			}
		}
		return result
	};
	$.ig.util.getArrayOfProperties = function (obj) {
		var result = [];
		for (var i in obj) {
			if (obj.hasOwnProperty(i)) {
				result.push(i)
			}
		}
		return result
	};
	$.ig.util.stringInsert = function (str, index, value) {
		return str.substr(0, index) + value + str.substr(index)
	};
	$.ig.util.b64toUint8Array = function (b64Data, nBlocksSize) {
		function b64ToUint6(nChr) {
			return nChr > 64 && nChr < 91 ? nChr - 65 : nChr > 96 && nChr < 123 ? nChr - 71 : nChr > 47 && nChr < 58 ? nChr + 4 : nChr === 43 ? 62 : nChr === 47 ? 63 : 0
		}

		var sB64Enc = b64Data.replace(/[^A-Za-z0-9\+\/]/g, ""), nInLen = sB64Enc.length,
			nOutLen = nBlocksSize ? Math.ceil((nInLen * 3 + 1 >> 2) / nBlocksSize) * nBlocksSize : nInLen * 3 + 1 >> 2,
			taBytes;
		if (typeof window.Uint8Array === "function") {
			taBytes = new Uint8Array(nOutLen)
		} else {
			taBytes = new Array(nOutLen)
		}
		for (var nMod3, nMod4, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++) {
			nMod4 = nInIdx & 3;
			nUint24 |= b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
			if (nMod4 === 3 || nInLen - nInIdx === 1) {
				for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++) {
					taBytes[nOutIdx] = nUint24 >>> (16 >>> nMod3 & 24) & 255
				}
				nUint24 = 0
			}
		}
		return taBytes
	};
	$.ig.util.uint8ArraytoB64 = function (aBytes) {
		function uint6ToB64(nUint6) {
			return nUint6 < 26 ? nUint6 + 65 : nUint6 < 52 ? nUint6 + 71 : nUint6 < 62 ? nUint6 - 4 : nUint6 === 62 ? 43 : nUint6 === 63 ? 47 : 65
		}

		var nMod3 = 2, sB64Enc = "";
		for (var nLen = aBytes.length, nUint24 = 0, nIdx = 0; nIdx < nLen; nIdx++) {
			nMod3 = nIdx % 3;
			if (nIdx > 0 && nIdx * 4 / 3 % 76 === 0) {
				sB64Enc += "\r\n"
			}
			nUint24 |= aBytes[nIdx] << (16 >>> nMod3 & 24);
			if (nMod3 === 2 || aBytes.length - nIdx === 1) {
				sB64Enc += String.fromCharCode(uint6ToB64(nUint24 >>> 18 & 63), uint6ToB64(nUint24 >>> 12 & 63), uint6ToB64(nUint24 >>> 6 & 63), uint6ToB64(nUint24 & 63));
				nUint24 = 0
			}
		}
		return sB64Enc.substr(0, sB64Enc.length - 2 + nMod3) + (nMod3 === 2 ? "" : nMod3 === 1 ? "=" : "==")
	};
	$.ig.util.stringSplit = function (value, separators, options) {
		var r = "", i;
		for (i = 0; i < separators.length; i++) {
			if (i !== 0) {
				r += "|"
			}
			r += separators[i]
		}
		var result = value.split(new RegExp(r));
		for (i = result.length - 1; i >= 0; i--) {
			if (result[i].length === 0 && options & $.ig.StringSplitOptions.prototype.removeEmptyEntries || separators.contains(result[i])) {
				result.splice(i, 1)
			}
		}
		return result
	};
	$.ig.util.stringJoin = function (sep, vals) {
		return vals.join(sep)
	};
	$.ig.util.stringJoin1 = function ($t, sep, vals) {
		var result;
		var en = vals.getEnumerator();
		while (en.moveNext()) {
			var v = en.current().toString();
			if (result === undefined) {
				result = v
			} else {
				result += sep + v
			}
		}
		return result
	};
	$.ig.util.toString$1 = function ($t, v) {
		if (v !== null && $t) {
			if ($t.isNullable) {
				$t = $t.typeArguments[0]
			}
			if ($t.isEnumType) {
				return $t.InstanceConstructor.prototype.$getName(v)
			}
		}
		return v.toString()
	};
	$.ig.util.castObjTo$t = function ($t, v) {
		var shouldWrap = false;
		if ($t.isNullable) {
			$t = $t.typeArguments[0];
			shouldWrap = true
		}
		if (v !== null && $t.isEnumType) {
			v = v.$value()
		}
		return shouldWrap ? $.ig.util.toNullable($t, v) : v
	};
	$.ig.util.getBoxIfEnum = function ($t, v) {
		if (v !== null && $t) {
			if ($t.isNullable) {
				$t = $t.typeArguments[0]
			}
			if ($t.isEnumType) {
				return $t.InstanceConstructor.prototype.getBox(v)
			}
		}
		return v
	};
	$.ig.util.getValue = function (v) {
		if (v !== null && v.$type && v.$type.isEnum && v.$type.isEnum()) {
			return v.$value()
		}
		return v
	};
	$.ig.util.getEnumValue = function (v) {
		if (v !== null) {
			if (typeof v === "number") {
				return v
			} else {
				return v.$value()
			}
		}
		return 0
	};
	var unicodeCategories = {
		Cn: "[\u0378\u0379\u037f-\u0383\u038b\u038d\u03a2\u0528-\u0530\u0557\u0558\u0560\u0588\u058b-\u0590\u05c8-\u05cf\u05eb-\u05ef\u05f5-\u05ff\u0604\u0605\u061c\u061d\u070e\u074b\u074c\u07b2-\u07bf\u07fb-\u07ff\u082e\u082f\u083f\u085c\u085d\u085f-\u08ff\u0978\u0980\u0984\u098d\u098e\u0991\u0992\u09a9\u09b1\u09b3-\u09b5\u09ba\u09bb\u09c5\u09c6\u09c9\u09ca\u09cf-\u09d6\u09d8-\u09db\u09de\u09e4\u09e5\u09fc-\u0a00\u0a04\u0a0b-\u0a0e\u0a11\u0a12\u0a29\u0a31\u0a34\u0a37\u0a3a\u0a3b\u0a3d\u0a43-\u0a46\u0a49\u0a4a\u0a4e-\u0a50\u0a52-\u0a58\u0a5d\u0a5f-\u0a65\u0a76-\u0a80\u0a84\u0a8e\u0a92\u0aa9\u0ab1\u0ab4\u0aba\u0abb\u0ac6\u0aca\u0ace\u0acf\u0ad1-\u0adf\u0ae4\u0ae5\u0af0\u0af2-\u0b00\u0b04\u0b0d\u0b0e\u0b11\u0b12\u0b29\u0b31\u0b34\u0b3a\u0b3b\u0b45\u0b46\u0b49\u0b4a\u0b4e-\u0b55\u0b58-\u0b5b\u0b5e\u0b64\u0b65\u0b78-\u0b81\u0b84\u0b8b-\u0b8d\u0b91\u0b96-\u0b98\u0b9b\u0b9d\u0ba0-\u0ba2\u0ba5-\u0ba7\u0bab-\u0bad\u0bba-\u0bbd\u0bc3-\u0bc5\u0bc9\u0bce\u0bcf\u0bd1-\u0bd6\u0bd8-\u0be5\u0bfb-\u0c00\u0c04\u0c0d\u0c11\u0c29\u0c34\u0c3a-\u0c3c\u0c45\u0c49\u0c4e-\u0c54\u0c57\u0c5a-\u0c5f\u0c64\u0c65\u0c70-\u0c77\u0c80\u0c81\u0c84\u0c8d\u0c91\u0ca9\u0cb4\u0cba\u0cbb\u0cc5\u0cc9\u0cce-\u0cd4\u0cd7-\u0cdd\u0cdf\u0ce4\u0ce5\u0cf0\u0cf3-\u0d01\u0d04\u0d0d\u0d11\u0d3b\u0d3c\u0d45\u0d49\u0d4f-\u0d56\u0d58-\u0d5f\u0d64\u0d65\u0d76-\u0d78\u0d80\u0d81\u0d84\u0d97-\u0d99\u0db2\u0dbc\u0dbe\u0dbf\u0dc7-\u0dc9\u0dcb-\u0dce\u0dd5\u0dd7\u0de0-\u0df1\u0df5-\u0e00\u0e3b-\u0e3e\u0e5c-\u0e80\u0e83\u0e85\u0e86\u0e89\u0e8b\u0e8c\u0e8e-\u0e93\u0e98\u0ea0\u0ea4\u0ea6\u0ea8\u0ea9\u0eac\u0eba\u0ebe\u0ebf\u0ec5\u0ec7\u0ece\u0ecf\u0eda\u0edb\u0ede-\u0eff\u0f48\u0f6d-\u0f70\u0f98\u0fbd\u0fcd\u0fdb-\u0fff\u10c6-\u10cf\u10fd-\u10ff\u1249\u124e\u124f\u1257\u1259\u125e\u125f\u1289\u128e\u128f\u12b1\u12b6\u12b7\u12bf\u12c1\u12c6\u12c7\u12d7\u1311\u1316\u1317\u135b\u135c\u137d-\u137f\u139a-\u139f\u13f5-\u13ff\u169d-\u169f\u16f1-\u16ff\u170d\u1715-\u171f\u1737-\u173f\u1754-\u175f\u176d\u1771\u1774-\u177f\u17de\u17df\u17ea-\u17ef\u17fa-\u17ff\u180f\u181a-\u181f\u1878-\u187f\u18ab-\u18af\u18f6-\u18ff\u191d-\u191f\u192c-\u192f\u193c-\u193f\u1941-\u1943\u196e\u196f\u1975-\u197f\u19ac-\u19af\u19ca-\u19cf\u19db-\u19dd\u1a1c\u1a1d\u1a5f\u1a7d\u1a7e\u1a8a-\u1a8f\u1a9a-\u1a9f\u1aae-\u1aff\u1b4c-\u1b4f\u1b7d-\u1b7f\u1bab-\u1bad\u1bba-\u1bbf\u1bf4-\u1bfb\u1c38-\u1c3a\u1c4a-\u1c4c\u1c80-\u1ccf\u1cf3-\u1cff\u1de7-\u1dfb\u1f16\u1f17\u1f1e\u1f1f\u1f46\u1f47\u1f4e\u1f4f\u1f58\u1f5a\u1f5c\u1f5e\u1f7e\u1f7f\u1fb5\u1fc5\u1fd4\u1fd5\u1fdc\u1ff0\u1ff1\u1ff5\u1fff\u2065-\u2069\u2072\u2073\u208f\u209d-\u209f\u20ba-\u20cf\u20f1-\u20ff\u218a-\u218f\u23f4-\u23ff\u2427-\u243f\u244b-\u245f\u2700\u27cb\u27cd\u2b4d-\u2b4f\u2b5a-\u2bff\u2c2f\u2c5f\u2cf2-\u2cf8\u2d26-\u2d2f\u2d66-\u2d6e\u2d71-\u2d7e\u2d97-\u2d9f\u2da7\u2daf\u2db7\u2dbf\u2dc7\u2dcf\u2dd7\u2ddf\u2e32-\u2e7f\u2e9a\u2ef4-\u2eff\u2fd6-\u2fef\u2ffc-\u2fff\u3040\u3097\u3098\u3100-\u3104\u312e-\u3130\u318f\u31bb-\u31bf\u31e4-\u31ef\u321f\u32ff\u4db6-\u4dbf\u9fcc-\u9fff\ua48d-\ua48f\ua4c7-\ua4cf\ua62c-\ua63f\ua674-\ua67b\ua698-\ua69f\ua6f8-\ua6ff\ua78f\ua792-\ua79f\ua7aa-\ua7f9\ua82c-\ua82f\ua83a-\ua83f\ua878-\ua87f\ua8c5-\ua8cd\ua8da-\ua8df\ua8fc-\ua8ff\ua954-\ua95e\ua97d-\ua97f\ua9ce\ua9da-\ua9dd\ua9e0-\ua9ff\uaa37-\uaa3f\uaa4e\uaa4f\uaa5a\uaa5b\uaa7c-\uaa7f\uaac3-\uaada\uaae0-\uab00\uab07\uab08\uab0f\uab10\uab17-\uab1f\uab27\uab2f-\uabbf\uabee\uabef\uabfa-\uabff\ud7a4-\ud7af\ud7c7-\ud7ca\ud7fc-\ud7ff\ufa2e\ufa2f\ufa6e\ufa6f\ufada-\ufaff\ufb07-\ufb12\ufb18-\ufb1c\ufb37\ufb3d\ufb3f\ufb42\ufb45\ufbc2-\ufbd2\ufd40-\ufd4f\ufd90\ufd91\ufdc8-\ufdef\ufdfe\ufdff\ufe1a-\ufe1f\ufe27-\ufe2f\ufe53\ufe67\ufe6c-\ufe6f\ufe75\ufefd\ufefe\uff00\uffbf-\uffc1\uffc8\uffc9\uffd0\uffd1\uffd8\uffd9\uffdd-\uffdf\uffe7\uffef-\ufff8\ufffe\uffff]",
		Lu: "[A-Z\u00c0-\u00d6\u00d8-\u00de\u0100\u0102\u0104\u0106\u0108\u010a\u010c\u010e\u0110\u0112\u0114\u0116\u0118\u011a\u011c\u011e\u0120\u0122\u0124\u0126\u0128\u012a\u012c\u012e\u0130\u0132\u0134\u0136\u0139\u013b\u013d\u013f\u0141\u0143\u0145\u0147\u014a\u014c\u014e\u0150\u0152\u0154\u0156\u0158\u015a\u015c\u015e\u0160\u0162\u0164\u0166\u0168\u016a\u016c\u016e\u0170\u0172\u0174\u0176\u0178\u0179\u017b\u017d\u0181\u0182\u0184\u0186\u0187\u0189-\u018b\u018e-\u0191\u0193\u0194\u0196-\u0198\u019c\u019d\u019f\u01a0\u01a2\u01a4\u01a6\u01a7\u01a9\u01ac\u01ae\u01af\u01b1-\u01b3\u01b5\u01b7\u01b8\u01bc\u01c4\u01c7\u01ca\u01cd\u01cf\u01d1\u01d3\u01d5\u01d7\u01d9\u01db\u01de\u01e0\u01e2\u01e4\u01e6\u01e8\u01ea\u01ec\u01ee\u01f1\u01f4\u01f6-\u01f8\u01fa\u01fc\u01fe\u0200\u0202\u0204\u0206\u0208\u020a\u020c\u020e\u0210\u0212\u0214\u0216\u0218\u021a\u021c\u021e\u0220\u0222\u0224\u0226\u0228\u022a\u022c\u022e\u0230\u0232\u023a\u023b\u023d\u023e\u0241\u0243-\u0246\u0248\u024a\u024c\u024e\u0370\u0372\u0376\u0386\u0388-\u038a\u038c\u038e\u038f\u0391-\u03a1\u03a3-\u03ab\u03cf\u03d2-\u03d4\u03d8\u03da\u03dc\u03de\u03e0\u03e2\u03e4\u03e6\u03e8\u03ea\u03ec\u03ee\u03f4\u03f7\u03f9\u03fa\u03fd-\u042f\u0460\u0462\u0464\u0466\u0468\u046a\u046c\u046e\u0470\u0472\u0474\u0476\u0478\u047a\u047c\u047e\u0480\u048a\u048c\u048e\u0490\u0492\u0494\u0496\u0498\u049a\u049c\u049e\u04a0\u04a2\u04a4\u04a6\u04a8\u04aa\u04ac\u04ae\u04b0\u04b2\u04b4\u04b6\u04b8\u04ba\u04bc\u04be\u04c0\u04c1\u04c3\u04c5\u04c7\u04c9\u04cb\u04cd\u04d0\u04d2\u04d4\u04d6\u04d8\u04da\u04dc\u04de\u04e0\u04e2\u04e4\u04e6\u04e8\u04ea\u04ec\u04ee\u04f0\u04f2\u04f4\u04f6\u04f8\u04fa\u04fc\u04fe\u0500\u0502\u0504\u0506\u0508\u050a\u050c\u050e\u0510\u0512\u0514\u0516\u0518\u051a\u051c\u051e\u0520\u0522\u0524\u0526\u0531-\u0556\u10a0-\u10c5\u1e00\u1e02\u1e04\u1e06\u1e08\u1e0a\u1e0c\u1e0e\u1e10\u1e12\u1e14\u1e16\u1e18\u1e1a\u1e1c\u1e1e\u1e20\u1e22\u1e24\u1e26\u1e28\u1e2a\u1e2c\u1e2e\u1e30\u1e32\u1e34\u1e36\u1e38\u1e3a\u1e3c\u1e3e\u1e40\u1e42\u1e44\u1e46\u1e48\u1e4a\u1e4c\u1e4e\u1e50\u1e52\u1e54\u1e56\u1e58\u1e5a\u1e5c\u1e5e\u1e60\u1e62\u1e64\u1e66\u1e68\u1e6a\u1e6c\u1e6e\u1e70\u1e72\u1e74\u1e76\u1e78\u1e7a\u1e7c\u1e7e\u1e80\u1e82\u1e84\u1e86\u1e88\u1e8a\u1e8c\u1e8e\u1e90\u1e92\u1e94\u1e9e\u1ea0\u1ea2\u1ea4\u1ea6\u1ea8\u1eaa\u1eac\u1eae\u1eb0\u1eb2\u1eb4\u1eb6\u1eb8\u1eba\u1ebc\u1ebe\u1ec0\u1ec2\u1ec4\u1ec6\u1ec8\u1eca\u1ecc\u1ece\u1ed0\u1ed2\u1ed4\u1ed6\u1ed8\u1eda\u1edc\u1ede\u1ee0\u1ee2\u1ee4\u1ee6\u1ee8\u1eea\u1eec\u1eee\u1ef0\u1ef2\u1ef4\u1ef6\u1ef8\u1efa\u1efc\u1efe\u1f08-\u1f0f\u1f18-\u1f1d\u1f28-\u1f2f\u1f38-\u1f3f\u1f48-\u1f4d\u1f59\u1f5b\u1f5d\u1f5f\u1f68-\u1f6f\u1fb8-\u1fbb\u1fc8-\u1fcb\u1fd8-\u1fdb\u1fe8-\u1fec\u1ff8-\u1ffb\u2102\u2107\u210b-\u210d\u2110-\u2112\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u2130-\u2133\u213e\u213f\u2145\u2183\u2c00-\u2c2e\u2c60\u2c62-\u2c64\u2c67\u2c69\u2c6b\u2c6d-\u2c70\u2c72\u2c75\u2c7e-\u2c80\u2c82\u2c84\u2c86\u2c88\u2c8a\u2c8c\u2c8e\u2c90\u2c92\u2c94\u2c96\u2c98\u2c9a\u2c9c\u2c9e\u2ca0\u2ca2\u2ca4\u2ca6\u2ca8\u2caa\u2cac\u2cae\u2cb0\u2cb2\u2cb4\u2cb6\u2cb8\u2cba\u2cbc\u2cbe\u2cc0\u2cc2\u2cc4\u2cc6\u2cc8\u2cca\u2ccc\u2cce\u2cd0\u2cd2\u2cd4\u2cd6\u2cd8\u2cda\u2cdc\u2cde\u2ce0\u2ce2\u2ceb\u2ced\ua640\ua642\ua644\ua646\ua648\ua64a\ua64c\ua64e\ua650\ua652\ua654\ua656\ua658\ua65a\ua65c\ua65e\ua660\ua662\ua664\ua666\ua668\ua66a\ua66c\ua680\ua682\ua684\ua686\ua688\ua68a\ua68c\ua68e\ua690\ua692\ua694\ua696\ua722\ua724\ua726\ua728\ua72a\ua72c\ua72e\ua732\ua734\ua736\ua738\ua73a\ua73c\ua73e\ua740\ua742\ua744\ua746\ua748\ua74a\ua74c\ua74e\ua750\ua752\ua754\ua756\ua758\ua75a\ua75c\ua75e\ua760\ua762\ua764\ua766\ua768\ua76a\ua76c\ua76e\ua779\ua77b\ua77d\ua77e\ua780\ua782\ua784\ua786\ua78b\ua78d\ua790\ua7a0\ua7a2\ua7a4\ua7a6\ua7a8\uff21-\uff3a]",
		Ll: "[a-z\u00aa\u00b5\u00ba\u00df-\u00f6\u00f8-\u00ff\u0101\u0103\u0105\u0107\u0109\u010b\u010d\u010f\u0111\u0113\u0115\u0117\u0119\u011b\u011d\u011f\u0121\u0123\u0125\u0127\u0129\u012b\u012d\u012f\u0131\u0133\u0135\u0137\u0138\u013a\u013c\u013e\u0140\u0142\u0144\u0146\u0148\u0149\u014b\u014d\u014f\u0151\u0153\u0155\u0157\u0159\u015b\u015d\u015f\u0161\u0163\u0165\u0167\u0169\u016b\u016d\u016f\u0171\u0173\u0175\u0177\u017a\u017c\u017e-\u0180\u0183\u0185\u0188\u018c\u018d\u0192\u0195\u0199-\u019b\u019e\u01a1\u01a3\u01a5\u01a8\u01aa\u01ab\u01ad\u01b0\u01b4\u01b6\u01b9\u01ba\u01bd-\u01bf\u01c6\u01c9\u01cc\u01ce\u01d0\u01d2\u01d4\u01d6\u01d8\u01da\u01dc\u01dd\u01df\u01e1\u01e3\u01e5\u01e7\u01e9\u01eb\u01ed\u01ef\u01f0\u01f3\u01f5\u01f9\u01fb\u01fd\u01ff\u0201\u0203\u0205\u0207\u0209\u020b\u020d\u020f\u0211\u0213\u0215\u0217\u0219\u021b\u021d\u021f\u0221\u0223\u0225\u0227\u0229\u022b\u022d\u022f\u0231\u0233-\u0239\u023c\u023f\u0240\u0242\u0247\u0249\u024b\u024d\u024f-\u0293\u0295-\u02af\u0371\u0373\u0377\u037b-\u037d\u0390\u03ac-\u03ce\u03d0\u03d1\u03d5-\u03d7\u03d9\u03db\u03dd\u03df\u03e1\u03e3\u03e5\u03e7\u03e9\u03eb\u03ed\u03ef-\u03f3\u03f5\u03f8\u03fb\u03fc\u0430-\u045f\u0461\u0463\u0465\u0467\u0469\u046b\u046d\u046f\u0471\u0473\u0475\u0477\u0479\u047b\u047d\u047f\u0481\u048b\u048d\u048f\u0491\u0493\u0495\u0497\u0499\u049b\u049d\u049f\u04a1\u04a3\u04a5\u04a7\u04a9\u04ab\u04ad\u04af\u04b1\u04b3\u04b5\u04b7\u04b9\u04bb\u04bd\u04bf\u04c2\u04c4\u04c6\u04c8\u04ca\u04cc\u04ce\u04cf\u04d1\u04d3\u04d5\u04d7\u04d9\u04db\u04dd\u04df\u04e1\u04e3\u04e5\u04e7\u04e9\u04eb\u04ed\u04ef\u04f1\u04f3\u04f5\u04f7\u04f9\u04fb\u04fd\u04ff\u0501\u0503\u0505\u0507\u0509\u050b\u050d\u050f\u0511\u0513\u0515\u0517\u0519\u051b\u051d\u051f\u0521\u0523\u0525\u0527\u0561-\u0587\u1d00-\u1d2b\u1d62-\u1d77\u1d79-\u1d9a\u1e01\u1e03\u1e05\u1e07\u1e09\u1e0b\u1e0d\u1e0f\u1e11\u1e13\u1e15\u1e17\u1e19\u1e1b\u1e1d\u1e1f\u1e21\u1e23\u1e25\u1e27\u1e29\u1e2b\u1e2d\u1e2f\u1e31\u1e33\u1e35\u1e37\u1e39\u1e3b\u1e3d\u1e3f\u1e41\u1e43\u1e45\u1e47\u1e49\u1e4b\u1e4d\u1e4f\u1e51\u1e53\u1e55\u1e57\u1e59\u1e5b\u1e5d\u1e5f\u1e61\u1e63\u1e65\u1e67\u1e69\u1e6b\u1e6d\u1e6f\u1e71\u1e73\u1e75\u1e77\u1e79\u1e7b\u1e7d\u1e7f\u1e81\u1e83\u1e85\u1e87\u1e89\u1e8b\u1e8d\u1e8f\u1e91\u1e93\u1e95-\u1e9d\u1e9f\u1ea1\u1ea3\u1ea5\u1ea7\u1ea9\u1eab\u1ead\u1eaf\u1eb1\u1eb3\u1eb5\u1eb7\u1eb9\u1ebb\u1ebd\u1ebf\u1ec1\u1ec3\u1ec5\u1ec7\u1ec9\u1ecb\u1ecd\u1ecf\u1ed1\u1ed3\u1ed5\u1ed7\u1ed9\u1edb\u1edd\u1edf\u1ee1\u1ee3\u1ee5\u1ee7\u1ee9\u1eeb\u1eed\u1eef\u1ef1\u1ef3\u1ef5\u1ef7\u1ef9\u1efb\u1efd\u1eff-\u1f07\u1f10-\u1f15\u1f20-\u1f27\u1f30-\u1f37\u1f40-\u1f45\u1f50-\u1f57\u1f60-\u1f67\u1f70-\u1f7d\u1f80-\u1f87\u1f90-\u1f97\u1fa0-\u1fa7\u1fb0-\u1fb4\u1fb6\u1fb7\u1fbe\u1fc2-\u1fc4\u1fc6\u1fc7\u1fd0-\u1fd3\u1fd6\u1fd7\u1fe0-\u1fe7\u1ff2-\u1ff4\u1ff6\u1ff7\u210a\u210e\u210f\u2113\u212f\u2134\u2139\u213c\u213d\u2146-\u2149\u214e\u2184\u2c30-\u2c5e\u2c61\u2c65\u2c66\u2c68\u2c6a\u2c6c\u2c71\u2c73\u2c74\u2c76-\u2c7c\u2c81\u2c83\u2c85\u2c87\u2c89\u2c8b\u2c8d\u2c8f\u2c91\u2c93\u2c95\u2c97\u2c99\u2c9b\u2c9d\u2c9f\u2ca1\u2ca3\u2ca5\u2ca7\u2ca9\u2cab\u2cad\u2caf\u2cb1\u2cb3\u2cb5\u2cb7\u2cb9\u2cbb\u2cbd\u2cbf\u2cc1\u2cc3\u2cc5\u2cc7\u2cc9\u2ccb\u2ccd\u2ccf\u2cd1\u2cd3\u2cd5\u2cd7\u2cd9\u2cdb\u2cdd\u2cdf\u2ce1\u2ce3\u2ce4\u2cec\u2cee\u2d00-\u2d25\ua641\ua643\ua645\ua647\ua649\ua64b\ua64d\ua64f\ua651\ua653\ua655\ua657\ua659\ua65b\ua65d\ua65f\ua661\ua663\ua665\ua667\ua669\ua66b\ua66d\ua681\ua683\ua685\ua687\ua689\ua68b\ua68d\ua68f\ua691\ua693\ua695\ua697\ua723\ua725\ua727\ua729\ua72b\ua72d\ua72f-\ua731\ua733\ua735\ua737\ua739\ua73b\ua73d\ua73f\ua741\ua743\ua745\ua747\ua749\ua74b\ua74d\ua74f\ua751\ua753\ua755\ua757\ua759\ua75b\ua75d\ua75f\ua761\ua763\ua765\ua767\ua769\ua76b\ua76d\ua76f\ua771-\ua778\ua77a\ua77c\ua77f\ua781\ua783\ua785\ua787\ua78c\ua78e\ua791\ua7a1\ua7a3\ua7a5\ua7a7\ua7a9\ua7fa\ufb00-\ufb06\ufb13-\ufb17\uff41-\uff5a]",
		Lt: "[\u01c5\u01c8\u01cb\u01f2\u1f88-\u1f8f\u1f98-\u1f9f\u1fa8-\u1faf\u1fbc\u1fcc\u1ffc]",
		Lm: "[\u02b0-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0374\u037a\u0559\u0640\u06e5\u06e6\u07f4\u07f5\u07fa\u081a\u0824\u0828\u0971\u0e46\u0ec6\u10fc\u17d7\u1843\u1aa7\u1c78-\u1c7d\u1d2c-\u1d61\u1d78\u1d9b-\u1dbf\u2071\u207f\u2090-\u209c\u2c7d\u2d6f\u2e2f\u3005\u3031-\u3035\u303b\u309d\u309e\u30fc-\u30fe\ua015\ua4f8-\ua4fd\ua60c\ua67f\ua717-\ua71f\ua770\ua788\ua9cf\uaa70\uaadd\uff70\uff9e\uff9f]",
		Lo: "[\u01bb\u01c0-\u01c3\u0294\u05d0-\u05ea\u05f0-\u05f2\u0620-\u063f\u0641-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u0800-\u0815\u0840-\u0858\u0904-\u0939\u093d\u0950\u0958-\u0961\u0972-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e45\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0edc\u0edd\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10d0-\u10fa\u1100-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17dc\u1820-\u1842\u1844-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bc0-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c77\u1ce9-\u1cec\u1cee-\u1cf1\u2135-\u2138\u2d30-\u2d65\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3006\u303c\u3041-\u3096\u309f\u30a1-\u30fa\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcb\ua000-\ua014\ua016-\ua48c\ua4d0-\ua4f7\ua500-\ua60b\ua610-\ua61f\ua62a\ua62b\ua66e\ua6a0-\ua6e5\ua7fb-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa6f\uaa71-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb\uaadc\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff66-\uff6f\uff71-\uff9d\uffa0-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]",
		Mn: "[\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u0900-\u0902\u093a\u093c\u0941-\u0948\u094d\u0951-\u0957\u0962\u0963\u0981\u09bc\u09c1-\u09c4\u09cd\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b62\u0b63\u0b82\u0bc0\u0bcd\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc6\u0ccc\u0ccd\u0ce2\u0ce3\u0d41-\u0d44\u0d4d\u0d62\u0d63\u0dca\u0dd2-\u0dd4\u0dd6\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1be6\u1be8\u1be9\u1bed\u1bef-\u1bf1\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfc-\u1dff\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\ufb1e\ufe00-\ufe0f\ufe20-\ufe26]",
		Me: "[\u0488\u0489\u20dd-\u20e0\u20e2-\u20e4\ua670-\ua672]",
		Mc: "[\u0903\u093b\u093e-\u0940\u0949-\u094c\u094e\u094f\u0982\u0983\u09be-\u09c0\u09c7\u09c8\u09cb\u09cc\u09d7\u0a03\u0a3e-\u0a40\u0a83\u0abe-\u0ac0\u0ac9\u0acb\u0acc\u0b02\u0b03\u0b3e\u0b40\u0b47\u0b48\u0b4b\u0b4c\u0b57\u0bbe\u0bbf\u0bc1\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcc\u0bd7\u0c01-\u0c03\u0c41-\u0c44\u0c82\u0c83\u0cbe\u0cc0-\u0cc4\u0cc7\u0cc8\u0cca\u0ccb\u0cd5\u0cd6\u0d02\u0d03\u0d3e-\u0d40\u0d46-\u0d48\u0d4a-\u0d4c\u0d57\u0d82\u0d83\u0dcf-\u0dd1\u0dd8-\u0ddf\u0df2\u0df3\u0f3e\u0f3f\u0f7f\u102b\u102c\u1031\u1038\u103b\u103c\u1056\u1057\u1062-\u1064\u1067-\u106d\u1083\u1084\u1087-\u108c\u108f\u109a-\u109c\u17b6\u17be-\u17c5\u17c7\u17c8\u1923-\u1926\u1929-\u192b\u1930\u1931\u1933-\u1938\u19b0-\u19c0\u19c8\u19c9\u1a19-\u1a1b\u1a55\u1a57\u1a61\u1a63\u1a64\u1a6d-\u1a72\u1b04\u1b35\u1b3b\u1b3d-\u1b41\u1b43\u1b44\u1b82\u1ba1\u1ba6\u1ba7\u1baa\u1be7\u1bea-\u1bec\u1bee\u1bf2\u1bf3\u1c24-\u1c2b\u1c34\u1c35\u1ce1\u1cf2\ua823\ua824\ua827\ua880\ua881\ua8b4-\ua8c3\ua952\ua953\ua983\ua9b4\ua9b5\ua9ba\ua9bb\ua9bd-\ua9c0\uaa2f\uaa30\uaa33\uaa34\uaa4d\uaa7b\uabe3\uabe4\uabe6\uabe7\uabe9\uabea\uabec]",
		Nd: "[0-9\u0660-\u0669\u06f0-\u06f9\u07c0-\u07c9\u0966-\u096f\u09e6-\u09ef\u0a66-\u0a6f\u0ae6-\u0aef\u0b66-\u0b6f\u0be6-\u0bef\u0c66-\u0c6f\u0ce6-\u0cef\u0d66-\u0d6f\u0e50-\u0e59\u0ed0-\u0ed9\u0f20-\u0f29\u1040-\u1049\u1090-\u1099\u17e0-\u17e9\u1810-\u1819\u1946-\u194f\u19d0-\u19d9\u1a80-\u1a89\u1a90-\u1a99\u1b50-\u1b59\u1bb0-\u1bb9\u1c40-\u1c49\u1c50-\u1c59\ua620-\ua629\ua8d0-\ua8d9\ua900-\ua909\ua9d0-\ua9d9\uaa50-\uaa59\uabf0-\uabf9\uff10-\uff19]",
		Nl: "[\u16ee-\u16f0\u2160-\u2182\u2185-\u2188\u3007\u3021-\u3029\u3038-\u303a\ua6e6-\ua6ef]",
		No: "[\u00b2\u00b3\u00b9\u00bc-\u00be\u09f4-\u09f9\u0b72-\u0b77\u0bf0-\u0bf2\u0c78-\u0c7e\u0d70-\u0d75\u0f2a-\u0f33\u1369-\u137c\u17f0-\u17f9\u19da\u2070\u2074-\u2079\u2080-\u2089\u2150-\u215f\u2189\u2460-\u249b\u24ea-\u24ff\u2776-\u2793\u2cfd\u3192-\u3195\u3220-\u3229\u3251-\u325f\u3280-\u3289\u32b1-\u32bf\ua830-\ua835]",
		Zs: "[ \u00a0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000]",
		Zl: "[\u2028]",
		Zp: "[\u2029]",
		Cc: "[\0--\u009f]",
		Cf: "[\u00ad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200b-\u200f\u202a-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb]",
		Cs: "[\ud800-\udfff]",
		Co: "[\ue000-\uf8ff]",
		Ps: "[([{\u0f3a\u0f3c\u169b\u201a\u201e\u2045\u207d\u208d\u2329\u2768\u276a\u276c\u276e\u2770\u2772\u2774\u27c5\u27e6\u27e8\u27ea\u27ec\u27ee\u2983\u2985\u2987\u2989\u298b\u298d\u298f\u2991\u2993\u2995\u2997\u29d8\u29da\u29fc\u2e22\u2e24\u2e26\u2e28\u3008\u300a\u300c\u300e\u3010\u3014\u3016\u3018\u301a\u301d\ufd3e\ufe17\ufe35\ufe37\ufe39\ufe3b\ufe3d\ufe3f\ufe41\ufe43\ufe47\ufe59\ufe5b\ufe5d\uff08\uff3b\uff5b\uff5f\uff62]",
		Pd: "[-\u058a\u05be\u1400\u1806\u2010-\u2015\u2e17\u2e1a\u301c\u3030\u30a0\ufe31\ufe32\ufe58\ufe63\uff0d]",
		Pc: "[_\u203f\u2040\u2054\ufe33\ufe34\ufe4d-\ufe4f\uff3f]",
		Pe: "[)\\]}\u0f3b\u0f3d\u169c\u2046\u207e\u208e\u232a\u2769\u276b\u276d\u276f\u2771\u2773\u2775\u27c6\u27e7\u27e9\u27eb\u27ed\u27ef\u2984\u2986\u2988\u298a\u298c\u298e\u2990\u2992\u2994\u2996\u2998\u29d9\u29db\u29fd\u2e23\u2e25\u2e27\u2e29\u3009\u300b\u300d\u300f\u3011\u3015\u3017\u3019\u301b\u301e\u301f\ufd3f\ufe18\ufe36\ufe38\ufe3a\ufe3c\ufe3e\ufe40\ufe42\ufe44\ufe48\ufe5a\ufe5c\ufe5e\uff09\uff3d\uff5d\uff60\uff63]",
		Sm: "[+<->|~\u00ac\u00b1\u00d7\u00f7\u03f6\u0606-\u0608\u2044\u2052\u207a-\u207c\u208a-\u208c\u2118\u2140-\u2144\u214b\u2190-\u2194\u219a\u219b\u21a0\u21a3\u21a6\u21ae\u21ce\u21cf\u21d2\u21d4\u21f4-\u22ff\u2308-\u230b\u2320\u2321\u237c\u239b-\u23b3\u23dc-\u23e1\u25b7\u25c1\u25f8-\u25ff\u266f\u27c0-\u27c4\u27c7-\u27ca\u27cc\u27ce-\u27e5\u27f0-\u27ff\u2900-\u2982\u2999-\u29d7\u29dc-\u29fb\u29fe-\u2aff\u2b30-\u2b44\u2b47-\u2b4c\ufb29\ufe62\ufe64-\ufe66\uff0b\uff1c-\uff1e\uff5c\uff5e\uffe2\uffe9-\uffec]",
		Po: "[!-#%-'*,./:;?@\\\u00a1\u00b7\u00bf\u037e\u0387\u055a-\u055f\u0589\u05c0\u05c3\u05c6\u05f3\u05f4\u0609\u060a\u060c\u060d\u061b\u061e\u061f\u066a-\u066d\u06d4\u0700-\u070d\u07f7-\u07f9\u0830-\u083e\u085e\u0964\u0965\u0970\u0df4\u0e4f\u0e5a\u0e5b\u0f04-\u0f12\u0f85\u0fd0-\u0fd4\u0fd9\u0fda\u104a-\u104f\u10fb\u1361-\u1368\u166d\u166e\u16eb-\u16ed\u1735\u1736\u17d4-\u17d6\u17d8-\u17da\u1800-\u1805\u1807-\u180a\u1944\u1945\u1a1e\u1a1f\u1aa0-\u1aa6\u1aa8-\u1aad\u1b5a-\u1b60\u1bfc-\u1bff\u1c3b-\u1c3f\u1c7e\u1c7f\u1cd3\u2016\u2017\u2020-\u2027\u2030-\u2038\u203b-\u203e\u2041-\u2043\u2047-\u2051\u2053\u2055-\u205e\u2cf9-\u2cfc\u2cfe\u2cff\u2d70\u2e00\u2e01\u2e06-\u2e08\u2e0b\u2e0e-\u2e16\u2e18\u2e19\u2e1b\u2e1e\u2e1f\u2e2a-\u2e2e\u2e30\u2e31\u3001-\u3003\u303d\u30fb\ua4fe\ua4ff\ua60d-\ua60f\ua673\ua67e\ua6f2-\ua6f7\ua874-\ua877\ua8ce\ua8cf\ua8f8-\ua8fa\ua92e\ua92f\ua95f\ua9c1-\ua9cd\ua9de\ua9df\uaa5c-\uaa5f\uaade\uaadf\uabeb\ufe10-\ufe16\ufe19\ufe30\ufe45\ufe46\ufe49-\ufe4c\ufe50-\ufe52\ufe54-\ufe57\ufe5f-\ufe61\ufe68\ufe6a\ufe6b\uff01-\uff03\uff05-\uff07\uff0a\uff0c\uff0e\uff0f\uff1a\uff1b\uff1f\uff20\uff3c\uff61\uff64\uff65]",
		Sk: "[^`\u00a8\u00af\u00b4\u00b8\u02c2-\u02c5\u02d2-\u02df\u02e5-\u02eb\u02ed\u02ef-\u02ff\u0375\u0384\u0385\u1fbd\u1fbf-\u1fc1\u1fcd-\u1fcf\u1fdd-\u1fdf\u1fed-\u1fef\u1ffd\u1ffe\u309b\u309c\ua700-\ua716\ua720\ua721\ua789\ua78a\ufbb2-\ufbc1\uff3e\uff40\uffe3]",
		Sc: "[$\u00a2-\u00a5\u060b\u09f2\u09f3\u09fb\u0af1\u0bf9\u0e3f\u17db\u20a0-\u20b9\ua838\ufdfc\ufe69\uff04\uffe0\uffe1\uffe5\uffe6]",
		Pi: "[\u00ab\u2018\u201b\u201c\u201f\u2039\u2e02\u2e04\u2e09\u2e0c\u2e1c\u2e20]",
		So: "[\u00a6\u00a7\u00a9\u00ae\u00b0\u00b6\u0482\u060e\u060f\u06de\u06e9\u06fd\u06fe\u07f6\u09fa\u0b70\u0bf3-\u0bf8\u0bfa\u0c7f\u0d79\u0f01-\u0f03\u0f13-\u0f17\u0f1a-\u0f1f\u0f34\u0f36\u0f38\u0fbe-\u0fc5\u0fc7-\u0fcc\u0fce\u0fcf\u0fd5-\u0fd8\u109e\u109f\u1360\u1390-\u1399\u1940\u19de-\u19ff\u1b61-\u1b6a\u1b74-\u1b7c\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116\u2117\u211e-\u2123\u2125\u2127\u2129\u212e\u213a\u213b\u214a\u214c\u214d\u214f\u2195-\u2199\u219c-\u219f\u21a1\u21a2\u21a4\u21a5\u21a7-\u21ad\u21af-\u21cd\u21d0\u21d1\u21d3\u21d5-\u21f3\u2300-\u2307\u230c-\u231f\u2322-\u2328\u232b-\u237b\u237d-\u239a\u23b4-\u23db\u23e2-\u23f3\u2400-\u2426\u2440-\u244a\u249c-\u24e9\u2500-\u25b6\u25b8-\u25c0\u25c2-\u25f7\u2600-\u266e\u2670-\u26ff\u2701-\u2767\u2794-\u27bf\u2800-\u28ff\u2b00-\u2b2f\u2b45\u2b46\u2b50-\u2b59\u2ce5-\u2cea\u2e80-\u2e99\u2e9b-\u2ef3\u2f00-\u2fd5\u2ff0-\u2ffb\u3004\u3012\u3013\u3020\u3036\u3037\u303e\u303f\u3190\u3191\u3196-\u319f\u31c0-\u31e3\u3200-\u321e\u322a-\u3250\u3260-\u327f\u328a-\u32b0\u32c0-\u32fe\u3300-\u33ff\u4dc0-\u4dff\ua490-\ua4c6\ua828-\ua82b\ua836\ua837\ua839\uaa77-\uaa79\ufdfd\uffe4\uffe8\uffed\uffee\ufffc\ufffd]",
		Pf: "[\u00bb\u2019\u201d\u203a\u2e03\u2e05\u2e0a\u2e0d\u2e1d\u2e21]"
	};
	$.ig.util.netRegexToJS = function (netPattern) {
		var jsPattern = "";
		var nextNETGroupIndex = 1;
		var nextJSGroupIndex = 1;
		var namedGroups = [];
		var nameToJSGroupIndexMap = {};
		var netToJSGroupIndexMap = [[0]];
		var matchMustStartAtCurrentPosition = false;
		var name;
		var i = 0;
		if (netPattern.startsWith("\\G")) {
			i += 2;
			matchMustStartAtCurrentPosition = true
		}
		var isInClass = false;
		for (; i < netPattern.length; i++) {
			var current = netPattern.charAt(i);
			switch (current) {
				case"\\":
					switch (netPattern.charAt(i + 1)) {
						case"A":
							jsPattern = jsPattern.concat("^");
							i++;
							break;
						case"z":
						case"Z":
							jsPattern = jsPattern.concat("$");
							i++;
							break;
						case"G":
							throw new Error("\\G .NET Regex escape is only supported at the start of the pattern.");
						case"p":
							if (netPattern.charAt(i + 2) !== "{") {
								throw new Error("\\p should be followed by braces.")
							}
							var endBraceIndex = netPattern.indexOf("}", i + 3);
							if (endBraceIndex < 0) {
								throw new Error("Could not find the close brace of the \\p pattern.")
							}
							var pattern = netPattern.substring(i + 3, endBraceIndex);
							i = endBraceIndex;
							var content = unicodeCategories[pattern];
							if (content === void 0) {
								throw new Error("Unknown \\p pattern: " + pattern)
							}
							if (isInClass) {
								jsPattern = jsPattern.concat(content.substr(1, content.length - 2))
							} else {
								jsPattern = jsPattern.concat(content)
							}
							break;
						default:
							jsPattern = jsPattern.concat(netPattern.substr(i, 2));
							i++;
							break
					}
					break;
				case"/":
					jsPattern = jsPattern.concat("\\/");
					break;
				case"[":
					isInClass = true;
					jsPattern = jsPattern.concat("[");
					break;
				case"]":
					isInClass = false;
					jsPattern = jsPattern.concat("]");
					break;
				case"(":
					jsPattern = jsPattern.concat("(");
					var next = netPattern[i + 1];
					name = "";
					if (next === "?") {
						i++;
						next = netPattern[i + 1];
						if (next === "<" || next === "'") {
							if (netPattern[i + 2] === "=" || netPattern[i + 2] === "!") {
								throw new Error("Lookbehind assertions are not supported in JavaScript: " + pattern)
							}
							i++;
							var end = next === "<" ? ">" : "'";
							var start = ++i;
							for (; i < netPattern.length && netPattern[i] != end; i++) {
							}
							name = netPattern.slice(start, i)
						} else {
							jsPattern = jsPattern.concat("?");
							if (next === ":") {
								continue
							}
						}
					}
					var currentJSGroupIndex = nextJSGroupIndex++;
					if (name.length !== 0) {
						if (!namedGroups.contains(name)) namedGroups.push(name);
						var jsGroups = nameToJSGroupIndexMap[name];
						if (!jsGroups) {
							nameToJSGroupIndexMap[name] = jsGroups = []
						}
						jsGroups.push(currentJSGroupIndex)
					} else {
						netToJSGroupIndexMap[nextNETGroupIndex++] = [currentJSGroupIndex]
					}
					break;
				default:
					jsPattern = jsPattern.concat(netPattern.substr(i, 1));
					break
			}
		}
		var nameToNetGroupIndexMap = {};
		for (i = 0; i < namedGroups.length; i++) {
			var currentNETGroupIndex = nextNETGroupIndex++;
			name = namedGroups[i];
			netToJSGroupIndexMap[currentNETGroupIndex] = nameToJSGroupIndexMap[name];
			nameToNetGroupIndexMap[name] = currentNETGroupIndex
		}
		return {
			pattern: jsPattern,
			nameToNetGroupIndexMap: nameToNetGroupIndexMap,
			netToJSGroupIndexMap: netToJSGroupIndexMap,
			matchMustStartAtCurrentPosition: matchMustStartAtCurrentPosition
		}
	};
	$.ig.util.timeSpanInit1 = function (h, m, s) {
		return h * 36e5 + m * 6e4 + s * 1e3
	};
	$.ig.util.timeSpanInit2 = function (d, h, m, s, ms) {
		return d * 864e5 + h * 36e5 + m * 6e4 + s * 1e3 + ms
	};
	$.ig.util.timeSpanInit3 = function (d, h, m, s) {
		return d * 864e5 + h * 36e5 + m * 6e4 + s * 1e3
	};
	$.ig.util.timeSpanTotalDays = function (t) {
		return t / 864e5
	};
	$.ig.util.timeSpanTotalHours = function (t) {
		return t / 36e5
	};
	$.ig.util.timeSpanTotalMilliseconds = function (t) {
		return t
	};
	$.ig.util.timeSpanTotalMinutes = function (t) {
		return t / 6e4
	};
	$.ig.util.timeSpanTotalSeconds = function (t) {
		return t / 1e3
	};
	$.ig.util.timeSpanFromDays = function (v) {
		return v * 864e5
	};
	$.ig.util.timeSpanFromHours = function (v) {
		return v * 36e5
	};
	$.ig.util.timeSpanFromMilliseconds = function (v) {
		return v
	};
	$.ig.util.timeSpanFromMinutes = function (v) {
		return v * 6e4
	};
	$.ig.util.timeSpanFromSeconds = function (v) {
		return v * 1e3
	};
	$.ig.util.timeSpanFromTicks = function (v) {
		return v / 1e4
	};
	$.ig.util.timeSpanDays = function (t) {
		return $.ig.truncate(t / 864e5)
	};
	$.ig.util.timeSpanHours = function (t) {
		return $.ig.truncate(t / 36e5 % 24)
	};
	$.ig.util.timeSpanMilliseconds = function (t) {
		return t % 1e3
	};
	$.ig.util.timeSpanMinutes = function (t) {
		return $.ig.truncate(t / 6e4 % 60)
	};
	$.ig.util.timeSpanSeconds = function (t) {
		return $.ig.truncate(t / 1e3 % 60)
	};
	$.ig.util.timeSpanTicks = function (t) {
		return $.ig.truncate(t * 1e4)
	};
	$.ig.util.timeSpanNegate = function (t) {
		return -t
	};
	$.ig.util.dateAdd = function (d, t) {
		return new Date(+d + t)
	};
	$.ig.util.dateSubtract = function (d, t) {
		return new Date(+d - t)
	};
	$.ig.util.u32BitwiseAnd = function (a, b) {
		var r = a & b;
		if (r < 0) r += 4294967296;
		return r
	};
	$.ig.util.u32BitwiseOr = function (a, b) {
		var r = a | b;
		if (r < 0) r += 4294967296;
		return r
	};
	$.ig.util.u32BitwiseXor = function (a, b) {
		var r = a ^ b;
		if (r < 0) r += 4294967296;
		return r
	};
	$.ig.util.u32LS = function (a, b) {
		var r = a << b;
		if (r < 0) r += 4294967296;
		return r
	};
	$.ig.util.invokeCallback = function (callback, args) {
		if (callback) {
			if ($.type(callback) === "string" && window[callback] && $.type(window[callback]) === "function") {
				callback = window[callback]
			}
			if ($.type(callback) === "function") {
				callback.apply(window, args)
			}
		}
	};
	if ($.Widget) {
		(function (createWidget) {
			$.Widget.prototype._createWidget = function (options, element) {
				var el = $(element || this.defaultElement || this)[0];
				if (el !== this) {
					$.data(el, this.widgetName, this)
				}
				return createWidget.apply(this, arguments)
			}
		})($.Widget.prototype._createWidget);
		(function (destroy) {
			$.Widget.prototype.destroy = function () {
				var ret = destroy.apply(this, arguments);
				if (this.widgetName && this.element) {
					this.element.removeData(this.widgetName)
				}
				return ret
			}
		})($.Widget.prototype.destroy)
	}
	$.ig.util.defType("SystemException", "Error", {
		init: function (initNumber) {
			if (initNumber > 0) {
				switch (initNumber) {
					case 1:
						this.init1.apply(this, arguments);
						break;
					case 2:
						this.init2.apply(this, arguments);
						break
				}
				return
			}
			$.ig.Error.prototype.init.call(this, 0)
		}, init1: function (initNumber, message) {
			$.ig.Error.prototype.init1.call(this, 1, message)
		}, init2: function (initNumber, message, innerException) {
			$.ig.Error.prototype.init2.call(this, 2, message, innerException)
		}, $type: new $.ig.Type("SystemException", $.ig.Error.prototype.$type)
	}, true);
	$.ig.util.defType("FormatException", "SystemException", {
		init: function (initNumber) {
			if (initNumber > 0) {
				switch (initNumber) {
					case 1:
						this.init1.apply(this, arguments);
						break;
					case 2:
						this.init2.apply(this, arguments);
						break
				}
				return
			}
			$.ig.SystemException.prototype.init.call(this, 0)
		}, init1: function (initNumber, message) {
			$.ig.SystemException.prototype.init1.call(this, 1, message)
		}, init2: function (initNumber, message, innerException) {
			$.ig.SystemException.prototype.init2.call(this, 2, message, innerException)
		}, $type: new $.ig.Type("FormatException", $.ig.SystemException.prototype.$type)
	}, true);
	$.ig.util.defType("NumberStyles", "Enum", {
		init: function (v) {
			this._v = v
		}, $getName: function () {
			function getNameSingle(v) {
				switch (v) {
					case 0:
						return "None";
					case 1:
						return "AllowLeadingWhite";
					case 2:
						return "AllowTrailingWhite";
					case 4:
						return "AllowLeadingSign";
					case 7:
						return "Integer";
					case 8:
						return "AllowTrailingSign";
					case 16:
						return "AllowParentheses";
					case 32:
						return "AllowDecimalPoint";
					case 64:
						return "AllowThousands";
					case 111:
						return "Number";
					case 128:
						return "AllowExponent";
					case 167:
						return "Float";
					case 256:
						return "AllowCurrencySymbol";
					case 383:
						return "Currency";
					case 511:
						return "Any";
					case 512:
						return "AllowHexSpecifier";
					case 515:
						return "HexNumber";
					default:
						return v.toString()
				}
			}

			return function (v) {
				return this.getFlaggedName(v, getNameSingle)
			}
		}(), $value: function () {
			return this._v
		}, $type: new $.ig.Type("NumberStyles", $.ig.Enum.prototype.$type)
	}, true);
	$.ig.NumberStyles.prototype.none = 0;
	$.ig.NumberStyles.prototype.allowLeadingWhite = 1;
	$.ig.NumberStyles.prototype.allowTrailingWhite = 2;
	$.ig.NumberStyles.prototype.allowLeadingSign = 4;
	$.ig.NumberStyles.prototype.integer = 7;
	$.ig.NumberStyles.prototype.allowTrailingSign = 8;
	$.ig.NumberStyles.prototype.allowParentheses = 16;
	$.ig.NumberStyles.prototype.allowDecimalPoint = 32;
	$.ig.NumberStyles.prototype.allowThousands = 64;
	$.ig.NumberStyles.prototype.number = 111;
	$.ig.NumberStyles.prototype.allowExponent = 128;
	$.ig.NumberStyles.prototype.floatNumber = 167;
	$.ig.NumberStyles.prototype.allowCurrencySymbol = 256;
	$.ig.NumberStyles.prototype.currency = 383;
	$.ig.NumberStyles.prototype.any = 511;
	$.ig.NumberStyles.prototype.allowHexSpecifier = 512;
	$.ig.NumberStyles.prototype.hexNumber = 515;
	$.ig.util.defType("CompareOptions", "Enum", {
		init: function (v) {
			this._v = v
		}, $getName: function () {
			function getNameSingle(v) {
				switch (v) {
					case 0:
						return "None";
					case 1:
						return "IgnoreCase";
					case 2:
						return "IgnoreNonSpace";
					case 4:
						return "IgnoreSymbols";
					case 8:
						return "IgnoreKanaType";
					case 16:
						return "IgnoreWidth";
					case 268435456:
						return "OrdinalIgnoreCase";
					case 536870912:
						return "StringSort";
					case 1073741824:
						return "Ordinal";
					default:
						return v.toString()
				}
			}

			return function (v) {
				return this.getFlaggedName(v, getNameSingle)
			}
		}(), $value: function () {
			return this._v
		}, $type: new $.ig.Type("CompareOptions", $.ig.Enum.prototype.$type)
	}, true);
	$.ig.CompareOptions.prototype.none = 0;
	$.ig.CompareOptions.prototype.ignoreCase = 1;
	$.ig.CompareOptions.prototype.ignoreNonSpace = 2;
	$.ig.CompareOptions.prototype.ignoreSymbols = 4;
	$.ig.CompareOptions.prototype.ignoreKanaType = 8;
	$.ig.CompareOptions.prototype.ignoreWidth = 16;
	$.ig.CompareOptions.prototype.ordinalIgnoreCase = 268435456;
	$.ig.CompareOptions.prototype.stringSort = 536870912;
	$.ig.CompareOptions.prototype.ordinal = 1073741824;
	$.ig.util.defType("StringComparison", "Enum", {
		init: function (v) {
			this._v = v
		}, $getName: function (v) {
			switch (v) {
				case 0:
					return "CurrentCulture";
				case 1:
					return "CurrentCultureIgnoreCase";
				case 2:
					return "InvariantCulture";
				case 3:
					return "InvariantCultureIgnoreCase";
				case 4:
					return "Ordinal";
				case 5:
					return "OrdinalIgnoreCase";
				default:
					return v.toString()
			}
		}, $value: function () {
			return this._v
		}, $type: new $.ig.Type("StringComparison", $.ig.Enum.prototype.$type)
	}, true);
	$.ig.StringComparison.prototype.currentCulture = 0;
	$.ig.StringComparison.prototype.currentCultureIgnoreCase = 1;
	$.ig.StringComparison.prototype.invariantCulture = 2;
	$.ig.StringComparison.prototype.invariantCultureIgnoreCase = 3;
	$.ig.StringComparison.prototype.ordinal = 4;
	$.ig.StringComparison.prototype.ordinalIgnoreCase = 5;
	$.ig.util.defType("DateTimeKind", "Enum", {
		init: function (v) {
			this._v = v
		}, $getName: function (v) {
			switch (v) {
				case 0:
					return "Unspecified";
				case 1:
					return "Utc";
				case 2:
					return "Local";
				default:
					return v.toString()
			}
		}, $value: function () {
			return this._v
		}, $type: new $.ig.Type("DateTimeKind", $.ig.Enum.prototype.$type)
	}, true);
	$.ig.DateTimeKind.prototype.unspecified = 0;
	$.ig.DateTimeKind.prototype.utc = 1;
	$.ig.DateTimeKind.prototype.local = 2;
	$.ig.util.defType("SeekOrigin", "Enum", {
		init: function (v) {
			this._v = v
		}, $getName: function (v) {
			switch (v) {
				case 0:
					return "Begin";
				case 1:
					return "Current";
				case 2:
					return "End";
				default:
					return v.toString()
			}
		}, $value: function () {
			return this._v
		}, $type: new $.ig.Type("SeekOrigin", $.ig.Enum.prototype.$type)
	}, true);
	$.ig.SeekOrigin.prototype.begin = 0;
	$.ig.SeekOrigin.prototype.current = 1;
	$.ig.SeekOrigin.prototype.end = 2;
	$.ig.util.defType("StringSplitOptions", "Enum", {
		init: function (v) {
			this._v = v
		}, $getName: function (v) {
			switch (v) {
				case 0:
					return "None";
				case 1:
					return "RemoveEmptyEntries";
				default:
					return v.toString()
			}
		}, $value: function () {
			return this._v
		}, $type: new $.ig.Type("StringSplitOptions", $.ig.Enum.prototype.$type)
	}, true);
	$.ig.StringSplitOptions.prototype.none = 0;
	$.ig.StringSplitOptions.prototype.removeEmptyEntries = 1;
	$.ig.util.defType("DayOfWeek", "Enum", {
		init: function (v) {
			this._v = v
		}, $getName: function (v) {
			switch (v) {
				case 0:
					return "Sunday";
				case 1:
					return "Monday";
				case 2:
					return "Tuesday";
				case 3:
					return "Wednesday";
				case 4:
					return "Thursday";
				case 5:
					return "Friday";
				case 6:
					return "Saturday";
				default:
					return v.toString()
			}
		}, $value: function () {
			return this._v
		}, $type: new $.ig.Type("DayOfWeek", $.ig.Enum.prototype.$type)
	}, true);
	$.ig.DayOfWeek.prototype.sunday = 0;
	$.ig.DayOfWeek.prototype.monday = 1;
	$.ig.DayOfWeek.prototype.tuesday = 2;
	$.ig.DayOfWeek.prototype.wednesday = 3;
	$.ig.DayOfWeek.prototype.thursday = 4;
	$.ig.DayOfWeek.prototype.friday = 5;
	$.ig.DayOfWeek.prototype.saturday = 6;

	function decimalAdjust(type, value, exp) {
		if (typeof exp === "undefined" || +exp === 0) {
			return Math[type](value)
		}
		value = +value;
		exp = +exp;
		if (isNaN(value) || !(typeof exp === "number" && exp % 1 === 0)) {
			return NaN
		}
		value = value.toString().split("e");
		value = Math[type](+(value[0] + "e" + (value[1] ? +value[1] - exp : -exp)));
		value = value.toString().split("e");
		return +(value[0] + "e" + (value[1] ? +value[1] + exp : exp))
	}

	if (!Math.round10) {
		Math.round10 = function (value, exp) {
			return decimalAdjust("round", value, exp)
		}
	}
	if (!Math.round10N) {
		Math.round10N = function (value, exp) {
			return decimalAdjust("round", value, -exp)
		}
	}
	if (!Math.floor10) {
		Math.floor10 = function (value, exp) {
			return decimalAdjust("floor", value, exp)
		}
	}
	if (!Math.ceil10) {
		Math.ceil10 = function (value, exp) {
			return decimalAdjust("ceil", value, exp)
		}
	}
	$.ig.util.isPoint = function (p) {
		if (p == null) {
			return false
		}
		if ($.ig.util.cast($.ig.Point.prototype.$type, p) != null) {
			return true
		}
		if (typeof p.x === "number" && typeof p.y === "number") {
			return true
		}
		return false
	};
	$.ig.util.pointFromLiteral = function (p) {
		if (p == null) {
			return new $.ig.Point(1, 0, 0)
		}
		var cast = $.ig.util.cast($.ig.Point.prototype.$type, p);
		if (cast != null) {
			return cast
		}
		return new $.ig.Point(1, p.x, p.y)
	};
	$.ig.util.pointToLiteral = function (p) {
		var cast = $.ig.util.cast($.ig.Point.prototype.$type, p);
		if (cast == null) {
			return null
		}
		return {x: cast.x(), y: cast.y()}
	};
	$.ig.util.isSize = function (s) {
		if (s == null) {
			return false
		}
		if ($.ig.util.cast($.ig.Size.prototype.$type, s) != null) {
			return true
		}
		if (typeof s.width === "number" && typeof s.height === "number") {
			return true
		}
		return false
	};
	$.ig.util.sizeFromLiteral = function (s) {
		if (s == null) {
			return new $.ig.Size(1, 0, 0)
		}
		var cast = $.ig.util.cast($.ig.Size.prototype.$type, s);
		if (cast != null) {
			return cast
		}
		return new $.ig.Size(1, s.width, s.height)
	};
	$.ig.util.sizeToLiteral = function (s) {
		var cast = $.ig.util.cast($.ig.Size.prototype.$type, s);
		if (cast == null) {
			return null
		}
		return {width: cast.width(), height: cast.height()}
	};
	$.ig.util.isRect = function (r) {
		if (r == null) {
			return false
		}
		if ($.ig.util.cast($.ig.Rect.prototype.$type, r) != null) {
			return true
		}
		if (typeof r.x === "number" && typeof r.y === "number" && typeof r.width === "number" && typeof r.height === "number") {
			return true
		}
		if (typeof r.left === "number" && typeof r.top === "number" && typeof r.right === "number" && typeof r.bottom === "number") {
			return true
		}
		return false
	};
	$.ig.util.rectFromLiteral = function (r) {
		if (r == null) {
			return new $.ig.Rect(0, 0, 0, 0, 0)
		}
		var cast = $.ig.util.cast($.ig.Rect.prototype.$type, r);
		if (cast != null) {
			return cast
		}
		if (typeof r.x === "number" && typeof r.y === "number" && typeof r.width === "number" && typeof r.height === "number") {
			return new $.ig.Rect(0, r.x, r.y, r.width, r.height)
		}
		return new $.ig.Rect(0, r.left, r.top, r.right - r.left, r.bottom - r.top)
	};
	$.ig.util.rectToLiteral = function (r) {
		var cast = $.ig.util.cast($.ig.Rect.prototype.$type, r);
		if (cast == null) {
			return null
		}
		return {
			x: cast.x(),
			y: cast.y(),
			width: cast.width(),
			height: cast.height(),
			left: cast.left(),
			top: cast.top(),
			right: cast.right(),
			bottom: cast.bottom()
		}
	};
	$.ig.unicode_hack = function () {
		var firstLetters = {}, p;
		for (p in unicodeCategories) {
			if (firstLetters[p[0]]) firstLetters[p[0]] = unicodeCategories[p].substring(0, unicodeCategories[p].length - 1) + firstLetters[p[0]].substring(1); else firstLetters[p[0]] = unicodeCategories[p]
		}
		for (p in firstLetters) unicodeCategories[p] = firstLetters[p];
		return function (regexpString) {
			var modifiers = "";
			if (regexpString instanceof RegExp) {
				modifiers = (regexpString.global ? "g" : "") + (regexpString.ignoreCase ? "i" : "") + (regexpString.multiline ? "m" : "");
				regexpString = regexpString.source
			}
			regexpString = regexpString.replace(/\\p\{(..?)\}/g, function (match, group) {
				return unicodeCategories[group] || match
			});
			return new RegExp(regexpString, modifiers)
		}
	}()
})(jQuery);
/*
//@ sourceMappingURL=E:\Work\6\967\src\DEV\jQuery\2016.1\Source\ClientUI\js\modules\infragistics.util.js.map
*/
/*!@license
 * Infragistics.Web.ClientUI Data Binding Plugin 16.1.20161.2270
 *
 * Copyright (c) 2011-2017 Infragistics Inc.
 *
 * igDataSource provides the following functionality:
 * - read and parse local XML , JSON , and HTML data
 * - normalize / transform the above data according to a schema
 * - data type conversion (date, string, number, etc.)
 * - define relationships between two and more flat data sources - with primary/foreign keys, etc
 * - build URL params for requests that get remote data
 * - in case of scenarios such as paging, understand and prase the response - expect that it's in a predefined format that can be additionall configured by the developer
 * - get data from WCF services
 * - ability to combine local with remote functionality
 * - queueing AJAX requests
 *	paging,filtering (searching), and sorting functionality that are control-independent are also implemented here
 *	the idea of this code is to serve as a data-source abstraction layer (client-side data source control)
 *	that may well be used by all other client-side controls , such as dropdown, tree, menu, etc.
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 *	jquery-1.9.1.js
 *	infragistics.util.js
 *
 */
(function ($) {
	$.ig = $.ig || {};
	if (!window.Infragistics) {
		window.Infragistics = $.ig
	}
	$.ig.DataSource = $.ig.DataSource || Class.extend({
		settings: {
			id: "ds",
			outputResultsName: null,
			callback: null,
			callee: null,
			data: [],
			dataSource: null,
			dataBinding: null,
			dataBound: null,
			requestType: "GET",
			type: "unknown",
			schema: null,
			primaryKey: null,
			responseTotalRecCountKey: null,
			responseDataKey: null,
			responseDataType: null,
			responseContentType: null,
			localSchemaTransform: true,
			urlParamsEncoding: null,
			urlParamsEncoded: null,
			paging: {
				enabled: false,
				type: "remote",
				pageSize: 5,
				pageSizeUrlKey: null,
				pageIndexUrlKey: null,
				pageIndex: 0,
				appendPage: false
			},
			filtering: {
				type: "remote",
				caseSensitive: false,
				applyToAllData: true,
				customFunc: null,
				filterExprUrlKey: null,
				filterLogicUrlKey: "filterLogic",
				defaultFields: [],
				expressions: [],
				exprString: "",
				customConditions: null
			},
			sorting: {
				defaultDirection: "none",
				defaultFields: [],
				applyToAllData: true,
				customFunc: null,
				compareFunc: null,
				customConvertFunc: null,
				type: "remote",
				caseSensitive: false,
				sortUrlKey: null,
				sortUrlAscValueKey: null,
				sortUrlDescValueKey: null,
				expressions: [],
				exprString: ""
			},
			summaries: {
				type: "remote",
				summaryExprUrlKey: "summaries",
				summariesResponseKey: "summaries",
				summaryExecution: "afterfilteringandpaging",
				columnSettings: []
			},
			fields: [],
			serializeTransactionLog: true,
			aggregateTransactions: false,
			autoCommit: false,
			updateUrl: null,
			rowAdded: null,
			rowUpdated: null,
			rowInserted: null,
			rowDeleted: null
		}, init: function (options) {
			var tempSource, tempCallee, arrayAlready = false, metadata;
			if (options) {
				tempSource = options.dataSource;
				if (tempSource && ($.type(tempSource) === "array" || $.type(tempSource) === "object")) {
					if ($.type(tempSource) === "object" && options.responseDataKey && options.type !== "json") {
						metadata = tempSource.Metadata;
						options.dataSource = $.ig.findPath(tempSource, options.responseDataKey);
						if (metadata && options.dataSource.Metadata === undefined) {
							options.dataSource.Metadata = metadata
						}
						arrayAlready = true
					} else {
						options.dataSource = null
					}
				}
				if (options.callee) {
					tempCallee = options.callee;
					options.callee = null
				}
				this.settings = $.extend(true, {}, $.ig.DataSource.prototype.settings, options);
				if (arrayAlready) {
					this.settings.type = "array"
				} else if (tempSource && ($.type(tempSource) === "array" || $.type(tempSource) === "object")) {
					options.dataSource = tempSource;
					this.settings.dataSource = tempSource
				}
				if (tempCallee) {
					this.settings.callee = tempCallee;
					tempCallee = null
				}
			}
			this.settings.paging.pageIndex = 0;
			this._isBound = false;
			this._url = null;
			this._dsCallback = null;
			this._data = [];
			this._dataView = [];
			if (this.settings.type === "unknown") {
				this._runtimeType = this.analyzeDataSource()
			} else {
				this._runtimeType = this.settings.type
			}
			this._parser = new $.ig.TypeParser;
			this._schema = null;
			this._isSortingReq = false;
			this._isFilteringReq = false;
			this._isPagingReq = false;
			this._isSummariesReq = false;
			this._dataSummaries = [];
			this._recCount = 0;
			this._hasCount = false;
			this._initSchema();
			this._transactionLog = [];
			this._accumulatedTransactionLog = [];
			return this
		}, _initSchema: function () {
			var i;
			if (this.settings.schema) {
				if (this.settings.schema instanceof $.ig.DataSchema) {
					this._schema = this.settings.schema
				} else {
					if (this.settings.type !== "unknown") {
						this._schema = new $.ig.DataSchema(this.settings.type, this.settings.schema)
					} else {
						this._schema = new $.ig.DataSchema(this._runtimeType, this.settings.schema)
					}
					this._schema._pk = this.settings.primaryKey
				}
				this._fields = {};
				for (i = 0; i < this._schema.fields().length; i++) {
					if (typeof this._schema.fields()[i].mapper === "string" && typeof window[this._schema.fields()[i].mapper] === "function") {
						this._schema.fields()[i].mapper = window[this._schema.fields()[i].mapper]
					}
					if (typeof this._schema.fields()[i].mapper === "function") {
						this._hasMapper = true
					}
					this._fields[this._schema.fields()[i].name] = this._schema.fields()[i]
				}
			}
		}, fields: function (fields) {
			if (fields === undefined || fields === null) {
				return this.settings.fields
			}
			this.settings.fields = fields;
			return this
		}, analyzeDataSource: function () {
			var ds = this.dataSource(), dc, $dsObj;
			if (ds === undefined || ds === null) {
				return "empty"
			}
			if ($.type(ds) === "function") {
				return "function"
			}
			if ($.type(ds) === "array") {
				return "array"
			}
			if ($.type(ds) === "number" || $.type(ds) === "boolean" || $.type(ds) === "date") {
				return "invalid"
			}
			if ($.type(ds) === "string") {
				ds = $.trim(ds);
				if (ds.startsWith("/")) {
					return "remoteUrl"
				}
				if ($("#" + this.settings.id).length > 0 && ds.toLowerCase().startsWith("<table")) {
					return "htmlTableString"
				}
				if (ds.toLowerCase().startsWith("<table")) {
					dc = "<div id='" + this.settings.id + "' style='display:none;visibility:hidden;'>" + ds + "</div>";
					$(dc).appendTo($("body"));
					return "htmlTableString"
				}
				if (!ds.startsWith("[") && !ds.startsWith("{") && !ds.startsWith("<")) {
					if (!ds.startsWith("http://") && !ds.startsWith("https://")) {
						try {
							$dsObj = $("#" + ds);
							if ($dsObj.length > 0 && $dsObj[0].nodeName.toLowerCase() === "table") {
								return "htmlTableId"
							}
						} catch (e) {
						}
					}
					this._url = ds;
					return "remoteUrl"
				}
				return "unknown"
			}
			if (ds.nodeName && ds.nodeName.toLowerCase() === "table") {
				return "htmlTableDom"
			}
			if (ds.nodeName && (ds.nodeName.toLowerCase() === "ul" || ds.nodeName.toLowerCase() === "ol")) {
				return "htmlListDom"
			}
			if (ds.nodeName && ds.nodeName.toLowerCase() === "select") {
				return "htmlSelectDom"
			}
			return "unknown"
		}, dataView: function () {
			return this._dataView
		}, data: function () {
			return this._data
		}, transformedData: function (transformedExecution) {
			var data;
			switch (transformedExecution) {
				case"priortofilteringandpaging":
					data = this._data;
					break;
				case"afterfilteringbeforepaging":
					if (this._transformedData !== undefined) {
						data = this._transformedData
					} else {
						data = this._data
					}
					break;
				case"afterfilteringandpaging":
					data = this.dataView();
					break;
				default:
					data = this._dataView;
					break
			}
			return data
		}, dataSummaries: function () {
			var s = this.settings.summaries, type = s.type;
			if (type === "local") {
				this._dataSummaries = this.transformedData(s.summaryExecution)
			}
			return this._dataSummaries
		}, schema: function (s, t) {
			if (s === undefined || s === null) {
				return this._schema
			}
			if (s instanceof $.ig.DataSchema) {
				this._schema = s
			} else {
				if (t === null || t === undefined) {
					this._schema = new $.ig.DataSchema(s.type, s)
				} else {
					this._schema = new $.ig.DataSchema(t, s)
				}
				this._schema._pk = this.settings.primaryKey
			}
			return this
		}, pagingSettings: function (p) {
			if (p === undefined || p === null) {
				return this.settings.paging
			}
			this.settings.paging = p;
			return this
		}, filterSettings: function (f) {
			if (f === undefined || f === null) {
				return this.settings.filtering
			}
			this.settings.filtering = f;
			return this
		}, sortSettings: function (s) {
			if (s === undefined || s === null) {
				return this.settings.sorting
			}
			this.settings.sorting = s;
			return this
		}, summariesSettings: function (s) {
			if (s === undefined || s === null) {
				return this.settings.summaries
			}
			this.settings.summaries = s;
			return this
		}, dataSource: function (ds) {
			if (ds === undefined || ds === null) {
				return this.settings.dataSource
			}
			this.settings.dataSource = ds;
			this.analyzeDataSource();
			return this
		}, type: function (t) {
			if (t === undefined || t === null) {
				return this._runtimeType
			}
			this.settings.type = t;
			return this
		}, findRecordByKey: function (key, ds, objPath) {
			var i, data = ds || this._data, len = data ? data.length : 0,
				search = len > 0 && $.isArray(data[0]) ? this._lookupPkIndex() : this.settings.primaryKey;
			for (i = 0; i < len; i++) {
				if (data[i][search] === key) {
					return data[i]
				}
			}
			return null
		}, removeRecordByKey: function (key, origDs) {
			var i, len, data, count = 0, all = [this._data], prime = this.settings.primaryKey,
				primeIdx = this._lookupPkIndex(), search;
			this._addOnlyUniqueToCollection(all, this._dataView);
			this._addOnlyUniqueToCollection(all, this._filteredData);
			this._addOnlyUniqueToCollection(all, origDs);
			while (count < all.length) {
				data = all[count++];
				len = data ? data.length : 0;
				search = len > 0 && $.isArray(data[0]) ? primeIdx : prime;
				for (i = 0; i < len; i++) {
					if (data[i] && data[i][search] === key) {
						$.ig.removeFromArray(data, i);
						break
					}
				}
			}
		}, removeRecordByIndex: function (index, origDs) {
			var i, len, record, data = this._data, view = this._dataView, filter = this._filteredData;
			if (!data || isNaN(index) || index < 0 || index >= data.length) {
				return
			}
			record = data[index];
			$.ig.removeFromArray(data, index);
			if (origDs) {
				$.ig.removeFromArray(origDs, index)
			}
			data = data === view ? filter : view;
			while (record) {
				len = data ? data.length : 0;
				for (i = 0; i < len; i++) {
					if (data[i] === record) {
						$.ig.removeFromArray(data, i);
						break
					}
				}
				if (data === filter) {
					return
				}
				data = filter
			}
		}, setCellValue: function (rowId, colId, val, autoCommit) {
			var t = this._createCellTransaction(rowId, colId, val);
			this._addTransaction(t);
			if (autoCommit === true) {
				this.commit(rowId)
			}
			return t
		}, updateRow: function (rowId, rowObject, autoCommit) {
			var t = this._createRowTransaction(rowId, rowObject),
				oldRow = this.settings.primaryKey === null ? this._data[parseInt(rowId, 10)] : this.findRecordByKey(rowId),
				rowIndex = this.settings.primaryKey === null ? rowId : $.ig.indexInArray(this._data, oldRow);
			this._addTransaction(t);
			if (autoCommit === true) {
				this.commit(rowId)
			}
			if ($.type(this.settings.rowUpdated) === "function") {
				if (this.settings.callee) {
					this.settings.rowUpdated.apply(this.settings.callee, [{
						rowIndex: rowIndex,
						newRow: rowObject,
						oldRow: oldRow
					}, this])
				} else {
					this.settings.rowUpdated({rowIndex: rowIndex, newRow: rowObject, oldRow: oldRow}, this)
				}
			}
			return t
		}, addRow: function (rowId, rowObject, autoCommit) {
			var t = this._createNewRowTransaction(rowId, rowObject);
			this._addTransaction(t);
			if (autoCommit === true) {
				this.commit(rowId)
			}
			if ($.type(this.settings.rowAdded) === "function") {
				if (this.settings.callee) {
					this.settings.rowAdded.apply(this.settings.callee, [{rowId: rowId, row: rowObject}, this])
				} else {
					this.settings.rowAdded({rowId: rowId, row: rowObject}, this)
				}
			}
			return t
		}, insertRow: function (rowId, rowObject, rowIndex, autoCommit, parentRowId) {
			var t = this._createInsertRowTransaction(rowId, rowObject, rowIndex);
			this._addTransaction(t);
			if (autoCommit === true) {
				this.commit(rowId)
			}
			if ($.type(this.settings.rowInserted) === "function") {
				if (this.settings.callee) {
					this.settings.rowInserted.apply(this.settings.callee, [{
						rowId: rowId,
						row: rowObject,
						rowIndex: rowIndex
					}, this])
				} else {
					this.settings.rowInserted({rowId: rowId, row: rowObject, rowIndex: rowIndex}, this)
				}
			}
			return t
		}, deleteRow: function (rowId, autoCommit) {
			var t = this._createDeleteRowTransaction(rowId),
				row = this.settings.primaryKey === null ? this._data[parseInt(rowId, 10)] : this.findRecordByKey(rowId),
				rowIndex = this.settings.primaryKey === null ? rowId : $.ig.indexInArray(this._data, row),
				isNewRow = false, i, j;
			for (i = 0; this.settings.aggregateTransactions && i < this._transactionLog.length; i++) {
				if (this._transactionLog[i].type === "newrow" && this._transactionLog[i].rowId === rowId) {
					isNewRow = true;
					rowId = this._transactionLog[i].rowId;
					this._removeTransactionByTransactionId(this._transactionLog[i].tid);
					for (j = 0; j < this._accumulatedTransactionLog.length; j++) {
						if (this._accumulatedTransactionLog[j].rowId === rowId) {
							$.ig.removeFromArray(this._accumulatedTransactionLog, j)
						}
					}
					break
				}
			}
			if (!(this.settings.aggregateTransactions && isNewRow)) {
				this._addTransaction(t);
				if (autoCommit === true) {
					this.commit(rowId)
				}
				if ($.type(this.settings.rowDeleted) === "function") {
					if (this.settings.callee) {
						this.settings.rowDeleted.apply(this.settings.callee, [{
							rowId: rowId,
							row: row,
							rowIndex: rowIndex
						}, this])
					} else {
						this.settings.rowDeleted({rowId: rowId, row: row, rowIndex: rowIndex}, this)
					}
				}
			}
			return t
		}, addNode: function (data) {
			var t = this._createAddNodeTransaction(data);
			this._addTransaction(t)
		}, removeNode: function (data) {
			var t = this._createRemoveNodeTransaction(data);
			this._addTransaction(t)
		}, getDetachedRecord: function (t) {
			var o = $.type(this._data[0]) === "array" ? [] : {}, i, originalRec;
			if (this.settings.primaryKey === null) {
				originalRec = this._data[parseInt(t.rowId, 10)]
			} else {
				originalRec = this.findRecordByKey(t.rowId)
			}
			if (this._data[0] !== "array") {
				for (i in originalRec) {
					if (originalRec.hasOwnProperty(i)) {
						o[i] = originalRec[i]
					}
				}
			} else {
				for (i = 0; i < originalRec.length; i++) {
					o[i] = originalRec[i]
				}
			}
			if (t.type === "cell") {
				o[t.col] = t.value;
				return o
			}
			if (o !== "array") {
				for (i in t.row) {
					if (t.row.hasOwnProperty(i)) {
						o[i] = t.row[i]
					}
				}
			} else {
				for (i = 0; i < t.row.length; i++) {
					o[i] = t.row[i]
				}
			}
			return o
		}, commit: function (id) {
			if (id !== null && id !== undefined) {
				this._commitTransactionsByRowId(id)
			} else {
				this._transactionLog.reverse();
				while (this._transactionLog.length > 0) {
					this._commitTransaction(this._transactionLog.pop())
				}
			}
		}, rollback: function (id) {
			var i, trans;
			if (id !== null && id !== undefined) {
				trans = this._rollbackTransactionsByRowId(id)
			} else {
				i = this._transactionLog.length;
				while (i-- > 0) {
					this._rollbackTransaction(this._transactionLog[i])
				}
			}
			return trans
		}, pendingTransactions: function () {
			return this._transactionLog
		}, allTransactions: function () {
			return this._accumulatedTransactionLog
		}, _createCellTransaction: function (rowId, colId, val) {
			return {type: "cell", rowId: rowId, tid: this._generateTransactionId(), col: colId, value: val}
		}, _createRowTransaction: function (rowId, rowObject) {
			return {type: "row", tid: this._generateTransactionId(), row: rowObject, rowId: rowId}
		}, _createNewRowTransaction: function (rowId, rowObject) {
			return {type: "newrow", tid: this._generateTransactionId(), row: rowObject, rowId: rowId}
		}, _createInsertRowTransaction: function (rowId, rowObject, rowIndex) {
			return {
				type: "insertrow",
				tid: this._generateTransactionId(),
				row: rowObject,
				rowId: rowId,
				rowIndex: rowIndex
			}
		}, _createDeleteRowTransaction: function (rowId) {
			return {type: "deleterow", tid: this._generateTransactionId(), rowId: rowId}
		}, _createAddNodeTransaction: function (data) {
			return {type: "addnode", tid: this._generateTransactionId(), tdata: data}
		}, _createRemoveNodeTransaction: function (data) {
			return {type: "removenode", tid: this._generateTransactionId(), tdata: data}
		}, _addTransaction: function (t) {
			var exists = false, i = 0, prop, globalt, j, dirty = true, k,
				shouldAggregateTransactions = this.settings.autoCommit === false && this.settings.aggregateTransactions === true,
				isSameAsOrigValue = false, rec = shouldAggregateTransactions ? this.findRecordByKey(t.rowId) : null;
			if (t.type === "cell") {
				for (i = 0; i < this._transactionLog.length; i++) {
					if (this._transactionLog[i].rowId === t.rowId && this._transactionLog[i].col === t.col) {
						exists = true;
						if (shouldAggregateTransactions) {
							if (rec && rec[t.col] === t.value) {
								for (k = 0; k < this._accumulatedTransactionLog.length; k++) {
									if (this._accumulatedTransactionLog[k].rowId === this._transactionLog[i].rowId) {
										$.ig.removeFromArray(this._accumulatedTransactionLog, k)
									}
								}
								this._removeTransactionByTransactionId(this._transactionLog[i].tid);
								dirty = false
							}
						}
						if (dirty) {
							this._transactionLog[i].value = t.value;
							this._syncGlobalTransaction(this._transactionLog[i])
						}
					}
					if (shouldAggregateTransactions && rec && rec[t.col] === t.value) {
						isSameAsOrigValue = true
					}
				}
				for (j = 0; j < this._transactionLog.length; j++) {
					if (this._transactionLog[j].type === "newrow" && this._transactionLog[j].rowId === t.rowId) {
						if (t.type === "row") {
							this._transactionLog[j].value = t.value
						} else {
							this._transactionLog[j].row[t.col] = t.value
						}
						this._syncGlobalTransaction(this._transactionLog[j]);
						return
					}
				}
			} else if (t.type === "row") {
				for (i = 0; i < this._transactionLog.length; i++) {
					if (this._transactionLog[i].rowId === t.rowId && this._transactionLog[i].type !== "cell") {
						exists = true;
						if (shouldAggregateTransactions) {
							dirty = false;
							for (prop in t.row) {
								if (rec && t.row.hasOwnProperty(prop) && t.row[prop] !== rec[prop]) {
									dirty = true;
									break
								}
							}
							for (j = 0, !dirty; j < this._transactionLog.length; j++) {
								if (this._transactionLog[j].type === "newrow" && this._transactionLog[j].rowId === t.rowId) {
									this._transactionLog[j].row = t.row;
									this._syncGlobalTransaction(this._transactionLog[j]);
									return
								}
							}
						}
						if (dirty) {
							this._transactionLog[i].row = t.row;
							this._syncGlobalTransaction(this._transactionLog[i])
						} else {
							for (k = 0; k < this._accumulatedTransactionLog.length; k++) {
								if (this._accumulatedTransactionLog[k].rowId === this._transactionLog[i].rowId) {
									$.ig.removeFromArray(this._accumulatedTransactionLog, k)
								}
							}
							this._removeTransactionByTransactionId(this._transactionLog[i].tid)
						}
					}
				}
				if (shouldAggregateTransactions) {
					for (prop in t.row) {
						isSameAsOrigValue = true;
						if (!(t.row.hasOwnProperty(prop) && rec && t.row[prop] === rec[prop])) {
							isSameAsOrigValue = false;
							break
						}
					}
				}
			} else if (t.type === "addnode" || t.type === "removenode") {
				this._transactionLog.push(t);
				this._accumulatedTransactionLog.push(t);
				return
			}
			if (!exists && !isSameAsOrigValue) {
				this._transactionLog.push(t);
				globalt = $.extend(true, {}, t);
				if (globalt.type === "cell" && $.type(globalt.value) === "date") {
					globalt.value = "/Date(" + globalt.value.getTime() + ")/"
				} else if (globalt.type === "row" || globalt.type === "insertrow" || globalt.type === "newrow" || globalt.type === "insertnode") {
					for (prop in globalt.row) {
						if (globalt.row.hasOwnProperty(prop) && $.type(globalt.row[prop]) === "date") {
							globalt.row[prop] = "/Date(" + globalt.row[prop].getTime() + ")/"
						}
					}
				}
				this._accumulatedTransactionLog.push(globalt)
			}
		}, _syncGlobalTransaction: function (t) {
			var i, prop;
			if (!t) {
				return
			}
			if (t.type === "cell") {
				for (i = 0; i < this._accumulatedTransactionLog.length; i++) {
					if (this._accumulatedTransactionLog[i].rowId === t.rowId && this._accumulatedTransactionLog[i].col === t.col) {
						if ($.type(t.value) === "date") {
							this._accumulatedTransactionLog[i].value = "/Date(" + t.value.getTime() + ")/"
						} else {
							this._accumulatedTransactionLog[i].value = t.value
						}
						break
					}
				}
			} else if (t.type === "row" || t.type === "insertrow" || t.type === "newrow") {
				for (i = 0; i < this._accumulatedTransactionLog.length; i++) {
					if (this._accumulatedTransactionLog[i].rowId === t.rowId && this._accumulatedTransactionLog[i].type !== "cell") {
						for (prop in t.row) {
							if (t.row.hasOwnProperty(prop)) {
								if ($.type(t.row[prop]) === "date") {
									this._accumulatedTransactionLog[i].row[prop] = "/Date(" + t.row[prop].getTime() + ")/"
								} else {
									this._accumulatedTransactionLog[i].row[prop] = t.row[prop]
								}
							}
						}
					}
				}
			}
		}, _removeTransactionByTransactionId: function (tid, removeFromAll) {
			var i;
			for (i = 0; i < this._transactionLog.length; i++) {
				if (this._transactionLog[i].tid === tid) {
					$.ig.removeFromArray(this._transactionLog, i);
					break
				}
			}
			if (removeFromAll === true) {
				for (i = 0; i < this._accumulatedTransactionLog.length; i++) {
					if (this._accumulatedTransactionLog[i].tid === tid) {
						$.ig.removeFromArray(this._accumulatedTransactionLog, i);
						break
					}
				}
			}
		}, _removeTransactionsByRecordId: function (id) {
			var i;
			for (i = 0; i < this._transactionLog.length; i++) {
				if (this._transactionLog[i].rowId === id) {
					$.ig.removeFromArray(this._transactionLog, i);
					break
				}
			}
		}, _addRow: function (row, index, origDs) {
			var data, key, i, count = 0, schema = this.settings.schema, layouts = schema ? schema.layouts : null, lo,
				pdata, newRow, all = [this._data], collectionProcessedData = [];
			this._addOnlyUniqueToCollection(all, this._dataView);
			this._addOnlyUniqueToCollection(all, origDs);
			if (this._filter && this._filteredData && this.settings.paging.enabled && this.settings.paging.type === "local") {
				this._addOnlyUniqueToCollection(all, this._filteredData)
			}
			if (layouts) {
				for (key in layouts) {
					if (layouts.hasOwnProperty(key)) {
						if ((key.match(/\//g) || []).length !== 1) {
							continue
						}
						if (layouts[key].key && !row.hasOwnProperty(layouts[key].key)) {
							if (layouts[key].responseDataKey) {
								lo = {};
								lo[layouts[key].responseDataKey] = []
							} else {
								lo = []
							}
							row[layouts[key].key] = lo
						}
					}
				}
			}
			while (count < all.length) {
				data = all[count++];
				if (this._preprocessAddRow) {
					pdata = this._preprocessAddRow.apply(this, Array.prototype.slice.call(arguments).concat([data]));
					data = (pdata || {}).layoutData;
					if (data) {
						for (i = 0; i < collectionProcessedData.length; i++) {
							if (collectionProcessedData[i] === data) {
								data = null;
								break
							}
						}
						if (data) {
							collectionProcessedData.push(data)
						}
					}
				}
				if (data) {
					newRow = row;
					if (data !== origDs && $.type(row) === "object") {
						newRow = $.extend(true, {}, row)
					}
					if (index >= 0 && index < data.length) {
						data.splice(index, 0, newRow)
					} else {
						data.push(newRow)
					}
					if (this._postprocessAddRow && pdata) {
						pdata.newData = data;
						this._postprocessAddRow.apply(this, Array.prototype.slice.call(arguments).concat(pdata));
						data = pdata.cashedData
					}
				}
			}
		}, _updateRecOnCommit: function (t, records) {
			var i, j, rec, prop;
			if (t.type === "cell") {
				for (j = 0; j < records.length; j++) {
					rec = records[j];
					if (rec) {
						rec[t.col] = t.value
					}
				}
			} else if (t.type === "row") {
				if ($.type(t.row) === "array") {
					for (j = 0; j < records.length; j++) {
						rec = records[j];
						if (rec) {
							for (i = 0; i < t.row.length; i++) {
								rec[i] = t.row[i]
							}
						}
					}
				} else {
					for (j = 0; j < records.length; j++) {
						rec = records[j];
						if (rec) {
							for (prop in t.row) {
								if (t.row.hasOwnProperty(prop)) {
									rec[prop] = t.row[prop]
								}
							}
						}
					}
				}
			}
		}, _commitTransaction: function (t) {
			var rec, origRec, origDs = this.settings.localSchemaTransform ? this._origDs : null;
			if (origDs === this._data) {
				origDs = null
			}
			if (this.settings.primaryKey === null) {
				rec = this._data[parseInt(t.rowId, 10)];
				if (origDs) {
					origRec = origDs[parseInt(t.rowId, 10)]
				}
			} else {
				rec = this.findRecordByKey(t.rowId);
				if (origDs) {
					origRec = this.findRecordByKey(t.rowId, origDs)
				}
			}
			if (t.type === "cell" || t.type === "row") {
				this._updateRecOnCommit(t, [rec, origRec])
			} else if (t.type === "deleterow") {
				if (this.settings.primaryKey === null) {
					this.removeRecordByIndex(parseInt(t.rowId, 10), origDs)
				} else {
					this.removeRecordByKey(t.rowId, origDs)
				}
			} else if (t.type === "newrow") {
				this._addRow(t.row, -1, origDs)
			} else if (t.type === "insertrow") {
				this._addRow(t.row, t.rowIndex, origDs)
			}
			this._removeTransactionByTransactionId(t.tid)
		}, _rollbackTransaction: function (t) {
			this._removeTransactionByTransactionId(t.tid, true)
		}, _commitTransactionsByRowId: function (id) {
			var i;
			for (i = 0; i < this._transactionLog.length; i++) {
				if (this._transactionLog[i].rowId === id) {
					this._commitTransaction(this._transactionLog[i])
				}
			}
		}, _rollbackTransactionsByRowId: function (id) {
			var i, trans = [];
			i = this._transactionLog.length;
			while (i-- > 0) {
				if (this._transactionLog[i].rowId === id) {
					trans.push(this._transactionLog[i]);
					this._rollbackTransaction(this._transactionLog[i])
				}
			}
			return trans
		}, _addOnlyUniqueToCollection: function (collection, item) {
			var i;
			for (i = 0; i < collection.length; i++) {
				if (collection[i] === item) {
					return
				}
			}
			collection.push(item)
		}, transactionsAsString: function () {
			return JSON.stringify(this._accumulatedTransactionLog)
		}, _generateTransactionId: function () {
			return ((1 + Math.random()) * parseInt("10000", 16)).toString(16).substring(1, 5)
		}, _lookupPkIndex: function () {
			var i;
			if (this._pkIndex !== undefined) {
				return this._pkIndex
			}
			if (typeof this.settings.primaryKey === "string") {
				if (this.schema() && this.schema().fields() && this.schema().fields().length > 0) {
					for (i = 0; i < this.schema().fields().length; i++) {
						if (this.schema().fields()[i].name === this.settings.primaryKey) {
							this._pkIndex = i;
							return i
						}
					}
				}
			}
			this._pkIndex = this.settings.primaryKey;
			return this.settings.primaryKey
		}, saveChanges: function (success, error) {
			if (this.settings.updateUrl !== null) {
				var me = this, opts;
				opts = {
					type: "POST",
					url: this.settings.updateUrl,
					data: {ig_transactions: JSON.stringify(this._accumulatedTransactionLog)},
					success: function (data, textStatus, jqXHR) {
						if (data.Success) {
							me._saveChangesSuccess(data, textStatus, jqXHR);
							if (success) {
								success(data, textStatus, jqXHR)
							}
						} else {
							me._saveChangesError(jqXHR, textStatus, $.ig.DataSourceLocale.locale.noSaveChanges);
							if (error) {
								error(jqXHR, textStatus, $.ig.DataSourceLocale.locale.noSaveChanges)
							}
						}
					},
					error: function (jqXHR, textStatus, errorThrown) {
						me._saveChangesError(jqXHR, textStatus, errorThrown);
						if (error) {
							error(jqXHR, textStatus, errorThrown)
						}
					}
				};
				this._ajaxRequest = $.ajax(opts)
			}
		}, _saveChangesSuccess: function (data, textStatus, jqXHR) {
			var schs, sche, i;
			if (data.Success) {
				this.commit();
				this._transactionLog = [];
				this._accumulatedTransactionLog = [];
				schs = this._saveChangesHandlers;
				i = schs ? schs.length : 0;
				while (i-- > 0) {
					schs[i](data, textStatus, jqXHR)
				}
			} else {
				sche = this._saveChangesErrorHandlers;
				i = sche ? sche.length : 0;
				while (i-- > 0) {
					sche[i](jqXHR, textStatus, $.ig.DataSourceLocale.locale.noSaveChanges)
				}
			}
		}, _saveChangesError: function (jqXHR, textStatus, errorThrown) {
			var sche = this._saveChangesErrorHandlers, i = sche ? sche.length : 0;
			while (i-- > 0) {
				sche[i](jqXHR, textStatus, errorThrown)
			}
		}, _addChangesSuccessHandler: function (functionDelegate) {
			if (this._saveChangesHandlers === undefined) {
				this._saveChangesHandlers = []
			}
			this._saveChangesHandlers[this._saveChangesHandlers.length] = functionDelegate
		}, _removeChangesSuccessHandler: function (functionDelegate) {
			if (this._saveChangesHandlers !== undefined) {
				var index = $.ig.indexInArray(this._saveChangesHandlers, functionDelegate);
				if (index > -1) {
					this._saveChangesHandlers = this._saveChangesHandlers.slice(0, index).concat(this._saveChangesHandlers.slice(index + 1, this._saveChangesHandlers.length))
				}
			}
		}, _addChangesErrorHandler: function (functionDelegate) {
			if (this._saveChangesErrorHandlers === undefined) {
				this._saveChangesErrorHandlers = []
			}
			this._saveChangesErrorHandlers[this._saveChangesErrorHandlers.length] = functionDelegate
		}, _removeChangesErrorHandler: function (functionDelegate) {
			if (this._saveChangesErrorHandlers !== undefined) {
				var index = $.ig.indexInArray(this._saveChangesErrorHandlers, functionDelegate);
				if (index > -1) {
					this._saveChangesErrorHandlers = this._saveChangesErrorHandlers.slice(0, index).concat(this._saveChangesErrorHandlers.slice(index + 1, this._saveChangesErrorHandlers.length))
				}
			}
		}, dataBind: function (callback, callee) {
			var table, tableObj, dsObj, ds, s, p = this.settings, args, resKey, noCancel = true, callDataBound = true,
				f;
			this._transactionLog = [];
			this._accumulatedTransactionLog = [];
			if (!callback) {
				callback = p.callback
			}
			args = {cancel: false};
			if ($.isFunction(p.dataBinding)) {
				noCancel = p.dataBinding(this, args);
				if (noCancel === undefined) {
					noCancel = true
				}
			}
			if (noCancel) {
				if (this.settings.type === "unknown" && (this._runtimeType === null || this._runtimeType === undefined)) {
					this._runtimeType = this.analyzeDataSource()
				} else if (this._runtimeType === "json") {
					ds = this.dataSource();
					if ($.type(ds) === "string") {
						ds = $.trim(ds);
						if (ds.startsWith("/") || ds.startsWith("http://") || ds.startsWith("https://")) {
							this._runtimeType = "remoteUrl"
						}
					}
				}
				switch (this._runtimeType) {
					case"function":
						this._data = p.dataSource();
						if (this.schema() && this.settings.localSchemaTransform) {
							this._data = this.schema().transform(this._data)
						}
						break;
					case"array":
						if (this.schema() && this.settings.localSchemaTransform) {
							this._data = this.schema().transform(this.dataSource());
							if (this.dataSource().Metadata) {
								this._metadata = this.dataSource().Metadata;
								this.summariesResponse(this.settings.summaries.summariesResponseKey, this.dataSource())
							}
							this._origDs = this.dataSource()
						} else {
							this._data = this.dataSource()
						}
						break;
					case"htmlTableDom":
					case"htmlTableId":
					case"htmlTableString":
						if (this._tableBound) {
							break
						}
						this._runtimeType = this.analyzeDataSource();
						if (this._runtimeType === "htmlTableId") {
							tableObj = $("#" + this.dataSource());
							table = this._validateTable(tableObj)
						} else if (this._runtimeType === "htmlTableString") {
							tableObj = $("#" + this.settings.id + " > table");
							table = this._validateTable(tableObj)
						} else {
							table = this.dataSource()
						}
						if (this.schema() && this.settings.localSchemaTransform) {
							this._data = this.schema().transform(table)
						} else {
							this._data = this.tableToObject(table)
						}
						this._tableBound = true;
						break;
					case"htmlListDom":
						this._data = this.schema().transform(this.dataSource());
						break;
					case"htmlSelectDom":
						this._data = this.schema().transform(this.dataSource());
						break;
					case"invalid":
						throw new Error($.ig.DataSourceLocale.locale.invalidDataSource);
					case"unknown":
					case"json":
					case"xml":
						if (this.settings.type !== "json" && p.type !== "xml") {
							throw new Error($.ig.DataSourceLocale.locale.unknownDataSource)
						} else {
							resKey = this.settings.responseDataKey;
							if ($.type(this.dataSource()) === "string") {
								if (p.type === "json") {
									dsObj = this.stringToJSONObject(this.dataSource())
								} else {
									dsObj = this.stringToXmlObject(this.dataSource())
								}
							} else {
								dsObj = this.dataSource()
							}
							if (this.schema() && this.settings.localSchemaTransform === true) {
								this._data = this.schema().transform(dsObj);
								if (resKey !== null && resKey !== undefined) {
									this._origDs = $.ig.findPath(dsObj, resKey)
								} else {
									this._origDs = dsObj
								}
							} else if ((!this.schema() || this.settings.localSchemaTransform === false) && p.type === "json") {
								if (resKey !== null && resKey !== undefined) {
									this._data = this._origDs = $.ig.findPath(dsObj, resKey)
								} else {
									this._data = dsObj
								}
								this._origDs = dsObj
							} else if (!this.schema() && p.type === "xml") {
								throw new Error($.ig.DataSourceLocale.locale.errorXmlSourceWithoutSchema)
							}
							this.totalRecordsCount(null, this.settings.responseTotalRecCountKey, dsObj, this);
							if (dsObj && dsObj.Metadata) {
								this._metadata = dsObj.Metadata
							}
							this.summariesResponse(this.settings.summaries.summariesResponseKey, dsObj)
						}
						break;
					case"remoteUrl":
						callDataBound = false;
						this._remoteData(callback, callee);
						break;
					case"empty":
						this._data = [];
						this._dataView = [];
						this._dataSummaries = [];
						break;
					default:
						break
				}
				this._dataView = this._data;
				this._filter = false;
				s = p.sorting;
				if (s.type === "local" && this._runtimeType !== "remoteUrl" && s.defaultFields.length > 0) {
					this.sort(s.defaultFields, s.defaultDirection);
					s.sortingApplied = true
				}
				f = p.filtering;
				if (f.type === "local" && this._runtimeType !== "remoteUrl" && f.defaultFields.length > 0) {
					this.filter(f.defaultFields)
				}
				if (p.paging.enabled && p.paging.type === "local" && this._runtimeType !== "remoteUrl") {
					this._page()
				}
				if (!this._filter || !this._transformedData) {
					this._populateTransformedData()
				}
				if (s.sortingApplied) {
					s.sortingApplied = false
				}
				if (this._runtimeType !== "remoteUrl") {
					this._invokeCallback(callee, callback)
				}
				this._internalDataBound(!args.cancel && callDataBound)
			}
			return this
		}, getCellValue: function (fieldName, record) {
			var field, result;
			if (!this._hasMapper || !this._fields || this._fields[fieldName] === undefined || this._fields[fieldName].type !== "object" || !record[fieldName]) {
				return record[fieldName]
			}
			field = this._fields[fieldName];
			if (field && typeof field.mapper === "function") {
				result = field.mapper(record)
			} else {
				result = record[fieldName]
			}
			return result
		}, _getFieldTypeFromSchema: function (fieldName) {
			var field = this._fields[fieldName], type, ds = this.dataSource();
			if (!field) {
				return undefined
			}
			if (this.type() === "remoteUrl") {
				ds = this.data()
			} else if (this.type() === "json" && ds !== null && ds !== undefined && this.settings.responseDataKey !== null) {
				ds = $.ig.findPath(ds, this.settings.responseDataKey)
			}
			if (typeof field.mapper === "function" && $.type(ds) === "array" && ds.length > 0) {
				type = $.type(field.mapper(ds[0]))
			} else {
				type = field.type
			}
			return type
		}, _internalDataBound: function (callDatabound) {
			if (callDatabound && $.isFunction(this.settings.dataBound)) {
				this.settings.dataBound(this)
			}
		}, summariesResponse: function (key, dsObj) {
			if (!dsObj || !key) {
				this._dataSummaries = this._dataSummaries || [];
				return this.dataSummaries()
			}
			var rec, resPath, i, schema, func, offsets, offset, obj;
			if (key.length > 0) {
				rec = dsObj;
				resPath = key.split(".");
				for (i = 0; i < resPath.length; i++) {
					if (rec === null || rec === undefined) {
						break
					}
					rec = rec[resPath[i]]
				}
				this._dataSummaries = rec
			} else {
				this._dataSummaries = dsObj
			}
			this._dataSummaries = this._dataSummaries || [];
			if (this.settings.localSchemaTransform === true && this.schema() && dsObj && dsObj.Metadata && dsObj.Metadata.timezoneOffsetsSummaries) {
				offsets = dsObj.Metadata.timezoneOffsetsSummaries;
				this._dataSummaries._serverOffsetsSummaries = offsets;
				schema = this.schema().schema;
				if (schema && schema.fields) {
					for (i = 0; i < schema.fields.length; i++) {
						if (schema.fields[i].type === "date" && offsets[schema.fields[i].name] !== undefined) {
							key = schema.fields[i].name;
							for (func in offsets[key]) {
								if (offsets[key].hasOwnProperty(func)) {
									offset = offsets[key][func];
									obj = this._dataSummaries[key][func];
									if ($.type(obj) === "string" && obj.indexOf("/Date(") !== -1) {
										this._dataSummaries[key][func] = new Date(parseInt(obj.replace("/Date(", "").replace(")/", ""), 10) + offset)
									}
								}
							}
						}
					}
				}
			}
			return this._dataSummaries
		}, _populateTransformedData: function (data) {
			if (data !== null && data !== undefined) {
				this._transformedData = data
			} else {
				this._transformedData = this._data
			}
		}, _invokeCallback: function (callee, callback) {
			var cbResolved, calleeResolved;
			cbResolved = callback || this.settings.callback;
			calleeResolved = callee || this.settings.callee;
			if (cbResolved) {
				if (calleeResolved) {
					cbResolved.apply(calleeResolved, [true, "", this])
				} else {
					cbResolved(true, "", this)
				}
			}
		}, _remoteData: function (callback, callee) {
			var params, url = this.settings.dataSource, dataType = this.settings.responseDataType,
				contentType = this.settings.responseContentType, options, verb = this.settings.requestType;
			params = this._encodeUrl();
			if (callback) {
				this._customCallback = callback
			} else {
				this._customCallback = null
			}
			this._callee = callee;
			options = {
				url: url,
				data: verb === "GET" ? params : JSON.stringify(params),
				type: verb,
				dataType: dataType,
				async: true,
				context: this,
				contentType: contentType,
				cache: false,
				dataFilter: this._dataFilter,
				success: this._successCallback,
				complete: this._completeCallback,
				converters: {
					"text json": function (value) {
						return value
					}
				},
				error: this._errorCallback
			};
			this._processRequest(options)
		}, _dataFilter: function (data, type) {
			var ds, schema = this.context.schema(), rawData, t = this.context.settings.type, ver, returnString = false;
			if (type === undefined || type === null) {
				if (typeof data === "object" && data && typeof data.charAt !== "function") {
					if ($.isXMLDoc(data)) {
						type = "xml"
					} else {
						type = "json"
					}
				} else {
					type = "text"
				}
			}
			if (type === "xml") {
				schema._type = "xml";
				ds = this.context._processXmlResponse(data, true, this.context)
			} else if (type === "json") {
				if (schema) {
					schema._type = "json"
				}
				if ($.type(data) === "string") {
					rawData = JSON.parse(data)
				} else {
					rawData = data
				}
				returnString = true;
				ds = this.context._processJsonResponse(rawData, this.context)
			} else {
				if (jQuery.fn.jquery) {
					ver = jQuery.fn.jquery.split(".")
				}
				if (ver && ver.length >= 2) {
					if (parseInt(ver[1], 10) > 4 || parseInt(ver[0], 10) > 1) {
						this.dataTypes = [];
						this.dataTypes.push("text");
						returnString = true
					}
				}
				data = $.type(data) === "string" ? $.trim(data) : data;
				if (data && $.type(data) === "string" && (data.startsWith("<?xml") || data.startsWith("<")) || t === "xml") {
					if (schema) {
						schema._type = "xml"
					}
					ds = this.context._processXmlResponse(this.context.stringToXmlObject(data), false, this.context)
				} else if (data && $.type(data) === "string" && data.startsWith("[") || t === "json" || t === "array") {
					if (schema) {
						schema._type = "json"
					}
					ds = this.context._processJsonResponse(JSON.parse(data), this.context)
				} else if (data && $.type(data) === "string" && data.startsWith("{") || t === "json") {
					if (schema) {
						schema._type = "json"
					}
					ds = this.context._processJsonResponse(JSON.parse(data), this.context)
				} else if ($.isXMLDoc(data)) {
					if (schema) {
						schema._type = "xml"
					}
					ds = this.context._processXmlResponse(data, true, this.context)
				} else if (data !== "" && data !== null) {
					throw new Error($.ig.DataSourceLocale.locale.errorUnrecognizedResponseType)
				}
			}
			if (returnString) {
				if (!(this.context.settings.paging && this.context.settings.paging.enabled && this.context.settings.paging.appendPage)) {
					this.context._data = ds
				}
				this.context._alreadySet = true
			}
			return ds
		}, _successCallback: function (data) {
			var x, len = data ? data.length : 0;
			if ((data === undefined || data === null) && !this._alreadySet) {
				this._data = [];
				this._dataView = []
			} else {
				if (this._data.length >= 0 && this.settings.paging && this.settings.paging.enabled && this.settings.paging.appendPage) {
					for (x = 0; x < len; ++x) {
						this._data[this._data.length] = data[x]
					}
				} else {
					if (this._alreadySet) {
						this._dataView = this._data
					} else {
						this._data = data;
						this._dataView = data
					}
				}
			}
			this._alreadySet = false;
			this._populateTransformedData();
			this._isPagingReq = false;
			this._isFilteringReq = false;
			this._isSortingReq = false;
			this._isSummariesReq = false
		}, _errorCallback: function (req, status, error) {
			var f = this._customCallback || this.settings.callback, errmsg, statusMsg;
			this._isPagingReq = false;
			this._isFilteringReq = false;
			this._isSortingReq = false;
			this._isSummariesReq = false;
			if (req && req.status && req.statusText) {
				statusMsg = " ( " + req.status + " " + req.statusText + " ) ";
				if (req.status === 200 && error !== undefined) {
					statusMsg = " ( " + (error.message || error) + " ) "
				}
			} else if (status !== null) {
				statusMsg = " ( " + status + " ) "
			} else if (error !== undefined) {
				statusMsg = " ( " + (error.message || error) + " ) "
			}
			errmsg = $.ig.DataSourceLocale.locale.errorRemoteRequest + statusMsg;
			if (f && this._callee) {
				f.apply(this._callee, [false, errmsg, req, this])
			} else if (f) {
				f(false, errmsg, req, this)
			}
		}, _completeCallback: function () {
			var f, callee, s = this.settings.sorting, p = this.settings.paging, filtering = this.settings.filtering;
			if (filtering.type === "local" && filtering.defaultFields.length > 0) {
				this.filter(filtering.defaultFields)
			}
			if (s.type === "local" && s.defaultFields.length > 0) {
				this.sort(s.defaultFields, s.defaultDirection)
			}
			if (p.enabled && p.type === "local") {
				this._page()
			}
			this._internalDataBound(true);
			f = this._customCallback || this.settings.callback;
			callee = this._callee || this.settings.callee;
			if (f && callee) {
				f.apply(callee, [true, "", this])
			} else if (f) {
				f(true, "", this)
			}
		}, _processRequest: function (options) {
			var o, s;
			if (this.settings.responseDataType === "jsonp") {
				o = {
					dataType: "jsonp",
					type: "GET",
					url: options.url,
					data: options.data,
					success: $.proxy(this._jsonpFilter, this),
					error: $.proxy(this._errorCallback, this)
				};
				s = this.settings;
				if (s.jsonp !== undefined && s.jsonp !== null) {
					o.jsonp = this.settings.jsonp
				}
				if (s.jsonpCallback !== undefined) {
					o.jsonpCallback = this.settings.jsonpCallback
				}
				this._ajaxRequest = $.ajax(o)
			} else {
				this._ajaxRequest = $.ajax(options)
			}
		}, _jsonpFilter: function (data) {
			var resp, x;
			this.context = this;
			resp = this._dataFilter(data, "json");
			if (!resp.length && $.type(resp) === "object") {
				resp = [resp]
			}
			if (this._data.length >= 0 && this.settings.paging && this.settings.paging.enabled && this.settings.paging.appendPage) {
				for (x = 0; x < resp.length; ++x) {
					this._data[this._data.length] = resp[x]
				}
			} else {
				this._data = resp;
				this._dataView = resp
			}
			this._populateTransformedData();
			this._completeCallback()
		}, _processJsonResponse: function (data, context) {
			var ds, schema = context.schema(), resKey, resPath, i;
			if (this._responseData) {
				this._responseData(data)
			}
			if (data.Metadata) {
				this._metadata = data.Metadata
			}
			if (schema && schema.fields && schema.fields().length > 0 && this.settings.localSchemaTransform) {
				ds = schema.transform(data)
			} else {
				resKey = context.settings.responseDataKey;
				if (resKey !== null && resKey !== undefined) {
					resPath = resKey.split(".");
					if (resPath.length > 0) {
						ds = data;
						for (i = 0; i < resPath.length; i++) {
							ds = ds[resPath[i]]
						}
						if (typeof ds === "string") {
							ds = JSON.parse(ds)
						}
					} else {
						ds = data
					}
				} else {
					ds = data
				}
			}
			if (context._isPagingReq || context._isFilteringReq) {
				this.totalRecordsCount(null, this.settings.responseTotalRecCountKey, data, context)
			}
			this.summariesResponse(this.settings.summaries.summariesResponseKey, data);
			return ds
		}, _processXmlResponse: function (data, isParsed, context) {
			var ds, schema = context.schema(), tmpSchema, resKey;
			if (schema && schema.fields && schema.fields().length > 0) {
				ds = this.settings.localSchemaTransform ? schema.transform(data) : data
			} else {
				resKey = context.settings.responseDataKey;
				if (resKey && resKey !== "") {
					tmpSchema = new $.ig.DataSchema;
					ds = context._xmlToArray(tmpSchema._findXmlRecordsRoot(data, resKey))
				} else {
					ds = context._xmlToArray(data)
				}
			}
			return ds
		}, _xmlToArray: function (data) {
			var ds = [], root = data, i, r, j, name, val, o;
			o = window.ActiveXObject;
			if (data && data.childNodes && data.childNodes.length === 1) {
				root = data.childNodes[0]
			}
			for (i = 0; i < root.childNodes.length; i++) {
				r = root.childNodes[i];
				ds[i] = [];
				for (j = 0; j < r.childNodes.length; j++) {
					name = o === undefined ? r.childNodes[j].localName : r.childNodes[j].baseName;
					val = o === undefined ? r.childNodes[j].textContent : r.childNodes[j].text;
					ds[i][name] = val
				}
			}
			return ds
		}, _encodeUrl: function () {
			var props = this.settings, sParams = {}, fParams = {}, pParams = {}, params, selParams = {}, sumParams = {},
				extraParams = {}, pkParams = {}, noCancel = true;
			params = {
				sortingParams: sParams,
				filteringParams: fParams,
				pagingParams: pParams,
				selectParams: selParams,
				summariesParams: sumParams,
				extraParams: extraParams,
				pkParams: pkParams
			};
			if ($.isFunction(props.urlParamsEncoding)) {
				noCancel = props.urlParamsEncoding(this, params)
			}
			if (noCancel) {
				this._encodeSelectParams(params);
				this._encodeSortingParams(params);
				this._encodeFilteringParams(params);
				this._encodePagingParams(params);
				this._encodeSummariesParams(params);
				this._encodePkParams(params);
				if ($.isFunction(this.settings.encodeExtraParams)) {
					this.settings.encodeExtraParams(this, params)
				}
				if ($.isFunction(props.urlParamsEncoded)) {
					props.urlParamsEncoded(this, params)
				}
			}
			return $.extend(true, {}, params.sortingParams, params.filteringParams, params.pagingParams, params.selectParams, params.summariesParams, params.extraParams, params.pkParams)
		}, _encodePkParams: function (params) {
			var p = this.settings.paging, s = this.settings.sorting, f = this.settings.filtering,
				sm = this.settings.summaries, pk = this._schema ? this._schema._pk : null;
			if (pk && (p.enabled && p.type === "remote" || s.type === "remote" || f.type === "remote" || sm.type === "remote")) {
				params.pkParams.pk = pk
			}
		}, _encodeSelectParams: function (params) {
			var selParams = params.selectParams, i;
			if (!this.settings.localSchemaTransform && this.schema() && this.schema().fields().length > 0) {
				selParams.$select = "";
				for (i = 0; i < this.schema().fields().length; i++) {
					if (i !== 0) {
						selParams.$select += ","
					}
					selParams.$select += this.schema().fields()[i].name
				}
			} else if (!this.settings.localSchemaTransform && this.schema() && this.schema().fields().length === 0) {
				selParams.$select = "*"
			}
		}, _encodePagingParams: function (params) {
			var p = this.settings.paging;
			if (p.enabled && p.type === "remote") {
				this._isPagingReq = true;
				if (p.pageIndexUrlKey !== null && p.pageSizeUrlKey !== null) {
					params.pagingParams[p.pageIndexUrlKey] = this.pageIndex();
					params.pagingParams[p.pageSizeUrlKey] = this.pageSize()
				} else {
					params.pagingParams.$skip = this.pageIndex() * this.pageSize();
					params.pagingParams.$top = this.pageSize();
					params.pagingParams.$inlinecount = "allpages";
					if (this.settings.responseTotalRecCountKey === null) {
						this.settings.responseTotalRecCountKey = "d.__count"
					}
				}
			}
		}, _encodeSortingParams: function (params) {
			var s = this.settings.sorting, tmpdir, i, sfields, url, urlQS, hlayout = null;
			if (s.type === "remote") {
				if (s.exprString) {
					sfields = this._parseSortExpressions(s.exprString)
				} else {
					sfields = s.expressions
				}
				this._isSortingReq = true;
				for (i = 0; i < sfields.length; i++) {
					if (sfields[i].layout) {
						hlayout = sfields[i].layout
					}
					if (s.sortUrlAscValueKey !== null && s.sortUrlDescValueKey !== null && s.sortUrlKey !== null) {
						tmpdir = sfields[i].dir && sfields[i].dir.toLowerCase().startsWith("asc") ? s.sortUrlAscValueKey : s.sortUrlDescValueKey;
						params.sortingParams[s.sortUrlKey + "(" + sfields[i].fieldName + ")"] = tmpdir
					} else {
						if (params.sortingParams.$orderby === undefined) {
							params.sortingParams.$orderby = ""
						}
						params.sortingParams.$orderby = params.sortingParams.$orderby + sfields[i].fieldName + " " + sfields[i].dir.toLowerCase();
						if (i < sfields.length - 1) {
							params.sortingParams.$orderby += ","
						}
					}
				}
				if (hlayout) {
					url = this.settings.dataSource;
					if (url && $.type(url) === "string" && url.indexOf("layout=" + hlayout) >= 0) {
						url = url.substr(url.indexOf("?") + 1);
						urlQS = url.split("&");
						for (i = 0; i < urlQS.length; i++) {
							if (urlQS[i].indexOf("layout=") >= 0) {
								if (urlQS[i].replace("layout=", "") === hlayout) {
									hlayout = null
								}
								break
							}
						}
					}
					if (hlayout) {
						params.sortingParams.layout = hlayout
					}
				}
			}
		}, _encodeFilteringParams: function (params) {
			var f = this.settings.filtering, ffields, i, key, exprNotReq, cond, d, day, month, year, curDate, expr,
				fieldName, logic = "and";
			if (f.type === "remote") {
				if (f.exprString) {
					ffields = this._parseFilterExprString(f.exprString)
				} else {
					ffields = f.expressions
				}
				for (i = 0; i < ffields.length; i++) {
					this._isFilteringReq = true;
					cond = ffields[i].cond;
					exprNotReq = this._isFilteringExprNotReq(cond);
					if (f.filterExprUrlKey !== null) {
						key = f.filterExprUrlKey + "(" + ffields[i].fieldName + ")";
						if ($.type(ffields[i].expr) === "date") {
							d = Date.UTC(ffields[i].expr.getFullYear(), ffields[i].expr.getMonth(), ffields[i].expr.getDate(), ffields[i].expr.getHours(), ffields[i].expr.getMinutes())
						} else {
							d = ffields[i].expr
						}
						if (params.filteringParams[key] === undefined) {
							params.filteringParams[key] = ffields[i].cond + "(" + (exprNotReq ? "" : d) + ")"
						} else {
							params.filteringParams[key] = params.filteringParams[key] + "," + ffields[i].cond + "(" + (exprNotReq ? "" : d) + ")"
						}
					} else {
						if (params.filteringParams.$filter === undefined) {
							params.filteringParams.$filter = ""
						}
						fieldName = ffields[i].fieldName;
						expr = ffields[i].expr;
						if ($.type(expr) === "string") {
							if (!f.caseSensitive) {
								fieldName = "tolower(" + fieldName + ")";
								expr = expr.toLowerCase()
							}
							expr = expr.replace(/\'/g, "''")
						}
						if (ffields[i].cond === "startsWith") {
							params.filteringParams.$filter += "startswith(" + fieldName + "," + "'" + expr + "') eq true"
						} else if (ffields[i].cond === "endsWith") {
							params.filteringParams.$filter += "endswith(" + fieldName + "," + "'" + expr + "') eq true"
						} else if (ffields[i].cond === "contains") {
							params.filteringParams.$filter += "indexof(" + fieldName + "," + "'" + expr + "') ge 0"
						} else if (ffields[i].cond === "doesNotContain") {
							params.filteringParams.$filter += "indexof(" + fieldName + "," + "'" + expr + "') eq -1"
						} else if (ffields[i].cond === "equals") {
							if ($.type(ffields[i].expr) === "string") {
								params.filteringParams.$filter += fieldName + " eq " + "'" + expr + "'"
							} else {
								params.filteringParams.$filter += ffields[i].fieldName + " eq " + ffields[i].expr
							}
						} else if (ffields[i].cond === "true") {
							params.filteringParams.$filter += ffields[i].fieldName + " eq true"
						} else if (ffields[i].cond === "false") {
							params.filteringParams.$filter += ffields[i].fieldName + " eq false"
						} else if (ffields[i].cond === "doesNotEqual") {
							if ($.type(ffields[i].expr) === "string") {
								params.filteringParams.$filter += fieldName + " ne " + "'" + expr + "'"
							} else {
								params.filteringParams.$filter += ffields[i].fieldName + " ne " + ffields[i].expr
							}
						} else if (ffields[i].cond === "greaterThan") {
							params.filteringParams.$filter += ffields[i].fieldName + " gt " + ffields[i].expr
						} else if (ffields[i].cond === "lessThan") {
							params.filteringParams.$filter += ffields[i].fieldName + " lt " + ffields[i].expr
						} else if (ffields[i].cond === "greaterThanOrEqualTo") {
							params.filteringParams.$filter += ffields[i].fieldName + " ge " + ffields[i].expr
						} else if (ffields[i].cond === "lessThanOrEqualTo") {
							params.filteringParams.$filter += ffields[i].fieldName + " le " + ffields[i].expr
						} else if (ffields[i].cond === "null") {
							params.filteringParams.$filter += ffields[i].fieldName + " eq null"
						} else if (ffields[i].cond === "notNull") {
							params.filteringParams.$filter += ffields[i].fieldName + " ne null"
						} else if (ffields[i].cond === "empty") {
							params.filteringParams.$filter += "length(" + ffields[i].fieldName + ") eq 0"
						} else if (ffields[i].cond === "notEmpty") {
							params.filteringParams.$filter += "length(" + ffields[i].fieldName + ") gt 0"
						} else if (ffields[i].cond === "on") {
							expr = this._parser.toDate(ffields[i].expr);
							year = expr.getFullYear();
							month = expr.getMonth() + 1;
							day = expr.getDate();
							params.filteringParams.$filter += "day(" + ffields[i].fieldName + ") eq " + day + " and ";
							params.filteringParams.$filter += "month(" + ffields[i].fieldName + ") eq " + month + " and ";
							params.filteringParams.$filter += "year(" + ffields[i].fieldName + ") eq " + year
						} else if (ffields[i].cond === "notOn") {
							expr = this._parser.toDate(ffields[i].expr);
							year = expr.getFullYear();
							month = expr.getMonth() + 1;
							day = expr.getDate();
							params.filteringParams.$filter += "day(" + ffields[i].fieldName + ") ne " + day + " or ";
							params.filteringParams.$filter += "month(" + ffields[i].fieldName + ") ne " + month + " or ";
							params.filteringParams.$filter += "year(" + ffields[i].fieldName + ") ne " + year
						} else if (ffields[i].cond === "after") {
							expr = this._parser.toDate(ffields[i].expr);
							params.filteringParams.$filter += ffields[i].fieldName + " gt DateTime'" + $.ig.formatter(expr, "date", "yyyy-MM-ddT23:59:59") + "'"
						} else if (ffields[i].cond === "before") {
							expr = this._parser.toDate(ffields[i].expr);
							params.filteringParams.$filter += ffields[i].fieldName + " lt DateTime'" + $.ig.formatter(expr, "date", "yyyy-MM-dd") + "'"
						} else if (ffields[i].cond === "today") {
							expr = this._parser.toDate(ffields[i].expr);
							year = expr.getFullYear();
							month = expr.getMonth() + 1;
							day = expr.getDate();
							params.filteringParams.$filter += "day(" + ffields[i].fieldName + ") eq " + day + " and ";
							params.filteringParams.$filter += "month(" + ffields[i].fieldName + ") eq " + month + " and ";
							params.filteringParams.$filter += "year(" + ffields[i].fieldName + ") eq " + year
						} else if (ffields[i].cond === "yesterday") {
							expr = this._parser.toDate(ffields[i].expr);
							year = expr.getFullYear();
							month = expr.getMonth() + 1;
							day = expr.getDate();
							params.filteringParams.$filter += "day(" + ffields[i].fieldName + ") eq " + day + " and ";
							params.filteringParams.$filter += "month(" + ffields[i].fieldName + ") eq " + month + " and ";
							params.filteringParams.$filter += "year(" + ffields[i].fieldName + ") eq " + year
						} else if (ffields[i].cond === "thisMonth") {
							curDate = new Date;
							month = curDate.getMonth() + 1;
							year = curDate.getFullYear();
							params.filteringParams.$filter += "month(" + ffields[i].fieldName + ") eq " + month + " and ";
							params.filteringParams.$filter += "year(" + ffields[i].fieldName + ") eq " + year
						} else if (ffields[i].cond === "lastMonth") {
							curDate = new Date;
							month = curDate.getMonth() + 1;
							year = curDate.getFullYear();
							if (month === 1) {
								month = 12;
								year--
							} else {
								month--
							}
							params.filteringParams.$filter += "month(" + ffields[i].fieldName + ") eq " + month + " and ";
							params.filteringParams.$filter += "year(" + ffields[i].fieldName + ") eq " + year
						} else if (ffields[i].cond === "nextMonth") {
							curDate = new Date;
							month = curDate.getMonth() + 1;
							year = curDate.getFullYear();
							if (month === 12) {
								month = 1;
								year++
							} else {
								month++
							}
							params.filteringParams.$filter += "month(" + ffields[i].fieldName + ") eq " + month + " and ";
							params.filteringParams.$filter += "year(" + ffields[i].fieldName + ") eq " + year
						} else if (ffields[i].cond === "thisYear") {
							curDate = new Date;
							year = curDate.getFullYear();
							params.filteringParams.$filter += "year(" + ffields[i].fieldName + ") eq " + year
						} else if (ffields[i].cond === "lastYear") {
							curDate = new Date;
							year = curDate.getFullYear() - 1;
							params.filteringParams.$filter += "year(" + ffields[i].fieldName + ") eq " + year
						} else if (ffields[i].cond === "nextYear") {
							curDate = new Date;
							year = curDate.getFullYear() + 1;
							params.filteringParams.$filter += "year(" + ffields[i].fieldName + ") eq " + year
						}
						logic = "and";
						if (ffields[i].logic && ffields[i].logic.toLowerCase() === "or") {
							logic = "or"
						}
						if (i < ffields.length - 1) {
							params.filteringParams.$filter += " " + logic + " "
						}
					}
				}
				if (f.filterLogicUrlKey !== null && ffields.length > 0) {
					params.filteringParams[f.filterLogicUrlKey] = ffields[0].logic
				}
			}
		}, _encodeSummariesParams: function (params) {
			var i, j, s = this.settings.summaries, cs = s.columnSettings, methodsStr, csLength = cs.length;
			if (s.type === "remote") {
				if (!csLength && s.calculateAll) {
					params.summariesParams[s.summaryExprUrlKey + "(all)"] = "*"
				}
				for (i = 0; i < csLength; i++) {
					methodsStr = "";
					if (cs[i].summaryOperands === undefined || cs[i].summaryOperands === null) {
						continue
					}
					for (j = 0; j < cs[i].summaryOperands.length; j++) {
						if (cs[i].summaryOperands[j].active === true || cs[i].summaryOperands[j].active === 1) {
							methodsStr += cs[i].summaryOperands[j].type + ","
						}
					}
					if (methodsStr !== "") {
						params.summariesParams[s.summaryExprUrlKey + "(" + cs[i].columnKey + ")"] = methodsStr.slice(0, -1)
					}
				}
			}
		}, filteredData: function () {
			return this._filteredData
		}, _page: function (keepRecords) {
			var count = 0, startIndex, endIndex, i = 0;
			if (keepRecords === undefined) {
				keepRecords = false
			}
			if (keepRecords) {
				count = this._dataView.length
			} else {
				this._dataView = []
			}
			if (!this._filter) {
				startIndex = this.pageIndex() * this.pageSize();
				if (startIndex >= this._data.length) {
					this.settings.paging.pageIndex = 0;
					startIndex = this.pageIndex() * this.pageSize()
				}
				endIndex = startIndex + this.pageSize() >= this._data.length ? this._data.length : startIndex + this.pageSize();
				for (i = startIndex; i < endIndex; i++) {
					this._dataView[count++] = this._data[i]
				}
			} else {
				startIndex = this.pageIndex() * this.pageSize();
				if (this.persistedPageIndex() > 0 && startIndex >= this._filteredData.length) {
					this.settings.paging.pageIndex = 0;
					startIndex = this.pageIndex() * this.pageSize()
				}
				endIndex = startIndex + this.pageSize() >= this._filteredData.length ? this._filteredData.length : startIndex + this.pageSize();
				for (i = startIndex; i < endIndex; i++) {
					this._dataView[count++] = this._filteredData[i]
				}
			}
		}, _compareValues: function (x, y) {
			if ((x === null || x === undefined) && (y === null || y === undefined)) {
				return 0
			}
			if ((x === null || x === undefined) && y !== null && y !== undefined) {
				return -1
			}
			if (x !== null && x !== undefined && (y === null || y === undefined)) {
				return 1
			}
			return x > y ? 1 : x < y ? -1 : 0
		}, sort: function (fields, direction) {
			var s = this.settings.sorting, schema, sortF, convertFunc, p = this.settings.paging, data,
				resetPaging = false, settings = this.settings, compareValFunc = this._compareValues, i, self = this;
			if (fields === undefined || fields === null) {
				throw new Error($.ig.DataSourceLocale.locale.noSortingFields)
			}
			sortF = function (fields, schema, reverse, convertf) {
				reverse = reverse ? -1 : 1;
				return function (obj1, obj2) {
					var i, f, arr1 = [], arr2 = [], a, b, recordsData, recordsDataReverse;
					for (i = 0; i < fields.length; i++) {
						if (fields[i].layout && (settings.key && settings.key !== fields[i].layout || !settings.key)) {
							continue
						}
						f = fields[i];
						compareValFunc = f.compareFunc;
						if (f.fieldIndex >= 0) {
							f.fieldName = f.fieldIndex
						}
						a = self.getCellValue(f.fieldName, obj1);
						b = self.getCellValue(f.fieldName, obj2);
						recordsData = {fieldName: f.fieldName, recordX: obj1, recordY: obj2};
						recordsDataReverse = {fieldName: f.fieldName, recordX: obj2, recordY: obj1};
						if (convertf !== undefined) {
							a = convertf(a, f.fieldName);
							b = convertf(b, f.fieldName)
						}
						if (s.caseSensitive === false) {
							if (a !== undefined && a !== null && a.toLowerCase) {
								a = a.toLowerCase()
							}
							if (b !== undefined && b !== null && b.toLowerCase) {
								b = b.toLowerCase()
							}
						}
						if (f.dir !== undefined && f.dir !== null) {
							reverse = f.dir.toLowerCase().startsWith("desc");
							reverse = reverse ? -1 : 1
						} else if (direction !== undefined && direction !== null && direction !== "") {
							reverse = direction.toLowerCase().startsWith("desc");
							reverse = reverse ? -1 : 1
						}
						if (fields.length === 1) {
							arr1 = reverse * compareValFunc(a, b, recordsData);
							arr2 = reverse * compareValFunc(b, a, recordsDataReverse)
						} else {
							if (reverse === -1) {
								arr1.push(-compareValFunc(a, b, recordsData));
								arr2.push(-compareValFunc(b, a, recordsDataReverse))
							} else {
								arr1.push(compareValFunc(a, b, recordsData));
								arr2.push(compareValFunc(b, a, recordsDataReverse))
							}
						}
					}
					if (arr1 < arr2) {
						return -1
					}
					if (arr1 > arr2) {
						return 1
					}
					return 0
				}
			};
			if (s.applyToAllData && s.type === "local") {
				if (this._filter && (p.type === "local" && p.enabled === true || p.enabled === false || p.type === "remote" && p.enabled === true && this.settings.filtering.type === "local")) {
					data = this._filteredData
				} else {
					data = this.data()
				}
				resetPaging = true
			} else {
				data = this.dataView()
			}
			if ($.type(s.customFunc) === "function") {
				data = s.customFunc(data, fields, direction)
			} else {
				schema = this.settings.schema;
				if (!direction) {
					direction = ""
				}
				if ($.type(s.compareFunc) === "function") {
					sortF = s.compareFunc
				}
				if ($.isFunction(s.customConvertFunc)) {
					convertFunc = s.customConvertFunc
				}
				if ($.type(fields) === "string") {
					fields = this._parseSortExpressions(fields)
				}
				if (fields.length > 0) {
					for (i = 0; i < fields.length; i++) {
						if (fields[i].compareFunc) {
							if (typeof fields[i].compareFunc === "string" && typeof window[fields[i].compareFunc] === "function") {
								fields[i].compareFunc = window[fields[i].compareFunc]
							}
						}
						if (typeof fields[i].compareFunc !== "function") {
							fields[i].compareFunc = this._compareValues
						}
					}
					data = data.sort(sortF(fields, schema, direction.toLowerCase().startsWith("asc") ? false : true, convertFunc));
					this._allDataSorted = data === this.data()
				}
			}
			if (resetPaging && p.type === "local") {
				if (!this._filter) {
					this._data = data
				} else {
					this._filteredData = data
				}
				this._page()
			} else {
				this._dataView = data
			}
			this._populateTransformedData(data);
			return this
		}, clearLocalSorting: function () {
			var s = this.settings.sorting, p = this.settings.paging, data, resetPaging = false;
			if (s.applyToAllData && s.type === "local") {
				if (this._filter && (p.type === "local" && p.enabled === true || p.enabled === false)) {
					data = this._filteredData
				} else {
					data = this.data()
				}
				resetPaging = true
			} else {
				data = this.dataView()
			}
			if (resetPaging && p.type === "local") {
				if (!this._filter) {
					this._data = data
				} else {
					this._filteredData = data
				}
				this._page()
			} else {
				this._dataView = data
			}
			this._populateTransformedData();
			return this
		}, _parseSortExpressions: function (s) {
			var fields = [], tmp, tmp2, i;
			tmp = s.split(",");
			for (i = 0; i < tmp.length; i++) {
				fields[i] = {};
				tmp2 = $.trim(tmp[i]).split(" ");
				fields[i].fieldName = tmp2[0];
				fields[i].dir = tmp2[1]
			}
			return fields
		}, filter: function (fieldExpressions, boolLogic, keepFilterState, fieldExpressionsOnStrings) {
			var i, j, expr = null, count = 0, skipRec = false, data, t, k, schema, fields, tmpbool, resetPaging,
				allFieldsExpr, stringVal, f = this.settings.filtering, p = this.settings.paging,
				s = this.settings.sorting;
			schema = this.schema();
			if (schema === null || schema === undefined) {
				throw new Error($.ig.DataSourceLocale.locale.filteringNoSchema)
			}
			if ($.type(fieldExpressions) === "string") {
				expr = fieldExpressions
			}
			if ($.type(fieldExpressionsOnStrings) === "string") {
				allFieldsExpr = fieldExpressionsOnStrings
			} else if ($.type(fieldExpressionsOnStrings) === "undefined") {
				fieldExpressionsOnStrings = []
			}
			if ($.type(fieldExpressions) === "array" && fieldExpressions.length === 0 && $.type(fieldExpressionsOnStrings) === "array" && fieldExpressionsOnStrings.length === 0) {
				return
			}
			if (f.applyToAllData && f.type === "local") {
				data = this.data();
				resetPaging = true
			} else {
				if (this._cachedDataView && this._cachedDataView.length > 0) {
					data = this._cachedDataView
				} else {
					this._cachedDataView = $.merge([], this.dataView());
					data = this._cachedDataView
				}
			}
			if ($.type(f.customFunc) === "function") {
				data = f.customFunc(fieldExpressions, data);
				this._filteredData = data;
				this._dataView = []
			} else {
				this._dataView = [];
				this._filteredData = [];
				for (i = 0; i < data.length; i++) {
					skipRec = false;
					if (expr) {
						fieldExpressions = this._parseFilterExprString(expr)
					}
					if (allFieldsExpr) {
						fieldExpressionsOnStrings = this._parseFilterExprString(allFieldsExpr)
					}
					for (j = 0; j < fieldExpressions.length; j++) {
						fields = schema.fields();
						if (fieldExpressions[j].fieldIndex) {
							if (fieldExpressions[j].fieldIndex < fields.length) {
								t = fields[fieldExpressions[j].fieldIndex].type
							}
							skipRec = !this._findMatch(data[i][fieldExpressions[j].fieldIndex], fieldExpressions[j].expr, t, !f.caseSensitive, fieldExpressions[j].cond, fieldExpressions[j].preciseDateFormat, fieldExpressions[j].fieldName, data[i])
						} else {
							if (fieldExpressions[j].dataType !== undefined && fieldExpressions[j].dataType !== null) {
								t = fieldExpressions[j].dataType
							} else {
								t = this._getFieldTypeFromSchema(fieldExpressions[j].fieldName)
							}
							skipRec = !this._findMatch(data[i][fieldExpressions[j].fieldName], fieldExpressions[j].expr, t, !f.caseSensitive, fieldExpressions[j].cond, fieldExpressions[j].preciseDateFormat, fieldExpressions[j].fieldName, data[i])
						}
						tmpbool = fieldExpressions[j].logic !== null && fieldExpressions[j].logic !== undefined && (fieldExpressions[j].logic.toLowerCase() === "or" || fieldExpressions[j].logic.toLowerCase() === "and") ? fieldExpressions[j].logic : boolLogic;
						if (tmpbool === undefined || tmpbool === null || $.type(tmpbool) !== "string") {
							tmpbool = "and"
						}
						if (skipRec && tmpbool.toLowerCase() === "and") {
							break
						} else if (!skipRec && tmpbool.toLowerCase() === "or") {
							break
						}
					}
					if (!skipRec) {
						for (j = 0; j < fieldExpressionsOnStrings.length; j++) {
							fields = schema.fields();
							if (fieldExpressionsOnStrings[j].fieldIndex) {
								if (fieldExpressionsOnStrings[j].fieldIndex < fields.length) {
									t = fields[fieldExpressionsOnStrings[j].fieldIndex].type
								}
								stringVal = data[i][fieldExpressionsOnStrings[j].fieldIndex] ? data[i][fieldExpressionsOnStrings[j].fieldIndex].toString() : "";
								skipRec = !this._findMatch(stringVal, fieldExpressionsOnStrings[j].expr, "string", !f.caseSensitive, fieldExpressionsOnStrings[j].cond, undefined, fieldExpressionsOnStrings[j].fieldName, data[i])
							} else {
								for (k = 0; k < fields.length; k++) {
									if (fields[k].name === fieldExpressionsOnStrings[j].fieldName) {
										t = fields[k].type;
										break
									}
								}
								stringVal = data[i][fieldExpressionsOnStrings[j].fieldName] !== null && data[i][fieldExpressionsOnStrings[j].fieldName] !== undefined ? data[i][fieldExpressionsOnStrings[j].fieldName].toString() : "";
								skipRec = !this._findMatch(stringVal, fieldExpressionsOnStrings[j].expr, "string", !f.caseSensitive, fieldExpressionsOnStrings[j].cond, undefined, fieldExpressionsOnStrings[j].fieldName, data[i])
							}
							tmpbool = fieldExpressionsOnStrings[j].logic !== null && fieldExpressionsOnStrings[j].logic !== undefined && (fieldExpressionsOnStrings[j].logic.toLowerCase() === "or" || fieldExpressionsOnStrings[j].logic.toLowerCase() === "and") ? fieldExpressionsOnStrings[j].logic : boolLogic;
							if (tmpbool === undefined || tmpbool === null || $.type(tmpbool) !== "string") {
								tmpbool = "and"
							}
							if (skipRec && tmpbool.toLowerCase() === "and") {
								break
							} else if (!skipRec && tmpbool.toLowerCase() === "or") {
								break
							}
						}
					}
					if (!skipRec) {
						this._filteredData[count++] = data[i]
					}
				}
			}
			this._filter = true;
			if (f.type === "local" && s.type === "local" && s.enabled && !s.sortingApplied && s.expressions.length > 0) {
				this.sort(s.expressions)
			}
			if (resetPaging && p.type === "local" && p.enabled === true) {
				if (this.persistedPageIndex() > 0) {
					this.settings.paging.pageIndex = this.persistedPageIndex()
				} else {
					this.settings.paging.pageIndex = 0
				}
				this.pageSizeDirty(true);
				this._page();
				this.persistedPageIndex(null)
			} else {
				for (i = 0; i < this._filteredData.length; i++) {
					this._dataView[i] = this._filteredData[i]
				}
			}
			this._populateTransformedData(this._filteredData);
			return this
		}, clearLocalFilter: function () {
			var i, data, resetPaging, f = this.settings.filtering, p = this.settings.paging, s = this.settings.sorting;
			if (f.applyToAllData && f.type === "local") {
				data = this.data();
				resetPaging = true
			} else {
				if (this._cachedDataView && this._cachedDataView.length > 0) {
					data = this._cachedDataView
				} else {
					this._cachedDataView = $.merge([], this.dataView());
					data = this._cachedDataView
				}
			}
			this._dataView = [];
			this._filteredData = data;
			if (s.type === "local" && s.enabled && s.expressions.length > 0) {
				this.sort(s.expressions)
			}
			if (resetPaging && p.type === "local" && p.enabled === true) {
				this._filter = true;
				this.settings.paging.pageIndex = 0;
				this.pageSizeDirty(true);
				this._page()
			} else {
				if (p.enabled === false) {
					this._filter = true
				}
				for (i = 0; i < this._filteredData.length; i++) {
					this._dataView[i] = this._filteredData[i]
				}
			}
			this._populateTransformedData(this._filteredData);
			return this
		}, _parseFilterExprString: function (expr) {
			var exprs = $.trim(expr).split(/(?=AND+)|(?=OR+)/i), i, j, fields = [], tmp, tmp2, isInvalid = true;
			for (i = 0; i < exprs.length; i++) {
				fields[i] = {};
				tmp = $.trim(exprs[i]).split(/(?= \=+)|(?=<>+)|(?=>+)|(?=<+)|(?=LIKE+)|(?=NOT\WLIKE)+|(?=>\=+)|(?=<\=+)/);
				if ($.trim(exprs[i]).toLowerCase().startsWith("and")) {
					fields[i].logic = "AND"
				} else if ($.trim(exprs[i]).toLowerCase().startsWith("or")) {
					fields[i].logic = "OR"
				}
				if (i > 0 && (fields[i].logic === "AND" || fields[i].logic === "OR")) {
					fields[i - 1].logic = fields[i].logic
				}
				if (tmp[0].toLowerCase().startsWith("and") || tmp[0].toLowerCase().startsWith("or")) {
					fields[i].fieldName = $.trim(tmp[0].split(" ")[1])
				} else {
					fields[i].fieldName = $.trim(tmp[0])
				}
				tmp2 = $.trim(tmp[1]).split(" ");
				if (exprs[i].indexOf("<>") !== -1) {
					tmp2[0] = "<>";
					tmp2[1] = tmp[2].replace(">", "")
				}
				if (tmp2.length > 2) {
					for (j = 2; j < tmp2.length; j++) {
						tmp2[1] = tmp2[1] + " " + tmp2[j]
					}
					tmp2 = [tmp2[0], tmp2[1]]
				}
				if (tmp[1].startsWith("NOT")) {
					fields[i].expr = $.trim(tmp[2].replace("LIKE", ""))
				} else {
					fields[i].expr = tmp2[1]
				}
				for (j = 0; j < this.schema().schema.fields.length; j++) {
					if (this.schema().schema.fields[j].name === fields[i].fieldName) {
						isInvalid = false;
						break
					}
				}
				if (isInvalid) {
					throw new Error($.ig.DataSourceLocale.locale.fieldMismatch + fields[i].fieldName)
				}
				isInvalid = true;
				if (tmp2[0] === ">") {
					fields[i].cond = "greaterThan"
				} else if (tmp2[0] === "LIKE") {
					if (fields[i].expr.startsWith("%") && fields[i].expr.endsWith("%")) {
						fields[i].cond = "contains"
					} else if (fields[i].expr.endsWith("%")) {
						fields[i].cond = "startsWith"
					} else if (fields[i].expr.startsWith("%")) {
						fields[i].cond = "endsWith"
					} else {
						fields[i].cond = "equals"
					}
					fields[i].expr = fields[i].expr.replace(/%/g, "")
				} else if (tmp2[0] === "NOT LIKE" || tmp2[0] === "NOT") {
					if (fields[i].expr.startsWith("%") && fields[i].expr.endsWith("%")) {
						fields[i].cond = "doesNotContain"
					} else {
						fields[i].cond = "doesNotEqual"
					}
					fields[i].expr = fields[i].expr.replace(/%/g, "")
				} else if (tmp2[0] === "=") {
					fields[i].cond = "equals"
				} else if (tmp2[0] === "<>") {
					fields[i].cond = "doesNotEqual"
				} else if (tmp2[0] === "<") {
					fields[i].cond = "lessThan"
				} else if (tmp2[0] === "<=") {
					fields[i].cond = "lessThanOrEqualTo"
				} else if (tmp2[0] === ">=") {
					fields[i].cond = "greaterThanOrEqualTo"
				} else {
					throw new Error($.ig.DataSourceLocale.locale.unrecognizedCondition + expr)
				}
			}
			return fields
		}, _isFilteringExprNotReq: function (cond) {
			return cond === "false" || cond === "true" || cond === "today" || cond === "yesterday" || cond === "thisMonth" || cond === "lastMonth" || cond === "nextMonth" || cond === "thisYear" || cond === "lastYear" || cond === "nextYear" || cond === "null" || cond === "notNull" || cond === "empty" || cond === "notEmpty"
		}, _findMatch: function (val, expr, t, ignoreCase, cond, preciseDateFormat, colKey, rec) {
			var tmpExpr, custConds = this.settings.filtering.customConditions, f, func,
				exprNotReq = this._isFilteringExprNotReq(cond);
			val = this.getCellValue(colKey, rec);
			if ($.type(val) === "function") {
				val = val()
			}
			if (custConds && (f = custConds[cond] || custConds[colKey + "_" + cond])) {
				func = f.filterFunc;
				if ($.type(func) === "function") {
					f = func
				} else if (window[func] && typeof window[func] === "function") {
					f = window[func]
				} else {
					throw new Error($.ig.DataSourceLocale.locale.errorUnexpectedCustomFilterFunction)
				}
				return f(val, expr, t, ignoreCase, preciseDateFormat, colKey)
			}
			if (expr === "" && !exprNotReq) {
				return true
			}
			tmpExpr = $.trim(expr);
			if (t === "regexp" || t === "string" && tmpExpr.startsWith("/") && tmpExpr.endsWith("/")) {
				if (t === "regexp") {
					return this._findRegExpMatch(val, expr, false)
				}
				return this._findRegExpMatch(val, tmpExpr.substring(1, tmpExpr.length - 1), true)
			}
			if ($.type(val) === "date" && (t === undefined || t === null) || t === "date") {
				try {
					expr = this._parser.toDate(expr)
				} catch (ignore) {
				}
				return this._findDateMatch(val, expr, cond, preciseDateFormat)
			}
			if ($.type(val) === "boolean" && (t === undefined || t === null) || t === "boolean" || t === "bool") {
				return this._findBoolMatch(val, cond)
			}
			if ($.type(val) === "number" && (t === undefined || t === null) || t === "number") {
				return this._findNumericMatch(val, expr, cond)
			}
			return this._findStringMatch(val, expr, ignoreCase, cond)
		}, _findStringMatch: function (val, expr, ignoreCase, cond) {
			var localVal;
			if (val !== null && val !== undefined) {
				localVal = ignoreCase ? val.toString().toLowerCase() : val || ""
			} else {
				localVal = val
			}
			if (expr !== null && expr !== undefined) {
				expr = ignoreCase ? expr.toString().toLowerCase() : expr.toString()
			}
			if (cond === "startsWith") {
				return localVal !== null && localVal !== undefined && localVal.startsWith(expr)
			}
			if (cond === "endsWith") {
				return localVal !== null && localVal !== undefined && localVal.endsWith(expr)
			}
			if (cond === "contains") {
				return localVal !== null && localVal !== undefined && localVal.indexOf(expr) !== -1
			}
			if (cond === "doesNotContain") {
				return localVal !== null && localVal !== undefined && localVal.indexOf(expr) === -1
			}
			if (cond === "equals") {
				return localVal !== null && localVal !== undefined && localVal === expr
			}
			if (cond === "doesNotEqual") {
				return localVal !== null && localVal !== undefined && localVal !== expr
			}
			if (cond === "null") {
				return localVal === null
			}
			if (cond === "notNull") {
				return localVal !== null
			}
			if (cond === "empty") {
				return localVal === null || localVal === undefined || localVal.length === 0
			}
			if (cond === "notEmpty") {
				return localVal === null || localVal === undefined || localVal.length !== 0
			}
			throw new Error($.ig.DataSourceLocale.locale.errorUnrecognizedFilterCondition + cond)
		}, _findRegExpMatch: function (val, expr, str) {
			if (str) {
				return new RegExp(expr).test(val)
			}
			return val.match(expr)
		}, _findNumericMatch: function (val, expr, cond) {
			if ($.type(expr) !== "number") {
				expr = this._parser.toNumber(expr)
			}
			if (cond === "equals") {
				return val === expr
			}
			if (cond === "doesNotEqual") {
				return val !== expr
			}
			if (cond === "greaterThan") {
				return val > expr
			}
			if (cond === "lessThan") {
				return val < expr
			}
			if (cond === "greaterThanOrEqualTo") {
				return val >= expr
			}
			if (cond === "lessThanOrEqualTo") {
				return val <= expr
			}
			if (cond === "null") {
				return val === null
			}
			if (cond === "notNull") {
				return val !== null
			}
			if (cond === "empty") {
				return val === null || val === undefined || isNaN(val)
			}
			if (cond === "notEmpty") {
				return val !== null && val !== undefined && !isNaN(val)
			}
			throw new Error($.ig.DataSourceLocale.locale.errorUnrecognizedFilterCondition + cond)
		}, _findBoolMatch: function (val, cond) {
			if (cond === "true") {
				return val
			}
			if (cond === "false") {
				return !val
			}
			if (cond === "null") {
				return val === null
			}
			if (cond === "notNull") {
				return val !== null
			}
			if (cond === "empty") {
				return val === null || val === undefined
			}
			if (cond === "notEmpty") {
				return val !== null && val !== undefined
			}
			throw new Error($.ig.DataSourceLocale.locale.errorUnrecognizedFilterCondition + cond)
		}, _getDateParts: function (date) {
			if (!date || $.type(date) !== "date") {
				return null
			}
			var yrs, day, mdate, mins, hrs, month;
			if (this.settings.enableUTCDates) {
				yrs = date.getUTCFullYear();
				month = date.getUTCMonth();
				day = date.getUTCDay();
				mdate = date.getUTCDate();
				hrs = date.getUTCHours();
				mins = date.getUTCMinutes()
			} else {
				yrs = date.getFullYear();
				month = date.getMonth();
				day = date.getDay();
				mdate = date.getDate();
				hrs = date.getHours();
				mins = date.getMinutes()
			}
			return {year: yrs, month: month, day: day, mdate: mdate, hours: hrs, mins: mins}
		}, _findDateMatch: function (val, expr, cond, preciseDateFormat) {
			var day1, mins1, hs1, yrs1, day2, mins2, hs2, yrs2, month1, month2, eq, cur, yrs3, month3, mday1, mday2,
				mday3, yesterday, onEq, valDateParts, exprDateParts;
			if (val !== null && val !== undefined) {
				valDateParts = this._getDateParts(val);
				day1 = valDateParts.day;
				mday1 = valDateParts.mdate;
				mins1 = valDateParts.mins;
				hs1 = valDateParts.hours;
				yrs1 = valDateParts.year;
				month1 = valDateParts.month
			}
			if ($.type(expr) === "date") {
				exprDateParts = this._getDateParts(expr);
				day2 = exprDateParts.day;
				mday2 = exprDateParts.mdate;
				mins2 = exprDateParts.mins;
				hs2 = exprDateParts.hours;
				yrs2 = exprDateParts.year;
				month2 = exprDateParts.month
			} else {
				expr = new Date(expr)
			}
			cur = new Date;
			yesterday = new Date(cur.getTime());
			yesterday.setDate(yesterday.getDate() - 1);
			mday3 = cur.getDate();
			yrs3 = cur.getFullYear();
			month3 = cur.getMonth();
			eq = day1 === day2 && mins1 === mins2 && hs1 === hs2 && yrs1 === yrs2 && month1 === month2;
			if (cond === "equals") {
				return eq
			}
			if (cond === "doesNotEqual") {
				return !eq
			}
			if (cond === "before") {
				return val < expr
			}
			if (cond === "after") {
				return val > expr
			}
			if (cond === "today") {
				return mday1 === mday3 && month1 === month3 && yrs1 === yrs3
			}
			if (cond === "yesterday") {
				return yesterday.getDate() === mday1 && yesterday.getMonth() === month1 && yesterday.getFullYear() === yrs1
			}
			if (cond === "thisMonth") {
				return month1 === month3 && yrs1 === yrs3
			}
			if (cond === "lastMonth") {
				if (month3 === 0) {
					return month1 === 11 && yrs1 === yrs3 - 1
				}
				return month1 === month3 - 1 && yrs1 === yrs3
			}
			if (cond === "nextMonth") {
				if (month3 === 11) {
					return month1 === 0 && yrs1 === yrs3 + 1
				}
				return month1 === month3 + 1 && yrs1 === yrs3
			}
			if (cond === "thisYear") {
				return yrs1 === yrs3
			}
			if (cond === "lastYear") {
				return yrs1 === yrs3 - 1
			}
			if (cond === "nextYear") {
				return yrs1 === yrs3 + 1
			}
			if (cond === "on" || cond === "notOn") {
				onEq = yrs1 === yrs2 && month1 === month2 && mday1 === mday2;
				if (preciseDateFormat) {
					if (preciseDateFormat.indexOf("m") >= 0) {
						onEq = onEq && mins1 === mins2
					}
					if (preciseDateFormat.indexOf("h") >= 0 || preciseDateFormat.indexOf("H") >= 0) {
						onEq = onEq && hs1 === hs2
					}
					if (preciseDateFormat.indexOf("s") >= 0) {
						onEq = onEq && val.getSeconds() === expr.getSeconds()
					}
					if (preciseDateFormat.indexOf("f") >= 0) {
						onEq = onEq && val.getMilliseconds() === expr.getMilliseconds()
					}
				}
				if (cond === "on") {
					return onEq
				}
				return !onEq
			}
			if (cond === "null") {
				return val === null
			}
			if (cond === "notNull") {
				return val !== null
			}
			if (cond === "empty") {
				return val === null || val === undefined
			}
			if (cond === "notEmpty") {
				return val !== null && val !== undefined
			}
			throw new Error($.ig.DataSourceLocale.locale.errorUnrecognizedFilterCondition + cond)
		}, totalRecordsCount: function (count, key, dsObj, context) {
			var rec, totalRecPath, i;
			if (context !== undefined && context !== null) {
				if (key) {
					rec = dsObj;
					if (rec.hasOwnProperty(key)) {
						rec = rec[key]
					} else {
						totalRecPath = key.split(".");
						for (i = 0; i < totalRecPath.length; i++) {
							rec = rec[totalRecPath[i]]
						}
					}
					if (dsObj && rec !== undefined && rec !== null) {
						if ($.type(rec) === "number") {
							this._recCount = rec
						} else {
							this._recCount = parseInt(rec, 10)
						}
						this.hasTotalRecordsCount(true)
					} else {
						this.hasTotalRecordsCount(false)
					}
				} else {
					this.hasTotalRecordsCount(false)
				}
			} else if (count !== undefined && count !== null) {
				this._recCount = count
			}
			return this._recCount
		}, hasTotalRecordsCount: function (hasCount) {
			if (hasCount === undefined || hasCount === null) {
				return this._hasCount
			}
			this._hasCount = hasCount
		}, metadata: function (key) {
			if (key === null || key === undefined || key === "" || this._metadata === null || this._metadata === undefined) {
				return this._metadata
			}
			return this._metadata[key]
		}, totalLocalRecordsCount: function () {
			if (!this._filter) {
				return this._data.length
			}
			return this._dataView.length
		}, pageCount: function () {
			var c, realCount;
			if (!this._filter) {
				realCount = this.totalRecordsCount() > 0 ? this.totalRecordsCount() : this._data.length
			} else {
				realCount = this.totalRecordsCount() > 0 ? this.totalRecordsCount() : this._filteredData.length
			}
			c = Math.ceil(realCount / this.settings.paging.pageSize);
			return c === 0 ? 1 : c
		}, pageIndex: function (index) {
			if (index === undefined || index === null) {
				return this.settings.paging.pageIndex === undefined ? 0 : this.settings.paging.pageIndex
			}
			this.settings.paging.pageIndex = parseInt(index, 10);
			this._cachedDataView = null;
			if (this.settings.paging.type === "local") {
				this._page(this.settings.paging.appendPage);
				this._invokeCallback()
			} else {
				this.dataBind()
			}
			return this
		}, persistedPageIndex: function (value) {
			if (value === undefined) {
				return this.settings.paging._persistedPageIndex
			} else {
				this.settings.paging._persistedPageIndex = value
			}
		}, prevPage: function () {
			this.pageIndex(this.pageIndex() === 0 ? 0 : this.pageIndex() - 1);
			return this
		}, nextPage: function () {
			if (this.pageIndex() >= this.pageCount() - 1) {
				return this
			}
			this.pageIndex(this.pageIndex() + 1);
			return this
		}, pageSize: function (s) {
			if (s === undefined || s === null) {
				return this.settings.paging.pageSize
			}
			this.settings.paging.pageSize = parseInt(s, 10);
			if (this.settings.paging.appendPage) {
				this.settings.paging.pageIndex = 0;
				this._cachedDataView = null
			}
			if (this.settings.paging.type === "local") {
				this._page();
				this._invokeCallback()
			} else {
				this.dataBind()
			}
			return this
		}, pageSizeDirty: function (dirty) {
			if (dirty === undefined || dirty === null) {
				return this._dirty
			}
			this._dirty = dirty
		}, recordsForPage: function (p) {
			var d = [], si, ps, ei, i, c = 0;
			ps = this.pageSize();
			si = p * ps;
			ei = si + ps >= this._data.length ? this._data.length : si + ps;
			for (i = si; i < ei; i++) {
				d[c++] = this._data[i]
			}
			return d
		}, tableToObject: function (tableDOM) {
			try {
				var rows = $(tableDOM).children("tbody").children(), len, data, i, j;
				len = rows.length > 0 ? rows[0].cells.length : 0;
				data = [];
				for (i = 0; i < rows.length; i++) {
					data[i] = [];
					for (j = 0; j < len; j++) {
						data[i][j] = rows[i].cells[j].innerHTML
					}
				}
				return data
			} catch (e) {
				throw new Error($.ig.DataSourceLocale.locale.errorParsingHtmlTableNoSchema + e.message)
			}
		}, _validateTable: function (obj) {
			if (obj.length === 0) {
				throw new Error($.ig.DataSourceLocale.locale.errorTableWithIdNotFound + this.dataSource())
			} else {
				return obj[0]
			}
		}, stringToJSONObject: function (s) {
			var data = {};
			try {
				data = JSON.parse(s)
			} catch (e) {
				throw new Error($.ig.DataSourceLocale.locale.errorParsingJsonNoSchema + e.message)
			}
			return data
		}, stringToXmlObject: function (s) {
			var doc, parser;
			try {
				if (window.ActiveXObject) {
					doc = new ActiveXObject("Microsoft.XMLDOM");
					doc.async = "false";
					doc.loadXML(s)
				} else {
					parser = new DOMParser;
					doc = parser.parseFromString(s, "text/xml")
				}
			} catch (e) {
				throw new Error($.ig.DataSourceLocale.locale.errorParsingXmlNoSchema + e.message)
			}
			return doc
		}
	});
	$.ig.TypeParser = $.ig.TypeParser || Class.extend({
		toStr: function (obj) {
			return this.isNullOrUndefined(obj) ? "" : obj + this.empty()
		}, toDate: function (obj, pk, key) {
			if (this.isNullOrUndefined(obj) || obj === "" || $.type(obj) === "function") {
				return null
			}
			if ($.type(obj) === "date") {
				return obj
			}
			var d;
			if (obj.length && obj.indexOf("/Date(") !== -1) {
				if (this._serverOffsets === undefined || this._serverOffsets[pk] === undefined) {
					return new Date(parseInt(obj.replace("/Date(", "").replace(")/", ""), 10) + this._serverOffset)
				}
				if (this._serverOffsets[pk][key] !== undefined && this._serverOffsets[pk][key] !== null) {
					return new Date(parseInt(obj.replace("/Date(", "").replace(")/", ""), 10) + this._serverOffsets[pk][key])
				}
				return new Date(parseInt(obj.replace("/Date(", "").replace(")/", ""), 10))
			}
			d = new Date(obj);
			if (isNaN(d)) {
				d = $.ig.util.dateFromISO(obj)
			}
			return d
		}, toNumber: function (obj) {
			return this.isNullOrUndefined(obj) || $.type(obj) === "function" ? null : obj * this.num()
		}, toBool: function (obj) {
			var typeObj = $.type(obj);
			if (typeObj === "boolean") {
				return obj
			}
			if (this.isNullOrUndefined(obj) || typeObj === "function") {
				return false
			}
			if (obj === "1" || obj === 1 || typeObj === "string" && obj.toLowerCase() === "true") {
				return true
			}
			return false
		}, isNullOrUndefined: function (obj) {
			return obj === null || obj === undefined
		}, empty: function () {
			return ""
		}, num: function () {
			return 1
		}
	});
	$.ig.DataSchema = $.ig.DataSchema || Class.extend({
		schema: {
			fields: [{
				name: undefined,
				type: undefined,
				xpath: undefined,
				mapper: undefined
			}], searchField: null, outputResultsName: null
		}, init: function (type, options) {
			$.ig.DataSchema.prototype.schema.fields = [];
			if (options) {
				this.schema = $.extend(true, {}, $.ig.DataSchema.prototype.schema, options)
			}
			this._type = type;
			this._parser = new $.ig.TypeParser;
			this._parser._serverOffset = 0
		}, transform: function (data) {
			var ndata = [];
			switch (this._type) {
				case"array":
					ndata = this._arrays(data);
					break;
				case"json":
					ndata = this._json(data);
					break;
				case"xml":
					ndata = this._xml(data);
					break;
				case"htmlTableDom":
					ndata = this._table(data);
					break;
				case"htmlListDom":
					ndata = this._list(data);
					break;
				case"htmlSelectDom":
					ndata = this._select(data);
					break;
				case"singleRow":
					ndata = this._row(data);
					break;
				default:
					throw new Error("unknown data source type: " + this._type)
			}
			return ndata
		}, _setResKey: function (resKey, out) {
			if (!this.isEmpty(resKey)) {
				out[resKey] = [];
				return out[resKey]
			}
			return out
		}, _convertType: function (t, obj, pk, key) {
			if (t === "string") {
				return this._parser.toStr(obj)
			}
			if (t === "date") {
				return this._parser.toDate(obj, pk, key)
			}
			if (t === "number") {
				return this._parser.toNumber(obj)
			}
			if (t === "boolean" || t === "bool") {
				return this._parser.toBool(obj)
			}
			return obj
		}, _val: function (field, val, results, i, rec) {
			var t = field.type, j = null;
			if (!this.isEmpty(t)) {
				if (this.isEmpty(field.name)) {
					results[i][j] = this._convertType(t, val, this._pk ? results[i][this._pk] : i, field.name)
				} else {
					results[i][field.name] = this._convertType(t, val, this._pk ? results[i][this._pk] : i, field.name)
				}
			} else {
				if (this.isEmpty(field.name)) {
					if (rec) {
						results[i][j] = rec[i][j]
					} else {
						results[i][j] = val
					}
				} else {
					if (rec) {
						results[i][field.name] = rec[i][field.name]
					} else {
						results[i][field.name] = val
					}
				}
			}
		}, isEmpty: function (o) {
			return o === undefined || o === null || o === ""
		}, _row: function (dataRow, index) {
			var t, j, f, tmp, schema = this.schema, fields = schema.fields, fLen = fields.length, fName, nDataRow = {};
			for (j = 0; j < fLen; j++) {
				f = fields[j];
				fName = f.name;
				tmp = dataRow[fName];
				t = f.type;
				if (!this.isEmpty(t)) {
					if (this.isEmpty(fName)) {
						nDataRow[j] = this._convertType(t, tmp, this._pk ? dataRow[this._pk] : index, fName)
					} else {
						nDataRow[fName] = this._convertType(t, tmp, this._pk ? dataRow[this._pk] : index, fName)
					}
				} else {
					if (this.isEmpty(fName)) {
						nDataRow[j] = tmp
					} else {
						nDataRow[fName] = tmp
					}
				}
			}
			return nDataRow
		}, _arrays: function (data) {
			var i, j, tmp, hasArrays, resKey = this.schema.outputResultsName, out = {}, results;
			results = this._setResKey(resKey, out);
			if (this.isObjEmpty(results) && $.type(results) !== "array") {
				results = [];
				out = results
			}
			try {
				if (data.length > 0) {
					hasArrays = $.type(data[0]) === "array"
				}
				for (i = 0; i < data.length; i++) {
					if (data[i] === undefined) {
						continue
					}
					results.push({});
					for (j = 0; j < this.schema.fields.length; j++) {
						if (hasArrays) {
							tmp = data[i][j]
						} else {
							tmp = data[i][this.schema.fields[j].name]
						}
						this._val(this.schema.fields[j], tmp, results, results.length - 1)
					}
				}
			} catch (e) {
				throw new Error($.ig.DataSourceLocale.locale.errorParsingArrays + e.message)
			}
			return out
		}, _getDataBySearchField: function (data) {
			var searchPath, i, token, root;
			if (!this.isEmpty(this.schema.searchField)) {
				searchPath = this.schema.searchField.split(/[\[.\]]/);
				for (i = 0; i < searchPath.length; i++) {
					token = searchPath[i];
					if (token.length === 0) {
						continue
					}
					token = /^(0|[1-9]\d*)$/.test(token) ? parseInt(token, 10) : token.replace(/^('|")|('|")$/g, "");
					root = root ? root[token] : data[token];
					if (root === undefined || root === null) {
						break
					}
				}
				if (!root && $.type(data) === "array") {
					root = data
				}
			}
			return root
		}, _processMetadata: function (data) {
			if (data.Metadata && data.Metadata.timezoneOffset !== undefined && !isNaN(data.Metadata.timezoneOffset)) {
				this._serverOffset = data.Metadata.timezoneOffset;
				this._parser._serverOffset = this._serverOffset;
				if (data.Metadata.timezoneOffsets) {
					this._serverOffsets = data.Metadata.timezoneOffsets;
					this._parser._serverOffsets = data.Metadata.timezoneOffsets
				}
			} else {
				this._parser._serverOffset = 0
			}
		}, _json: function (data) {
			var i, j, root, resKey = this.schema.outputResultsName, out = {}, results;
			results = this._setResKey(resKey, out);
			if (this.isObjEmpty(results)) {
				results = [];
				out = results
			}
			try {
				this._processMetadata(data);
				root = this._getDataBySearchField(data);
				if (root === undefined || this.isEmpty(this.schema.searchField)) {
					root = data
				}
				if (!root.length && $.type(root) === "object") {
					root = [root]
				}
				if (root && root.length && root.length > 0) {
					for (i = 0; i < root.length; i++) {
						results[i] = {};
						if (this._pk && this._pk !== "ig_pk") {
							for (j = 0; j < this.schema.fields.length; j++) {
								if (this.schema.fields[j].name === this._pk) {
									break
								}
							}
							if (j < this.schema.fields.length) {
								if (root[i][this._pk] === undefined) {
									throw new Error($.ig.DataSourceLocale.locale.errorSchemaMismatch + this._pk)
								}
								this._val(this.schema.fields[j], root[i][this.schema.fields[j].name], results, i, root)
							}
						}
						for (j = 0; j < this.schema.fields.length; j++) {
							if (this.schema.fields[j].name !== "ig_pk" && this.schema.fields[j].name !== this._pk) {
								this._val(this.schema.fields[j], root[i][this.schema.fields[j].name], results, i, root)
							}
						}
					}
				}
			} catch (e) {
				throw new Error($.ig.DataSourceLocale.locale.errorParsingJson + e.message)
			}
			return out
		}, _xml: function (data, recursiveSF) {
			var i, j, root, resNode, item, resKey = this.schema.outputResultsName, out = {}, results, namespaced, sf, k,
				r, rc, len1, len2, o, carrysf, ireal = 0, s;
			o = window.ActiveXObject;
			results = this._setResKey(resKey, out);
			if (this.isObjEmpty(results)) {
				results = [];
				out = results
			}
			try {
				if (!this.isEmpty(this.schema.searchField)) {
					namespaced = this._xmlHasNamespaces(data);
					if (!namespaced) {
						if (window.ActiveXObject === undefined) {
							if (!recursiveSF || recursiveSF.length <= 0) {
								root = data.evaluate(this.schema.searchField, data, null, XPathResult.ANY_TYPE, null)
							} else {
								root = data.evaluate(recursiveSF, data, null, XPathResult.ANY_TYPE, null)
							}
						} else {
							if (!(data instanceof ActiveXObject)) {
								s = (new XMLSerializer).serializeToString(data);
								data = new window.ActiveXObject("Microsoft.XMLDOM");
								data.async = false;
								data.loadXML(s)
							}
							root = data.selectNodes(this.schema.searchField)
						}
					} else {
						if (this.schema.searchField.startsWith("//")) {
							sf = this.schema.searchField.substring(2, this.schema.searchField.length)
						} else {
							sf = this.schema.searchField
						}
						root = this._findXmlRecordsRoot(data, sf)
					}
				} else {
					root = data
				}
				if (!namespaced) {
					if (root && window.ActiveXObject !== undefined) {
						for (i = 0; i < root.length; i++) {
							item = root.item(i);
							results[i] = {};
							for (j = 0; j < this.schema.fields.length; j++) {
								resNode = item.selectSingleNode(this.schema.fields[j].xpath);
								if (resNode) {
									if (resNode.nodeType === 1 && this.schema.childDataProperty && resNode.nodeName === this.schema.childDataProperty) {
										this.schema.searchField = this.schema.childDataProperty;
										results[i][resNode.nodeName] = this._xml(item)
									} else {
										this._val(this.schema.fields[j], resNode.text, results, i)
									}
								} else {
									results[i][this.schema.fields[j].name] = ""
								}
							}
						}
					} else if (root) {
						i = 0;
						item = root.iterateNext();
						while (item) {
							results[i] = {};
							for (j = 0; j < this.schema.fields.length; j++) {
								resNode = data.evaluate(this.schema.fields[j].xpath, item, null, XPathResult.ANY_TYPE, null).iterateNext();
								if (resNode) {
									if (resNode.nodeType === 1 && this.schema.childDataProperty && (resNode.nodeName === this.schema.childDataProperty || resNode.nodeName === this.schema.seachField)) {
										if (!recursiveSF || recursiveSF.length <= 0) {
											carrysf = this.schema.searchField + "[" + (i + 1) + "]/" + this.schema.childDataProperty
										} else {
											carrysf = recursiveSF + "[" + (i + 1) + "]/" + this.schema.childDataProperty
										}
										results[i][this.schema.childDataProperty] = this._xml(data, carrysf)
									} else {
										this._val(this.schema.fields[j], resNode.textContent, results, i)
									}
								} else {
									results[i][this.schema.fields[j].name] = ""
								}
							}
							i++;
							item = root.iterateNext()
						}
					}
				} else {
					len1 = root.childNodes.length;
					ireal = 0;
					for (i = 0; i < len1; i++) {
						r = root.childNodes[i];
						results.push({});
						for (j = 0; j < this.schema.fields.length; j++) {
							len2 = r.childNodes.length;
							for (k = 0; k < len2; k++) {
								rc = r.childNodes[k];
								if (this.schema.fields[j].name === (o === undefined ? rc.localName : rc.baseName)) {
									this._val(this.schema.fields[j], o === undefined ? rc.textContent : rc.text, results, ireal);
									break
								}
							}
						}
						if ($.isEmptyObject(results[ireal])) {
							results.pop()
						} else {
							ireal++
						}
					}
				}
			} catch (e) {
				throw new Error($.ig.DataSourceLocale.locale.errorParsingXml + e.message)
			}
			return out
		}, _findXmlRecordsRoot: function (data, field) {
			var i, len, r, o, ret;
			o = window.ActiveXObject;
			if ((o === undefined ? data.localName : data.baseName) === field) {
				ret = data.parentNode
			} else if (data && data.childNodes && data.childNodes.length > 0) {
				len = data.childNodes.length;
				for (i = 0; i < len; i++) {
					r = data.childNodes[i];
					if (r.childNodes && r.childNodes.length > 0) {
						ret = this._findXmlRecordsRoot(r, field)
					}
				}
			}
			return ret
		}, _xmlHasNamespaces: function (data) {
			var i, ns, r, len, fc;
			if (data.childNodes && data.childNodes.length && data.childNodes.length > 0) {
				len = data.childNodes.length;
				for (i = 0; i < len; i++) {
					r = data.childNodes[i];
					if (!r) {
						return false
					}
					ns = r.namespaceURI;
					if (ns !== "" && ns !== undefined && ns !== null) {
						return true
					}
				}
				if (r && r.childNodes && r.childNodes.length > 0) {
					fc = r.childNodes[0];
					if (!fc) {
						return false
					}
					ns = fc.namespaceURI;
					return ns !== "" && ns !== undefined && ns !== null
				}
			}
			return false
		}, _table: function (data) {
			var i, j, r, tbody, rows, resKey = this.schema.outputResultsName, out = {}, results;
			tbody = $(data).find("tbody")[0];
			results = this._setResKey(resKey, out);
			if (this.isObjEmpty(results)) {
				results = [];
				out = results
			}
			try {
				if (tbody && tbody.nodeName && tbody.nodeName === "TBODY") {
					rows = tbody.rows;
					for (i = 0; i < rows.length; i++) {
						r = rows[i];
						results[i] = {};
						for (j = 0; j < this.schema.fields.length; j++) {
							this._val(this.schema.fields[j], r.cells[j].innerHTML, results, i)
						}
					}
				} else {
					throw new Error($.ig.DataSourceLocale.locale.errorExpectedTbodyParameter)
				}
			} catch (e) {
				throw new Error($.ig.DataSourceLocale.locale.errorParsingHtmlTable + e.message)
			}
			return out
		}, _list: function (data) {
			var parsedData, img, anchor, id, li, ul, self = this, d = $(data), text, i, header, descriptions, counts,
				jqmNS = "data-";
			if ($.mobile && $.mobile.ns) {
				jqmNS += $.mobile.ns
			}
			parsedData = [];
			if (d && (d.is("ul") || d.is("ol")) && d.children().length > 0) {
				d.children("li:not([" + jqmNS + 'role="itemTemplate"], [' + jqmNS + 'role="detailsTemplate"], [' + jqmNS + 'role="dividerTemplate"])').each(function (index) {
					li = $(this);
					img = li.children("img");
					parsedData[index] = {};
					if (self.schema.hasOwnProperty("primaryKey")) {
						self._val(self.schema.primaryKey, li.index(), parsedData, index)
					}
					if (self.schema.hasOwnProperty("isDivider")) {
						self._val(self.schema.isDivider, li.attr(jqmNS + "role") === "list-divider", parsedData, index)
					}
					if (img.length > 0 && img.attr("src")) {
						if (self.schema.hasOwnProperty("imageUrl")) {
							self._val(self.schema.imageUrl, img.attr("src"), parsedData, index)
						}
					}
					anchor = li.children("a");
					if (anchor.length > 0) {
						text = anchor.html();
						if (anchor.attr("href")) {
							if (self.schema.hasOwnProperty("navigateUrl")) {
								self._val(self.schema.navigateUrl, anchor.attr("href"), parsedData, index)
							}
						}
						if (anchor.attr("target")) {
							if (self.schema.hasOwnProperty("target")) {
								self._val(self.schema.target, anchor.attr("target"), parsedData, index)
							}
						}
						if (img.length === 0) {
							img = anchor.children("img");
							if (img.length > 0) {
								img.each(function () {
									if (this.outerHTML) {
										text = text.replace(this.outerHTML, "")
									} else {
										text = text.replace($("<div>").append(this).html(), "")
									}
								})
							}
							if (img.length > 0 && img.attr("src")) {
								if (self.schema.hasOwnProperty("imageUrl")) {
									self._val(self.schema.imageUrl, img.attr("src"), parsedData, index)
								}
							}
						}
					} else {
						text = "";
						for (i = 0; i < li[0].childNodes.length; i++) {
							if (li[0].childNodes[i].nodeType === 3 && li[0].childNodes[i].data) {
								text += $.trim(li[0].childNodes[i].data)
							}
						}
					}
					if (self.schema.hasOwnProperty("header")) {
						header = li.children("h1, h2, h3, h4, h5, h6");
						if (header.length === 0 && anchor.length > 0) {
							header = anchor.children("h1, h2, h3, h4, h5, h6")
						}
						if (header.length > 0) {
							self._val(self.schema.header, header.text(), parsedData, index);
							header.each(function () {
								if (this.outerHTML) {
									text = text.replace(this.outerHTML, "")
								} else {
									text = text.replace($("<div>").append(this).html(), "")
								}
							})
						}
					}
					if (self.schema.hasOwnProperty("description")) {
						descriptions = li.children("p, dd");
						if (descriptions.length === 0 && anchor.length > 0) {
							descriptions = anchor.children("p, dd")
						}
						if (descriptions.length > 0) {
							self._val(self.schema.description, descriptions.text(), parsedData, index);
							descriptions.each(function () {
								if (this.outerHTML) {
									text = text.replace(this.outerHTML, "")
								} else {
									text = text.replace($("<div>").append(this).html(), "")
								}
							})
						}
					}
					if (self.schema.hasOwnProperty("count")) {
						counts = li.children("span.ui-li-count");
						if (counts.length === 0 && anchor.length > 0) {
							counts = anchor.children("span.ui-li-count")
						}
						if (counts.length > 0) {
							self._val(self.schema.count, parseInt(counts.text(), 10), parsedData, index);
							counts.each(function () {
								if (this.outerHTML) {
									text = text.replace(this.outerHTML, "")
								} else {
									text = text.replace($("<div>").append(this).html(), "")
								}
							})
						}
					}
					if (self.schema.hasOwnProperty("text")) {
						self._val(self.schema.text, text, parsedData, index)
					}
					id = li.attr("id");
					if (id) {
						if (self.schema.hasOwnProperty("value")) {
							self._val(self.schema.value, id, parsedData, index)
						}
					}
					ul = li.children("ul, ol");
					if (ul.length > 0) {
						if (self.schema.hasOwnProperty("childData") && self.schema.childData.hasOwnProperty("name")) {
							parsedData[index][self.schema.childData.name] = self._list(ul)
						}
					}
				})
			}
			return parsedData
		}, _select: function (data) {
			var parsedData = [], self = this;
			$(data).children().each(function (i) {
				var $curOption = $(this);
				parsedData[i] = {};
				if ($curOption.is("optgroup")) {
					parsedData[i].Group = {groupName: this.label, groupItems: self._select(this)}
				} else {
					self._val(self.schema.fields[0], $curOption.val(), parsedData, i);
					self._val(self.schema.fields[1], $curOption.text(), parsedData, i)
				}
			});
			return parsedData
		}, isObjEmpty: function (obj) {
			var prop;
			for (prop in obj) {
				if (obj.hasOwnProperty(prop)) {
					return false
				}
			}
			return true
		}, fields: function () {
			return this.schema.fields
		}
	});
	$.ig.RemoteDataSource = $.ig.RemoteDataSource || $.ig.DataSource.extend({
		init: function (options) {
			if (!options) {
				options = {}
			}
			options.type = "remoteUrl";
			this._super(options);
			return this
		}
	});
	$.ig.JSONDataSource = $.ig.JSONDataSource || $.ig.DataSource.extend({
		init: function (options) {
			if (!options) {
				options = {}
			}
			options.type = "json";
			this._super(options);
			return this
		}
	});
	$.ig.RESTDataSource = $.ig.RESTDataSource || $.ig.DataSource.extend({
		settings: {
			restSettings: {
				create: {
					url: null,
					template: null,
					batch: false
				},
				update: {url: null, template: null, batch: false},
				remove: {url: null, template: null, batch: false},
				encodeRemoveInRequestUri: true,
				contentSerializer: null,
				contentType: "application/json; charset=utf-8"
			}
		}, init: function (options) {
			if (!options) {
				options = {}
			} else {
				this._defaultTypeOverridden = options.restSettings && options.restSettings.contentType && options.restSettings.contentType !== this.settings.restSettings.contentType
			}
			options.restSettings = $.extend(true, this.settings.restSettings, options.restSettings);
			this._createHttpHandlers();
			this._createLogVerbMapping();
			this._setLazyUrls();
			this._super(options);
			return this
		}, saveChanges: function (success, error) {
			var log, verb, batchOps = {POST: [], PUT: [], DELETE: [], CELL: []}, i;
			this._asyncCallbackCount = 0;
			this._isc = success && typeof success === "function" ? success : null;
			this._iec = error && typeof error === "function" ? error : null;
			for (i = 0; i < this._accumulatedTransactionLog.length; i++) {
				log = this._accumulatedTransactionLog[i];
				verb = this._logVerbMap[log.type];
				if (log.type === "cell") {
					batchOps.CELL.push(log)
				} else if (this._isBatch(verb) === true) {
					batchOps[verb].push(log)
				} else {
					this._asyncCallbackCount++;
					this._saveSingleChange(verb, log)
				}
			}
			if (batchOps.CELL.length > 0) {
				this._saveAllCellChanges(batchOps.CELL)
			}
			if (batchOps.POST.length > 0) {
				this._asyncCallbackCount++;
				this._saveAllCreateChanges(batchOps.POST)
			}
			if (batchOps.PUT.length > 0) {
				this._asyncCallbackCount++;
				this._saveAllUpdateChanges(batchOps.PUT)
			}
			if (batchOps.DELETE.length > 0) {
				this._asyncCallbackCount++;
				this._saveAllDeleteChanges(batchOps.DELETE)
			}
		}, _saveSingleChange: function (verb, change) {
			var data, url;
			data = verb === "POST" || verb === "PUT" ? change.row : null;
			url = this._getProperUrl(verb, false, verb === "DELETE" || verb === "PUT" ? change.rowId : undefined);
			this._call(verb, url, data)
		}, _saveAllCellChanges: function (cellLogs) {
			var i, combined = {}, rowLogs = [], cl;
			for (i = 0; i < cellLogs.length; i++) {
				cl = cellLogs[i];
				if (combined[cl.rowId] === undefined) {
					combined[cl.rowId] = {};
					combined[cl.rowId].row = this.findRecordByKey(cl.rowId)
				}
				combined[cl.rowId].row[cl.col] = cl.value
			}
			$.each(combined, function (key, value) {
				value.rowId = key;
				rowLogs.push(value)
			});
			if (this._isBatch("PUT") === true) {
				this._asyncCallbackCount++;
				this._saveAllUpdateChanges(rowLogs)
			} else {
				for (i = 0; i < rowLogs.length; i++) {
					this._asyncCallbackCount++;
					this._saveSingleChange("PUT", rowLogs[i])
				}
			}
		}, _saveAllCreateChanges: function (createLogs) {
			var data = [], i;
			for (i = 0; i < createLogs.length; i++) {
				data.push(createLogs[i].row)
			}
			this._call("POST", this._getProperUrl("POST", true), data)
		}, _saveAllUpdateChanges: function (updateLogs) {
			var data = [], urlParams = "?", i;
			for (i = 0; i < updateLogs.length; i++) {
				data.push(updateLogs[i].row);
				urlParams += "index=" + updateLogs[i].rowId + (i !== updateLogs.length - 1 ? "&" : "")
			}
			this._call("PUT", this._getProperUrl("PUT", true) + urlParams, data)
		}, _saveAllDeleteChanges: function (deleteLogs) {
			var urlParams = "", i, data = null;
			if (this.settings.restSettings.encodeRemoveInRequestUri === true) {
				urlParams = "?";
				for (i = 0; i < deleteLogs.length; i++) {
					urlParams += "index=" + deleteLogs[i].rowId + (i !== deleteLogs.length - 1 ? "&" : "")
				}
			} else {
				data = [];
				for (i = 0; i < deleteLogs.length; i++) {
					data.push(deleteLogs[i].rowId)
				}
			}
			this._call("DELETE", this._getProperUrl("DELETE", true) + urlParams, data)
		}, _createHttpHandlers: function () {
			this._okHandler = $.proxy(this._responseOk, this);
			this._createdHandler = $.proxy(this._responseCreated, this);
			this._noContentHandler = $.proxy(this._responseNoContent, this);
			this._httpHandlers = {
				POST: {201: this._createdHandler},
				PUT: {200: this._okHandler, 201: this._createdHandler, 204: this._noContentHandler},
				DELETE: {200: this._okHandler, 204: this._noContentHandler}
			}
		}, _createLogVerbMapping: function () {
			this._logVerbMap = {newrow: "POST", row: "PUT", deleterow: "DELETE", cell: "PUT"}
		}, _setLazyUrls: function () {
			var rs = this.settings.restSettings, tempUrl = null, tempTmpl = null;
			$.each(rs, function (key, value) {
				if (value) {
					if (value.url) {
						tempUrl = value.url
					}
					if (value.template) {
						tempTmpl = value.template
					}
				}
			});
			$.each(rs, function (key, value) {
				if (value) {
					if (value.url !== undefined && value.url === null) {
						value.url = tempUrl
					}
					if (value.template !== undefined && value.template === null) {
						value.template = tempTmpl
					}
				}
			});
			this._putUrl = rs.update.url;
			this._putTmpl = rs.update.template;
			this._postUrl = rs.create.url;
			this._postTmpl = rs.create.template;
			this._deleteUrl = rs.remove.url;
			this._deleteTmpl = rs.remove.template
		}, _getProperUrl: function (verb, batch, id) {
			var vL = verb.toLowerCase(), url = this["_" + vL + "Url"];
			if (url && url.length > 0 && url.substr(url.length - 1) !== "/") {
				url += "/"
			}
			if (!batch || batch === false) {
				if (this["_" + vL + "Tmpl"] !== null) {
					url = this["_" + vL + "Tmpl"];
					if (id) {
						url = url.replace("${id}", id)
					}
				} else {
					if (id) {
						url += id
					}
				}
			}
			return url
		}, _responseOk: function (data, textStatus, jqXHR) {
			this._asyncCallbackCount--;
			if (this._asyncCallbackCount === 0) {
				this._saveChangesSuccess({Success: textStatus === "success"}, textStatus, jqXHR)
			}
		}, _responseCreated: function (data, textStatus, jqXHR) {
			this._asyncCallbackCount--;
			if (this._asyncCallbackCount === 0) {
				this._saveChangesSuccess({Success: textStatus === "success"}, textStatus, jqXHR)
			}
		}, _responseNoContent: function (data, textStatus, jqXHR) {
			this._asyncCallbackCount--;
			if (this._asyncCallbackCount === 0) {
				this._saveChangesSuccess({Success: textStatus === "success" || textStatus === "nocontent"}, textStatus, jqXHR)
			}
		}, _isBatch: function (verb) {
			switch (verb) {
				case"POST":
					return this.settings.restSettings.create.batch;
				case"PUT":
					return this.settings.restSettings.update.batch;
				case"DELETE":
					return this.settings.restSettings.remove.batch;
				default:
					return false
			}
		}, _call: function (verb, url, data) {
			var dataString, ct = this.settings.restSettings.contentType,
				serializer = this.settings.restSettings.contentSerializer, self = this;
			if (serializer !== null) {
				if (typeof serializer === "string") {
					serializer = window[serializer]
				}
			}
			if (data !== null) {
				dataString = serializer !== null ? serializer(data) : JSON.stringify(data)
			} else {
				if (!this._defaultTypeOverridden) {
					ct = "text/plain"
				}
				dataString = ""
			}
			this._ajaxRequest = $.ajax({
				type: verb,
				url: url,
				data: dataString,
				statusCode: this._httpHandlers[verb],
				contentType: ct,
				cache: false,
				success: function (data, textStatus, jqXHR) {
					if (self._isc) {
						self._isc(data, textStatus, jqXHR)
					}
				},
				error: function (jqXHR, textStatus, errorThrown) {
					self._saveChangesError(jqXHR, textStatus, errorThrown);
					if (self._iec) {
						self._iec(jqXHR, textStatus, errorThrown)
					}
				},
				processData: true
			})
		}
	});
	$.ig.JSONPDataSource = $.ig.JSONPDataSource || $.ig.DataSource.extend({
		settings: {jsonp: null, jsonpCallback: null},
		init: function (options) {
			if (!options) {
				options = {}
			}
			options.responseDataType = "jsonp";
			this._super(options);
			return this
		}
	});
	$.ig.XmlDataSource = $.ig.XmlDataSource || $.ig.DataSource.extend({
		init: function (options) {
			if (!options) {
				options = {}
			}
			options.type = "xml";
			this._super(options);
			return this
		}
	});
	$.ig.FunctionDataSource = $.ig.FunctionDataSource || $.ig.DataSource.extend({
		init: function (options) {
			if (!options) {
				options = {}
			}
			options.type = "function";
			this._super(options);
			return this
		}
	});
	$.ig.HtmlTableDataSource = $.ig.HtmlTableDataSource || $.ig.DataSource.extend({
		init: function (options) {
			if (!options) {
				options = {}
			}
			options.type = "htmlTableDom";
			this._super(options);
			return this
		}
	});
	$.ig.ArrayDataSource = $.ig.ArrayDataSource || $.ig.DataSource.extend({
		init: function (options) {
			if (!options) {
				options = {}
			}
			options.type = "array";
			this._super(options);
			return this
		}
	});
	$.ig.MashupDataSource = $.ig.MashupDataSource || $.ig.DataSource.extend({
		mashupSettings: {ignorePartialRecords: false, dataSource: []}, init: function (options) {
			this._super(options);
			if (options) {
				this.settings = $.extend(true, {}, $.ig.DataSource.prototype.settings, options);
				this.settings = $.extend(true, {}, $.ig.MashupDataSource.prototype.mashupSettings, this.settings)
			}
			this._sources = [];
			this._dataBindingComplete = false;
			this._sourcesStatus = [];
			this._hashedDataViews = [];
			return this
		}, _checkDataBindingComplete: function (status, msg, ownerDs) {
			var i, j, k, hasPrimaryKeys = true, hasForeignKeys = false, totalLength = 0, data = [], merged = [], d,
				rindex, keyVal, prop, keyIndexHash, fkeyIndexHash, mergedData;
			this._dataBindingComplete = true;
			for (i = 0; i < this._sources.length; i++) {
				if (this._sources[i] === ownerDs) {
					this._sourcesStatus[i] = 1
				}
				if (this._sourcesStatus[i] === 0) {
					this._dataBindingComplete = false
				}
			}
			if (this._dataBindingComplete) {
				for (i = 0; i < this._sources.length; i++) {
					if (this._sources[i].settings.primaryKey === "" || this._sources[i].settings.primaryKey === null || this._sources[i].settings.primaryKey === undefined) {
						hasPrimaryKeys = false;
						break
					}
				}
				for (i = 0; i < this._sources.length; i++) {
					if (this._sources[i].settings.foreignKey !== "" && this._sources[i].settings.foreignKey !== null && this._sources[i].settings.foreignKey !== undefined) {
						hasForeignKeys = true;
						break
					}
				}
				totalLength = this._sources[0].dataView().length;
				for (i = 0; i < this._sources.length; i++) {
					totalLength = this.settings.ignorePartialRecords ? this._sources[i].dataView().length < totalLength ? this._sources[i].dataView().length : totalLength : this._sources[i].dataView().length > totalLength ? this._sources[i].dataView().length : totalLength
				}
				if (hasPrimaryKeys && !hasForeignKeys) {
					for (i = 0; i < this._sources.length; i++) {
						this._hashedDataViews[i] = {};
						for (j = 0; j < this._sources[i].dataView().length; j++) {
							this._hashedDataViews[i][this._sources[i].dataView()[j][this._sources[i].settings.primaryKey]] = this._sources[i].dataView()[j]
						}
					}
					keyIndexHash = {};
					j = 0;
					for (i = 0; i < this._hashedDataViews.length; i++) {
						for (keyVal in this._hashedDataViews[i]) {
							if (this._hashedDataViews[i].hasOwnProperty(keyVal)) {
								if (keyIndexHash.hasOwnProperty(keyVal)) {
									data[keyIndexHash[keyVal]] = $.extend(true, {}, data[keyIndexHash[keyVal]], this._hashedDataViews[i][keyVal]);
									merged[keyIndexHash[keyVal]]++
								} else {
									data.push({});
									merged.push(1);
									data[j] = $.extend(true, {}, data[j], this._hashedDataViews[i][keyVal]);
									keyIndexHash[keyVal] = j;
									j++
								}
							}
						}
					}
					if (this.settings.ignorePartialRecords) {
						for (i = merged.length - 1; i >= 0; i--) {
							if (merged[i] < this._sources.length) {
								data.splice(i, 1)
							}
						}
					}
				} else if (hasForeignKeys && hasPrimaryKeys) {
					for (i = 0; i < this._sources.length; i++) {
						this._hashedDataViews[i] = {};
						for (j = 0; j < this._sources[i].dataView().length; j++) {
							this._hashedDataViews[i][this._sources[i].dataView()[j][this._sources[i].settings.primaryKey]] = this._sources[i].dataView()[j]
						}
					}
					keyIndexHash = [{}];
					fkeyIndexHash = [{}];
					for (i = 0; i < this._hashedDataViews.length; i++) {
						j = 0;
						for (keyVal in this._hashedDataViews[0]) {
							if (this._hashedDataViews[0].hasOwnProperty(keyVal)) {
								if (!keyIndexHash[i]) {
									keyIndexHash.push({})
								}
								if (!keyIndexHash[i].hasOwnProperty(keyVal)) {
									keyIndexHash[i][keyVal] = j;
									j++;
									if (this._sources[i + 1] && this._sources[i + 1].settings.foreignKey) {
										if (!fkeyIndexHash[i]) {
											fkeyIndexHash.push({})
										}
										fkeyIndexHash[i][keyVal] = this._hashedDataViews[0][keyVal][this._sources[i + 1].settings.foreignKey]
									}
								}
							}
						}
					}
					mergedData = $.extend(true, {}, data, this._hashedDataViews[0]);
					for (i = 0; i < this._hashedDataViews.length; i++) {
						if (!this._sources[i].settings.foreignKey) {
							continue
						}
						mergedData = this._mergeSources(this._hashedDataViews[i], this._sources[i].settings.foreignKey, fkeyIndexHash[i - 1], mergedData)
					}
					j = 0;
					for (var mergedRecKey in mergedData) {
						data[j] = mergedData[mergedRecKey];
						j++
					}
				} else {
					for (i = 0; i < totalLength; i++) {
						data[i] = {};
						for (j = 0; j < this._sources.length; j++) {
							d = this._sources[j];
							if (d.dataView()[0].length) {
								for (k = 0; k < d.dataView()[0].length; k++) {
									rindex += k;
									if (d.schema() && d.schema().fields().length > 0) {
										data[i][d.schema().fields()[k]] = i >= d.dataView().length ? "" : d.dataView()[i][d.schema().fields()[k]]
									} else {
										data[i][rindex] = i >= d.dataView().length ? "" : d.dataView()[i][k]
									}
								}
							} else {
								for (prop in d.dataView()[i]) {
									if (d.dataView()[i].hasOwnProperty(prop)) {
										data[i][prop] = i >= d.dataView().length ? "" : d.dataView()[i][prop]
									}
								}
							}
						}
						rindex = 0
					}
				}
				this.settings.dataSource = data;
				this.settings.type = "array";
				this._runtimeType = this.analyzeDataSource();
				this.dataBind()
			}
		}, _mergeSources: function (dataView, fKey, fkeyIndex, data) {
			var newObject = {}, fkValueCollection;
			for (var recID in data) {
				if (Array.isArray(data[recID][fKey])) {
					newObject = {};
					fkValueCollection = data[recID][fKey];
					for (var fk in fkValueCollection) {
						var currValue = dataView[fkValueCollection[fk]];
						for (var variable in currValue) {
							if (variable !== fKey) {
								if (newObject.hasOwnProperty(variable)) {
									newObject[variable].push(currValue[variable])
								} else {
									newObject[variable] = [currValue[variable]]
								}
							}
						}
					}
					data[recID] = $.extend(true, {}, data[recID], newObject)
				} else {
					data[recID] = $.extend(true, {}, data[recID], dataView[fkeyIndex[recID]])
				}
			}
			return data
		}, setCellValue: function (rowId, colId, val, autoCommit) {
			var rowObject = this.findRecordByKey(rowId, this._data), t, rec, self = this, newObject, lookupRecord;
			$(this._sources).each(function () {
				if (this.settings.foreignKey && this.settings.foreignKey === colId) {
					if (Array.isArray(val)) {
						newObject = {};
						for (var value in val) {
							lookupRecord = this.dataSource()[val[value]];
							for (var variable in lookupRecord) {
								if (variable !== this.settings.foreignKey) {
									if (newObject.hasOwnProperty(variable)) {
										newObject[variable].push(lookupRecord[variable])
									} else {
										newObject[variable] = [lookupRecord[variable]]
									}
								} else {
									newObject[variable] = val
								}
							}
						}
						rowObject = $.extend(true, {}, rowObject, newObject)
					} else if (this.settings.foreignKey !== colId) {
						rowObject = $.extend(true, {}, rowObject, this.dataSource()[val])
					}
					if (this.settings.primaryKey === null) {
						rec = self._data[parseInt(rowId, 10)]
					} else {
						rec = self.findRecordByKey(rowId, self._data)
					}
					for (var prop in rec) {
						rec[prop] = rowObject[prop]
					}
				}
			});
			t = this._createCellTransaction(rowId, colId, val);
			this._addTransaction(t);
			if (autoCommit === true) {
				this.commit(rowId)
			}
			return t
		}, updateRow: function (rowId, rowObject, autoCommit) {
			var t, newObject, lookupRecord,
				oldRow = this.settings.primaryKey === null ? this._data[parseInt(rowId, 10)] : this.findRecordByKey(rowId),
				rowIndex = this.settings.primaryKey === null ? rowId : $.ig.indexInArray(this._data, oldRow);
			$(this._sources).each(function () {
				if (this.settings.foreignKey) {
					if (Array.isArray(rowObject[this.settings.foreignKey])) {
						newObject = {};
						for (var value in rowObject[this.settings.foreignKey]) {
							lookupRecord = this.dataSource()[rowObject[this.settings.foreignKey][value]];
							for (var variable in lookupRecord) {
								if (variable !== this.settings.foreignKey) {
									if (newObject.hasOwnProperty(variable)) {
										newObject[variable].push(lookupRecord[variable])
									} else {
										newObject[variable] = [lookupRecord[variable]]
									}
								}
							}
						}
						rowObject = $.extend(true, {}, rowObject, newObject)
					} else if (rowObject[this.settings.foreignKey] !== oldRow[this.settings.foreignKey]) {
						rowObject = $.extend(true, {}, rowObject, this.dataSource()[rowObject[this.settings.foreignKey]])
					}
				}
			});
			t = this._createRowTransaction(rowId, rowObject);
			this._addTransaction(t);
			if (autoCommit === true) {
				this.commit(rowId)
			}
			if ($.type(this.settings.rowUpdated) === "function") {
				if (this.settings.callee) {
					this.settings.rowUpdated.apply(this.settings.callee, [{
						rowIndex: rowIndex,
						newRow: rowObject,
						oldRow: oldRow
					}, this])
				} else {
					this.settings.rowUpdated({rowIndex: rowIndex, newRow: rowObject, oldRow: oldRow}, this)
				}
			}
			return t
		}, addRow: function (rowId, rowObject, autoCommit) {
			var t, newObject, lookupRecord;
			$(this._sources).each(function () {
				if (this.settings.foreignKey) {
					if (Array.isArray(rowObject[this.settings.foreignKey])) {
						newObject = {};
						for (var value in rowObject[this.settings.foreignKey]) {
							lookupRecord = this.dataSource()[rowObject[this.settings.foreignKey][value]];
							for (var variable in lookupRecord) {
								if (variable !== this.settings.foreignKey) {
									if (newObject.hasOwnProperty(variable)) {
										newObject[variable].push(lookupRecord[variable])
									} else {
										newObject[variable] = [lookupRecord[variable]]
									}
								}
							}
						}
						rowObject = $.extend(true, {}, rowObject, newObject)
					} else {
						rowObject = $.extend(true, {}, rowObject, this.dataSource()[rowObject[this.settings.foreignKey]])
					}
				}
			});
			t = this._createNewRowTransaction(rowId, rowObject);
			this._addTransaction(t);
			if (autoCommit === true) {
				this.commit(rowId)
			}
			if ($.type(this.settings.rowAdded) === "function") {
				if (this.settings.callee) {
					this.settings.rowAdded.apply(this.settings.callee, [{rowId: rowId, row: rowObject}, this])
				} else {
					this.settings.rowAdded({rowId: rowId, row: rowObject}, this)
				}
			}
			return t
		}, insertRow: function (rowId, rowObject, rowIndex, autoCommit, parentRowId) {
			var t, newObject, lookupRecord, oldRow;
			$(this._sources).each(function () {
				if (this.settings.foreignKey) {
					if (Array.isArray(rowObject[this.settings.foreignKey])) {
						newObject = {};
						for (var value in rowObject[this.settings.foreignKey]) {
							lookupRecord = this.dataSource()[rowObject[this.settings.foreignKey][value]];
							for (var variable in lookupRecord) {
								if (variable !== this.settings.foreignKey) {
									if (newObject.hasOwnProperty(variable)) {
										newObject[variable].push(lookupRecord[variable])
									} else {
										newObject[variable] = [lookupRecord[variable]]
									}
								}
							}
						}
						rowObject = $.extend(true, {}, rowObject, newObject)
					} else if (rowObject[this.settings.foreignKey] !== oldRow[this.settings.foreignKey]) {
						rowObject = $.extend(true, {}, rowObject, this.dataSource()[rowObject[this.settings.foreignKey]])
					}
				}
			});
			t = this._createInsertRowTransaction(rowId, rowObject, rowIndex);
			this._addTransaction(t);
			if (autoCommit === true) {
				this.commit(rowId)
			}
			if ($.type(this.settings.rowInserted) === "function") {
				if (this.settings.callee) {
					this.settings.rowInserted.apply(this.settings.callee, [{
						rowId: rowId,
						row: rowObject,
						rowIndex: rowIndex
					}, this])
				} else {
					this.settings.rowInserted({rowId: rowId, row: rowObject, rowIndex: rowIndex}, this)
				}
			}
			return t
		}, dataBind: function () {
			var i, ds = this.settings.dataSource;
			if (this._dataBindingComplete || this._sources.length > 0) {
				this._dataBindingComplete = false;
				this._super()
			} else {
				this._dataBindingComplete = false;
				for (i = 0; i < ds.length; i++) {
					if (ds[i] instanceof $.ig.DataSource) {
						this._sources[i] = ds[i]
					} else if (ds[i].hasOwnProperty("dataSource") && ds[i].dataSource instanceof $.ig.DataSource) {
						this._sources[i] = ds[i].dataSource
					} else {
						this._sources[i] = new $.ig.DataSource(ds[i])
					}
					this._sources[i].settings.callee = this;
					this._sources[i].settings.callback = this._checkDataBindingComplete;
					this._sourcesStatus[i] = 0
				}
				for (i = 0; i < ds.length; i++) {
					this._sources[i].dataBind()
				}
			}
			return this
		}
	});
	$.ig.HierarchicalDataSource = $.ig.HierarchicalDataSource || Class.extend({
		settings: {
			autogenerate: false,
			initialDataBindDepth: 0,
			maxDataBindDepth: -1,
			defaultChildrenDataProperty: "children",
			callback: null,
			callee: null,
			data: [],
			dataSource: null,
			dataBinding: null,
			dataBound: null,
			type: "unknown",
			responseDataType: null,
			responseContentType: null,
			localSchemaTransform: true,
			urlParamsEncoding: null,
			urlParamsEncoded: null,
			requestType: "GET",
			odata: false,
			paging: {},
			sorting: {},
			filtering: {},
			schema: []
		}, init: function (options) {
			if (options) {
				this.__ds = options.dataSource;
				options.dataSource = null;
				this.settings = $.extend(true, {}, $.ig.HierarchicalDataSource.prototype.settings, options);
				this.settings.dataSource = this.__ds
			}
			this._rootopts = this.settings;
			this._rootopts.urlParamsEncoded = $.proxy(this._encodeHierarchicalUrlParams, this);
			if (this._rootopts.dataSource && typeof this._rootopts.dataSource._xmlToArray === "function" && typeof this._rootopts.dataSource._encodePkParams === "function") {
				this._rootds = this._rootopts.dataSource;
				this._rootds.settings.urlParamsEncoded = this.settings.urlParamsEncoded;
				this._rootds.settings.odata = this.settings.odata;
				if (!this._rootds.settings.schema) {
					this._rootds.settings.schema = {}
				}
				this._rootds.settings.schema.layouts = this.settings.schema.layouts
			} else {
				if ($.type(this._rootopts.dataSource) === "string" && this._rootopts.dataSource.indexOf("$callback=?") !== -1) {
					this._rootds = new $.ig.JSONPDataSource(this._rootopts)
				} else if (this._rootopts.restSettings && (this._rootopts.restSettings.update.url !== null || this._rootopts.restSettings.update.template !== null || this._rootopts.restSettings.create.url !== null || this._rootopts.restSettings.create.template !== null || this._rootopts.restSettings.remove.url !== null || this._rootopts.restSettings.remove.template !== null)) {
					this._rootds = new $.ig.RESTDataSource(this._rootopts)
				} else {
					this._rootds = new $.ig.DataSource(this._rootopts)
				}
			}
		}, dataBind: function (callback, callee) {
			this._rootds.dataBind(callback, callee)
		}, root: function () {
			if (!this._rootds) {
				this._rootds = new $.ig.DataSource(this._rootopts)
			}
			return this._rootds
		}, dataAt: function (path, keyspath) {
			var data = this.root().data(), paths = path.split("/"), kp = keyspath.split("/"), k, i,
				searchField = "Records", j, cd = null, ckey = this.settings.primaryKey, ckeyval = "", ckeys = [],
				ckeyvals = [], match = false;
			for (i = 0; i < paths.length; i++) {
				ckey = paths[i].split(":")[0];
				ckeyval = paths[i].split(":")[1];
				if (paths[i] !== "") {
					for (j = 0; data && j < data.length; j++) {
						if (ckey && ckey.indexOf(",") !== -1) {
							ckeys = ckey.split(",");
							ckeyvals = ckeyval.split(",");
							for (k = 0; k < ckeys.length; k++) {
								if (!data[j][ckeys[k]].charAt && ckeyvals[k].charAt) {
									ckeyvals[k] = parseInt(ckeyvals[k], 10)
								}
								match = data[j][ckeys[k]] === ckeyvals[k];
								if (!match) {
									break
								}
							}
						} else {
							if (data[j][ckey] !== undefined && !data[j][ckey].charAt && ckeyval.charAt) {
								ckeyval = parseInt(ckeyval, 10)
							}
							match = data[j][ckey] === ckeyval
						}
						if (match) {
							cd = data[j][kp[i]];
							searchField = this.root().schema && this.root().schema() && this.root().schema().schema ? this.root().schema().schema.searchField : searchField;
							if (cd && paths.length > 1 && i < paths.length - 1 && $.type(cd) !== "array" && cd[searchField]) {
								cd = cd[searchField]
							}
							break
						}
					}
					data = cd
				}
			}
			return cd
		}, _encodeUrlPath: function (rowid, name) {
			return "path=" + rowid + "&layout=" + name
		}, _encodeHierarchicalUrlParams: function (owner, args) {
			var expand = "", layouts = this.settings.schema.layouts, i, j, tmp, name, lc = 0;
			if (this.settings.odata && this.settings.initialDataBindDepth !== 0) {
				i = j = 0;
				for (name in layouts) {
					if (layouts.hasOwnProperty(name)) {
						lc++
					}
				}
				lc++;
				for (name in layouts) {
					if (layouts.hasOwnProperty(name)) {
						if ($.type(layouts[name]) !== "function") {
							if (name.startsWith("/")) {
								name = name.substring(1, name.length - 1)
							}
							tmp = name.split("/");
							for (i = 0; i < tmp.length; i++) {
								tmp[i] = tmp[i].substring(0, tmp[i].indexOf(":"))
							}
							tmp = tmp.join("/");
							if (j !== 0 && j !== lc - 1) {
								expand += ","
							}
							expand += tmp;
							j++
						}
					}
				}
				args.selectParams.$expand = expand
			} else {
				args.selectParams.dbdepth = this.settings.initialDataBindDepth
			}
		}
	});
	$.ig.TreeHierarchicalDataSource = $.ig.TreeHierarchicalDataSource || $.ig.DataSource.extend({
		settings: {
			treeDS: {
				childDataKey: null,
				foreignKey: null,
				initialExpandDepth: -1,
				enableRemoteLoadOnDemand: false,
				dataSourceUrl: null,
				requestDataCallback: null,
				requestDataSuccessCallback: null,
				requestDataErrorCallback: null,
				propertyExpanded: "__ig_options.expanded",
				propertyDataLevel: "__ig_options.dataLevel",
				initialFlatDataView: false,
				customEncodeUrlFunc: null,
				persistExpansionStates: false,
				filtering: {
					fromLevel: 0,
					toLevel: -1,
					displayMode: "showWithAncestors",
					matchFiltering: "__matchFiltering"
				},
				sorting: {fromLevel: 0, toLevel: -1},
				paging: {mode: "rootLevelOnly", contextRowMode: "none"}
			}
		},
		_isHierarchicalDataSource: true,
		init: function (options) {
			if (!options) {
				options = {}
			}
			this._totalRecordsCount = 0;
			options.treeDS = $.extend(true, {}, this.settings.treeDS, options.treeDS);
			this._flatVisibleData = [];
			this._super(options);
			this._isHierarchicalDataSource = options.treeDS.foreignKey === null ? true : false;
			return this
		},
		_checkGeneratedSchema: function () {
			var s = this.settings.treeDS, fs = this.settings.filtering, propertyExp = s.propertyExpanded,
				propertyMatchFiltering = s.filtering.matchFiltering;
			this._checkGeneratedSchemaByKey(s.childDataKey);
			if (!this._isHierarchicalDataSource) {
				this._checkGeneratedSchemaByKey(s.foreignKey)
			}
			if (propertyExp !== null && propertyExp !== undefined) {
				this._addSchemaField(propertyExp, "boolean")
			}
			if (fs && fs.enabled && fs.type === "remote" && propertyMatchFiltering) {
				this._addSchemaField(propertyMatchFiltering, "boolean")
			}
			if (s.initialFlatDataView && s.propertyDataLevel) {
				this._addSchemaField(s.propertyDataLevel, "number")
			}
		},
		_addSchemaField: function (propName, propType) {
			if (!this.schema() || !this.schema().schema) {
				return
			}
			var i, schema = this.schema().schema, fields = schema.fields;
			if ($.type(fields) !== "array") {
				return
			}
			for (i = 0; i < fields.length; i++) {
				if (fields[i].name === propName) {
					return
				}
			}
			schema.fields.push({name: propName, type: propType})
		},
		_checkGeneratedSchemaByKey: function (key) {
			if (key === null || key === undefined) {
				return
			}
			var schema = this.schema(), i, fields = schema.fields(), fL = fields.length;
			for (i = 0; i < fL; i++) {
				if (fields[i].name === key) {
					if (fields[i].name === this.settings.treeDS.childDataKey && fields[i].type) {
						delete fields[i].type
					}
					break
				}
			}
			if (i === fL) {
				fields.push({name: key})
			}
		},
		dataBind: function (callback, callee) {
			this._totalRecordsCount = 0;
			this._dataBinding = true;
			this._isHierarchicalDataSource = this.settings.treeDS.foreignKey === null ? true : false;
			var s = this.schema();
			this.isTransformedToHierarchicalData(false);
			if (s) {
				if (this.schema().schema.fields.length !== 0 || this.settings.treeDS.enableRemoteLoadOnDemand) {
					this._checkGeneratedSchema()
				}
				if (!this._transformCallback) {
					this._transformCallback = $.proxy(s.transform, s);
					s.transform = $.proxy(this._transformSchema, this)
				}
			}
			this._flatDataView = [];
			this._generatedFlatData = false;
			this._dataBoundDepth = null;
			this._super(callback, callee)
		},
		getParentRowsForRow: function (dataRow, ds) {
			var key, data = ds || this._data, search, propL, i, res, objPath = {}, rec, prows;
			if (dataRow === undefined || dataRow === null) {
				return []
			}
			if ($.type(dataRow) === "object") {
				search = data && $.isArray(data[0]) ? this._lookupPkIndex() : this.settings.primaryKey;
				key = dataRow[search];
				if (key === undefined || key === null) {
					return []
				}
			} else {
				key = dataRow
			}
			if (this._metadata && $.type(this._metadata.ancestors) === "array") {
				prows = this._metadata.ancestors;
				propL = this.settings.treeDS.propertyDataLevel;
				res = [];
				for (i = 0; i < prows.length; i++) {
					res.push({row: this.schema()._row(prows[i]), level: prows[i][propL]})
				}
				return res
			}
			rec = this.findRecordByKey(key, data, objPath);
			if (!rec) {
				return []
			}
			return objPath.parentRows
		},
		_internalDataBound: function (callDatabound) {
			this._dataBinding = false;
			this._super(callDatabound)
		},
		_completeCallback: function () {
			this.generateFlatDataView();
			this._super()
		},
		getDataBoundDepth: function () {
			if (this._dataBoundDepth === null || this._dataBoundDepth === undefined) {
				this._dataBoundDepth = 0;
				this._getDataBoundDepthRecursive()
			}
			return this._dataBoundDepth
		},
		_getDataBoundDepthRecursive: function (data, level) {
			var i, layoutKey = this.settings.treeDS.childDataKey, dataLen, dataRow;
			if (!this._dataBoundDepth) {
				this._dataBoundDepth = 0
			}
			if (!level) {
				level = 0
			}
			if (data === undefined) {
				data = this.data()
			}
			if (level > this._dataBoundDepth) {
				this._dataBoundDepth = level
			}
			if ($.type(data) === "array") {
				dataLen = data.length;
				for (i = 0; i < dataLen; i++) {
					dataRow = data[i];
					if (!dataRow) {
						continue
					}
					if (dataRow && $.type(dataRow[layoutKey]) === "array" && dataRow[layoutKey].length) {
						this._getDataBoundDepthRecursive(dataRow[layoutKey], level + 1)
					}
				}
			}
		},
		_processJsonResponse: function (data, context) {
			this.schema()._processMetadata(data);
			if (data && data.Metadata && data.Metadata.initialFlatDataView !== undefined) {
				this.settings.treeDS.initialFlatDataView = data.Metadata.initialFlatDataView;
				this._checkGeneratedSchema()
			}
			return this._super(data, context)
		},
		isTransformedToHierarchicalData: function (isTransformed) {
			if (isTransformed === undefined || isTransformed === null) {
				return this._transformedHierarchicaData
			}
			this._transformedHierarchicaData = isTransformed
		},
		transformToHierarchicalData: function (data) {
			if ($.type(data) !== "array") {
				return data
			}
			var i, rowData, nData, parents = [], children = [], dataLen = data.length;
			for (i = 0; i < dataLen; i++) {
				rowData = $.extend(true, {}, data[i]);
				if (this._hasRecordParent(rowData, data)) {
					children.push(rowData)
				} else {
					parents.push(rowData)
				}
			}
			nData = this._getDataLayouts(parents, children);
			this.isTransformedToHierarchicalData(true);
			return nData
		},
		_getDataLayouts: function (parents, children) {
			var i, pLen = parents.length, key = this.settings.primaryKey, layoutKey = this.settings.treeDS.childDataKey,
				res = [], parent, cp;
			for (i = 0; i < pLen; i++) {
				parent = parents[i];
				cp = this._getChildrenByKeyInFlatDS(parents[i][key], children);
				children = cp.others;
				if (cp.children.length > 0) {
					parent[layoutKey] = this._getDataLayouts(cp.children, children)
				}
				res.push(parent)
			}
			return res
		},
		_getChildrenByKeyInFlatDS: function (foreignKey, data) {
			var i, dr, len = data.length, fKey = this.settings.treeDS.foreignKey, others = [], children = [];
			for (i = 0; i < len; i++) {
				dr = data[i];
				if (dr[fKey] === foreignKey) {
					children.push(dr)
				} else {
					others.push(dr)
				}
			}
			return {children: children, others: others}
		},
		_hasRecordParent: function (dataRecord, ds) {
			var i, dataRecordKey, dataRecordPKey, dsRowKey, dsLen, s = this.settings.treeDS,
				rlv = s.foreignKeyRootValue, foreignKey = s.foreignKey, key = this.settings.primaryKey;
			dataRecordPKey = dataRecord[foreignKey];
			if (dataRecordPKey === null || dataRecordPKey === undefined) {
				return false
			}
			if (rlv === false) {
				dataRecordKey = dataRecord[key];
				if (dataRecordKey === null || dataRecordKey === undefined) {
					return false
				}
				dsLen = ds.length;
				for (i = 0; i < dsLen; i++) {
					dsRowKey = ds[i][key];
					if (dsRowKey !== dataRecordKey && dsRowKey === dataRecordPKey) {
						return true
					}
				}
				return false
			}
			return dataRecordPKey !== rlv
		},
		_transformSchema: function (data) {
			if (this.settings.treeDS.initialFlatDataView) {
				return this._transformCallback(data)
			}
			return this.processDataPerLevel(data, 0)
		},
		processDataPerLevel: function (data, level, suppressTransformation) {
			var i, layoutKey = this.settings.treeDS.childDataKey, dataLen, dataRow, isRootLevel = false,
				expDepth = this.settings.treeDS.initialExpandDepth, exp, nData = [], s = this.schema(), layout,
				hasChildren, lLen, propertyExp = this.settings.treeDS.propertyExpanded,
				propertyDataLevel = this.settings.treeDS.propertyDataLevel,
				applyPropertyDataLevel = propertyDataLevel !== null && propertyDataLevel !== undefined,
				applyPropertyExp = propertyExp !== null && propertyExp !== undefined;
			if (!data) {
				data = this.data()
			}
			if ($.type(data) === "object") {
				data = s._getDataBySearchField(data)
			}
			if (!level) {
				if (!this._isHierarchicalDataSource && !this.isTransformedToHierarchicalData()) {
					if (this.metadata("flatToHierarchicalDataTransformed")) {
						this.isTransformedToHierarchicalData(true)
					} else {
						data = this.transformToHierarchicalData(data)
					}
				}
				this._totalRecordsCount = 0;
				this._flatData = [];
				isRootLevel = true;
				level = 0
			}
			if (!data || !this.settings.localSchemaTransform) {
				return data
			}
			if ($.type(data) === "array") {
				if (!this._dataBoundDepth) {
					this._dataBoundDepth = 0
				}
				if (level > this._dataBoundDepth) {
					this._dataBoundDepth = level
				}
				dataLen = data.length;
				try {
					for (i = 0; i < dataLen; i++) {
						dataRow = data[i];
						if (!dataRow) {
							continue
						}
						this._totalRecordsCount++;
						layout = dataRow[layoutKey];
						exp = dataRow[propertyExp];
						if (!suppressTransformation) {
							dataRow = s._row(dataRow, i)
						}
						this._flatData.push(dataRow);
						nData.push(dataRow);
						hasChildren = $.type(layout) === "array";
						lLen = -1;
						if (hasChildren) {
							lLen = layout.length
						}
						if (applyPropertyExp) {
							if (exp === undefined || exp === null) {
								exp = true;
								if (hasChildren && lLen === 0) {
									exp = false
								}
								if (expDepth !== -1 && expDepth <= level) {
									exp = false
								}
							}
							if (exp === 0) {
								exp = false
							}
							dataRow[propertyExp] = exp
						}
						if (applyPropertyDataLevel) {
							dataRow[propertyDataLevel] = level
						}
						if (hasChildren && lLen > 0) {
							dataRow[layoutKey] = this.processDataPerLevel(layout, level + 1, suppressTransformation)
						}
					}
				} catch (e) {
					throw new Error($.ig.DataSourceLocale.locale.errorParsingArrays + e.message)
				}
			} else {
				nData = this._transformCallback(data)
			}
			if (isRootLevel) {
				this._generatedFlatData = true
			}
			return nData
		},
		getFlatDataForRecord: function (record, level) {
			if (!record) {
				return
			}
			var layoutKey = this.settings.treeDS.childDataKey,
				propertyDataLevel = this.settings.treeDS.propertyDataLevel, data = record[layoutKey];
			if (data) {
				if (level === undefined || level === null) {
					level = 0;
					if (propertyDataLevel !== null && propertyDataLevel !== undefined && record[propertyDataLevel]) {
						level = record[propertyDataLevel]
					}
				}
				return this.generateFlatData(data, level)
			}
		},
		generateFlatData: function (data, level) {
			var obj, flatData = [], flatVisibleData = [];
			if (!level) {
				level = 0
			}
			obj = {flatData: flatData, flatVisibleData: flatVisibleData, recordsCount: 0, visibleRecordsCount: 0};
			this._generateFlatDataRecursive(data, level, obj, false);
			return obj
		},
		_generateFlatDataRecursive: function (data, level, obj, parentCollapsed) {
			var i, dataRow, dataLen, exp, expDepth = this.settings.treeDS.initialExpandDepth,
				propertyExp = this.settings.treeDS.propertyExpanded,
				propertyDataLevel = this.settings.treeDS.propertyDataLevel,
				layoutKey = this.settings.treeDS.childDataKey,
				applyPropertyDataLevel = propertyDataLevel !== null && propertyDataLevel !== undefined,
				applyPropertyExp = propertyExp !== null && propertyExp !== undefined;
			if (!data) {
				data = this.data()
			}
			if (!level) {
				level = 0
			}
			if ($.type(data) === "array") {
				dataLen = data.length;
				for (i = 0; i < dataLen; i++) {
					dataRow = data[i];
					if (!dataRow) {
						continue
					}
					obj.recordsCount++;
					obj.flatData.push(data[i]);
					if (applyPropertyExp) {
						exp = dataRow[propertyExp];
						if (exp === undefined || exp === null) {
							exp = true;
							if (expDepth !== -1 && expDepth <= level) {
								exp = false
							}
						}
						if (exp === 0) {
							exp = false
						}
						dataRow[propertyExp] = exp
					}
					if (applyPropertyDataLevel) {
						dataRow[propertyDataLevel] = level
					}
					if (!parentCollapsed) {
						obj.flatVisibleData.push(dataRow);
						obj.visibleRecordsCount++
					}
					if (dataRow && $.type(dataRow[layoutKey]) === "array" && dataRow[layoutKey].length) {
						this._generateFlatDataRecursive(dataRow[layoutKey], level + 1, obj, !exp || parentCollapsed)
					}
				}
			}
		},
		generateFlatDataView: function () {
			var data, resObj;
			if (this.settings.treeDS.initialFlatDataView) {
				this._flatDataView = this._data;
				return
			}
			data = this.dataView();
			if (!this.shouldCallGenerateFlatDataView() && !data.length) {
				data = !this._filter ? this.data() : this._filteredData
			}
			resObj = this.generateFlatData(data);
			this._flatDataView = resObj.flatVisibleData
		},
		flatDataView: function () {
			if (this.settings.treeDS.initialFlatDataView) {
				return this._data
			}
			return this._flatDataView
		},
		_generateFlatDataAndCountProperties: function () {
			var data = !this._filter ? this.data() : this._filteredData, resObj = this.generateFlatData(data);
			this._flatData = resObj.flatData;
			this._totalRecordsCount = resObj.recordsCount;
			this._flatVisibleData = resObj.flatVisibleData
		},
		getVisibleFlatData: function () {
			if (!this._flatVisibleData) {
				this._generateFlatDataAndCountProperties()
			}
			return this._flatVisibleData
		},
		getFlatData: function () {
			if (!this._flatData || this._flatData.length !== this._totalRecordsCount) {
				this._generateFlatDataAndCountProperties()
			}
			return this._flatData
		},
		getFlatDataCount: function () {
			return this._totalRecordsCount
		},
		_page: function (keepRecords) {
			if (this.settings.treeDS.paging.mode === "rootLevelOnly") {
				return this._super(keepRecords)
			}
			var count = 0, startIndex, endIndex, i = 0;
			if (keepRecords === undefined) {
				keepRecords = false
			}
			if (keepRecords) {
				count = this._flatVisibleData.length
			} else {
				this._flatDataView = []
			}
			this._generateFlatDataAndCountProperties();
			startIndex = this.pageIndex() * this.pageSize();
			endIndex = startIndex + this.pageSize() >= this._flatVisibleData.length ? this._flatVisibleData.length : startIndex + this.pageSize();
			for (i = startIndex; i < endIndex; i++) {
				this._flatDataView[count++] = this._flatVisibleData[i]
			}
		},
		setExpandedStateByRowIndex: function (index, expanded, callbackArgs) {
			var rec = this.flatDataView()[index];
			return this._expandCollapseRecord(rec, expanded, callbackArgs)
		},
		setExpandedStateByPrimaryKey: function (rowId, expanded, callbackArgs) {
			var rec = this.findRecordByKey(rowId, null);
			return this._expandCollapseRecord(rec, expanded, callbackArgs)
		},
		getExpandStateById: function (rowId) {
			var rec = this.findRecordByKey(rowId), propertyExp = this.settings.treeDS.propertyExpanded,
				applyPropertyExp = propertyExp !== null && propertyExp !== undefined;
			if (!rec || !applyPropertyExp) {
				return
			}
			return rec[propertyExp]
		},
		toggleRow: function (rowId, callbackArgs) {
			var rec = this.findRecordByKey(rowId), expanded, propertyExp = this.settings.treeDS.propertyExpanded,
				applyPropertyExp = propertyExp !== null && propertyExp !== undefined;
			if (!rec || !applyPropertyExp) {
				return
			}
			expanded = !rec[propertyExp];
			return this._expandCollapseRecord(rec, expanded, callbackArgs)
		},
		_encodeUrlPath: function (path, depth) {
			var p = "path=" + path;
			if (depth !== undefined) {
				p += "&depth=" + depth
			}
			return p
		},
		_requestDataSuccess: function (requestArgs, data) {
			var layoutKey = this.settings.treeDS.childDataKey, layoutData, level, record, callbackArgs, expand;
			if ($.type(data) === "object") {
				record = requestArgs.record;
				callbackArgs = requestArgs.callbackArgs;
				expand = requestArgs.expand;
				level = record[this.settings.treeDS.propertyDataLevel];
				layoutData = this.processDataPerLevel(data, level + 1);
				record[layoutKey] = layoutData;
				this._onRecordToggled(record, expand, callbackArgs)
			}
		},
		_encodeUrl: function () {
			var params = this._super(), s = this.settings.treeDS;
			if (s.persistExpansionStates) {
				params = this._encodeExpansionStates(params)
			}
			if (s.foreignKey) {
				params.fk = s.foreignKey;
				if (s.foreignKeyRootValue !== undefined) {
					params.fkRootValue = s.foreignKeyRootValue
				}
			}
			params.propertyDataLevel = s.propertyDataLevel;
			params.propertyExpanded = s.propertyExpanded;
			params.childDataKey = s.childDataKey;
			params.initialExpandDepth = s.initialExpandDepth;
			if (s.enableRemoteLoadOnDemand) {
				params.loadOnDemand = true
			}
			return params
		},
		_encodePagingParams: function (params) {
			var p = this.settings.paging;
			this._super(params);
			if (p.enabled && p.type === "remote") {
				params.pagingParams["paging.mode"] = this.settings.treeDS.paging.mode;
				params.pagingParams["paging.contextRowMode"] = this.settings.treeDS.paging.contextRowMode
			}
		},
		_encodeSortingParams: function (params) {
			var s = this.settings.sorting;
			this._super(params);
			if (s.enabled && s.type === "remote") {
				params.sortingParams["sorting.fromLevel"] = this.settings.treeDS.sorting.fromLevel;
				params.sortingParams["sorting.toLevel"] = this.settings.treeDS.sorting.toLevel
			}
		},
		_encodeFilteringParams: function (params) {
			var f = this.settings.filtering;
			this._super(params);
			if (f.enabled && f.type === "remote") {
				params.filteringParams["filtering.fromLevel"] = this.settings.treeDS.filtering.fromLevel;
				params.filteringParams["filtering.toLevel"] = this.settings.treeDS.filtering.toLevel;
				params.filteringParams.__matchFiltering = this.settings.treeDS.filtering.matchFiltering;
				params.filteringParams["filtering.displayMode"] = this.settings.treeDS.filtering.displayMode
			}
		},
		_encodeExpansionStates: function (params) {
			var key, listHasValues = false, list = this._listExpansionStates, newList;
			if (list) {
				newList = {};
				for (key in list) {
					if (list.hasOwnProperty(key)) {
						listHasValues = true;
						newList[key] = list[key].state
					}
				}
				if (listHasValues) {
					params.listExpansionStates = newList
				}
			}
			return params
		},
		_requestData: function (record, expand, callbackArgs) {
			if (!record) {
				return
			}
			var opts, me = this, url, path, params, func, s = this.settings.treeDS,
				args = {record: record, callbackArgs: callbackArgs, expand: expand};
			path = this.getPathBy(record);
			params = this._encodeUrl();
			params.expand = expand;
			url = s.dataSourceUrl + "?" + this._encodeUrlPath(path, record[s.propertyDataLevel]);
			func = s.customEncodeUrlFunc;
			if (func) {
				if ($.type(func) !== "function") {
					if (window[func] && typeof window[func] === "function") {
						func = window[func]
					} else {
						func = null
					}
				}
				if (func) {
					url = func(record, expand)
				}
			}
			opts = {
				type: "GET", url: url, data: params, success: function (data, textStatus, jqXHR) {
					var func = s.requestDataErrorCallback, noCancel = true;
					if ($.type(func) === "function") {
						noCancel = func(args, data, textStatus, jqXHR)
					}
					if (noCancel) {
						me._requestDataSuccess(args, data, textStatus, jqXHR)
					}
				}, error: function (jqXHR, textStatus, errorThrown) {
					var func = s.requestDataErrorCallback;
					if ($.type(func) === "function") {
						func(args, jqXHR, textStatus, errorThrown)
					}
				}
			};
			$.ajax(opts)
		},
		_applyToggleCallback: function (resObj, callbackArgs) {
			if (!callbackArgs) {
				return
			}
			var rec = resObj.record, res = resObj.result, expand = resObj.expand, callback = callbackArgs.callback,
				args = callbackArgs.args;
			if (!callback || $.type(callback) !== "function") {
				return
			}
			callback(rec, expand, res, args)
		},
		_saveExpansionStateByPKVal: function (pkVal, expand) {
			if (this.settings.treeDS.persistExpansionStates) {
				if (!this._listExpansionStates) {
					this._listExpansionStates = {}
				}
				if (pkVal !== null && pkVal !== undefined) {
					if (this._listExpansionStates[pkVal] && this._listExpansionStates[pkVal].initState === expand) {
						delete this._listExpansionStates[pkVal]
					} else {
						this._listExpansionStates[pkVal] = {state: expand, initState: !expand}
					}
				}
			}
		},
		_onRecordToggled: function (record, expand, callbackArgs) {
			var propertyExp = this.settings.treeDS.propertyExpanded, filteredRecord = null, res = record, resObj,
				paging = this.settings.paging, pkVal,
				applyPropertyExp = propertyExp !== null && propertyExp !== undefined;
			resObj = {result: false, record: res, expand: expand};
			if (!record) {
				this._applyToggleCallback(resObj, callbackArgs);
				return
			}
			pkVal = record[this.settings.primaryKey];
			if (this._filter) {
				if (pkVal !== null && pkVal !== undefined) {
					filteredRecord = this.findRecordByKey(pkVal, this._filteredData);
					if (filteredRecord) {
						res = filteredRecord
					}
				}
			}
			if (applyPropertyExp) {
				record[propertyExp] = expand;
				if (filteredRecord) {
					filteredRecord[propertyExp] = expand
				}
				if (this.settings.treeDS.persistExpansionStates && !this.settings.treeDS.enableRemoteLoadOnDemand) {
					this.dataBind()
				} else {
					if (paging && paging.enabled && this.settings.treeDS.paging.mode !== "rootLevelOnly") {
						if (paging.type === "local") {
							this._page();
							this._invokeCallback()
						}
					} else {
						if (this.shouldCallGenerateFlatDataView()) {
							this.generateFlatDataView()
						}
					}
				}
			}
			resObj.result = true;
			resObj.record = res;
			this._applyToggleCallback(resObj, callbackArgs)
		},
		_expandCollapseRecord: function (record, expand, callbackArgs) {
			if (!record) {
				return
			}
			var s = this.settings, treeSettings = s.treeDS, func, layout, layoutKey = treeSettings.childDataKey;
			this._saveExpansionStateByPKVal(record[this.settings.primaryKey], expand);
			if (s.paging.enabled && s.paging.type === "remote" && treeSettings.paging.mode === "allLevels") {
				this.dataBind();
				return
			}
			if (expand && treeSettings.enableRemoteLoadOnDemand) {
				layout = record[layoutKey];
				if (layout === true || $.type(layout) === "array" && !layout.length) {
					func = treeSettings.requestDataCallback;
					if ($.type(func) === "string") {
						func = window[func]
					}
					if ($.type(func) !== "function") {
						func = $.proxy(this._requestData, this)
					}
					func(record, expand, callbackArgs);
					return
				}
			}
			this._onRecordToggled(record, expand, callbackArgs)
		},
		sort: function (fields, direction) {
			var s = this.settings.sorting, p = this.settings.paging, data, resetPaging = false;
			if (fields === undefined || fields === null) {
				throw new Error($.ig.DataSourceLocale.locale.noSortingFields)
			}
			this._generatedFlatData = false;
			if (s.applyToAllData && s.type === "local") {
				if (this._filter && (p.type === "local" && p.enabled === true || p.enabled === false || p.type === "remote" && p.enabled === true && this.settings.filtering.type === "local")) {
					data = this._filteredData
				} else {
					data = this.data()
				}
				resetPaging = true
			} else {
				data = this.dataView()
			}
			data = this.sortDataRecursive(data, 0, fields, direction);
			if (resetPaging && p.type === "local") {
				if (!this._filter) {
					this._data = data
				} else {
					this._filteredData = data
				}
				this._page()
			} else {
				this._dataView = data
			}
			if (this.shouldCallGenerateFlatDataView()) {
				this.generateFlatDataView()
			}
			this._populateTransformedData(data);
			return this
		},
		sortDataRecursive: function (data, level, fields, direction) {
			var layoutKey = this.settings.treeDS.childDataKey, i, childDS, dataLen = data.length,
				s = this.settings.treeDS.sorting;
			if (s.toLevel === -1 || s.toLevel >= level) {
				for (i = 0; i < dataLen; i++) {
					childDS = data[i][layoutKey];
					if (childDS && childDS.length > 0) {
						childDS = this.sortDataRecursive(childDS, level + 1, fields, direction)
					}
				}
			}
			if ((s.fromLevel <= level || s.fromLevel === -1) && (s.toLevel >= level || s.toLevel === -1)) {
				data = this.sortData(data, fields, direction)
			}
			return data
		},
		sortData: function (data, fields, direction) {
			var s = this.settings.sorting, schema, sortF, convertFunc, settings = this.settings, self = this;
			if ($.type(s.customFunc) === "function") {
				data = s.customFunc(data, fields, direction)
			} else {
				schema = this.settings.schema;
				if (!direction) {
					direction = ""
				}
				if ($.type(s.compareFunc) === "function") {
					sortF = s.compareFunc
				} else {
					sortF = function (grid, fields, schema, reverse, convertf, caseSensitive) {
						reverse = reverse ? -1 : 1;

						function compareVals(format, enableUTCDates, rowTemplate, x, y) {
							if (format) {
								if ($.type(x) === "date" && $.type(y) === "date") {
									if (format === "time" || format === "timeLong" || format === "h:mm:ss tt") {
										x = new Date("January 01, 2000 " + $.ig.formatter(x, "date", format, rowTemplate, enableUTCDates));
										y = new Date("January 01, 2000 " + $.ig.formatter(y, "date", format, rowTemplate, enableUTCDates))
									}
								}
							}
							if ((x === null || x === undefined) && (y === null || y === undefined)) {
								return 0
							}
							if ((x === null || x === undefined) && y !== null && y !== undefined) {
								return -1
							}
							if (x !== null && x !== undefined && (y === null || y === undefined)) {
								return 1
							}
							return x > y ? 1 : x < y ? -1 : 0
						}

						return function (obj1, obj2) {
							var i, f, arr1 = [], arr2 = [], a, b, key, col, format, o, enableUTCDates, rowTemplate;
							if (grid) {
								o = grid.options;
								enableUTCDates = o.enableUTCDates;
								rowTemplate = !o.rowTemplate || o.rowTemplate.length <= 0
							}
							for (i = 0; i < fields.length; i++) {
								key = fields[i].fieldName;
								if (grid && grid.columnByKey) {
									col = grid.columnByKey(key);
									if (col !== undefined && col !== null) {
										format = col.format
									}
								}
								if (fields[i].layout && (settings.key && settings.key !== fields[i].layout || !settings.key)) {
									continue
								}
								f = fields[i];
								if (f.fieldIndex >= 0) {
									f.fieldName = f.fieldIndex
								}
								a = self.getCellValue(f.fieldName, obj1);
								b = self.getCellValue(f.fieldName, obj2);
								if (convertf !== undefined) {
									a = convertf(a, f.fieldName);
									b = convertf(b, f.fieldName)
								}
								if (caseSensitive === false) {
									if (a !== undefined && a !== null && a.toLowerCase) {
										a = a.toLowerCase()
									}
									if (b !== undefined && b !== null && b.toLowerCase) {
										b = b.toLowerCase()
									}
								}
								if (f.dir !== undefined && f.dir !== null) {
									reverse = f.dir.toLowerCase().startsWith("desc");
									reverse = reverse ? -1 : 1
								} else if (direction !== undefined && direction !== null && direction !== "") {
									reverse = direction.toLowerCase().startsWith("desc");
									reverse = reverse ? -1 : 1
								}
								if (fields.length === 1) {
									arr1 = reverse * compareVals(format, enableUTCDates, rowTemplate, a, b);
									arr2 = reverse * compareVals(format, enableUTCDates, rowTemplate, b, a)
								} else {
									if (reverse === -1) {
										arr1.push(-compareVals(format, enableUTCDates, rowTemplate, a, b));
										arr2.push(-compareVals(format, enableUTCDates, rowTemplate, b, a))
									} else {
										arr1.push(compareVals(format, enableUTCDates, rowTemplate, a, b));
										arr2.push(compareVals(format, enableUTCDates, rowTemplate, b, a))
									}
								}
							}
							if (arr1 < arr2) {
								return -1
							}
							if (arr1 > arr2) {
								return 1
							}
							return 0
						}
					}
				}
				if ($.isFunction(s.customConvertFunc)) {
					convertFunc = s.customConvertFunc
				}
				if ($.type(fields) === "string") {
					fields = this._parseSortExpressions(fields)
				}
				if (fields.length > 0) {
					data = data.sort(sortF(this.settings.callee, fields, schema, direction.toLowerCase().startsWith("asc") ? false : true, convertFunc, s.caseSensitive));
					this._allDataSorted = data === this.data()
				}
			}
			return data
		},
		totalLocalRecordsCount: function () {
			var fdv = this._flatVisibleData;
			if (fdv && this.settings.paging.type !== "remote" && this.settings.treeDS.paging.mode !== "rootLevelOnly") {
				return fdv.length
			}
			return this._super()
		},
		pageCount: function () {
			var p = this.settings.paging;
			if (p.enabled && p.type === "local" && this.settings.treeDS.paging.mode === "allLevels") {
				return Math.ceil(this.totalLocalRecordsCount() / p.pageSize) || 1
			}
			return this._super.apply(this, arguments)
		},
		getFilteringMatchRecordsCount: function () {
			var count = this.metadata("filtering.countRecords");
			if (count !== undefined && count !== null) {
				return count
			}
			return this.totalRecordsCount()
		},
		filter: function (fieldExpressions, boolLogic, keepFilterState, fieldExpressionsOnStrings) {
			var i, f = this.settings.filtering, p = this.settings.paging, data, resetPaging;
			if (f.applyToAllData && f.type === "local") {
				data = this.data();
				resetPaging = true
			} else {
				if (this._cachedDataView && this._cachedDataView.length > 0) {
					data = this._cachedDataView
				} else {
					this._cachedDataView = $.merge([], this.dataView());
					data = this._cachedDataView
				}
			}
			this._filteredRecordsCount = 0;
			this._generatedFlatData = false;
			this._filteredData = this._filterDataRecursive(data, 0, fieldExpressions, boolLogic, keepFilterState, fieldExpressionsOnStrings);
			this._dataView = [];
			this._filter = true;
			if (resetPaging && p.type === "local" && p.enabled === true) {
				this.settings.paging.pageIndex = 0;
				this.pageSizeDirty(true);
				this._page()
			} else {
				for (i = 0; i < this._filteredData.length; i++) {
					this._dataView[i] = this._filteredData[i]
				}
			}
			if (this.shouldCallGenerateFlatDataView()) {
				this.generateFlatDataView()
			}
			this._populateTransformedData(this._filteredData);
			return this
		},
		_filterDataRecursive: function (data, level, fieldExpressions, boolLogic, keepFilterState, fieldExpressionsOnStrings) {
			var i, j, expr = null, count = 0, skipRec = false, f = this.settings.filtering, foundChildDS, subDS, t, k,
				schema, fields, tmpbool, allFieldsExpr, stringVal, fExprLen, fExprStrLen,
				propertyExp = this.settings.treeDS.propertyExpanded, filteredData = [], childDS,
				layoutKey = this.settings.treeDS.childDataKey, fts = this.settings.treeDS.filtering,
				matchFiltering = fts.matchFiltering;
			schema = this.schema();
			if (schema === null || schema === undefined) {
				throw new Error($.ig.DataSourceLocale.locale.filteringNoSchema)
			}
			if ($.type(fieldExpressions) === "string") {
				expr = fieldExpressions
			}
			if ($.type(fieldExpressionsOnStrings) === "string") {
				allFieldsExpr = fieldExpressionsOnStrings
			} else if ($.type(fieldExpressionsOnStrings) === "undefined") {
				fieldExpressionsOnStrings = []
			}
			if ($.type(fieldExpressions) === "array" && fieldExpressions.length === 0 && $.type(fieldExpressionsOnStrings) === "array" && fieldExpressionsOnStrings.length === 0) {
				return
			}
			if ($.type(f.customFunc) === "function") {
				filteredData = f.customFunc(fieldExpressions, data)
			} else {
				if (expr) {
					fieldExpressions = this._parseFilterExprString(expr)
				}
				if (allFieldsExpr) {
					fieldExpressionsOnStrings = this._parseFilterExprString(allFieldsExpr)
				}
				fExprLen = fieldExpressions.length;
				fExprStrLen = fieldExpressionsOnStrings.length;
				for (i = 0; i < data.length; i++) {
					if (matchFiltering) {
						delete data[i][matchFiltering]
					}
					if (!((fts.fromLevel <= level || fts.fromLevel === -1) && (fts.toLevel >= level || fts.toLevel === -1))) {
						childDS = data[i][layoutKey];
						if (childDS && childDS.length) {
							childDS = this._filterDataRecursive(childDS, level + 1, fieldExpressions, boolLogic, keepFilterState, fieldExpressionsOnStrings);
							if (childDS && childDS.length > 0) {
								filteredData[count++] = $.extend(true, {}, data[i]);
								filteredData[count - 1][layoutKey] = childDS
							}
						}
						continue
					}
					skipRec = false;
					for (j = 0; j < fExprLen; j++) {
						fields = schema.fields();
						if (fieldExpressions[j].fieldIndex) {
							if (fieldExpressions[j].fieldIndex < fields.length) {
								t = this._getFieldTypeFromSchema(fields[fieldExpressions[j].fieldIndex].name)
							}
							skipRec = !this._findMatch(data[i][fieldExpressions[j].fieldIndex], fieldExpressions[j].expr, t, !f.caseSensitive, fieldExpressions[j].cond, fieldExpressions[j].preciseDateFormat)
						} else {
							if (fieldExpressions[j].dataType !== undefined && fieldExpressions[j].dataType !== null) {
								t = fieldExpressions[j].dataType
							} else {
								for (k = 0; k < fields.length; k++) {
									if (fields[k].name === fieldExpressions[j].fieldName) {
										t = this._getFieldTypeFromSchema(fields[k].name);
										break
									}
								}
							}
							skipRec = !this._findMatch(data[i][fieldExpressions[j].fieldName], fieldExpressions[j].expr, t, !f.caseSensitive, fieldExpressions[j].cond, fieldExpressions[j].preciseDateFormat, fieldExpressions[j].fieldName, data[i])
						}
						tmpbool = fieldExpressions[j].logic !== null && fieldExpressions[j].logic !== undefined && (fieldExpressions[j].logic.toLowerCase() === "or" || fieldExpressions[j].logic.toLowerCase() === "and") ? fieldExpressions[j].logic : boolLogic;
						if (tmpbool === undefined || tmpbool === null || $.type(tmpbool) !== "string") {
							tmpbool = "and"
						}
						if (skipRec && tmpbool.toLowerCase() === "and") {
							break
						}
						if (!skipRec && tmpbool.toLowerCase() === "or") {
							break
						}
					}
					if (!skipRec && fExprStrLen) {
						for (j = 0; j < fExprStrLen; j++) {
							fields = schema.fields();
							if (fieldExpressionsOnStrings[j].fieldIndex) {
								if (fieldExpressionsOnStrings[j].fieldIndex < fields.length) {
									t = this._getFieldTypeFromSchema(fields[fieldExpressionsOnStrings[j].fieldIndex].name)
								}
								stringVal = data[i][fieldExpressionsOnStrings[j].fieldIndex] ? data[i][fieldExpressionsOnStrings[j].fieldIndex].toString() : "";
								skipRec = !this._findMatch(stringVal, fieldExpressionsOnStrings[j].expr, "string", !f.caseSensitive, fieldExpressionsOnStrings[j].cond, data[i])
							} else {
								for (k = 0; k < fields.length; k++) {
									if (fields[k].name === fieldExpressionsOnStrings[j].fieldName) {
										t = this._getFieldTypeFromSchema(fields[k].name);
										break
									}
								}
								stringVal = data[i][fieldExpressionsOnStrings[j].fieldName] !== null && data[i][fieldExpressionsOnStrings[j].fieldName] !== undefined ? data[i][fieldExpressionsOnStrings[j].fieldName].toString() : "";
								skipRec = !this._findMatch(stringVal, fieldExpressionsOnStrings[j].expr, "string", !f.caseSensitive, fieldExpressionsOnStrings[j].cond, data[i])
							}
							tmpbool = fieldExpressionsOnStrings[j].logic !== null && fieldExpressionsOnStrings[j].logic !== undefined && (fieldExpressionsOnStrings[j].logic.toLowerCase() === "or" || fieldExpressionsOnStrings[j].logic.toLowerCase() === "and") ? fieldExpressionsOnStrings[j].logic : boolLogic;
							if (tmpbool === undefined || tmpbool === null || $.type(tmpbool) !== "string") {
								tmpbool = "and"
							}
							if (skipRec && tmpbool.toLowerCase() === "and") {
								break
							}
							if (!skipRec && tmpbool.toLowerCase() === "or") {
								break
							}
						}
					}
					foundChildDS = false;
					childDS = data[i][layoutKey];
					subDS = null;
					if (childDS && childDS.length) {
						childDS = this._filterDataRecursive(childDS, level + 1, fieldExpressions, boolLogic, keepFilterState, fieldExpressionsOnStrings);
						if (childDS && childDS.length > 0) {
							subDS = data[i][layoutKey];
							data[i][layoutKey] = null;
							filteredData[count++] = $.extend(true, {}, data[i]);
							data[i][layoutKey] = subDS;
							filteredData[count - 1][layoutKey] = childDS;
							foundChildDS = true;
							if (propertyExp) {
								filteredData[count - 1][propertyExp] = true
							}
							if (!skipRec && matchFiltering) {
								filteredData[count - 1][matchFiltering] = true;
								this._filteredRecordsCount++
							}
						}
					}
					if (!skipRec && !foundChildDS) {
						if (fts.displayMode === "showWithAncestors" && childDS) {
							subDS = data[i][layoutKey];
							data[i][layoutKey] = null;
							filteredData[count] = $.extend(true, {}, data[i]);
							data[i][layoutKey] = subDS;
							filteredData[count][layoutKey] = null;
							count++
						} else {
							if (childDS) {
								subDS = data[i][layoutKey];
								data[i][layoutKey] = null
							}
							filteredData[count] = $.extend(true, {}, data[i]);
							if (subDS) {
								filteredData[count][layoutKey] = subDS;
								data[i][layoutKey] = subDS
							}
							count++
						}
						this._filteredRecordsCount++;
						if (matchFiltering) {
							filteredData[count - 1][matchFiltering] = true
						}
						if (childDS && propertyExp) {
							filteredData[count - 1][propertyExp] = false
						}
					}
				}
			}
			return filteredData
		},
		getFilteredRecordsCountFromDataView: function () {
			var fdv = this.flatDataView(), i, count = 0,
				propMatchFiltering = this.settings.treeDS.filtering.matchFiltering;
			if (this._filter) {
				for (i = 0; i < fdv.length; i++) {
					if (fdv[i][propMatchFiltering]) {
						count++
					}
				}
			}
			return count
		},
		getFilteredRecordsCount: function () {
			if (this._filter) {
				return this._filteredRecordsCount
			}
			return 0
		},
		clearLocalFilter: function () {
			this.clearMatchFiltering();
			this._super();
			this._filter = false;
			if (this.shouldCallGenerateFlatDataView()) {
				this.generateFlatDataView()
			}
		},
		shouldCallGenerateFlatDataView: function () {
			var s = this.settings, paging = s.paging;
			return !paging || !paging.enabled || paging.type !== "local" || this.settings.treeDS.paging.mode === "rootLevelOnly"
		},
		clearMatchFiltering: function (data) {
			var i, fts = this.settings.treeDS.filtering, dataLen, layout, matchFiltering = fts.matchFiltering,
				layoutKey = this.settings.treeDS.childDataKey;
			if (!matchFiltering) {
				return
			}
			if (!data) {
				data = this._filteredData;
				if (!data) {
					return
				}
			}
			dataLen = data.length;
			for (i = 0; i < dataLen; i++) {
				delete data[i][matchFiltering];
				layout = data[i][layoutKey];
				if (layout) {
					this.clearMatchFiltering(layout)
				}
			}
		},
		getPathBy: function (record) {
			if (record === null || record === undefined) {
				return null
			}
			var data = this._data, resRecord, search, key, objPath = {path: ""}, path, len = data ? data.length : 0;
			search = len > 0 && $.isArray(data[0]) ? this._lookupPkIndex() : this.settings.primaryKey;
			if ($.type(record) !== "object") {
				key = record
			} else {
				key = record[search]
			}
			resRecord = this.findRecordByKey(key, null, objPath);
			if (!resRecord) {
				return null
			}
			path = objPath.path;
			if (path !== "") {
				path += "/"
			}
			return path + key
		},
		_findIndexInFlatDS: function (ds, foreignKeyValue, targetInd) {
			var i, dr, fKey = this.settings.treeDS.foreignKey, len = ds.length, lastInd, layoutInd = 0,
				foundLayout = false;
			for (i = 0; i < len; i++) {
				dr = ds[i];
				if (dr[fKey] === foreignKeyValue) {
					foundLayout = true;
					lastInd = i;
					if (targetInd === layoutInd) {
						return i
					}
					layoutInd++
				}
			}
			if (foundLayout) {
				return ++lastInd
			}
			return -1
		},
		findRecordByKey: function (key, ds, objPath) {
			var i, d, layouts = [], res, path, data = ds || this._data, len = data ? data.length : 0,
				dsLayoutKey = this.settings.treeDS.childDataKey,
				search = len > 0 && $.isArray(data[0]) ? this._lookupPkIndex() : this.settings.primaryKey;
			objPath = objPath || {path: "", parentRows: []};
			objPath.parentRows = objPath.parentRows || [];
			objPath.path = objPath.path || "";
			for (i = 0; i < len; i++) {
				d = data[i];
				if (d[search] === key) {
					objPath.parentRows.push({row: d, level: d[this.settings.treeDS.propertyDataLevel]});
					return data[i]
				}
				if (d[dsLayoutKey]) {
					path = objPath.path;
					if (path !== "") {
						path += "/"
					}
					layouts.push({
						layout: d[dsLayoutKey],
						objPath: {
							path: path + d[search],
							parentRows: objPath.parentRows.concat({
								row: d,
								level: d[this.settings.treeDS.propertyDataLevel]
							})
						}
					})
				}
			}
			len = layouts.length;
			for (i = 0; i < len; i++) {
				res = this.findRecordByKey(key, layouts[i].layout, layouts[i].objPath);
				objPath.path = layouts[i].objPath.path;
				objPath.parentRows = layouts[i].objPath.parentRows;
				if (res) {
					return res
				}
			}
			return null
		},
		_invokeCallback: function (callee, callback) {
			if (!this.schema() && this._dataBinding) {
				this._data = this.processDataPerLevel(this._data, 0, true)
			}
			if (this.shouldCallGenerateFlatDataView()) {
				this.generateFlatDataView()
			}
			this._super(callee, callback)
		},
		removeRecordByKey: function (key, origDs) {
			var data, count = 0, all = [this._data];
			this._addOnlyUniqueToCollection(all, this._dataView);
			this._addOnlyUniqueToCollection(all, this._filteredData);
			if (!this._isHierarchicalDataSource) {
				this._removeRecordInFlatDs(origDs, key)
			} else {
				this._addOnlyUniqueToCollection(all, origDs)
			}
			while (count < all.length) {
				data = all[count++];
				this._removeRecordByKeyForData(key, data)
			}
		},
		_removeRecordInFlatDs: function (data, key, fk) {
			if (!data || !$.isArray(data) || !data.length || key === undefined && fk === undefined) {
				return
			}
			var i, prime = this.settings.primaryKey, tmp, pkSearch = $.isArray(data[0]) ? this._lookupPkIndex() : prime,
				fkSearch = this.settings.treeDS.foreignKey;
			for (i = 0; i < data.length; i++) {
				if (data[i]) {
					if (key !== undefined && data[i][pkSearch] === key) {
						$.ig.removeFromArray(data, i);
						this._removeRecordInFlatDs(data, undefined, key);
						break
					} else if (fk !== undefined && data[i][fkSearch] === fk) {
						tmp = data[i][pkSearch];
						$.ig.removeFromArray(data, i);
						this._removeRecordInFlatDs(data, undefined, tmp);
						i = 0
					}
				}
			}
		},
		_removeRecordByKeyForData: function (key, data) {
			if (!data) {
				return false
			}
			var i, prime = this.settings.primaryKey, len = data ? data.length : 0,
				search = len > 0 && $.isArray(data[0]) ? this._lookupPkIndex() : prime,
				layoutKey = this.settings.treeDS.childDataKey, layoutData = [], found = false;
			for (i = 0; i < len; i++) {
				if (data[i]) {
					if (data[i][search] === key) {
						$.ig.removeFromArray(data, i);
						found = true;
						break
					}
					if (data[i][layoutKey]) {
						layoutData.push(data[i][layoutKey])
					}
				}
			}
			if (!found) {
				len = layoutData.length;
				for (i = 0; i < len; i++) {
					found = this._removeRecordByKeyForData(key, layoutData[i]);
					if (found) {
						return true
					}
				}
			} else {
				return true
			}
			return false
		},
		deleteRow: function (rowId, autoCommit) {
			var ret = this._super.call(this, rowId, autoCommit);
			this._dataBoundDepth = null;
			this.getDataBoundDepth();
			return ret
		},
		getChildrenByKey: function (key, ds) {
			var childKey = this.settings.treeDS.childDataKey, rec = this.findRecordByKey(key, ds);
			if (rec && rec[childKey]) {
				return rec[childKey]
			}
			return null
		},
		insertRow: function (rowId, rowObject, rowIndex, autoCommit, parentRowId) {
			if (parentRowId === null || parentRowId === undefined) {
				return this._super(rowId, rowObject, rowIndex, autoCommit)
			}
			var t = this._createInsertNodeTransaction(rowId, rowObject, rowIndex, parentRowId);
			this._addTransaction(t);
			if (autoCommit === true) {
				this.commit(rowId)
			}
			if ($.type(this.settings.rowInserted) === "function") {
				if (this.settings.callee) {
					this.settings.rowInserted.apply(this.settings.callee, [{
						rowId: rowId,
						row: rowObject,
						parentRowId: parentRowId,
						rowIndex: rowIndex
					}, this])
				} else {
					this.settings.rowInserted({
						rowId: rowId,
						row: rowObject,
						parentRowId: parentRowId,
						rowIndex: rowIndex
					}, this)
				}
			}
			return t
		},
		_createInsertNodeTransaction: function (rowId, rowObject, rowIndex, parentRowId) {
			return {
				type: "insertnode",
				tid: this._generateTransactionId(),
				row: rowObject,
				rowId: rowId,
				rowIndex: rowIndex,
				parentRowId: parentRowId
			}
		},
		_commitTransaction: function (t) {
			var origDs, dv, rec;
			if (t.type === "insertnode") {
				origDs = this.settings.localSchemaTransform ? this._origDs : null;
				if (origDs === this._data) {
					origDs = null
				}
				this._addRow(t.row, t.rowIndex, origDs, t.parentRowId);
				this._removeTransactionByTransactionId(t.tid)
			} else {
				this._super(t);
				if (this._filter && (t.type === "cell" || t.type === "row")) {
					dv = this.dataView();
					rec = this.findRecordByKey(t.rowId, dv);
					if (rec) {
						this._updateRecOnCommit(t, [rec])
					}
				}
			}
			if (this.settings.paging.enabled && this.settings.paging.type !== "remote") {
				this._generateFlatDataAndCountProperties()
			}
			this.generateFlatDataView()
		},
		_preprocessAddRow: function (row, index, origDs, at, data) {
			var newRow, recAt, res = {parentRec: null, cashedData: data, layoutData: null},
				childKey = this.settings.treeDS.childDataKey;
			if (at === undefined || at === null || !data) {
				res.layoutData = data;
				return res
			}
			if (!this._isHierarchicalDataSource && data === origDs) {
				if ($.type(row) === "object") {
					newRow = $.extend(true, {}, row)
				}
				if (this.settings.treeDS.foreignKey !== null) {
					newRow[this.settings.treeDS.foreignKey] = at
				}
				data.push(newRow);
				return res
			}
			recAt = this.findRecordByKey(at, data);
			if (!recAt) {
				return res
			}
			recAt[childKey] = recAt[childKey] || [];
			res.parentRec = recAt;
			res.layoutData = recAt[childKey];
			return res
		},
		_postprocessAddRow: function (row, index, origDs, at, pdata) {
			var parentRec = pdata ? pdata.parentRec : null, childKey = this.settings.treeDS.childDataKey;
			if (parentRec && pdata.newData && childKey !== null) {
				parentRec[childKey] = pdata.newData;
				if (parentRec[this.settings.treeDS.propertyDataLevel] === this.getDataBoundDepth()) {
					this._dataBoundDepth++
				}
			}
		},
		_addRow: function (row, index, origDs, at) {
			var ret = this._super.call(this, row, index, origDs, at);
			if (at !== undefined && at !== null && !this.settings.treeDS.propertyDataLevel) {
				this._dataBoundDepth = null;
				this.getDataBoundDepth()
			}
			return ret
		}
	});
	if (typeof define === "function" && define.amd && define.amd.jQuery) {
		define("ig.datasource", ["ig.util"], function () {
			return $.ig.DataSource
		})
	}
})(jQuery);
/*
//@ sourceMappingURL=E:\Work\6\967\src\DEV\jQuery\2016.1\Source\ClientUI\js\modules\infragistics.datasource.js.map
*/
/*!@license
 * Infragistics.Web.ClientUI Templating Engine 16.1.20161.2270
 *
 * Copyright (c) 2011-2017 Infragistics Inc.
 *
 * Engine used for data templating
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 *
 */
(function ($) {
	$.ig = $.ig || {};
	$.extend($.ig, {
		tmpl: function (template, data, args) {
			var tmpl = template, cacheConst;
			if (tmpl) {
				tmpl = tmpl.replace(this.regExp.lineBreak, "");
				tmpl = tmpl.replace(this.regExp.comment, "");
				if (typeof data === "function") {
					if (args) {
						data = data.apply(this, args)
					} else {
						data = data.call()
					}
				}
				if (this._internalTmplCache && this._internalTmplCache.hasOwnProperty(tmpl)) {
					this.tokens = this._internalTmplCache[tmpl].tokens;
					this.args = this._internalTmplCache[tmpl].args;
					this.i = this._internalTmplCache[tmpl].i;
					this._hasBlock = this._internalTmplCache[tmpl]._hasBlock;
					tmpl = this._internalTmplCache[tmpl].tmpl
				} else {
					this.tokens = [];
					this.args = [];
					this.i = 0;
					this._tokenizeTemplate(tmpl);
					cacheConst = tmpl;
					this._internalTmplCache[cacheConst] = {};
					this._internalTmplCache[cacheConst].tokens = this.tokens;
					if (this.regExp.block.test(tmpl)) {
						this._hasBlock = true;
						tmpl = this._tokenizeDirectives(tmpl)
					} else {
						this._hasBlock = false
					}
					this._internalTmplCache[cacheConst].args = this.args;
					this._internalTmplCache[cacheConst].i = this.i;
					this._internalTmplCache[cacheConst]._hasBlock = this._hasBlock;
					this._internalTmplCache[cacheConst].tmpl = tmpl
				}
				if (!this.tokens.length) {
					return tmpl
				}
				if (this._hasBlock) {
					tmpl = this._compileTemplate(tmpl, data)
				} else {
					tmpl = this._populateTemplate(tmpl, data)
				}
				delete this.args;
				delete this.tokens;
				delete this._hasBlock;
				delete this.i
			}
			return tmpl
		},
		clearTmplCache: function () {
			delete this._internalTmplCache;
			this._internalTmplCache = {}
		},
		encode: function (value) {
			return value !== null && value !== undefined ? value.toString().replace(this.regExp.amp, "&amp;").replace(this.regExp.lt, "&lt;").replace(this.regExp.gt, "&gt;").replace(this.regExp.ap, "&#39;").replace(this.regExp.ic, "&#34;") : ""
		},
		regExp: {
			comment: /\s#[^#]*#/g,
			sub: /\$\{(([\w\$\-]+(\.|\s)?[\w\$\-]*)+)\}/,
			nonEncodeSub: /\{\{html\s+([\w\$\-]+(\.|\s)?[\w\$\-]*)+\}\}/,
			forSub: /\$\{(([\w\$]+\.[\w\$]*)+)\}/,
			arg: /args\[\d+\](?!.*\+)/,
			block: /\{\{(\w+).*?\}\}+(.*)(\{\{\/\1\}\})/,
			blockCont: /\{\{(?!\/)(\S+)(.*)\}\}(.*)/,
			blockDirective: /\{\{\S+.*?\}\}/,
			index: /\$i/g,
			lineBreak: /(\r\n|\n|\r)/gm,
			lt: /</g,
			gt: />/g,
			ap: /'/g,
			ic: /"/g,
			amp: /&/g
		},
		_directives: {
			"if": {start: "if (", close: ") {", end: " }"},
			elseif: {start: " } else if (", close: ") {", end: ""},
			"else": {start: " } else {", close: "", end: ""},
			each: {start: "for (var i = 0; i < $data.length; i++) {", close: "", end: " }"}
		},
		_internalTmplCache: {},
		_tokenizeTemplate: function (template) {
			var tempToken, splitName;
			if (this.regExp.sub.test(template)) {
				tempToken = this.regExp.sub.exec(template);
				while (tempToken !== null) {
					splitName = tempToken[1].split(".");
					template = template.replace(new RegExp("\\$\\{" + tempToken[1].replace(/\$/g, "\\$") + "\\}", "g"), "");
					tempToken[3] = new RegExp("\\$\\{" + tempToken[1].replace(/\$/g, "\\$") + "\\}", "g");
					tempToken[1] = splitName;
					tempToken[2] = true;
					this.tokens.push(tempToken);
					tempToken = this.regExp.sub.exec(template)
				}
			}
			if (this.regExp.nonEncodeSub.test(template)) {
				tempToken = this.regExp.nonEncodeSub.exec(template);
				while (tempToken !== null) {
					splitName = tempToken[1].split(".");
					template = template.replace(new RegExp("\\{\\{html\\s+" + tempToken[1].replace(/\$/g, "\\$") + "\\}\\}", "g"), "");
					tempToken[3] = new RegExp("\\{\\{html\\s+" + tempToken[1].replace(/\$/g, "\\$") + "\\}\\}", "g");
					tempToken[1] = splitName;
					tempToken[2] = false;
					this.tokens.push(tempToken);
					tempToken = this.regExp.nonEncodeSub.exec(template)
				}
			}
		},
		_tokenizeDirectives: function (template) {
			var tmpl = 'var result = "";', tokens = this.regExp.block.exec(template), temp;
			if (template.indexOf(tokens[0]) > 0 || template.length !== tokens[0].length) {
				temp = template.split(tokens[0]);
				if (temp[0] && temp[0].length > 0) {
					this.args.push(temp[0]);
					tmpl += "result += args[" + this.i++ + "];"
				}
			}
			tmpl += this._handleCompleteBlock(tokens);
			if (temp && temp.length > 0 && temp[1].length > 0) {
				this.args.push(temp[1]);
				tmpl += "result += args[" + this.i++ + "];"
			}
			tmpl += "return result;";
			return tmpl
		},
		_handleCompleteBlock: function (tokens) {
			var tmpl = tokens[0], template = "", blocks = [], i, temp;
			tmpl = tmpl.replace("{{" + tokens[1], this._directives[tokens[1]].start);
			if (tokens[1] === "each") {
				blocks.push(tokens[0].split(tokens[3]));
				blocks.push(tokens[2].split(tokens[3]));
				for (i = 0; i < blocks[1].length; i++) {
					if (blocks[0][i].indexOf("{{each") > 0) {
						temp = blocks[0][i].split("{{each")[0];
						this.args.push(temp);
						template += "result += args[" + this.i++ + "];";
						blocks[0][i] = blocks[0][i].substr(blocks[0][i].indexOf("{{each"));
						temp = this.regExp.blockDirective.exec(blocks[1][i]);
						blocks[1][i] = blocks[1][i].substr(blocks[1][i].indexOf(temp[0]) + temp[0].length)
					}
					blocks[0][i] = blocks[0][i].replace("{{" + tokens[1], this._directives[tokens[1]].start);
					template += this._handleEach(blocks[0][i] + "{{/each}}", [blocks[0][i] + "{{/each}}", "each", blocks[1][i], "{{/each}}"])
				}
			} else if (tokens[1] === "if") {
				template += this._handleIfElse(tmpl, tokens)
			}
			return template
		},
		_handleEach: function (template, tokens) {
			var tmpl = template, eachVar, body, forSub, sub, expr, inner;
			eachVar = this.regExp.sub.exec(tmpl);
			tmpl = tmpl.replace(eachVar[0], "");
			tmpl = tmpl.replace("$data", eachVar[0]);
			body = tokens[2];
			if (/\$data/.test(body)) {
				body = body.replace(/\$data/g, '" + ' + eachVar[0] + '[ i ] + "');
				this.args.push(eachVar[0]);
				this.i++
			}
			forSub = this.regExp.forSub.exec(body);
			while (forSub) {
				body = body.replace(new RegExp("\\$\\{" + forSub[1] + "\\}", "g"), '" + ' + eachVar[0] + "[ i ]" + forSub[1].substr(forSub[1].indexOf(".")) + ' + "');
				forSub = this.regExp.forSub.exec(body)
			}
			body = body.replace(/\$index/g, '" + i + "');
			tmpl = tmpl.replace(tokens[2], 'result += "' + body + '"');
			tmpl = tmpl.replace(/\}\}/, this._directives[tokens[1]].close);
			tmpl = tmpl.replace(tokens[3], this._directives[tokens[1]].end);
			if (this.regExp.block.test(tmpl)) {
				inner = this.regExp.block.exec(tmpl);
				tmpl = tmpl.replace(inner[0], this._handleCompleteBlock(inner))
			}
			sub = this.regExp.sub.exec(tmpl);
			while (sub) {
				expr = new RegExp("\\$\\{" + sub[1] + "\\}", "g");
				tmpl = tmpl.replace(expr, "args[" + this.i++ + "]");
				this.args.push(sub[0]);
				sub = this.regExp.sub.exec(tmpl)
			}
			return tmpl
		},
		_handleIfElse: function (template, tokens) {
			var tmpl = template, i = 0, htmlStrings, sub, inner, index, tmplArr = [];
			tmpl = tmpl.replace(/\}\}/, this._directives[tokens[1]].close);
			index = tmpl.lastIndexOf(tokens[3]);
			tmpl = tmpl.substr(0, index) + tmpl.slice(index + tokens[3].length - 1);
			if (this.regExp.block.test(tmpl)) {
				inner = this.regExp.block.exec(tmpl);
				tmpl = tmpl.replace(inner[0], this._handleCompleteBlock(inner))
			}
			htmlStrings = tokens[2].split(this.regExp.blockDirective);
			tmplArr.push(tmpl.slice(0, tmpl.indexOf(") {") + 3));
			tmplArr.push(tmpl.slice(tmpl.indexOf(") {") + 3));
			for (i; i < htmlStrings.length; i++) {
				if (htmlStrings[i] && htmlStrings[i].length && htmlStrings[i].length > 0) {
					tmplArr[1] = tmplArr[1].replace(htmlStrings[i], "result += args[" + this.i++ + "];");
					this.args.push(htmlStrings[i])
				}
			}
			tmpl = tmplArr.join("");
			tokens = this.regExp.blockCont.exec(tmpl);
			while (tokens) {
				tmpl = tmpl.replace("{{" + tokens[1], this._directives[tokens[1]].start);
				tmpl = tmpl.replace(/\}\}/, this._directives[tokens[1]].close);
				tokens = this.regExp.blockCont.exec(tmpl)
			}
			sub = this.regExp.sub.exec(tmpl);
			while (sub) {
				tmpl = tmpl.replace(new RegExp("\\$\\{" + sub[1] + "\\}", "g"), "args[" + this.i++ + "]");
				this.args.push(sub[0]);
				sub = this.regExp.sub.exec(tmpl)
			}
			return tmpl
		},
		_populateTemplate: function (template, data) {
			var i, j, result = "", temp;
			if ($.type(data) !== "array") {
				for (i = 0; i < this.tokens.length; i++) {
					template = this._populateArgumentValue(data, this.tokens[i], template)
				}
				result = template
			} else {
				for (j = 0; j < data.length; j++) {
					temp = template;
					for (i = 0; i < this.tokens.length; i++) {
						temp = this._populateArgumentValue(data[j], this.tokens[i], temp)
					}
					temp = temp.replace(this.regExp.index, j);
					result += temp
				}
			}
			return result
		},
		_compileTemplate: function (template, data) {
			var i, j, k, result = "", temp, tempArgs = [], arg = "", f;
			if ($.type(data) !== "array") {
				for (j = 0; j < this.args.length; j++) {
					arg = this.args[j];
					for (i = 0; i < this.tokens.length; i++) {
						if (arg === this.tokens[i][0]) {
							arg = this._getArgumentValue(data, this.tokens[i], arg);
							break
						} else if (typeof arg === "string") {
							arg = this._populateArgumentValue(data, this.tokens[i], arg)
						}
					}
					if (arg === undefined) {
						throw new Error($.ig.Templating.locale.undefinedArgument + this.tokens[i][0])
					}
					if (typeof arg === "string") {
						arg = arg.replace(this.regExp.index, 0)
					}
					tempArgs.push(arg)
				}
				template = template.replace(/\$i/g, 0);
				result = new Function("args", template).call(this, tempArgs) || ""
			} else {
				temp = template.replace(this.regExp.index, "args[" + this.args.length + "]");
				f = new Function("args", temp);
				for (j = 0; j < data.length; j++) {
					tempArgs = [];
					for (k = 0; k < this.args.length; k++) {
						arg = this.args[k];
						for (i = 0; i < this.tokens.length; i++) {
							if (arg === this.tokens[i][0]) {
								arg = this._getArgumentValue(data[j], this.tokens[i], arg);
								break
							} else if (typeof arg === "string") {
								arg = this._populateArgumentValue(data[j], this.tokens[i], arg)
							}
						}
						if (arg === undefined) {
							throw new Error($.ig.Templating.locale.undefinedArgument + this.tokens[i][0])
						}
						if (typeof arg === "string") {
							arg = arg.replace(this.regExp.index, j)
						}
						tempArgs.push(arg)
					}
					tempArgs.push(j);
					result += f.call(this, tempArgs) || ""
				}
			}
			return result
		},
		_getArgumentValue: function (data, token, arg) {
			var tempData, l;
			if (token[1].length && token[1].length > 1) {
				tempData = data;
				for (l = 0; l < token[1].length; l++) {
					if (tempData && tempData.hasOwnProperty(token[1][l])) {
						tempData = tempData[token[1][l]]
					} else {
						tempData = "";
						break
					}
				}
				if (token[2] && typeof tempData === "string") {
					arg = this.encode(tempData)
				} else {
					arg = tempData
				}
			} else {
				if (token[2] && typeof data[token[1]] === "string") {
					arg = this.encode(data[token[1]])
				} else {
					arg = data[token[1]]
				}
			}
			return arg
		},
		_populateArgumentValue: function (data, token, arg) {
			var tempData, l, self = this;
			if (token[1].length && token[1].length > 1) {
				tempData = data;
				for (l = 0; l < token[1].length; l++) {
					if (tempData && tempData.hasOwnProperty(token[1][l])) {
						tempData = typeof tempData[token[1][l]] === "function" ? tempData[token[1][l]]() : tempData[token[1][l]]
					} else {
						tempData = "";
						break
					}
				}
				if (token[2] && typeof tempData === "string") {
					arg = arg.replace(token[3], function () {
						return self.encode(tempData)
					})
				} else {
					arg = arg.replace(token[3], function () {
						return tempData === null ? "" : tempData
					})
				}
			} else {
				if (token[2]) {
					arg = arg.replace(token[3], function () {
						return self.encode(typeof data[token[1]] === "function" ? data[token[1]]() : data[token[1]])
					})
				} else {
					arg = arg.replace(token[3], function () {
						return data[token[1]] === null ? "" : typeof data[token[1]] === "function" ? data[token[1]]() : data[token[1]]
					})
				}
			}
			return arg
		}
	})
})(jQuery);
/*
//@ sourceMappingURL=E:\Work\6\967\src\DEV\jQuery\2016.1\Source\ClientUI\js\modules\infragistics.templating.js.map
*/
/*!@license
 * Infragistics.Web.ClientUI jQuery Shared 16.1.20161.2270
 *
 * Copyright (c) 2011-2017 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 *	jquery-1.9.1.js
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	infragistics.util.js
 */
(function ($) {
	$.widget("ui.igLoading", {
		options: {cssClass: null, includeVerticalOffset: true},
		_indicator: null,
		_create: function () {
			var offset, css;
			css = this.options.cssClass === null ? "ui-igloadingmsg" : this.options.cssClass;
			this._hgrid = this.element.closest(".ui-iggrid-root").closest(".ui-iggrid");
			if (this.element.children("." + css).length === 0) {
				this._indicator = $("<span></span>").appendTo(this.element).attr("id", this.element[0].id + "_loading").addClass(css);
				offset = this.element.offset();
				this.refreshPos()
			}
			this._yShift = this._indicator ? Math.round(this._indicator.height() / 2) : 0
		},
		indicatorElement: function () {
			return this._indicator
		},
		indicator: function () {
			return this
		},
		show: function (refresh) {
			if (refresh !== false) {
				this.refreshPos()
			}
			if (this._resId) {
				clearInterval(this._resId)
			}
			this._resId = setInterval($.proxy(this._resizeContainer, this), 300);
			this._indicator.css("display", "").css("visibility", "visible")
		},
		hide: function () {
			this._indicator.css("display", "none").css("visibility", "hidden");
			clearInterval(this._resId);
			this._resId = null
		},
		_resizeContainer: function () {
			var offset = this.element.offset();
			if (offset.top + this.element.innerHeight() / 2 - this._yShift !== this._indicator.css("top")) {
				this.refreshPos()
			}
		},
		refreshPos: function () {
			var offset = this.element.offset(), top = offset.top + this.element.innerHeight() / 2 - this._yShift,
				left = offset.left + this.element.innerWidth() / 2, verticalOffset, relativeOffset;
			if (this._hgrid.length > 0 && top > this._hgrid.offset().top + this._hgrid.height()) {
				return
			}
			if (this._hgrid.length > 0 && left > this._hgrid.offset().left + this._hgrid.width()) {
				return
			}
			if (this.options.includeVerticalOffset && top > $(window).height()) {
				verticalOffset = ($(window).height() - offset.top - $(window).scrollTop()) / 2;
				top = $(window).height() - verticalOffset < offset.top ? offset.top + verticalOffset : $(window).height() - verticalOffset
			}
			relativeOffset = $.ig.util.getRelativeOffset(this._indicator);
			top -= relativeOffset.top;
			left -= relativeOffset.left;
			this._indicator.css("left", left).css("top", top)
		},
		destroy: function () {
			clearInterval(this._resId);
			this._indicator.remove()
		}
	});
	$.extend($.ui.igLoading, {version: "16.1.20161.2270"});
	$.widget("ui.igSlider", $.ui.mouse, {
		options: {
			animate: false,
			max: 100,
			min: 0,
			orientation: "horizontal",
			step: 1,
			value: 0,
			bookmarks: [{value: 0, title: "", disabled: false, css: ""}],
			showBookmarkTitle: true,
			syncHandleWithBookmark: true
		},
		css: {
			baseClasses: "ui-igslider ui-widget ui-widget-content ui-corner-all",
			horizontalOrientationClass: "ui-igslider-horizontal",
			verticalOrientationClass: "ui-igslider-vertical",
			sliderDisabledClass: "ui-igslider-disabled ui-disabled",
			handleClass: "ui-igslider-handle",
			bookmarkClass: "ui-igslider-bookmark",
			bookmarkDisabledClass: "ui-igslider-bookmark-disabled",
			bookmarkTooltipClass: "ui-igslider-bookmark-tooltip"
		},
		events: {
			start: "start",
			slide: "slide",
			stop: "stop",
			change: "change",
			bookmarkHit: "bookmarkhit",
			bookmarkClick: "bookmarkclick"
		},
		_numpages: 5,
		widget: function () {
			return this.element
		},
		_createWidget: function () {
			this.options.bookmarks = [];
			$.Widget.prototype._createWidget.apply(this, arguments)
		},
		_create: function () {
			var o = this.options, self = this, css = this.css;
			this._keySliding = false;
			this._mouseSliding = false;
			this._animateOff = true;
			this._handleIndex = null;
			this._detectOrientation();
			this._mouseInit();
			this.element.addClass(css.baseClasses);
			if (o.disabled) {
				this.element.addClass(css.sliderDisabledClass)
			}
			if ($(".ui-igslider-handle", this.element).length === 0) {
				$("<a href='#'></a>").appendTo(this.element).addClass(css.handleClass)
			}
			this.handles = $(".ui-igslider-handle", this.element).addClass("ui-state-default" + " ui-corner-all").bind({
				click: function (event) {
					event.preventDefault()
				}, mouseover: function () {
					if (!o.disabled) {
						$(this).addClass("ui-state-hover")
					}
				}, mouseout: function () {
					$(this).removeClass("ui-state-hover")
				}, focus: function () {
					if (!o.disabled) {
						$(".ui-igslider .ui-state-focus").removeClass("ui-state-focus");
						$(this).addClass("ui-state-focus")
					} else {
						$(this).blur()
					}
				}, blur: function () {
					$(this).removeClass("ui-state-focus")
				}, keydown: function (event) {
					var ret = true, index = $(this).data("index.ui-igslider-handle"), allowed, curVal, newVal, step;
					if (self.options.disabled) {
						return
					}
					switch (event.keyCode) {
						case $.ui.keyCode.HOME:
						case $.ui.keyCode.END:
						case $.ui.keyCode.PAGE_UP:
						case $.ui.keyCode.PAGE_DOWN:
						case $.ui.keyCode.UP:
						case $.ui.keyCode.RIGHT:
						case $.ui.keyCode.DOWN:
						case $.ui.keyCode.LEFT:
							ret = false;
							if (!self._keySliding) {
								self._keySliding = true;
								$(this).addClass("ui-state-active");
								allowed = self._start(event, index);
								if (allowed === false) {
									return
								}
							}
							break
					}
					step = self.options.step;
					curVal = newVal = self.value();
					switch (event.keyCode) {
						case $.ui.keyCode.HOME:
							newVal = self.options.min;
							break;
						case $.ui.keyCode.END:
							newVal = self.options.max;
							break;
						case $.ui.keyCode.PAGE_UP:
							newVal = self._trimValue(curVal + (self.options.max - self.options.min) / this._numpages);
							break;
						case $.ui.keyCode.PAGE_DOWN:
							newVal = self._trimValue(curVal - (self.options.max - self.options.min) / this._numpages);
							break;
						case $.ui.keyCode.UP:
						case $.ui.keyCode.RIGHT:
							if (curVal === self.options.max) {
								return
							}
							newVal = self._trimValue(curVal + step);
							break;
						case $.ui.keyCode.DOWN:
						case $.ui.keyCode.LEFT:
							if (curVal === self.options.min) {
								return
							}
							newVal = self._trimValue(curVal - step);
							break
					}
					self._slide(event, index, newVal);
					return ret
				}, keyup: function (event) {
					var index = $(this).data("index.ui-igslider-handle");
					if (self._keySliding) {
						self._keySliding = false;
						self._stop(event, index);
						self._change(event, index);
						$(this).removeClass("ui-state-active")
					}
				}
			}).each(function (i) {
				$(this).data("index.ui-igslider-handle", i)
			});
			this.handle = this.handles.eq(0);
			this._renderBookmarks();
			this._refreshValue();
			this._animateOff = false
		},
		_renderBookmarks: function () {
			if (this.options.bookmarks && this.options.bookmarks.length > 0) {
				var len = this.options.bookmarks.length, i = 0, o = this.options, css = this.css, mark, self = this;
				for (i; i < len; i++) {
					mark = o.bookmarks[i];
					$("<a href='#'></a>").appendTo(this.element).data("index.ui-igslider-bookmark", i).addClass(mark.disabled ? css.bookmarkDisabledClass : css.bookmarkClass).addClass(mark.css && mark.css.length > 0 ? mark.css : "").css("left", o.min !== o.max ? (mark.value - o.min) / (o.max - o.min) * 100 + "%" : "0%")
				}
				this.bookmarks = $(".ui-igslider-bookmark", this.element).addClass("ui-state-default").bind({
					mousedown: function (event) {
						var noCancel = true, bookmarkIndex = $(this).data("index.ui-igslider-bookmark");
						event.preventDefault();
						event.stopPropagation();
						noCancel = self._bookmarkClicked(event, bookmarkIndex);
						if (self.options.syncHandleWithBookmark && noCancel) {
							self._slide(event, 0, self.options.bookmarks[bookmarkIndex].value)
						}
					}, mouseover: function (event) {
						if (!o.disabled) {
							$(this).addClass("ui-state-hover");
							if (self.options.showBookmarkTitle) {
								self._showBookmarkTitle($(this), event)
							}
						}
					}, mouseout: function () {
						if (!o.disabled) {
							$(this).removeClass("ui-state-hover");
							if (self.options.showBookmarkTitle) {
								self._hideBookmarkTitle($(this))
							}
						}
					}, click: function (event) {
						event.preventDefault()
					}
				});
				this._createBookmarkTooltip();
				this._buildBookmarkHit()
			}
		},
		destroy: function () {
			this.handles.remove();
			this.clearBookmarks();
			this.element.removeClass(this.css.baseClasses + " ui-igslider-horizontal" + " ui-igslider-vertical" + " ui-igslider-disabled").removeData("slider").unbind(".slider");
			this._mouseDestroy();
			return this
		},
		_id: function (suffix) {
			return this.element[0].id + suffix
		},
		_showBookmarkTitle: function (bookmark, browserEvent) {
			var tooltip = $("#" + this._id("_tooltip")),
				title = this.options.bookmarks[bookmark.data("index.ui-igslider-bookmark")].title;
			if (title && title.length > 0) {
				tooltip.igTooltip("option", "text", title);
				tooltip.css("top", browserEvent.pageY - tooltip.outerHeight() - 5).css("left", browserEvent.pageX - tooltip.width() / 2 + bookmark.width() / 2).show()
			}
		},
		_hideBookmarkTitle: function () {
			$("#" + this._id("_tooltip")).hide()
		},
		_createBookmarkTooltip: function () {
			var html = '<div id="' + this._id("_tooltip") + '" class="' + this.css.bookmarkTooltipClass + '"></div>';
			$(html).appendTo($(document.body)).igTooltip({arrowLocation: "bottom"}).hide()
		},
		clearBookmarks: function () {
			if (this.bookmarks) {
				this.bookmarks.remove()
			}
		},
		_mouseCapture: function (event) {
			var o = this.options, position, normValue, index = 0, handle = this.handles.eq(index), self = this, offset,
				mouseOverHandle;
			if (o.disabled) {
				return false
			}
			this.elementSize = {width: this.element.outerWidth(), height: this.element.outerHeight()};
			this.elementOffset = this.element.offset();
			position = {x: event.pageX, y: event.pageY};
			normValue = this._normValueFromMouse(position);
			this._mouseSliding = true;
			self._handleIndex = index;
			handle.addClass("ui-state-active");
			if (!$.ig.util.isOpera) {
				handle.focus()
			}
			offset = handle.offset();
			mouseOverHandle = !$(event.target).parents().andSelf().is(".ui-igslider-handle");
			this._clickOffset = mouseOverHandle ? {
				left: 0,
				top: 0
			} : {
				left: event.pageX - offset.left - handle.width() / 2,
				top: event.pageY - offset.top - handle.height() / 2 - (parseInt(handle.css("borderTopWidth"), 10) || 0) - (parseInt(handle.css("borderBottomWidth"), 10) || 0) + (parseInt(handle.css("marginTop"), 10) || 0)
			};
			this._slide(event, index, normValue);
			this._animateOff = true;
			this._mouseUpHandler = function (event) {
				return self._mouseStop(event)
			};
			$(document).bind("mouseup." + this.widgetName, this._mouseUpHandler);
			return true
		},
		_mouseStart: function (event) {
			$(document).unbind("mouseup." + this.widgetName, this._mouseUpHandler);
			return this._start(event, this._handleIndex)
		},
		_mouseDrag: function (event) {
			var position = {x: event.pageX, y: event.pageY}, normValue = this._normValueFromMouse(position);
			this._slide(event, this._handleIndex, normValue);
			return false
		},
		_mouseStop: function (event) {
			var self = this;
			this.handles.removeClass("ui-state-active");
			setTimeout(function () {
				self._mouseSliding = false
			}, 1e3);
			this._stop(event, this._handleIndex);
			this._change(event, this._handleIndex);
			this._handleIndex = null;
			this._clickOffset = null;
			this._animateOff = false;
			return false
		},
		_detectOrientation: function () {
			var o = this.options, css = this.css;
			if (o.orientation === "vertical") {
				this.orientation = "vertical";
				this.element.removeClass(css.horizontalOrientationClass).addClass(css.verticalOrientationClass)
			} else {
				this.orientation = "horizontal";
				this.element.removeClass(css.verticalOrientationClass).addClass(css.horizontalOrientationClass)
			}
		},
		_normValueFromMouse: function (position) {
			var pixelTotal, pixelMouse, percentMouse, valueTotal, valueMouse;
			if (this.orientation === "horizontal") {
				pixelTotal = this.elementSize.width;
				pixelMouse = position.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)
			} else {
				pixelTotal = this.elementSize.height;
				pixelMouse = position.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)
			}
			percentMouse = pixelMouse / pixelTotal;
			if (percentMouse > 1) {
				percentMouse = 1
			}
			if (percentMouse < 0) {
				percentMouse = 0
			}
			if (this.orientation === "vertical") {
				percentMouse = 1 - percentMouse
			}
			valueTotal = this.options.max - this.options.min;
			valueMouse = this.options.min + percentMouse * valueTotal;
			return this._trimValue(valueMouse)
		},
		_start: function (event, index) {
			var uiHash = {handle: this.handles[index], value: this.value()};
			return this._trigger(this.events.start, event, uiHash)
		},
		_slide: function (event, index, newVal) {
			var allowed;
			if (newVal !== this.value()) {
				allowed = this._trigger(this.events.slide, event, {handle: this.handles[index], value: newVal});
				if (allowed !== false) {
					this.value(newVal)
				}
			}
		},
		_stop: function (event, index) {
			var uiHash = {handle: this.handles[index], value: this.value()};
			this._trigger(this.events.stop, event, uiHash)
		},
		_change: function (event, index) {
			if (!this._keySliding && !this._mouseSliding) {
				var uiHash = {handle: this.handles[index], value: this.value()};
				this._trigger(this.events.change, event, uiHash);
				this._checkBookmarkHit(uiHash.value, event);
				if (uiHash.value === this.options.max && this._marksHit && this._marksHit.length === 0) {
					this._buildBookmarkHit()
				}
			}
		},
		_checkBookmarkHit: function (currentValue, event) {
			if (this._marksHit && this._marksHit.length > 0 && currentValue >= this._marksHit[0].value) {
				var index = this._marksHit[0].index;
				this._marksHit.shift();
				this._bookmarkHit(event, index)
			}
		},
		_buildBookmarkHit: function () {
			var b = this.options.bookmarks || [], i = b.length - 1;
			this._marksHit = [];
			for (i; i >= 0; i--) {
				if (!b[i].disabled) {
					this._marksHit.push({value: b[i].value, index: i})
				}
			}
			this._marksHit.sort(this._sortBookmarksJSON);
			this._marksHit = $.extend(true, [], this._marksHit)
		},
		_sortBookmarksJSON: function (a, b) {
			return a.value - b.value
		},
		_bookmarkClicked: function (event, index) {
			var uiHash = {bookmarkElement: this.bookmarks[index], bookmark: this.options.bookmarks[index]};
			return this._trigger(this.events.bookmarkClick, event, uiHash)
		},
		_bookmarkHit: function (event, index) {
			var uiHash = {bookmarkElement: this.bookmarks[index], bookmark: this.options.bookmarks[index]};
			if (uiHash.bookmarkElement) {
				this._trigger(this.events.bookmarkHit, event, uiHash)
			}
		},
		value: function (newValue) {
			if (arguments.length) {
				this.options.value = this._trimValue(newValue);
				this._refreshValue();
				this._change(null, 0)
			}
			return this._value()
		},
		_setOption: function (key, value) {
			$.Widget.prototype._setOption.apply(this, arguments);
			switch (key) {
				case"disabled":
					if (value) {
						this.handles.filter(".ui-state-focus").blur();
						this.handles.removeClass("ui-state-hover");
						this.handles.attr("disabled", "disabled");
						this.element.addClass("ui-disabled")
					} else {
						this.handles.removeAttr("disabled");
						this.element.removeClass("ui-disabled")
					}
					break;
				case"orientation":
					this._detectOrientation();
					this._refreshValue();
					break;
				case"value":
					if (this._mouseSliding === true) {
						return
					}
					this._animateOff = true;
					this._refreshValue();
					this._change(null, 0);
					this._animateOff = false;
					break;
				case"bookmarks":
					this.clearBookmarks();
					this._renderBookmarks();
					break
			}
		},
		_value: function () {
			return this._trimValue(this.options.value)
		},
		_trimValue: function (val) {
			if (val < this.options.min) {
				return this.options.min
			}
			if (val > this.options.max) {
				return this.options.max
			}
			var step = this.options.step > 0 ? this.options.step : 1, valModStep = val % step,
				alignValue = val - valModStep;
			if (Math.abs(valModStep) * 2 >= step) {
				alignValue += valModStep > 0 ? step : -step
			}
			return parseFloat(alignValue.toFixed(5))
		},
		_normPercentValue: function (val) {
			var decrease = 0, retVal = val;
			if (this.orientation === "vertical") {
				decrease = (this.handle.outerHeight() / this.element.outerHeight()).toFixed(2) * 100
			}
			if (val - decrease > 0) {
				retVal = val - decrease
			}
			return retVal
		},
		_refreshValue: function () {
			var o = this.options, control = this, animate = !this._animateOff ? o.animate : false, _set = {},
				value = this.value(), valueMin = this.options.min, valueMax = this.options.max,
				valPercent = valueMax !== valueMin ? (value - valueMin) / (valueMax - valueMin) * 100 : 0;
			_set[control.orientation === "horizontal" ? "left" : "bottom"] = this._normPercentValue(valPercent) + "%";
			this.handle.stop(1, 1)[animate ? "animate" : "css"](_set, o.animate)
		}
	});
	$.extend($.ui.igSlider, {version: "16.1.20161.2270"});
	$.widget("ui.igProgressBar", {
		options: {
			animate: false,
			animateTimeout: 100,
			max: 100,
			min: 0,
			orientation: "horizontal",
			value: 0,
			width: "0px",
			height: "0px",
			range: false,
			queue: true,
			endValue: 100
		},
		css: {
			baseClasses: "ui-igprogressbar ui-widget ui-widget-content ui-corner-all",
			horizontalOrientationClass: "ui-igprogressbar-horizontal",
			verticalOrientationClass: "ui-igprogressbar-vertical",
			disabledClass: "ui-igprogressbar-disabled ui-disabled",
			progressRangeClass: "ui-igprogressbar-range ui-widget-header ui-corner-all"
		},
		events: {change: "change"},
		_animationOff: true,
		widget: function () {
			return this.element
		},
		_detectOrientation: function () {
			var css = this.css;
			if (this.options.orientation === "vertical") {
				this.orientation = "vertical";
				this.element.removeClass(css.horizontalOrientationClass).addClass(css.verticalOrientationClass)
			} else {
				this.orientation = "horizontal";
				this.element.removeClass(css.verticalOrientationClass).addClass(css.horizontalOrientationClass)
			}
		},
		_id: function (suffix) {
			return this.element[0].id + suffix
		},
		_create: function () {
			var o = this.options, css = this.css;
			this._detectOrientation();
			this.element.addClass(css.baseClasses);
			if (o.disabled) {
				this.element.addClass(css.disabledClass)
			}
			if (o.width !== "0px") {
				this.element.css("width", o.width)
			}
			if (o.height !== "0px") {
				this.element.css("height", o.height)
			}
			if (o.orientation === "horizontal") {
				$('<div id="' + this._id("_progress") + '" class="' + css.progressRangeClass + '" style="height:100%; top:0px; left:0%; width:0%;"></div>').appendTo(this.element)
			} else {
				$('<div id="' + this._id("_progress") + '" class="' + css.progressRangeClass + '" style="height:0%; bottom:0%; left:0px; width:100%;"></div>').appendTo(this.element)
			}
			this._refreshValue()
		},
		destroy: function () {
			this.element.removeClass("ui-igprogressbar" + " ui-igprogressbar-horizontal" + " ui-igprogressbar-vertical" + " ui-igprogressbar-disabled" + " ui-widget" + " ui-widget-content" + " ui-corner-all").removeData("igProgressBar").unbind(".igProgressBar");
			$("#" + this._id("_progress")).remove();
			return this
		},
		_change: function (event) {
			var uiHash = {value: this.value()};
			this._trigger(this.events.change, event, uiHash)
		},
		value: function (newValue) {
			if (arguments.length) {
				this.options.value = this._trimValue(newValue);
				this._refreshValue();
				this._change(null)
			}
			return this.options.value
		},
		_setOption: function (key, value) {
			$.Widget.prototype._setOption.apply(this, arguments);
			var o = this.options;
			switch (key) {
				case"disabled":
					if (value) {
						this.element.addClass(this.css.disabledClass)
					} else {
						this.element.removeClass(this.css.disabledClass)
					}
					break;
				case"orientation":
					this._detectOrientation();
					this._refreshValue();
					break;
				case"value":
					this._animationOff = true;
					o.value = this._trimValue(value);
					this._refreshValue();
					this._change(null);
					this._animationOff = false;
					break;
				case"endValue":
					o.endValue = this._trimValue(value);
					this._refreshValue();
					break;
				case"max":
					if (o.endValue > o.max) {
						o.endValue = o.max;
						this._refreshValue()
					}
					break;
				case"width":
					this.element.css("width", value);
					break;
				case"height":
					this.element.css("height", value);
					break;
				case"animate":
					o.animate = value;
					break;
				case"animateTimeout":
					o.animateTimeout = value;
					break;
				default:
					break
			}
		},
		_trimValue: function (val) {
			if (val < this.options.min) {
				return this.options.min
			}
			if (val > this.options.max) {
				return this.options.max
			}
			return parseInt(val, 10)
		},
		_refreshValue: function () {
			var o = this.options, additionalOptions = {duration: o.animateTimeout, queue: o.queue}, value = o.value,
				valueMin = o.min, valueMax = o.max, valueEnd = o.endValue,
				valPercent = valueMax !== valueMin ? (value - valueMin) / (valueMax - valueMin) * 100 : 0,
				valueEndPercent = value !== valueEnd ? (valueEnd - value) / (valueMax - valueMin) * 100 : 0,
				progressBar = $("#" + this._id("_progress"));
			if (o.range) {
				if (o.orientation === "horizontal") {
					progressBar.css("left", valPercent + "%").css("width", valueEndPercent + "%")
				} else {
					progressBar.css("bottom", valPercent + "%").css("height", valueEndPercent + "%")
				}
			} else {
				if (o.animate === true) {
					if (o.orientation === "horizontal") {
						if (progressBar[0].style.width === "0%") {
							progressBar.css({width: "0px"})
						}
						if (progressBar.is(":hidden") === false) {
							progressBar.animate({width: valPercent + "%"}, additionalOptions)
						} else {
							progressBar.css("width", valPercent + "%")
						}
					} else {
						if (progressBar[0].style.height === "0%") {
							progressBar.css({height: "0px"})
						}
						if (progressBar.is(":hidden") === false) {
							progressBar.animate({height: valPercent + "%"}, o.animateTimeout)
						} else {
							progressBar.animate({height: valPercent + "%"}, o.animateTimeout)
						}
					}
				} else {
					if (o.orientation === "horizontal") {
						progressBar.css("width", valPercent + "%")
					} else {
						progressBar.css("height", valPercent + "%")
					}
				}
			}
		}
	});
	$.extend($.ui.igProgressBar, {version: "16.1.20161.2270"});
	$.widget("ui.igButton", {
		options: {
			width: null,
			height: null,
			link: {href: null, target: null, title: null},
			labelText: "",
			centerLabel: false,
			css: null,
			onlyIcons: false,
			icons: {primary: null, secondary: null},
			title: false
		}, _id: function (suffix) {
			return this.element[0].id + suffix
		}, _create: function () {
			var self = this, o = self.options, e = this.element, inputType, css = {
				buttonClassIE6: "ui-ie6",
				buttonClasses: "ui-button ui-igbutton ui-widget " + "ui-widget-content ui-corner-all ui-state-default",
				buttonHoverClasses: "ui-state-hover",
				buttonActiveClasses: "ui-state-active",
				buttonFocusClasses: "ui-state-focus",
				buttonLabelClass: "ui-button-text",
				buttonDisabledClass: "ui-state-disabled",
				buttonPrimaryIconClass: "ui-button-icon-primary ui-icon",
				buttonMainElementPrimaryIconClass: " ui-button-text-icon-primary",
				buttonMainElementSecondaryIconClass: " ui-button-text-icon-secondary",
				buttonSecondaryIconClass: "ui-button-icon-secondary ui-icon",
				buttonIconsOnly: "ui-button-icons-only",
				buttonIconOnly: "ui-button-icon-only",
				buttonIcons: "ui-button-text-icons",
				buttonTextOnlyClass: "ui-button-text-only"
			};
			this._attached = false;
			o.css = $.extend(css, o.css);
			self._getInitValues();
			if (e.is("div")) {
				self._renderDivButton()
			} else if (e.is("a")) {
				self._renderAHref()
			} else if (e.is("input")) {
				inputType = e.attr("type").toUpperCase();
				if (inputType === "BUTTON" || inputType === "SUBMIT" || inputType === "RESET") {
					self._renderInput()
				} else {
					return
				}
			} else if (e.is("button")) {
				self._renderButton()
			} else {
				return
			}
			if (o.width !== null) {
				self._setWidth(o.width)
			}
			if (o.height !== null) {
				self._setHeight(o.height)
			}
			e.addClass(o.css.buttonClasses).addClass(o.css.buttonDefaultClasses);
			if (o.centerLabel === true) {
				self._centerLabel()
			}
			if (o.disabled) {
				self._disableButton()
			} else {
				self._enableButton()
			}
			self._setOnlyIcons();
			e.attr("role", "button");
			e.attr("aria-disabled", "false");
			self._attachButtonEvents();
			self.setTitle(o.title);
			return this
		}, setTitle: function (title) {
			var e = this.element;
			if (title === false) {
				e.removeAttr("title")
			} else {
				e.attr("title", title)
			}
		}, widget: function () {
			return this.element
		}, _isRedirect: function () {
			return this.options.link.href !== null
		}, _renderDivButton: function () {
			this._setLabel()
		}, _renderAHref: function () {
			this._setLabel()
		}, _renderInput: function () {
			var e = this.element;
			e.attr("value", this.options.labelText)
		}, _renderButton: function () {
			this._setLabel()
		}, _disableButton: function () {
			var self = this, e = self.element;
			e.addClass(self.options.css.buttonDisabledClass);
			if (e.is("a") === true) {
				e.removeAttr("href");
				e.removeAttr("target");
				e.removeAttr("title")
			} else {
				e.attr("disabled", "true")
			}
		}, _enableButton: function () {
			var self = this, e = self.element, o = this.options;
			if (e.hasClass(o.css.buttonDisabledClass)) {
				e.removeClass(o.css.buttonDisabledClass)
			}
			e.removeAttr("disabled");
			if (e.is("a") === true) {
				self._setLinkOptions(true)
			}
		}, _setLabel: function () {
			var e = this.element, o = this.options, icons = o.icons, css = o.css, html = "",
				isSetPrimary = this._isSetPrimaryIcon(), isSetSecondary = this._isSetSecondaryIcon(),
				labelText = o.labelText === null || o.labelText === "" ? e.text() : o.labelText;
			e.attr("title", o.labelText);
			if (e.is("input")) {
				e.attr("value", o.labelText);
				return
			}
			if (isSetPrimary) {
				html += '<span class="' + css.buttonPrimaryIconClass + " " + icons.primary + '" id="' + this._id("_picn") + '"></span>'
			}
			html += '<span class="' + o.css.buttonLabelClass + '" id="' + this._id("_lbl") + '">' + labelText + "</span>";
			if (isSetSecondary) {
				html += '<span class="' + css.buttonSecondaryIconClass + " " + icons.secondary + '" id="' + this._id("_sicn'") + '"></span>'
			}
			if (isSetPrimary && isSetSecondary && !o.onlyIcons) {
				e.addClass(css.buttonIcons)
			} else if (o.onlyIcons) {
				this._setOnlyIcons()
			} else if (isSetPrimary) {
				e.addClass(css.buttonMainElementPrimaryIconClass)
			} else if (isSetSecondary) {
				e.addClass(css.buttonMainElementSecondaryIconClass)
			} else {
				e.addClass(css.buttonTextOnlyClass)
			}
			e.html(html)
		}, _setOnlyIcons: function () {
			var e = this.element, css = this.options.css;
			if (this.options.onlyIcons === false) {
				if (e.hasClass(css.buttonIconsOnly)) {
					e.removeClass(css.buttonIconsOnly)
				}
				if (e.hasClass(css.buttonIconOnly)) {
					e.removeClass(css.buttonIconOnly)
				}
				if (this._isSetPrimaryIcon() && this._isSetSecondaryIcon()) {
					e.addClass(css.buttonIcons)
				}
			} else {
				if (this._isSetPrimaryIcon() && this._isSetSecondaryIcon()) {
					e.addClass(css.buttonIconsOnly)
				} else {
					e.addClass(css.buttonIconOnly)
				}
			}
		}, _setLinkOptions: function (isAHref) {
			var self = this, e = self.element, o = this.options;
			if (isAHref) {
				if (o.link !== null && o.link.href !== null) {
					e.attr("href", o.link.href)
				} else if (e.attr("href") !== undefined) {
					e.removeAttr("href")
				}
				if (o.link !== null && o.link.target !== null) {
					e.attr("target", o.link.target)
				} else if (e.attr("target") !== undefined) {
					e.removeAttr("target")
				}
				if (o.link !== null && o.link.title !== null) {
					e.attr("title", o.link.title)
				} else if (e.attr("title") !== undefined) {
					e.removeAttr("title")
				}
			}
		}, _setWidth: function (value) {
			var e = this.element;
			if (value === null) {
				e.css("width", "")
			} else {
				e.css("width", value)
			}
		}, _setHeight: function (value) {
			var e = this.element;
			if (value === null) {
				e.css("height", "")
			} else {
				e.css("height", value)
			}
		}, _setOption: function (key, val) {
			var e = this.element, self = this;
			$.Widget.prototype._setOption.apply(this, [key, val]);
			switch (key) {
				case"width":
					self._setWidth(val);
					break;
				case"height":
					self._setHeight(val);
					break;
				case"link":
					self._setLinkOptions(e.is("a") === true);
					break;
				case"disabled":
					val = Boolean(val);
					if (val === true) {
						self._disableButton()
					} else {
						self._enableButton()
					}
					break;
				case"labelText":
					self._setLabel();
					break;
				case"centerLabel":
					val = Boolean(val);
					if (val) {
						self._centerLabel()
					} else {
						self._removeCenterLabel()
					}
					break;
				case"onlyIcons":
					val = Boolean(val);
					self._setOnlyIcons();
					break;
				case"icons":
					self._setLabel();
					break;
				case"title":
					self.setTitle(val);
					break;
				default:
					break
			}
		}, _centerLabel: function () {
			var self = this, e = self.element, l = $("#" + self._id("_lbl")), left = (e.width() - l.width()) / 2,
				top = (e.height() - l.height()) / 2;
			l.css({position: "relative", top: top + "px", left: left + "px"})
		}, _removeCenterLabel: function () {
			var self = this, l = $("#" + self._id("_lbl"));
			if (l.length > 0) {
				l.css({position: "", top: "", left: ""})
			}
		}, _dettachEvents: function () {
			this._attached = false;
			this.element.unbind(this._events)
		}, _onMouseOver: function (event) {
			var noCancel;
			if (this.options.disabled === true) {
				return
			}
			noCancel = this._trigger("mouseover", event);
			if (noCancel) {
				this.element.addClass(this.options.css.buttonHoverClasses)
			}
		}, _onMouseOut: function (event) {
			var self = this, e = self.element, o = this.options, noCancel;
			if (o.disabled === true) {
				return
			}
			noCancel = self._trigger("mouseout", event);
			if (noCancel) {
				e.removeClass(o.css.buttonHoverClasses)
			}
		}, _onClick: function (event) {
			var e = this.element, self = this, o = this.options, noCancel;
			if (o.disabled === true) {
				return
			}
			noCancel = self._trigger("click", event);
			if (noCancel) {
				this.element.removeClass(o.css.buttonHoverClasses);
				if (self._isRedirect() === true && e.is("a") === false) {
					if (o.link.target === "_blank") {
						window.open(o.link.href)
					} else {
						window.location = o.link.href
					}
				}
			}
		}, _onMouseDown: function (event) {
			var e = this.element, o = this.options, noCancel;
			if (o.disabled === true) {
				return
			}
			noCancel = this._trigger("mousedown", event);
			if (noCancel) {
				e.removeClass(o.css.buttonHoverClasses);
				e.addClass(o.css.buttonActiveClasses)
			}
		}, _onMouseUp: function (event) {
			var o = this.options, noCancel;
			if (o.disabled === true) {
				return
			}
			noCancel = this._trigger("mouseup", event);
			if (noCancel) {
				this.element.removeClass(o.css.buttonHoverClasses);
				this.element.removeClass(o.css.buttonActiveClasses)
			}
		}, _onFocus: function (event) {
			var o = this.options, noCancel;
			if (o.disabled === true) {
				return
			}
			noCancel = this._trigger("focus", event);
			if (noCancel) {
				this.element.addClass(o.css.buttonFocusClasses)
			}
		}, _onBlur: function (event) {
			var o = this.options, noCancel;
			if (o.disabled === true) {
				return
			}
			noCancel = this._trigger("blur", event);
			if (noCancel) {
				this.element.removeClass(o.css.buttonActiveClasses);
				this.element.removeClass(o.css.buttonFocusClasses)
			}
		}, _onKeyDown: function (event) {
			var o = this.options;
			if (o.disabled === true) {
				return
			}
			this._trigger("keydown", event)
		}, _attachButtonEvents: function () {
			var self = this, e = self.element;
			if (this._attached === true) {
				return
			}
			this._attached = true;
			this._events = {
				mouseover: function (e) {
					self._onMouseOver(e, self)
				}, click: function (e) {
					self._onClick(e)
				}, mouseout: function (e) {
					self._onMouseOut(e)
				}, mousedown: function (e) {
					self._onMouseDown(e)
				}, mouseup: function (e) {
					self._onMouseUp(e)
				}, focus: function (e) {
					self._onFocus(e)
				}, blur: function (e) {
					self._onBlur(e)
				}, keydown: function (e) {
					self._onKeyDown(e)
				}
			};
			e.bind(this._events)
		}, _isSetPrimaryIcon: function () {
			var primary = this.options.icons.primary, isSet = false;
			if (primary !== undefined && primary !== null) {
				isSet = true
			}
			return isSet
		}, _isSetSecondaryIcon: function () {
			var secondary = this.options.icons.secondary, isSet = false;
			if (secondary !== undefined && secondary !== null) {
				isSet = true
			}
			return isSet
		}, destroy: function () {
			this._dettachEvents();
			this._rollbackInitValues();
			this._events = null;
			this._innerHTML = null;
			this._initialAttributes = null;
			$.Widget.prototype.destroy.apply(this, arguments)
		}, _getInitValues: function () {
			var e = this.element, attr, i;
			this._innerHTML = e.html();
			this._initialAttributes = [];
			attr = e[0].attributes;
			for (i = 0; i < attr.length; i++) {
				if (attr[i].name !== "id" && attr[i].name !== "type") {
					this._initialAttributes.push({name: attr[i].name, value: attr[i].value})
				}
			}
		}, _rollbackInitValues: function () {
			var e = this.element, attr, a, i;
			if (this._innerHTML !== undefined) {
				e.html(this._innerHTML)
			}
			attr = e[0].attributes;
			a = [];
			for (i = 0; i < attr.length; i++) {
				if (attr[i].name !== "id" && attr[i].name !== "type") {
					a.push(attr[i].name)
				}
			}
			for (i = 0; i < a.length; i++) {
				e.removeAttr(a[i])
			}
			if (this._initialAttributes) {
				for (i = 0; i < this._initialAttributes.length; i++) {
					if (this._initialAttributes[i].name !== "id") {
						e.attr(this._initialAttributes[i].name, this._initialAttributes[i].value)
					}
				}
			}
		}
	});
	$.extend($.ui.igButton, {version: "16.1.20161.2270"});
	$.widget("ui.igTooltip", {
		css: {
			baseClasses: "ui-widget ui-igpopover ui-igplayer-tooltip",
			arrowImageBaseClass: "ui-igpopover-arrow-"
		}, options: {text: "", arrowLocation: "top"}, _setOption: function (key, value) {
			$.Widget.prototype._setOption.apply(this, arguments);
			switch (key) {
				case"text":
					$("div.ui-widget-content", this.element).html(value);
					break;
				case"arrowLocation":
					$("div", this.element).remove();
					this._renderTooltip();
					break
			}
		}, _create: function () {
			if (this.element.is("div")) {
				this._renderTooltip();
				this.element.addClass(this.css.baseClasses)
			}
		}, _renderTooltip: function () {
			switch (this.options.arrowLocation) {
				case"top":
					this._createArrowDiv();
					this._createContentDiv();
					break;
				case"bottom":
					this._createContentDiv();
					this._createArrowDiv();
					break;
				case"left":
					break;
				case"right":
					break
			}
		}, _createContentDiv: function () {
			var t = this.options.text && this.options.text.length > 0 ? this.options.text : "";
			$('<div class="ui-widget-content ui-corner-all">' + t + "</div>").appendTo(this.element)
		}, _createArrowDiv: function () {
			$('<div class="' + this.css.arrowImageBaseClass + this.options.arrowLocation + '"></div>').appendTo(this.element)
		}, destroy: function () {
			this.element.children().remove();
			this.element.removeClass(this.css.baseClasses)
		}
	});
	$.extend($.ui.igTooltip, {version: "16.1.20161.2270"});
	$.widget("ui.mouseWrapper", $.ui.mouse, {
		options: {cancel: ":input,option", distance: 1, delay: 0},
		events: {start: "start", drag: "drag", stop: "stop", capture: "capture"},
		_create: function () {
			var self = this, originalMouseDown = this._mouseDown;
			if ($.ig.util.isIE9) {
				this._mouseDown = function (event) {
					var originalPreventDefault = event.preventDefault, result;
					event.preventDefault = function () {
					};
					result = originalMouseDown.apply(self, [event]);
					event.preventDefault = originalPreventDefault;
					return result
				}
			}
			this._mouseInit()
		},
		destroy: function () {
			this._mouseDestroy();
			return this
		},
		_mouseStart: function (event) {
			return this._trigger(this.events.start, event)
		},
		_mouseDrag: function (event) {
			return this._trigger(this.events.drag, event)
		},
		_mouseStop: function (event) {
			return this._trigger(this.events.stop, event)
		},
		_mouseCapture: function (event) {
			return this._trigger(this.events.capture, event)
		}
	});
	$.widget("ui.igResponsiveContainer", {
		options: {pollingInterval: 500}, _createWidget: function (options, element) {
			this._callbacks = [];
			this._element = element;
			this._pollerHandler = $.proxy(this._pollerTick, this);
			this._startPoller();
			this._width = this._getCurrentWidth();
			this._height = this._getCurrentHeight();
			$.Widget.prototype._createWidget.apply(this, arguments)
		}, destroy: function () {
			this._stopPoller();
			this._callbacks = [];
			$.Widget.prototype.destroy.call(this);
			return this
		}, startPoller: function () {
			this._startPoller()
		}, stopPoller: function () {
			this._stopPoller()
		}, removeCallback: function (callbackId) {
			if (callbackId >= 0 && callbackId < this._callbacks.length) {
				this._callbacks.splice(callbackId, 1)
			}
		}, addCallback: function (callback, owner, reactionStep, reactionDirection) {
			return this._callbacks.push({
				callback: callback,
				owner: owner,
				step: reactionStep,
				left: reactionDirection === "xy" || reactionDirection === "x",
				top: reactionDirection === "xy" || reactionDirection === "y",
				cWidth: this._getCurrentWidth(),
				cHeight: this._getCurrentHeight()
			}) - 1
		}, _startPoller: function () {
			this._intervalId = setInterval(this._pollerHandler, this.options.pollingInterval)
		}, _stopPoller: function () {
			if (this._intervalId) {
				clearInterval(this._intervalId);
				delete this._intervalId
			}
		}, _pollerTick: function () {
			var nw = this._getCurrentWidth(), nh = this._getCurrentHeight(), cb, i, called = false;
			for (i = 0; i < this._callbacks.length; i++) {
				cb = this._callbacks[i];
				if (cb.left === true) {
					if (Math.abs(cb.cWidth - nw) > cb.step) {
						cb.callback.apply(cb.owner, [nw, nh]);
						cb.cWidth = nw;
						cb.cHeight = nh;
						called = true
					}
				}
				if (cb.top === true && called === false) {
					if (Math.abs(cb.cHeight - nh) > cb.step) {
						cb.callback.apply(cb.owner, [nw, nh]);
						cb.cWidth = nw;
						cb.cHeight = nh
					}
				}
			}
			this._width = nw;
			this._height = nh
		}, _getCurrentWidth: function () {
			return this._element.offsetWidth
		}, _getCurrentHeight: function () {
			return this._element.offsetHeight
		}
	});
	$.extend($.ui.igResponsiveContainer, {version: "16.1.20161.2270"});
	if (typeof define === "function" && define.amd && define.amd.jQuery) {
		define("ig.ui.shared", ["ig.util", "jquery.ui.core", "jquery.ui.widget"], function () {
			return $.ui.igLoading
		})
	}
})(jQuery);
/*
//@ sourceMappingURL=E:\Work\6\967\src\DEV\jQuery\2016.1\Source\ClientUI\js\modules\infragistics.ui.shared.js.map
*/
/*!@license
* Infragistics.Web.ClientUI Scroll 16.1.20161.2270
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
* Depends on:
* jquery-1.9.1.js
* jquery.ui.core.js
* jquery.ui.widget.js
* infragistics.util.js
*/
(function ($) {
	var _attr = "data-scroll", _stop = function (e) {
		try {
			e.preventDefault();
			e.stopPropagation()
		} catch (ex) {
		}
	}, _aNull = function (val) {
		return val === null || val === undefined || typeof val === "number" && isNaN(val)
	}, _num = function (val) {
		return isNaN(val = parseInt(val, 10)) ? 0 : val
	}, _int = function (elem, css) {
		return _num(elem.css(css))
	}, _draggable = function (type) {
		return type === "draggable"
	}, _thin = function (type) {
		return type === "show"
	}, _zero = function (num) {
		return isNaN(num) || num < 5
	}, _touch = function (e) {
		e = e.originalEvent;
		e = e ? e.touches : null;
		return e && e.length === 1 ? e[0] : null
	}, _src = function (e) {
		e = e.target;
		return e.nodeName === "#text" ? e.parentNode : e
	}, _is = function (elem, src) {
		return elem && (elem.has(src).length > 0 || elem[0] === src)
	}, _valid = function (elem) {
		return elem && elem[0].parentNode ? elem : null
	}, _remove = function (elem) {
		if (_valid(elem)) {
			elem.remove()
		}
	}, _find = function (notMobile) {
		setTimeout(function () {
			if (!$.ig.util.isModernizrAvailable || $.ig.util.isTouch) {
				$("body").find("[" + _attr + "]").each(function () {
					var elem = $(this), scroll = elem.data("igScroll");
					if ((!scroll || !scroll.evts) && !elem.data("igScroll") && !elem.data("scrollview")) {
						elem.igScroll({_find: true})
					}
				})
			}
		}, notMobile === true ? 1e3 : 100)
	};
	$.widget("ui.igScroll", {
		options: {
			thumbOpacityDrag: null,
			thumbOpacity: null,
			cancelStart: null,
			oneDirection: null,
			direction: null,
			animateShowDuration: null,
			animateHideDuration: null,
			hideThumbsDelay: null,
			hideDragThumbsDelay: null,
			xInertia: null,
			yInertia: null,
			xThumb: null,
			yThumb: null,
			xLabel: null,
			yLabel: null,
			marginLeft: null,
			marginRight: null,
			marginTop: null,
			marginBottom: null,
			xScroller: null,
			yScroller: null
		},
		events: {starting: null, started: null, scrolling: null, scrolled: null, stopped: null},
		scrollLeft: function (val) {
			if (_aNull(val)) {
				return this._getScroll(true)
			}
			this._scroll(val);
			return this
		},
		scrollTop: function (val) {
			if (_aNull(val)) {
				return this._getScroll()
			}
			this._scroll(null, val);
			return this
		},
		scrollWidth: function () {
			return this._getScroll(true, true)
		},
		scrollHeight: function () {
			return this._getScroll(false, true)
		},
		_create: function () {
			var v, key, self = this, elem = self.element, o = self.options;
			if (o._find) {
				for (key in o) {
					if (o.hasOwnProperty(key) && _aNull(o[key])) {
						if (_aNull(v = elem.attr("data-" + key))) {
							v = elem.attr("data-" + key.replace("S", "-s").replace("D", "-d").replace("O", "-o").replace("R", "-r").replace("T", "-t").replace("I", "-i").replace("B", "-b").replace("L", "-l").replace("H", "-h").replace("D", "-d"))
						}
						if (!_aNull(v)) {
							o[key] = v
						}
					}
				}
				o.direction = o.direction || elem.attr(_attr)
			}
			v = $.ui.igScroll.defaults;
			for (key in v) {
				if (v.hasOwnProperty(key) && o[key] === null) {
					o[key] = v[key]
				}
			}
			v = o.direction;
			self.dir = o.oneDirection && v !== "x" && v !== "y";
			self.evts = {
				pointerdown: function (e) {
					var evt = e.originalEvent;
					if (!evt || evt.pointerType !== 2 && evt.pointerType !== "touch") {
						return
					}
					if (typeof Element.prototype.msSetPointerCapture === "function") {
						e.target.msSetPointerCapture(self._pointer = evt.pointerId)
					} else {
						e.target.setPointerCapture(self._pointer = evt.pointerId)
					}
					self.evts.touchstart(e)
				}, pointermove: function (e) {
					if (self._pointer) {
						self._move(e)
					}
				}, pointerup: function (e) {
					if (!self._pointer) {
						return
					}
					if (typeof Element.prototype.msReleasePointerCapture === "function") {
						e.target.msReleasePointerCapture(self._pointer)
					} else {
						e.target.releasePointerCapture(self._pointer)
					}
					self.evts.touchend(e);
					delete self._pointer
				}, touchstart: function (e) {
					delete self.skip;
					var touch = self._pointer ? e.originalEvent : _touch(e);
					if (touch) {
						self.x = touch.pageX;
						self.y = touch.pageY;
						self.click = true;
						if (self._isCancel(o)) {
							_stop(e)
						}
					} else {
						self._move(e, "start")
					}
				}, touchmove: function (e) {
					self._move(e)
				}, touchend: function (e) {
					if (!self.click) {
						self._move(e, "end")
					} else if (self._isCancel(o)) {
						$(_src(e)).trigger("mousedown").trigger("mouseup").trigger("click")
					}
				}
			};
			elem.bind(self.evts);
			elem.bind({
				MSPointerDown: self.evts.pointerdown,
				MSPointerMove: self.evts.pointermove,
				MSPointerUp: self.evts.pointerup
			})
		},
		_isCancel: function (o) {
			o = o.cancelStart;
			return o === true || o === "ms" && this._pointer
		},
		_createBar: function (elem, hor, type) {
			var bar, thumb, border, sizeInt, span, img, iconSize = 17, thumbSize = 5, thumbDragSize = 30,
				thin = _thin(type), display = hor ? "inline-block" : "block",
				margin = "margin" + (hor ? "Top" : "Left"), size = hor ? "height" : "width";
			if (thin || _draggable(type)) {
				bar = $("<span />").css({
					position: "absolute",
					zIndex: _int(elem, "zIndex") + 2,
					background: "transparent",
					border: "0px",
					opacity: 0,
					display: "block"
				}).addClass("ui-widget").css(size, "1px").insertAfter(elem);
				sizeInt = thin ? thumbSize : thumbDragSize;
				thumb = $("<span />").css("position", "relative").css(size, sizeInt).css("display", "block").appendTo(bar);
				if (thin) {
					thumb.css("background", "#101010")
				} else {
					bar.css("msTouchAction", "none");
					thumb.addClass("ui-corner-all ui-state-hover");
					border = thumb.css("borderTopColor");
					sizeInt = hor ? thumb[0].offsetHeight : thumb[0].offsetWidth;
					span = $("<span />").css({
						display: display,
						borderStyle: "solid",
						borderColor: border,
						borderWidth: hor ? "0px 1px 0px 0px" : "0px 0px 1px 0px"
					}).addClass("ui-corner-" + (hor ? "left" : "top")).css(size, "100%").appendTo(thumb);
					img = $("<span />").css("display", "block").css(margin, Math.floor((sizeInt - iconSize) / 2) + "px").addClass("ui-icon ui-icon-carat-1-" + (hor ? "w" : "n")).appendTo(span);
					span = $("<span />").css("display", display).css(size, "100%").appendTo(thumb);
					img = $("<span />").css("display", "block").css(margin, Math.floor((sizeInt - iconSize) / 2) + "px").addClass("ui-icon ui-icon-grip-dotted-" + (hor ? "vertical" : "horizontal")).appendTo(span);
					span = $("<span />").css({
						display: display,
						borderStyle: "solid",
						borderColor: border,
						borderWidth: hor ? "0px 0px 0px 1px" : "1px 0px 0px 0px"
					}).addClass("ui-corner-" + (hor ? "right" : "bottom")).css(size, "100%").appendTo(thumb);
					img = $("<span />").css("display", "block").css(margin, Math.floor((sizeInt - iconSize) / 2) + "px").addClass("ui-icon ui-icon-carat-1-" + (hor ? "e" : "s")).appendTo(span)
				}
				thumb.css(margin, -(sizeInt + 1) + "px")
			}
			if (hor) {
				this.barX = bar;
				this.thumbX = thumb
			} else {
				this.barY = bar;
				this.thumbY = thumb
			}
		},
		_bar: function (elem, hor) {
			var v, left, top, thumb, locElem, locBar, shiftBar, shiftX, shiftY, thumbSize, o = this.options,
				barMargin = 2, barSizeMargin = _num(hor ? o.marginLeft : o.marginTop),
				barSizeMargin2 = _num(hor ? o.marginRight : o.marginBottom), minBarSize = 4, minThumbSize = 15,
				bar = hor ? this.barX : this.barY, type = hor ? o.xThumb : o.yThumb,
				elemSize = hor ? elem[0].offsetWidth : elem[0].offsetHeight,
				barSize = Math.max(elemSize - barSizeMargin - barSizeMargin2, minBarSize),
				scrollSize = Math.max(this._getScroll(hor, true), minBarSize + barSizeMargin + barSizeMargin2);
			if (!elemSize || scrollSize - elemSize < 1) {
				if (bar) {
					bar.remove();
					delete this.bar
				}
				return
			}
			if (bar) {
				if (!_valid(bar)) {
					bar.insertAfter(elem)
				}
			}
			if (!bar) {
				this._createBar(elem, hor, type)
			}
			bar = hor ? this.barX : this.barY;
			if (!bar) {
				return
			}
			thumb = hor ? this.thumbX : this.thumbY;
			if (_draggable(type) && thumb) {
				thumb.bind(this.evts)
			}
			shiftBar = (hor ? elem[0].offsetHeight : elem[0].offsetWidth) - barMargin;
			left = _int(elem, "marginLeft") + (hor ? barSizeMargin : shiftBar);
			top = _int(elem, "marginTop") + (hor ? shiftBar : barSizeMargin);
			bar.css({left: elem.css("left"), top: elem.css("top"), marginLeft: left + "px", marginTop: top + "px"});
			if (_thin(type)) {
				thumb.css(hor ? "width" : "height", Math.floor(Math.max(elemSize * elemSize / scrollSize, minThumbSize)) + "px")
			}
			thumbSize = hor ? thumb[0].offsetWidth : thumb[0].offsetHeight;
			v = (scrollSize - barSize - barSizeMargin - barSizeMargin2 + barMargin) / (barSize - thumbSize);
			if (hor) {
				this.ratioX = v
			} else {
				this.ratioY = v
			}
			locElem = elem.offset();
			locBar = bar.offset();
			shiftY = locBar.top - locElem.top - (hor ? shiftBar : barSizeMargin);
			shiftX = locBar.left - locElem.left - (hor ? barSizeMargin : shiftBar);
			if (Math.abs(shiftY) > 0) {
				bar.css("marginTop", top - shiftY + _int(elem, "borderTopWidth") + "px")
			}
			if (Math.abs(shiftX) > 0) {
				bar.css("marginLeft", left - shiftX + _int(elem, "borderLeftWidth") + "px")
			}
			return bar
		},
		_scroller: function (hor) {
			var o = this.options, div = o.direction;
			if (!this.evts || hor && div === "y" || !hor && div === "x") {
				return
			}
			div = hor ? o.xScroller : o.yScroller;
			if (div && typeof div === "string") {
				div = $(div)[0];
				if (hor) {
					o.xScroller = div
				} else {
					o.yScroller = div
				}
			}
			if (div && div.length) {
				div = div[0]
			}
			return div || this.element[0]
		},
		_getScroll: function (hor, size) {
			var div = this._scroller(hor);
			if (!div) {
				return 0
			}
			if (hor) {
				return size ? div.scrollWidth : div.scrollLeft
			} else {
				return size ? div.scrollHeight : div.scrollTop
			}
		},
		_scroll: function (x, y) {
			var div = this._scroller(true);
			this._bar(this.element);
			if (div && !this.inBarY && this.dir !== "y" && !_aNull(x)) {
				div.scrollLeft = x;
				if (this.thumbX) {
					this.thumbX.css("marginLeft", Math.floor(div.scrollLeft / this.ratioX) + "px")
				}
			}
			div = this._scroller();
			if (div && !this.inBarX && this.dir !== "x" && !_aNull(y)) {
				div.scrollTop = y;
				if (this.thumbY) {
					this.thumbY.css("marginTop", Math.floor(div.scrollTop / this.ratioY) + "px")
				}
			}
		},
		_vis: function () {
			return this.evts && this.element[0].offsetWidth
		},
		_inertia: function () {
			var self = this, arg = {owner: self}, max = .97, stopTimerSpeed = .8, x = self.speedX, y = self.speedY,
				o = self.options, tick = 17, rateX = Math.max(Math.min(parseFloat(o.xInertia), max), 0),
				rateY = Math.max(Math.min(parseFloat(o.yInertia), max), 0),
				speedX = (x ? x[0] + x[1] + x[2] : 0) * tick, speedY = (y ? y[0] + y[1] + y[2] : 0) * tick,
				left = self._getScroll(true), top = self._getScroll(), inertia = function () {
					self.timer = setTimeout(function () {
						delete self.timer;
						arg.deltaX = -Math.floor(speedX);
						arg.deltaY = -Math.floor(speedY);
						if (!self._vis() || !self._trigger("scrolling", null, arg)) {
							self._end();
							return
						}
						left += arg.deltaX;
						top += arg.deltaY;
						self._scroll(Math.floor(left), Math.floor(top));
						self._trigger("scrolled", null, arg);
						speedY *= rateY;
						speedX *= rateX;
						if (Math.abs(speedY) > stopTimerSpeed && top > 0 || Math.abs(speedX) > stopTimerSpeed && left > 0) {
							inertia()
						} else {
							self._end()
						}
					}, tick * 3)
				};
			inertia()
		},
		_show: function (valid) {
			var bar, self = this, o = self.options, val = parseFloat(o.thumbOpacity),
				valDrag = parseFloat(o.thumbOpacityDrag), dur = valid ? 0 : _num(o.animateShowDuration),
				barX = _valid(self.barX), barY = _valid(self.barY);
			if (self.hiding) {
				self.hiding.stop(true);
				delete self.hiding
			}
			if (_zero(dur)) {
				if (barX) {
					barX.css("opacity", self.inBarX ? valDrag : val)
				}
				if (barY) {
					barY.css("opacity", self.inBarY ? valDrag : val)
				}
				return
			}
			bar = barX || barY;
			if (bar) {
				self.showing = bar.animate({opacity: val}, {
					duration: dur, complete: function () {
						delete self.showing
					}, step: function (now) {
						if (barX && barY) {
							barY.css("opacity", now)
						}
					}
				})
			}
		},
		_hide: function (hide) {
			var self = this;
			if (!self.time) {
				return
			}
			if (self.showing) {
				self.showing.stop(true);
				delete self.showing
			}
			setTimeout(function () {
				if (self.hiding || hide) {
					_remove(self.barX);
					_remove(self.barY);
					delete self.hiding;
					self._fixSB()
				}
			}, 0)
		},
		_end: function () {
			var self = this, o = self.options,
				delay = self.thumbX && _draggable(o.xThumb) || self.thumbY && _draggable(o.yThumb),
				dur = _num(o.animateHideDuration);
			self._trigger("stopped", null, {owner: self});
			if (self.skip || !self._vis()) {
				return self._hide(true)
			}
			delay = _num(delay ? o.hideDragThumbsDelay : o.hideThumbsDelay);
			self.timerEnd = setTimeout(function () {
				if (!self.timer && self.timerEnd) {
					if (_zero(dur)) {
						self._hide(true)
					} else {
						var bar = _valid(self.barX), bar2 = _valid(self.barY);
						if (!bar) {
							bar = bar2;
							bar2 = null
						}
						if (bar) {
							self.hiding = bar.animate({opacity: 0}, {
								duration: dur, complete: function () {
									self._hide()
								}, step: function (now) {
									if (bar2) {
										bar2.css("opacity", now)
									}
									if (self.skip && self.hiding) {
										self.hiding.stop()
									}
								}
							})
						}
					}
				}
				delete self.timerEnd
			}, _zero(delay) ? 5 : delay)
		},
		_clear: function () {
			if (this.timer) {
				clearTimeout(this.timer);
				delete this.timer
			}
			if (this.timerEnd) {
				clearTimeout(this.timerEnd);
				delete this.timerEnd
			}
		},
		_fire: function (t, e, x, y) {
			return this._trigger(t, e, {owner: this, left: x, top: y})
		},
		_skip: function (x, y) {
			var dir = this.options.direction, left = this._scroller(true) || 0, top = this._scroller() || 0, height = 0,
				width = 0, heightScroll = 0, widthScroll = 0;
			if (left) {
				width = left.clientWidth;
				widthScroll = left.scrollWidth;
				left = left.scrollLeft
			}
			if (top) {
				height = top.clientHeight;
				heightScroll = top.scrollHeight;
				top = top.scrollTop
			}
			if ((dir === "y" || width >= widthScroll) && (dir === "x" || height >= heightScroll)) {
				return true
			}
			if ((Math.abs(y) > Math.abs(x) || dir === "y") && dir !== "x") {
				return y > 0 && !top || y < 0 && top + height >= heightScroll
			}
			return x > 0 && !left || x < 0 && left + width >= widthScroll
		},
		_fixSB: function (hide) {
			var vert, hor, on = this._on;
			if (hide && on || !on && !hide) {
				return
			}
			vert = this._scroller();
			hor = this._scroller(true);
			if (on) {
				if (vert && !_aNull(on.y)) {
					vert.style.overflowY = on.y
				}
				if (hor && !_aNull(on.x)) {
					hor.style.overflowX = on.x
				}
				delete this._on;
				return
			}
			on = this._on = {};
			if (vert) {
				on.y = $(vert).css("overflowY");
				vert.style.overflowY = "hidden"
			}
			if (hor) {
				on.x = $(hor).css("overflowX");
				hor.style.overflowX = "hidden"
			}
		},
		_move: function (evt, end) {
			if (!this.evts) {
				return
			}
			var speed, arg = {owner: this}, time = (new Date).getTime(), self = this, maxSpeed = 3, oldX = self.x0,
				oldY = self.y0, speedX = self.speedX, speedY = self.speedY, oldTop = self.top, oldLeft = self.left,
				inBarY = self.inBarY, inBarX = self.inBarX, barX = self.barX, barY = self.barY, start = !self.drag,
				elem = self.element, touch = self._pointer ? evt.originalEvent : _touch(evt),
				x = touch ? touch.pageX : 0, y = touch ? touch.pageY : 0, src = _src(evt);
			if (self.click && self._pointer && Math.abs(self.x - x) < 3 && Math.abs(self.y - y) < 3) {
				return
			}
			delete self.click;
			if (self.skip) {
				return
			}
			self._fixSB(true);
			self._clear();
			if (end || !touch) {
				if (!self.skip && end === "end" && !start) {
					if (self.inBarX || self.inBarY) {
						self._end()
					} else {
						self._inertia()
					}
				}
				delete self.drag;
				return
			}
			if (start) {
				self.skip = self._skip(x - self.x, y - self.y);
				if (self.skip) {
					self._end()
				}
			} else {
				arg.deltaX = self.x - x;
				arg.deltaY = self.y - y
			}
			if (self.skip || !this._trigger(start ? "starting" : "scrolling", evt, arg)) {
				return
			}
			if (start) {
				speed = _valid(barX) || _valid(barY);
				oldX = self.x0 = x;
				oldLeft = self.left = self._getScroll(true);
				delete self.speedX;
				barX = self._bar(elem, true);
				inBarX = self.inBarX = _is(barX, src);
				oldY = self.y0 = y;
				oldTop = self.top = self._getScroll();
				delete self.speedY;
				barY = self._bar(elem);
				inBarY = self.inBarY = _is(barY, src);
				self._show(speed || inBarX || inBarY)
			} else {
				x = self.x - arg.deltaX;
				speed = (x - self.x) / (time - self.time);
				if (Math.abs(speed) > maxSpeed) {
					speed = speed > 0 ? maxSpeed : -maxSpeed
				}
				if (!speedX) {
					self.speedX = [0, 0, speed]
				} else {
					speedX[0] = speedX[1];
					speedX[1] = speedX[2];
					speedX[2] = speed
				}
				y = self.y - arg.deltaY;
				speed = (y - self.y) / (time - self.time);
				if (Math.abs(speed) > maxSpeed) {
					speed = speed > 0 ? maxSpeed : -maxSpeed
				}
				if (!speedY) {
					self.speedY = [0, 0, speed];
					if (self.dir) {
						self.dir = Math.abs(speed) >= Math.abs(self.speedX[2]) ? "y" : "x"
					}
				} else {
					speedY = self.speedY = [0, 0, speed];
					speedY[0] = speedY[1];
					speedY[1] = speedY[2];
					speedY[2] = speed
				}
			}
			self.drag = true;
			self.x = x;
			self.y = y;
			self.time = time;
			_stop(evt);
			x = inBarX ? oldLeft + Math.floor((x - oldX) * self.ratioX) : oldLeft - x + oldX;
			y = inBarY ? oldTop + Math.floor((y - oldY) * self.ratioY) : oldTop - y + oldY;
			self._scroll(x, y);
			this._trigger(start ? "started" : "scrolled", evt)
		},
		destroy: function () {
			if (this.evts) {
				this.element.unbind(this.evts);
				delete this.evts;
				if (this.showing) {
					this.showing.stop(true)
				}
				if (this.hiding) {
					this.hiding.stop(true)
				}
				this._clear();
				_remove(this.barX);
				_remove(this.barY);
				$.Widget.prototype.destroy.apply(this, arguments)
			}
			return this
		}
	});
	$.extend($.ui.igScroll, {version: "16.1.20161.2270"});
	$.ui.igScroll.defaults = {
		thumbOpacityDrag: 1,
		thumbOpacity: .5,
		animateShowDuration: 300,
		animateHideDuration: 500,
		hideThumbsDelay: 200,
		hideDragThumbsDelay: 1e3,
		xInertia: .8,
		yInertia: .85,
		marginLeft: 2,
		marginRight: 2,
		marginTop: 2,
		marginBottom: 2,
		xThumb: "show",
		yThumb: "show"
	};
	try {
		$(":jqmData(role='page')").live("pageshow", _find)
	} catch (ex) {
		_find(true);
		$(document).bind("igcontrolcreated", function (event, args) {
			var container = args.owner.scrollContainer();
			if (container.length === 0 && args.owner.container) {
				container = args.owner.container().find("[data-scroll]").eq(0)
			}
			container.igScroll({_find: true})
		})
	}
})(jQuery);
/*
//@ sourceMappingURL=E:\Work\6\967\src\DEV\jQuery\2016.1\Source\ClientUI\js\modules\infragistics.ui.scroll.js.map
*/

