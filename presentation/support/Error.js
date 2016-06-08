const ServerError = function(res, error) {
	const self = this,
		acceptsType = res.req.headers.accept;

	logging.error("Something went terribly wrong. Here's some info. %s", JSON.stringify(error));

	self.send = function(status) {
		var templateContext;

		res.setHeader('statusCode', status);
		switch(acceptsType) {
		case "application/json":
			res.setHeader('contentType', 'application/json');

			res.write(JSON.stringify({
				message: error.message,
				summary: error.summary,
				stacktrace: error.stacktrace,
				method: error.method,
				path: error.path
			}));
			res.end();
			break;
		case "text/html":
			templateContext = {
				message: error.message,
				summary: error.summary,
				stacktrace: error.stacktrace,
				method: error.method,
				path: error.path
			};

			res.setHeader('contentType', 'text/html');
			res.render("templates/support/error.ninja", templateContext);
			break;
		default:
			res.setHeader('contentType', 'application/json');

			res.write(JSON.stringify({
				message: error.message,
				summary: error.summary,
				stacktrace: error.stacktrace,
				method: error.method,
				path: error.path
			}));
			res.end();
			break;
		}
	}
};

module.exports = ServerError;