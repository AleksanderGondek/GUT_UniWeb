/// <reference path='../../references.ts' />

module uniweb {
    'use strict';

    // The main controller for the app. The controller:
    // - retrieves and persists the model via the taskRepository service
    // - exposes the model to the template and provides event handlers
    //
    export class HomeCtrl {
        private tasks: Array<ToDoTask>;

        // $inject annotation.
        // It provides $injector with information about dependencies to be injected into constructor
        // it is better to have it close to the constructor, because the parameters must match in count and type.
        // See http://docs.angularjs.org/guide/di
        public static $inject = [
            '$scope',
            '$sce',
            'taskRepository'
        ];

        public newTask: ToDoTask;
        public selectedTask: ToDoTask;
        public scoresModel: Array<number>;
        public showHome: boolean = true;
        public showAllTasks: boolean = false;
        public editSelectedTask: boolean = false;
        public addNewTasks: boolean = false;

        // dependencies are injected via AngularJS $injector
        // controller's name is registered in Application.ts and specified from ng-controller attribute in index.html
        constructor(
            private $scope: ITaskScope,
            private $sce: ng.sanitize.ISanitizeService,
            private taskRepository: ITaskRepository
        )
        {
            // 'vm' stands for 'view model'. We're adding a reference to the controller to the scope
            // for its methods to be accessible from view / HTML
            $scope.vm = this;

            this.tasks = $scope.tasks = taskRepository.get();            
            this.newTask = $scope.newTask = new ToDoTask('New Task', 'New Content', 0);
            this.selectedTask = $scope.selectedTask = null;
            this.scoresModel = $scope.scoresModel = [0,1,2,3,4,5];

            //$scope.$watch('tasks', () => this.onTasksChanges(), true);
            //$scope.$watch('newTask.comments', () => this.WonNewCommentChanges(), true);
        }

        onTasksChanges() {
            var z = this.tasks;
            alert(z);
        }

        onSaveButtonClick() {
            this.newTask.content = this.$sce.trustAsHtml(this.newTask.content);
            this.tasks.push(this.newTask);
            this.newTask = this.$scope.newTask = new ToDoTask('New Task', 'New Content', 0);
            this.taskRepository.put(this.tasks);
        }

        removeSelectedTask(index) {
            this.selectedTask = this.tasks[index];
            
            this.showHome = true;
            this.showAllTasks = false;
            this.editSelectedTask = false;
            this.addNewTasks = false;  
        }

        editTask(index) {
            this.selectedTask = this.tasks[index];
            this.showHome = false;
            this.showAllTasks = false;
            this.editSelectedTask = true;
            this.addNewTasks = false;  
        }

        showAddNewTasksClick() {
            this.showHome = false;
            this.showAllTasks = false;
            this.editSelectedTask = false;
            this.addNewTasks = true;
        }

        showAllTasksClick() {
            this.showHome = false;
            this.showAllTasks = true;
            this.editSelectedTask = false;
            this.addNewTasks = false;
        }

        showHomeClick() {
            this.showHome = true;
            this.showAllTasks = false;
            this.editSelectedTask = false;
            this.addNewTasks = false;            
        }
    }
}