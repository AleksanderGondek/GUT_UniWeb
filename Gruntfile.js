module.exports = function(grunt) {

    var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            httpserver: {
                options: {
                    port: 9999,
                    hostname: 'localhost',
                    base: 'result',
                    keepalive: true
                }
            },
            server: {
                options: {
                    port: 8080,
                    hostname: 'localhost',
                    base: 'result',
                    keepalive: true,
                    middleware: function (connect, options) {
                        return [proxySnippet];
                    }
                },
                proxies: [
                                {
                                    context: '/ocena',
                                    host: 'localhost',
                                    port: 8888,
                                    https: false,
                                    xforward: false
                                },
                                {
                                    context: '/',
                                    host: 'localhost',
                                    port: 9999,
                                    https: false,
                                    xforward: false
                                }
                        ]
            }
        },
        copy: {
            angularLibs: {
                src: ['dependencies/angularjs-1.3.1/angular.min.js'],
                dest: 'result/js',
                mode: true,
                timestamp: true,
                expand: true,
                flatten: true
            },
            angularApp: {
                src: ['src/typescript_output/*', 'src/'],
                dest: 'result/js',
                mode: true,
                timestamp: true,
                expand: true,
                flatten: true
            },
            lab1Page: {
                src: ['src/lab1/html/*'],
                dest: 'result',
                mode: true,
                timestamp: true,
                expand: true,
                flatten: true
            },
            lab1Js: {
                src: ['src/lab1/js/*'],
                dest: 'result/js',
                mode: true,
                timestamp: true,
                expand: true,
                flatten: true
            },
            lab1Css: {
                src: ['dependencies/jquery-2.1.1/*.css', 'src/lab1/css/*.css'],
                dest: 'result/css',
                mode: true,
                timestamp: true,
                expand: true,
                flatten: true
            },
            lab1Images: {
                src: ['src/lab1/img/*.jpg'],
                dest: 'result/img',
                mode: true,
                timestamp: true,
                expand: true,
                flatten: true
            },
            jQueryLibs: {
                src: ['dependencies/jquery-2.1.1/*.js'],
                dest: 'result/js',
                mode: true,
                timestamp: true,
                expand: true,
                flatten: true
            }
        },
        ts: {
            build: {
                src: ['src/*.ts'],
                reference: './src/reference.ts',
                outDir: 'src/typescript_output',
                options: {
                    sourceMap: true,
                    declaration: false,
                    removeComments: true
                }
            }
       },
       karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
       },
       execute: {
            restServ: {
                src: ['./dependencies/manusLabServer/lab1server.js']
            }
        },
        concurrent: {
            hostit: {
               tasks: ['connect:httpserver', 'execute:restServ' ,'configureProxies:server', 'connect:server'],
                options: {
                    logConcurrentOutput: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-connect-proxy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-execute');
    grunt.loadNpmTasks('grunt-concurrent'); // TODO: Find a way to fix it


    grunt.registerTask('ts-build', ['ts:build']);
    grunt.registerTask('copy-js', ['copy:angularLibs', 'copy:angularApp']);
    
    grunt.registerTask('test', ['karma:unit']);
    
    grunt.registerTask('setUp-lab1files', ['copy:jQueryLibs', 'copy:lab1Page', 'copy:lab1Js', 'copy:lab1Css', 'copy:lab1Images']);
    grunt.registerTask('host-lab1rest', ['execute:restServ']);
    grunt.registerTask('host-lab1http', ['connect:httpserver']);
    grunt.registerTask('host', ['configureProxies:server', 'connect:server']);
};