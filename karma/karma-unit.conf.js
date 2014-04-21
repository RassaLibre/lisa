module.exports = function(config){
	config.set({

		basePath : '../',

		files: [
			'app/js/vendor/angular.min.js',
			'app/js/vendor/angular-route.min.js',
			'app/js/vendor/angular-mocks.js',
			'app/js/dist/dist.js',
			'test/unit/**/*.test.js',
		],

		exclude: [
		],

		autoWatch : true,

		reporters: 'dots',

		frameworks: ['jasmine'],
		
		browsers: ['Chrome'],

	    plugins : [
	        'karma-junit-reporter',
	        'karma-chrome-launcher',
	        'karma-firefox-launcher',
	        'karma-jasmine'
	    ],

	    junitReporter : {
	    	outputFile: 'test_out/unit.xml',
	    	suite: 'unit'
	    }

	});
}