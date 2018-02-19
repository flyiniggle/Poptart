// Poptart.Services
////////////////////////////////
import jQuery from "jquery";

import { nunjucksEnvironment } from "Lib/Poptart.Nunjucks";

const Service = {
	handleServerError: function(error) {
		var serverErrorContainer = document.createElement("div"),
			serverErrorInterior = document.createElement("div"),
			serverErrorClose = document.createElement("span");

		serverErrorContainer.setAttribute("id", "serverError");
		serverErrorInterior.setAttribute("id", "serverErrorInterior");
		serverErrorClose.setAttribute("id", "serverErrorClose");
		serverErrorClose.className = "ion-android-close";

		serverErrorContainer.appendChild(serverErrorInterior);
		serverErrorInterior.appendChild(serverErrorClose);
		serverErrorInterior.innerHTML += nunjucksEnvironment.render('presentation/templates/support/error/shared/error.ninja', JSON.parse(error.responseText));

		jQuery("body").prepend(serverErrorContainer);
		jQuery("#serverErrorClose").on("click", this.closeServerErrorNotification);
	},

	closeServerErrorNotification: function() {
		jQuery("#serverError").remove();
	}
};


const AsyncService = Object.create(Service);

AsyncService.promiseMeACache = function(options) {
	var promise, cache, config;

	config = Object.assign({
		type: "GET",
		accept: "application/json",
		contentType: "application/json"
	}, options);

	if(!promise) {
		promise = Promise.resolve(jQuery.ajax(config)).catch(function(e) {
			this.handleServerError(e);
			return;
		}.bind(this)).then(function(data) {
			cache = data;
			return cache;
		});

		return promise;
	} else if(!promise.isFulfilled()) {
		return promise;
	}

	return Promise.resolve(cache);
};

AsyncService.promiseMe = function(options) {
	var config = Object.assign({
		type: "GET",
		accept: "application/json",
		contentType: "application/json"
	}, options);

	return Promise.resolve(jQuery.ajax(config))
	.catch(function(e) {
		this.handleServerError(e);
		return;
	}.bind(this));
};

export { Service, AsyncService };