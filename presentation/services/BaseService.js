var http = require('http');
var util = require('util');
var EventEmitter = require('events').EventEmitter;

var config = imports("config/config.js");

var Service = function(options, res){
	var self = this,
		request, data = "";

	self.send = function(){
		request.end();
	};

	options.host = config.businiess.host;
	options.port = config.businiess.port;

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


var ServiceMarshaller = function(services) {
	var self = this,
		statusArray = [],
		resultsArray = [],
		service, i,
		l = services.length;

	for(i=0; i<l; i++){
		statusArray.push(false);
		service = services[i];
		service.on('end', function() {
			var index = i;
			return function(res, data) {
				resultsArray[index] = data;
				statusArray[index] = true;
				if(statusArray.indexOf(false) < 0){
					self.emit("end", resultsArray);
				}
			};
		}());
		service.send();
	}

	self.send = function(){
		for(i = 0; i < l; i++) {
			services[i].send();
		}
	}
};

util.inherits(ServiceMarshaller, EventEmitter);

module.exports = {
	Service: Service,
	ServiceMarshaller: ServiceMarshaller
};