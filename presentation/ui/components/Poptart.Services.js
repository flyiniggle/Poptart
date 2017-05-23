(function() {
	var S;

	S = Poptart.Services = {};

	S.Service = function() {

		return {
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
				serverErrorInterior.innerHTML += Poptart.nunjucks.render('presentation/templates/support/error/shared/error.ninja', JSON.parse(error.responseText));

				jQuery("body").prepend(serverErrorContainer);
				jQuery("#serverErrorClose").on("click", this.closeServerErrorNotification);
			},

			closeServerErrorNotification: function() {
				jQuery("#serverError").remove();
			}
		};

	}();

	(function() {
		S.AsyncService = Object.create(Poptart.Services.Service);

		S.AsyncService.promiseMeACache = function(options) {
			var promise, cache;

			jQuery.extend({
				type: "GET",
				accept: "application/json",
				contentType: "application/json"
			}, options);

			if(!promise) {
				promise = Promise.resolve(jQuery.ajax(options)).catch(function(e) {
					this.handleServerError(e);
					return;
				}.bind(this)).then(function(data) {
					cache = data;
					return cache;
				});

				return promise;
			} else if (!promise.isFulfilled()) {
				return promise;
			}

			return Promise.resolve(cache);
		};

		S.AsyncService.promiseMe = function(options) {
			jQuery.extend({
				type: "GET",
				accept: "application/json",
				contentType: "application/json"
			}, options);

			return Promise.resolve(jQuery.ajax(options)).catch(function(e) {
				this.handleServerError(e);
				return;
			}.bind(this)).then(function(data) {
				return data;
			});
		};
	})();

})();