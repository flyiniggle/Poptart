var DashboardController = imports("controllers/dashboard/DashboardController.js");

module.exports = function(express) {
	var router = express.Router(),
		dashboardController = new DashboardController();

	// Middleware
	router.use("/scripts", express.static(loadPath("ui/modules/dashboard/scripts")));
	router.use("/css", express.static(loadPath("ui/modules/dashboard/css")));

	router.get('/', function(req, res) {
		res.render("index.ninja");
	});
	router.get('/index', function(req, res) {
		res.render("index.ninja");
	});
	router.use('/summary/account', dashboardController.getAccountDashboardData);
	router.use('/summary/security', dashboardController.getSecuritiesDashboardData);

	return router;
};
