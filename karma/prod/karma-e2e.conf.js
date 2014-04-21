module.exports = function(config){
    config.set({

        basePath : '../../',
        
        files : [
            'test/e2e/**/*.test.js',
            'build/js/compiled.js'      
        ],

        autoWatch : true,        

        //singleRun : true,

        reporters : 'dots',

        frameworks : ['ng-scenario'],

        browsers : ['Chrome'],

        proxies : {
          '/': 'http://localhost:3000/'
        },

        urlRoot : '/__e2e/',

        plugins : [
                'karma-junit-reporter',
                'karma-chrome-launcher',
                'karma-firefox-launcher',
                'karma-jasmine',
                'karma-ng-scenario'
                ],

        junitReporter : {
          outputFile: 'test_out/e2e.xml',
          suite: 'e2e'
        }

    });
};