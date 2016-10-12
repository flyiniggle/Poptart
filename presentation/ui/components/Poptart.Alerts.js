Poptart.Alerts = function(params) {
	var alertParams = params.alerts,
		alertList = [],
		alertParam, i;

	var Alerts = function(alerts) {
		var self = this;

		self.alerts = ko.observableArray(alerts);
	};

	var Alert = function(level, summary, message) {
		var self = this;

		self.level = level;
		self.summary = summary;
		self.message = message;
	};

	i = alertParams.length;

	while(i--) {
		alertParam = alertParams[i];
		alertList.push(new Alert(alertParam.level, alertParam.summary, alertParam.message));
	}

	return new Alerts(alertList);
};