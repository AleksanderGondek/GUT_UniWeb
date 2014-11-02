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
                src: ['dependencies/angularjs-1.3.1/*.js'],
                dest: 'result/js',
                mode: true,
                timestamp: true,
                expand: true,
                flatten: true
            },
            lab2Css: {
                src: ['dependencies/sb-admin-2/css/bootstrap.min.css',
                'dependencies/sb-admin-2/css/plugins/metisMenu/metisMenu.min.css',
                'dependencies/sb-admin-2/css/sb-admin-2.css',
                'dependencies/sb-admin-2/font-awesome-4.1.0/css/font-awesome.min.css'],
                dest: 'result/css',
                mode: true,
                timestamp: true,
                expand: true,
                flatten: true
            },
            lab2Js: {
                src: ['dependencies/sb-admin-2/js/jquery-1.11.0.js',
                'dependencies/sb-admin-2/js/bootstrap.min.js',
                'dependencies/sb-admin-2/js/plugins/metisMenu/metisMenu.min.js',
                'dependencies/sb-admin-2/js/sb-admin-2.js'],
                dest: 'result/js',
                mode: true,
                timestamp: true,
                expand: true,
                flatten: true
            },
            lab2Fonts: {
                src: ['dependencies/sb-admin-2/font-awesome-4.1.0/fonts/fontawesome-webfont.woff',
                'dependencies/sb-admin-2/font-awesome-4.1.0/fonts/fontawesome-webfont.ttf'],
                dest: 'result/fonts',
                mode: true,
                timestamp: true,
                expand: true,
                flatten: true
            },
            lab2Page: {
                src: ['src/lab2/components/home/*.html'],
                dest: 'result',
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
                src: ['src/lab2/*.ts'],
                out: 'result/js/uniwebapp.js',
                //outDir: 'src/typescript_output',
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
    
    grunt.registerTask('setUp-lab1', ['copy:jQueryLibs', 'copy:lab1Page', 'copy:lab1Js', 'copy:lab1Css', 'copy:lab1Images']);
    grunt.registerTask('setUp-lab2', ['ts-build', 'copy:angularLibs', 'copy:lab2Js', 'copy:lab2Fonts', 'copy:lab2Css', 'copy:lab2Page']);
    grunt.registerTask('host-rest', ['execute:restServ']);
    grunt.registerTask('host-http', ['connect:httpserver']);
    grunt.registerTask('host', ['configureProxies:server', 'connect:server']);
};