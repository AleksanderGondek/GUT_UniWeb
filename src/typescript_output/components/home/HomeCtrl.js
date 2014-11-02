var uniweb;
(function (uniweb) {
    'use strict';

    var HomeCtrl = (function () {
        function HomeCtrl($scope, taskRepository) {
            var _this = this;
            this.$scope = $scope;
            this.taskRepository = taskRepository;
            this.tasks = $scope.tasks = taskRepository.get();

            $scope.newTask = new uniweb.ToDoTask('new task', new Array(), new Array(), 0);
            $scope.newTask.comments.push('some comment');
            $scope.newTask.tasks.push(new uniweb.SingleTask('task title', new Array()));

            $scope.vm = this;

            $scope.$watch('tasks', function () {
                return _this.onNewTaskChanges();
            }, true);
        }
        HomeCtrl.prototype.onNewTaskChanges = function () {
            var z = this.$scope.newTask.title;
        };
        HomeCtrl.$inject = [
            '$scope',
            'taskRepository'
        ];
        return HomeCtrl;
    })();
    uniweb.HomeCtrl = HomeCtrl;
})(uniweb || (uniweb = {}));
//# sourceMappingURL=HomeCtrl.js.map
