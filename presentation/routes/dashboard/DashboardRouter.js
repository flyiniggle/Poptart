var DashboardController = imports("controllers/dashboard/DashboardController.js");

module.exports = function(express){
	var router = express.Router(),
		dashboardController = new DashboardController();

	// Middleware
	router.use("/scripts", express.static(loadPath("ui/modules/dashboard/scripts")));
	router.use("/css", express.static(loadPath("ui/modules/dashboard/css")));

	router.use('/', express.static(loadPath("ui/index.html")));
	router.use('/index', express.static(loadPath("ui/index.html")));

	return router;
};
