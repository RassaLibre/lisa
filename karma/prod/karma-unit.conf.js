module.exports = function(config){
    config.set({

        basePath : '../../',

        files: [
            'build/js/vendor/angular.min.js',
            'build/js/vendor/angular-route.min.js',
            'app/js/vendor/angular-mocks.js',
            'build/js/compiled.js',
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