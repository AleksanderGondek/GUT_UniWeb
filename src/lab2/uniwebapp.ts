/// <reference path='references.ts' />

module uniweb {
    'use strict';

    var uniwebapp = angular.module('uniwebapp', ['ngSanitize'])
            .controller('homeCtrl', HomeCtrl)
    		.service('taskRepository', TaskRepository)
    		.filter("myCustomFilter", myCustomFilter);
            //.directive('todoBlur', todoBlur)
            // .directive('todoFocus', todoFocus)
            //.service('todoStorage', TodoStorage);
}