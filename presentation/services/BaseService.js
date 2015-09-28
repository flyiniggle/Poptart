var Service = function() {
	var self = this;

	self.getBaseRequestOptions = function() {
		return {
			host: "127.0.0.1",
			port: 8000
		};
	};
};

module.exports = Service;