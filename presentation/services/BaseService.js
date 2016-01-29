var http = require('http');
var util = require('util');
var EventEmitter = require('events').EventEmitter;

var ServiceFactory = function() {
	var self = this;

	self.getBaseRequestOptions = function() {
		return {
			host: "127.0.0.1",
			port: 8000
		};
	};
};

var Service = function(options, res){
	var self = this,
		request, data = "";

	self.send = function(){
		request.end();
	};

	request = http.request(options, function(response) {
		response.setEncoding('utf8');
		response.on("data", function(chunk) {
			data += chunk;
		}).on('end', function() {
			self.emit('end', res, data);
			logging.info(data);
		}).on('error', function(e) {
			self.emit('error', e);
			logging.error(e.message);
		});
	});
	request.on('error', function(e) {
		self.emit('error', e);
		logging.error("An error occurred: %s", e.message);
	});
};

util.inherits(Service, EventEmitter);

module.exports = {
	ServiceFactory: ServiceFactory,
	Service: Service
};