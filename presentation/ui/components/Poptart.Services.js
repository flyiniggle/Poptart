Poptart.Services = function() {
	return {};
}();

Poptart.Services.service = function() {

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