var util = require('util');
var EventEmitter = require('events').EventEmitter;

var Service = function() {
	var self = this;

	self.getBaseRequestOptions = function() {
		return {
			host: "127.0.0.1",
			port: 8000
		};
	};
};

util.inherits(Service, EventEmitter);

module.exports = Service;