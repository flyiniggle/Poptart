// Karma configuration
// Generated on Mon Nov 28 2016 09:16:47 GMT-0500 (Eastern Standard Time)
const path = require("path");
const webpackTestConfig = require(path.join(__dirname, "presentation", "test", "webpack.config.js"));


module.exports = function(config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: './presentation/',

		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['mocha', 'chai', 'sinon', 'jquery-chai'],

		// list of files / patterns to load in the browser

		// list of files to exclude
		exclude: [],

		proxies: {
			'/ui/': '/base/static/ui/'
		},

		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			"test/**/test.js": ["webpack"]
		},

		webpack: {
			module: webpackTestConfig[0].module,
			resolve: webpackTestConfig[0].resolve
		},

		webpackMiddleware: {
			// webpack-dev-middleware configuration
			// i.e.
			noInfo: false,
			// and use stats to turn off verbose output
			stats: {
				// options i.e.
				chunks: true
			}
		},

		plugins: [
			require("karma-webpack"),
			'karma-mocha',
			'karma-chai',
			'karma-sinon',
			'karma-jquery-chai',
			'karma-phantomjs-launcher',
			'karma-chrome-launcher',
			'karma-firefox-launcher',
			'karma-edge-launcher'
		],

		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['progress'],

		// web server port
		port: 9000,

		// enable / disable colors in the output (reporters and logs)
		colors: true,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,

		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		//browsers: ['Chrome', 'PhantomJS', 'Firefox', 'Edge'],

		client: {
			captureConsole: true,
			mocha: {
				timeout: 10000
			}
		},

		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false,

		// Concurrency level
		// how many browser should be started simultaneous
		concurrency: 2
	});
};
