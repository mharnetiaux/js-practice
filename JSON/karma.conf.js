// Karma configuration
'use strict';
let webpack = require("webpack"),
    path = require("path");

module.exports = function (config) {
    ///let customBrowsers = ['Chrome', 'Firefox', 'PhantomJS'];
    let customBrowsers = ['PhantomJS'];
    if (process.env.TRAVIS) {
        customBrowsers = ['PhantomJS']
    }

    config.set({
        frameworks: ['mocha'],
        files: [
            'test/**/*.js'
        ],
        exclude: [],
        preprocessors: {
            'test/**/*.js': ['webpack']
        },
        webpack: {
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        include: [
                            path.resolve(__dirname, 'src'),
                            path.resolve(__dirname, 'test'),

                        ],
                        exclude: /node_modules/,
                        use: [
                            {
                                loader: 'babel-loader',
                                options: {
                                    presets: [
                                        ['es2015', { modules: false }]
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        enforce: 'post',
                        test: /\.js$/,
                        include: [
                            path.resolve(__dirname, 'src'),
                            path.resolve(__dirname, 'test'),

                        ],
                        exclude: /node_modules/,
                        use: [
                            {
                                loader: 'istanbul-instrumenter-loader'
                            }
                        ]
                    }
                ]
            }
        },

        webpackMiddleware: {
            noInfo: true,
            stats: {
                chunks: false
            }
        },

        coverageReporter: {
            ///dir: 'dis/coverage/',
            reporters: [
                {'type': 'text'},
                {'type': 'html', dir: 'coverage'},
                {'type': 'lcov'}
            ]
        },

        reporters: ['mocha', 'coverage-istanbul'],


        coverageIstanbulReporter: {
            reports: ['html', 'lcovonly','text-summary'],
            dir: path.join(__dirname, 'coverage'),
            fixWebpackSourcePaths: true,
            'report-config': {
                html: {
                    subdir: 'report'
                }
            },
            thresholds:{
                emitWarning: false,
                global: {
                    statements: 100,
                    lines: 100,
                    branches: 100,
                    functions: 100
                },
                each:{
                    statements: 100,
                    lines: 100,
                    branches: 100,
                    functions: 100,
                    overrides: {

                    }
                }
            }
        },


        port: 9876,
        colors: true,
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: customBrowsers,

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
};
