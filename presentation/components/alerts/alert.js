var Alert = function(level, summary, message) {
	var self = this,
		levels = ["info", "warning", "error"];

	// Constructor
	if(levels.indexOf(level) < 0) {
		throw new Error("Invalid level.");
	}

	self.level = level;
	self.summary = summary ? summary.toString() : "";
	self.message = message ? message.toString() : "";

	// Methods
	self.stringify = function() {
		return JSON.stringify({
			level: self.level,
			summary: self.summary,
			message: self.message
		});
	};
};

module.exports = Alert;