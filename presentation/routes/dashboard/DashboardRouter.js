var DashboardController = imports("controllers/dashboard/DashboardController.js");

module.exports = function(express) {
	var router = express.Router(),
		dashboardController = new DashboardController();

	// Middleware
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
