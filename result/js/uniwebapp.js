var uniweb;
(function (uniweb) {
    'use strict';

    var ToDoTask = (function () {
        function ToDoTask(title, content, score) {
            this.title = title;
            this.content = content;
            this.score = score;
        }
        return ToDoTask;
    })();
    uniweb.ToDoTask = ToDoTask;
})(uniweb || (uniweb = {}));
var uniweb;
(function (uniweb) {
    

    var TaskRepository = (function () {
        function TaskRepository() {
            this.STORAGE_ID = 'uniweb-gondek-angularjs-typescript';
        }
        TaskRepository.prototype.get = function () {
            return JSON.parse(localStorage.getItem(this.STORAGE_ID) || '[]');
        };

        TaskRepository.prototype.put = function (tasks) {
            localStorage.removeItem(this.STORAGE_ID);

            for (var i = 0; i < tasks.length; i++) {
                tasks[i].content = tasks[i].content.toString();
            }

            var a = JSON.stringify(tasks);
            localStorage.setItem(this.STORAGE_ID, a);
        };
        return TaskRepository;
    })();
    uniweb.TaskRepository = TaskRepository;
})(uniweb || (uniweb = {}));
var uniweb;
(function (uniweb) {
    'use strict';

    var HomeCtrl = (function () {
        function HomeCtrl($scope, $sce, taskRepository) {
            this.$scope = $scope;
            this.$sce = $sce;
            this.taskRepository = taskRepository;
            this.showHome = true;
            this.showAllTasks = false;
            this.editSelectedTask = false;
            this.addNewTasks = false;
            $scope.vm = this;

            this.tasks = $scope.tasks = taskRepository.get();
            this.newTask = $scope.newTask = new uniweb.ToDoTask('New Task', 'New Content', 0);
            this.scoresModel = $scope.scoresModel = [0, 1, 2, 3, 4, 5];
        }
        HomeCtrl.prototype.onTasksChanges = function () {
            var z = this.tasks;
            alert(z);
        };

        HomeCtrl.prototype.onSaveButtonClick = function () {
            this.newTask.content = this.$sce.trustAsHtml(this.newTask.content);
            this.tasks.push(this.newTask);
            this.newTask = this.$scope.newTask = new uniweb.ToDoTask('New Task', 'New Content', 0);
            this.taskRepository.put(this.tasks);
        };

        HomeCtrl.prototype.showAddNewTasksClick = function () {
            this.showHome = false;
            this.showAllTasks = false;
            this.editSelectedTask = false;
            this.addNewTasks = true;
        };

        HomeCtrl.prototype.showAllTasksClick = function () {
            this.showHome = false;
            this.showAllTasks = true;
            this.editSelectedTask = false;
            this.addNewTasks = false;
        };

        HomeCtrl.prototype.showHomeClick = function () {
            this.showHome = true;
            this.showAllTasks = false;
            this.editSelectedTask = false;
            this.addNewTasks = false;
        };
        HomeCtrl.$inject = [
            '$scope',
            '$sce',
            'taskRepository'
        ];
        return HomeCtrl;
    })();
    uniweb.HomeCtrl = HomeCtrl;
})(uniweb || (uniweb = {}));
var uniweb;
(function (uniweb) {
    'use strict';

    var uniwebapp = angular.module('uniwebapp', ['ngSanitize']).controller('homeCtrl', uniweb.HomeCtrl).service('taskRepository', uniweb.TaskRepository);
})(uniweb || (uniweb = {}));
//# sourceMappingURL=uniwebapp.js.map
