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
				serverErrorInterior.innerHTML += nunjucks.render('support/error/error.ninja', JSON.parse(error.responseText));

				jQuery("body").prepend(serverErrorContainer);
				jQuery("#serverErrorClose").on("click", this.closeServerErrorNotification);
			},

			closeServerErrorNotification: function() {
				jQuery("#serverError").remove();
			}
		};

	}();

	S.AsyncService = Object.create(Poptart.Services.Service);

	S.AsyncService.makeRequest = function(options) {
		jQuery.extend(options, {
			type: "GET",
			accept: "application/json",
			contentType: "application/json"
		});

		return Promise.resolve(jQuery.ajax(options)).catch(function(e) {
			this.handleServerError(e);
			return [];
		}.bind(this));
	};

})();