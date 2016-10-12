var http = require('http');
var util = require('util');
var EventEmitter = require('events').EventEmitter;

var config = imports("config/config.js");

var Service = function(options, res) {
	var self = this,
		request, data = "",
		loggingName = "request-timing: " + options.path;

	// Constructor
	options.host = config.businiess.host;
	options.port = config.businiess.port;

	logging.profile(loggingName);

	request = http.request(options, function(response) {
		response.setEncoding('utf8');
		response.on("data", function(chunk) {
			data += chunk;
		}).on('end', function() {
			self.emit('end', res, data);
			logging.profile(loggingName);
		}).on('error', function(e) {
			self.emit('error', e);
			logging.error(e.message);
		});
	});
	request.on('error', function(e) {
		self.emit('error', e);
		logging.error("An error occurred: %s", e.message);
	});

	// Methods
	self.send = function() {
		request.end();
	};

	self.post = function(data) {
		if(typeof data === "object") {
			data = JSON.stringify(data);
		} else if (typeof data !== "string") {
			data = data.toString();
		}
		request.end(data);
	};
};

util.inherits(Service, EventEmitter);


var ServiceMarshaller = function(res, services) {
	var self = this,
		statusArray = [],
		resultsArray = [],
		service, i,
		l = services.length;

	// Constructor
	for(i = 0; i < l; i++) {
		statusArray.push(false);
		service = services[i];
		service.on('end', handleServiceResponse(i));
		service.on('error', function(e) {
			logging.error("Marshalled request failed: " + e.message);
			self.emit('error');
			services.forEach(function(req) {
				req.abort();
			});
		});
		service.send();
	}

	// Methods
	self.send = function() {
		for(i = 0; i < l; i++) {
			services[i].send();
		}
	};

	// Private
	function handleServiceResponse(i) {
		var index = i;

		return function(res, data) {
			resultsArray[index] = data;
			statusArray[index] = true;
			if(statusArray.indexOf(false) < 0) {
				self.emit("end", res, resultsArray);
			}
		};
	}
};

util.inherits(ServiceMarshaller, EventEmitter);

module.exports = {
	Service: Service,
	ServiceMarshaller: ServiceMarshaller
};