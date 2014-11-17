/// <reference path='../../references.ts' />

module uniweb {

	export interface ITaskScope extends ng.IScope {
		tasks: Array<ToDoTask>;
		scoresModel: Array<number>;
		newTask: ToDoTask;
		selectedTask: ToDoTask;
		vm: HomeCtrl;
	}
}