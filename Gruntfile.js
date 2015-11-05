module.exports = function (grunt) {

    var fs = require("fs");
    var config = require('./config');

    grunt.loadNpmTasks('grunt-ngdocs');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.initConfig({
        ngdocs: {
            options: {
                dest: 'docs/api',
                html5Mode: false,
                startPage: '/api',
				editExample: false,
                template: 'assets/docs/templates/index.tmpl',
                styles: [
                    'assets/docs/css/prettify.css',
                    'assets/docs/css/bootstrap-flatly.min.css'
                ]
            },
            api: {
                src: config.angularJS,
                title: 'API Documentation'
            }
        },

        connect: {
            options: {
                hostname: config.server.hostname,
                port: config.server.port,
                base: 'docs/api',
                keepalive: true,
                open: false
            },
            server: {}
        },
        clean: ['docs']
    });

    grunt.registerTask('default', ['clean', 'ngdocs', 'connect']);

};
